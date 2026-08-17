import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function BlogPostNotFound() {
  return (
    <div className="site-matte">
      <div className="page-shell">
        <Header />
        <main className="min-h-screen pt-[132px]">
          <section className="inner max-w-[980px] pb-24">
            <Link
              className="inline-flex items-center gap-2 text-[14px] font-extrabold"
              href="/blog"
            >
              <ArrowLeft size={16} />
              Tüm yazılara dön
            </Link>
            <h1 className="editorial-title mt-10">Yazı bulunamadı</h1>
            <p className="body-copy mt-7 max-w-[680px] text-[18px]">
              Aradığınız yazı bulunamadı veya kaldırılmış olabilir.
              BrainFit Günlüğü&apos;ndeki diğer yazılara göz atabilirsiniz.
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
