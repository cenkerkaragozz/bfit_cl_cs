"use client";

import { Brain, Clock, Layers, ShieldCheck, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Decorations";

const credentials = [
  {
    icon: Clock,
    value: "2001",
    label: "Kuruluş yılı",
    accent: "#D49210",
  },
  {
    icon: Users,
    value: "160.000",
    label: "Toplam danışan",
    accent: "#1E99B5",
  },
  {
    icon: Layers,
    value: "1.200",
    label: "Egzersiz çeşidi",
    accent: "#9B66F4",
  },
  {
    icon: ShieldCheck,
    value: "Nörobilim",
    label: "Harvard/Stanford metodolojisi",
    accent: "#3F9B5E",
  },
] as const;

const ease = [0.2, 0.8, 0.2, 1] as const;

export function BrainFitSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-surface py-[74px] md:py-[116px]">
      <div className="inner">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <div className="badge border-[#9B66F4] bg-[#F5F0FE] text-[#6A3FD4]">
              BrainFit nedir?
            </div>
            <h2 className="mid-section-title mt-7 text-[#241D18]">
              Beyin değişebilir. 2001&apos;den beri bunu biliyor, ölçüyor ve geliştiriyoruz.
            </h2>
            <p className="body-copy mt-6 max-w-[540px]">
              BrainFit&apos;te her değerlendirme beynin beş alanına ayrı ayrı bakar: dikkat,
              hafıza, motor beceriler, görsel ve işitsel işlemleme. Bilimsel testlerle ortaya çıkan
              profile göre kişiye özel egzersiz programı kurulur. Hedef belirti yönetmek değil —
              altında ne olduğunu anlamak.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="rounded-[28px] bg-[#F4F1EB] p-7 shadow-[0_18px_40px_rgba(36,29,24,0.08)] md:p-9">
              <div className="flex items-center gap-2.5">
                <Brain size={17} strokeWidth={2.5} className="text-[#9B66F4]" aria-hidden="true" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--text-support)]">
                  Kuruma dair
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {credentials.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <motion.div
                      key={c.value}
                      className="rounded-[20px] bg-white p-4 shadow-[0_6px_18px_rgba(36,29,24,0.06)]"
                      initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: 0.14 + i * 0.08, ease }}
                    >
                      <Icon
                        size={18}
                        strokeWidth={2.4}
                        style={{ color: c.accent }}
                        aria-hidden="true"
                      />
                      <p className="mt-2.5 text-[20px] font-extrabold leading-none text-[#241D18]">
                        {c.value}
                      </p>
                      <p className="mt-1 text-[12px] font-semibold leading-[1.4] text-[var(--text-support)]">
                        {c.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
