import Image from "next/image";
import { CheckIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { CtaBanner, PageHero } from "@/components/ui";
import { site } from "@/config/site";
import { images } from "@/content/media";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hakkımda",
  description: "Podolog Beyza Nur Daşdemir kimdir? Ayak sağlığına bilimsel, hijyenik ve kişiye özel yaklaşım.",
  path: "/hakkimda",
});

// DEMO: eğitim ve sertifika bilgileri müşteriden alınacak.
const highlights = [
  "Podoloji eğitimi ve klinik deneyim",
  "Batık tırnak teli ve ortonik uygulamaları",
  "Diyabetik ayak bakımı",
  "Steril çalışma ve enfeksiyon kontrolü",
  "Düzenli mesleki eğitim ve seminerler",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana Sayfa", path: "/" }, { name: "Hakkımda", path: "/hakkimda" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Beyza Nur Daşdemir",
          jobTitle: "Podolog",
          worksFor: { "@id": `${site.url}/#business` },
          sameAs: [site.social.instagram],
        }}
      />
      <PageHero eyebrow="Hakkımda" title="Podolog Beyza Nur Daşdemir" crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "Hakkımda", href: "/hakkimda" }]} />
      <section className="container-x grid items-start gap-12 py-16 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] rounded-tr-[6rem] bg-blush">
          <Image src={images.exam.src} alt="Podolog Beyza Nur Daşdemir çalışırken" fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
        </div>
        <div>
          <div className="prose-clinic">
            <p className="font-display text-2xl leading-snug text-ink">“Ayaklarımız bizi hayat boyu taşır; onlara gösterdiğimiz özen, yaşam kalitemize doğrudan yansır.”</p>
            <p>Podolog olarak ayak sağlığı alanında koruyucu ve tedavi edici bakım hizmeti veriyorum. Batık tırnak, nasır, mantarlı tırnak, topuk çatlakları ve diyabetik ayak bakımı başlıca çalışma alanlarım.</p>
            <p>Her danışanımla önce detaylı bir ayak analizi yapıyor, şikayetin nedenini anlamaya çalışıyorum. Ardından ağrısız, hijyenik ve kalıcı sonuç hedefleyen kişiye özel bir bakım planı oluşturuyorum.</p>
            <p>Uygulamalarımı ve ayak sağlığı ile ilgili ipuçlarını <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-strong underline underline-offset-2">Instagram hesabımda</a> düzenli olarak paylaşıyorum.</p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-4 text-ink">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-strong"><CheckIcon className="h-4 w-4" /></span>{h}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
