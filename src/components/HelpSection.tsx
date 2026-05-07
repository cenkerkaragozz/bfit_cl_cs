"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Brain, CheckCircle2, MessageCircleHeart } from "lucide-react";
import { Reveal, Squiggle } from "@/components/Decorations";

const concerns = [
  "Ödevin başına oturuyor ama başlayamıyor.",
  "Anlıyor gibi görünüyor, sonra unutuyor.",
  "Sınavda bildiğini gösteremiyor.",
  "Çok zeki ama dikkati dağılıyor deniyor.",
] as const;

const responses: Record<string, string> = {
  "Ödevin başına oturuyor ama başlayamıyor.":
    "Bu tablo her zaman isteksizlik anlamına gelmez. Başlamak, dikkati sürdürmek ve planı küçük adımlara bölmek ayrı ayrı desteklenebilen becerilerdir.",
  "Anlıyor gibi görünüyor, sonra unutuyor.":
    "Bazen çocuk bilgiyi o anda kavrar, fakat sonradan geri çağırmakta zorlanır. Hafıza ve tekrar ritmini birlikte anlamak iyi bir başlangıçtır.",
  "Sınavda bildiğini gösteremiyor.":
    "Bildiklerini doğru anda kullanmak dikkat, hız ve sakin kalabilme ile birlikte çalışır. Önce hangi adımın zorlandığını görmeye çalışırız.",
  "Çok zeki ama dikkati dağılıyor deniyor.":
    "Zeka ile dikkati sürdürmek aynı şey değildir. Çocuğunuzun potansiyelini göstermesini zorlaştıran becerileri birlikte fark edebiliriz.",
};

type HelpSectionProps = {
  selectedConcern: string;
  onSelectConcern: (concern: string) => void;
};

export function HelpSection({ selectedConcern, onSelectConcern }: HelpSectionProps) {
  return (
    <section id="help" className="relative overflow-hidden bg-white py-[74px] md:py-[118px]">
      <div
        className="pointer-events-none absolute left-[-6%] top-[18%] h-64 w-64 rounded-full bg-[#FEF9F5] blur-3xl"
        aria-hidden="true"
      />
      <div className="inner grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="relative">
          <div className="badge border-[#00BBE7] text-[#157B93]">
            İç sesinizi duyuyoruz
          </div>
          <h2 className="section-title mt-7 max-w-[720px]">
            Evde bunu yaşıyor olabilirsiniz.
          </h2>
          <blockquote className="relative mt-8 max-w-[680px] rounded-[28px] bg-[#FEF9F5] p-6 shadow-[0_18px_45px_rgba(36,29,24,0.08)] md:p-8">
            <Squiggle className="absolute -right-3 top-4 hidden md:block" color="#FBAE17" />
            <p className="font-[var(--display)] text-[clamp(34px,6vw,64px)] font-bold italic leading-[1.02] tracking-normal text-[#241D18]">
              “Zeki olduğunu biliyorum. Ama neden bu kadar zorlanıyor?”
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-[30px] border border-white bg-[#F4F1EB] p-5 shadow-[0_26px_70px_rgba(36,29,24,0.1)] md:p-7">
            <div className="flex items-start gap-4">
              <div
                className="grid h-13 w-13 shrink-0 place-items-center rounded-full bg-white text-[#00BBE7]"
                aria-hidden="true"
              >
                <Brain size={26} strokeWidth={2.4} />
              </div>
              <div>
                <h3 className="text-[25px] font-extrabold leading-tight text-[#241D18]">
                  Size en yakın cümleyi seçin.
                </h3>
                <p className="mt-2 text-[15px] font-medium leading-7 text-[rgba(36,29,24,0.68)]">
                  Bu seçim yalnızca formda görünür; aile görüşmesine daha net
                  bir başlangıç sağlar.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-3">
              {concerns.map((concern) => {
                const isSelected = selectedConcern === concern;

                return (
                  <button
                    key={concern}
                    type="button"
                    onClick={() => onSelectConcern(concern)}
                    className={`group flex min-h-16 w-full items-center justify-between gap-4 rounded-[20px] border px-4 py-3 text-left text-[15px] font-extrabold leading-6 transition ${
                      isSelected
                        ? "border-[#F05A38] bg-white text-[#241D18] shadow-[0_14px_30px_rgba(240,90,56,0.13)]"
                        : "border-white/80 bg-white/70 text-[rgba(36,29,24,0.74)] hover:-translate-y-0.5 hover:border-[#00BBE7]"
                    }`}
                  >
                    <span>{concern}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${
                        isSelected ? "bg-[#F05A38] text-white" : "bg-[#EFF8FD] text-[#00BBE7]"
                      }`}
                      aria-hidden="true"
                    >
                      {isSelected ? <CheckCircle2 size={17} /> : <ArrowUpRight size={16} />}
                    </span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedConcern}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="mt-6 rounded-[22px] bg-white p-5"
              >
                <div
                  className="mb-3 grid h-10 w-10 place-items-center rounded-full bg-[#F0F7F2] text-[#50B748]"
                  aria-hidden="true"
                >
                  <MessageCircleHeart size={20} />
                </div>
                <p className="text-[15px] font-semibold leading-7 text-[rgba(36,29,24,0.72)]">
                  {responses[selectedConcern]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
