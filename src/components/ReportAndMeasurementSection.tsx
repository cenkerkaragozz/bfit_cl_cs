"use client";

import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Decorations";

const reportRows = [
  { label: "Dikkat ve odak", value: "Güçlü alan" },
  { label: "Hafıza ve geri çağırma", value: "Desteklenebilir" },
  { label: "İşlem hızı", value: "Takip önerilir" },
  { label: "Görsel/işitsel işlemleme", value: "Profilde incelenir" },
  { label: "Önerilen yol", value: "Kişisel egzersiz planı" },
] as const;

const measurementAreas = [
  "Dikkat",
  "Hafıza",
  "İşitsel işlemleme",
  "Görsel algı",
  "Sosyal-duygusal uyum",
  "Psikomotor beceriler",
  "Algı ve muhakeme",
] as const;

const easeOutQuart = [0.2, 0.8, 0.2, 1] as const;

export function ReportAndMeasurementSection({
  surface = "canvas",
}: {
  surface?: "canvas" | "white";
}) {
  const shouldReduce = useReducedMotion();

  return (
    <section className={`${surface === "white" ? "bg-white" : "section-surface"} py-[74px] md:py-[116px]`}>
      <div className="inner grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <div className="badge border-[#FCBF48] text-[#8C5038]">Raporu Görünür Kılalım</div>
          <h2 className="section-title mid-section-title mt-7 max-w-[760px]">
            Vaadimiz soyut değil: ölçüm, rapor ve kişisel yol haritası.
          </h2>
          <p className="body-copy mt-6 max-w-[620px]">
            Zihin Check-Up sonunda dikkat, hafıza, işlem hızı ve ilgili bilişsel alanlar tek tek ele alınır. Amaç, nereden başlayacağınızı netleştirmektir.
          </p>

          <div className="cognitive-areas-grid mt-8 grid gap-3 sm:grid-cols-2">
            {measurementAreas.map((area, index) => (
              <motion.div
                key={area}
                className="cognitive-area-item flex items-center gap-3 rounded-[18px] bg-[#FEF9F5] p-4"
                initial={shouldReduce ? false : { opacity: 0, y: 22, scale: 0.96 }}
                whileInView={shouldReduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: easeOutQuart,
                }}
              >
                <CheckCircle2 size={18} className="shrink-0 text-[#6BC862]" />
                <span className="text-[15px] font-extrabold text-[#241D18]">{area}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-[32px] bg-[#1B4332] p-5 text-white shadow-[0_26px_70px_rgba(36,29,24,0.16)] md:p-7">
            <div className="rounded-[26px] bg-white p-5 text-[#241D18] md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#1E99B5]">
                    Örnek rapor görünümü
                  </p>
                  <h3 className="mt-3 font-[var(--display)] text-[clamp(32px,3.5vw,42px)] leading-none">
                    Bilişsel Profil
                  </h3>
                </div>
                <span className="rounded-full bg-[#FFF0D7] px-4 py-2 text-[13px] font-extrabold text-[#8C5038]">
                  16 sayfa
                </span>
              </div>

              <div className="mt-8 grid gap-3">
                {reportRows.map((row) => (
                  <div key={row.label} className="rounded-[18px] bg-[#FEF9F5] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[14px] font-extrabold text-[#241D18]">{row.label}</p>
                      <p className="text-right text-[13px] font-bold text-[rgba(36,29,24,0.58)]">
                        {row.value}
                      </p>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                      <span className="block h-full w-[68%] rounded-full bg-[#6BC862]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-[16px] font-semibold leading-8 text-white/78">
              Bu görünüm gerçek veri içermez. Ama ziyaretçinin alacağı çıktıyı somutlaştırır: profil, yorum ve önerilen başlangıç yolu.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
