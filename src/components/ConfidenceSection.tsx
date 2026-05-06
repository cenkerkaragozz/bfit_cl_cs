"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { DrawnUnderline, Reveal, StarBurst, Sunflower } from "@/components/Decorations";

const cards = [
  {
    title: "Guided confidence",
    copy: "Small routines that make daily decisions feel lighter.",
    image: "/images/confidence-card-1.svg",
    color: "#91DDF4",
  },
  {
    title: "Steady support",
    copy: "Clinical care and coaching coordinated around your life.",
    image: "/images/confidence-card-2.svg",
    color: "#F9DC7B",
  },
  {
    title: "Better patterns",
    copy: "Evidence-led tools for sleep, focus, and emotional recovery.",
    image: "/images/confidence-card-3.svg",
    color: "#C9F58B",
  },
];

export function ConfidenceSection() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: false, margin: "-20% 0px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % cards.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const card = cards[active];

  return (
    <section
      ref={ref}
      id="treatments"
      className="relative overflow-hidden bg-[var(--green)] py-[92px] text-white md:py-[126px]"
    >
      <span id="about" className="absolute top-0" aria-hidden="true" />
      <StarBurst className="absolute left-[4%] top-[16%] opacity-60" color="#F9DC7B" />
      <Sunflower className="absolute bottom-[-22px] left-[48%] hidden opacity-95 md:block" />
      <div className="absolute right-[-32px] top-[42%] h-32 w-32 rounded-full border-[18px] border-[#F4865D]" />

      <div className="inner grid items-center gap-12 lg:grid-cols-[0.98fr_0.86fr]">
        <Reveal>
          <div className="badge border-white/70 text-[#F9DC7B]">Caring is always free</div>
          <h2 className="display mt-8 max-w-[680px] text-[clamp(50px,7.5vw,104px)] text-white">
            We help you to{" "}
            <span className="relative inline-block">
              grow confidence
              <DrawnUnderline
                active={inView && !reduceMotion}
                className="absolute -bottom-5 left-0 w-full"
              />
            </span>{" "}
            at any age
          </h2>
        </Reveal>

        <Reveal delay={0.14} className="relative">
          <div className="flex items-stretch gap-5">
            <div className="flex flex-col justify-center gap-3" aria-label="Confidence card progress">
              {cards.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Show ${item.title}`}
                  onClick={() => setActive(index)}
                  className="relative h-[82px] w-[8px] overflow-hidden rounded-full bg-white/20"
                >
                  <motion.span
                    className="absolute bottom-0 left-0 w-full rounded-full bg-[var(--yellow)]"
                    initial={false}
                    animate={{ height: index === active ? "100%" : "20%" }}
                    transition={{ duration: 0.35 }}
                  />
                </button>
              ))}
            </div>

            <div className="relative min-h-[470px] flex-1 overflow-hidden rounded-[28px] bg-white p-4 text-[var(--ink)] shadow-[0_26px_70px_rgba(0,0,0,0.16)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.45 }}
                  className="h-full"
                >
                  <div
                    className="relative h-[325px] overflow-hidden rounded-[22px]"
                    style={{ background: card.color }}
                  >
                    <Image
                      src={card.image}
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes="(max-width: 768px) 80vw, 430px"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-3 pt-6">
                    <h3 className="font-[var(--display)] text-[34px] leading-none">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-[330px] text-[15px] leading-7 text-[rgba(36,29,24,0.66)]">
                      {card.copy}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
