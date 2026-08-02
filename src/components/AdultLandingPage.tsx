"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  GraduationCap,
  ListChecks,
  MemoryStick,
  Sparkles,
  XCircle,
} from "lucide-react";
import { CheckUpSection } from "@/components/CheckUpSection";
import { CheckUpShowcaseSection } from "@/components/CheckUpShowcaseSection";
import { ContactActions } from "@/components/ContactActions";
import { EditorialImageSlot } from "@/components/EditorialImageSlot";
import { ReportAndMeasurementSection } from "@/components/ReportAndMeasurementSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { TrustBar } from "@/components/TrustBar";

type SubmitState = "idle" | "submitting" | "success" | "error";

const contexts = [
  {
    id: "fatigue",
    label: "Zihinsel yorgunluk",
    icon: Brain,
    primary: true,
    main: "Günün ortasında zihnim kapanmış gibi oluyor.",
    support: ["Bir işe odaklanıyorum ama aklım sürekli başka yere gidiyor."],
    more: [
      "Zihnim eskisi kadar hızlı çalışmıyor gibi hissediyorum.",
      "Ne yapacağımı biliyorum ama zihinsel olarak başlayamıyorum.",
    ],
    explanation:
      "Zihinsel yük gün içinde farklı biçimlerde hissedilebilir. Ne zaman yoğunlaştığını ve günlük düzeninizi nasıl etkilediğini fark etmek iyi bir başlangıçtır.",
  },
  {
    id: "memory",
    label: "Hafıza",
    icon: MemoryStick,
    primary: true,
    main: "Bir şeyleri eskisinden daha sık unutmaya başladım.",
    support: ["Bu değişiklik beni tedirgin ediyor."],
    more: [],
    explanation:
      "Günlük unutkanlıkların ne anlama geldiğini tek bir cümleyle söylemek mümkün değildir. Bilişsel profil, yaşadığınız değişimi daha düzenli biçimde ele almanıza yardımcı olabilir.",
  },
  {
    id: "planning",
    label: "Günlük planlama",
    icon: ListChecks,
    primary: true,
    main: "Günlük işlerimi planlayıp sırasıyla yürütmek eskisinden zor geliyor.",
    support: [
      "Birden fazla adımı olan işlerde sırayı karıştırıyorum.",
      "Karar vermek ve başladığım işi bitirmek daha uzun sürüyor.",
    ],
    more: [
      "Gün içinde yapacaklarımı toparlamak için daha fazla çaba harcıyorum.",
    ],
    explanation:
      "Planlama, sıralama ve dikkati sürdürme günlük yaşamda farklı bilişsel becerileri birlikte kullanır. Bilişsel profil, zorlandığınız alanları daha düzenli biçimde ele almanıza yardımcı olabilir.",
  },
  {
    id: "active-mind",
    label: "Zihni aktif tutma",
    icon: Sparkles,
    primary: true,
    main: "Belirgin bir sorunum yok; zihnimi aktif tutmak istiyorum.",
    support: [
      "Yaş alırken zihinsel çevikliğimi daha yakından tanımak istiyorum.",
      "Yeni şeyler öğrenmeye devam etmek istiyorum.",
    ],
    more: ["Zihinsel performansımın bugünkü durumunu merak ediyorum."],
    explanation:
      "Zihin Check-Up yalnızca belirgin bir zorlanma yaşayanlar için değildir. Mevcut bilişsel profilinizi tanımak ve kişisel egzersiz planınızı buna göre şekillendirmek isteyenler için de bir başlangıç olabilir.",
  },
  {
    id: "learning",
    label: "Sınav ve öğrenme",
    icon: GraduationCap,
    primary: false,
    main: "Çalışıyorum ama öğrendiklerim kalıcı olmuyor.",
    support: [
      "Soruları biliyorum ama süreyi yetiştiremiyorum.",
      "Sınav anında zihnim kilitleniyor.",
    ],
    more: [],
    explanation:
      "Öğrenmek, hatırlamak ve süre içinde uygulamak farklı becerileri birlikte gerektirir. Hangi noktada zorlandığınızı görmek çalışma düzeninizi anlamanıza yardımcı olur.",
  },
  {
    id: "work",
    label: "İş hayatı",
    icon: BriefcaseBusiness,
    primary: false,
    main: "Toplantıda anlatılanları takip etmekte zorlanıyorum.",
    support: [
      "Aynı anda birkaç işi yönetemiyorum.",
      "Basit kararları vermek bile eskisinden uzun sürüyor.",
    ],
    more: [],
    explanation:
      "Yoğun iş temposu dikkati, planlamayı ve zihinsel enerjiyi aynı anda zorlayabilir. Yaşadığınız tabloyu anlamak, nereden başlayacağınızı netleştirir.",
  },
] as const;

