import {
  ArrowUpRight,
  ChartNoAxesColumnIncreasing,
  ClipboardCheck,
  MessagesSquare,
  NotebookPen,
  Presentation,
} from "lucide-react";

const processSteps = [
  {
    title: "Ön Görüşme",
    children:
      "Sizi dinliyor, gözlemlerinizi ve sorularınızı birlikte konuşuyoruz.",
    adults:
      "Sizi dinliyor, günlük yaşamınıza ilişkin gözlemlerinizi ve sorularınızı konuşuyoruz.",
    icon: MessagesSquare,
    color: "#E86F5B",
    numberColor: "#160A08",
  },
  {
    title: "Bilimsel Değerlendirme",
    children:
      "Çocuğunuzun bilişsel becerilerine 1 saatlik Zihin Check-Up ile bakıyoruz.",
    adults:
      "Farklı bilişsel becerilerinize kapsamlı bir değerlendirmeyle bakıyoruz.",
    icon: ClipboardCheck,
    color: "#164C35",
    numberColor: "#FFFFFF",
  },
  {
    title: "Bilişsel Profil Analizi",
    children:
      "Güçlü olduğu ve desteğe ihtiyaç duyduğu alanları birlikte görüyoruz.",
    adults:
      "Güçlü olduğunuz ve destekleyebileceğiniz alanları birlikte görüyoruz.",
    icon: ChartNoAxesColumnIncreasing,
    color: "#FCBF48",
    numberColor: "#160A08",
  },
  {
    title: "Sonuçların Birlikte Değerlendirilmesi",
    children:
      "Bulguları sizinle birlikte, sade bir dille değerlendiriyoruz.",
    adults:
      "Bulguları sade bir dille paylaşıyor ve sorularınızı yanıtlıyoruz.",
    icon: Presentation,
    color: "#40CEEE",
    numberColor: "#160A08",
  },
  {
    title: "Kişiye Özel Gelişim Planı",
    children:
      "Ortaya çıkan ihtiyaçlara göre çocuğunuza özel bir plan hazırlıyoruz.",
    adults:
      "Ortaya çıkan ihtiyaçlara göre size özel bir egzersiz planı hazırlıyoruz.",
    icon: NotebookPen,
    color: "#8AAE32",
    numberColor: "#160A08",
  },
] as const;

export function CheckUpSection({
  audience = "children",
}: {
  audience?: "children" | "adults";
}) {
  return (
    <section
      id="checkup"
      className="section-pad section-surface relative scroll-mt-28 overflow-hidden"
      aria-labelledby="checkup-process-title"
    >
      <div className="inner relative z-10">
        <div className="max-w-[900px]">
          <div className="badge !border-[#E86F5B] !bg-[#E86F5B] !text-[#160A08]">
            ADIM ADIM
          </div>
          <h2 id="checkup-process-title" className="section-title mt-7 max-w-[720px]">
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
          <ol className="relative m-0 grid list-none grid-cols-1 gap-x-5 gap-y-8 p-0 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const rowPosition =
                index === 3
                  ? "md:col-start-2 xl:col-start-auto"
                  : index === 4
                    ? "sm:col-start-2 md:col-start-4 xl:col-start-auto"
                    : "";

              return (
                <li
                  key={step.title}
                  className={`relative pt-8 sm:col-span-2 md:col-span-2 xl:col-span-1 ${rowPosition}`}
                >
                  <article className="relative flex h-full flex-col items-center rounded-[28px] bg-white px-5 pb-8 pt-14 text-center shadow-[0_18px_40px_rgba(36,29,24,0.12)] sm:min-h-[350px] md:min-h-[366px] xl:min-h-[360px]">
                    <span
                      className="absolute -top-8 left-1/2 z-20 grid h-16 w-16 -translate-x-1/2 place-items-center rounded-full border-[5px] border-white text-[26px] font-extrabold leading-none shadow-[0_8px_20px_rgba(36,29,24,0.14)]"
                      style={{
                        backgroundColor: step.color,
                        color: step.numberColor,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="shrink-0"
                      size={48}
                      strokeWidth={2.1}
                      style={{ color: step.color }}
                      aria-hidden="true"
                    />
                    <div className="mt-6 flex items-center justify-center sm:min-h-[3.4rem] md:min-h-[4.7rem]">
                      <h3 className="max-w-[18ch] text-[22px] leading-[1.12] text-[#241D18]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-[14px] font-semibold leading-6 text-[rgba(36,29,24,0.72)]">
                      {step[audience]}
                    </p>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#checkup-form"
            className="pill-button arrow-shift !min-h-13 !bg-[#E86F5B] !px-9 !text-[#160A08] !shadow-[0_14px_28px_rgba(232,111,91,0.24)] hover:!bg-[#F5927E]"
          >
            Ücretsiz Ön Görüşme Oluştur
            <ArrowUpRight size={20} strokeWidth={2.4} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
