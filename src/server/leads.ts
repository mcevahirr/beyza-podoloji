import "server-only";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import type { Appointment } from "@/lib/validation";

export type Lead = Appointment & { id: string; createdAt: string };

/**
 * Randevu taleplerini saklar.
 * - LEAD_WEBHOOK_URL tanımlıysa talebi oraya POST eder (Make/Zapier/n8n, Slack, Google Sheets vb.).
 * - Ayrıca LEADS_FILE (varsayılan: data/leads.jsonl) dosyasına satır olarak ekler.
 * İleride veritabanına geçmek için yalnızca bu dosya değiştirilir.
 */
export async function saveLead(input: Appointment): Promise<Lead> {
  const lead: Lead = { ...input, id: crypto.randomUUID(), createdAt: new Date().toISOString() };

  const tasks: Promise<unknown>[] = [];

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    tasks.push(
      fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(5000),
      }),
    );
  }

  if (process.env.LEADS_STORAGE !== "off") {
    const file = process.env.LEADS_FILE || path.join(process.cwd(), "data", "leads.jsonl");
    tasks.push(mkdir(path.dirname(file), { recursive: true }).then(() => appendFile(file, JSON.stringify(lead) + "\n", "utf8")));
  }

  const results = await Promise.allSettled(tasks);
  for (const r of results) {
    if (r.status === "rejected") console.error("[leads] kayıt hatası:", r.reason);
  }
  return lead;
}
