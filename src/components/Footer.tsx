import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { fullAddress, mapsDirectionsUrl, nav, site, whatsappLink } from "@/config/site";
import { services } from "@/content/services";
import { ClockIcon, InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src={logo} alt="" width={56} height={56} className="h-14 w-14 rounded-full" />
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-white">{site.shortName}</span>
              <span className="block text-xs text-white/60">Podolog · {site.tagline}</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Hijyenik ortamda, kişiye özel podolojik ayak bakımı. Sağlıklı adımlar için yanınızdayız.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20">
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-white">Sayfalar</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-white">Hizmetler</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/hizmetler/${s.slug}`} className="hover:text-white">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-white">İletişim</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3"><PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" /><a href={mapsDirectionsUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white">{fullAddress()}</a></li>
            <li className="flex gap-3"><PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" /><a href={`tel:+${site.whatsapp}`} className="hover:text-white">{site.phoneDisplay}</a></li>
            {site.hours.map((h) => (
              <li key={h.days} className="flex gap-3"><ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" /><span>{h.days}: {h.time}</span></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.</p>
          <p>
            <Link href="/kvkk" className="hover:text-white">KVKK Aydınlatma Metni</Link>
            <span className="mx-2">·</span>
            Sitedeki bilgiler tanı ve tedavi yerine geçmez.
          </p>
        </div>
      </div>
    </footer>
  );
}
