"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Leaf, QuoteIcon, Reveal } from "@/components/Decorations";

const testimonials = [
  {
    lead: "Zihin Check-Up sonrasında durumu çok daha ",
    highlight: "net",
    tail: " gördük.",
  },
  {
    lead: "Görüşmemizin sonrasında içimiz çok daha ",
    highlight: "rahatladı",
    tail: ".",
  },
  {
    lead: "BrainFit artık kendimizi daha ",
    highlight: "hazır",
    tail: " hissediyoruz.",
  },
];

export function TestimonialSection() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const testimonial = testimonials[active];

  return (
    <section id="clinics" className="relative bg-[var(--canvas)] py-[82px] md:py-[116px]">
      <span id="about" className="absolute top-0" aria-hidden="true" />
      <Leaf className="absolute right-[4%] top-[8%] hidden md:block" />
      <div className="inner grid items-center gap-12 lg:grid-cols-[0.84fr_1fr]">
        <Reveal>
          <article className="relative overflow-hidden rounded-[32px] bg-[#241D18] p-5 text-white shadow-[0_34px_90px_rgba(36,29,24,0.15)] md:p-7">
            <div className="relative h-[500px] overflow-hidden rounded-[26px] bg-[#FCBF48]">
              <Image
                src="/images/doctor-profile.svg"
                alt="BrainFit Karşıyaka Uzman Ekibi Görseli"
                fill
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-cover object-bottom"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-3 pb-2 pt-7">
              <div>
                <h3 className="display text-[35px] leading-none">
                  BrainFit Karşıyaka Uzman Kadrosu
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-white/70">
                  Zihin Check-Up ve Bireysel Gelişim Programları
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <QuoteIcon className="mb-8" />
          <blockquote>
            <p className="display max-w-[760px] text-[clamp(45px,6.2vw,86px)]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={testimonial.highlight}
                  className="inline-block"
                  initial={reduceMotion ? undefined : { opacity: 0, y: 16, rotate: -2 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -12, rotate: 2 }}
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

          <p className="body-copy mt-8 max-w-[600px]">
            “Dikkati çok dağılıyor” geri bildirimleri bizi kaygılandırıyordu.
            Check-Up sayesinde sorunun kaynağını net bir şekilde anlayabildik.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Image
              src="/images/avatar-mira.svg"
              alt=""
              aria-hidden="true"
              width={58}
              height={58}
              className="rounded-full"
            />
            <div>
              <p className="font-extrabold">BrainFit Karşıyaka Velisi</p>
              <div className="mt-1 flex items-center gap-1 text-[#FCBF48]" aria-label="Google Puanı: 4.6">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" strokeWidth={2.2} />
                ))}
                <span className="ml-2 text-[14px] font-extrabold text-[rgba(36,29,24,0.58)]">
                  Google Müşteri Puanı: 4.6/5
                </span>
              </div>
            </div>
          </div>

          <div className="absolute right-2 top-[50%] hidden flex-col gap-3 md:flex">
            {testimonials.map((item, index) => (
              <span
                key={item.highlight}
                className={`h-10 w-[5px] rounded-full ${
                  index === active ? "bg-[#F5927E]" : "bg-[rgba(36,29,24,0.18)]"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
