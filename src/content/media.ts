import type { StaticImageData } from "next/image";
import batikOnceSonra from "@/assets/batik-tirnak-once-sonra.jpg";
import nasirOnceSonra from "@/assets/nasir-once-sonra.jpg";
import onikogrifozOnceSonra from "@/assets/onikogrifoz-once-sonra.jpg";
import podologKimdir from "@/assets/podolog-kimdir.jpg";
import podolojiGunu from "@/assets/podoloji-gunu.jpg";
import sporcuAyakBakimi from "@/assets/sporcu-ayak-bakimi.jpg";
import tirnakMantari from "@/assets/tirnak-mantari.jpg";

/**
 * Görseller.
 * - Yerel görseller (src/assets) Instagram paylaşımlarından alınmıştır.
 *   Yüksek çözünürlüklü asılları geldiğinde aynı dosya adlarıyla değiştirilmesi yeterlidir.
 * - Unsplash görselleri genel ortam fotoğrafları için kullanılır.
 * `fit: "contain"` metin/önce-sonra içeren görsellerin kırpılmamasını sağlar.
 */
export type Img = { src: string | StaticImageData; alt: string; fit?: "cover" | "contain" };

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: { src: unsplash("photo-1758654859934-2a03792260a0", 1400), alt: "Podolog danışanın ayağını muayene ediyor" },
  exam: { src: unsplash("photo-1758654859934-2a03792260a0"), alt: "Ayak ve ayak bileği muayenesi" },
  care: { src: unsplash("photo-1675159364615-38e1f6b62282"), alt: "Beyaz havlu üzerinde ayak bakımı" },
  pedicure: { src: unsplash("photo-1675159364615-38e1f6b62282"), alt: "Medikal pedikür uygulaması" },
  massage: { src: unsplash("photo-1545463913-5083aa7359a6"), alt: "Ayak bakımı ve masaj" },
  diabetic: { src: unsplash("photo-1706795033796-0057e5864e6d"), alt: "Ayak bakım seansı" },

  batik: { src: batikOnceSonra, alt: "Batık tırnak düzeltme işlemi öncesi ve sonrası", fit: "contain" },
  nasir: { src: nasirOnceSonra, alt: "Nasır bakımı öncesi ve sonrası", fit: "contain" },
  onikogrifoz: { src: onikogrifozOnceSonra, alt: "Onikogrifoz bakımı öncesi ve sonrası", fit: "contain" },
  mantar: { src: tirnakMantari, alt: "Tırnak mantarı neden oluşur bilgilendirme görseli", fit: "contain" },
  sporcu: { src: sporcuAyakBakimi, alt: "Sporcularda podolojik ayak bakımı", fit: "contain" },
  kimdir: { src: podologKimdir, alt: "Podolog kimdir, ne iş yapar", fit: "contain" },
  podolojiGunu: { src: podolojiGunu, alt: "20 Eylül Podoloji ve Podologluk Günü", fit: "contain" },
} satisfies Record<string, Img>;

/** Önce / sonra vakaları (Instagram paylaşımlarından). */
export const beforeAfter = [
  { image: images.batik, title: "Batık tırnak", text: "Tırnak düzeltme işlemi sonrası batık tırnağa son.", slug: "batik-tirnak-tedavisi" },
  { image: images.onikogrifoz, title: "Onikogrifoz", text: "Kalınlaşmış ve kıvrılmış tırnakta bakım sonrası görünüm.", slug: "onikogrifoz-bakimi" },
  { image: images.nasir, title: "Nasır bakımı", text: "Nasır bakımı sonrası aldığımız güzel sonuç.", slug: "nasir-tedavisi" },
];

/**
 * Instagram galerisi. `href` boşsa profil sayfasına gider;
 * gönderi linkleri eklenince her kare kendi gönderisini açar.
 */
export const instagramPosts = [
  { image: images.batik, caption: "Tırnak düzeltme işlemi sonrası batık tırnağa son.", href: "" },
  { image: images.onikogrifoz, caption: "Onikogrifoz bakımı: önce ve sonra.", href: "" },
  { image: images.nasir, caption: "Nasır bakımı sonrası aldığımız güzel sonuç.", href: "" },
  { image: images.mantar, caption: "Tırnak mantarı neden oluşur?", href: "" },
  { image: images.sporcu, caption: "Sporcularda podolojik ayak bakımı.", href: "" },
  { image: images.kimdir, caption: "Podolog kimdir, ne iş yapar?", href: "" },
  { image: images.podolojiGunu, caption: "20 Eylül Podoloji ve Podologluk Günü kutlu olsun.", href: "" },
];
