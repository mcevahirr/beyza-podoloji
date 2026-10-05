import { JsonLd } from "@/components/JsonLd";
import { CtaBanner, Faq, PageHero } from "@/components/ui";
import { generalFaq } from "@/content/faq";
import { services } from "@/content/services";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sık Sorulan Sorular",
  description: "Podoloji, batık tırnak, nasır, mantarlı tırnak ve randevu süreci hakkında sık sorulan sorular.",
  path: "/sss",
});

const all = [...generalFaq, ...services.flatMap((s) => s.faq)];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(all)} />
      <PageHero eyebrow="SSS" title="Sık sorulan sorular" intro="Aklınıza takılan başka bir soru varsa WhatsApp'tan yazmanız yeterli." crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "SSS", href: "/sss" }]} />
      <section className="container-x max-w-4xl py-16"><Faq items={all} /></section>
      <CtaBanner />
    </>
  );
}
