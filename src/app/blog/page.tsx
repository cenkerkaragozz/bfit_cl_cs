import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SanityImage } from "@/components/SanityImage";
import { getAllPosts } from "@/lib/sanity/queries";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "BrainFit Günlüğü | BrainFit Karşıyaka",
  description:
    "Bilişsel gelişim, Zihin Check-Up ve günlük yaşama yönelik BrainFit Karşıyaka yazıları.",
};

function formatDate(value?: string) {
  if (!value) return "Tarih belirtilmedi";

  return new Intl.DateTimeFormat("tr-TR", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="site-matte">
      <div className="page-shell">
        <Header />
        <main className="min-h-screen pt-[132px]">
          <section className="inner pb-20">
            <Link className="inline-flex items-center gap-2 text-[14px] font-extrabold" href="/">
              <ArrowLeft size={16} />
              Ana sayfaya dön
            </Link>
            <div className="mt-9 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h1 className="hero-title max-w-[720px]">BrainFit Günlüğü</h1>
              <p className="body-copy max-w-[380px]">
                BrainFit ekibinden bilişsel gelişim, program rehberleri ve günlük
                yaşama yönelik güncel yazılar.
              </p>
            </div>

            {posts.length === 0 ? (
              <div className="mt-14 rounded-[18px] border border-dashed border-[var(--line)] bg-[var(--paper)] p-10">
                <p className="font-extrabold">Henüz yayınlanmış bir içerik bulunmuyor.</p>
                <p className="mt-2 text-[15px] text-[var(--text-support)]">
                  Yeni yazılar yayınlandığında burada görünecek.
                </p>
              </div>
            ) : (
              <div className="mt-14 grid gap-6 md:grid-cols-2">
                {posts.map((post) => (
                  <article key={post._id} className="rounded-[18px] bg-[var(--paper)] p-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="grid gap-6 md:grid-cols-[220px_1fr]"
                      aria-label={`Yazıyı oku: ${post.title}`}
                    >
                      <SanityImage
                        image={post.cardImage || post.mainImage}
                        alt={post.cardImage?.alt || post.mainImage?.alt || post.title}
                        width={440}
                        height={320}
                        sizes="(max-width: 768px) 90vw, 220px"
                        className="h-[220px] w-full rounded-[14px] object-cover"
                      />
                      <div>
                        <time className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-[var(--text-support)]">
                          {formatDate(post.publishedAt)}
                        </time>
                        <h2 className="compact-title mt-4">
                          {post.title}
                        </h2>
                        <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-[rgba(36,29,24,0.64)]">
                          {post.excerpt}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-2 font-extrabold">
                          Yazıyı oku
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
