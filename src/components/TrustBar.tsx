"use client";

import { Fragment } from "react";
import { ShieldCheck, Star, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Decorations";

type TrustItem = {
  value: string;
  label: string;
  icon: LucideIcon;
  accent: string;
};

// NOT: "48.000+" sayfada hâlihazırda kullanılan marka geneli rakamdır.
// Karşıyaka'ya özgü doğrulanmış bir sayı varsa value'yu güncellemek yeterli.
const items: TrustItem[] = [
  { value: "4.6/5", label: "Google puanı", icon: Star, accent: "#D49210" },
  { value: "48.000+", label: "BrainFit ailesi", icon: Users, accent: "#1E99B5" },
  { value: "%93", label: "Memnuniyet oranı", icon: TrendingUp, accent: "#3F9B5E" },
  { value: "Karşıyaka", label: "Yüz yüze merkez", icon: ShieldCheck, accent: "#C4533C" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Güven göstergeleri"
      className="section-surface relative z-30"
    >
      <div className="inner py-6 md:py-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 rounded-[22px] border border-[rgba(36,29,24,0.07)] bg-white/65 px-5 py-5 shadow-[0_10px_30px_rgba(36,29,24,0.06)] backdrop-blur-sm md:gap-x-10 md:px-8">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <Fragment key={item.label}>
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="hidden h-5 w-px bg-[rgba(36,29,24,0.12)] lg:block"
                    />
                  ) : null}
                  <div className="flex items-center gap-2.5">
                    <Icon size={19} strokeWidth={2.5} style={{ color: item.accent }} aria-hidden="true" />
                    <span className="leading-5">
                      <span className="text-[17px] font-extrabold text-[#241D18]">{item.value}</span>{" "}
                      <span className="text-[13px] font-bold text-[var(--text-support)]">{item.label}</span>
                    </span>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
