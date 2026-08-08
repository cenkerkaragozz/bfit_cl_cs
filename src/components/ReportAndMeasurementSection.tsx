"use client";

import {
  Brain,
  Ear,
  Eye,
  Heart,
  HeartHandshake,
  Target,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const adultClusters = [
  {
    id: "attention",
    label: "Dikkat",
    color: "#E86F5B",
    icon: Target,
    position:
      "left-1/2 top-[13.7%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "memory",
    label: "Hafıza",
    color: "#164C35",
    icon: Brain,
    position:
      "left-[18.5%] top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "visual",
    label: "Görsel Beceriler",
    color: "#E7A500",
    icon: Eye,
    position:
      "left-[81.5%] top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "auditory",
    label: "İşitsel Beceriler",
    color: "#2AB3D4",
    icon: Ear,
    position:
      "left-[31.5%] top-[79.2%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "emotional",
    label: "Duygusal Düzenleme",
    color: "#8FC52B",
    icon: HeartHandshake,
    position:
      "left-[68.5%] top-[79.2%] -translate-x-1/2 -translate-y-1/2",
  },
] as const;

const childClusters = [
  {
    id: "attention",
    label: "Dikkat",
    color: "#E86F5B",
    icon: Target,
    position:
      "left-1/2 top-[13.7%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "memory",
    label: "Hafıza",
    color: "#164C35",
    icon: Brain,
    position:
      "left-[18.5%] top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "visual",
    label: "Görsel Beceriler",
    color: "#E7A500",
    icon: Eye,
    position:
      "left-[81.5%] top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "auditory",
    label: "İşitsel Beceriler",
    color: "#2AB3D4",
    icon: Ear,
    position:
      "left-[31.5%] top-[79.2%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "emotional",
    label: "Duygusal Düzenleme",
    color: "#8FC52B",
    icon: HeartHandshake,
    position:
      "left-[68.5%] top-[79.2%] -translate-x-1/2 -translate-y-1/2",
  },
] as const;

function ChildCognitiveProfileSection({
  surface,
}: {
  surface: "canvas" | "white";
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="cognitive-profile"
      aria-labelledby="child-cognitive-profile-title"
      className={`${surface === "white" ? "bg-white" : "section-surface"} scroll-mt-28 pb-[128px] pt-[72px] md:py-[112px]`}
    >
      <div className="inner grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-10 xl:gap-16">
        <div>
          <div className="badge !border-[#E86F5B] !bg-[#E86F5B] !text-white">
            Bilişsel Profil
          </div>
          <h2
            id="child-cognitive-profile-title"
            className="section-title mt-7 max-w-[620px]"
          >
            Çocuğunuzun güçlü yönlerini birlikte görelim.
          </h2>
          <p className="body-copy mt-5 max-w-[560px]">
            Dikkat, hafıza, görsel ve işitsel beceriler ile duygusal
            düzenlemeyi birlikte değerlendiriyoruz.
          </p>

          <div className="mt-8 flex max-w-[500px] items-start gap-4 text-[14px] font-semibold leading-6 text-[var(--text-support)]">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#F5F0FE] text-[#9B66F4]">
              <Heart size={22} strokeWidth={2.1} aria-hidden="true" />
            </span>
            <p className="pt-0.5">
              Her alan, çocuğunuzun öğrenme biçimini daha iyi anlamamıza
              yardımcı olur.
            </p>
          </div>
        </div>

        <div
          data-asset-id="SH-DIAG-02-MOBILE"
          className="rounded-[28px] bg-[#F4F1EB] p-3 sm:p-4 lg:hidden"
          aria-label="Bilişsel profil alanları"
        >
          <motion.div
            className="flex min-h-[84px] items-center justify-between gap-5 rounded-[22px] bg-[#241D18] px-5 py-4 text-white"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={reduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
          >
            <span className="display text-[28px] leading-none">
              Bilişsel Profil
            </span>
            <span className="text-right text-[12px] font-bold leading-5 text-white/70">
              Beş alan,
              <br />
              tek bir bütün
            </span>
          </motion.div>

          <ul className="mt-3 overflow-hidden rounded-[22px] bg-white px-4">
            {childClusters.map((cluster, index) => {
              const Icon = cluster.icon;

              return (
                <motion.li
                  key={cluster.id}
                  className={`flex min-h-[68px] items-center gap-4 py-3 ${index === childClusters.length - 1 ? "" : "border-b border-[rgba(36,29,24,0.1)]"}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={
                    reduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: 0.12 + index * 0.06,
                    duration: 0.4,
                    ease: easeOutExpo,
                  }}
                >
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full"
                    style={{ backgroundColor: `${cluster.color}14` }}
                  >
                    <Icon
                      size={24}
                      strokeWidth={2}
                      style={{ color: cluster.color }}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[15px] font-extrabold text-[#241D18]">
                    {cluster.label}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <div
          data-asset-id="SH-DIAG-02"
          className="relative mx-auto hidden aspect-[1.15/1] w-full max-w-[620px] lg:block"
          aria-label="Bilişsel profil alanları"
        >
          <motion.span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 aspect-square w-[63%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#E4DDD3]"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={reduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.5, ease: easeOutExpo }}
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-[13.7%] h-[36.3%] w-px -translate-x-1/2 bg-[#D9D0C5]"
          >
            <motion.span
              aria-hidden="true"
              className="block h-full w-full bg-[#D9D0C5]"
              style={{ transformOrigin: "bottom" }}
              initial={reduceMotion ? false : { scaleY: 0 }}
              whileInView={reduceMotion ? undefined : { scaleY: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.35, duration: 0.4, ease: easeOutExpo }}
            />
          </span>
          <motion.span
            aria-hidden="true"
            className="absolute left-[18.5%] top-1/2 h-px w-[31.5%] bg-[#D9D0C5]"
            style={{ transformOrigin: "right" }}
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={reduceMotion ? undefined : { scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.44, duration: 0.4, ease: easeOutExpo }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-px w-[31.5%] bg-[#D9D0C5]"
            style={{ transformOrigin: "left" }}
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={reduceMotion ? undefined : { scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.53, duration: 0.4, ease: easeOutExpo }}
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-px w-[31.4%] origin-left rotate-[126.2deg] bg-[#D9D0C5]"
          >
            <motion.span
              aria-hidden="true"
              className="block h-full w-full bg-[#D9D0C5]"
              style={{ transformOrigin: "left" }}
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={reduceMotion ? undefined : { scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.62, duration: 0.4, ease: easeOutExpo }}
            />
          </span>
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-px w-[31.4%] origin-left rotate-[53.8deg] bg-[#D9D0C5]"
          >
            <motion.span
              aria-hidden="true"
              className="block h-full w-full bg-[#D9D0C5]"
              style={{ transformOrigin: "left" }}
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={reduceMotion ? undefined : { scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.71, duration: 0.4, ease: easeOutExpo }}
            />
          </span>

          <div className="absolute left-1/2 top-1/2 z-10 grid aspect-square w-[29.7%] min-w-[156px] max-w-[184px] -translate-x-1/2 -translate-y-1/2 place-items-center">
            <motion.div
              className="grid h-full w-full place-items-center rounded-full border-[7px] border-[#F1ECE5] bg-[#241D18] p-4 text-center text-white shadow-[0_20px_45px_rgba(36,29,24,0.18)]"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={
                reduceMotion
                  ? undefined
                  : { opacity: 1, scale: [0.9, 1.03, 1] }
              }
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
            >
              <span className="display text-[clamp(24px,3.2vw,36px)] leading-[0.98]">
                Bilişsel
                <br />
                Profil
              </span>
            </motion.div>
          </div>

          <ul className="contents">
            {childClusters.map((cluster, index) => {
              const Icon = cluster.icon;

              return (
                <li
                  key={cluster.id}
                  className={`absolute ${cluster.position} z-20 aspect-square w-[23.9%] min-w-[128px] max-w-[148px]`}
                >
                  <motion.div
                    className="grid h-full w-full place-items-center rounded-full border-[3px] bg-white px-3 text-center shadow-[0_12px_28px_rgba(36,29,24,0.1)]"
                    style={{ borderColor: cluster.color }}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.86 }}
                    whileInView={
                      reduceMotion ? undefined : { opacity: 1, scale: 1 }
                    }
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      delay: 0.75 + index * 0.1,
                      duration: 0.4,
                      ease: easeOutExpo,
                    }}
                  >
                    <span>
                      <Icon
                        className="mx-auto mb-2"
                        size={36}
                        strokeWidth={2}
                        style={{ color: cluster.color }}
                        aria-hidden="true"
                      />
                      <span className="block text-[clamp(12px,1.4vw,16px)] font-extrabold leading-[1.08] text-[#241D18]">
                        {cluster.label}
                      </span>
                    </span>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AdultCognitiveProfileSection({
  surface,
}: {
  surface: "canvas" | "white";
}) {
  return (
    <section
      id="cognitive-profile"
      aria-labelledby="adult-cognitive-profile-title"
      className={`${surface === "white" ? "bg-white" : "section-surface"} scroll-mt-28 pb-[128px] pt-[72px] md:py-[112px]`}
    >
      <div className="inner grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-10 xl:gap-16">
        <div>
          <div className="badge !border-[#E86F5B] !bg-[#E86F5B] !text-white">
            Bilişsel Profil
          </div>
          <h2
            id="adult-cognitive-profile-title"
            className="section-title mt-7 max-w-[620px]"
          >
            Zihinsel performansınıza tek bir beceriden bakmıyoruz.
          </h2>
          <p className="body-copy mt-6 max-w-[560px]">
            Dikkat, hafıza, görsel ve işitsel beceriler ile duygusal düzenlemeyi
            birlikte değerlendiriyoruz. Bilişsel profiliniz, zihinsel
            performansınıza daha bütüncül bakmamıza yardımcı olur.
          </p>

          <div className="mt-8 flex max-w-[500px] items-start gap-4 text-[14px] font-semibold leading-6 text-[var(--text-support)]">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#F5F0FE] text-[#9B66F4]">
              <Heart size={22} strokeWidth={2.1} aria-hidden="true" />
            </span>
            <p className="pt-0.5">
              Her alan, zihinsel performansınızı daha iyi anlamamız için
              önemli bir parça sunar.
            </p>
          </div>
        </div>

        <div
          data-asset-id="SH-DIAG-02-MOBILE"
          className="rounded-[28px] bg-[#F4F1EB] p-3 sm:p-4 lg:hidden"
          aria-label="Bilişsel profil alanları"
        >
          <div className="flex min-h-[84px] items-center justify-between gap-5 rounded-[22px] bg-[#241D18] px-5 py-4 text-white">
            <span className="display text-[28px] leading-none">
              Bilişsel Profil
            </span>
            <span className="text-right text-[12px] font-bold leading-5 text-white/70">
              Beş alan,
              <br />
              tek bir bütün
            </span>
          </div>

          <ul className="mt-3 overflow-hidden rounded-[22px] bg-white px-4">
            {adultClusters.map((cluster, index) => {
              const Icon = cluster.icon;

              return (
                <li
                  key={cluster.id}
                  className={`flex min-h-[68px] items-center gap-4 py-3 ${index === adultClusters.length - 1 ? "" : "border-b border-[rgba(36,29,24,0.1)]"}`}
                >
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full"
                    style={{ backgroundColor: `${cluster.color}14` }}
                  >
                    <Icon
                      size={24}
                      strokeWidth={2}
                      style={{ color: cluster.color }}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[15px] font-extrabold text-[#241D18]">
                    {cluster.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          data-asset-id="SH-DIAG-02"
          className="relative mx-auto hidden aspect-[1.15/1] w-full max-w-[620px] lg:block"
          aria-label="Bilişsel profil alanları"
        >
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 aspect-square w-[63%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#E4DDD3]"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-[13.7%] h-[36.3%] w-px -translate-x-1/2 bg-[#D9D0C5]"
          />
          <span
            aria-hidden="true"
            className="absolute left-[18.5%] top-1/2 h-px w-[31.5%] bg-[#D9D0C5]"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-px w-[31.5%] bg-[#D9D0C5]"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-px w-[31.4%] origin-left rotate-[126.2deg] bg-[#D9D0C5]"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-px w-[31.4%] origin-left rotate-[53.8deg] bg-[#D9D0C5]"
          />

          <div className="absolute left-1/2 top-1/2 z-10 grid aspect-square w-[29.7%] min-w-[156px] max-w-[184px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[7px] border-[#F1ECE5] bg-[#241D18] p-4 text-center text-white shadow-[0_20px_45px_rgba(36,29,24,0.18)]">
            <span className="display text-[clamp(24px,3.2vw,36px)] leading-[0.98]">
              Bilişsel
              <br />
              Profil
            </span>
          </div>

          <ul className="contents">
            {adultClusters.map((cluster) => {
              const Icon = cluster.icon;

              return (
                <li
                  key={cluster.id}
                  className={`absolute ${cluster.position} z-20 grid aspect-square w-[23.9%] min-w-[128px] max-w-[148px] place-items-center rounded-full border-[3px] bg-white px-3 text-center shadow-[0_12px_28px_rgba(36,29,24,0.1)]`}
                  style={{ borderColor: cluster.color }}
                >
                  <span>
                    <Icon
                      className="mx-auto mb-2"
                      size={36}
                      strokeWidth={2}
                      style={{ color: cluster.color }}
                      aria-hidden="true"
                    />
                    <span className="block text-[clamp(12px,1.4vw,16px)] font-extrabold leading-[1.08] text-[#241D18]">
                      {cluster.label}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ReportAndMeasurementSection({
  surface = "canvas",
  audience = "children",
}: {
  surface?: "canvas" | "white";
  audience?: "children" | "adults";
}) {
  if (audience === "adults") {
    return <AdultCognitiveProfileSection surface={surface} />;
  }

  return <ChildCognitiveProfileSection surface={surface} />;
}
