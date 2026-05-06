import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import type { ComponentProps } from "react";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SanityImage } from "@/components/SanityImage";
import { getPostBySlug } from "@/lib/sanity/queries";

export const revalidate = 300;

type PortableTextValue = ComponentProps<typeof PortableText>["value"];

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="site-matte">
      <div className="page-shell">
        <Header />
        <main className="min-h-screen pt-[132px]">
          <article className="inner max-w-[980px] pb-24">
            <Link className="inline-flex items-center gap-2 text-[14px] font-extrabold" href="/blog">
              <ArrowLeft size={16} />
              All blog posts
            </Link>
            <h1 className="display mt-10 text-[clamp(58px,8vw,116px)]">
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
                <p>No article body has been added yet.</p>
              )}
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
}
