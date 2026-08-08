"use client";

import Image from "next/image";
import { ShieldCheck, Star } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Leaf, QuoteIcon } from "@/components/Decorations";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

type TestimonialAudience = "children" | "adults";

const testimonialGroups = {
  children: [
    {
      lead: "Ödev başında yaşadığımız zorlanmanın yalnızca isteksizlik olmadığını ",
      highlight: "fark ettik",
      tail: ".",
    },
    {
      lead: "Check-Up sonrasında hangi alanlara odaklanmamız gerektiği bizim için ",
      highlight: "netleşti",
      tail: ".",
    },
    {
      lead: "Süreç ilerledikçe çocuğumuz ders başında daha ",
      highlight: "uzun süre",
      tail: " kalmaya başladı.",
    },
    {
      lead: "Uzmanın raporu sade bir şekilde açıklaması kafamızdaki birçok soruyu ",
      highlight: "yanıtladı",
      tail: ".",
    },
  ],
  adults: [
    {
      lead: "Değerlendirme sonrasında bilişsel profilimi çok daha ",
      highlight: "net",
      tail: " gördüm.",
    },
    {
      lead: "Görüşmenin ardından nereden başlamam gerektiği benim için ",
      highlight: "netleşti",
      tail: ".",
    },
    {
      lead: "BrainFit sürecinde zihinsel çalışma düzenimi daha ",
      highlight: "bilinçli",
      tail: " takip etmeye başladım.",
    },
    {
      lead: "Raporu uzmanla değerlendirdikten sonra günlük çalışma planımı daha ",
      highlight: "gerçekçi",
      tail: " kurmaya başladım.",
    },
  ],
} as const;

const localProofItems = [
  "Karşıyaka'da yüz yüze merkez",
  "WhatsApp ile hızlı randevu",
  "KVKK kapsamında iletişim",
  "Uzman açıklamalı rapor",
] as const;

export function TestimonialSection({
  audience = "children",
  showLocalProofBars = true,
}: {
  audience?: TestimonialAudience;
  showLocalProofBars?: boolean;
}) {
  return <Testimonials audience={audience} showLocalProofBars={showLocalProofBars} />;
}

function Testimonials({
  audience,
  showLocalProofBars,
}: {
  audience: TestimonialAudience;
  showLocalProofBars: boolean;
}) {
  const [active, setActive] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  // Visibility observer (no once) pauses the auto-rotation while the
  // section is offscreen. A separate once-observer drives entrances.
  const sectionVisible = useInView(sectionRef, { margin: "-60px" });
  const sectionSeen = useInView(sectionRef, { once: true, margin: "-60px" });
  const testimonials = testimonialGroups[audience];
  const isAdults = audience === "adults";
  const participantLabel = audience === "adults" ? "BrainFit Katılımcısı" : "BrainFit Karşıyaka Velisi";

  useEffect(() => {
    if (reduceMotion) return;
    if (isAdults && !sectionVisible) return;
    if (isAdults && interacting) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, isAdults ? 6500 : 3125);

    return () => window.clearInterval(timer);
  }, [audience, reduceMotion, sectionVisible, interacting, testimonials.length]);

  const testimonial = testimonials[active];

  return (
    <section
      id="experiences"
      ref={sectionRef}
      onMouseEnter={isAdults ? () => setInteracting(true) : undefined}
      onMouseLeave={isAdults ? () => setInteracting(false) : undefined}
      onFocusCapture={isAdults ? () => setInteracting(true) : undefined}
      onBlurCapture={isAdults ? () => setInteracting(false) : undefined}
      className="section-surface relative scroll-mt-28 py-[82px] md:py-[116px]"
    >
      <span id="about" className="absolute top-0" aria-hidden="true" />
      <Leaf className="absolute right-[4%] top-[8%] hidden md:block" />
      <div className="inner">
        <div className="relative mx-auto max-w-[980px]">
          <QuoteIcon className="mb-8" />
          <blockquote>
            <p className="editorial-quote max-w-[880px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${audience}-${testimonial.highlight}`}
                  className="inline-block"
                  initial={
                    reduceMotion
                      ? undefined
                      : isAdults
                        ? { y: 26, opacity: 0, clipPath: "inset(0 0 100% 0)" }
                        : { y: 16, rotate: -2 }
                  }
                  animate={
                    reduceMotion
                      ? undefined
                      : isAdults
                        ? { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)" }
                        : { y: 0, rotate: 0 }
                  }
                  exit={
                    reduceMotion
                      ? undefined
                      : isAdults
                        ? { y: -18, opacity: 0, clipPath: "inset(0 0 100% 0)" }
                        : { y: -12, rotate: 2 }
                  }
                  transition={{
                    duration: isAdults ? 0.45 : 0.38,
                    ease: isAdults ? easeOutExpo : undefined,
                  }}
                >
                  {testimonial.lead}
                  {isAdults ? (
                    <motion.span
                      className="inline-block rounded-full bg-[#FCBF48] px-5 pb-2 text-[var(--ink)]"
                      initial={reduceMotion ? undefined : { clipPath: "inset(0 100% 0 0)" }}
                      animate={reduceMotion ? undefined : { clipPath: "inset(0 0% 0 0)" }}
                      transition={{ delay: 0.18, duration: 0.4, ease: easeOutExpo }}
                    >
                      {testimonial.highlight}
                    </motion.span>
                  ) : (
                    <span className="inline-block rounded-full bg-[#FCBF48] px-5 pb-2 text-[var(--ink)]">
                      {testimonial.highlight}
                    </span>
                  )}
                  {testimonial.tail}
                </motion.span>
              </AnimatePresence>
            </p>
          </blockquote>

          <div className="mt-10 flex items-center gap-5">
            <Image
              src="/images/avatar-mira.svg"
              alt=""
              aria-hidden="true"
              width={58}
              height={58}
              className="rounded-full"
            />
            <div>
              <p className="font-extrabold">{participantLabel}</p>
              <div className="mt-1 flex items-center gap-1 text-[#FCBF48]" aria-label="Google Puanı: 4.6/5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" strokeWidth={2.2} aria-hidden="true" />
                ))}
                <span className="ml-2 text-[14px] font-extrabold text-[rgba(36,29,24,0.68)]">
                  Google Puanı: 4.6/5
                </span>
              </div>
            </div>
          </div>

          {showLocalProofBars ? (
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {localProofItems.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3 rounded-[18px] bg-white p-4"
                  initial={
                    reduceMotion || !isAdults
                      ? false
                      : { opacity: 0, y: 12 }
                  }
                  animate={
                    isAdults && sectionSeen
                      ? { opacity: 1, y: 0 }
                      : undefined
                  }
                  transition={{
                    delay: 0.1 + index * 0.08,
                    duration: 0.4,
                    ease: easeOutExpo,
                  }}
                >
                  <ShieldCheck size={19} className="shrink-0 text-[#6BC862]" />
                  <p className="text-[14px] font-extrabold text-[#241D18]">{item}</p>
                </motion.div>
              ))}
            </div>
          ) : null}

          <div className="mt-12 flex gap-3" aria-hidden="true">
            {testimonials.map((item, index) => (
              <span
                key={item.highlight}
                className={`h-[5px] rounded-full transition-[width,background-color] duration-300 ${
                  index === active ? "w-10 bg-[#F5927E]" : "w-5 bg-[rgba(36,29,24,0.18)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
