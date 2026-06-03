"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  HeartPulse,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  XCircle,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Decorations";

type SubmitState = "idle" | "submitting" | "success" | "error";

const audienceCards = [
  {
    title: "Yoğun tempoda çalışan yetişkinler",
    need: "Odaklanma, planlama ve zihinsel netlik",
    path: "Zihin Check-Up + BrainFit Adult",
    concern: "Yoğun iş temposunda odağımı uzun süre korumakta zorlanıyorum.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Sınav ve kariyer hedefi olanlar",
    need: "Bilgiyi hatırlama, işlem hızı ve sınav anı performansı",
    path: "Zihin Check-Up + Performance",
    concern: "Sınav veya mesleki öğrenme sürecinde bilgiyi hatırlamak istiyorum.",
    icon: GraduationCap,
  },
  {
    title: "Zihinsel yorgunluk yaşayanlar",
    need: "Dikkat geçişleri, zihinsel dayanıklılık ve sürdürülebilir rutin",
    path: "Zihin Check-Up + kişisel yol haritası",
    concern: "Gün içinde zihinsel yorgunluk ve dağınıklık daha hızlı oluşuyor.",
    icon: Sparkles,
  },
  {
    title: "50+ aktif yaşam desteği arayanlar",
    need: "Hafıza, görsel algı, beden-zihin uyumu ve zihinsel esneklik",
    path: "Zihin Check-Up + BrainFit Senior",
    concern: "Yaş aldıkça zihinsel aktifliğimi desteklemek istiyorum.",
    icon: HeartPulse,
  },
] as const;

const checkupSteps = [
  {
    title: "Kısa hedef görüşmesi",
    copy: "Odak, sınav, iş performansı, hafıza veya aktif yaş alma hedefinizi netleştiririz.",
    icon: MessageCircle,
  },
  {
    title: "Bilişsel profil taraması",
    copy: "Dikkat, hafıza, işlem hızı, görsel-işitsel işlemleme ve muhakeme alanlarını inceleriz.",
    icon: Timer,
  },
  {
    title: "Raporu birlikte okuma",
    copy: "Güçlü yönleri ve gelişime açık alanları sade, anlaşılır bir rapor üzerinden açıklarız.",
    icon: FileText,
  },
  {
    title: "Kişisel başlangıç planı",
    copy: "Adult, Performance veya Senior programlarından hangisinin uygun olduğunu birlikte belirleriz.",
    icon: ClipboardCheck,
  },
] as const;

const reportRows = [
  { label: "Dikkat ve odak", value: "Güçlü alan" },
  { label: "Hafıza ve geri çağırma", value: "Desteklenebilir" },
  { label: "İşlem hızı", value: "Takip önerilir" },
  { label: "Görsel/işitsel işlemleme", value: "Profilde incelenir" },
  { label: "Önerilen yol", value: "Kişisel egzersiz planı" },
] as const;

const measurementAreas = [
  "Dikkat",
  "Hafıza",
  "İşitsel işlemleme",
  "Görsel algı",
  "Sosyal-duygusal uyum",
  "Psikomotor beceriler",
  "Algı ve muhakeme",
] as const;

const programs = [
  {
    label: "BrainFit Adult",
    title: "Günlük tempo için zihinsel netlik",
    fit: "İş ve üniversite yaşamı",
    copy: "Odaklanma, planlama, zihinsel dayanıklılık ve öğrenme kapasitesini günlük ritminize uygun egzersizlerle destekler.",
    icon: BriefcaseBusiness,
  },
  {
    label: "BrainFit Performance",
    title: "Sınav ve kariyer performansı",
    fit: "YKS, KPSS, dil ve mesleki sınavlar",
    copy: "Bilgiyi geri çağırma, dikkati sürdürme ve zaman baskısı altında daha düzenli performans gösterebilme becerilerine odaklanır.",
    icon: GraduationCap,
  },
  {
    label: "BrainFit Senior",
    title: "Aktif yaşam için bilişsel destek",
    fit: "50+ yetişkinler",
    copy: "Hafıza, görsel algı, beden-zihin uyumu ve zihinsel esnekliği kişisel tempoya duyarlı şekilde destekler.",
    icon: HeartPulse,
  },
] as const;

