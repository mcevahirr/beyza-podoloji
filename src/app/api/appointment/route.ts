import { NextResponse, type NextRequest } from "next/server";
import { whatsappLink } from "@/config/site";
import { rateLimit } from "@/lib/rate-limit";
import { appointmentSchema } from "@/lib/validation";
import { saveLead } from "@/server/leads";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  const limited = rateLimit(`appointment:${ip}`);
  if (!limited.ok) {
    return NextResponse.json(
      { ok: false, error: "Çok fazla deneme yaptınız. Lütfen biraz sonra tekrar deneyin veya WhatsApp'tan yazın." },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Geçersiz istek." }, { status: 400 });
  }

  const parsed = appointmentSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      fieldErrors[key] ??= issue.message;
    }
    return NextResponse.json({ ok: false, error: "Lütfen formu kontrol edin.", fieldErrors }, { status: 422 });
  }

  const data = parsed.data;
  // Bot tuzağı doluysa sessizce başarılı dön.
  if (data.website) return NextResponse.json({ ok: true });

  await saveLead(data);

  const text = [
    "Merhaba Beyza Hanım, web sitenizden randevu talebi gönderdim.",
    `Ad Soyad: ${data.name}`,
    `Telefon: ${data.phone}`,
    data.service && `Hizmet: ${data.service}`,
    data.message && `Not: ${data.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  return NextResponse.json({ ok: true, whatsappUrl: whatsappLink(text) });
}
