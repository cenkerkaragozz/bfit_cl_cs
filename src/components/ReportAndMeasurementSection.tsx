"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Brain,
  Check,
  ChevronRight,
  Ear,
  Eye,
  Heart,
  HeartHandshake,
  Target,
} from "lucide-react";

const adultClusters = [
  {
    id: "motor",
    label: "Motor",
    color: "#F5927E",
    position: "left-1/2 top-0 -translate-x-1/2",
    skills: ["Denge", "Motor planlama", "El-göz koordinasyonu", "İnce motor kontrolü"],
  },
  {
    id: "visual",
    label: "Görsel",
    color: "#AAE8F6",
    position: "right-[1%] top-[25%]",
    skills: ["Görsel bellek", "Göz izleme", "Görsel algı", "Görsel akıl yürütme"],
  },
  {
    id: "auditory",
    label: "İşitsel",
    color: "#D9F8A8",
    position: "bottom-[4%] right-[12%]",
    skills: ["İşitsel bellek", "Ses ayırt etme", "Dil çalışma belleği", "İşitsel dikkat"],
  },
  {
    id: "attention",
    label: "Dikkat",
    color: "#FCBF48",
    position: "bottom-[4%] left-[12%]",
    skills: ["Dikkati sürdürme", "Dürtü kontrolü", "İşlem hızı", "Bilişsel esneklik"],
  },
  {
    id: "emotional",
    label: "Duygusal",
    color: "#9B66F4",
    position: "left-[1%] top-[25%]",
    skills: ["Duygusal düzenleme", "Öz yönetim", "Sosyal yönetim", "Duygu tanıma"],
  },
] as const;

const childClusters = [
  {
    id: "attention",
    label: "Dikkat",
    color: "#E86F5B",
    icon: Target,
    position: "left-1/2 top-0 -translate-x-1/2",
  },
  {
    id: "memory",
    label: "Hafıza",
    color: "#164C35",
    icon: Brain,
    position: "left-0 top-[28%]",
  },
  {
    id: "visual",
    label: "Görsel Beceriler",
    color: "#E7A500",
    icon: Eye,
    position: "right-0 top-[28%]",
  },
  {
    id: "auditory",
    label: "İşitsel Beceriler",
    color: "#2AB3D4",
    icon: Ear,
    position: "bottom-0 left-[16%]",
  },
  {
    id: "emotional",
    label: "Duygusal Düzenleme",
    color: "#8FC52B",
    icon: HeartHandshake,
    position: "bottom-0 right-[16%]",
  },
] as const;

type AdultClusterId = (typeof adultClusters)[number]["id"];

