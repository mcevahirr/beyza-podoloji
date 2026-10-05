"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/config/site";
import { services } from "@/content/services";
import { WhatsAppIcon } from "./Icons";

type Status = { state: "idle" | "sending" | "done" | "error"; message?: string };

export function AppointmentForm({ defaultService = "" }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: fd.get("name"),
      phone: fd.get("phone"),
      service: fd.get("service") ?? "",
      message: fd.get("message") ?? "",
      consent: fd.get("consent") === "on",
      website: fd.get("website") ?? "",
    };

    setStatus({ state: "sending" });
    setErrors({});

    // Statik demo yayınında API yoktur: mesaj doğrudan WhatsApp'a gönderilir.
    if (process.env.NEXT_PUBLIC_STATIC_EXPORT === "1") {
      if (String(payload.name).trim().length < 2 || String(payload.phone).replace(/\D/g, "").length < 10 || !payload.consent) {
        setErrors({
          ...(String(payload.name).trim().length < 2 ? { name: "Lütfen adınızı ve soyadınızı yazın." } : {}),
          ...(String(payload.phone).replace(/\D/g, "").length < 10 ? { phone: "Geçerli bir telefon numarası girin." } : {}),
          ...(!payload.consent ? { consent: "KVKK metnini onaylamanız gerekiyor." } : {}),
        });
        setStatus({ state: "error", message: "Lütfen formu kontrol edin." });
        return;
      }
      const text = [
        "Merhaba Beyza Hanım, web sitenizden randevu talebi gönderdim.",
        `Ad Soyad: ${payload.name}`,
        `Telefon: ${payload.phone}`,
        payload.service && `Hizmet: ${payload.service}`,
        payload.message && `Not: ${payload.message}`,
      ].filter(Boolean).join("\n");
      form.reset();
      setStatus({ state: "done", message: "Randevunuzu netleştirmek için WhatsApp açılıyor." });
      window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
      return;
    }

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErrors(data.fieldErrors ?? {});
        setStatus({ state: "error", message: data.error ?? "Bir hata oluştu." });
        return;
      }
      form.reset();
      setStatus({ state: "done", message: "Talebiniz alındı. Randevunuzu netleştirmek için WhatsApp açılıyor." });
      if (data.whatsappUrl) window.open(data.whatsappUrl, "_blank", "noopener,noreferrer");
    } catch {
      setStatus({ state: "error", message: "Bağlantı hatası. Lütfen WhatsApp'tan doğrudan yazın." });
    }
  }

  const field = "mt-1.5 w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink outline-none transition placeholder:text-muted/60 focus:border-brand focus:ring-4 focus:ring-brand/15";
  const err = (k: string) => errors[k] && <p id={`${k}-error`} className="mt-1 text-sm text-red-600">{errors[k]}</p>;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl border border-line bg-surface p-6 shadow-sm md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Ad Soyad
          <input name="name" required autoComplete="name" className={field} placeholder="Adınız Soyadınız" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
          {err("name")}
        </label>
        <label className="block text-sm font-medium text-ink">
          Telefon
          <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} placeholder="05xx xxx xx xx" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
          {err("phone")}
        </label>
      </div>
      <label className="block text-sm font-medium text-ink">
        İlgilendiğiniz hizmet
        <select name="service" defaultValue={defaultService} className={field}>
          <option value="">Seçiniz (isteğe bağlı)</option>
          {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
          <option value="Diğer">Diğer</option>
        </select>
        {err("service")}
      </label>
      <label className="block text-sm font-medium text-ink">
        Mesajınız
        <textarea name="message" rows={4} maxLength={1000} className={field} placeholder="Şikayetinizi kısaca yazabilirsiniz." />
        {err("message")}
      </label>
      <div aria-hidden className="hidden">
        <label>Web sitesi<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className="flex items-start gap-3 text-sm text-muted">
        <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 accent-brand" />
        <span>
          <Link href="/kvkk" className="font-medium text-brand-strong underline underline-offset-2">KVKK Aydınlatma Metni</Link>&apos;ni okudum, iletişim amacıyla verilerimin işlenmesini onaylıyorum.
        </span>
      </label>
      {err("consent")}

      <button type="submit" disabled={status.state === "sending"} className="btn-primary w-full justify-center py-4 disabled:opacity-60">
        <WhatsAppIcon className="h-5 w-5" />
        {status.state === "sending" ? "Gönderiliyor..." : "Randevu Talebi Gönder"}
      </button>

      <p role="status" aria-live="polite" className={status.state === "error" ? "text-sm text-red-600" : "text-sm text-brand-strong"}>
        {status.message}
      </p>
    </form>
  );
}
