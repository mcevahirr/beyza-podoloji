import Image from "next/image";
import Link from "next/link";
import { CheckIcon, ClockIcon, HeartIcon, PhoneIcon, PinIcon, ShieldIcon, SparkIcon, StarIcon, WhatsAppIcon } from "@/components/Icons";
import { InstagramGallery } from "@/components/InstagramGallery";
import { JsonLd } from "@/components/JsonLd";
import { MapEmbed } from "@/components/MapEmbed";
import { CtaBanner, Faq, SectionHeading, ServiceCard } from "@/components/ui";
import { fullAddress, site, whatsappLink } from "@/config/site";
import { generalFaq } from "@/content/faq";
import { images } from "@/content/media";
import { services } from "@/content/services";
import { faqJsonLd } from "@/lib/seo";

const values = [
  { icon: ShieldIcon, title: "Steril ve Hijyenik", text: "Her danışan için otoklavda sterilize edilmiş aletler ve tek kullanımlık malzemeler." },
  { icon: HeartIcon, title: "Kişiye Özel Bakım", text: "Ayak yapınız, yaşam tarzınız ve şikayetinize göre planlanan bakım süreci." },
  { icon: SparkIcon, title: "Ağrısız Uygulamalar", text: "Batık tırnak ve nasırda ameliyatsız, konforlu podolojik yöntemler." },
];

const steps = [
  { n: "01", title: "WhatsApp'tan yazın", text: "Şikayetinizi kısaca anlatın, size uygun gün ve saati birlikte belirleyelim." },
  { n: "02", title: "Ayak analizi", text: "İlk seansta ayak ve tırnak yapınız detaylı olarak değerlendirilir." },
  { n: "03", title: "Bakım ve takip", text: "Uygulama sonrası evde bakım önerileri ve gerekli kontrol seansları planlanır." },
];

