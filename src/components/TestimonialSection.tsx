import { Quote, ShieldCheck } from "lucide-react";

export function TestimonialSection({
  audience = "children",
}: {
  audience?: "children" | "adults";
}) {
  const adult = audience === "adults";

  return (
    <section id="experiences" className="section-surface-alt relative scroll-mt-28 py-[72px] md:py-[108px]">
      <span id="about" className="absolute top-0" aria-hidden="true" />
      <div className="inner grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <div className="badge border-[#FCBF48] text-[#8C5038]">
            {adult ? "Yetişkin deneyimleri" : "Veli deneyimleri"}
          </div>
          <h2 className="section-title mt-7 max-w-[650px]">
            {adult
              ? "Süreci yaşayanların kendi cümleleri."
              : "Benzer kaygıları yaşayan ailelerin kendi cümleleri."}
          </h2>
          <p className="body-copy mt-5 max-w-[560px]">
            Bu alan yalnızca gerçek, izinli ve gerektiğinde anonimleştirilmiş deneyimler için ayrıldı.
          </p>
        </div>

        <article
          data-content-status="awaiting-approved-testimonial"
          className="relative overflow-hidden rounded-[32px] bg-[#241D18] p-6 text-white shadow-[0_28px_80px_rgba(36,29,24,0.16)] md:p-9"
        >
          <Quote className="text-[#FCBF48]" size={40} aria-hidden="true" />
          <blockquote className="mt-8">
            <p className="display text-[clamp(36px,5vw,60px)] leading-[1.02] text-white">
              {adult
                ? "Gerçek yetişkin deneyimi bu alanda yer alacak."
                : "Gerçek veli deneyimi bu alanda yer alacak."}
            </p>
          </blockquote>
          <div className="mt-9 flex items-center gap-3 border-t border-white/14 pt-6 text-[13px] font-bold text-white/68">
            <ShieldCheck className="shrink-0 text-[#D9F8A8]" size={19} aria-hidden="true" />
            Yayın öncesinde kullanım izni ve içerik doğrulaması yapılacak.
          </div>
        </article>
      </div>
    </section>
  );
}