type ContextId = (typeof contexts)[number]["id"];

const faqs = [
  {
    id: "medical",
    question: "Zihin Check-Up tıbbi bir test mi?",
    answer:
      "Hayır. Tıbbi tanı veya tedavi amacı taşımaz. Bilişsel becerilerin mevcut durumunu anlamaya yardımcı olan bir değerlendirmedir.",
  },
  {
    id: "result",
    question: "Değerlendirme sonunda ne elde ederim?",
    answer:
      "Beş ana bilişsel alanı birlikte gösteren kişisel profil ve bu profile göre şekillenen egzersiz planı elde edersiniz.",
  },
  {
    id: "without-problem",
    question: "Belirgin bir problemim yoksa başvurabilir miyim?",
    answer:
      "Evet. Zihin Check-Up yalnızca bir zorlanma yaşayanlar için değil; dikkatini, öğrenme biçimini veya zihinsel çalışma düzenini daha yakından anlamak isteyenler için de uygundur.",
  },
  {
    id: "contact",
    question: "İlk iletişim nasıl ilerler?",
    answer:
      "WhatsApp’tan yazabilir ya da formu bırakabilirsiniz. Ekibimiz sizi dinler, süreci açıklar ve sorularınızı yanıtlar.",
  },
] as const;

export function AdultLandingPage() {
  return (
    <>
      <AdultHero />
      <TrustBar />
      <AudienceSection />
      <AdultApproachSection />
      <CheckUpSection audience="adults" />
      <ReportAndMeasurementSection surface="white" audience="adults" />
      <CheckUpShowcaseSection audience="adults" />
      <ScopeAndFaqSection />
      <TestimonialSection audience="adults" />
      <AdultCheckUpFormSection />
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
              Karşıyaka&apos;da yüz yüze hizmet sunan BrainFit&apos;te, <mark>1 saatlik Zihin Check-Up</mark> ile dikkat, hafıza ve zihinsel performansla ilişkili beceriler birlikte değerlendirilir. <mark>Kişisel bilişsel profiliniz</mark> uzmanla birlikte ele alınır; ihtiyaçlarınıza göre <mark>kişiye özel egzersiz planı</mark> oluşturulur.
            </p>
            <div className="v4-ctas">
              <a href="#checkup-form" className="v4-cta-p arrow-shift">
                Zihin Check-Up Randevusu Al
                <ArrowUpRight size={18} strokeWidth={2.7} aria-hidden="true" />
              </a>
              <a href="#checkup" className="v4-cta-s">Zihin Check-Up nasıl işler?</a>
            </div>
            <div className="v4-chips">
              <span className="v4-chip">Karşıyaka · Yüz yüze</span>
              <span className="v4-chip">1 saatlik değerlendirme</span>
              <span className="v4-chip">Kişisel egzersiz planı</span>
            </div>
          </div>
          <div className="v4-visual-space" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function AdultContextVisual({ id }: { id: ContextId }) {
  if (id === "fatigue") {
    return (
      <EditorialImageSlot
        assetId="A-PHOTO-01"
        tone="forest"
        altPlan="Gün ortasında çalışma masasındaki işlerine kısa bir ara vererek düşüncelerini toparlayan bir yetişkin."
      />
    );
  }

  if (id === "memory") {
    return (
      <EditorialImageSlot
        assetId="A-PHOTO-02"
        tone="amber"
        altPlan="Günlük hazırlık sırasında notuna yeniden bakarak kısa süre düşünen bir yetişkin."
      />
    );
  }

  if (id === "planning") {
    return (
      <EditorialImageSlot
        assetId="A-PHOTO-03"
        tone="coral"
        altPlan="Aydınlık bir ev ortamında ajandasını düzenleyerek gününü planlayan ileri yaştaki bir yetişkin."
      />
    );
  }

  if (id === "active-mind") {
    return (
      <EditorialImageSlot
        assetId="A-PHOTO-04"
        tone="forest"
        altPlan="Günlük yaşamında yeni bir şey öğrenirken meraklı ve aktif görünen ileri yaştaki bir yetişkin."
      />
    );
  }

  const visualCopy =
    id === "learning"
      ? {
          label: "Öğrenme anı",
          message: "Bilmek ile zamanında kullanmak aynı şey olmayabilir.",
        }
      : {
          label: "Günlük iş akışı",
          message: "Zihin aynı anda çok fazla şeyi taşımaya çalışıyor olabilir.",
        };

  return (
    <div className="relative min-h-[230px] overflow-hidden rounded-[28px] bg-[#F0F7F2] p-6">
      <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border-[24px] border-[#D9F8A8]" aria-hidden="true" />
      <div className="relative flex min-h-[180px] flex-col justify-end">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.13em] text-[#164C35]">
          {visualCopy.label}
        </p>
        <p className="display mt-3 max-w-[360px] text-[34px] leading-[1.02] text-[#241D18]">
          {visualCopy.message}
        </p>
      </div>
    </div>
  );
}

function AudienceSection() {
  const [selectedId, setSelectedId] = useState<ContextId>("fatigue");
  const [otherOpen, setOtherOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const selected = contexts.find((context) => context.id === selectedId) ?? contexts[0];

  function selectContext(id: ContextId) {
    setSelectedId(id);
    setMoreOpen(false);
  }

  return (
    <section id="help" className="section-surface relative scroll-mt-28 overflow-hidden py-[72px] md:py-[112px]">
      <div className="inner">
        <div className="max-w-[830px]">
          <div className="badge border-[#FCBF48] bg-[#FFF7E8] text-[#8C5038]">Kendinize kulak verin</div>
          <h2 className="section-title mt-7">Zihninizle ilgili neyi daha iyi anlamak istiyorsunuz?</h2>
          <p className="body-copy mt-5 max-w-[680px]">
            Size en yakın gelen başlığa dokunun. Bu seçim bir test değil; yalnızca yaşadıklarınızı daha kolay anlatmanıza yardımcı olur.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3" role="tablist" aria-label="Yaşadığınız zihinsel durum">
          {contexts.filter((context) => context.primary).map((context) => (
            <ContextButton key={context.id} context={context} selected={selectedId === context.id} onSelect={selectContext} />
          ))}
        </div>

        <div className="mt-3">
          <button
            type="button"
            aria-expanded={otherOpen}
            aria-controls="adult-other-contexts"
            onClick={() => setOtherOpen((open) => !open)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[rgba(36,29,24,0.14)] bg-white px-4 text-[13px] font-extrabold text-[#241D18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#164C35]"
          >
            Sınav ve iş hayatı için
            <ChevronDown className={`transition-transform duration-200 ${otherOpen ? "rotate-180" : ""}`} size={16} aria-hidden="true" />
          </button>
          <AnimatePresence initial={false}>
            {otherOpen ? (
              <motion.div
                id="adult-other-contexts"
                initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.28 }}
                className="mt-3 grid grid-cols-2 gap-3 overflow-hidden"
              >
                {contexts.filter((context) => !context.primary).map((context) => (
                  <ContextButton key={context.id} context={context} selected={selectedId === context.id} onSelect={selectContext} />
                ))}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="mt-6" id="adult-context-panel" role="tabpanel">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={selected.id}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: reduceMotion ? 0 : 0.25 }}
              className="grid gap-8 rounded-[30px] bg-white p-5 shadow-[0_24px_70px_rgba(36,29,24,0.1)] md:p-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
            >
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.13em] text-[#164C35]">{selected.label}</p>
                <h3 className="mid-section-title mt-4 text-[#241D18]">“{selected.main}”</h3>
                <ul className="mt-6 grid gap-3">
                  {selected.support.map((quote) => (
                    <li key={quote} className="flex items-start gap-3 text-[15px] font-semibold leading-7 text-[rgba(36,29,24,0.72)]">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#FCBF48]" aria-hidden="true" />
                      “{quote}”
                    </li>
                  ))}
                </ul>

                {selected.more.length > 0 ? (
                  <div className="mt-5">
                    <button
                      type="button"
                      aria-expanded={moreOpen}
                      aria-controls="adult-context-more"
                      onClick={() => setMoreOpen((open) => !open)}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[rgba(36,29,24,0.14)] px-4 text-[13px] font-extrabold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#164C35]"
                    >
                      Bunlar da tanıdık mı?
                      <ChevronDown className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} size={16} aria-hidden="true" />
                    </button>
                    <AnimatePresence initial={false}>
                      {moreOpen ? (
                        <motion.ul
                          id="adult-context-more"
                          initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.28 }}
                          className="mt-3 grid gap-2 overflow-hidden rounded-[18px] bg-[#FEF9F5] p-4"
                        >
                          {selected.more.map((quote) => (
                            <li key={quote} className="text-[14px] font-semibold leading-6 text-[rgba(36,29,24,0.68)]">“{quote}”</li>
                          ))}
                        </motion.ul>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ) : null}

                <div className="mt-6 flex items-start gap-3 rounded-[18px] bg-[#F0F7F2] p-4 text-[#164C35]">
                  <CircleDot className="mt-1 shrink-0" size={18} aria-hidden="true" />
                  <p className="text-[15px] font-semibold leading-7 text-[#164C35]">{selected.explanation}</p>
                </div>
              </div>
              <AdultContextVisual id={selected.id} />
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-[22px] bg-[#F0F7F2] p-5 text-[#164C35]">
          <CircleDot className="mt-0.5 shrink-0" size={20} aria-hidden="true" />
          <p className="text-[14px] font-extrabold leading-6">
            Bu deneyimler her zaman bir tanıya işaret etmeyebilir. Zihin Check-Up, tıbbi tanı yerine bilişsel profilinizi daha yakından tanımanıza yardımcı olan bir değerlendirme sunar.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContextButton({
  context,
  selected,
  onSelect,
}: {
  context: (typeof contexts)[number];
  selected: boolean;
  onSelect: (id: ContextId) => void;
}) {
  const Icon = context.icon;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls="adult-context-panel"
      onClick={() => onSelect(context.id)}
      className={`flex min-h-20 items-center justify-between gap-3 rounded-[22px] border px-4 py-3 text-left transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#164C35] ${
        selected
          ? "border-[#164C35] bg-[#164C35] text-white shadow-[0_16px_36px_rgba(22,76,53,0.18)]"
          : "border-[rgba(36,29,24,0.1)] bg-white text-[#241D18] hover:border-[#FCBF48]"
      }`}
    >
      <span className="flex items-center gap-3">
        <Icon size={19} className={selected ? "text-[#FCBF48]" : "text-[#164C35]"} aria-hidden="true" />
        <span className="text-[13px] font-extrabold leading-5 sm:text-[14px]">{context.label}</span>
      </span>
      {selected ? <Check size={17} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}
    </button>
  );
}

function AdultApproachSection() {
  return (
    <section id="about" className="section-surface-alt scroll-mt-28 py-[68px] md:py-[104px]">
      <div className="inner grid gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
        <div>
          <div className="badge border-[#9B66F4] bg-[#F5F0FE] text-[#6A3FD4]">BrainFit nasıl yardımcı olur?</div>
          <h2 className="section-title mt-7 max-w-[760px]">
            İlk adım,
            <span className="block text-[#164C35]">zihinsel profilinizi</span>
            anlamaktır.
          </h2>
        </div>
        <div className="rounded-[28px] bg-white px-6 py-7 shadow-[0_18px_48px_rgba(36,29,24,0.08)] md:px-8 md:py-9">
          <div className="flex items-start gap-4">
            <Brain className="mt-1 shrink-0 text-[#164C35]" size={28} aria-hidden="true" />
            <h3 className="compact-title max-w-[15ch] text-[#164C35]">
              Birlikte bakınca tablo netleşir.
            </h3>
          </div>
          <p className="mt-6 max-w-[44ch] text-[1rem] font-normal leading-7 text-[#514236] [text-wrap:pretty]">
            BrainFit; dikkat, hafıza ve zihinsel yorgunluk gibi günlük deneyimleri tek başına yorumlamak yerine bilişsel alanları birlikte ele alır. Amaç, yaşadığınız tabloyu daha anlaşılır hâle getirmektir.
          </p>
        </div>
      </div>
    </section>
  );
}

function ScopeAndFaqSection() {
  const [openFaq, setOpenFaq] = useState<string>(faqs[0].id);
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-surface py-[72px] md:py-[112px]">
      <div className="inner">
        <div className="max-w-[760px]">
          <div className="badge border-[#6BC862] text-[#164C35]">Hizmet kapsamı</div>
          <h2 className="section-title mt-7">Neler sunduğumuz ve sunmadığımız konusunda şeffafız.</h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[28px] bg-[#F0F7F2] p-6 md:p-8">
            <h3 className="compact-title text-[#164C35]">Ne yapıyoruz?</h3>
            <ul className="mt-6 grid gap-3">
              {["Bilişsel profil değerlendirmesi", "Kişiye özel egzersiz planı"].map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-[18px] bg-white p-4 text-[15px] font-extrabold text-[#241D18]">
                  <CheckCircle2 className="shrink-0 text-[#6BC862]" size={19} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] bg-[#FEF9F5] p-6 md:p-8">
            <h3 className="compact-title text-[#8C5038]">Ne yapmıyoruz?</h3>
            <ul className="mt-6 grid gap-3">
              {["Tıbbi tanı koymuyoruz", "İlaç önermiyor veya mevcut tedavinin yerine geçmiyoruz"].map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-[18px] bg-white p-4 text-[15px] font-extrabold leading-6 text-[#241D18]">
                  <XCircle className="mt-0.5 shrink-0 text-[#F5927E]" size={19} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#8C5038]">Sık sorulanlar</p>
            <h3 className="mid-section-title mt-3 text-[#241D18]">Aklınızdaki temel sorular.</h3>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq) => {
              const open = openFaq === faq.id;
              return (
                <article key={faq.id} className="overflow-hidden rounded-[22px] border border-[rgba(36,29,24,0.08)] bg-white">
                  <h4>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`faq-${faq.id}`}
                      onClick={() => setOpenFaq(open ? "" : faq.id)}
                      className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-[16px] font-extrabold text-[#241D18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#164C35]"
                    >
                      {faq.question}
                      <ChevronDown className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} size={18} aria-hidden="true" />
                    </button>
                  </h4>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        id={`faq-${faq.id}`}
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.28 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[14px] font-semibold leading-7 text-[rgba(36,29,24,0.68)]">{faq.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function AdultCheckUpFormSection() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      audience: "adults",
      parentName: String(formData.get("parentName") || ""),
      phone: String(formData.get("phone") || ""),
      participantAge: String(formData.get("participantAge") || ""),
      note: String(formData.get("note") || ""),
    };

    try {
      const response = await fetch("/api/checkup-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || "Request failed");

      setSubmitState("success");
      setMessage("Talebiniz alındı. Ekibimiz sizinle iletişime geçecek.");
      form.reset();
    } catch {
      setSubmitState("error");
      setMessage("Mesaj gönderilemedi. Bilgilerinizi kontrol edip yeniden deneyin.");
    }
  }

  return (
    <section id="contact" className="section-surface relative scroll-mt-28 overflow-hidden py-[72px] md:py-[112px]">
      <div id="checkup-form" className="inner scroll-mt-28">
        <div className="section-cta-surface grid gap-9 rounded-[34px] px-5 py-8 sm:px-7 md:p-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <div className="badge border-[#160A08]/35 bg-white/20 text-[#160A08]">İletişime geçin</div>
            <h2 className="section-title mt-7 max-w-[650px] !text-[#160A08]">Yaşadığınız durumu birlikte konuşalım.</h2>
            <p className="mt-6 max-w-[560px] text-[16px] font-semibold leading-8 text-[#160A08]/76">
              Aklınızdaki soruyu WhatsApp&apos;tan yazın ya da numaranızı bırakın. Ekibimiz Zihin Check-Up sürecini anlatsın.
            </p>
            <ContactActions audience="adults" className="mt-7 max-w-[560px]" />
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {["1 saatlik değerlendirme", "Bilişsel profil", "Kişisel egzersiz planı"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-[18px] bg-white/24 p-3">
                  <CheckCircle2 size={17} className="shrink-0 text-[#164C35]" aria-hidden="true" />
                  <p className="text-[12px] font-extrabold leading-5 text-[#160A08]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <form id="callback-form" onSubmit={handleSubmit} method="post" action="/api/checkup-request" className="scroll-mt-28 rounded-[28px] bg-white p-5 shadow-[0_28px_80px_rgba(22,10,8,0.18)] md:p-7">
            <h3 className="compact-title text-[#241D18]">Size Ulaşalım</h3>
            <p className="mt-2 text-[14px] font-semibold leading-6 text-[var(--text-support)]">İletişim bilgilerinizi bırakın; ekibimiz sorularınızı yanıtlasın.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-extrabold text-[rgba(36,29,24,0.68)]">Adınız Soyadınız<input name="parentName" autoComplete="name" required className="min-h-13 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold text-[#241D18] outline-none transition duration-200 focus:border-[#164C35] focus:ring-3 focus:ring-[#164C35]/10" placeholder="Adınız soyadınız" /></label>
              <label className="grid gap-2 text-xs font-extrabold text-[rgba(36,29,24,0.68)]">Telefon Numaranız<input name="phone" autoComplete="tel" required inputMode="tel" className="min-h-13 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold text-[#241D18] outline-none transition duration-200 focus:border-[#164C35] focus:ring-3 focus:ring-[#164C35]/10" placeholder="05XX XXX XX XX" /></label>
              <label className="grid gap-2 text-xs font-extrabold text-[rgba(36,29,24,0.68)]">Yaşınız<input name="participantAge" required inputMode="numeric" className="min-h-13 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold text-[#241D18] outline-none transition duration-200 focus:border-[#164C35] focus:ring-3 focus:ring-[#164C35]/10" placeholder="Örn. 34" /></label>
              <label className="grid gap-2 text-xs font-extrabold text-[rgba(36,29,24,0.68)] sm:col-span-2">Kısa Notunuz <span className="font-semibold text-[var(--text-muted)]">(isteğe bağlı)</span><textarea name="note" className="min-h-28 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 py-3 text-[16px] font-bold text-[#241D18] outline-none transition duration-200 focus:border-[#164C35] focus:ring-3 focus:ring-[#164C35]/10" placeholder="Odak, hafıza, öğrenme ya da iş temponuzla ilgili eklemek istediğiniz bir ayrıntı varsa yazabilirsiniz." /></label>
            </div>
            <input type="hidden" name="audience" value="adults" />
            <button type="submit" disabled={submitState === "submitting"} className="mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#164C35] px-6 text-[15px] font-extrabold text-white shadow-[0_16px_34px_rgba(22,76,53,0.24)] transition duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164C35] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-65">
              {submitState === "submitting" ? "İletiliyor..." : "Size Ulaşalım"}<ArrowUpRight size={18} aria-hidden="true" />
            </button>
            <p data-compliance-status="pending" className="mt-4 text-[11px] font-semibold leading-5 text-[var(--text-support)]">Aydınlatma ve veri işleme metni yayın öncesinde bu alana eklenecek.</p>
            {message ? <p className={`mt-4 rounded-[18px] px-4 py-3 text-[14px] font-extrabold leading-6 ${submitState === "success" ? "bg-[#F0F7F2] text-[#164C35]" : "bg-[#FFF0D7] text-[#8C5038]"}`} role="status">{message}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
