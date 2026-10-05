import { PageHero } from "@/components/ui";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({ title: "KVKK Aydınlatma Metni", description: "Kişisel verilerin korunması hakkında aydınlatma metni.", path: "/kvkk" }),
  robots: { index: false, follow: true },
};

// DEMO: Yayın öncesi hukuki danışmanla gözden geçirilmelidir.
export default function KvkkPage() {
  return (
    <>
      <PageHero title="KVKK Aydınlatma Metni" crumbs={[{ name: "Ana Sayfa", href: "/" }, { name: "KVKK", href: "/kvkk" }]} />
      <section className="container-x prose-clinic max-w-3xl py-16 text-base">
        <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, veri sorumlusu sıfatıyla {site.name} olarak kişisel verilerinizi aşağıda açıklanan amaçlarla işlemekteyiz.</p>
        <h2 className="font-display text-xl font-semibold text-ink">İşlenen veriler</h2>
        <p>İletişim formu aracılığıyla paylaştığınız ad soyad, telefon numarası, ilgilendiğiniz hizmet ve mesaj içeriği.</p>
        <h2 className="font-display text-xl font-semibold text-ink">İşleme amacı</h2>
        <p>Randevu talebinizin değerlendirilmesi ve sizinle iletişime geçilmesi. Verileriniz pazarlama amacıyla kullanılmaz ve üçüncü kişilerle paylaşılmaz.</p>
        <h2 className="font-display text-xl font-semibold text-ink">Haklarınız</h2>
        <p>KVKK&apos;nın 11. maddesi uyarınca verilerinize ilişkin bilgi talep etme, düzeltilmesini veya silinmesini isteme haklarına sahipsiniz. Talepleriniz için {site.email} adresine yazabilirsiniz.</p>
      </section>
    </>
  );
}
