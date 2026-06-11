"use client";

import { ArrowUpRight, ClipboardCheck, FileText, MessageCircle, Timer } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Decorations";

const steps = [
  {
    title: "45 Dakikalık Analiz",
    copy: "Çocuğunuzun bilişsel profili; dikkat, hafıza ve öğrenme hızı gibi temel alanlarda incelenir.",
    icon: Timer,
  },
  {
    title: "16 Sayfalık Analiz Raporu",
    copy: "Çocuğunuzun güçlü yönleri ve gelişime açık alanları anlaşılır, somut bir raporla size sunulur.",
    icon: FileText,
  },
  {
    title: "Size Özel Yol Haritası",
    copy: "Elde edilen sonuçlara göre aileniz için en uygun başlangıç noktası uzmanlarımızla birlikte belirlenir.",
    icon: ClipboardCheck,
  },
] as const;

const details = [
  "Uzman Görüşmesi",
  "16 Sayfalık Kapsamlı Bilişsel Analiz Raporu",
  "Tıbbi Tanı veya İlaç İçermeyen Bilişsel Yaklaşım",
  "Aileniz ve çocuğunuz için en doğru gelişim yolunu birlikte planlıyoruz.",
] as const;

export function CheckUpSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="checkup" className="section-surface relative overflow-hidden py-[76px] md:py-[118px]">
      <div className="inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="relative">
          <div className="badge border-[#40CEEE] text-[#1E99B5]">Zihin Check-Up</div>
          <h2
            className="section-title mt-7 max-w-[620px]"
            style={{ fontSize: "clamp(44px, 5.2vw, 68px)" }}
          >
            45 Dakikada Bilimsel Bir Başlangıç
          </h2>
          <p
            className="body-copy mt-6 max-w-[540px]"
            style={{ fontSize: "clamp(16px, 1.4vw, 18px)", lineHeight: "1.78" }}
          >
            Çocuğunuza daha fazla yüklenmeden önce, öğrenme süreçlerindeki
            engelleri tespit ediyoruz. Görüşme sonunda mevcut durumu size somut
            verilerle sunuyoruz.
          </p>
          <a className="pill-button arrow-shift mt-8" href="#checkup-form">
            Zihin Check-Up Başvurusu
            <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-[30px] bg-[#FEF9F5] p-5 shadow-[0_18px_40px_rgba(36,29,24,0.12)] md:p-7">
            <div className="grid gap-4 md:grid-cols-[0.72fr_1fr]">
              <div className="rounded-[24px] bg-[#1B4332] p-6 text-white">
                <p className="display text-[86px] leading-none text-[#FCBF48]">
                  %92
                </p>
                <p className="mt-5 text-[16px] font-semibold leading-7 text-white/82">
                  BrainFit programlarına katılanların büyük çoğunluğu, dikkat
                  ve öğrenme süreçlerinde kalıcı bir gelişim gözlemlediklerini
                  belirtiyor.
                </p>
                <span className="mt-6 block h-1.5 w-20 rounded-full bg-[#6BC862]" />
              </div>

              <div className="grid gap-3">
                {details.map((detail) => (
                  <div
                    key={detail}
                    className="flex items-start gap-3 rounded-[20px] bg-white p-4 shadow-[0_10px_24px_rgba(36,29,24,0.06)]"
                  >
                    <span
                      className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#F0F7F2] text-[#6BC862]"
                      aria-hidden="true"
                    >
                      <MessageCircle size={14} strokeWidth={2.6} />
                    </span>
                    <p className="text-[15px] font-extrabold leading-6 text-[#241D18]">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    className="relative rounded-[22px] bg-white p-5 shadow-[0_10px_24px_rgba(36,29,24,0.06)]"
                    initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <div
                      className="grid h-11 w-11 place-items-center rounded-full bg-[#EFF8FD] text-[#40CEEE]"
                      aria-hidden="true"
                    >
                      <Icon size={20} strokeWidth={2.5} />
                    </div>
                    <h3 className="mt-5 text-[24px] font-extrabold leading-none text-[#241D18]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[14px] font-medium leading-6 text-[rgba(36,29,24,0.68)]">
                      {step.copy}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
