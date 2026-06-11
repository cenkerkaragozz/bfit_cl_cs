"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DrawnUnderline, Reveal } from "@/components/Decorations";

const rows = [
  {
    perception: "Ödevden kaçıyor, sürekli erteliyor.",
    title: "Dikkati Sürdürme",
    copy: (
      <>
        Odaklanma ve planlama,{" "}
        <strong className="font-bold text-[#C4533C]">doğru egzersizlerle geliştirilebilen</strong>{" "}
        bilişsel becerilerdir. Burada{" "}
        <strong className="font-bold text-[#241D18]">isteksizlik değil</strong>,{" "}
        <em className="not-italic font-semibold text-[#241D18]">kapasite zorlanması</em> var.
      </>
    ),
    accent: "#C4533C",
    panelBg: "#FEF0EC",
    waveFlip: false,
  },
  {
    perception: "Konuyu anladı ama kısa süre sonra unuttu.",
    title: "Hafıza ve Geri Çağırma",
    copy: (
      <>
        Öğrenmek ve ihtiyaç anında hatırlamak{" "}
        <strong className="font-bold text-[#241D18]">farklı süreçlerdir</strong>. Hafıza kapasitesi{" "}
        <strong className="font-bold text-[#1E99B5]">tekrar teknikleriyle</strong> doğrudan
        desteklenebilir.
      </>
    ),
    accent: "#1E99B5",
    panelBg: "#E8F7FC",
    waveFlip: true,
  },
  {
    perception: "Biliyor ama sınavda yapamıyor.",
    title: "Bilgiyi Uygulama",
    copy: (
      <>
        İşlem hızı ve dikkat{" "}
        <strong className="font-bold text-[#164C35]">baskı altında çökebilir</strong>. Bu,{" "}
        <strong className="font-bold text-[#241D18]">bilginin eksikliği değil</strong>;{" "}
        <em className="not-italic font-semibold text-[#164C35]">uygulamanın konusudur</em>.
      </>
    ),
    accent: "#164C35",
    panelBg: "#EDF9E2",
    waveFlip: false,
  },
];

type Row = {
  perception: string;
  title: string;
  copy: ReactNode;
  accent: string;
  panelBg: string;
  waveFlip: boolean;
};

function WaveCard({ row, index }: { row: Row; index: number }) {
  const reduceMotion = useReducedMotion();
  const { accent, panelBg, waveFlip } = row;

  const wavePath = waveFlip
    ? "M30 0 C15 80 45 160 30 240 C15 320 45 380 30 400"
    : "M30 0 C45 80 15 160 30 240 C45 320 15 380 30 400";

  return (
    <motion.div
      className="overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(36,29,24,0.09)]"
      initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-2">
        {/* Left panel — perception */}
        <div className="flex flex-col justify-center bg-white p-6 lg:min-h-[220px] lg:p-8 lg:pr-12">
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[rgba(36,29,24,0.36)]">
            Ne Görürsünüz
          </span>
          <p className="mt-3 text-[clamp(18px,2vw,24px)] italic leading-[1.2] text-[#241D18]">
            &ldquo;{row.perception}&rdquo;
          </p>
        </div>

        {/* Right panel — truth */}
        <div
          className="flex flex-col justify-center p-6 lg:min-h-[220px] lg:p-8 lg:pl-12"
          style={{ background: panelBg }}
        >
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-6 shrink-0 rounded-full" style={{ background: accent }} />
            <span
              className="text-[10px] font-bold tracking-[0.18em] uppercase"
              style={{ color: accent }}
            >
              Ne Oluyor
            </span>
          </div>
          <h3 className="display mt-3 text-[clamp(20px,2.4vw,28px)] leading-none text-[#241D18]">
            {row.title}
          </h3>
          <p className="mt-3 max-w-[400px] text-[14px] leading-[1.65] text-[rgba(36,29,24,0.68)]">
            {row.copy}
          </p>
        </div>

        {/* Wave divider — desktop only */}
        <svg
          className="pointer-events-none absolute top-0 hidden h-full lg:block"
          style={{ left: "calc(50% - 30px)", width: 60 }}
          viewBox="0 0 60 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d={`${wavePath} L0 400 L0 0 Z`} fill="white" />
          <path d={`${wavePath} L60 400 L60 0 Z`} fill={panelBg} />
        </svg>
      </div>
    </motion.div>
  );
}

export function ConfidenceSection() {
  return (
    <section
      id="treatments"
      className="section-surface-alt relative overflow-hidden py-[86px] md:py-[126px]"
    >
      <div className="inner">
        <Reveal>
          <div className="badge border-[#8C8480] text-[#8C8480]">
            Daha Fazla Israr Etmeden Önce
          </div>
          <h2 className="display mt-7 max-w-[780px] text-[clamp(42px,5.8vw,60px)] leading-[0.98] text-[#241D18]">
            Yaşananlar bir motivasyon eksikliği veya{" "}
            <span className="relative inline-block">
              tembellik
              <DrawnUnderline className="absolute -bottom-5 left-0 w-full" />
            </span>{" "}
            olmayabilir.
          </h2>
          <p className="body-copy mt-7 max-w-[560px]">
            Çocuklar bazen tüm güçleriyle dener ve yorulurlar. Ancak bilişsel
            kapasite zorlandığında, harcadıkları çaba aldıkları sonuçla
            örtüşmeyebilir.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-5 md:mt-16">
          {rows.map((row, index) => (
            <WaveCard key={row.title} row={row} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
