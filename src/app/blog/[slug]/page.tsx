import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import type { ComponentProps } from "react";
import { cache } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SanityImage } from "@/components/SanityImage";
import { getAllPostSlugs, getPostBySlug } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";
import { absoluteUrl, SITE } from "@/lib/seo/site";
import {
  buildBlogPostingNode,
  buildBreadcrumbListNode,
  buildJsonLdGraph,
} from "@/lib/seo/jsonld";

export const revalidate = 300;

type PortableTextValue = ComponentProps<typeof PortableText>["value"];
const getPost = cache(getPostBySlug);

// Statically generate published posts at build time. `getAllPostSlugs` (via
// `sanityFetch`) already degrades to [] when Sanity is unconfigured or the
// request fails, so this never breaks the build — it just falls back to
// on-demand rendering for every slug (`revalidate = 300` still applies).
export async function generateStaticParams() {
  const posts = await getAllPostSlugs();

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Yazı bulunamadı",
      description: "Aradığınız yazı bulunamadı veya kaldırılmış olabilir.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = `/blog/${slug}`;
  const metaTitle = post.seoTitle || post.title;
  const metaDescription = post.seoDescription || post.excerpt;
  const postOgImage = post.ogImage
    ? urlForImage(post.ogImage)?.width(1200).height(630).fit("crop").url()
    : post.mainImage
      ? urlForImage(post.mainImage)?.width(1200).height(630).fit("crop").url()
      : null;
  const ogImageUrl = postOgImage ?? absoluteUrl(SITE.defaultOgImage);

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical,
    },
    ...(post.noindex
      ? {
          robots: {
            index: false,
            follow: true,
          },
        }
      : {}),
    openGraph: {
      type: "article",
      title: metaTitle,
      description: metaDescription,
      url: absoluteUrl(canonical),
      siteName: SITE.brandName,
      locale: SITE.locale,
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const canonical = absoluteUrl(`/blog/${slug}`);
  const postImage = post.mainImage
    ? urlForImage(post.mainImage)?.width(1200).url()
    : null;

  const postJsonLd = buildJsonLdGraph([
    buildBlogPostingNode({
      title: post.title,
      excerpt: post.seoDescription || post.excerpt,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      imageUrl: postImage,
      authorName: post.author?.name,
      canonicalUrl: canonical,
    }),
    buildBreadcrumbListNode([
      { name: "Ana Sayfa", path: "/" },
      { name: "BrainFit Günlüğü", path: "/blog" },
      { name: post.title, path: `/blog/${slug}` },
    ]),
  ]);

  return (
    <div className="site-matte">
      <JsonLd graph={postJsonLd} />
      <div className="page-shell">
        <Header />
        <main className="min-h-screen pt-[132px]">
          <article className="inner max-w-[980px] pb-24">
            <Link className="inline-flex items-center gap-2 text-[14px] font-extrabold" href="/blog">
              <ArrowLeft size={16} />
              Tüm yazılara dön
            </Link>
            <h1 className="editorial-title mt-10">
              {post.title}
            </h1>
            {post.excerpt ? (
              <p className="body-copy mt-7 max-w-[680px] text-[18px]">{post.excerpt}</p>
            ) : null}
            <div className="mt-10 overflow-hidden rounded-[24px] bg-[var(--paper)]">
              <SanityImage
                image={post.mainImage || post.cardImage}
                alt={post.mainImage?.alt || post.cardImage?.alt || post.title}
                width={1280}
                height={720}
                sizes="(max-width: 1024px) 90vw, 980px"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="prose-brainfit mt-12">
              {post.body ? (
                <PortableText value={post.body as PortableTextValue} />
              ) : (
                <p>Bu yazının içeriği henüz eklenmemiş.</p>
              )}
            </div>

            <div className="mt-14 grid gap-6 rounded-[18px] bg-[var(--paper)] p-7 md:grid-cols-2">
              <div>
                <p className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-[var(--text-support)]">
                  Çocuğunuz için
                </p>
                <p className="body-copy mt-3 text-[15px]">
                  Merak ettiğiniz konuları netleştirmek isterseniz, Zihin
                  Check-Up size sakin bir başlangıç noktası sunar.
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center gap-2 font-extrabold"
                >
                  Zihin Check-Up&apos;ı inceleyin
                  <ArrowUpRight size={16} />
                </Link>
              </div>
              <div>
                <p className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-[var(--text-support)]">
                  Yetişkinler için
                </p>
                <p className="body-copy mt-3 text-[15px]">
                  Odaklanma, hafıza veya zihinsel performansla ilgili destek
                  arıyorsanız yetişkin programlarımıza göz atabilirsiniz.
                </p>
                <Link
                  href="/yetiskinler"
                  className="mt-4 inline-flex items-center gap-2 font-extrabold"
                >
                  Yetişkin programlarını görün
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
}
