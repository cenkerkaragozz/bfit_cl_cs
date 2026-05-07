"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Brain,
  BookOpen,
  ChartNoAxesColumnIncreasing,
  Globe2,
  Heart,
  Lightbulb,
  Puzzle,
  Sparkles,
  UsersRound,
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

const stats = [
  {
    value: "92%",
    copy: "BrainFit programlarına katılan bireylerin %92'si bilişsel becerilerinde gözle görülür bir gelişim sağladı.",
    icon: ChartNoAxesColumnIncreasing,
    colorClass: "text-[#2F8C49]",
    iconClass: "bg-[#EAF7DD] text-[#2F8C49]",
    lineClass: "bg-[#2F8C49]",
  },
  {
    value: "20+",
    copy: "BrainFit, 20 yılı aşkın süredir dünya genelinde 50.000’den fazla bireyin öğrenme kapasitelerini artırmasına yardımcı oldu.",
    icon: Globe2,
    colorClass: "text-[#2471C7]",
    iconClass: "bg-[#E8F2FB] text-[#2471C7]",
    lineClass: "bg-[#2471C7]",
  },
  {
    value: "100+",
    copy: "Karşıyaka BrainFit'te, 6 yaşından 60 yaşına kadar her birey için özel olarak tasarlanmış 100+ program sunuyoruz.",
    icon: UsersRound,
    colorClass: "text-[#D94C25]",
    iconClass: "bg-[#FFF0D7] text-[#D94C25]",
    lineClass: "bg-[#D94C25]",
  },
] as const;

