import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-ink">Aradığınız sayfa bulunamadı</h1>
      <p className="mt-4 text-muted">Sayfa taşınmış veya kaldırılmış olabilir.</p>
      <Link href="/" className="btn-primary mt-8">Ana sayfaya dön</Link>
    </section>
  );
}
