"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  ClipboardCheck,
  MessageCircle,
  Timer,
} from "lucide-react";
import { Reveal } from "@/components/Decorations";

const details = [
  "Uzman Görüşmesi",
  "Beş ana alanın birlikte değerlendirilmesi",
  "Bilişsel profilin birlikte ele alınması",
  "Kişiye özel egzersiz planı",
] as const;

const steps = [
  {
    title: "1 Saatlik Zihin Check-Up",
    children:
      "Dikkat, görsel, işitsel, motor ve duygusal alanlar birlikte ele alınır.",
    adults:
      "Dikkat, görsel, işitsel, motor ve duygusal alanlar birlikte ele alınır.",
    icon: Timer,
  },
  {
    title: "Bilişsel Profil",
    children:
      "Çocuğunuzun güçlü ve desteklenebilecek becerileri tek bir görünümde değerlendirilir.",
    adults:
      "Güçlü ve desteklenebilecek bilişsel becerileriniz tek bir görünümde değerlendirilir.",
    icon: BrainCircuit,
  },
  {
    title: "Kişisel Egzersiz Planı",
    children:
      "Plan, değerlendirmede ortaya çıkan ihtiyaçlara göre çocuğunuz için şekillenir.",
    adults:
      "Plan, değerlendirmede ortaya çıkan ihtiyaçlarınıza göre sizin için şekillenir.",
    icon: ClipboardCheck,
  },
] as const;

export function CheckUpShowcaseSection({
  audience = "children",
}: {
  audience?: "children" | "adults";
}) {
  const adult = audience === "adults";
  const reduceMotion = useReducedMotion();
  const titleId = `checkup-showcase-title-${audience}`;

  return (
    <section
      className="section-surface relative overflow-hidden py-[72px] md:py-[112px]"
      aria-labelledby={titleId}
    >
      <div className="inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="relative">
          <div className="badge border-[#E7A988] text-[#8C5038]">Zihin Check-Up</div>
          <h2
            id={titleId}
            className="section-title mt-7 max-w-[620px]"
            style={{ fontSize: "clamp(42px, 5.2vw, 64px)" }}
          >
            1 Saatte Daha Net Bir Başlangıç
          </h2>
          <p
            className="body-copy mt-6 max-w-[560px]"
            style={{ fontSize: "clamp(16px, 1.4vw, 18px)", lineHeight: "1.78" }}
          >
            {adult
              ? "Dikkat, hafıza ve zihinsel yorgunlukla ilgili yaşadıklarınızı tek bir varsayıma bağlamadan ele alıyoruz. Değerlendirme sonunda bilişsel profiliniz ve size uygun sonraki adımlar birlikte konuşulur."
              : "Çocuğunuza daha fazla yüklenmeden önce, hangi bilişsel becerilerde desteğe ihtiyaç olabileceğini anlamaya yardımcı oluyoruz. Değerlendirme sonunda ortaya çıkan profil ve sonraki adımlar birlikte ele alınır."}
          </p>
          <div className="hidden md:block">
            <a
              className="pill-button arrow-shift mt-8 !bg-[#E86F5B] text-white !shadow-[0_18px_36px_rgba(232,111,91,0.28)] hover:!bg-[#F5927E]"
              href="#checkup-form"
            >
              Sizi Arayalım
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
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
                    className="flex min-h-[74px] items-start gap-3 rounded-[20px] bg-white p-4 shadow-[0_10px_24px_rgba(36,29,24,0.06)]"
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
                      {step[audience]}
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
