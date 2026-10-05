"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site, whatsappLink } from "@/config/site";
import { CloseIcon, FootIcon, MenuIcon, WhatsAppIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-surface/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} ana sayfa`}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white">
            <FootIcon className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold text-ink md:text-base">Beyza Nur Daşdemir</span>
            <span className="block text-xs tracking-wide text-muted">Podolog · Ayak Sağlığı</span>
          </span>
        </Link>

        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition hover:bg-brand-soft hover:text-brand-strong aria-[current=page]:bg-brand-soft aria-[current=page]:text-brand-strong"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary hidden sm:inline-flex">
            <WhatsAppIcon className="h-4 w-4" /> Randevu Al
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink lg:hidden"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobil menü" className="border-t border-line bg-surface lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 font-medium text-ink aria-[current=page]:bg-brand-soft aria-[current=page]:text-brand-strong"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp ile Randevu Al
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
