import type { Metadata } from "next";
import { fullAddress, site } from "@/config/site";
import { images } from "@/content/media";

export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: site.locale,
      siteName: site.name,
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    image: images.hero.src,
    telephone: site.phoneDisplay,
    email: site.email,
    medicalSpecialty: "Podiatric",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.district || undefined,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode || undefined,
      addressCountry: site.address.country,
    },
    ...(site.geo.lat
      ? { geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng } }
      : {}),
    hasMap: site.maps.businessUrl || undefined,
    openingHoursSpecification: site.hours
      .filter((h) => h.schema.length)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.schema,
        opens: h.opens,
        closes: h.closes,
      })),
    sameAs: [site.social.instagram, site.maps.businessUrl].filter(Boolean),
    areaServed: fullAddress(),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
