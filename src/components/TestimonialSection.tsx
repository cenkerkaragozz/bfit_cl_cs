"use client";

import Image from "next/image";
import { ShieldCheck, Star } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Leaf, QuoteIcon } from "@/components/Decorations";

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
  const reduceMotion = useReducedMotion();
  const testimonials = testimonialGroups[audience];
  const participantLabel = audience === "adults" ? "BrainFit Katılımcısı" : "BrainFit Karşıyaka Velisi";

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonialGroups[audience].length);
    }, 3125);

    return () => window.clearInterval(timer);
  }, [audience, reduceMotion]);

  const testimonial = testimonials[active];

  return (
    <section id="experiences" className="section-surface relative scroll-mt-28 py-[82px] md:py-[116px]">
      <span id="about" className="absolute top-0" aria-hidden="true" />
      <Leaf className="absolute right-[4%] top-[8%] hidden md:block" />
      <div className="inner">
        <div className="relative mx-auto max-w-[980px]">
          <QuoteIcon className="mb-8" />
          <blockquote>
            <p className="display max-w-[880px] text-[clamp(36px,5vw,64px)] leading-[0.98]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${audience}-${testimonial.highlight}`}
                  className="inline-block"
                  initial={reduceMotion ? undefined : { y: 16, rotate: -2 }}
                  animate={reduceMotion ? undefined : { y: 0, rotate: 0 }}
                  exit={reduceMotion ? undefined : { y: -12, rotate: 2 }}
                  transition={{ duration: 0.38 }}
                >
                  {testimonial.lead}
                  <span className="inline-block rounded-full bg-[#FCBF48] px-5 pb-2 text-[var(--ink)]">
                    {testimonial.highlight}
                  </span>
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
              {localProofItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[18px] bg-white p-4">
                  <ShieldCheck size={19} className="shrink-0 text-[#6BC862]" />
                  <p className="text-[14px] font-extrabold text-[#241D18]">{item}</p>
                </div>
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
