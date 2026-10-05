import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppointmentForm } from "@/components/AppointmentForm";
import { CheckIcon, WhatsAppIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { CtaBanner, Faq, PageHero } from "@/components/ui";
import { site, whatsappLink } from "@/config/site";
import { getService, services } from "@/content/services";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.title, description: service.description, path: `/hizmetler/${service.slug}`, image: service.image.src });
}

export default async function ServicePage({ params }: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const path = `/hizmetler/${service.slug}`;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana Sayfa", path: "/" }, { name: "Hizmetler", path: "/hizmetler" }, { name: service.title, path }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          name: service.title,
          description: service.description,
          url: `${site.url}${path}`,
          image: service.image.src,
          provider: { "@id": `${site.url}/#business` },
        }}
      />
      {service.faq.length > 0 && <JsonLd data={faqJsonLd(service.faq)} />}

      <PageHero
        eyebrow="Hizmet"
        title={service.title}
        intro={service.short}
        crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "Hizmetler", href: "/hizmetler" }, { name: service.title, href: path }]}
      />

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_380px]">
        <article>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-brand-soft">
            <Image src={service.image.src} alt={service.image.alt} fill priority sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
          </div>
          <div className="prose-clinic mt-10">
            {service.body.map((p) => <p key={p}>{p}</p>)}
          </div>

          <h2 className="mt-12 font-display text-2xl font-semibold text-ink">Uygulama süreci</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.steps.map((step, i) => (
              <li key={step} className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-sm font-semibold text-white">{i + 1}</span>
                <span className="pt-1.5 text-ink">{step}</span>
              </li>
            ))}
          </ol>

          {service.faq.length > 0 && (
            <>
              <h2 className="mt-12 font-display text-2xl font-semibold text-ink">Sık sorulanlar</h2>
              <div className="mt-6"><Faq items={service.faq} /></div>
            </>
          )}
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl bg-brand p-7 text-white">
            <h2 className="font-display text-xl font-semibold">Randevu için yazın</h2>
            <p className="mt-2 text-sm text-white/80">{service.title} hakkında sorularınızı WhatsApp üzerinden iletebilirsiniz.</p>
            <a href={whatsappLink(`Merhaba Beyza Hanım, ${service.title} hakkında bilgi almak istiyorum.`)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-brand-strong">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp&apos;tan Yaz
            </a>
          </div>
          <div className="rounded-3xl border border-line bg-surface p-7">
            <h2 className="font-display text-lg font-semibold text-ink">Diğer hizmetler</h2>
            <ul className="mt-4 space-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/hizmetler/${o.slug}`} className="flex items-center gap-2 text-muted hover:text-brand-strong">
                    <CheckIcon className="h-4 w-4 text-brand" />{o.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <section className="container-x">
        <h2 className="font-display text-2xl font-semibold text-ink">Randevu talebi oluşturun</h2>
        <div className="mt-6 max-w-3xl"><AppointmentForm defaultService={service.title} /></div>
      </section>

      <CtaBanner />
    </>
  );
}
