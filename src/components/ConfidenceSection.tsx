"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const phrases = [
  "Sizi dinleriz",
  "Birlikte değerlendiririz",
  "Sonraki adımı netleştiririz",
] as const;

export function ConfidenceSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const active = !reduceMotion && inView;

  return (
    <section
      ref={sectionRef}
      id="reframe"
      aria-labelledby="reframe-title"
      className="section-surface relative scroll-mt-28 overflow-hidden py-10 md:py-[84px]"
    >
      <div className="mx-auto w-[min(1440px,calc(100%-48px))]">
        <div className="rounded-[28px] bg-[#F4F1EB] px-5 py-8 sm:px-8 md:rounded-[36px] md:px-12 md:py-14 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12 lg:px-14 lg:py-16 xl:px-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            animate={active ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.5, ease: easeOutExpo }}
          >
            <div className="badge border-[#E86F5B] bg-[#FEF0EC] text-[#C4533C]">
              Birlikte anlayalım
            </div>

            <h2
              id="reframe-title"
              className="section-title mt-7 max-w-[760px]"
            >
              <span className="block">Tek başınıza</span>
              anlamlandırmak zorunda değilsiniz.
            </h2>
          </motion.div>

          <motion.div
            className="relative mt-8 pt-5 md:mt-10 md:pt-7 lg:mt-0 lg:py-1 lg:pl-10 xl:pl-12"
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={active ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.5, ease: easeOutExpo }}
          >
            {/* Coral divider draws in: horizontal on mobile, vertical on desktop */}
            <motion.span
              aria-hidden="true"
              className="absolute left-0 top-0 h-[2px] w-full rounded-full bg-[#E86F5B] lg:hidden"
              style={{ transformOrigin: "left" }}
              initial={reduceMotion ? false : { scaleX: 0 }}
              animate={active ? { scaleX: 1 } : undefined}
              transition={{ delay: 0.42, duration: 0.35, ease: easeOutExpo }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute left-0 top-0 hidden h-full w-[2px] rounded-full bg-[#E86F5B] lg:block"
              style={{ transformOrigin: "top" }}
              initial={reduceMotion ? false : { scaleY: 0 }}
              animate={active ? { scaleY: 1 } : undefined}
              transition={{ delay: 0.42, duration: 0.35, ease: easeOutExpo }}
            />
            <p className="max-w-[32ch] text-[clamp(1.0625rem,1.55vw,1.4rem)] font-medium leading-[1.5] text-[#241D18] md:leading-[1.55]">
              Ön görüşmede sizi dinler, gözlemlerinizi birlikte değerlendirir ve çocuğunuz için sonraki adımı netleştiririz.
            </p>

            <ul className="mt-6 text-[13px] font-extrabold leading-5 text-[#241D18] sm:flex sm:flex-wrap sm:items-center md:mt-8 lg:flex-nowrap lg:text-[12px] lg:whitespace-nowrap xl:text-[13px]">
              {phrases.map((phrase, index) => (
                <motion.li
                  key={phrase}
                  className={
                    index === 0
                      ? "pb-2 sm:pr-4 sm:pb-0"
                      : index === 1
                        ? "border-t border-[rgba(36,29,24,0.16)] py-2 sm:border-l sm:border-t-0 sm:px-4 sm:py-0"
                        : "border-t border-[rgba(36,29,24,0.16)] pt-2 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0"
                  }
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={active ? { opacity: 1, y: 0 } : undefined}
                  transition={{
                    delay: 0.5 + index * 0.07,
                    duration: 0.35,
                    ease: easeOutExpo,
                  }}
                >
                  {phrase}
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-6 w-full sm:inline-block sm:w-auto md:mt-8 lg:w-full"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={active ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.72, duration: 0.4, ease: easeOutExpo }}
            >
              <a
                href="#checkup-form"
                className="pill-button arrow-shift w-full !min-h-13 !bg-[#E86F5B] !px-7 !text-[15px] !text-[#160A08] !shadow-[0_14px_28px_rgba(232,111,91,0.24)] hover:!bg-[#F5927E] sm:w-auto sm:!px-8 lg:w-full"
              >
                Ücretsiz Ön Görüşme Oluştur
                <ArrowUpRight aria-hidden="true" size={20} strokeWidth={2.4} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