// DEMO: örnek yorumlar; yayına almadan önce gerçek Google yorumlarıyla değiştirilmeli.
const testimonials = [
  { name: "Ayşe K.", text: "Yıllardır çektiğim batık tırnak sorunundan ameliyatsız kurtuldum. Çok ilgili ve nazik." },
  { name: "Mehmet T.", text: "Diyabetik ayak bakımı için düzenli geliyorum. Hijyen ve özen gerçekten çok iyi." },
  { name: "Zeynep A.", text: "Nasır tedavisinden sonra rahat yürümeye başladım. Herkese tavsiye ederim." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(generalFaq)} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-brand-soft via-page to-sand" />
        <div aria-hidden className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <div>
            <p className="eyebrow"><span className="h-px w-8 bg-brand" />Podolog · Ayak Sağlığı Uzmanı</p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Sağlıklı ayaklar, <span className="italic text-brand">rahat adımlar.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Podolog Beyza Nur Daşdemir ile batık tırnak, nasır, mantarlı tırnak ve diyabetik ayak bakımında hijyenik, ağrısız ve kişiye özel çözümler.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-4 text-base">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp ile Randevu Al
              </a>
              <Link href="/hizmetler" className="btn-outline px-7 py-4 text-base">Hizmetleri İncele</Link>
            </div>
            <ul className="mt-10 grid max-w-lg grid-cols-1 gap-3 text-sm text-ink sm:grid-cols-2">
              {["Ameliyatsız batık tırnak tedavisi", "Otoklav ile steril aletler", "Diyabetik ayak bakımı", "Randevulu, beklemesiz hizmet"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-white"><CheckIcon className="h-3.5 w-3.5" /></span>{t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] rounded-tl-[8rem] bg-brand-soft shadow-2xl shadow-brand/20">
              <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="(min-width:1024px) 45vw, 90vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-surface p-4 shadow-xl sm:-left-8">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-blush text-brand-strong"><StarIcon className="h-5 w-5" /></span>
              <span className="text-sm leading-tight"><strong className="block text-ink">Hijyen & Güven</strong><span className="text-muted">Her seans steril</span></span>
            </div>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="absolute -right-2 top-8 rounded-2xl bg-surface px-4 py-3 text-sm shadow-xl sm:-right-6">
              <strong className="block text-ink">{site.social.instagramHandle}</strong>
              <span className="text-muted">Instagram&apos;da takip edin</span>
            </a>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-x -mt-2 grid gap-5 py-16 md:grid-cols-3">
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-3xl border border-line bg-surface p-7">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand-strong"><Icon className="h-6 w-6" /></span>
            <h2 className="mt-5 font-display text-xl font-semibold text-ink">{title}</h2>
            <p className="mt-2 leading-relaxed text-muted">{text}</p>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section className="container-x py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Hizmetler" title="Ayak sağlığınız için podolojik çözümler" intro="Her uygulama ayak analizi ile başlar ve ihtiyacınıza göre planlanır." />
          <Link href="/hizmetler" className="btn-outline self-start md:self-auto">Tüm hizmetler</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mt-16 bg-sand py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-blush">
            <Image src={images.care.src} alt={images.care.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Hakkımda" title="Merhaba, ben Beyza Nur Daşdemir" />
            <div className="prose-clinic mt-6">
              <p>Podolog olarak amacım, ayak sağlığı sorunlarınıza bilimsel, hijyenik ve konforlu çözümler sunmak. Her danışanımı dinleyerek, ayak yapısını ve yaşam alışkanlıklarını değerlendirerek kişiye özel bir bakım planı oluşturuyorum.</p>
              <p>Batık tırnaktan diyabetik ayağa kadar pek çok sorunda erken ve doğru müdahalenin hayat kalitesini nasıl değiştirdiğini her gün görüyorum.</p>
            </div>
            <Link href="/hakkimda" className="btn-primary mt-8">Daha fazla bilgi</Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-24">
        <SectionHeading center eyebrow="Süreç" title="Randevudan sağlıklı adımlara" />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-3xl border border-line bg-surface p-8">
              <span className="font-display text-5xl font-semibold text-brand/25">{s.n}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* INSTAGRAM */}
      <section className="container-x">
        <SectionHeading center eyebrow="Instagram" title="Kliniğimizden kareler" intro="Uygulamalarımızı ve ayak sağlığı ipuçlarını Instagram hesabımızda paylaşıyoruz." />
        <div className="mt-10"><InstagramGallery /></div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-24">
        <SectionHeading center eyebrow="Danışan Yorumları" title="Danışanlarımız ne diyor?" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-line bg-surface p-7">
              <div className="flex gap-1 text-amber-400" aria-label="5 üzerinden 5 yıldız">
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} className="h-4 w-4" />)}
              </div>
              <blockquote className="mt-4 leading-relaxed text-ink">“{t.text}”</blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-muted">{t.name}</figcaption>
            </figure>
          ))}
        </div>
        {site.maps.businessUrl && (
          <div className="mt-8 text-center">
            <a href={site.maps.businessUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">Google yorumlarını gör</a>
          </div>
        )}
      </section>

      {/* FAQ + CONTACT */}
      <section className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="SSS" title="Sık sorulan sorular" />
          <div className="mt-8"><Faq items={generalFaq.slice(0, 4)} /></div>
          <Link href="/sss" className="mt-6 inline-block text-sm font-semibold text-brand-strong">Tüm sorular →</Link>
        </div>
        <div>
          <SectionHeading eyebrow="Konum" title="Bize ulaşın" />
          <ul className="mt-6 space-y-3 text-ink">
            <li className="flex gap-3"><PinIcon className="h-5 w-5 shrink-0 text-brand" />{fullAddress()}</li>
            <li className="flex gap-3"><PhoneIcon className="h-5 w-5 shrink-0 text-brand" /><a href={`tel:+${site.whatsapp}`}>{site.phoneDisplay}</a></li>
            <li className="flex gap-3"><ClockIcon className="h-5 w-5 shrink-0 text-brand" />{site.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}</li>
          </ul>
          <MapEmbed className="mt-6" />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