const evidenceItems = [
  {
    value: "45 dk",
    label: "Zihin Check-Up",
    copy: "İlk adımda mevcut bilişsel profilinizi anlamaya odaklanırız.",
  },
  {
    value: "16 sayfa",
    label: "Kişisel rapor",
    copy: "Sonuçlarınızı güçlü ve gelişime açık alanlarla birlikte okuruz.",
  },
  {
    value: "1200+",
    label: "Egzersiz havuzu",
    copy: "Egzersizler hedefe, profile ve programa göre yapılandırılır.",
  },
  {
    value: "20+ yıl",
    label: "Metodoloji deneyimi",
    copy: "Bilişsel gelişim alanında yapılandırılmış bir yaklaşım.",
  },
] as const;

const doItems = [
  "Bilişsel profil taraması",
  "Dikkat ve hafıza egzersizleri",
  "Öğrenme kapasitesi desteği",
  "Kişisel program önerisi",
  "Gelişim takibi",
] as const;

const dontItems = [
  "Tıbbi tanı koymayız",
  "İlaç önerisi yapmayız",
  "Psikiyatrik tedavi sunmayız",
  "Garanti veya mucize vaat etmeyiz",
] as const;

const faqs = [
  {
    question: "Zihin Check-Up tıbbi bir test mi?",
    answer:
      "Hayır. Zihin Check-Up tıbbi tanı veya tedavi amacı taşımaz. Bilişsel becerilerin mevcut durumunu anlamaya yardımcı olan bir başlangıç görüşmesidir.",
  },
  {
    question: "Check-Up sonunda ne alıyorum?",
    answer:
      "Güçlü yönlerinizi, gelişime açık alanlarınızı ve size uygun başlangıç yolunu gösteren kişisel bir bilişsel değerlendirme raporu alırsınız.",
  },
  {
    question: "Belirgin bir problemim yoksa katılabilir miyim?",
    answer:
      "Evet. Yetişkin programı yalnızca zorlanma yaşayanlar için değil; odağını, öğrenme kapasitesini ve zihinsel performansını desteklemek isteyenler için de uygundur.",
  },
  {
    question: "Gelişim nasıl takip edilir?",
    answer:
      "Program sürecinde uzman gözlemleri, egzersiz verileri ve dönemsel değerlendirmeler birlikte okunur. Bir sonraki adım buna göre netleştirilir.",
  },
] as const;

export function AdultLandingPage() {
  const [selectedConcern, setSelectedConcern] = useState<string>(audienceCards[0].concern);

  return (
    <>
      <AdultHero selectedConcern={selectedConcern} onSelectConcern={setSelectedConcern} />
      <AudienceSection selectedConcern={selectedConcern} onSelectConcern={setSelectedConcern} />
      <CheckupJourneySection />
      <ReportAndMeasurementSection />
      <ProgramSection />
      <TrustBoundarySection />
      <EvidenceSection />
      <TestimonialAndLocalProofSection />
      <FaqSection />
      <AdultCheckUpFormSection selectedConcern={selectedConcern} />
    </>
  );
}

