"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Decorations";
import { SanityImage } from "@/components/SanityImage";
import { useHoverable } from "@/lib/useHoverable";
import type { PostCard } from "@/lib/sanity/queries";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const cardColors = ["#F4F1EB", "#D9F8A8", "#FCEA96"];
const fallbackImages = [
  "/illustrations/blog-balance.svg",
  "/illustrations/blog-rest.svg",
  "/illustrations/blog-focus.svg",
];

function formatDate(value?: string) {
  if (!value) return "Planlanmamış";

  return new Intl.DateTimeFormat("tr-TR", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

export function BlogSection({
  posts,
  variant = "children",
}: {
  posts: PostCard[];
  variant?: "children" | "adults";
}) {
  const isAdults = variant === "adults";
  const reduceMotion = useReducedMotion();
  const hoverable = useHoverable();
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });
  const gridActive = !reduceMotion && gridInView;

  return (
    <section className="section-pad section-surface">
      <div className="inner">
        <Reveal className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <h2 className="section-title max-w-[760px]">BrainFit’ten Güncel Yazılar</h2>
          <Link className="arrow-shift inline-flex items-center gap-2 font-extrabold" href="/blog">
            Tüm Yazıları Gör
            <ArrowUpRight size={18} />
          </Link>
        </Reveal>

        {posts.length === 0 ? (
          <div className="mt-12 rounded-[18px] border border-dashed border-[var(--line)] bg-[var(--paper)] p-10 text-center">
            <p className="font-extrabold">Henüz yayınlanmış bir içerik bulunmuyor.</p>
            <p className="mt-2 text-[15px] text-[var(--text-support)]">
              Yayınlanan içerikler burada görünecektir.
            </p>
          </div>
        ) : (
          <div ref={gridRef} className="mt-14 grid gap-6 lg:grid-cols-3">
            {posts.map((post, index) => (
              isAdults ? (
                <motion.article
                  key={post._id}
                  className="min-h-[420px] rounded-[28px] p-6 shadow-[0_18px_40px_rgba(36,29,24,0.12)]"
                  style={{ background: cardColors[index % cardColors.length] }}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={gridActive ? { opacity: 1, y: 0 } : undefined}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: easeOutExpo }}
                  whileHover={
                    hoverable
                      ? { y: -4, transition: { duration: 0.25, ease: easeOutExpo } }
                      : undefined
                  }
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex h-full flex-col"
                    aria-label={`Yazıyı Oku: ${post.title}`}
                  >
                    <div className="flex items-center justify-between gap-4 text-[13px] font-extrabold uppercase tracking-[0.08em] text-[var(--text-support)]">
                      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                      <span className="inline-flex items-center gap-1">
                        <MessageCircle size={14} />
                        {post.commentCount ?? 0}
                      </span>
                    </div>

                    <h3 className="compact-title mt-8">
                      {post.title}
                    </h3>
                    <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-[var(--text-support)]">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-8">
                      <div className="adult-hover-zoom relative mb-7 h-[150px] overflow-hidden rounded-[20px] bg-white/50">
                        <motion.div
                          className="h-full w-full"
                          initial={reduceMotion ? false : { scale: 1.07, opacity: 0 }}
                          animate={
                            gridActive ? { scale: 1, opacity: 1 } : undefined
                          }
                          transition={{
                            delay: 0.15 + index * 0.08,
                            duration: 0.6,
                            ease: easeOutExpo,
                          }}
                        >
                          {post.cardImage ? (
                            <SanityImage
                              image={post.cardImage}
                              alt={post.cardImage.alt || post.title}
                              width={520}
                              height={300}
                              sizes="(max-width: 1024px) 90vw, 360px"
                              className="adult-hover-zoom-img h-full w-full object-cover"
                            />
                          ) : (
                            <Image
                              src={fallbackImages[index % fallbackImages.length]}
                              alt=""
                              aria-hidden="true"
                              fill
                              sizes="(max-width: 1024px) 90vw, 360px"
                              className="adult-hover-zoom-img object-cover"
                            />
                          )}
                        </motion.div>
                      </div>
                      <span className="inline-flex rounded-full bg-[#164C35] px-5 py-3 text-[13px] font-extrabold text-white">
                        Devamını Oku
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ) : (
                <motion.article
                  key={post._id}
                  className="min-h-[420px] rounded-[28px] p-6 shadow-[0_18px_40px_rgba(36,29,24,0.12)]"
                  style={{ background: cardColors[index % cardColors.length] }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex h-full flex-col"
                    aria-label={`Yazıyı Oku: ${post.title}`}
                  >
                  <div className="flex items-center justify-between gap-4 text-[13px] font-extrabold uppercase tracking-[0.08em] text-[var(--text-support)]">
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    <span className="inline-flex items-center gap-1">
                      <MessageCircle size={14} />
                      {post.commentCount ?? 0}
                    </span>
                  </div>

                  <h3 className="compact-title mt-8">
                    {post.title}
                  </h3>
                  <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-[var(--text-support)]">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-8">
                    <div className="relative mb-7 h-[150px] overflow-hidden rounded-[20px] bg-white/50">
                      {post.cardImage ? (
                        <SanityImage
                          image={post.cardImage}
                          alt={post.cardImage.alt || post.title}
                          width={520}
                          height={300}
                          sizes="(max-width: 1024px) 90vw, 360px"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Image
                          src={fallbackImages[index % fallbackImages.length]}
                          alt=""
                          aria-hidden="true"
                          fill
                          sizes="(max-width: 1024px) 90vw, 360px"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <span className="inline-flex rounded-full bg-[#164C35] px-5 py-3 text-[13px] font-extrabold text-white">
                      Devamını Oku
                    </span>
                  </div>
                  </Link>
                </motion.article>
              )
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
