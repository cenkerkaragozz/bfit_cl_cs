"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  ClipboardCheck,
  FileChartColumn,
  FileText,
  MessageCircle,
  Target,
  Trophy,
  Timer,
  UserRoundCheck,
} from "lucide-react";
import { Reveal } from "@/components/Decorations";

const details = [
  "Uzman Görüşmesi",
  "Beş ana alanın birlikte değerlendirilmesi",
  "Bilişsel profilin birlikte ele alınması",
  "Kişiye özel egzersiz planı",
] as const;

const steps = [
  {
    title: "1 Saatlik Zihin Check-Up",
    children:
      "Dikkat, görsel, işitsel, motor ve duygusal alanlar birlikte ele alınır.",
    adults:
      "Dikkat, görsel, işitsel, motor ve duygusal alanlar birlikte ele alınır.",
    icon: Timer,
  },
  {
    title: "Bilişsel Profil",
    children:
      "Çocuğunuzun güçlü ve desteklenebilecek becerileri tek bir görünümde değerlendirilir.",
    adults:
      "Güçlü ve desteklenebilecek bilişsel becerileriniz tek bir görünümde değerlendirilir.",
    icon: BrainCircuit,
  },
  {
    title: "Kişisel Egzersiz Planı",
    children:
      "Plan, değerlendirmede ortaya çıkan ihtiyaçlara göre çocuğunuz için şekillenir.",
    adults:
      "Plan, değerlendirmede ortaya çıkan ihtiyaçlarınıza göre sizin için şekillenir.",
    icon: ClipboardCheck,
  },
] as const;

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

