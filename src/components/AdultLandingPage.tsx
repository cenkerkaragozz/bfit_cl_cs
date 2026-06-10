"use client";

import Image from "next/image";
import { FormEvent, useState, useEffect, useRef } from "react";
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
import { motion, useReducedMotion, useInView, animate } from "framer-motion";
import { Reveal, StarBurst, HeroRing, Squiggle } from "@/components/Decorations";

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
    num: 45,
    suffix: " dk",
    duration: 1.5,
    label: "Zihin Check-Up",
    copy: "İlk adımda mevcut bilişsel profilinizi anlamaya odaklanırız.",
  },
  {
    num: 16,
    suffix: " sayfa",
    duration: 0.53,
    label: "Kişisel rapor",
    copy: "Sonuçlarınızı güçlü ve gelişime açık alanlarla birlikte okuruz.",
  },
  {
    num: 1200,
    suffix: "+",
    duration: 2.5,
    label: "Egzersiz havuzu",
    copy: "Egzersizler hedefe, profile ve programa göre yapılandırılır.",
  },
  {
    num: 20,
    suffix: "+ yıl",
    duration: 0.67,
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

const easeOutQuart = [0.2, 0.8, 0.2, 1] as const;

export function AdultLandingPage() {
  const [selectedConcern, setSelectedConcern] = useState<string>(audienceCards[0].concern);

  return (
    <>
      <AdultHero />
      <AudienceSection selectedConcern={selectedConcern} onSelectConcern={setSelectedConcern} />
      <CheckupJourneySection />
      <OutcomeStrip />
      <ReportAndMeasurementSection />
      <ProgramSection />
      <TrustAndEvidenceSection />
      <TestimonialAndLocalProofSection />
      <FaqSection />
      <AdultCheckUpFormSection selectedConcern={selectedConcern} />
    </>
  );
}

function AdultHero() {
  return (
    <section className="v4">
      <div className="inner v4-inner">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <span className="v4-kicker">
              <span className="v4-kicker-bar" aria-hidden="true" />
              BrainFit Karşıyaka · Bilişsel Gelişim Merkezi
            </span>
            <h1 className="v4-h1">Bilişsel profilinizi öğrenin. Kişisel egzersiz yolunuza başlayın.</h1>
            <p className="v4-sub">
              Karşıyaka&apos;da yüz yüze hizmet sunan BrainFit&apos;te, <mark>45 dakikalık Zihin Check-Up</mark> ile <mark>dikkati, hafızayı ve zihinsel performansı</mark> ölçeriz. <mark>16 sayfalık kişisel raporu</mark> uzmanla birlikte okur, ardından <mark>üç egzersiz programından</mark> hangisinin hedefinize uyduğunu birlikte belirleriz.
            </p>
            <div className="v4-ctas">
              <a href="#checkup-form" className="v4-cta-p arrow-shift">
                Ücretsiz Check-Up Randevusu Al
                <ArrowUpRight size={18} strokeWidth={2.7} aria-hidden="true" />
              </a>
              <a href="#checkup" className="v4-cta-s">45 dakikada ne olur?</a>
            </div>
            <div className="v4-chips">
              <span className="v4-chip">Karşıyaka · Yüz yüze</span>
              <span className="v4-chip">16 sayfalık rapor</span>
              <span className="v4-chip">Tanı veya ilaç içermez</span>
            </div>
          </div>
          <div className="v4-visual-space" aria-hidden="true" />
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
  const cardAccents = ["#F5846E", "#40CEEE", "#9B66F4", "#6BC862"] as const;

  return (
    <section
      id="help"
      className="relative overflow-hidden py-[74px] md:py-[116px]"
      style={{
        background:
          "linear-gradient(90deg, color-mix(in srgb, #EFF8FD 48%, #FFFFFF) 0%, #FFFFFF 62%)",
      }}
    >
      <div className="inner">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <div className="badge border-[#40CEEE] bg-[#EFF8FD] text-[#1E99B5]">
              Kimler İçin?
            </div>
            <h2 className="mt-7 max-w-[860px] font-[var(--body)] text-[clamp(38px,6vw,74px)] font-extrabold leading-[1.02] text-[#160A08]">
              Dört yetişkin hedefi. Tek ilk adım: profilinizi anlamak.
            </h2>
          </div>
          <p className="max-w-[520px] text-[17px] font-semibold leading-8 text-[rgba(36,29,24,0.72)] lg:justify-self-end">
            Kartınızı seçin. Formdaki hedef notu buna göre güncellenir; uzman
            görüşmesi daha ilk dakikadan doğru yerden başlar.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="grid gap-3">
              {audienceCards.map((item, index) => {
                const Icon = item.icon;
                const active = selectedConcern === item.concern;
                const accent = cardAccents[index];

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => onSelectConcern(item.concern)}
                    className={`group grid gap-4 rounded-[24px] border p-4 text-left transition sm:grid-cols-[auto_1fr_auto] sm:items-center ${
                      active
                        ? "border-[#1B4332] bg-[#1B4332] text-white"
                        : "border-[rgba(36,29,24,0.1)] bg-[#FAF9F5] text-[#241D18] hover:border-[#F5846E]"
                    }`}
                  >
                    <span
                      className="grid h-13 w-13 place-items-center rounded-full bg-white"
                      style={{ color: accent }}
                    >
                      <Icon size={25} strokeWidth={2.4} />
                    </span>
                    <span>
                      <span className="block text-[22px] font-extrabold leading-tight">
                        {item.title}
                      </span>
                      <span
                        className={`mt-2 block text-[14px] font-semibold leading-6 ${
                          active ? "text-white/74" : "text-[rgba(36,29,24,0.68)]"
                        }`}
                      >
                        {item.need}
                      </span>
                    </span>
                    <span
                      className={`w-fit rounded-full px-4 py-2 text-[12px] font-extrabold ${
                        active
                          ? "bg-[#FCBF48] text-[#241D18]"
                          : "bg-white text-[#1E99B5]"
                      }`}
                    >
                      Seç
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="sticky top-28 rounded-[32px] bg-[#F5846E] p-6 text-[#160A08] shadow-[0_28px_70px_rgba(245,132,110,0.22)] md:p-8">
              <p className="text-[13px] font-extrabold uppercase tracking-[0.12em]">
                Başlangıç notu
              </p>
              <h3 className="mt-5 font-[var(--display)] text-[42px] leading-none">
                Size göre yol
              </h3>
              <p className="mt-5 text-[19px] font-extrabold leading-7">
                {selectedConcern}
              </p>
              <div className="mt-7 grid gap-3">
                {["Hedef görüşmesi", "Bilişsel profil taraması", "Rapor açıklaması"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[18px] bg-white/24 p-3"
                    >
                      <CheckCircle2 size={18} />
                      <span className="text-[14px] font-extrabold">{item}</span>
                    </div>
                  ),
                )}
              </div>
              <a
                href="#checkup-form"
                className="cta-on-coral arrow-shift mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-[14px] font-extrabold"
              >
                Bu hedefle randevu al
                <ArrowUpRight size={17} />
              </a>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CheckupJourneySection() {
  return (
    <section id="checkup" className="ckj-section">
      <div className="inner">
        <span className="ckj-badge">Nasıl İşler</span>
        <div className="ckj-layout">
          <div className="ckj-panel">
            <h2 className="ckj-h2">İlk görüşme, doğru başlangıcı bulmak için tasarlanmıştır.</h2>
            <p className="ckj-sub">Değerlendirme başlamadan önce süreci, ne ölçeceğimizi ve ne bulacağımızı birlikte konuşuruz.</p>
            <a href="#checkup-form" className="ckj-cta arrow-shift">
              Randevu al
              <ArrowUpRight size={15} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
          <div className="ckj-steps">
            <motion.div className="ckj-step" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: 0, ease: [0.2, 0.8, 0.2, 1] }}>
              <span className="ckj-step-num">01</span>
              <div className="ckj-step-content">
                <p className="ckj-step-title">Hedef görüşmesi</p>
                <p className="ckj-step-copy">Neyi desteklememiz gerektiğini, günlük tablonuzu ve hedefinizi netleştiririz.</p>
              </div>
            </motion.div>
            <motion.div className="ckj-step" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: 0.11, ease: [0.2, 0.8, 0.2, 1] }}>
              <span className="ckj-step-num">02</span>
              <div className="ckj-step-content">
                <p className="ckj-step-title">Bilişsel profil taraması</p>
                <p className="ckj-step-copy">Dikkat, hafıza, işlem hızı ve muhakeme standart protokollerle ayrı ayrı değerlendirilir.</p>
              </div>
            </motion.div>
            <motion.div className="ckj-step" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: 0.22, ease: [0.2, 0.8, 0.2, 1] }}>
              <span className="ckj-step-num">03</span>
              <div className="ckj-step-content">
                <p className="ckj-step-title">Rapor değerlendirmesi</p>
                <p className="ckj-step-copy">16 sayfalık bulgular, güçlü ve desteklenebilir alanlar sade bir dille birlikte okunur.</p>
              </div>
            </motion.div>
            <motion.div className="ckj-step" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: 0.33, ease: [0.2, 0.8, 0.2, 1] }}>
              <span className="ckj-step-num">04</span>
              <div className="ckj-step-content">
                <p className="ckj-step-title">Kişisel yol haritası</p>
                <p className="ckj-step-copy">Size uygun programı ve ilk adımı birlikte belirleriz, zorlamadan.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OutcomeStrip() {
  const items = [
    { label: "Bilişsel profil", detail: "7 alanda kişisel haritanız" },
    { label: "Kişisel rapor", detail: "16 sayfa, uzmanla birlikte okunur" },
    { label: "Başlangıç planı", detail: "Hedefinize uygun program önerisi" },
  ] as const;

  return (
    <section className="bg-[#F0F7F2] py-8">
      <div className="inner flex flex-wrap justify-center gap-3">
        {items.map(({ label, detail }) => (
          <div
            key={label}
            className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_2px_14px_rgba(22,76,53,0.08)]"
          >
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#6BC862]" />
            <div>
              <p className="text-[14px] font-extrabold text-[#241D18]">{label}</p>
              <p className="mt-0.5 text-[12px] font-semibold text-[#241D18]/60">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReportAndMeasurementSection() {
  return (
    <section className="bg-white py-[74px] md:py-[116px]">
      <div className="inner grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <div className="badge border-[#FCBF48] text-[#8C5038]">Raporu Görünür Kılalım</div>
          <h2 className="section-title mid-section-title mt-7 max-w-[760px]">
            Vaadimiz soyut değil: ölçüm, rapor ve kişisel yol haritası.
          </h2>
          <p className="body-copy mt-6 max-w-[620px]">
            Zihin Check-Up sonunda dikkat, hafıza, işlem hızı ve ilgili bilişsel alanlar tek tek ele alınır. Amaç, nereden başlayacağınızı netleştirmektir.
          </p>

          <div className="cognitive-areas-grid mt-8 grid gap-3 sm:grid-cols-2">
            {measurementAreas.map((area) => (
              <div key={area} className="cognitive-area-item flex items-center gap-3 rounded-[18px] bg-[#FEF9F5] p-4">
                <CheckCircle2 size={18} className="shrink-0 text-[#6BC862]" />
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
                  <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#1E99B5]">
                    Örnek rapor görünümü
                  </p>
                  <h3 className="mt-3 font-[var(--display)] text-[42px] leading-none">
                    Bilişsel Profil
                  </h3>
                </div>
                <span className="rounded-full bg-[#FFF0D7] px-4 py-2 text-[13px] font-extrabold text-[#8C5038]">
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
                      <span className="block h-full w-[68%] rounded-full bg-[#6BC862]" />
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  const cardAnim = (i: number) =>
    shouldReduce
      ? { opacity: 1, transition: { duration: 0 } }
      : {
          opacity: isInView ? 1 : 0,
          transition: { duration: 0.7, delay: i * 0.13, ease: easeOutQuart },
        };

  return (
    <section id="services" className="pv4">
      <div className="inner">
        <Reveal>
          <div className="pv4-hdr">
            <span className="pv4-badge">Programlar</span>
            <h2 className="pv4-h2">Hedefinize göre üç net başlangıç yolu.</h2>
            <p className="pv4-sub">Program seçimini tahminle değil, Check-Up raporunuz ve uzman görüşmesiyle yaparız.</p>
          </div>
        </Reveal>
        <div className="pv4-stack" ref={ref}>
          <motion.div className="pv4-card pv4-c1" initial={{ opacity: 0 }} animate={cardAnim(0)}>
            <div className="pv4-dot" />
            <p className="pv4-id">BrainFit Adult</p>
            <p className="pv4-ctx">İş ve üniversite yaşamı</p>
            <h3 className="pv4-title">Günlük tempo için zihinsel netlik</h3>
            <p className="pv4-copy">Odaklanma, planlama, zihinsel dayanıklılık ve öğrenme kapasitesini günlük ritminize uygun egzersizlerle destekler.</p>
            <a href="#checkup-form" className="pv4-cta">Bu yola uygunluğumu öğren <ArrowUpRight size={14} aria-hidden="true" /></a>
          </motion.div>
          <motion.div className="pv4-card pv4-c2" initial={{ opacity: 0 }} animate={cardAnim(1)}>
            <div className="pv4-dot" />
            <p className="pv4-id">BrainFit Performance</p>
            <p className="pv4-ctx">YKS, KPSS, dil ve mesleki sınavlar</p>
            <h3 className="pv4-title">Sınav ve kariyer performansı</h3>
            <p className="pv4-copy">Bilgiyi geri çağırma, dikkati sürdürme ve zaman baskısı altında daha düzenli performans gösterebilme becerilerine odaklanır.</p>
            <a href="#checkup-form" className="pv4-cta">Bu yola uygunluğumu öğren <ArrowUpRight size={14} aria-hidden="true" /></a>
          </motion.div>
          <motion.div className="pv4-card pv4-c3" initial={{ opacity: 0 }} animate={cardAnim(2)}>
            <div className="pv4-dot" />
            <p className="pv4-id">BrainFit Senior</p>
            <p className="pv4-ctx">50+ yetişkinler</p>
            <h3 className="pv4-title">Aktif yaşam için bilişsel destek</h3>
            <p className="pv4-copy">Hafıza, görsel algı, beden-zihin uyumu ve zihinsel esnekliği kişisel tempoya duyarlı şekilde destekler.</p>
            <a href="#checkup-form" className="pv4-cta">Bu yola uygunluğumu öğren <ArrowUpRight size={14} aria-hidden="true" /></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AnimatedStat({ num, suffix, duration }: { num: number; suffix: string; duration: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, num, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) {
            ref.current.textContent = Math.round(v).toString() + suffix;
          }
        },
      });
      return controls.stop;
    }
  }, [isInView, num, duration, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function TrustAndEvidenceSection() {
  return (
    <section className="bg-white py-[74px] md:py-[116px]">
      <div className="inner">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[30px] bg-[#F0F7F2] p-6 shadow-[0_18px_42px_rgba(36,29,24,0.07)] md:p-8">
              <div className="badge border-[#6BC862] text-[#1B4332]">Ne yapıyoruz?</div>
              <h2 className="mt-7 font-[var(--display)] text-[clamp(42px,5vw,66px)] leading-[0.96] text-[#241D18]">
                Güven, sınırları net anlatmakla başlar.
              </h2>
              <div className="mt-8 grid gap-3">
                {doItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[18px] bg-white p-4">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#6BC862]" />
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
                    <XCircle size={20} className="mt-0.5 shrink-0 text-[#F5846E]" />
                    <p className="text-[15px] font-extrabold leading-6 text-[#241D18]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10 grid gap-4 rounded-[30px] bg-[#F5846E] p-6 text-[#160A08] sm:grid-cols-2 lg:grid-cols-4 md:p-8">
            {evidenceItems.map((item) => (
              <div key={item.label} className="rounded-[20px] bg-white/18 p-5">
                <p className="font-[var(--display)] text-[clamp(36px,5vw,56px)] font-bold leading-none">
                  <AnimatedStat num={item.num} suffix={item.suffix} duration={item.duration} />
                </p>
                <p className="mt-3 text-[15px] font-extrabold">{item.label}</p>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-[#160A08]/72">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
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
            <div className="relative h-[430px] overflow-hidden rounded-[26px] bg-[#FCBF48]">
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
              <div className="mt-1 flex flex-wrap items-center gap-1 text-[#FCBF48]" aria-label="Google Puanı: 4.6">
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
                <ShieldCheck size={19} className="shrink-0 text-[#6BC862]" />
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
          <div className="badge border-[#FCBF48] text-[#8C5038]">Sık Sorulan Sorular</div>
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
      setMessage("Talebiniz alındı. Hafta içi 1-2 saat içinde WhatsApp veya telefon ile arayacağız. İlk görüşme yaklaşık 5 dakika sürer.");
      event.currentTarget.reset();
    } catch {
      setSubmitState("error");
      setMessage("Mesaj gönderilemedi. Lütfen bilgilerinizi kontrol ederek tekrar deneyiniz.");
    }
  }

  return (
    <section id="checkup-form" className="relative overflow-hidden bg-[#F5846E] py-[74px] text-[#160A08] md:py-[116px]">
      <div className="inner grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal className="min-w-0">
          <div className="badge border-[#160A08]/40 bg-white/20 text-[#160A08]">Ücretsiz Zihin Check-Up</div>
          <h2 className="mt-7 max-w-full font-[var(--display)] text-[clamp(36px,9vw,86px)] font-bold leading-[0.96] tracking-normal md:max-w-[700px]">
            İlk adımı net, düşük riskli ve anlaşılır tutalım.
          </h2>
          <p className="mt-7 max-w-[590px] text-[17px] font-semibold leading-8 text-[#160A08]/78">
            Adınızı ve endişenizi bırakın; hafta içi 1-2 saat içinde WhatsApp veya telefonla arayarak ücretsiz Zihin Check-Up randevunuzu planlayalım. İlk görüşme yaklaşık 5 dakika sürer.
          </p>

          <motion.div layout className="mt-8 flex w-full max-w-[590px] items-center gap-3 rounded-full bg-white px-4 py-3 text-[14px] font-extrabold shadow-[0_16px_40px_rgba(22,10,8,0.12)] md:inline-flex md:w-auto">
            <CheckCircle2 size={18} className="shrink-0 text-[#6BC862]" />
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

            <button type="submit" disabled={submitState === "submitting"} className="arrow-shift mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#F5846E] px-6 text-[15px] font-extrabold text-white transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70">
              {submitState === "submitting" ? "Mesajınız İletiliyor..." : "Randevu İçin Beni Arayın"}
              <ArrowUpRight size={18} />
            </button>

            {message ? (
              <p className={`mt-4 rounded-[18px] px-4 py-3 text-[14px] font-extrabold leading-6 ${submitState === "success" ? "bg-[#F0F7F2] text-[#1B4332]" : "bg-[#FFF0D7] text-[#8C5038]"}`} role="status">
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
