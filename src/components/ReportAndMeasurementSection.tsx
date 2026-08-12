"use client";

import {
  Brain,
  ChevronDown,
  ChevronRight,
  Ear,
  Eye,
  Heart,
  HeartHandshake,
  MousePointerClick,
  Target,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const adultClusters = [
  {
    id: "attention",
    label: "Dikkat",
    color: "#E86F5B",
    icon: Target,
    details: [
      "Dikkati sürdürme",
      "Dürtü kontrolü",
      "İşlem hızı",
      "Bilişsel esneklik",
    ],
    position:
      "left-1/2 top-[13.7%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "memory",
    label: "Hafıza",
    color: "#164C35",
    icon: Brain,
    details: [
      "Denge",
      "Motor planlama",
      "El-göz koordinasyonu",
      "İnce motor kontrolü",
    ],
    position:
      "left-[18.5%] top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "visual",
    label: "Görsel Beceriler",
    color: "#E7A500",
    icon: Eye,
    details: [
      "Görsel bellek",
      "Göz izleme",
      "Görsel algı",
      "Görsel akıl yürütme",
    ],
    position:
      "left-[81.5%] top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "auditory",
    label: "İşitsel Beceriler",
    color: "#2AB3D4",
    icon: Ear,
    details: [
      "İşitsel bellek",
      "Ses ayırt etme",
      "Dil çalışma belleği",
      "İşitsel dikkat",
    ],
    position:
      "left-[31.5%] top-[79.2%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "emotional",
    label: "Duygusal Düzenleme",
    color: "#8FC52B",
    icon: HeartHandshake,
    details: [
      "Duygusal düzenleme",
      "Öz yönetim",
      "Sosyal yönetim",
      "Duygu tanıma",
    ],
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
    details: [
      "Dikkati sürdürme",
      "Dürtü kontrolü",
      "İşlem hızı",
      "Bilişsel esneklik",
    ],
    position:
      "left-1/2 top-[13.7%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "memory",
    label: "Hafıza",
    color: "#164C35",
    icon: Brain,
    details: [
      "Denge",
      "Motor planlama",
      "El-göz koordinasyonu",
      "İnce motor kontrolü",
    ],
    position:
      "left-[18.5%] top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "visual",
    label: "Görsel Beceriler",
    color: "#E7A500",
    icon: Eye,
    details: [
      "Görsel bellek",
      "Göz izleme",
      "Görsel algı",
      "Görsel akıl yürütme",
    ],
    position:
      "left-[81.5%] top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "auditory",
    label: "İşitsel Beceriler",
    color: "#2AB3D4",
    icon: Ear,
    details: [
      "İşitsel bellek",
      "Ses ayırt etme",
      "Dil çalışma belleği",
      "İşitsel dikkat",
    ],
    position:
      "left-[31.5%] top-[79.2%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: "emotional",
    label: "Duygusal Düzenleme",
    color: "#8FC52B",
    icon: HeartHandshake,
    details: [
      "Duygusal düzenleme",
      "Öz yönetim",
      "Sosyal yönetim",
      "Duygu tanıma",
    ],
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
  const [selectedChildId, setSelectedChildId] = useState("attention");
  const [openMobileChildId, setOpenMobileChildId] = useState<string | null>(
    "attention",
  );
  const selectedChild =
    childClusters.find((cluster) => cluster.id === selectedChildId) ??
    childClusters[0];
  const SelectedIcon = selectedChild.icon;
  const desktopDetailsId = "child-cognitive-profile-desktop-details";

  return (
    <section
      id="cognitive-profile"
      aria-labelledby="child-cognitive-profile-title"
      className={`${surface === "white" ? "bg-white" : "section-surface"} scroll-mt-28 pb-[128px] pt-[72px] md:py-[112px]`}
    >
      <div className="inner grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-10 xl:gap-16">
        <div>
          <div className="badge border-[#E86F5B] bg-[#FEF0EC] text-[#C4533C]">
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

          <div
            id={desktopDetailsId}
            className="mt-8 hidden min-h-[222px] max-w-[560px] rounded-[24px] border border-[#E4DDD3] bg-[#FCFAF7] p-5 lg:block"
            aria-live="polite"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={selectedChild.id}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.24, ease: easeOutExpo }}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="shrink-0 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--text-support)]">
                    SEÇİLİ ALAN
                  </p>
                  <p className="flex items-center gap-1.5 text-right text-[11px] font-semibold leading-4 text-[var(--text-support)]">
                    <MousePointerClick
                      size={14}
                      strokeWidth={2}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                    Başka bir alanı görmek için dairelere tıklayın.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full"
                    style={{ backgroundColor: `${selectedChild.color}14` }}
                  >
                    <SelectedIcon
                      size={20}
                      strokeWidth={2}
                      style={{ color: selectedChild.color }}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="text-[17px] font-extrabold text-[#241D18]">
                    {selectedChild.label}
                  </h3>
                </div>
                <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {selectedChild.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-[14px] font-semibold leading-5 text-[var(--text-support)]"
                    >
                      <ChevronRight
                        size={16}
                        strokeWidth={2.5}
                        className="mt-0.5 shrink-0"
                        style={{ color: selectedChild.color }}
                        aria-hidden="true"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
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
              const isOpen = openMobileChildId === cluster.id;
              const mobileDetailsId = `child-cognitive-profile-mobile-details-${cluster.id}`;

              return (
                <motion.li
                  key={cluster.id}
                  className={`${index === childClusters.length - 1 ? "" : "border-b border-[rgba(36,29,24,0.1)]"}`}
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
                  <button
                    type="button"
                    className="flex min-h-[68px] w-full items-center gap-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#241D18] focus-visible:ring-offset-2"
                    aria-expanded={isOpen}
                    aria-controls={mobileDetailsId}
                    onClick={() => {
                      setOpenMobileChildId(isOpen ? null : cluster.id);
                      setSelectedChildId(cluster.id);
                    }}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full" style={{ backgroundColor: `${cluster.color}14` }}>
                      <Icon
                        size={24}
                        strokeWidth={2}
                        style={{ color: cluster.color }}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="min-w-0 flex-1 text-[15px] font-extrabold text-[#241D18]">
                      {cluster.label}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.2,
                        ease: easeOutExpo,
                      }}
                      className="shrink-0 text-[#241D18]"
                    >
                      <ChevronDown size={20} strokeWidth={2.2} aria-hidden="true" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={mobileDetailsId}
                        key={mobileDetailsId}
                        initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                        animate={reduceMotion ? undefined : { opacity: 1, height: "auto" }}
                        exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.24, ease: easeOutExpo }}
                        className="overflow-hidden"
                      >
                        <ul className="grid grid-cols-1 gap-x-5 gap-y-2 pb-5 pl-[60px] pr-1 min-[380px]:grid-cols-2">
                          {cluster.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-start gap-1.5 text-[13px] font-semibold leading-5 text-[var(--text-support)]"
                            >
                              <ChevronRight
                                size={15}
                                strokeWidth={2.5}
                                className="mt-0.5 shrink-0"
                                style={{ color: cluster.color }}
                                aria-hidden="true"
                              />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
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
              const isSelected = selectedChild.id === cluster.id;

              return (
                <li
                  key={cluster.id}
                  className={`absolute ${cluster.position} z-20 aspect-square w-[23.9%] min-w-[128px] max-w-[148px]`}
                >
                  <motion.button
                    type="button"
                    className={`grid h-full w-full cursor-pointer place-items-center rounded-full border-[3px] px-3 text-center transition-shadow duration-200 hover:shadow-[0_18px_38px_rgba(36,29,24,0.17)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#241D18] focus-visible:ring-offset-4 ${isSelected ? "shadow-[0_16px_34px_rgba(36,29,24,0.15)]" : "shadow-[0_12px_28px_rgba(36,29,24,0.1)]"}`}
                    style={{
                      borderColor: cluster.color,
                      backgroundColor: isSelected ? `${cluster.color}10` : "#FFFFFF",
                    }}
                    aria-expanded={isSelected}
                    aria-controls={desktopDetailsId}
                    onClick={() => setSelectedChildId(cluster.id)}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.86 }}
                    whileInView={
                      reduceMotion ? undefined : { opacity: 1, scale: 1 }
                    }
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.02,
                            transition: { duration: 0.18, ease: easeOutExpo },
                          }
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
                  </motion.button>
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
  const reduceMotion = useReducedMotion();
  const [selectedAdultId, setSelectedAdultId] = useState("attention");
  const [openMobileAdultId, setOpenMobileAdultId] = useState<string | null>(
    "attention",
  );
  const selectedAdult =
    adultClusters.find((cluster) => cluster.id === selectedAdultId) ??
    adultClusters[0];
  const SelectedIcon = selectedAdult.icon;
  const desktopDetailsId = "adult-cognitive-profile-desktop-details";

  return (
    <section
      id="cognitive-profile"
      aria-labelledby="adult-cognitive-profile-title"
      className={`${surface === "white" ? "bg-white" : "section-surface"} scroll-mt-28 pb-[128px] pt-[72px] md:py-[112px]`}
    >
      <div className="inner grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-10 xl:gap-16">
        <div>
          <div className="badge border-[#E86F5B] bg-[#FEF0EC] text-[#C4533C]">
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

          <div
            id={desktopDetailsId}
            className="mt-8 hidden min-h-[222px] max-w-[560px] rounded-[24px] border border-[#E4DDD3] bg-[#FCFAF7] p-5 lg:block"
            aria-live="polite"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={selectedAdult.id}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.24, ease: easeOutExpo }}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="shrink-0 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--text-support)]">
                    SEÇİLİ ALAN
                  </p>
                  <p className="flex items-center gap-1.5 text-right text-[11px] font-semibold leading-4 text-[var(--text-support)]">
                    <MousePointerClick
                      size={14}
                      strokeWidth={2}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                    Başka bir alanı görmek için dairelere tıklayın.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full"
                    style={{ backgroundColor: `${selectedAdult.color}14` }}
                  >
                    <SelectedIcon
                      size={20}
                      strokeWidth={2}
                      style={{ color: selectedAdult.color }}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="text-[17px] font-extrabold text-[#241D18]">
                    {selectedAdult.label}
                  </h3>
                </div>
                <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {selectedAdult.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-[14px] font-semibold leading-5 text-[var(--text-support)]"
                    >
                      <ChevronRight
                        size={16}
                        strokeWidth={2.5}
                        className="mt-0.5 shrink-0"
                        style={{ color: selectedAdult.color }}
                        aria-hidden="true"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
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
            {adultClusters.map((cluster, index) => {
              const Icon = cluster.icon;
              const isOpen = openMobileAdultId === cluster.id;
              const mobileDetailsId = `adult-cognitive-profile-mobile-details-${cluster.id}`;

              return (
                <motion.li
                  key={cluster.id}
                  className={`${index === adultClusters.length - 1 ? "" : "border-b border-[rgba(36,29,24,0.1)]"}`}
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
                  <button
                    type="button"
                    className="flex min-h-[68px] w-full items-center gap-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#241D18] focus-visible:ring-offset-2"
                    aria-expanded={isOpen}
                    aria-controls={mobileDetailsId}
                    onClick={() => {
                      setOpenMobileAdultId(isOpen ? null : cluster.id);
                      setSelectedAdultId(cluster.id);
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
                    <span className="min-w-0 flex-1 text-[15px] font-extrabold text-[#241D18]">
                      {cluster.label}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.2,
                        ease: easeOutExpo,
                      }}
                      className="shrink-0 text-[#241D18]"
                    >
                      <ChevronDown size={20} strokeWidth={2.2} aria-hidden="true" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={mobileDetailsId}
                        key={mobileDetailsId}
                        initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                        animate={reduceMotion ? undefined : { opacity: 1, height: "auto" }}
                        exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.24, ease: easeOutExpo }}
                        className="overflow-hidden"
                      >
                        <ul className="grid grid-cols-1 gap-x-5 gap-y-2 pb-5 pl-[60px] pr-1 min-[380px]:grid-cols-2">
                          {cluster.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-start gap-1.5 text-[13px] font-semibold leading-5 text-[var(--text-support)]"
                            >
                              <ChevronRight
                                size={15}
                                strokeWidth={2.5}
                                className="mt-0.5 shrink-0"
                                style={{ color: cluster.color }}
                                aria-hidden="true"
                              />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
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
            {adultClusters.map((cluster, index) => {
              const Icon = cluster.icon;
              const isSelected = selectedAdult.id === cluster.id;

              return (
                <li
                  key={cluster.id}
                  className={`absolute ${cluster.position} z-20 aspect-square w-[23.9%] min-w-[128px] max-w-[148px]`}
                >
                  <motion.button
                    type="button"
                    className={`grid h-full w-full cursor-pointer place-items-center rounded-full border-[3px] px-3 text-center transition-shadow duration-200 hover:shadow-[0_18px_38px_rgba(36,29,24,0.17)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#241D18] focus-visible:ring-offset-4 ${isSelected ? "shadow-[0_16px_34px_rgba(36,29,24,0.15)]" : "shadow-[0_12px_28px_rgba(36,29,24,0.1)]"}`}
                    style={{
                      borderColor: cluster.color,
                      backgroundColor: isSelected ? `${cluster.color}10` : "#FFFFFF",
                    }}
                    aria-expanded={isSelected}
                    aria-controls={desktopDetailsId}
                    onClick={() => setSelectedAdultId(cluster.id)}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.86 }}
                    whileInView={
                      reduceMotion ? undefined : { opacity: 1, scale: 1 }
                    }
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.02,
                            transition: { duration: 0.18, ease: easeOutExpo },
                          }
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
                  </motion.button>
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