const visualDoodles = [
  {
    icon: Brain,
    className: "left-[7%] top-[8%] rotate-[-9deg] border-[#F05A38]/35 text-[#D94C25]",
  },
  {
    icon: Puzzle,
    className: "right-[11%] top-[18%] rotate-[12deg] border-[#54B8F5]/40 text-[#2471C7]",
  },
  {
    icon: BookOpen,
    className: "right-[2%] top-[48%] rotate-[8deg] border-[#A6D96F]/50 text-[#5F9F37]",
  },
  {
    icon: Lightbulb,
    className: "left-[2%] bottom-[26%] rotate-[-7deg] border-[#FBAE17]/45 text-[#C97900]",
  },
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[var(--canvas)] pt-[110px] md:pt-[122px] lg:pt-[134px]">
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_84%_8%,rgba(249,220,123,0.45),transparent_31%),radial-gradient(circle_at_15%_28%,rgba(244,134,93,0.12),transparent_22%),linear-gradient(180deg,#FAF9F5_0%,#FAF9F5_70%,#F4F1EB_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-14%] top-[-18%] -z-10 h-[360px] w-[360px] rounded-full bg-[#F9DC7B]/45 blur-3xl md:h-[560px] md:w-[560px]"
        aria-hidden="true"
      />

      <div className="inner relative z-10 grid gap-10 pb-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-0 xl:grid-cols-[0.86fr_1.14fr]">
        <div className="relative z-20 max-w-[332px] pb-0 sm:max-w-[650px] lg:pb-24">
          <div className="badge gap-2 border-[#D94C25] bg-white/70 text-[#B63A1A] shadow-[0_10px_24px_rgba(36,29,24,0.06)] backdrop-blur">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-[#F05A38] text-white" aria-hidden="true">
              <Heart size={12} fill="currentColor" strokeWidth={2.5} />
            </span>
            Karşıyaka BrainFit
          </div>

          <h1 className="mt-5 max-w-[332px] font-[var(--body)] text-[clamp(35px,9vw,48px)] font-extrabold leading-[1.02] tracking-normal text-[#160A08] sm:max-w-[680px] sm:text-[clamp(58px,8.5vw,78px)] lg:text-[clamp(60px,5.25vw,86px)]">
            <span className="block">Hafıza ve</span>
            <span className="relative inline-block text-[#D94C25]">
              Öğrenme Kapasitenizi
              <HeroUnderline
                animate={!reduceMotion}
                className="absolute -bottom-5 left-[-6px] h-7 w-[min(100%,330px)] text-[#FBAE17] sm:-bottom-6 sm:w-[360px]"
              />
            </span>
            <span className="mt-1 block">Artırın</span>
          </h1>

          <div className="mt-9 max-w-[332px] sm:max-w-[560px] md:mt-11">
            <p className="max-w-full text-[19px] font-extrabold leading-8 text-[#241D18] md:text-[25px] md:leading-9">
              Karşıyaka’da Zihin Check-Up Fırsatı! Hemen Katılın!
            </p>
            <p className="mt-4 text-[16px] font-medium leading-8 text-[rgba(36,29,24,0.72)] md:text-lg">
              Çocuğunuzun dikkat, hafıza ve öğrenme becerilerini bilimsel
              egzersizlerle desteklemek için ilk adımı atın.
            </p>
            <a
              className="arrow-shift mt-7 inline-flex min-h-13 max-w-full items-center justify-center gap-2 rounded-full bg-[#F05A38] px-6 py-4 text-center text-[15px] font-extrabold leading-5 text-[#160A08] shadow-[0_18px_36px_rgba(240,90,56,0.24)] transition hover:-translate-y-1 hover:bg-[#FF6845] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D94C25] sm:px-7"
              href="#help"
            >
              <span>Ücretsiz Zihin Check-Up’ı Alın</span>
              <ArrowUpRight className="shrink-0" size={18} strokeWidth={2.7} />
            </a>
          </div>
        </div>

        <div className="relative z-10 mx-auto h-[410px] w-full max-w-[680px] sm:h-[540px] md:h-[640px] md:max-w-[790px] lg:mx-0 lg:h-[650px] lg:max-w-none xl:h-[720px]">
          <div
            className="absolute -right-4 top-1 h-[44%] w-[44%] rounded-full bg-[#F9DC7B]/70 blur-sm"
            aria-hidden="true"
          />
          <div
            className="absolute -left-4 bottom-[8%] h-[30%] w-[46%] rounded-full bg-[#91DDF4]/45 blur-xl"
            aria-hidden="true"
          />

          <HeroDottedPath
            animate={!reduceMotion}
            className="absolute right-[-10%] top-[38%] z-30 hidden h-[170px] w-[52%] rotate-[65deg] text-[#9B745F] opacity-45 md:block"
          />
          <HeroStrokes className="absolute left-[9%] top-[2%] z-40 hidden h-12 w-12 text-[#F05A38] sm:block" />
          <Squiggle className="absolute left-[10%] top-[31%] z-40 hidden h-8 w-24 md:block" color="#7CB342" />
          <StarBurst
            animate={!reduceMotion}
            className="absolute right-[10%] top-[9%] z-40 h-10 w-10 md:h-14 md:w-14"
            color="#FBAE17"
          />
          <HeroRing className="absolute left-[6%] top-[58%] z-40 h-4 w-4" color="#54B8F5" />
          <HeroRing className="absolute right-[6%] bottom-[16%] z-40 hidden h-5 w-5 md:block" color="#F05A38" />

          {visualDoodles.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.className}
                className={`absolute z-40 hidden h-16 w-16 place-items-center rounded-[22px] border-2 bg-white/72 shadow-[0_14px_34px_rgba(36,29,24,0.08)] backdrop-blur sm:grid md:h-[74px] md:w-[74px] ${item.className}`}
                aria-hidden="true"
              >
                <Icon size={34} strokeWidth={2.2} />
              </div>
            );
          })}

          <div className="absolute inset-x-0 bottom-0 top-8 z-20 overflow-hidden rounded-[34px] bg-transparent shadow-[0_34px_90px_rgba(36,29,24,0.16)] sm:top-6 sm:rounded-[44px] md:rounded-[54px]">
            <Image
              src="/images/hero.png"
              alt="Gülümseyen bir çocuğun düşünerek yukarı baktığı BrainFit hero görseli"
              fill
              priority
              sizes="(max-width: 640px) 94vw, (max-width: 1024px) 82vw, 720px"
              className="object-cover object-[62%_center]"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,249,245,0.26)_0%,rgba(250,249,245,0.06)_42%,rgba(22,10,8,0.03)_100%)]"
              aria-hidden="true"
            />
          </div>

          <motion.div
            className="absolute left-[5%] top-[48%] z-50 max-w-[260px] rounded-[30px] border border-white/80 bg-white/92 p-5 shadow-[0_24px_60px_rgba(36,29,24,0.14)] backdrop-blur md:left-[8%] md:top-[48%] md:max-w-[286px] md:p-6"
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[#FFF0D7] text-[#D94C25]" aria-hidden="true">
              <Sparkles size={18} strokeWidth={2.6} />
            </div>
            <p className="mt-3 text-[17px] font-extrabold leading-7 text-[#241D18] md:text-[19px] md:leading-8">
              Her çocuğun potansiyeli{" "}
              <span className="text-[#D94C25]">keşfedilmeyi</span> bekler.
            </p>
            <span className="mt-3 block h-1.5 w-16 rounded-full bg-[#A6D96F]" aria-hidden="true" />
          </motion.div>
        </div>
      </div>

      <div className="relative z-20 pb-14 md:pb-20 lg:mt-[-58px]">
        <dl className="inner grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-5">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.value}
                className="relative w-full max-w-[332px] overflow-hidden rounded-[24px] border border-white/80 bg-white/86 p-6 shadow-[0_24px_70px_rgba(36,29,24,0.1)] backdrop-blur sm:max-w-none md:p-7 lg:min-h-[230px]"
              >
                <div
                  className={`absolute bottom-5 left-6 h-1.5 w-20 rounded-full opacity-80 md:left-7 ${stat.lineClass}`}
                  aria-hidden="true"
                />
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
                  <div
                    className={`grid h-16 w-16 shrink-0 place-items-center rounded-full md:h-[76px] md:w-[76px] ${stat.iconClass}`}
                    aria-hidden="true"
                  >
                    <Icon size={34} strokeWidth={2.25} />
                  </div>
                  <div className="min-w-0">
                    <dt className={`text-[clamp(52px,13vw,70px)] font-extrabold leading-none tracking-normal md:text-[72px] ${stat.colorClass}`}>
                      {stat.value}
                    </dt>
                    <dd className="mt-3 break-words pb-8 text-[15px] font-medium leading-7 text-[rgba(36,29,24,0.78)] md:text-[16px]">
                      {stat.copy}
                    </dd>
                  </div>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
