/*
THESIS: Continuous expert follow-up gives the plan a next chapter, so this section uses one continuity symbol instead of a repeated icon-card grid.
OWN-WORLD: BrainFit canvas, forest, and coral frame a circular tracking symbol with light row separators.
STORY: The plan is applied, monitored, and reconsidered; the CTA creates the next step.
FIRST VIEWPORT: The loop sits left while copy, list, and CTA sit right; a compact cue keeps the signal on smaller screens.
FORM: Selected ImageGen Variation 2; this is a precise local extension and needs no concept seed.
*/

import {
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  ClipboardClock,
  HeartPulse,
  RefreshCw,
} from "lucide-react";
import { Reveal } from "@/components/Decorations";

const supportRows = [
  {
    number: "01",
    title: "Kişiye özel bilişsel egzersizler",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Düzenli gelişim takibi",
    icon: ChartNoAxesCombined,
  },
  {
    number: "03",
    title: "Gerektiğinde planın yeniden değerlendirilmesi",
    icon: ClipboardClock,
  },
] as const;

const titleId = "post-plan-support-title-children";
const centerMessage = "Çocuğunuzun gelişimi sürekli takipte.";

export function PostPlanSupportSection() {
  return (
    <section
      className="section-surface relative overflow-hidden py-[72px] md:py-[96px] xl:py-[112px]"
      aria-labelledby={titleId}
    >
      <div className="mx-auto grid w-[min(1440px,calc(100%-48px))] max-w-[760px] gap-10 max-md:w-[calc(100%-28px)] md:gap-12 xl:max-w-none xl:grid-cols-[0.98fr_1.02fr] xl:items-center xl:gap-[72px]">
        <Reveal className="relative min-w-0 xl:order-2">
          <div className="badge border-[#E86F5B] bg-[#FEF0EC] text-[#C4533C]">PLAN SONRASI</div>
          <h2 id={titleId} className="section-title mt-7 max-w-[650px]">
            Plan hazırlandıktan sonra süreç nasıl devam ediyor?
          </h2>
          <p className="body-copy mt-6 max-w-[60ch]">
            Değerlendirmede ortaya çıkan ihtiyaçlara göre hazırlanan plan, çocuğunuzun gelişimi doğrultusunda takip edilir.
          </p>

          <div
            aria-hidden="true"
            className="mt-8 flex min-w-0 items-center gap-4 rounded-[24px] border border-[rgba(36,29,24,0.10)] bg-[#F4F1EB] p-4 xl:hidden md:p-5"
          >
            <span className="flex h-12 shrink-0 items-center gap-1 rounded-full bg-[#FFFDF9] px-3 text-[#164C35]">
              <RefreshCw size={22} strokeWidth={1.8} aria-hidden="true" />
              <HeartPulse size={22} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span className="min-w-0 text-[15px] font-extrabold leading-6 text-[#164C35]">
              {centerMessage}
            </span>
          </div>
          <p className="sr-only">{centerMessage}</p>

          <ol className="mt-8 m-0 list-none border-b border-[rgba(36,29,24,0.12)] p-0">
            {supportRows.map((row) => {
              const Icon = row.icon;

              return (
                <li
                  key={row.number}
                  className="flex min-w-0 items-start gap-3 border-t border-[rgba(36,29,24,0.12)] py-4 md:items-center md:py-5"
                >
                  <span className="w-8 shrink-0 pt-2 text-[14px] font-extrabold tracking-[0.08em] text-[#E86F5B] md:pt-0">
                    {row.number}
                  </span>
                  <span
                    className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#F0F7F2] text-[#164C35] md:mt-0"
                    aria-hidden="true"
                  >
                    <Icon size={21} strokeWidth={2.15} />
                  </span>
                  <span className="min-w-0 flex-1 text-[15px] font-extrabold leading-6 text-[#241D18]">
                    {row.title}
                  </span>
                </li>
              );
            })}
          </ol>

          <a
            className="pill-button arrow-shift mt-8 min-h-[52px] w-full !bg-[#E86F5B] !text-[#160A08] !shadow-[0_18px_36px_rgba(232,111,91,0.28)] hover:!bg-[#F5927E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E86F5B] md:w-auto"
            href="#checkup-form"
          >
            Ücretsiz Ön Görüşme Oluştur
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>

        <div className="relative min-w-0 xl:order-1" aria-hidden="true">
          <Reveal>
            <div className="relative mx-auto hidden aspect-square w-full max-w-[600px] xl:block">
              <RefreshCw
                className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 text-[#164C35]"
                strokeWidth={1.35}
                aria-hidden="true"
              />

              <div className="absolute left-1/2 top-[2%] flex w-[190px] -translate-x-1/2 flex-col items-center gap-3 text-center">
                <span className="grid h-[68px] w-[68px] place-items-center rounded-full border border-[rgba(22,76,53,0.16)] bg-[#F0F7F2] text-[#164C35]">
                  <BrainCircuit size={31} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-[14px] font-extrabold leading-5 text-[#164C35]">
                  {supportRows[0].title}
                </span>
              </div>

              <div className="absolute bottom-[5%] left-[3%] flex w-[210px] flex-col items-center gap-3 text-center">
                <span className="grid h-[68px] w-[68px] place-items-center rounded-full border border-[rgba(22,76,53,0.16)] bg-[#F0F7F2] text-[#164C35]">
                  <ChartNoAxesCombined size={31} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-[14px] font-extrabold leading-5 text-[#164C35]">
                  {supportRows[1].title}
                </span>
              </div>

              <div className="absolute bottom-[5%] right-[3%] flex w-[210px] flex-col items-center gap-3 text-center">
                <span className="grid h-[68px] w-[68px] place-items-center rounded-full border border-[rgba(22,76,53,0.16)] bg-[#F0F7F2] text-[#164C35]">
                  <ClipboardClock size={31} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-[14px] font-extrabold leading-5 text-[#164C35]">
                  {supportRows[2].title}
                </span>
              </div>

              <div className="absolute left-1/2 top-1/2 grid h-[236px] w-[236px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[rgba(36,29,24,0.12)] bg-[#F4F1EB] px-7 text-center">
                <div className="flex flex-col items-center gap-4">
                  <HeartPulse size={38} strokeWidth={1.75} className="text-[#E86F5B]" aria-hidden="true" />
                  <span className="max-w-[170px] text-[16px] font-extrabold leading-6 text-[#241D18]">
                    {centerMessage}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
