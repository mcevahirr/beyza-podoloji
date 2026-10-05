import { InstagramGallery } from "@/components/InstagramGallery";
import { CtaBanner, PageHero } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Galeri",
  description: "Podolog Beyza Nur Daşdemir kliniğinden kareler, uygulamalar ve Instagram paylaşımları.",
  path: "/galeri",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Galeri" title="Kliniğimizden kareler" intro="Uygulamalarımızdan ve Instagram paylaşımlarımızdan seçtiklerimiz." crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "Galeri", href: "/galeri" }]} />
      <section className="container-x py-16"><InstagramGallery /></section>
      <CtaBanner />
    </>
  );
}