function ChildCheckUpShowcaseSection() {
  const titleId = "checkup-showcase-title-children";

  return (
    <section
      className="section-surface relative overflow-hidden py-[72px] md:py-[112px]"
      aria-labelledby={titleId}
    >
      <div className="mx-auto grid w-[min(1440px,calc(100%-48px))] gap-12 max-md:w-[calc(100%-28px)] lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:gap-16 xl:gap-[72px]">
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
          <a
            className="pill-button arrow-shift mt-8 min-h-[52px] w-full !bg-[#E86F5B] !text-[#160A08] !shadow-[0_18px_36px_rgba(232,111,91,0.28)] hover:!bg-[#F5927E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E86F5B] sm:w-auto"
            href="#checkup-form"
          >
            Ücretsiz Ön Görüşme Oluştur
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal className="relative min-w-0" delay={0.1}>
          <div className="relative pt-10">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 z-0 h-16 w-[42%] rounded-t-[20px] border border-b-0 border-[#D7C7B9] bg-[#E9DFD2]"
            />
            <div className="relative z-10 rounded-[28px] border-2 border-[#D7C7B9] bg-[#FFFDF9] px-5 pb-5 pt-6 shadow-[0_18px_40px_rgba(36,29,24,0.1)] md:px-7 md:pb-7 md:pt-7 xl:px-10 xl:pb-8 xl:pt-8">
              <div className="flex items-center gap-3 border-b border-[rgba(36,29,24,0.12)] pb-5 xl:pb-7">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px] bg-[#FEF0EC] text-[#E86F5B]"
                  aria-hidden="true"
                >
                  <FileText size={22} strokeWidth={2.2} />
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-2" aria-hidden="true">
                  <span className="h-2 w-32 rounded-full bg-[#D7CEC6]" />
                  <span className="h-2 w-20 rounded-full bg-[#E5DED7]" />
                </div>
              </div>

              <ol className="m-0 mt-2 list-none p-0">
                {childShowcaseRows.map((row) => {
                  const Icon = row.icon;
                  const featured = row.featured === true;

                  return (
                    <li
                      key={row.number}
                      className="flex min-w-0 items-center gap-3 border-b border-[rgba(36,29,24,0.12)] py-4 last:border-b-0 xl:py-5"
                    >
                      <span
                        className="w-8 shrink-0 text-[14px] font-extrabold tracking-[0.08em] text-[#E86F5B]"
                        aria-hidden="true"
                      >
                        {row.number}
                      </span>
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${featured ? "bg-[#FEF0EC] text-[#E86F5B]" : "bg-[#F0F7F2] text-[#164C35]"}`}
                        aria-hidden="true"
                      >
                        <Icon size={21} strokeWidth={2.25} />
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
  const adult = audience === "adults";
  const reduceMotion = useReducedMotion();

  if (!adult) {
    return <ChildCheckUpShowcaseSection />;
  }

  const titleId = `checkup-showcase-title-${audience}`;

  return (
    <section
      className="section-surface relative overflow-hidden py-[72px] md:py-[112px]"
      aria-labelledby={titleId}
    >
      <div className="inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="relative">
          <div className="badge border-[#E7A988] text-[#8C5038]">Zihin Check-Up</div>
          <h2
            id={titleId}
            className="mid-section-title mt-7 max-w-[620px]"
          >
            1 Saatte Daha Net Bir Başlangıç
          </h2>
          <p
            className="body-copy mt-6 max-w-[560px]"
            style={{ fontSize: "clamp(16px, 1.4vw, 18px)", lineHeight: "1.78" }}
          >
            {adult
              ? "Dikkat, hafıza ve zihinsel yorgunlukla ilgili yaşadıklarınızı tek bir varsayıma bağlamadan ele alıyoruz. Değerlendirme sonunda bilişsel profiliniz ve size uygun sonraki adımlar birlikte konuşulur."
              : "Çocuğunuza daha fazla yüklenmeden önce, hangi bilişsel becerilerde desteğe ihtiyaç olabileceğini anlamaya yardımcı oluyoruz. Değerlendirme sonunda ortaya çıkan profil ve sonraki adımlar birlikte ele alınır."}
          </p>
          <div className="hidden md:block">
            <a
              className="pill-button arrow-shift mt-8 !bg-[#E86F5B] !text-[#160A08] !shadow-[0_18px_36px_rgba(232,111,91,0.28)] hover:!bg-[#F5927E]"
              href="#checkup-form"
            >
              Size Ulaşalım
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-[30px] bg-[#FEF9F5] p-5 shadow-[0_18px_40px_rgba(36,29,24,0.12)] md:p-7">
            <div className="grid gap-4 md:grid-cols-[0.72fr_1fr]">
              <div className="rounded-[24px] bg-[#1B4332] p-6 text-white">
                <p className="display text-[86px] leading-none text-[#FCBF48]">
                  %92
                </p>
                <p className="mt-5 text-[16px] font-semibold leading-7 text-white/82">
                  BrainFit programlarına katılanların büyük çoğunluğu, dikkat
                  ve öğrenme süreçlerinde kalıcı bir gelişim gözlemlediklerini
                  belirtiyor.
                </p>
                <span className="mt-6 block h-1.5 w-20 rounded-full bg-[#6BC862]" />
              </div>

              <div className="grid gap-3">
                {details.map((detail) => (
                  <div
                    key={detail}
                    className="flex min-h-[74px] items-start gap-3 rounded-[20px] bg-white p-4 shadow-[0_10px_24px_rgba(36,29,24,0.06)]"
                  >
                    <span
                      className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#F0F7F2] text-[#6BC862]"
                      aria-hidden="true"
                    >
                      <MessageCircle size={14} strokeWidth={2.6} />
                    </span>
                    <p className="text-[15px] font-extrabold leading-6 text-[#241D18]">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    className="relative rounded-[22px] bg-white p-5 shadow-[0_10px_24px_rgba(36,29,24,0.06)]"
                    initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <div
                      className="grid h-11 w-11 place-items-center rounded-full bg-[#EFF8FD] text-[#40CEEE]"
                      aria-hidden="true"
                    >
                      <Icon size={20} strokeWidth={2.5} />
                    </div>
                    <h3 className="compact-title mt-5 text-[#241D18]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[14px] font-medium leading-6 text-[rgba(36,29,24,0.68)]">
                      {step[audience]}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
