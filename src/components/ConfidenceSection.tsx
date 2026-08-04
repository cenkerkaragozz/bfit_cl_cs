import { ArrowUpRight } from "lucide-react";

export function ConfidenceSection() {
  return (
    <section
      id="reframe"
      aria-labelledby="reframe-title"
      className="section-surface relative scroll-mt-28 overflow-hidden pb-10 pt-4 md:pb-[84px] md:pt-8"
    >
      <div className="mx-auto w-[min(1440px,calc(100%-48px))]">
        <div className="rounded-[28px] bg-[#F4F1EB] px-5 py-8 sm:px-8 md:rounded-[36px] md:px-12 md:py-14 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12 lg:px-14 lg:py-16 xl:px-16">
          <div>
            <div className="inline-flex min-h-8 items-center rounded-full bg-[#E86F5B] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white">
              Birlikte anlayalım
            </div>

            <h2
              id="reframe-title"
              className="mt-5 max-w-[760px] font-[family-name:var(--display)] text-[clamp(2.25rem,3.3vw,2.85rem)] font-bold leading-[0.98] tracking-[-0.01em] text-[#241D18] md:mt-7"
            >
              <span className="block">Tek başınıza</span>
              anlamlandırmak zorunda değilsiniz.
            </h2>
          </div>

          <div className="mt-8 border-t-2 border-[#E86F5B] pt-5 md:mt-10 md:pt-7 lg:mt-0 lg:border-l-2 lg:border-t-0 lg:py-1 lg:pl-10 xl:pl-12">
            <p className="max-w-[32ch] text-[clamp(1.0625rem,1.55vw,1.4rem)] font-medium leading-[1.5] text-[#241D18] md:leading-[1.55]">
              Ön görüşmede sizi dinler, gözlemlerinizi birlikte değerlendirir ve çocuğunuz için sonraki adımı netleştiririz.
            </p>

            <ul className="mt-6 text-[13px] font-extrabold leading-5 text-[#241D18] sm:flex sm:flex-wrap sm:items-center md:mt-8 lg:flex-nowrap lg:text-[12px] lg:whitespace-nowrap xl:text-[13px]">
              <li className="pb-2 sm:pr-4 sm:pb-0">Sizi dinleriz</li>
              <li className="border-t border-[rgba(36,29,24,0.16)] py-2 sm:border-l sm:border-t-0 sm:px-4 sm:py-0">
                Birlikte değerlendiririz
              </li>
              <li className="border-t border-[rgba(36,29,24,0.16)] pt-2 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                Sonraki adımı netleştiririz
              </li>
            </ul>

            <a
              href="#checkup-form"
              className="pill-button arrow-shift mt-6 w-full !min-h-13 !bg-[#E86F5B] !px-7 !text-[15px] !text-white !shadow-[0_14px_28px_rgba(232,111,91,0.24)] hover:!bg-[#F5927E] sm:w-auto sm:!px-8 md:mt-8 lg:w-full"
            >
              Ücretsiz Ön Görüşme Oluştur
              <ArrowUpRight aria-hidden="true" size={20} strokeWidth={2.4} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
