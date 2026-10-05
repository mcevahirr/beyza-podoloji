/**
 * Görseller. Demo aşamasında Unsplash'ten alınan görseller kullanılıyor.
 * Instagram paylaşımlarındaki fotoğraflar public/images/ altına konup
 * buradaki src değerleri "/images/dosya.jpg" olarak değiştirilerek kullanılabilir.
 */

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: { src: unsplash("photo-1758654859934-2a03792260a0", 1400), alt: "Podolog danışanın ayağını muayene ediyor" },
  exam: { src: unsplash("photo-1758654859934-2a03792260a0"), alt: "Ayak ve ayak bileği muayenesi" },
  treatment: { src: unsplash("photo-1637662722004-68be528ef359"), alt: "Bakımlı çıplak ayak yakın plan" },
  care: { src: unsplash("photo-1675159364615-38e1f6b62282"), alt: "Beyaz havlu üzerinde ayak bakımı" },
  feet: { src: unsplash("photo-1608158432223-3c0d2f6d9e2f"), alt: "Beyaz örtü üzerinde ayaklar" },
  pedicure: { src: unsplash("photo-1675159364615-38e1f6b62282"), alt: "Medikal pedikür uygulaması" },
  massage: { src: unsplash("photo-1545463913-5083aa7359a6"), alt: "Ayak bakımı ve masaj" },
};

/**
 * Instagram galerisi. `href` her gönderinin Instagram bağlantısıdır.
 * Gerçek gönderiler eklendiğinde src'yi yerel görselle, href'i gönderi linkiyle güncelleyin.
 */
export const instagramPosts = [
  { src: images.exam.src, alt: "Podolojik ayak muayenesi", caption: "Her seans detaylı ayak analiziyle başlar.", href: "" },
  { src: images.care.src, alt: "Ayak bakımı", caption: "Steril aletlerle hijyenik ayak bakımı.", href: "" },
  { src: images.treatment.src, alt: "Batık tırnak sonrası", caption: "Batık tırnak tedavisi sonrası rahatlayan ayaklar.", href: "" },
  { src: images.feet.src, alt: "Sağlıklı ayaklar", caption: "Sağlıklı ayaklar, rahat adımlar.", href: "" },
  { src: images.massage.src, alt: "Rahatlatıcı bakım", caption: "Bakımın sonunda rahatlatıcı nem desteği.", href: "" },
  { src: unsplash("photo-1706795033796-0057e5864e6d"), alt: "Ayak bakım seansı", caption: "Diyabetik ayak bakımında düzenli takip.", href: "" },
];
