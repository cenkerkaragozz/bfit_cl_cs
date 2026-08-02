import Image from "next/image";
import {
  ArrowUpRight,
  ChartNoAxesColumnIncreasing,
  ClipboardCheck,
  MessagesSquare,
  NotebookPen,
  Presentation,
} from "lucide-react";
import { ContactActions } from "@/components/ContactActions";

const steps = [
  {
    title: "1 Saatlik Zihin Check-Up",
    children: "Yaşanan durumu ve bilişsel becerileri birlikte değerlendiririz.",
    adults: "Yaşadığınız durumu ve bilişsel becerilerinizi birlikte değerlendiririz.",
    color: "#F5927E",
  },
  {
    title: "Bilişsel Profil",
    children: "Beş ana alandaki güçlü ve desteklenebilecek beceriler görünür olur.",
    adults: "Beş ana alandaki güçlü ve desteklenebilecek beceriler görünür olur.",
    color: "#AAE8F6",
  },
  {
    title: "Kişisel Egzersiz Planı",
    children: "Egzersiz planı, değerlendirmede ortaya çıkan ihtiyaçlara göre şekillenir.",
    adults: "Egzersiz planınız, değerlendirmede ortaya çıkan ihtiyaçlara göre şekillenir.",
    color: "#D9F8A8",
  },
] as const;

const childSteps = [
  {
    title: "Ön Görüşme",
    description:
      "Sizi dinliyor, çocuğunuzla ilgili gözlemlerinizi ve sorularınızı konuşuyoruz.",
    icon: MessagesSquare,
    color: "#E86F5B",
  },
  {
    title: "Bilişsel Değerlendirme",
    description:
      "Çocuğunuzun farklı bilişsel becerilerine 1 saatlik Zihin Check-Up ile bakıyoruz.",
    icon: ClipboardCheck,
    color: "#164C35",
  },
  {
    title: "Bilişsel Profil",
    description:
      "Güçlü olduğu ve desteğe ihtiyaç duyduğu alanları birlikte görüyoruz.",
    icon: ChartNoAxesColumnIncreasing,
    color: "#FCBF48",
  },
  {
    title: "Sonuç Görüşmesi",
    description:
      "Bulguları sade bir dille paylaşıyor ve sorularınızı yanıtlıyoruz.",
    icon: Presentation,
    color: "#40CEEE",
  },
  {
    title: "Kişiye Özel Gelişim Planı",
    description:
      "Ortaya çıkan ihtiyaçlara göre çocuğunuza özel bir plan hazırlıyoruz.",
    icon: NotebookPen,
    color: "#8AAE32",
  },
] as const;

