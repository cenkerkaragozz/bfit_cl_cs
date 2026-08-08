/*
THESIS: Ongoing support is a progression, so one icon-led stepped rail carries the three stages and ends with a separate follow-up statement.
OWN-WORLD: BrainFit canvas, rising mint-tinted steps, forest structure, and a coral follow-up statement carry the selected visual.
STORY: Personal exercises lead to regular tracking and, when needed, a renewed plan; the CTA creates the next step.
FIRST VIEWPORT: The compact staircase sits left while copy and CTA sit right; the same ordered content stacks vertically below the desktop breakpoint.
FORM: Selected icon-led stepped rail; this is a precise local extension and needs no concept seed.
*/

"use client";

import { useRef } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  ClipboardClock,
  HeartPulse,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const supportRows = [
  {
    number: "01",
    title: "Kişiye özel bilişsel egzersizler",
    icon: BrainCircuit,
    desktopHeight: "xl:h-[52%]",
  },
  {
    number: "02",
    title: "Düzenli gelişim takibi",
    icon: ChartNoAxesCombined,
    desktopHeight: "xl:h-[76%]",
  },
  {
    number: "03",
    title: "Gerektiğinde planın yeniden değerlendirilmesi",
    icon: ClipboardClock,
    desktopHeight: "xl:h-full",
  },
] as const;

const titleId = "post-plan-support-title-children";
const centerMessage = "Çocuğunuzun gelişimi sürekli takipte.";
const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];
const columnDelay = (i: number) => 0.45 + i * 0.1;

export function PostPlanSupportSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const active = !reduceMotion && inView;
  // The staircase sits well below the section start on mobile, so a section
  // observer alone fires before the columns are visible. A second observer on
  // the staircase wrapper drives the columns, their content sequences, the
  // follow-up band, and the heart acknowledgment when they can actually be seen.
  const visualRef = useRef<HTMLDivElement>(null);
  const visualInView = useInView(visualRef, { once: true, margin: "-80px" });
  const visualActive = !reduceMotion && visualInView;

  return (
    <section
      ref={sectionRef}
      className="section-pad section-surface relative overflow-hidden"
      aria-labelledby={titleId}
    >
      <div className="inner grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:gap-12 xl:gap-14">
        <motion.div
          className="relative min-w-0 xl:order-2"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={active ? { opacity: 1, y: 0 } : undefined}
          transition={{
            delay: columnDelay(0),
            duration: 0.45,
            ease: easeOutExpo,
          }}
        >
          <div className="badge border-[#E86F5B] bg-[#FEF0EC] text-[#C4533C]">PLAN SONRASI</div>
          <h2 id={titleId} className="section-title mt-7 max-w-[560px]">
            Plan hazırlandıktan sonra süreç nasıl devam ediyor?
          </h2>
          <p className="body-copy mt-5 max-w-[560px]">
            Değerlendirmede ortaya çıkan ihtiyaçlara göre hazırlanan plan, çocuğunuzun gelişimi doğrultusunda takip edilir.
          </p>

          <a
            className="pill-button arrow-shift mt-7 min-h-[52px] w-full !bg-[#E86F5B] !text-[#160A08] !shadow-[0_18px_36px_rgba(232,111,91,0.28)] hover:!bg-[#F5927E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E86F5B] md:w-auto md:min-w-[292px]"
            href="#checkup-form"
          >
            Ücretsiz Ön Görüşme Oluştur
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </motion.div>

        <div className="relative min-w-0 xl:order-1">
          <div ref={visualRef} className="mx-auto w-full max-w-[560px]">
            <ol
              aria-label="Plan sonrası takip adımları"
              className="m-0 grid min-h-0 list-none overflow-hidden rounded-[24px] border border-[rgba(22,76,53,0.12)] bg-white p-0 xl:h-[418px] xl:grid-cols-3 xl:items-end xl:rounded-none xl:border-0 xl:bg-transparent"
            >
              {supportRows.map((row, index) => {
                const Icon = row.icon;
                const delay = columnDelay(index);

                return (
                  <motion.li
                    key={row.number}
                    className={`${row.desktopHeight} grid min-w-0 grid-cols-[32px_44px_minmax(0,1fr)] items-center gap-3 border-t border-[rgba(22,76,53,0.12)] px-4 py-4 text-[#164C35] first:border-t-0 xl:flex xl:flex-col xl:items-start xl:border-x xl:border-b xl:border-t-[3px] xl:border-x-[rgba(22,76,53,0.12)] xl:border-b-[rgba(22,76,53,0.12)] xl:border-t-[#164C35] xl:bg-[#F7FAF7] xl:px-5 xl:py-6`}
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }
                    }
                    animate={
                      visualActive
                        ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }
                        : undefined
                    }
                    transition={{ delay, duration: 0.35, ease: easeOutExpo }}
                  >
                    <motion.span
                      className="text-[13px] font-extrabold leading-none tracking-[0.08em] text-[#E86F5B] xl:text-[24px] xl:tracking-[0.04em]"
                      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                      animate={
                        visualActive ? { opacity: 1, y: 0 } : undefined
                      }
                      transition={{
                        delay: delay + 0.26,
                        duration: 0.28,
                        ease: easeOutExpo,
                      }}
                    >
                      {row.number}
                    </motion.span>
                    <motion.span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F0F7F2] text-[#164C35] xl:mt-auto xl:h-auto xl:w-auto xl:place-items-start xl:rounded-none xl:bg-transparent"
                      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                      animate={
                        visualActive ? { opacity: 1, y: 0 } : undefined
                      }
                      transition={{
                        delay: delay + 0.3,
                        duration: 0.28,
                        ease: easeOutExpo,
                      }}
                    >
                      <Icon
                        className="h-7 w-7 xl:h-11 xl:w-11"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </motion.span>
                    <motion.span
                      className="min-w-0 text-[15px] font-extrabold leading-5 text-[#241D18] xl:mt-4"
                      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                      animate={
                        visualActive ? { opacity: 1, y: 0 } : undefined
                      }
                      transition={{
                        delay: delay + 0.34,
                        duration: 0.28,
                        ease: easeOutExpo,
                      }}
                    >
                      {row.title}
                    </motion.span>
                  </motion.li>
                );
              })}
            </ol>

            <motion.div
              className="mt-4 flex min-h-[80px] items-center gap-4 border border-[rgba(22,76,53,0.12)] border-t-[3px] border-t-[#164C35] bg-[#FAF7F2] px-6 text-[#E86F5B]"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={visualActive ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 1.05, duration: 0.35, ease: easeOutExpo }}
            >
              <motion.span
                initial={reduceMotion ? false : { scale: 1 }}
                animate={
                  visualActive ? { scale: [1, 1.14, 1] } : undefined
                }
                transition={{ delay: 1.2, duration: 0.45, ease: "easeOut" }}
              >
                <HeartPulse size={36} strokeWidth={1.8} aria-hidden="true" />
              </motion.span>
              <span className="text-[18px] font-extrabold leading-6">
                {centerMessage}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
