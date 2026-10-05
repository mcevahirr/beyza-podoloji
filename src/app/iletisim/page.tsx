import { AppointmentForm } from "@/components/AppointmentForm";
import { ClockIcon, InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero } from "@/components/ui";
import { fullAddress, site, whatsappLink } from "@/config/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "İletişim ve Randevu",
  description: "Podolog Beyza Nur Daşdemir iletişim bilgileri, adres, Google Haritalar konumu ve WhatsApp randevu hattı.",
  path: "/iletisim",
});

export default function ContactPage() {
  const items = [
    { icon: WhatsAppIcon, label: "WhatsApp", value: site.phoneDisplay, href: whatsappLink(), external: true },
    { icon: PhoneIcon, label: "Telefon", value: site.phoneDisplay, href: `tel:+${site.whatsapp}` },
    { icon: InstagramIcon, label: "Instagram", value: site.social.instagramHandle, href: site.social.instagram, external: true },
    { icon: PinIcon, label: "Adres", value: fullAddress() },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana Sayfa", path: "/" }, { name: "İletişim", path: "/iletisim" }])} />
      <PageHero eyebrow="İletişim" title="Randevu ve iletişim" intro="En hızlı yanıt için WhatsApp'tan yazabilir ya da formu doldurabilirsiniz." crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "İletişim", href: "/iletisim" }]} />

      <section className="container-x grid gap-10 py-16 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {items.map(({ icon: Icon, label, value, href, external }) => {
            const inner = (
              <>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand-strong"><Icon className="h-6 w-6" /></span>
                <span><span className="block text-sm text-muted">{label}</span><span className="block font-semibold text-ink">{value}</span></span>
              </>
            );
            const cls = "flex items-center gap-4 rounded-3xl border border-line bg-surface p-5";
            return href ? (
              <a key={label} href={href} className={`${cls} transition hover:border-brand`} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{inner}</a>
            ) : (
              <div key={label} className={cls}>{inner}</div>
            );
          })}
          <div className="rounded-3xl border border-line bg-surface p-5">
            <p className="flex items-center gap-2 font-semibold text-ink"><ClockIcon className="h-5 w-5 text-brand" /> Çalışma saatleri</p>
            <dl className="mt-3 space-y-1.5 text-sm">
              {site.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4"><dt className="text-muted">{h.days}</dt><dd className="font-medium text-ink">{h.time}</dd></div>
              ))}
            </dl>
          </div>
        </div>
        <AppointmentForm />
      </section>

      <section className="container-x">
        <h2 className="font-display text-2xl font-semibold text-ink">Konum</h2>
        <MapEmbed className="mt-6" />
      </section>
    </>
  );
}
