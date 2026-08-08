import {
  ClipboardCheck,
  FileChartColumn,
  FileText,
  Target,
  Trophy,
  UserRoundCheck,
} from "lucide-react";
import { Reveal } from "@/components/Decorations";

const childShowcaseRows = [
  {
    number: "01",
    title: "Uzman Değerlendirmesi",
    icon: UserRoundCheck,
    featured: false,
  },
  {
    number: "02",
    title: "Bilişsel Yeterlilik Raporu",
    icon: FileChartColumn,
    featured: false,
  },
  {
    number: "03",
    title: "Güçlü Yönlerin Belirlenmesi",
    icon: Trophy,
    featured: false,
  },
  {
    number: "04",
    title: "Desteklenmesi Gereken Alanlar",
    icon: Target,
    featured: false,
  },
  {
    number: "05",
    title: "Kişiye Özel Gelişim Planı",
    icon: ClipboardCheck,
    featured: true,
  },
] as const;

const adultShowcaseRows = [
  {
    number: "01",
    title: "Uzman Değerlendirmesi",
    icon: UserRoundCheck,
    featured: false,
  },
  {
    number: "02",
    title: "Bilişsel Profil",
    icon: FileChartColumn,
    featured: false,
  },
  {
    number: "03",
    title: "Güçlü Yönlerin Belirlenmesi",
    icon: Trophy,
    featured: false,
  },
  {
    number: "04",
    title: "Destekleyebileceğiniz Alanlar",
    icon: Target,
    featured: false,
  },
  {
    number: "05",
    title: "Kişiye Özel Egzersiz Planı",
    icon: ClipboardCheck,
    featured: true,
  },
] as const;

