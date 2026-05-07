"use client";

import { ArrowUpRight, ClipboardCheck, FileText, MessageCircle, Timer } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Decorations";

const steps = [
  {
    title: "45 dakika",
    copy: "Çocuğunuzun dikkat, hafıza ve öğrenme ritmine yakından bakılır.",
    icon: Timer,
  },
  {
    title: "16 sayfalık rapor",
    copy: "Güçlü alanlar ve desteklenebilecek beceriler anlaşılır bir dille özetlenir.",
    icon: FileText,
  },
  {
    title: "Anlamlı ilk adım",
    copy: "Aileniz için hangi başlangıcın doğru olabileceği birlikte konuşulur.",
    icon: ClipboardCheck,
  },
] as const;

const details = [
  "Görüşme",
  "16 sayfalık kişisel bilişsel rapor",
  "Tanı, ilaç veya klinik yönlendirme dili yok",
  "Aileniz için anlamlı ilk adımı birlikte konuşuruz",
] as const;

export function CheckUpSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="checkup" className="relative overflow-hidden bg-white py-[76px] md:py-[118px]">
      <div
        className="pointer-events-none absolute left-[-10%] top-[12%] h-72 w-72 rounded-full bg-[#EFF8FD] blur-3xl"
        aria-hidden="true"
      />
      <div className="inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="relative">
          <div className="badge border-[#00BBE7] text-[#157B93]">Zihin Check-Up</div>
          <h2 className="section-title mt-7 max-w-[680px]">
            45 dakika. Daha net bir başlangıç.
          </h2>
          <p className="body-copy mt-7 max-w-[580px]">
            Daha fazla baskıdan önce, çocuğunuzun öğrenirken nerede zorlandığını
            anlamaya çalışırız. Görüşme sonunda tabloyu daha sakin ve anlaşılır
            şekilde konuşuruz.
          </p>
          <a className="pill-button arrow-shift mt-8 bg-[#F05A38]" href="#checkup-form">
            Check-Up Talebi
            <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-[30px] border border-white bg-[#FEF9F5] p-5 shadow-[0_24px_70px_rgba(36,29,24,0.1)] md:p-7">
            <div className="grid gap-4 md:grid-cols-[0.72fr_1fr]">
              <div className="rounded-[24px] bg-[#1B4332] p-6 text-white">
                <p className="text-[86px] font-extrabold leading-none tracking-normal text-[#FBAE17]">
                  92%
                </p>
                <p className="mt-5 text-[16px] font-semibold leading-7 text-white/82">
                  Katılımcıların büyük çoğunluğu dikkat, hafıza ve öğrenme
                  becerilerinde gelişim fark ettiğini paylaşıyor.
                </p>
                <span className="mt-6 block h-1.5 w-20 rounded-full bg-[#50B748]" />
              </div>

              <div className="grid gap-3">
                {details.map((detail) => (
                  <div
                    key={detail}
                    className="flex items-start gap-3 rounded-[20px] bg-white p-4 shadow-[0_12px_30px_rgba(36,29,24,0.06)]"
                  >
                    <span
                      className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#F0F7F2] text-[#50B748]"
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
                    className="relative rounded-[22px] bg-white p-5 shadow-[0_14px_34px_rgba(36,29,24,0.07)]"
                    initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <div
                      className="grid h-11 w-11 place-items-center rounded-full bg-[#EFF8FD] text-[#00BBE7]"
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
