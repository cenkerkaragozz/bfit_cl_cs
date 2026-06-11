"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Decorations";

const programs = [
  {
    title: "İlkokul Dönemi İçin Bilişsel Temeller",
    label: "BrainFit Junior",
    age: "6-12 Yaş Grubu",
    copy: "Dikkat, hafıza ve öğrenme alışkanlıklarını oyunlaştırılmış egzersizlerle güçlendiren temel gelişim programı.",
    image: "/images/program-peace.svg",
    color: "#AAE8F6",
  },
  {
    title: "Sınav Dönemi İçin Zihinsel Performans",
    label: "BrainFit Scholar",
    age: "10-18 Yaş Grubu",
    copy: "Odaklanma, bilgiyi geri çağırma ve çalışma disiplinini destekleyen yapılandırılmış zihinsel antrenmanlar.",
    image: "/images/program-positive.svg",
    color: "#D9F8A8",
  },
  {
    title: "Okuma ve Akademik Süreçlerde Uzman Desteği",
    label: "Disleksi ve Okuma Desteği",
    age: "6-18 Yaş Arası",
    copy: "Okuma, algı ve öğrenme süreçlerini kapsayan, çocuğunuzun kendi öğrenme hızına duyarlı özel destek programı.",
    image: "/images/program-joy.svg",
    color: "#FCBF48",
  },
] as const;

export function ProgramSection() {
  return (
    <section id="services" className="section-surface-alt py-[74px] md:py-[116px]">
      <div className="inner">
        <Reveal className="text-center">
          <div className="badge border-[#AAE8F6] text-[#1E99B5]">Programlar</div>
          <h2 className="section-title mid-section-title mx-auto mt-7 max-w-[760px]">
            Yaş grubuna ve bireysel ihtiyaçlara özel program seçenekleri.
          </h2>
          <p className="body-copy mx-auto mt-6 max-w-[650px]">
            Analiz sonrası, çocuğunuzun ihtiyacına en uygun programı veriye
            dayalı olarak seçiyoruz.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 0.08}>
              <motion.article
                className="group h-full overflow-hidden rounded-[28px] bg-white p-5"
                whileHover={{
                  y: -8,
                  boxShadow: `0 32px 64px rgba(36,29,24,0.16), 0 0 0 1.5px ${program.color}80`,
                }}
                initial={{ boxShadow: "0 18px 40px rgba(36,29,24,0.12)" }}
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="relative h-[210px] overflow-hidden rounded-[20px] transition-[filter] duration-300 group-hover:[filter:brightness(1.07)_saturate(1.1)]"
                  style={{ background: `${program.color}26` }}
                >
                  <Image
                    src={program.image}
                    alt=""
                    aria-hidden="true"
                    width={520}
                    height={320}
                    sizes="(max-width: 1024px) 90vw, 360px"
                    className="h-full w-full object-cover transition duration-400 group-hover:scale-105"
                  />
                  <span
                    className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-[13px] font-extrabold text-[#241D18] shadow-[0_10px_24px_rgba(36,29,24,0.08)] transition-transform duration-[220ms] group-hover:scale-[1.07]"
                    style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                  >
                    {program.age}
                  </span>
                </div>

                <div className="pt-6">
                  <p className="min-h-[2rem] text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#1E99B5]">
                    {program.label}
                  </p>
                  <h3 className="display mt-3 min-h-[6rem] text-[34px] leading-[0.98]">
                    {program.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-7 text-[rgba(36,29,24,0.66)]">
                    {program.copy}
                  </p>
                  <a
                    href="#checkup-form"
                    className="arrow-shift -ml-4 mt-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-extrabold text-[#1E99B5] transition-[background,padding-right] duration-200 hover:bg-[rgba(30,153,181,0.09)] hover:pr-5"
                  >
                    Zihin Check-Up Randevusu Alın
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
