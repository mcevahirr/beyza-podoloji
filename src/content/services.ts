import { images, type Img } from "./media";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: Img;
  icon: "nail" | "corn" | "fungus" | "diabetes" | "pedicure" | "heel" | "thick" | "sport";
  body: string[];
  steps: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "batik-tirnak-tedavisi",
    title: "Batık Tırnak Tedavisi",
    short: "Tırnak teli ve ortonik uygulamalarla ameliyatsız, ağrısız çözüm.",
    description:
      "Batık tırnak (onikokriptozis) için ameliyatsız tırnak teli ve ortonik uygulamaları. Ağrıyı azaltan, tırnağın doğru yönde uzamasını sağlayan podolojik tedavi.",
    image: images.batik,
    icon: "nail",
    body: [
      "Batık tırnak, tırnak kenarının çevre dokuya batmasıyla oluşan; ağrı, kızarıklık ve zaman zaman enfeksiyonla seyreden yaygın bir sorundur. Yanlış tırnak kesimi, dar ayakkabı ve genetik yatkınlık en sık nedenlerdir.",
      "Podolojik yaklaşımda batık kısım steril aletlerle temizlenir, ardından tırnağın yapısına uygun tel veya ortonik bant uygulanarak tırnağın düzgün uzaması sağlanır. Çoğu danışanımız ilk seanstan sonra belirgin rahatlama hisseder.",
    ],
    steps: ["Ayak ve tırnak analizi", "Batık kısmın steril temizliği", "Tırnak teli / ortonik uygulama", "Kontrol seansları ve evde bakım önerileri"],
    faq: [
      { q: "Batık tırnak tedavisi acıtır mı?", a: "Uygulama genellikle ağrısızdır. Batık kısmın temizlenmesi sırasında hafif hassasiyet olabilir; çoğu danışan seans sonunda rahatladığını söyler." },
      { q: "Tırnak teli ne kadar süre kalır?", a: "Tırnağın yapısına ve batmanın derecesine göre değişmekle birlikte genellikle birkaç ay boyunca, kontrol seanslarıyla takip edilir." },
    ],
  },
  {
    slug: "nasir-tedavisi",
    title: "Nasır ve Kallus Bakımı",
    short: "Nasır, kallus ve sertleşmelerin güvenli ve hijyenik şekilde temizlenmesi.",
    description:
      "Nasır, kallus ve deri sertleşmelerinin steril aletlerle güvenli temizliği. Basınç noktalarını rahatlatan podolojik nasır tedavisi.",
    image: images.nasir,
    icon: "corn",
    body: [
      "Nasır ve kallus, ayağın belirli bölgelerine binen tekrarlayan basınç ve sürtünmeye karşı derinin kalınlaşmasıdır. Yürürken ağrıya, hatta duruş bozukluğuna yol açabilir.",
      "Seansta sertleşmiş doku, sağlıklı deriye zarar vermeden katman katman uzaklaştırılır. Nasırın tekrar etmemesi için basınç nedeni değerlendirilir ve ayakkabı, tabanlık ve bakım önerileri verilir.",
    ],
    steps: ["Basınç noktalarının değerlendirilmesi", "Nasır çekirdeğinin steril temizliği", "Rahatlatıcı bakım ve nemlendirme", "Tekrarı önlemeye yönelik öneriler"],
    faq: [
      { q: "Nasır bantları ile evde tedavi edebilir miyim?", a: "Asitli nasır bantları sağlıklı dokuya zarar verebilir, özellikle diyabetiklerde risklidir. Profesyonel temizlik daha güvenlidir." },
    ],
  },
  {
    slug: "mantarli-tirnak-bakimi",
    title: "Mantarlı Tırnak Bakımı",
    short: "Mantar enfeksiyonlu tırnaklarda inceltme, temizlik ve düzenli takip.",
    description:
      "Mantarlı tırnaklar (onikomikoz) için podolojik bakım: kalınlaşmış tırnağın inceltilmesi, enfekte dokunun temizlenmesi ve tedavi sürecinin takibi.",
    image: images.mantar,
    icon: "fungus",
    body: [
      "Tırnak mantarı tırnakta sararma, kalınlaşma ve kırılganlığa yol açan, bulaşıcı bir enfeksiyondur. Tedavi sabır ve düzenlilik gerektirir.",
      "Podolojik bakımda kalınlaşmış tırnak frezlerle inceltilir, enfekte kısımlar temizlenir; böylece uygulanan tedavinin tırnağa daha iyi ulaşması sağlanır. Gerekli durumlarda dermatoloji uzmanına yönlendirme yapılır.",
    ],
    steps: ["Tırnak durumunun kaydı", "Kalınlaşmış tırnağın inceltilmesi", "Enfekte dokunun temizlenmesi", "Düzenli kontrol ve hijyen önerileri"],
    faq: [
      { q: "Mantarlı tırnak tamamen iyileşir mi?", a: "Düzenli bakım ve uygun tedavi ile sağlıklı tırnak uzadıkça görünüm belirgin şekilde düzelir. Süreç tırnağın uzama hızına bağlıdır." },
    ],
  },
  {
    slug: "onikogrifoz-bakimi",
    title: "Onikogrifoz Bakımı",
    short: "Kalınlaşmış, kıvrılmış ve şekil bozukluğu olan tırnaklarda podolojik bakım.",
    description:
      "Onikogrifoz (koç boynuzu tırnak) için podolojik bakım: aşırı kalınlaşmış ve kıvrılmış tırnağın güvenli şekilde inceltilmesi ve şekillendirilmesi.",
    image: images.onikogrifoz,
    icon: "thick",
    body: [
      "Onikogrifoz, tırnağın aşırı kalınlaşarak koç boynuzu gibi kıvrıldığı bir durumdur. Genellikle ileri yaş, uzun süreli baskı, travma veya bakımsızlıkla ortaya çıkar; ayakkabı giymeyi ve yürümeyi zorlaştırabilir.",
      "Podolojik bakımda kalınlaşmış tırnak özel frezlerle katman katman inceltilir ve tırnak doğal formuna yakın şekilde düzenlenir. Uygulama ağrısızdır ve düzenli bakımla tırnağın tekrar aşırı kalınlaşması önlenir.",
    ],
    steps: ["Tırnak yapısının değerlendirilmesi", "Kalınlaşmış tırnağın frezle inceltilmesi", "Tırnağın şekillendirilmesi", "Düzenli bakım planı"],
    faq: [
      { q: "Onikogrifoz bakımı acı verir mi?", a: "Hayır. İnceltme işlemi tırnağın canlı dokusuna ulaşmadan yapıldığı için ağrısızdır." },
    ],
  },
  {
    slug: "diyabetik-ayak-bakimi",
    title: "Diyabetik Ayak Bakımı",
    short: "Diyabetli danışanlar için risk odaklı, özenli ve koruyucu ayak bakımı.",
    description:
      "Diyabet hastalarına özel koruyucu ayak bakımı: tırnak ve nasır bakımı, risk değerlendirmesi ve yara oluşumunu önlemeye yönelik takip.",
    image: images.diabetic,
    icon: "diabetes",
    body: [
      "Diyabette sinir hasarı ve dolaşım bozukluğu nedeniyle ayakta oluşan küçük yaralar fark edilmeyebilir ve ciddi sorunlara dönüşebilir. Bu nedenle düzenli profesyonel bakım hayati önem taşır.",
      "Bakım sırasında his ve dolaşım kontrolü yapılır, tırnaklar ve nasırlar yaralanma riski olmadan bakılır, danışana evde günlük kontrol alışkanlıkları kazandırılır.",
    ],
    steps: ["Risk değerlendirmesi", "Güvenli tırnak ve nasır bakımı", "Cilt ve nem bakımı", "Günlük ayak kontrolü eğitimi"],
    faq: [
      { q: "Diyabetliler ne sıklıkla ayak bakımı yaptırmalı?", a: "Risk durumuna göre değişmekle birlikte genellikle 4-6 haftada bir profesyonel bakım önerilir." },
    ],
  },
  {
    slug: "sporcu-ayak-bakimi",
    title: "Sporcularda Ayak Bakımı",
    short: "Koşu ve antrenmanın ayakta bıraktığı nasır, kalınlaşma ve tırnak sorunlarına bakım.",
    description:
      "Sporculara özel podolojik ayak bakımı: kalınlaşma, renk değişimi, tırnakta ayrılma, batma ve hassasiyet gibi sorunların değerlendirilmesi ve bakımı.",
    image: images.sporcu,
    icon: "sport",
    body: [
      "Sporcularda ayaklar sürekli basınç, sürtünme ve nem ile karşı karşıyadır. Tırnakta kalınlaşma ve şekil değişikliği, renk değişimi, tırnağın yatağından ayrılması, batma ve hassasiyet sık görülen sorunlardır.",
      "Podolojik değerlendirmede tırnak ve deri bakımı yapılır, basınç noktaları ve ayakkabı uyumu ele alınır. Böylece hem performans hem de ayak sağlığı korunur.",
    ],
    steps: ["Basınç noktaları ve ayakkabı uyumu analizi", "Tırnak ve deri bakımı", "Sürtünme bölgelerinin korunması", "Antrenmana yönelik öneriler"],
    faq: [
      { q: "Koşucularda tırnak morarması neden olur?", a: "Ayakkabı içinde tırnağın tekrar tekrar çarpması tırnak altında kanamaya yol açar. Doğru ayakkabı numarası ve tırnak kesimi bunu büyük ölçüde önler." },
    ],
  },
  {
    slug: "medikal-pedikur",
    title: "Medikal Pedikür",
    short: "Estetiğin ötesinde, ayak sağlığını önceleyen steril pedikür.",
    description:
      "Kuru yöntemle, steril aletlerle yapılan medikal pedikür. Tırnak, kütikül ve sertleşmelerin sağlıklı bakımı.",
    image: images.pedicure,
    icon: "pedicure",
    body: [
      "Medikal pedikür, klasik pedikürden farklı olarak suya batırma yapılmadan, podolojik frezler ve steril aletlerle uygulanır. Bu sayede enfeksiyon riski azalır ve sonuç daha kalıcıdır.",
      "Tırnaklar doğru formda kesilir, kütikül ve sertleşmeler temizlenir, ayak cildi bakım ürünleriyle beslenir.",
    ],
    steps: ["Ayak analizi", "Tırnak formunun düzeltilmesi", "Sertleşmelerin temizliği", "Cilt bakımı ve nemlendirme"],
    faq: [
      { q: "Medikal pedikür kimlere uygundur?", a: "Ayak sağlığını korumak isteyen herkese, özellikle hassas cilt, diyabet veya tırnak problemi olanlara uygundur." },
    ],
  },
  {
    slug: "topuk-catlagi-bakimi",
    title: "Topuk Çatlağı Bakımı",
    short: "Derin topuk çatlaklarında temizlik, onarım ve nem desteği.",
    description:
      "Topuk çatlakları için podolojik bakım: sertleşmiş dokunun temizlenmesi, çatlak kenarlarının düzeltilmesi ve onarıcı bakım.",
    image: images.massage,
    icon: "heel",
    body: [
      "Topuk çatlakları kuruluk, uzun süre ayakta kalma ve açık ayakkabı kullanımıyla derinleşerek ağrı ve kanamaya neden olabilir.",
      "Çatlak çevresindeki sert doku temizlenir, kenarlar düzeltilir ve onarıcı ürünlerle cilt desteklenir. Evde uygulanacak bakım rutini birlikte planlanır.",
    ],
    steps: ["Çatlak derinliğinin değerlendirilmesi", "Sert dokunun temizlenmesi", "Onarıcı bakım", "Ev bakım rutini"],
    faq: [
      { q: "Topuk çatlağı kaç seansta düzelir?", a: "Hafif çatlaklar genellikle tek seansta belirgin düzelir; derin çatlaklarda birkaç seans ve düzenli ev bakımı gerekir." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
