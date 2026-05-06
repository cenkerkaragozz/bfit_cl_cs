"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDoodle, StarBurst, Squiggle } from "@/components/Decorations";

const portraits = [
  {
    src: "/images/portrait-calm.svg",
    alt: "Smiling person in a calm blue portrait card",
    className:
      "left-[2%] top-[18%] z-20 h-[188px] w-[134px] rotate-[-6deg] bg-[var(--sky)] md:h-[342px] md:w-[244px] xl:h-[382px] xl:w-[272px]",
  },
  {
    src: "/images/portrait-happier.svg",
    alt: "Happy wellness portrait on a coral background",
    className:
      "right-[12%] top-[4%] z-30 h-[208px] w-[146px] rotate-[7deg] bg-[var(--coral)] md:h-[378px] md:w-[264px] xl:h-[424px] xl:w-[296px]",
  },
  {
    src: "/images/portrait-positive.svg",
    alt: "Positive portrait card on a lavender background",
    className:
      "bottom-[4%] right-[0%] z-10 h-[176px] w-[128px] rotate-[-2deg] bg-[var(--lavender)] md:h-[310px] md:w-[225px] xl:h-[348px] xl:w-[253px]",
  },
];

const labels = [
  "Happier",
  "Calm",
  "Positive",
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] pb-6 pt-[96px] md:pb-10 md:pt-[118px]">
      <div className="inner grid items-center gap-5 md:gap-8 lg:grid-cols-[0.95fr_1.05fr] xl:gap-12">
        <div className="relative z-10 max-w-[620px]">
          <div className="badge">Mental health at 30&apos;s</div>
          <h1 className="display mt-5 text-[clamp(50px,8.7vw,126px)] md:mt-7 xl:text-[clamp(72px,9.5vw,136px)]">
            <span className="block text-[var(--muted-brown)]">Mental health</span>
            <span className="block text-[var(--ink)]">is wealth</span>
          </h1>
          <div className="mt-6 flex items-end gap-5 md:mt-7 md:gap-6">
            <a
              className="grid h-[58px] w-[58px] shrink-0 place-items-center rounded-full border border-[var(--line)] bg-white transition hover:-translate-y-1"
              href="#help"
              aria-label="Scroll to help section"
            >
              <ArrowDown size={22} />
            </a>
            <p className="body-copy max-w-[385px]">
              A calmer way to start care, designed around everyday support,
              practical programs, and thoughtful clinical guidance.
            </p>
          </div>
        </div>

        <div className="relative min-h-[270px] md:min-h-[500px] lg:min-h-[560px] xl:min-h-[610px]">
          <StarBurst className="absolute left-[10%] top-[0%] z-40 h-12 w-12" />
          <Squiggle className="absolute right-[3%] top-[5%] z-40 hidden md:block" />
          <ArrowDoodle className="absolute bottom-[8%] left-[4%] z-40 hidden md:block" />

          {portraits.map((portrait, index) => (
            <motion.div
              key={portrait.src}
              className={`absolute overflow-hidden rounded-[20px] shadow-[0_28px_70px_rgba(36,29,24,0.16)] ${portrait.className}`}
              initial={{ opacity: 0, scale: 0.86, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                priority={index < 2}
                sizes="(max-width: 768px) 48vw, 320px"
                className="object-cover"
              />
            </motion.div>
          ))}

          {labels.map((label, index) => (
            <motion.div
              key={label}
              className={[
                "absolute z-50 rounded-full border border-[rgba(36,29,24,0.13)] bg-white px-5 py-3 text-[15px] font-extrabold shadow-[0_14px_35px_rgba(36,29,24,0.12)]",
                index === 0 ? "right-[4%] top-[29%]" : "",
                index === 1 ? "left-[0%] top-[48%]" : "",
                index === 2 ? "bottom-[14%] right-[23%]" : "",
              ].join(" ")}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -10, 0],
                      rotate: [0, index === 1 ? -3 : 3, 0],
                    }
              }
              transition={{
                duration: 3.6 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
