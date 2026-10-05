/**
 * Klinik bilgilerinin tek kaynağı.
 * Gerçek bilgiler geldiğinde yalnızca bu dosya (veya .env) güncellenir;
 * sayfalar, SEO etiketleri, JSON-LD ve WhatsApp bağlantıları buradan beslenir.
 *
 * "DEMO" işaretli alanlar müşteriden teyit edilecek yer tutuculardır.
 */

const env = (key: string, fallback: string) => process.env[key] || fallback;

export const site = {
  name: "Podolog Beyza Nur Daşdemir",
  shortName: "Beyza Nur Daşdemir",
  title: "Podolog Beyza Nur Daşdemir | Ayak Sağlığı ve Medikal Ayak Bakımı",
  description:
    "Podolog Beyza Nur Daşdemir ile batık tırnak, nasır, mantarlı tırnak, diyabetik ayak bakımı ve medikal pedikür. Hijyenik ortamda kişiye özel ayak sağlığı hizmeti. WhatsApp'tan hemen randevu alın.",
  url: env("NEXT_PUBLIC_SITE_URL", "https://www.podologbeyzanurdasdemir.com"),
  locale: "tr_TR",
  keywords: [
    "podolog",
    "podoloji",
    "ayak sağlığı",
    "medikal ayak bakımı",
    "batık tırnak tedavisi",
    "tırnak teli",
    "nasır tedavisi",
    "mantarlı tırnak",
    "diyabetik ayak bakımı",
    "medikal pedikür",
    "topuk çatlağı",
    "Beyza Nur Daşdemir",
  ],

  // DEMO: gerçek numara ile değiştirilecek (ülke kodu ile, boşluksuz)
  whatsapp: env("NEXT_PUBLIC_WHATSAPP_NUMBER", "905000000000"),
  phoneDisplay: env("NEXT_PUBLIC_PHONE_DISPLAY", "+90 500 000 00 00"),
  email: env("NEXT_PUBLIC_EMAIL", "info@podologbeyzanurdasdemir.com"),

  // DEMO: adres teyit edilecek
  address: {
    street: env("NEXT_PUBLIC_ADDRESS_STREET", "Adres bilgisi eklenecek"),
    district: env("NEXT_PUBLIC_ADDRESS_DISTRICT", ""),
    city: env("NEXT_PUBLIC_ADDRESS_CITY", "Türkiye"),
    postalCode: env("NEXT_PUBLIC_ADDRESS_POSTAL", ""),
    country: "TR",
  },
  geo: { lat: 0, lng: 0 }, // DEMO: Google İşletme konumundan alınacak

  /**
   * Google Haritalar: işletme kaydı varsa "Paylaş > Harita yerleştir" ile
   * alınan embed URL'si NEXT_PUBLIC_MAPS_EMBED_URL olarak verilir.
   * Verilmezse işletme adıyla arama yapan embed kullanılır.
   */
  maps: {
    query: env("NEXT_PUBLIC_MAPS_QUERY", "Podolog Beyza Nur Daşdemir"),
    embedUrl: env("NEXT_PUBLIC_MAPS_EMBED_URL", ""),
    // Google İşletme profili / yorum bağlantısı
    businessUrl: env("NEXT_PUBLIC_GOOGLE_BUSINESS_URL", ""),
  },

  social: {
    instagram: "https://www.instagram.com/podologbeyzanurdasdemir/",
    instagramHandle: "@podologbeyzanurdasdemir",
  },

  hours: [
    { days: "Pazartesi - Cuma", time: "09:00 - 19:00", schema: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
    { days: "Cumartesi", time: "10:00 - 17:00", schema: ["Saturday"], opens: "10:00", closes: "17:00" },
    { days: "Pazar", time: "Kapalı", schema: [] as string[], opens: "", closes: "" },
  ],
} as const;

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/galeri", label: "Galeri" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export function whatsappLink(message?: string) {
  const text =
    message ?? "Merhaba Beyza Hanım, web sitenizden ulaşıyorum. Randevu almak istiyorum.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mapsEmbedUrl() {
  if (site.maps.embedUrl) return site.maps.embedUrl;
  return `https://www.google.com/maps?q=${encodeURIComponent(site.maps.query)}&output=embed`;
}

export function mapsDirectionsUrl() {
  return (
    site.maps.businessUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.maps.query)}`
  );
}

export function fullAddress() {
  const a = site.address;
  return [a.street, a.district, a.city].filter(Boolean).join(", ");
}
