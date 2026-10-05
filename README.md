# Podolog Beyza Nur Daşdemir · Klinik Web Sitesi (Demo)

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 ile hazırlanmış, SEO uyumlu klinik tanıtım sitesi.
Satış yok; tüm dönüşümler WhatsApp'a yönlenir.

## Çalıştırma

```bash
npm install
cp .env.example .env.local   # bilgileri doldurun
npm run dev                  # http://localhost:3000
npm run build && npm start   # üretim
```

## Güncellenecek yerler (DEMO işaretli)

| Ne | Nerede |
|---|---|
| WhatsApp / telefon / e-posta / adres | `.env.local` veya `src/config/site.ts` |
| Google Haritalar embed + Google İşletme linki | `NEXT_PUBLIC_MAPS_EMBED_URL`, `NEXT_PUBLIC_GOOGLE_BUSINESS_URL` |
| Çalışma saatleri | `src/config/site.ts` → `hours` |
| Görseller ve Instagram galerisi | `src/content/media.ts` (Instagram fotoğraflarını `public/images/` altına koyun) |
| Hizmet metinleri | `src/content/services.ts` |
| SSS | `src/content/faq.ts` |
| Danışan yorumları (örnek metinler) | `src/app/page.tsx` → `testimonials` |
| Hakkımda / sertifikalar | `src/app/hakkimda/page.tsx` |

## Yapı

```
src/
  app/                 sayfalar (/, /hizmetler, /hizmetler/[slug], /hakkimda, /galeri, /sss, /iletisim, /kvkk)
    api/appointment    randevu talebi API (zod doğrulama, hız sınırı, bot tuzağı → WhatsApp yönlendirme)
    api/health         sağlık kontrolü
    sitemap.ts robots.ts manifest.ts opengraph-image.tsx icon.svg
  components/          Header, Footer, WhatsAppFloat, MapEmbed, InstagramGallery, AppointmentForm, ui
  config/site.ts       klinik bilgilerinin tek kaynağı
  content/             hizmetler, SSS, görseller
  lib/                 SEO yardımcıları (JSON-LD), doğrulama şeması, rate limit
  server/leads.ts      randevu kaydı (webhook + JSONL dosya; veritabanına geçiş noktası)
```

## SEO

- Sayfa bazlı title/description/canonical/Open Graph, otomatik OG görseli
- JSON-LD: MedicalBusiness/LocalBusiness, MedicalProcedure, FAQPage, BreadcrumbList, Person
- `sitemap.xml`, `robots.txt`, web manifest, statik üretilen sayfalar (SSG)
- Demo yayınında indekslemeyi kapatmak için `NEXT_PUBLIC_NOINDEX=1`

## Randevu talepleri

Form `/api/appointment`'a gider; geçerliyse talep kaydedilir ve kullanıcı ön doldurulmuş mesajla WhatsApp'a yönlenir.
`LEAD_WEBHOOK_URL` ile talepler Make/Zapier/n8n üzerinden e-posta, Google Sheets vb.'ye aktarılabilir.

## Yayınlama

Vercel'e doğrudan bağlanabilir (önerilen) veya `npm run build && npm start` ile herhangi bir Node 20+ sunucusunda çalışır.
