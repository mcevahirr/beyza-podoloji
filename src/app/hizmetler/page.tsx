import { JsonLd } from "@/components/JsonLd";
import { CtaBanner, PageHero, ServiceCard } from "@/components/ui";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hizmetler",
  description: "Darıca, Kocaeli'de batık tırnak tedavisi, nasır bakımı, tırnak mantarı, onikogrifoz, sporcu ve diyabetik ayak bakımı, medikal pedikür. Podolog Beyzanur Daşdemir.",
  path: "/hizmetler",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana Sayfa", path: "/" }, { name: "Hizmetler", path: "/hizmetler" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${site.url}/hizmetler/${s.slug}`,
            name: s.title,
          })),
        }}
      />
      <PageHero
        eyebrow="Hizmetler"
        title="Podolojik ayak bakımı hizmetleri"
        intro="Ayak sağlığınızı korumak ve mevcut sorunları ağrısız şekilde çözmek için sunduğumuz uygulamalar."
        crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "Hizmetler", href: "/hizmetler" }]}
      />
      <section className="container-x grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
      </section>
      <CtaBanner />
    </>
  );
}
