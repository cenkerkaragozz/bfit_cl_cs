import { ArrowDownRight } from "lucide-react";

export function ConfidenceSection() {
  return (
    <section id="reframe" className="section-surface-alt relative overflow-hidden py-[68px] md:py-[104px]">
      <div className="inner">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <div className="badge border-[#F5927E] text-[#C4533C]">Bir adım geri çekilelim</div>
            <h2 className="display mt-7 max-w-[760px] text-[clamp(42px,6vw,68px)] leading-[0.96] text-[#241D18]">
              Her zorlanma isteksizlik değildir.
            </h2>
          </div>
          <div className="relative rounded-[28px] bg-white p-6 shadow-[0_18px_48px_rgba(36,29,24,0.08)] md:p-8">
            <span
              className="absolute -left-4 top-7 grid h-10 w-10 place-items-center rounded-full bg-[#FCBF48] text-[#241D18]"
              aria-hidden="true"
            >
              <ArrowDownRight size={19} />
            </span>
            <p className="pl-3 text-[17px] font-semibold leading-8 text-[rgba(36,29,24,0.76)]">
              Çocuğunuz çabaladığı hâlde başlayamıyor, sürdüremiyor ya da bildiğini gösteremiyor olabilir. Daha fazla baskı kurmadan önce hangi becerilerde desteğe ihtiyaç duyduğunu anlamak gerekir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