function ChildCheckUpShowcaseSection() {
  const titleId = "checkup-showcase-title-children";

  return (
    <section
      className="section-surface relative overflow-hidden py-[72px] md:py-[112px]"
      aria-labelledby={titleId}
    >
      <div className="inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 xl:gap-16">
        <Reveal className="relative min-w-0">
          <div className="badge border-[#E86F5B] bg-[#FEF0EC] text-[#C4533C]">
            DEĞERLENDİRME SONRASI
          </div>
          <h2
            id={titleId}
            className="mid-section-title mt-7 max-w-[620px] text-[#241D18]"
          >
            Değerlendirme Sonunda Neler Sunuyoruz?
          </h2>
          <p
            className="body-copy mt-6 max-w-[560px]"
            style={{ fontSize: "clamp(16px, 1.4vw, 18px)", lineHeight: "1.78" }}
          >
            Çocuğunuzun güçlü yönlerini ve desteklenmesi gereken alanları birlikte
            görür, ona özel gelişim planını netleştiririz.
          </p>
        </Reveal>

        <Reveal className="relative min-w-0" delay={0.1}>
          <div className="relative mx-auto w-full max-w-[620px] pt-8 lg:pt-6 xl:pt-8">
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 z-0 h-16 w-[42%] rounded-t-[20px] border border-b-0 border-[#D7C7B9] bg-[#E9DFD2]"
            />
            <div className="relative z-10 w-full rounded-[28px] border-2 border-[#D7C7B9] bg-[#FFFDF9] px-5 pb-5 pt-6 shadow-[0_18px_40px_rgba(36,29,24,0.1)] md:px-6 md:pb-6 md:pt-7 xl:px-7 xl:pb-7 xl:pt-7">
              <div className="flex items-center gap-3 border-b border-[rgba(36,29,24,0.12)] pb-4 xl:pb-5">
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] bg-[#FEF0EC] text-[#E86F5B]"
                  aria-hidden="true"
                >
                  <FileText size={20} strokeWidth={2.2} />
                </span>
                <span className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#8C5038]">
                  SONUÇ DOSYASI
                </span>
              </div>

              <ol
                aria-label="Değerlendirme sonrası sunulan çıktılar"
                className="m-0 mt-1 list-none p-0"
              >
                {childShowcaseRows.map((row) => {
                  const Icon = row.icon;
                  const featured = row.featured === true;

                  return (
                    <li
                      key={row.number}
                      className={`flex min-w-0 items-center gap-3 border-b border-[rgba(36,29,24,0.12)] py-3.5 last:border-b-0 xl:py-4 ${featured ? "rounded-[14px] bg-[#FEF0EC] px-3" : ""}`}
                    >
                      <span
                        className="w-8 shrink-0 text-[14px] font-extrabold tracking-[0.08em] text-[#E86F5B]"
                        aria-hidden="true"
                      >
                        {row.number}
                      </span>
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${featured ? "bg-[#FEF0EC] text-[#E86F5B]" : "bg-[#F0F7F2] text-[#164C35]"}`}
                        aria-hidden="true"
                      >
                        <Icon size={20} strokeWidth={2.25} />
                      </span>
                      <span
                        className={`min-w-0 flex-1 text-[15px] font-extrabold leading-6 ${featured ? "text-[#E86F5B]" : "text-[#241D18]"}`}
                      >
                        {row.title}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AdultCheckUpShowcaseSection() {
  const titleId = "checkup-showcase-title-adults";

  return (
    <section
      className="section-surface relative overflow-hidden py-[72px] md:py-[112px]"
      aria-labelledby={titleId}
    >
      <div className="inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 xl:gap-16">
        <Reveal className="relative min-w-0">
          <div className="badge border-[#E86F5B] bg-[#FEF0EC] text-[#C4533C]">
            DEĞERLENDİRME SONRASI
          </div>
          <h2
            id={titleId}
            className="mid-section-title mt-7 max-w-[620px] text-[#241D18]"
          >
            Değerlendirme Sonunda Neler Sunuyoruz?
          </h2>
          <p
            className="body-copy mt-6 max-w-[560px]"
            style={{ fontSize: "clamp(16px, 1.4vw, 18px)", lineHeight: "1.78" }}
          >
            Güçlü yönlerinizi ve destekleyebileceğiniz alanları birlikte görür,
            size özel egzersiz planını netleştiririz.
          </p>
        </Reveal>

        <Reveal className="relative min-w-0" delay={0.1}>
          <div className="relative mx-auto w-full max-w-[620px] pt-8 lg:pt-6 xl:pt-8">
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 z-0 h-16 w-[42%] rounded-t-[20px] border border-b-0 border-[#D7C7B9] bg-[#E9DFD2]"
            />
            <div className="relative z-10 w-full rounded-[28px] border-2 border-[#D7C7B9] bg-[#FFFDF9] px-5 pb-5 pt-6 shadow-[0_18px_40px_rgba(36,29,24,0.1)] md:px-6 md:pb-6 md:pt-7 xl:px-7 xl:pb-7 xl:pt-7">
              <div className="flex items-center gap-3 border-b border-[rgba(36,29,24,0.12)] pb-4 xl:pb-5">
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] bg-[#FEF0EC] text-[#E86F5B]"
                  aria-hidden="true"
                >
                  <FileText size={20} strokeWidth={2.2} />
                </span>
                <span className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#8C5038]">
                  SONUÇ DOSYASI
                </span>
              </div>

              <ol
                aria-label="Değerlendirme sonrası sunulan çıktılar"
                className="m-0 mt-1 list-none p-0"
              >
                {adultShowcaseRows.map((row) => {
                  const Icon = row.icon;
                  const featured = row.featured === true;

                  return (
                    <li
                      key={row.number}
                      className={`flex min-w-0 items-center gap-3 border-b border-[rgba(36,29,24,0.12)] py-3.5 last:border-b-0 xl:py-4 ${featured ? "rounded-[14px] bg-[#FEF0EC] px-3" : ""}`}
                    >
                      <span
                        className="w-8 shrink-0 text-[14px] font-extrabold tracking-[0.08em] text-[#E86F5B]"
                        aria-hidden="true"
                      >
                        {row.number}
                      </span>
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${featured ? "bg-[#FEF0EC] text-[#E86F5B]" : "bg-[#F0F7F2] text-[#164C35]"}`}
                        aria-hidden="true"
                      >
                        <Icon size={20} strokeWidth={2.25} />
                      </span>
                      <span
                        className={`min-w-0 flex-1 text-[15px] font-extrabold leading-6 ${featured ? "text-[#E86F5B]" : "text-[#241D18]"}`}
                      >
                        {row.title}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CheckUpShowcaseSection({
  audience = "children",
}: {
  audience?: "children" | "adults";
}) {
  return audience === "adults" ? (
    <AdultCheckUpShowcaseSection />
  ) : (
    <ChildCheckUpShowcaseSection />
  );
}
