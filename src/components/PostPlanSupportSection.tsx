/*
THESIS: Ongoing support is a progression, so one icon-led stepped rail carries the three stages and ends with a separate follow-up statement.
OWN-WORLD: BrainFit canvas, rising mint-tinted steps, forest structure, and a coral follow-up statement carry the selected visual.
STORY: Personal exercises lead to regular tracking and, when needed, a renewed plan; the CTA creates the next step.
FIRST VIEWPORT: The compact staircase sits left while copy and CTA sit right; the same ordered content stacks vertically below the desktop breakpoint.
FORM: Selected icon-led stepped rail; this is a precise local extension and needs no concept seed.
*/

import {
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  ClipboardClock,
  HeartPulse,
} from "lucide-react";
import { Reveal } from "@/components/Decorations";

const supportRows = [
  {
    number: "01",
    title: "Kişiye özel bilişsel egzersizler",
    icon: BrainCircuit,
    desktopHeight: "xl:h-[52%]",
  },
  {
    number: "02",
    title: "Düzenli gelişim takibi",
    icon: ChartNoAxesCombined,
    desktopHeight: "xl:h-[76%]",
  },
  {
    number: "03",
    title: "Gerektiğinde planın yeniden değerlendirilmesi",
    icon: ClipboardClock,
    desktopHeight: "xl:h-full",
  },
] as const;

const titleId = "post-plan-support-title-children";
const centerMessage = "Çocuğunuzun gelişimi sürekli takipte.";

export function PostPlanSupportSection() {
  return (
    <section
      className="section-pad section-surface relative overflow-hidden"
      aria-labelledby={titleId}
    >
      <div className="inner grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:gap-12 xl:gap-14">
        <Reveal className="relative min-w-0 xl:order-2">
          <div className="badge border-[#E86F5B] bg-[#FEF0EC] text-[#C4533C]">PLAN SONRASI</div>
          <h2 id={titleId} className="section-title mt-7 max-w-[560px]">
            Plan hazırlandıktan sonra süreç nasıl devam ediyor?
          </h2>
          <p className="body-copy mt-5 max-w-[560px]">
            Değerlendirmede ortaya çıkan ihtiyaçlara göre hazırlanan plan, çocuğunuzun gelişimi doğrultusunda takip edilir.
          </p>

          <a
            className="pill-button arrow-shift mt-7 min-h-[52px] w-full !bg-[#E86F5B] !text-[#160A08] !shadow-[0_18px_36px_rgba(232,111,91,0.28)] hover:!bg-[#F5927E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E86F5B] md:w-auto md:min-w-[292px]"
            href="#checkup-form"
          >
            Ücretsiz Ön Görüşme Oluştur
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>

        <div className="relative min-w-0 xl:order-1">
          <Reveal>
            <div className="mx-auto w-full max-w-[560px]">
              <ol
                aria-label="Plan sonrası takip adımları"
                className="m-0 grid min-h-0 list-none overflow-hidden rounded-[24px] border border-[rgba(22,76,53,0.12)] bg-white p-0 xl:h-[418px] xl:grid-cols-3 xl:items-end xl:rounded-none xl:border-0 xl:bg-transparent"
              >
                {supportRows.map((row) => {
                  const Icon = row.icon;

                  return (
                    <li
                      key={row.number}
                      className={`${row.desktopHeight} grid min-w-0 grid-cols-[32px_44px_minmax(0,1fr)] items-center gap-3 border-t border-[rgba(22,76,53,0.12)] px-4 py-4 text-[#164C35] first:border-t-0 xl:flex xl:flex-col xl:items-start xl:border-x xl:border-b xl:border-t-[3px] xl:border-x-[rgba(22,76,53,0.12)] xl:border-b-[rgba(22,76,53,0.12)] xl:border-t-[#164C35] xl:bg-[#F7FAF7] xl:px-5 xl:py-6`}
                    >
                      <span className="text-[13px] font-extrabold leading-none tracking-[0.08em] text-[#E86F5B] xl:text-[24px] xl:tracking-[0.04em]">
                        {row.number}
                      </span>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F0F7F2] text-[#164C35] xl:mt-auto xl:h-auto xl:w-auto xl:place-items-start xl:rounded-none xl:bg-transparent">
                        <Icon className="h-7 w-7 xl:h-11 xl:w-11" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 text-[15px] font-extrabold leading-5 text-[#241D18] xl:mt-4">
                        {row.title}
                      </span>
                    </li>
                  );
                })}
              </ol>

              <p className="mt-4 flex min-h-[80px] items-center gap-4 border border-[rgba(22,76,53,0.12)] border-t-[3px] border-t-[#164C35] bg-[#FAF7F2] px-6 text-[#E86F5B]">
                <HeartPulse size={36} strokeWidth={1.8} aria-hidden="true" />
                <span className="text-[18px] font-extrabold leading-6">
                  {centerMessage}
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
