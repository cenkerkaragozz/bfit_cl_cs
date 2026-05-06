"use client";

import Image from "next/image";
import { Reveal } from "@/components/Decorations";

const programs = [
  {
    title: "Bring inner peace",
    copy: "Grounding sessions for anxiety, pressure, and everyday overwhelm.",
    image: "/images/program-peace.svg",
    color: "#F4865D",
  },
  {
    title: "Find more joy",
    copy: "A practical path back to rest, energy, and meaningful connection.",
    image: "/images/program-joy.svg",
    color: "#C9F58B",
  },
  {
    title: "Healing program",
    copy: "Clinical guidance for moments that need deeper care and repair.",
    image: "/images/program-healing.svg",
    color: "#9B66F4",
  },
  {
    title: "Positive psychology",
    copy: "Strength-based tools for confidence, focus, and resilience.",
    image: "/images/program-positive.svg",
    color: "#91DDF4",
  },
];

export function ProgramSection() {
  return (
    <section id="services" className="section-pad">
      <div className="inner text-center">
        <Reveal>
          <div className="badge">Peaceful beginning</div>
          <h2 className="section-title mx-auto mt-7 max-w-[860px]">
            Bring your inner peace
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 0.08}>
              <article className="mx-auto max-w-[260px] text-center">
                <div className="mx-auto grid h-[166px] w-[166px] place-items-center overflow-hidden rounded-full bg-[var(--paper)]">
                  <Image
                    src={program.image}
                    alt=""
                    aria-hidden="true"
                    width={166}
                    height={166}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-7 font-[var(--display)] text-[31px] leading-none">
                  {program.title}
                </h3>
                <div
                  className="mx-auto mt-4 h-[5px] w-20 rounded-full"
                  style={{ background: program.color }}
                />
                <p className="mt-5 text-[15px] leading-7 text-[rgba(36,29,24,0.65)]">
                  {program.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
