export function ConfidenceSection() {
  return (
    <section id="reframe" className="section-surface-alt relative overflow-hidden py-[68px] md:py-[104px]">
      <div className="inner">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <div className="badge border-[#F5927E] text-[#C4533C]">Bir adım geri çekilelim</div>
            <h2 className="section-title mt-7 max-w-[760px]">
              Her zorlanma <span className="text-[#C4533C]">isteksizlik değildir.</span>
            </h2>
          </div>
          <div className="relative overflow-hidden rounded-[28px] bg-white px-6 py-7 shadow-[0_18px_48px_rgba(36,29,24,0.08)] md:px-8 md:py-9">
            <span className="display absolute right-6 top-2 text-[clamp(4.5rem,6vw,6rem)] leading-none text-[#FCBF48]" aria-hidden="true">
              ≠
            </span>
            <p className="relative max-w-[24ch] pr-10 text-[clamp(1.25rem,1.7vw,1.5rem)] font-extrabold leading-[1.32] tracking-[-0.015em] text-[#241D18] [text-wrap:pretty] sm:pr-16">
              Çocuğunuz çabaladığı hâlde <span className="text-[#C4533C]">başlayamıyor, sürdüremiyor</span> ya da bildiğini gösteremiyor olabilir.
            </p>
            <p className="relative mt-6 max-w-[43ch] border-t border-[rgba(36,29,24,0.12)] pt-5 text-[1rem] font-normal leading-7 text-[#514236] [text-wrap:pretty]">
              Daha fazla baskı kurmadan önce hangi becerilerde desteğe ihtiyaç duyduğunu anlamak gerekir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