function ChildCognitiveProfileSection({
  surface,
}: {
  surface: "canvas" | "white";
}) {
  return (
    <section
      id="cognitive-profile"
      aria-labelledby="child-cognitive-profile-title"
      className={`${surface === "white" ? "bg-white" : "section-surface"} scroll-mt-28 py-[72px] md:py-[112px]`}
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
          <p className="body-copy mt-6 max-w-[560px]">
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
          data-asset-id="SH-DIAG-02"
          className="relative mx-auto aspect-[1.15/1] w-full max-w-[620px]"
          aria-label="Bilişsel profil alanları"
        >
          <span
            aria-hidden="true"
            className="absolute inset-[15%] rounded-full border-2 border-[#E4DDD3]"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-[17%] h-[33%] w-px -translate-x-1/2 bg-[#D9D0C5]"
          />
          <span
            aria-hidden="true"
            className="absolute left-[18%] top-1/2 h-px w-[32%] bg-[#D9D0C5]"
          />
          <span
            aria-hidden="true"
            className="absolute right-[18%] top-1/2 h-px w-[32%] bg-[#D9D0C5]"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-[17%] left-[27%] h-px w-[29%] origin-left -rotate-[42deg] bg-[#D9D0C5]"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-[17%] right-[27%] h-px w-[29%] origin-right rotate-[42deg] bg-[#D9D0C5]"
          />

          <div className="absolute left-1/2 top-1/2 z-10 grid h-[clamp(132px,17vw,184px)] w-[clamp(132px,17vw,184px)] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[7px] border-[#F1ECE5] bg-[#241D18] p-4 text-center text-white shadow-[0_20px_45px_rgba(36,29,24,0.18)]">
            <span className="display text-[clamp(24px,3.2vw,36px)] leading-[0.98]">
              Bilişsel
              <br />
              Profil
            </span>
          </div>

          <ul className="contents">
            {childClusters.map((cluster) => {
              const Icon = cluster.icon;

              return (
                <li
                  key={cluster.id}
                  className={`absolute ${cluster.position} z-20 grid h-[clamp(106px,14vw,148px)] w-[clamp(106px,14vw,148px)] place-items-center rounded-[48%] border-[3px] bg-white px-3 text-center shadow-[0_12px_28px_rgba(36,29,24,0.1)]`}
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

function AdultCognitiveProfileSection({
  surface,
}: {
  surface: "canvas" | "white";
}) {
  const [selectedId, setSelectedId] =
    useState<AdultClusterId>("attention");
  const reduceMotion = useReducedMotion();
  const selected =
    adultClusters.find((cluster) => cluster.id === selectedId) ??
    adultClusters[0];

  return (
    <section
      id="cognitive-profile"
      className={`${surface === "white" ? "bg-white" : "section-surface"} scroll-mt-28 py-[72px] md:py-[112px]`}
    >
      <div className="inner grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-6">
        <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <div className="badge border-[#9B66F4] bg-[#F5F0FE] text-[#6A3FD4]">
            Bilişsel Profil
          </div>
          <h2 className="section-title mt-7 max-w-[680px]">
            Bilişsel profil neyi görünür kılar?
          </h2>
          <p className="body-copy mt-6 max-w-[620px]">
            Değerlendirme; Motor, Görsel, İşitsel, Dikkat ve Duygusal alanları birlikte ele alır. Bir alana dokunarak profilde nelerin değerlendirilebileceğini görebilirsiniz.
          </p>
        </div>

        <div
          data-asset-id="SH-DIAG-02"
          className="rounded-[32px] bg-[#F4F1EB] p-4 shadow-[0_24px_70px_rgba(36,29,24,0.1)] sm:p-6 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center"
        >
          <p className="mb-2 text-center text-[12px] font-extrabold text-[var(--text-support)]">
            Bir alana dokunun
          </p>
          <div className="relative mx-auto aspect-square w-full max-w-[430px]">
            <span
              className="absolute inset-[18%] rounded-full border-2 border-dashed border-[rgba(36,29,24,0.14)]"
              aria-hidden="true"
            />
            <div className="absolute left-1/2 top-1/2 grid h-[clamp(106px,30vw,140px)] w-[clamp(106px,30vw,140px)] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[42%] bg-[#241D18] p-4 text-center text-white shadow-[0_18px_42px_rgba(36,29,24,0.18)]">
              <span className="display text-[clamp(19px,5vw,27px)] leading-[0.95]">
                Bilişsel<br />Profil
              </span>
            </div>

            {adultClusters.map((cluster, index) => {
              const active = selectedId === cluster.id;

              return (
                <button
                  key={cluster.id}
                  type="button"
                  aria-expanded={active}
                  aria-controls="cluster-details"
                  onClick={() => setSelectedId(cluster.id)}
                  className={`absolute ${cluster.position} grid h-[clamp(72px,21vw,94px)] w-[clamp(72px,21vw,94px)] place-items-center rounded-[38%] border-[5px] border-[#F4F1EB] px-2 text-center text-[12px] font-extrabold text-[#241D18] shadow-[0_10px_24px_rgba(36,29,24,0.12)] transition duration-[250ms] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#241D18] sm:text-[14px] ${active ? "scale-110" : "hover:scale-105"}`}
                  style={{ backgroundColor: cluster.color }}
                >
                  <span>
                    {active ? (
                      <Check
                        className="mx-auto mb-1"
                        size={16}
                        aria-hidden="true"
                      />
                    ) : (
                      <span className="mb-1 block text-[10px] opacity-55">
                        0{index + 1}
                      </span>
                    )}
                    {cluster.label}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-4 rounded-[18px] bg-white p-4 text-[12px] font-semibold leading-5 text-[var(--text-support)]">
            Örnek profil görünümüdür. İçerik, yaşa ve uygulanan değerlendirmelere göre değişebilir.
          </p>
        </div>

        <div className="rounded-[24px] border border-[rgba(36,29,24,0.08)] bg-[#FEF9F5] p-5 lg:col-start-1 lg:row-start-2 lg:self-start">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.13em] text-[var(--text-support)]">
            Seçili alan
          </p>
          <div id="cluster-details" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={selected.id}
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
                transition={{ duration: reduceMotion ? 0 : 0.25 }}
              >
                <h3 className="compact-title mt-2 text-[#241D18]">
                  {selected.label}
                </h3>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {selected.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-[14px] font-semibold text-[rgba(36,29,24,0.68)]"
                    >
                      <ChevronRight
                        size={15}
                        style={{ color: selected.color }}
                        aria-hidden="true"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
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
