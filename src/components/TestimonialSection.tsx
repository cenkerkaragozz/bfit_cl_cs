"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Leaf, QuoteIcon, Reveal } from "@/components/Decorations";

const words = ["calmer", "brighter", "steadier"];

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
    <section id="clinics" className="relative bg-[var(--paper)] py-[82px] md:py-[116px]">
      <Leaf className="absolute right-[4%] top-[8%] hidden md:block" />
      <div className="inner grid items-center gap-12 lg:grid-cols-[0.84fr_1fr]">
        <Reveal>
          <article className="relative overflow-hidden rounded-[48px] bg-[#4A332B] p-5 text-white shadow-[0_30px_70px_rgba(36,29,24,0.16)] md:p-7">
            <div className="relative h-[520px] overflow-hidden rounded-[38px] bg-[var(--yellow)]">
              <Image
                src="/images/doctor-profile.svg"
                alt="Doctor Adrian Vale portrait"
                fill
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-cover object-bottom"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-3 pb-2 pt-7">
              <div>
                <h3 className="font-[var(--display)] text-[35px] leading-none">
                  Dr. Adrian Vale
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-white/70">
                  Clinical psychologist, BrainFit care lead
                </p>
              </div>
              <a
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#241d18] transition hover:rotate-12"
                href="#help"
                aria-label="View doctor profile"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <QuoteIcon className="mb-8" />
          <blockquote>
            <p className="display max-w-[720px] text-[clamp(48px,6.5vw,92px)]">
              I feel{" "}
              <span className="relative inline-grid min-w-[230px] align-baseline">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[active]}
                    className="inline-block rounded-full bg-[var(--yellow)] px-5 pb-2 text-[var(--ink)]"
                    initial={{ opacity: 0, y: 16, rotate: -2 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, y: -12, rotate: 2 }}
                    transition={{ duration: 0.38 }}
                  >
                    {words[active]}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              after every conversation.
            </p>
          </blockquote>

          <p className="body-copy mt-8 max-w-[560px]">
            BrainFit gave me a simple plan, not a pile of advice. I knew what
            to practice, when to ask for care, and how to notice progress.
          </p>

          <div className="mt-10 flex items-center gap-5">
            <Image
              src="/images/avatar-mira.svg"
              alt="Mira Chen"
              width={58}
              height={58}
              className="rounded-full"
            />
            <div>
              <p className="font-extrabold">Mira Chen</p>
              <p className="text-[14px] text-[rgba(36,29,24,0.58)]">
                BrainFit member
              </p>
            </div>
          </div>

          <div className="absolute right-2 top-[50%] hidden flex-col gap-3 md:flex">
            {words.map((word, index) => (
              <span
                key={word}
                className={`h-10 w-[5px] rounded-full ${
                  index === active ? "bg-[var(--coral)]" : "bg-[rgba(36,29,24,0.18)]"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
