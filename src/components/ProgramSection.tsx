"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Decorations";

const programs = [
  {
    title: "İlkokulda dikkat ve öğrenme temeli",
    label: "Junior",
    age: "6-12 yaş",
    copy: "Dikkat, hafıza ve öğrenme alışkanlıklarını oyunlaştırılmış egzersizlerle destekleyen başlangıç programı.",
    image: "/images/program-peace.svg",
    color: "#00BBE7",
  },
  {
    title: "Sınav döneminde zihinsel düzen",
    label: "Scholar",
    age: "10-18 yaş",
    copy: "Odaklanma, bilgiyi hatırlama ve çalışma sürekliliğini destekleyen yapılandırılmış egzersiz akışı.",
    image: "/images/program-positive.svg",
    color: "#50B748",
  },
  {
    title: "Okuma ve öğrenme yolculuğunda destek",
    label: "Disleksi Desteği",
    age: "6-18 yaş",
    copy: "Okuma, algı ve öğrenme süreçlerine eşlik eden, çocuğunuzun hızına saygılı özel destek programı.",
    image: "/images/program-joy.svg",
    color: "#FBAE17",
  },
] as const;

export function ProgramSection() {
  return (
    <section id="services" className="bg-[#EFF8FD] py-[74px] md:py-[116px]">
      <div className="inner">
        <Reveal className="text-center">
          <div className="badge border-[#00BBE7] text-[#157B93]">Programlar</div>
          <h2 className="section-title mx-auto mt-7 max-w-[880px]">
            Çocuğunuzun yaşına ve ihtiyacına uygun yollar.
          </h2>
          <p className="body-copy mx-auto mt-6 max-w-[650px]">
            Check-Up sonrasında hangi programın daha anlamlı olabileceğini
            birlikte değerlendiririz.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 0.08}>
              <motion.article
                className="group h-full overflow-hidden rounded-[24px] bg-white p-5 shadow-[0_20px_50px_rgba(36,29,24,0.08)]"
                whileHover={{ y: -7 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="relative h-[210px] overflow-hidden rounded-[20px]"
                  style={{ background: `${program.color}26` }}
                >
                  <Image
                    src={program.image}
                    alt=""
                    aria-hidden="true"
                    width={520}
                    height={320}
                    sizes="(max-width: 1024px) 90vw, 360px"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-[13px] font-extrabold text-[#241D18] shadow-[0_10px_24px_rgba(36,29,24,0.08)]">
                    {program.age}
                  </span>
                </div>

                <div className="pt-6">
                  <p className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#00BBE7]">
                    {program.label}
                  </p>
                  <h3 className="mt-3 min-h-[86px] font-[var(--display)] text-[34px] leading-[0.98]">
                    {program.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-7 text-[rgba(36,29,24,0.66)]">
                    {program.copy}
                  </p>
                  <a
                    href="#checkup-form"
                    className="arrow-shift mt-7 inline-flex items-center gap-2 text-[14px] font-extrabold text-[#157B93]"
                  >
                    Check-Up ile başlayın
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
