"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";

const clusters = [
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

type ClusterId = (typeof clusters)[number]["id"];

export function ReportAndMeasurementSection({
  surface = "canvas",
}: {
  surface?: "canvas" | "white";
}) {
  const [selectedId, setSelectedId] = useState<ClusterId>("attention");
  const reduceMotion = useReducedMotion();
  const selected = clusters.find((cluster) => cluster.id === selectedId) ?? clusters[0];

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
          <p className="mb-2 text-center text-[12px] font-extrabold text-[rgba(36,29,24,0.5)]">
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

            {clusters.map((cluster, index) => {
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
                    {active ? <Check className="mx-auto mb-1" size={16} aria-hidden="true" /> : <span className="mb-1 block text-[10px] opacity-55">0{index + 1}</span>}
                    {cluster.label}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-4 rounded-[18px] bg-white p-4 text-[12px] font-semibold leading-5 text-[rgba(36,29,24,0.62)]">
            Örnek profil görünümüdür. İçerik, yaşa ve uygulanan değerlendirmelere göre değişebilir.
          </p>
        </div>

        <div className="rounded-[24px] border border-[rgba(36,29,24,0.08)] bg-[#FEF9F5] p-5 lg:col-start-1 lg:row-start-2 lg:self-start">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.13em] text-[rgba(36,29,24,0.48)]">
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
                <h3 className="mt-2 text-[28px] font-extrabold text-[#241D18]">
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
