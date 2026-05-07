"use client";

import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Leaf, QuoteIcon, Reveal } from "@/components/Decorations";

const words = ["net", "sakin", "hazır"];

export function TestimonialSection() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % words.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section id="clinics" className="relative bg-[#FEF9F5] py-[82px] md:py-[116px]">
      <span id="about" className="absolute top-0" aria-hidden="true" />
      <Leaf className="absolute right-[4%] top-[8%] hidden md:block" />
      <div className="inner grid items-center gap-12 lg:grid-cols-[0.84fr_1fr]">
        <Reveal>
          <article className="relative overflow-hidden rounded-[32px] bg-[#4A332B] p-5 text-white shadow-[0_30px_70px_rgba(36,29,24,0.16)] md:p-7">
            <div className="relative h-[500px] overflow-hidden rounded-[26px] bg-[#FBAE17]">
              <Image
                src="/images/doctor-profile.svg"
                alt="BrainFit Karşıyaka ekibini temsil eden sıcak bir portre illüstrasyonu"
                fill
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-cover object-bottom"
              />
              <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-[13px] font-extrabold text-[#241D18]">
                Fotoğraf alanı
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 px-3 pb-2 pt-7">
              <div>
                <h3 className="font-[var(--display)] text-[35px] leading-none">
                  BrainFit Karşıyaka Ekibi
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-white/70">
                  Zihin Check-Up ve bilişsel egzersiz programları
                </p>
              </div>
              <a
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#241d18] transition hover:rotate-12"
                href="#checkup-form"
                aria-label="Check-Up formuna git"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <QuoteIcon className="mb-8" />
          <blockquote>
            <p className="display max-w-[760px] text-[clamp(45px,6.2vw,86px)]">
              Check-Up sonrası kendimizi daha{" "}
              <span className="relative inline-grid min-w-[185px] align-baseline sm:min-w-[230px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[active]}
                    className="inline-block rounded-full bg-[#FBAE17] px-5 pb-2 text-[var(--ink)]"
                    initial={reduceMotion ? undefined : { opacity: 0, y: 16, rotate: -2 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -12, rotate: 2 }}
                    transition={{ duration: 0.38 }}
                  >
                    {words[active]}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              hissettik.
            </p>
          </blockquote>

          <p className="body-copy mt-8 max-w-[600px]">
            Öğretmeni “dikkati çok dağılıyor” dediğinde ne yapacağımızı
            bilmiyorduk. Check-Up sonrası tabloyu ilk kez sakin ve anlaşılır
            şekilde gördük.
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
              <p className="font-extrabold">Karşıyaka’dan bir veli</p>
              <div className="mt-1 flex items-center gap-1 text-[#FBAE17]" aria-label="Google 4.6 puan">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" strokeWidth={2.2} />
                ))}
                <span className="ml-2 text-[14px] font-extrabold text-[rgba(36,29,24,0.58)]">
                  Google 4.6/5
                </span>
              </div>
            </div>
          </div>

          <div className="absolute right-2 top-[50%] hidden flex-col gap-3 md:flex">
            {words.map((word, index) => (
              <span
                key={word}
                className={`h-10 w-[5px] rounded-full ${
                  index === active ? "bg-[#F05A38]" : "bg-[rgba(36,29,24,0.18)]"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
