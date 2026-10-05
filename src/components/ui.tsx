import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { whatsappLink } from "@/config/site";
import type { Img } from "@/content/media";
import type { Service } from "@/content/services";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

/** Kaplayan (cover) veya kırpmadan sığdıran (contain) görsel. Ebeveyn relative ve boyutlu olmalı. */
export function Photo({ image, sizes, priority, className = "" }: { image: Img; sizes: string; priority?: boolean; className?: string }) {
  const contain = image.fit === "contain";
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      placeholder={typeof image.src === "string" ? undefined : "blur"}
      className={`${contain ? "object-contain" : "object-cover"} ${className}`}
    />
  );
}

export function SectionHeading({ eyebrow, title, intro, center = false }: { eyebrow?: string; title: string; intro?: ReactNode; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, crumbs }: { eyebrow?: string; title: string; intro?: string; crumbs?: { name: string; href: string }[] }) {
  return (
    <section className="relative overflow-hidden bg-brand-soft/60">
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-2xl" />
      <div className="container-x relative py-14 md:py-20">
        {crumbs && (
          <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>/</span>}
                  {i === crumbs.length - 1 ? <span aria-current="page" className="text-ink">{c.name}</span> : <Link href={c.href} className="hover:text-brand-strong">{c.name}</Link>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
      </div>
    </section>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/hizmetler/${service.slug}`} className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10">
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-soft">
        <Photo image={service.image} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-ink">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-strong">
          Detaylı bilgi <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-3xl border border-line bg-surface">
      {items.map((item) => (
        <details key={item.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-ink">
            {item.q}
            <span aria-hidden className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-strong transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBanner({ title = "Ayaklarınız size her gün taşıyor. Sıra onlara iyi bakmakta.", text = "WhatsApp'tan yazın, size en uygun randevu saatini birlikte planlayalım." }: { title?: string; text?: string }) {
  return (
    <section className="container-x mt-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-brand px-8 py-14 text-white md:px-16">
        <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
        <div aria-hidden className="absolute -bottom-20 right-32 h-48 w-48 rounded-full bg-white/5" />
        <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
            <p className="mt-3 text-white/80">{text}</p>
          </div>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-brand-strong shadow-lg transition hover:bg-brand-soft">
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp ile Randevu
          </a>
        </div>
      </div>
    </section>
  );
}
