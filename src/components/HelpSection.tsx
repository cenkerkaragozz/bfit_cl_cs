"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Brain, CheckCircle2, MessageCircleHeart } from "lucide-react";
import { Reveal, Squiggle } from "@/components/Decorations";

const concerns = [
  "Ödevin başına geçmekte zorlanıyor veya sürekli erteliyor.",
  "Konuyu anladığını söylüyor ama kısa süre sonra bilgiyi hatırlamakta güçlük çekiyor.",
  "Bilgi sahibi olmasına rağmen sınav anında bu bilgiyi kağıda dökemiyor.",
  "Potansiyeli yüksek görülmesine rağmen dikkati çok çabuk dağılıyor.",
] as const;

const responses: Record<string, string> = {
  "Ödevin başına geçmekte zorlanıyor veya sürekli erteliyor.":
    "Bu durum her zaman isteksizlikten kaynaklanmaz. Odaklanma, dikkati sürdürme ve planlama, doğru egzersizlerle geliştirilebilen zihinsel becerilerdir.",
  "Konuyu anladığını söylüyor ama kısa süre sonra bilgiyi hatırlamakta güçlük çekiyor.":
    "Bilgiyi kavramak ve o bilgiyi ihtiyaç anında geri çağırmak farklı süreçlerdir. Hafıza kapasitesini ve öğrenme ritmini anlamak gelişimin anahtarıdır.",
  "Bilgi sahibi olmasına rağmen sınav anında bu bilgiyi kağıda dökemiyor.":
    "Öğrenilenlerin eyleme dökülmesi; dikkat, işlem hızı ve kaygı yönetimiyle ilişkilidir. Biz, bu zincirin hangi halkasında destek gerektiğini tespit ediyoruz.",
  "Potansiyeli yüksek görülmesine rağmen dikkati çok çabuk dağılıyor.":
    "Bilişsel kapasite (zeka) ile dikkati sürdürme becerisi farklı alanlardır. Çocuğunuzun potansiyelini tam yansıtmasını engelleyen zihinsel bariyerleri birlikte aşabiliriz.",
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
          <div className="badge border-[#40CEEE] text-[#1E99B5]">
            Ebeveynlerin Kaygılarını Anlıyoruz
          </div>
          <h2 className="section-title mid-section-title mt-7 max-w-[720px]">
            Evinizde benzer süreçlerden geçiyor olabilirsiniz:
          </h2>
          <blockquote className="relative mt-8 max-w-[680px] rounded-[28px] bg-[#FEF9F5] p-6 shadow-[0_18px_45px_rgba(36,29,24,0.08)] md:p-8">
            <Squiggle className="absolute -right-3 top-4 hidden md:block" color="#FCBF48" />
            <p className="font-[var(--display)] text-[clamp(28px,4.6vw,46px)] font-bold italic leading-[1.08] tracking-normal text-[#241D18]">
              “Çocuğumun potansiyelinin farkındayım ama neden akademik süreçlerde bu kadar zorlanıyor?”
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-[30px] border border-white bg-[#F4F1EB] p-5 shadow-[0_26px_70px_rgba(36,29,24,0.1)] md:p-7">
            <div className="flex items-start gap-4">
              <div
                className="grid h-13 w-13 shrink-0 place-items-center rounded-full bg-white text-[#40CEEE]"
                aria-hidden="true"
              >
                <Brain size={26} strokeWidth={2.4} />
              </div>
              <div>
                <h3 className="text-[25px] font-extrabold leading-tight text-[#241D18]">
                  Çocuğunuzun durumunu en iyi özetleyen ifadeyi seçin.
                </h3>
                <p className="mt-2 text-[15px] font-medium leading-7 text-[rgba(36,29,24,0.68)]">
                  Bu seçim, uzman görüşmemiz için ön bilgi sağlar ve süreci
                  size özel yapılandırmamıza yardımcı olur.
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
                        ? "border-[#F5846E] bg-white text-[#241D18] shadow-[0_14px_30px_rgba(245,132,110,0.13)]"
                        : "border-white/80 bg-white/70 text-[rgba(36,29,24,0.74)] hover:-translate-y-0.5 hover:border-[#40CEEE]"
                    }`}
                  >
                    <span>{concern}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${
                        isSelected ? "bg-[#F5846E] text-white" : "bg-[#EFF8FD] text-[#40CEEE]"
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
                  className="mb-3 grid h-10 w-10 place-items-center rounded-full bg-[#F0F7F2] text-[#6BC862]"
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
