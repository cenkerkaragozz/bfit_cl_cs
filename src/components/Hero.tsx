"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Brain,
  BookOpen,
  Lightbulb,
  Puzzle,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  HeroDottedPath,
  HeroRing,
  HeroStrokes,
  HeroUnderline,
  Squiggle,
  StarBurst,
} from "@/components/Decorations";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const visualDoodles = [
  {
    icon: Brain,
    position: "left-[7%] top-[8%]",
    className: "rotate-[-9deg] border-[#FF6720]/35 text-[#E06850]",
    fromX: 24,
  },
  {
    icon: Puzzle,
    position: "right-[11%] top-[18%]",
    className: "rotate-[12deg] border-[#77C8F7]/40 text-[#3A85D4]",
    fromX: -24,
  },
  {
    icon: BookOpen,
    position: "right-[2%] top-[48%]",
    className: "rotate-[8deg] border-[#B8E485]/50 text-[#72B44A]",
    fromX: -26,
  },
  {
    icon: Lightbulb,
    position: "left-[2%] bottom-[26%]",
    className: "rotate-[-7deg] border-[#FCBF48]/45 text-[#D49210]",
    fromX: 26,
  },
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  // The yellow underline starts drawing as the "nedenini" line reveals; under
  // reduced motion it stays static and visible.
  const [underlineActive, setUnderlineActive] = useState(false);
  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setTimeout(() => setUnderlineActive(true), 850);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <section className="section-surface relative isolate overflow-hidden pt-[100px] md:pt-[106px] lg:pt-[112px]">
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[var(--canvas)]"
        aria-hidden="true"
      />

      <div className="inner relative z-10 grid gap-10 pb-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-16 xl:grid-cols-[0.86fr_1.14fr]">
        <div className="relative z-20 max-w-[340px] pb-0 sm:max-w-[680px] lg:pb-8">
          <motion.div
            className="badge gap-2 border-[#E06850] bg-white/70 text-[#C4533C] shadow-[0_10px_24px_rgba(36,29,24,0.06)] backdrop-blur"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92, x: -14 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.05, duration: 0.35, ease: easeOutExpo }}
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-[#F5927E] text-white" aria-hidden="true">
              <Brain size={12} fill="currentColor" strokeWidth={2.5} />
            </span>
            Bilişsel Gelişim · Karşıyaka
          </motion.div>

          <h1 className="hero-title hero-title-home mt-5 max-w-[20ch] text-[#160A08]">
            <motion.span
              className="block"
              initial={
                reduceMotion
                  ? false
                  : { clipPath: "inset(0% 0% 100% 0%)" }
              }
              animate={
                reduceMotion
                  ? undefined
                  : { clipPath: "inset(-20% 0% -20% 0%)" }
              }
              transition={{ delay: 0.25, duration: 0.45, ease: easeOutExpo }}
            >
              Çocuğunuzun
            </motion.span>
            <motion.span
              className="block"
              initial={
                reduceMotion
                  ? false
                  : { clipPath: "inset(0% 0% 100% 0%)" }
              }
              animate={
                reduceMotion
                  ? undefined
                  : { clipPath: "inset(-20% 0% -20% 0%)" }
              }
              transition={{ delay: 0.45, duration: 0.45, ease: easeOutExpo }}
            >
              yaşadığı zorluğun
            </motion.span>
            <motion.span
              className="block"
              initial={
                reduceMotion
                  ? false
                  : { clipPath: "inset(0% 0% 100% 0%)" }
              }
              animate={
                reduceMotion
                  ? undefined
                  : { clipPath: "inset(-20% 0% -20% 0%)" }
              }
              transition={{ delay: 0.65, duration: 0.45, ease: easeOutExpo }}
            >
              <span className="relative inline-block pb-3">
                nedenini
                <HeroUnderline
                  animate={!reduceMotion}
                  active={underlineActive}
                  className="absolute inset-x-0 bottom-0 h-auto w-full text-[#FCBF48]"
                />
              </span>
              <span className="hidden xl:inline">{" "}birlikte</span>
            </motion.span>
            <motion.span
              className="mt-1 block"
              initial={
                reduceMotion
                  ? false
                  : { clipPath: "inset(0% 0% 100% 0%)" }
              }
              animate={
                reduceMotion
                  ? undefined
                  : { clipPath: "inset(-20% 0% -20% 0%)" }
              }
              transition={{ delay: 0.85, duration: 0.45, ease: easeOutExpo }}
            >
              <span className="xl:hidden">birlikte{" "}</span>
              keşfedelim.
            </motion.span>
          </h1>

          <motion.div
            className="mt-6 max-w-[560px] md:mt-7"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.45, ease: easeOutExpo }}
          >
            <p className="hero-lead">
              Bilimsel değerlendirme ve çocuğunuza özel yaklaşımımızla güçlü yönlerini ve desteğe ihtiyaç duyduğu alanları birlikte ortaya çıkarıyoruz.
            </p>
            <motion.div
              className="mt-7"
              initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.97 }}
              animate={
                reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
              }
              transition={{ delay: 0.95, duration: 0.4, ease: easeOutExpo }}
            >
              <a
                className="arrow-shift inline-flex min-h-13 max-w-full items-center justify-center gap-2 rounded-full bg-[#E86F5B] px-6 py-4 text-center text-[15px] font-extrabold leading-5 text-[#160A08] shadow-[0_18px_36px_rgba(232,111,91,0.28)] transition hover:-translate-y-1 hover:bg-[#F5927E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E86F5B] sm:px-7"
                href="#checkup-form"
              >
                <span>Ücretsiz Ön Görüşme Oluştur</span>
                <ArrowUpRight className="shrink-0" size={18} strokeWidth={2.7} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto h-[410px] w-full max-w-[680px] sm:h-[540px] md:h-[620px] md:max-w-[790px] lg:mx-0 lg:h-[580px] lg:max-w-none xl:h-[640px]">
          <HeroDottedPath
            animate={!reduceMotion}
            className="absolute right-[-10%] top-[38%] z-30 hidden h-[170px] w-[52%] rotate-[65deg] text-[#9B745F] opacity-45 md:block"
          />
          <motion.span
            className="absolute left-[9%] top-[2%] z-40 hidden sm:block"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.5, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.4, ease: easeOutExpo }}
          >
            <HeroStrokes className="h-12 w-12 text-[#FF6720]" />
          </motion.span>
          <motion.span
            className="absolute left-[10%] top-[31%] z-40 hidden md:block"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.5, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.82, duration: 0.4, ease: easeOutExpo }}
          >
            <Squiggle className="h-8 w-24" color="#8EC456" />
          </motion.span>
          <StarBurst
            animate={!reduceMotion}
            className="absolute right-[10%] top-[9%] z-40 h-10 w-10 md:h-14 md:w-14"
            color="#FCBF48"
          />
          <motion.span
            className="absolute left-[6%] top-[58%] z-40"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.5 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4, ease: easeOutExpo }}
          >
            <HeroRing className="h-4 w-4" color="#77C8F7" />
          </motion.span>
          <motion.span
            className="absolute right-[6%] bottom-[16%] z-40 hidden md:block"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.5 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.88, duration: 0.4, ease: easeOutExpo }}
          >
            <HeroRing className="h-5 w-5" color="#FF6720" />
          </motion.span>

          {visualDoodles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.className}
                className={`absolute z-40 hidden h-16 w-16 sm:grid md:h-[74px] md:w-[74px] ${item.position}`}
                aria-hidden="true"
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, scale: 0.6, x: item.fromX, y: 16 }
                }
                animate={
                  reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0, y: 0 }
                }
                transition={{
                  delay: 0.7 + index * 0.07,
                  duration: 0.45,
                  ease: easeOutExpo,
                }}
              >
                <div
                  className={`grid h-full w-full place-items-center rounded-[22px] border-2 bg-white/72 shadow-[0_14px_34px_rgba(36,29,24,0.08)] backdrop-blur ${item.className}`}
                >
                  <Icon size={34} strokeWidth={2.2} />
                </div>
              </motion.div>
            );
          })}

          <div className="absolute inset-x-0 bottom-0 top-8 z-20 overflow-hidden rounded-[34px] bg-transparent shadow-[0_34px_90px_rgba(36,29,24,0.15)] sm:top-6 sm:rounded-[44px] md:rounded-[54px]">
            <motion.div
              className="absolute inset-0"
              initial={
                reduceMotion ? false : { clipPath: "circle(0% at 62% 42%)" }
              }
              animate={
                reduceMotion
                  ? undefined
                  : { clipPath: "circle(100% at 62% 42%)" }
              }
              transition={{ delay: 0.55, duration: 0.7, ease: easeOutExpo }}
            >
              <motion.div
                className="absolute inset-0"
                initial={
                  reduceMotion ? false : { scale: 1.08, filter: "blur(6px)" }
                }
                animate={
                  reduceMotion ? undefined : { scale: 1, filter: "blur(0px)" }
                }
                transition={{ delay: 0.55, duration: 0.8, ease: easeOutExpo }}
              >
                <Image
                  src="/images/hero.png"
                  alt="Düşünen ve gülümseyen çocuk görseli - BrainFit Ana Sayfa"
                  fill
                  priority
                  sizes="(max-width: 640px) 94vw, (max-width: 1024px) 82vw, 720px"
                  className="object-cover object-[62%_center]"
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,249,245,0.26)_0%,rgba(250,249,245,0.06)_42%,rgba(22,10,8,0.03)_100%)]"
                  aria-hidden="true"
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute left-[5%] top-[48%] z-50 max-w-[226px] md:left-[8%] md:top-[48%] md:max-w-[286px]"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.45, ease: easeOutExpo }}
          >
            <motion.div
              className="rounded-[24px] border border-white/80 bg-white/92 p-4 shadow-[0_18px_40px_rgba(36,29,24,0.12)] backdrop-blur md:rounded-[30px] md:p-6"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="grid h-8 w-8 place-items-center rounded-full bg-[#FFF0D7] text-[#E06850] md:h-9 md:w-9" aria-hidden="true">
                <Sparkles size={16} strokeWidth={2.6} className="md:size-[18px]" />
              </div>
              <p className="mt-2.5 text-[15px] font-extrabold leading-6 text-[#241D18] md:mt-3 md:text-[19px] md:leading-8">
                Çocuğunuzun{" "}
                <span className="text-[#164C35]">eşsiz potansiyelini</span> keşfedelim.
              </p>
              <span className="mt-2.5 block h-1.5 w-14 rounded-full bg-[#B8E485] md:mt-3 md:w-16" aria-hidden="true" />
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