function ChildCheckUpSection() {
  return (
    <section
      id="checkup"
      className="section-surface relative scroll-mt-28 overflow-hidden py-[72px] md:py-[112px]"
      aria-labelledby="child-checkup-title"
    >
      <div
        className="pointer-events-none absolute right-5 top-5 hidden h-32 w-64 md:block lg:right-12 lg:top-8 xl:right-20"
        aria-hidden="true"
      >
        <Image
          className="absolute right-40 top-0 h-auto w-auto"
          src="/images/process/amber-starburst.svg"
          alt=""
          width={88}
          height={88}
          unoptimized
          aria-hidden="true"
        />
      </div>

      <div className="inner relative z-10">
        <div className="max-w-[900px]">
          <div className="badge !border-[#E86F5B] !bg-[#E86F5B] !text-white">
            ADIM ADIM
          </div>
          <h2 id="child-checkup-title" className="section-title mt-7 max-w-[720px]">
            Süreç nasıl ilerliyor?
          </h2>
          <p className="body-copy mt-5 max-w-[760px]">
            Ne olacağını baştan bilmeniz için süreci beş açık adımda anlatıyoruz.
          </p>
        </div>

        <div className="relative mt-12">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[10%] right-[10%] top-8 z-10 hidden h-[3px] rounded-full bg-[#E86F5B] xl:block"
          />
          <ol className="relative m-0 grid list-none grid-cols-1 gap-x-5 gap-y-8 p-0 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {childSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <li key={step.title} className="relative pt-8">
                  <article className="relative flex h-full min-h-[330px] flex-col items-center rounded-[24px] border border-[rgba(36,29,24,0.1)] bg-white px-5 pb-8 pt-14 text-center shadow-[0_14px_32px_rgba(36,29,24,0.08)]">
                    <span
                      className="absolute -top-8 left-1/2 z-20 grid h-16 w-16 -translate-x-1/2 place-items-center rounded-full border-[5px] border-white text-[26px] font-extrabold leading-none text-white shadow-[0_8px_20px_rgba(36,29,24,0.14)]"
                      style={{ backgroundColor: step.color }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="shrink-0"
                      size={54}
                      strokeWidth={2.15}
                      style={{ color: step.color }}
                      aria-hidden="true"
                    />
                    <h3 className="compact-title mt-6 text-[#241D18]">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-[14px] font-semibold leading-6 text-[rgba(36,29,24,0.68)]">
                      {step.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>

        <a
          href="#checkup-form"
          className="pill-button arrow-shift mx-auto mt-8 !min-h-13 !bg-[#E86F5B] !px-9 !text-white !shadow-[0_14px_28px_rgba(232,111,91,0.24)] hover:!bg-[#F5927E]"
        >
          Ön Görüşme Planla
          <ArrowUpRight size={20} strokeWidth={2.4} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export function CheckUpSection({
  audience = "children",
}: {
  audience?: "children" | "adults";
}) {
  const adult = audience === "adults";

  if (!adult) return <ChildCheckUpSection />;

  return (
    <section id="checkup" className="section-surface relative scroll-mt-28 overflow-hidden py-[72px] md:py-[112px]">
      <div className="inner">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className={`badge ${adult ? "border-[#FCBF48] text-[#8C5038]" : "border-[#40CEEE] text-[#1E99B5]"}`}>
              {adult ? "Zihin Check-Up" : "İlk adım"}
            </div>
            <h2 className="section-title mt-7 max-w-[720px]">
              {adult ? "Süreç nasıl ilerliyor?" : "Nereden başlayacağınızı birlikte netleştirelim."}
            </h2>
          </div>
          <p className="body-copy max-w-[620px] lg:justify-self-end">
            {adult
              ? "Neyle karşılaşacağınızı baştan bilmeniz için Zihin Check-Up sürecini üç açık adımda anlatıyoruz."
              : "BrainFit, bilişsel becerileri değerlendirir ve ortaya çıkan profile göre kişiye özel egzersiz planı oluşturur. Bunun ilk adımı 1 saatlik Zihin Check-Up’tır."}
          </p>
        </div>

        <ol
          data-asset-id="SH-DIAG-01"
          className="relative mt-10 grid gap-0 overflow-hidden rounded-[30px] bg-white p-5 shadow-[0_24px_70px_rgba(36,29,24,0.09)] md:p-7 lg:grid-cols-3"
        >
          <span
            aria-hidden="true"
            className="absolute bottom-8 left-[42px] top-8 w-1 rounded-full bg-[#DED8D1] lg:bottom-auto lg:left-[8%] lg:right-[8%] lg:top-[58px] lg:h-1 lg:w-auto"
          />
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative z-10 grid min-h-[138px] grid-cols-[52px_1fr] gap-4 px-1 py-4 lg:min-h-0 lg:grid-cols-1 lg:px-5 lg:pb-2 lg:pt-0 lg:text-center"
            >
              <span
                className="grid h-12 w-12 place-items-center rounded-full border-[6px] border-white text-[13px] font-extrabold text-[#241D18] shadow-[0_8px_20px_rgba(36,29,24,0.12)] lg:mx-auto"
                style={{ backgroundColor: step.color }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="pt-1 lg:pt-6">
                <h3 className="compact-title text-[#241D18]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] font-semibold leading-6 text-[rgba(36,29,24,0.66)]">
                  {step[audience]}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <ContactActions audience={audience} className="mx-auto mt-7 max-w-[580px]" />
      </div>
    </section>
  );
}
