"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Squiggle } from "@/components/Decorations";

export function HelpSection() {
  return (
    <section id="help" className="section-pad bg-[var(--paper)]">
      <div className="inner grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="relative mx-auto min-h-[430px] w-full max-w-[540px]">
          <div className="absolute inset-x-4 bottom-2 h-[80%] rounded-[44px] bg-[#EFE5DA]" />
          <Image
            src="/illustrations/help-session.svg"
            alt="Editorial illustration of a doctor speaking with a patient"
            width={560}
            height={460}
            className="relative z-10 h-auto w-full"
          />
          <Squiggle className="absolute left-4 top-8 z-20" color="#F4865D" />
        </Reveal>

        <Reveal delay={0.12} className="max-w-[625px]">
          <h2 className="section-title">How can we help you ?</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <p className="body-copy">
              Meet with warm clinical teams, understand what you are carrying,
              and choose a care path that feels steady from the first step.
            </p>
            <p className="body-copy">
              BrainFit combines clinic access, structured treatments, and
              guided programs for people who want support without the friction.
            </p>
          </div>
          <a className="pill-button arrow-shift mt-10" href="#services">
            Get Help
            <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