function AdultHero({
  selectedConcern,
  onSelectConcern,
}: {
  selectedConcern: string;
  onSelectConcern: (concern: string) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[var(--canvas)] pt-[138px] md:pt-[126px] lg:pt-[136px]">
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,#FAF9F5_0%,#FEF9F5_58%,#EFF8FD_100%)]"
        aria-hidden="true"
      />

      <div className="inner grid gap-10 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:pb-20">
        <div className="max-w-[720px]">
          <div className="badge gap-2 border-[#00BBE7] bg-white/76 text-[#157B93] shadow-[0_10px_24px_rgba(36,29,24,0.06)]">
            BrainFit Karşıyaka Yetişkin Zihin Check-Up
          </div>

          <h1 className="mt-6 max-w-[760px] font-[var(--body)] text-[clamp(36px,8.4vw,52px)] font-extrabold leading-[1.04] tracking-normal text-[#160A08] sm:text-[clamp(58px,8.5vw,80px)] lg:text-[clamp(58px,5vw,84px)]">
            Bilişsel profilinizi anlayın. Odak, hafıza ve zihinsel performansınızı destekleyin.
          </h1>

          <p className="mt-8 max-w-[640px] text-[18px] font-semibold leading-8 text-[#241D18]/78 md:text-[21px] md:leading-9">
            45 dakikalık Zihin Check-Up ile dikkat, hafıza, öğrenme ve zihinsel performans profilinizi inceleriz; ardından hedefinize uygun egzersiz yolunu birlikte netleştiririz.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="arrow-shift inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#F05A38] px-7 py-4 text-center text-[15px] font-extrabold leading-5 text-white shadow-[0_18px_36px_rgba(240,90,56,0.24)] transition hover:-translate-y-1 hover:bg-[#FF6845]"
              href="#checkup-form"
            >
              Ücretsiz Zihin Check-Up Randevusu Al
              <ArrowUpRight size={18} strokeWidth={2.7} />
            </a>
            <a
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-[var(--line)] bg-white px-7 py-4 text-[15px] font-extrabold text-[#241D18] transition hover:-translate-y-1 hover:border-[#00BBE7]"
              href="#checkup"
            >
              45 dakikada ne olur?
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["16 sayfalık rapor", "Uzman açıklaması", "Tanı veya ilaç içermez"].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-4 py-2 text-[13px] font-extrabold text-[#241D18] shadow-[0_10px_24px_rgba(36,29,24,0.06)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[720px] lg:mx-0">
          <div className="absolute -right-3 top-8 h-[82%] w-[70%] rounded-[34px] bg-[#FBAE17]" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[34px] bg-white p-4 shadow-[0_34px_90px_rgba(36,29,24,0.15)] md:p-5">
            <div className="relative min-h-[500px] overflow-hidden rounded-[28px] bg-[#EFF8FD] md:min-h-[590px]">
              <Image
                src="/images/doctor-profile.svg"
                alt="BrainFit Karşıyaka uzman görüşmesi görseli"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 650px"
                className="object-cover object-bottom"
              />
              <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(0deg,rgba(27,67,50,0.9),rgba(27,67,50,0))]" aria-hidden="true" />

              <div className="absolute left-4 top-4 max-w-[260px] rounded-[22px] bg-white/94 p-4 shadow-[0_18px_40px_rgba(36,29,24,0.12)] backdrop-blur md:left-6 md:top-6 md:p-5">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#157B93]">
                  İlk adım
                </p>
                <p className="mt-2 text-[32px] font-extrabold leading-none text-[#241D18]">
                  45 dk
                </p>
                <p className="mt-2 text-[13px] font-semibold leading-5 text-[#241D18]/68">
                  Hedef görüşmesi, profil taraması ve rapor yönlendirmesi
                </p>
              </div>

              <motion.div
                className="absolute bottom-4 left-4 right-4 rounded-[26px] bg-[#1B4332] p-5 text-white shadow-[0_18px_48px_rgba(22,10,8,0.22)] md:bottom-6 md:left-6 md:right-6 md:p-6"
                animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#FBAE17]">
                  Sizin hedefiniz
                </p>
                <p className="mt-3 text-[22px] font-extrabold leading-tight md:text-[28px]">
                  {selectedConcern}
                </p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {audienceCards.map((item) => (
                    <button
                      key={item.concern}
                      type="button"
                      onClick={() => onSelectConcern(item.concern)}
                      className={`rounded-full px-3 py-2 text-left text-[12px] font-extrabold transition ${
                        selectedConcern === item.concern
                          ? "bg-[#FBAE17] text-[#241D18]"
                          : "bg-white/12 text-white hover:bg-white/18"
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection({
  selectedConcern,
  onSelectConcern,
}: {
  selectedConcern: string;
  onSelectConcern: (concern: string) => void;
}) {
  return (
    <section id="help" className="bg-white py-[74px] md:py-[116px]">
      <div className="inner">
        <Reveal className="text-center">
          <div className="badge border-[#50B748] text-[#1B4332]">Kimler İçin?</div>
          <h2 className="section-title mid-section-title mx-auto mt-7 max-w-[820px]">
            Kendinizi hızlıca doğru başlangıç yolunda görün.
          </h2>
          <p className="body-copy mx-auto mt-6 max-w-[700px]">
            Zihin Check-Up, tek bir kalıba sıkıştırılmış bir program değildir. Önce hedefinizi ve profilinizi anlarız, sonra uygun başlangıç yolunu seçeriz.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {audienceCards.map((item, index) => {
            const Icon = item.icon;
            const active = selectedConcern === item.concern;

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <button
                  type="button"
                  onClick={() => onSelectConcern(item.concern)}
                  className={`h-full w-full rounded-[24px] border p-5 text-left shadow-[0_18px_42px_rgba(36,29,24,0.07)] transition hover:-translate-y-1 ${
                    active
                      ? "border-[#F05A38] bg-[#FEF9F5]"
                      : "border-white bg-white hover:border-[#00BBE7]"
                  }`}
                >
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-full ${
                      active ? "bg-[#F05A38] text-white" : "bg-[#EFF8FD] text-[#00BBE7]"
                    }`}
                  >
                    <Icon size={23} strokeWidth={2.4} />
                  </div>
                  <h3 className="mt-6 text-[23px] font-extrabold leading-tight text-[#241D18]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[14px] font-semibold leading-6 text-[rgba(36,29,24,0.68)]">
                    {item.need}
                  </p>
                  <p className="mt-5 rounded-full bg-[#F0F7F2] px-4 py-2 text-[12px] font-extrabold text-[#1B4332]">
                    {item.path}
                  </p>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CheckupJourneySection() {
  return (
    <section id="checkup" className="bg-[#FEF9F5] py-[74px] md:py-[116px]">
      <div className="inner">
        <Reveal className="text-center">
          <div className="badge border-[#00BBE7] text-[#157B93]">45 Dakikada Ne Olur?</div>
          <h2 className="section-title mid-section-title mx-auto mt-7 max-w-[860px]">
            İlk görüşme belirsizliği azaltmak için tasarlanır.
          </h2>
          <p className="body-copy mx-auto mt-6 max-w-[720px]">
            Zihin Check-Up, size uzun bir program satmadan önce mevcut durumu anlamamıza ve size en doğru başlangıç yolunu göstermemize yardımcı olur.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {checkupSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.title} delay={index * 0.07}>
                <article className="relative h-full rounded-[24px] bg-white p-6 shadow-[0_18px_42px_rgba(36,29,24,0.08)]">
                  <span className="absolute right-5 top-5 rounded-full bg-[#F4F1EB] px-3 py-1 text-[12px] font-extrabold text-[#8C8480]">
                    {index + 1}. adım
                  </span>
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#EFF8FD] text-[#00BBE7]">
                    <Icon size={23} strokeWidth={2.4} />
                  </div>
                  <h3 className="mt-8 text-[24px] font-extrabold leading-tight text-[#241D18]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[14px] font-medium leading-7 text-[rgba(36,29,24,0.68)]">
                    {step.copy}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ReportAndMeasurementSection() {
  return (
    <section className="bg-white py-[74px] md:py-[116px]">
      <div className="inner grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <div className="badge border-[#FBAE17] text-[#7A3B1C]">Raporu Görünür Kılalım</div>
          <h2 className="section-title mid-section-title mt-7 max-w-[760px]">
            Vaadimiz soyut değil: ölçüm, rapor ve kişisel yol haritası.
          </h2>
          <p className="body-copy mt-6 max-w-[620px]">
            Zihin Check-Up sonunda dikkat, hafıza, işlem hızı ve ilgili bilişsel alanlar tek tek ele alınır. Amaç, nereden başlayacağınızı netleştirmektir.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {measurementAreas.map((area) => (
              <div key={area} className="flex items-center gap-3 rounded-[18px] bg-[#FEF9F5] p-4">
                <CheckCircle2 size={18} className="shrink-0 text-[#50B748]" />
                <span className="text-[15px] font-extrabold text-[#241D18]">{area}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-[32px] bg-[#1B4332] p-5 text-white shadow-[0_26px_70px_rgba(36,29,24,0.16)] md:p-7">
            <div className="rounded-[26px] bg-white p-5 text-[#241D18] md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#157B93]">
                    Örnek rapor görünümü
                  </p>
                  <h3 className="mt-3 font-[var(--display)] text-[42px] leading-none">
                    Bilişsel Profil
                  </h3>
                </div>
                <span className="rounded-full bg-[#FFF0D7] px-4 py-2 text-[13px] font-extrabold text-[#7A3B1C]">
                  16 sayfa
                </span>
              </div>

              <div className="mt-8 grid gap-3">
                {reportRows.map((row) => (
                  <div key={row.label} className="rounded-[18px] bg-[#FEF9F5] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[14px] font-extrabold text-[#241D18]">{row.label}</p>
                      <p className="text-right text-[13px] font-bold text-[rgba(36,29,24,0.58)]">
                        {row.value}
                      </p>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                      <span className="block h-full w-[68%] rounded-full bg-[#50B748]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-[16px] font-semibold leading-8 text-white/78">
              Bu görünüm gerçek veri içermez. Ama ziyaretçinin alacağı çıktıyı somutlaştırır: profil, yorum ve önerilen başlangıç yolu.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProgramSection() {
  return (
    <section id="services" className="bg-[#EFF8FD] py-[74px] md:py-[116px]">
      <div className="inner">
        <Reveal className="text-center">
          <div className="badge border-[#00BBE7] text-[#157B93]">Programlar</div>
          <h2 className="section-title mid-section-title mx-auto mt-7 max-w-[760px]">
            Hedefinize göre üç net başlangıç yolu.
          </h2>
          <p className="body-copy mx-auto mt-6 max-w-[680px]">
            Program seçimini tahminle değil, Check-Up raporunuz ve uzman görüşmesiyle yaparız.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <Reveal key={program.title} delay={index * 0.08}>
                <motion.article
                  className="group h-full rounded-[24px] bg-white p-6 shadow-[0_20px_50px_rgba(36,29,24,0.08)]"
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex min-h-[190px] flex-col justify-between rounded-[20px] bg-[#FEF9F5] p-5">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-[#EFF8FD] text-[#00BBE7]">
                      <Icon size={27} strokeWidth={2.3} />
                    </div>
                    <span className="mt-8 inline-flex w-fit rounded-full bg-white px-4 py-2 text-[13px] font-extrabold text-[#241D18] shadow-[0_10px_24px_rgba(36,29,24,0.08)]">
                      {program.fit}
                    </span>
                  </div>

                  <div className="pt-6">
                    <p className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#00BBE7]">
                      {program.label}
                    </p>
                    <h3 className="mt-3 min-h-[5rem] font-[var(--display)] text-[34px] leading-[0.98]">
                      {program.title}
                    </h3>
                    <p className="mt-5 text-[15px] leading-7 text-[rgba(36,29,24,0.66)]">
                      {program.copy}
                    </p>
                    <a href="#checkup-form" className="arrow-shift mt-7 inline-flex items-center gap-2 text-[14px] font-extrabold text-[#157B93]">
                      Bu yola uygunluğumu öğren
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrustBoundarySection() {
  return (
    <section className="bg-white py-[74px] md:py-[116px]">
      <div className="inner grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-[30px] bg-[#F0F7F2] p-6 shadow-[0_18px_42px_rgba(36,29,24,0.07)] md:p-8">
            <div className="badge border-[#50B748] text-[#1B4332]">Ne yapıyoruz?</div>
            <h2 className="mt-7 font-[var(--display)] text-[clamp(42px,5vw,66px)] leading-[0.96] text-[#241D18]">
              Güven, sınırları net anlatmakla başlar.
            </h2>
            <div className="mt-8 grid gap-3">
              {doItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[18px] bg-white p-4">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#50B748]" />
                  <p className="text-[15px] font-extrabold leading-6 text-[#241D18]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-[30px] bg-[#FEF9F5] p-6 shadow-[0_18px_42px_rgba(36,29,24,0.07)] md:p-8">
            <div className="badge border-[#8C8480] text-[#8C8480]">Ne yapmıyoruz?</div>
            <h3 className="mt-7 font-[var(--display)] text-[clamp(38px,4.6vw,58px)] leading-[0.98] text-[#241D18]">
              Tıbbi iddia değil, bilişsel gelişim desteği.
            </h3>
            <div className="mt-8 grid gap-3">
              {dontItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[18px] bg-white p-4">
                  <XCircle size={20} className="mt-0.5 shrink-0 text-[#F05A38]" />
                  <p className="text-[15px] font-extrabold leading-6 text-[#241D18]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EvidenceSection() {
  return (
    <section className="bg-[#F05A38] py-[54px] text-[#160A08]">
      <div className="inner grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {evidenceItems.map((item) => (
          <div key={item.label} className="rounded-[24px] bg-white/18 p-5">
            <p className="font-[var(--display)] text-[clamp(36px,5vw,56px)] font-bold leading-none">
              {item.value}
            </p>
            <p className="mt-3 text-[15px] font-extrabold">{item.label}</p>
            <p className="mt-3 text-[13px] font-semibold leading-6 text-[#160A08]/72">
              {item.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialAndLocalProofSection() {
  return (
    <section id="clinics" className="bg-[#FEF9F5] py-[82px] md:py-[116px]">
      <span id="about" className="sr-only">BrainFit Karşıyaka hakkında</span>
      <div className="inner grid items-center gap-12 lg:grid-cols-[0.86fr_1fr]">
        <Reveal>
          <article className="rounded-[32px] bg-[#4A332B] p-6 text-white shadow-[0_30px_70px_rgba(36,29,24,0.16)] md:p-7">
            <div className="relative h-[430px] overflow-hidden rounded-[26px] bg-[#FBAE17]">
              <Image
                src="/images/doctor-profile.svg"
                alt="BrainFit Karşıyaka uzman kadrosu görseli"
                fill
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-cover object-bottom"
              />
            </div>
            <div className="px-2 pt-7">
              <h3 className="font-[var(--display)] text-[35px] leading-none">
                BrainFit Karşıyaka Uzman Kadrosu
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-white/70">
                Zihin Check-Up, rapor açıklaması ve kişisel program yönlendirmesi.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.12}>
          <blockquote>
            <p className="display max-w-[760px] text-[clamp(45px,6.2vw,82px)]">
              Check-Up sonrasında hangi alanda destek almam gerektiğini çok daha net gördüm.
            </p>
          </blockquote>

          <p className="body-copy mt-8 max-w-[620px]">
            “Yoğun iş temposunda sürekli bölünüyordum. Rapor ve uzman görüşmesi sayesinde sürece daha bilinçli başladım.”
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[#1B4332] font-extrabold text-white">
              B
            </div>
            <div>
              <p className="font-extrabold">BrainFit Karşıyaka Katılımcısı</p>
              <div className="mt-1 flex flex-wrap items-center gap-1 text-[#FBAE17]" aria-label="Google Puanı: 4.6">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" strokeWidth={2.2} />
                ))}
                <span className="ml-2 text-[14px] font-extrabold text-[rgba(36,29,24,0.58)]">
                  Google Müşteri Puanı: 4.6/5
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {["Karşıyaka'da yüz yüze merkez", "WhatsApp ile hızlı randevu", "KVKK kapsamında iletişim", "Uzman açıklamalı rapor"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[18px] bg-white p-4">
                <ShieldCheck size={19} className="shrink-0 text-[#50B748]" />
                <p className="text-[14px] font-extrabold text-[#241D18]">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-white py-[74px] md:py-[108px]">
      <div className="inner grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <div className="badge border-[#FBAE17] text-[#7A3B1C]">Sık Sorulan Sorular</div>
          <h2 className="section-title mid-section-title mt-7 max-w-[680px]">
            Formdan önce aklınızdaki temel soruları netleştirelim.
          </h2>
          <p className="body-copy mt-6 max-w-[560px]">
            En iyi dönüşüm, ziyaretçinin neye başvurduğunu ve neye başvurmadığını açıkça anladığı noktada gerçekleşir.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[22px] bg-[#FEF9F5] p-5 shadow-[0_12px_30px_rgba(36,29,24,0.06)]">
                <h3 className="text-[19px] font-extrabold leading-tight text-[#241D18]">{faq.question}</h3>
                <p className="mt-3 text-[15px] font-medium leading-7 text-[rgba(36,29,24,0.68)]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AdultCheckUpFormSection({ selectedConcern }: { selectedConcern: string }) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      audience: "adults",
      parentName: String(formData.get("parentName") || ""),
      phone: String(formData.get("phone") || ""),
      participantAge: String(formData.get("participantAge") || ""),
      note: String(formData.get("note") || ""),
      concern: selectedConcern,
    };

    try {
      const response = await fetch("/api/checkup-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Request failed");
      }

      setSubmitState("success");
      setMessage("Talebiniz başarıyla alındı. Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.");
      event.currentTarget.reset();
    } catch {
      setSubmitState("error");
      setMessage("Mesaj gönderilemedi. Lütfen bilgilerinizi kontrol ederek tekrar deneyiniz.");
    }
  }

  return (
    <section id="checkup-form" className="relative overflow-hidden bg-[#F05A38] py-[74px] text-[#160A08] md:py-[116px]">
      <div className="inner grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal className="min-w-0">
          <div className="badge border-[#160A08]/40 bg-white/20 text-[#160A08]">Ücretsiz Zihin Check-Up</div>
          <h2 className="mt-7 max-w-full font-[var(--display)] text-[clamp(36px,9vw,86px)] font-bold leading-[0.96] tracking-normal md:max-w-[700px]">
            İlk adımı net, düşük riskli ve anlaşılır tutalım.
          </h2>
          <p className="mt-7 max-w-[590px] text-[17px] font-semibold leading-8 text-[#160A08]/78">
            Bilgilerinizi paylaşın; ekibimiz sizi arayarak ücretsiz Zihin Check-Up randevunuzu planlasın. Bilgileriniz yalnızca randevu iletişimi için kullanılır.
          </p>

          <motion.div layout className="mt-8 flex w-full max-w-[590px] items-center gap-3 rounded-full bg-white px-4 py-3 text-[14px] font-extrabold shadow-[0_16px_40px_rgba(22,10,8,0.12)] md:inline-flex md:w-auto">
            <CheckCircle2 size={18} className="shrink-0 text-[#50B748]" />
            <span className="min-w-0 truncate">{selectedConcern}</span>
          </motion.div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["45 dakikalık görüşme", "16 sayfalık rapor", "Uzman açıklaması", "Tanı veya ilaç içermez"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[18px] bg-white/18 p-4">
                <CheckCircle2 size={18} className="shrink-0" />
                <p className="text-[14px] font-extrabold">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="min-w-0">
          <form onSubmit={handleSubmit} method="post" action="/api/checkup-request" className="rounded-[30px] bg-white p-5 shadow-[0_30px_80px_rgba(22,10,8,0.18)] md:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-extrabold tracking-normal text-[rgba(36,29,24,0.68)]">
                Adınız Soyadınız
                <input name="parentName" required className="min-h-13 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold normal-case tracking-normal text-[#241D18]" placeholder="Adınız" />
              </label>
              <label className="grid gap-2 text-xs font-extrabold tracking-normal text-[rgba(36,29,24,0.68)]">
                Telefon Numaranız
                <input name="phone" required inputMode="tel" className="min-h-13 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold normal-case tracking-normal text-[#241D18]" placeholder="05XX XXX XX XX" />
              </label>
              <label className="grid gap-2 text-xs font-extrabold tracking-normal text-[rgba(36,29,24,0.68)]">
                Yaşınız
                <input name="participantAge" required inputMode="numeric" className="min-h-13 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold normal-case tracking-normal text-[#241D18]" placeholder="Örn. 34" />
              </label>
              <label className="grid gap-2 text-xs font-extrabold tracking-normal text-[rgba(36,29,24,0.68)] sm:col-span-2">
                Mesajınız / Hedefiniz
                <textarea name="note" className="min-h-28 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 py-3 text-[16px] font-bold normal-case tracking-normal text-[#241D18]" placeholder="Odak, hafıza, sınav performansı, iş temposu veya Senior destek hedefinizi yazabilirsiniz." />
              </label>
            </div>

            <input type="hidden" name="audience" value="adults" />
            <input type="hidden" name="concern" value={selectedConcern} />

            <button type="submit" disabled={submitState === "submitting"} className="arrow-shift mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#F05A38] px-6 text-[15px] font-extrabold text-white transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70">
              {submitState === "submitting" ? "Mesajınız İletiliyor..." : "Randevu İçin Beni Arayın"}
              <ArrowUpRight size={18} />
            </button>

            {message ? (
              <p className={`mt-4 rounded-[18px] px-4 py-3 text-[14px] font-extrabold leading-6 ${submitState === "success" ? "bg-[#F0F7F2] text-[#1B4332]" : "bg-[#FFF0D7] text-[#7A3B1C]"}`} role="status">
                {message}
              </p>
            ) : null}

            <p className="mt-4 flex items-start gap-2 text-[12px] font-semibold leading-5 text-[rgba(36,29,24,0.56)]">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              BrainFit Karşıyaka ekibi, bu bilgileri yalnızca randevu planlaması için kullanır.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
