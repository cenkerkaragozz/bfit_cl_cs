"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  ChevronDown,
  CircleDot,
  Eye,
  Home,
  School,
  Users,
} from "lucide-react";
import { EditorialImageSlot } from "@/components/EditorialImageSlot";

const concerns = [
  {
    id: "exam",
    label: "Sınav anı",
    icon: BookOpenCheck,
    main: "Evde hepsini biliyor ama sınavda yapamıyor.",
    support: [
      "Çok çalışıyor fakat notlarına yansımıyor.",
      "Öğretmeni ‘Kapasitesi var ama gösteremiyor’ diyor.",
    ],
    more: [
      "Bildiklerini sınav anında unutuyor.",
      "Bildiği sorularda dikkatsizlik hatası yapıyor.",
    ],
    explanation:
      "Evde bildiğini sınavda gösterememesi tek bir nedene bağlanamaz. İlk adım, hangi bilişsel becerilerde zorlandığını anlamaktır.",
  },
  {
    id: "homework",
    label: "Ödeve başlamak",
    icon: CircleDot,
    main: "Masaya oturması saatler sürüyor.",
    support: ["Başlıyor ama birkaç dakika sonra kalkıyor."],
    more: [],
    explanation:
      "Ödev yapmak istemiyor gibi görünebilir. Oysa başlamakta zorlanmakla başladığı işi sürdürmek aynı şey değildir.",
  },
  {
    id: "behavior",
    label: "Davranış ve uyum",
    icon: Users,
    main: "Tepkileri bir anda çok büyüyor.",
    support: [
      "Öğretmeni sınıftaki davranışlarıyla ilgili sık sık geri bildirim veriyor.",
      "Okulda arkadaşlarıyla anlaşmakta zorlanıyor.",
    ],
    more: [
      "Söylediğimiz her şeye karşı çıkıyor.",
      "Yeni ortamlara uyum sağlaması çok zor oluyor.",
    ],
    explanation:
      "Aynı zorlanma evde, okulda ve arkadaş ilişkilerinde farklı görünebilir. Gözlemleri birlikte değerlendirmek tabloyu daha anlaşılır hâle getirir.",
  },
  {
    id: "attention",
    label: "Dikkatini sürdürmek",
    icon: Eye,
    main: "Öğretmeni derste sık sık hayallere daldığını söylüyor.",
    support: [
      "Bir işe başlıyor, hemen başka bir şeye geçiyor.",
      "En küçük seste bile dikkati dağılıyor.",
    ],
    more: [],
    explanation:
      "Dikkatin çabuk dağılması her çocukta aynı biçimde yaşanmaz. Ne zaman ve hangi koşullarda ortaya çıktığına birlikte bakmak gerekir.",
  },
] as const;

type ConcernId = (typeof concerns)[number]["id"];

const behaviorContexts = [
  {
    id: "home",
    label: "Evde",
    icon: Home,
    quote: "Söylediğimiz her şeye karşı çıkıyor.",
    color: "#F5927E",
  },
  {
    id: "school",
    label: "Okulda",
    icon: School,
    quote: "Öğretmeni sık sık geri bildirim veriyor.",
    color: "#AAE8F6",
  },
  {
    id: "social",
    label: "Sosyal hayatta",
    icon: Users,
    quote: "Arkadaşlarıyla anlaşmakta zorlanıyor.",
    color: "#D9F8A8",
  },
] as const;

function HomeworkFlow() {
  return (
    <ol
      data-asset-id="C-DIAG-01"
      className="relative grid gap-5 rounded-[26px] bg-[#FFF7E8] p-5 sm:grid-cols-2"
      aria-label="Ödeve başlama ve sürdürme akışı"
    >
      <span
        aria-hidden="true"
        className="absolute left-10 top-[72px] h-[calc(100%-112px)] w-0.5 bg-[#FCBF48] sm:top-[39px] sm:h-0.5 sm:w-[calc(50%-10px)]"
      />
      {[
        ["01", "Başlamak", "Masaya oturması saatler sürüyor."],
        ["02", "Sürdürmek", "Başlıyor ama birkaç dakika sonra kalkıyor."],
      ].map(([number, title, quote]) => (
        <li key={title} className="relative z-10 flex gap-4 sm:block">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[12px] font-extrabold text-[#8C5038] shadow-sm">
            {number}
          </span>
          <div className="sm:mt-4">
            <h3 className="text-[18px] font-bold leading-tight text-[#241D18]">{title}</h3>
            <p className="mt-1 text-[13px] font-semibold leading-5 text-[rgba(36,29,24,0.66)]">
              “{quote}”
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function BehaviorStrip() {
  const [activeContext, setActiveContext] = useState<
    (typeof behaviorContexts)[number]["id"]
  >(behaviorContexts[0].id);
  const active = behaviorContexts.find((item) => item.id === activeContext) ?? behaviorContexts[0];

  return (
    <div
      data-asset-id="C-DIAG-02"
      className="rounded-[26px] bg-[#F4F1EB] p-5"
    >
      <div className="relative grid grid-cols-3 gap-2" aria-label="Davranış ve uyum bağlamları">
        <span
          aria-hidden="true"
          className="absolute left-[16%] right-[16%] top-6 h-0.5 bg-[rgba(36,29,24,0.14)]"
        />
        {behaviorContexts.map((item) => {
          const Icon = item.icon;
          const selected = item.id === activeContext;

          return (
            <button
              key={item.id}
              type="button"
              aria-expanded={selected}
              aria-controls="behavior-context-copy"
              onClick={() => setActiveContext(item.id)}
              className="relative z-10 min-h-20 rounded-[18px] px-2 py-3 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164C35]"
            >
              <span
                className="mx-auto grid h-12 w-12 place-items-center rounded-full border-4 border-[#F4F1EB] text-[#241D18] transition-transform duration-200"
                style={{
                  backgroundColor: item.color,
                  transform: selected ? "scale(1.08)" : "scale(1)",
                }}
              >
                <Icon size={19} aria-hidden="true" />
              </span>
              <span className={`mt-2 block text-[11px] font-extrabold ${selected ? "text-[#241D18]" : "text-[var(--text-support)]"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      <p
        id="behavior-context-copy"
        className="mt-4 rounded-[18px] bg-white p-4 text-[14px] font-extrabold leading-6 text-[#241D18]"
      >
        “{active.quote}”
      </p>
    </div>
  );
}

function AttentionFlow() {
  return (
    <div className="relative overflow-hidden rounded-[26px] bg-[#EFF8FD] p-6" aria-hidden="true">
      <div className="flex items-center gap-3">
        {["Bir ses", "Bir düşünce", "Başka bir iş"].map((label, index) => (
          <div
            key={label}
            className="flex-1 rounded-[18px] bg-white p-3 text-center text-[11px] font-extrabold text-[#1E99B5] shadow-sm"
            style={{ transform: `translateY(${index % 2 === 0 ? 0 : 12}px)` }}
          >
            {label}
          </div>
        ))}
      </div>
      <ArrowRight className="mx-auto mt-8 text-[#F5927E]" size={34} />
      <p className="mt-2 text-center text-[13px] font-extrabold text-[#241D18]">
        Dikkat bir anda başka yöne kayabiliyor.
      </p>
    </div>
  );
}

function ContextDetail({ concernId }: { concernId: ConcernId }) {
  if (concernId === "homework") return <HomeworkFlow />;
  if (concernId === "behavior") return <BehaviorStrip />;
  if (concernId === "attention") return <AttentionFlow />;

  return null;
}

function ConcernImage({ concernId }: { concernId: ConcernId }) {
  const imageByConcern = {
    exam: {
      assetId: "C-PHOTO-01",
      tone: "coral",
      altPlan: "Evde çalışma masasındaki soruyu çözen bir öğrenci ve onu uzaktan gözlemleyen ebeveyn.",
    },
    homework: {
      assetId: "C-PHOTO-02",
      tone: "amber",
      altPlan: "Ödevinin başında çalışmaya hazırlanan bir çocuk ve düzenli çalışma masası.",
    },
    behavior: {
      assetId: "C-PHOTO-03",
      tone: "forest",
      altPlan: "Okul ortamında öğretmeni ve arkadaşlarıyla etkileşim kuran bir çocuk.",
    },
    attention: {
      assetId: "C-PHOTO-04",
      tone: "coral",
      altPlan: "Dikkatini yaptığı etkinlik üzerinde tutmaya çalışan bir çocuk.",
    },
  } as const;
  const image = imageByConcern[concernId];

  return (
    <EditorialImageSlot
      assetId={image.assetId}
      tone={image.tone}
      altPlan={image.altPlan}
    />
  );
}

export function HelpSection() {
  const [selectedId, setSelectedId] = useState<ConcernId>("exam");
  const [showMore, setShowMore] = useState(false);
  const reduceMotion = useReducedMotion();
  const selected = concerns.find((item) => item.id === selectedId) ?? concerns[0];
  const moreId = `child-concern-more-${selected.id}`;

  function selectConcern(id: ConcernId) {
    setSelectedId(id);
    setShowMore(false);
  }

  return (
    <section id="help" className="section-surface relative scroll-mt-28 overflow-hidden py-[72px] md:py-[112px]">
      <div className="inner">
        <div className="max-w-[780px]">
          <div className="badge border-[#F5927E] bg-[#FEF0EC] text-[#C4533C]">
            Bir başlığa dokunun
          </div>
          <h2 className="section-title mt-7">Hangisini gözlemliyorsunuz?</h2>
          <p className="body-copy mt-5 max-w-[650px]">
            Çocuğunuzda en sık karşılaştığınız durumu seçin. Aşağıdaki cümlelerden bazıları size de tanıdık gelebilir.
          </p>
        </div>

        <div
          className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-4"
          role="tablist"
          aria-label="Çocuğunuzda gözlemlediğiniz durum"
        >
          {concerns.map((concern) => {
            const Icon = concern.icon;
            const selectedTab = concern.id === selectedId;

            return (
              <button
                key={concern.id}
                type="button"
                role="tab"
                aria-selected={selectedTab}
                aria-controls="child-concern-panel"
                onClick={() => selectConcern(concern.id)}
                className={`group flex min-h-20 items-center justify-between gap-3 rounded-[22px] border px-4 py-3 text-left transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#164C35] ${
                  selectedTab
                    ? "border-[#164C35] bg-[#164C35] text-white shadow-[0_16px_36px_rgba(22,76,53,0.18)]"
                    : "border-[rgba(36,29,24,0.1)] bg-white text-[#241D18] hover:border-[#F5927E]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon size={19} className={selectedTab ? "text-[#FCBF48]" : "text-[#C4533C]"} aria-hidden="true" />
                  <span className="text-[13px] font-extrabold leading-5 sm:text-[14px]">
                    {concern.label}
                  </span>
                </span>
                {selectedTab ? <Check size={17} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}
              </button>
            );
          })}
        </div>

        <div id="child-concern-panel" role="tabpanel" className="mt-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={selected.id}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.2, 0.8, 0.2, 1] }}
              className="grid overflow-hidden rounded-[30px] bg-white p-5 shadow-[0_24px_70px_rgba(36,29,24,0.1)] md:p-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-9"
            >
              <div className="py-2">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#C4533C]">
                  {selected.label}
                </p>
                <h3 className="mid-section-title mt-4 max-w-[720px] text-[#241D18]">
                  “{selected.main}”
                </h3>
                <ul className="mt-6 grid gap-3">
                  {selected.support.map((quote) => (
                    <li key={quote} className="flex items-start gap-3 text-[15px] font-semibold leading-7 text-[rgba(36,29,24,0.72)]">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#F5927E]" aria-hidden="true" />
                      “{quote}”
                    </li>
                  ))}
                </ul>

                {selected.more.length > 0 ? (
                  <div className="mt-5">
                    <button
                      type="button"
                      aria-expanded={showMore}
                      aria-controls={moreId}
                      onClick={() => setShowMore((open) => !open)}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[rgba(36,29,24,0.14)] px-4 text-[13px] font-extrabold text-[#241D18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#164C35]"
                    >
                      Bunlar da tanıdık mı?
                      <ChevronDown className={`transition-transform ${showMore ? "rotate-180" : ""}`} size={16} aria-hidden="true" />
                    </button>
                    <AnimatePresence initial={false}>
                      {showMore ? (
                        <motion.ul
                          id={moreId}
                          initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.28 }}
                          className="mt-3 grid gap-2 overflow-hidden rounded-[18px] bg-[#FEF9F5] p-4"
                        >
                          {selected.more.map((quote) => (
                            <li key={quote} className="text-[14px] font-semibold leading-6 text-[rgba(36,29,24,0.68)]">
                              “{quote}”
                            </li>
                          ))}
                        </motion.ul>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ) : null}

                <div className="mt-6 flex max-w-[680px] items-start gap-3 rounded-[18px] bg-[#EFF8FD] p-4 text-[#241D18]">
                  <CircleDot className="mt-1 shrink-0 text-[#1E99B5]" size={18} aria-hidden="true" />
                  <p className="text-[15px] font-semibold leading-7 text-[var(--text-secondary)]">
                    {selected.explanation}
                  </p>
                </div>

                {selected.id !== "exam" ? (
                  <div className="mt-6">
                    <ContextDetail concernId={selected.id} />
                  </div>
                ) : null}
              </div>

              <div className="mt-7 lg:mt-0">
                <ConcernImage concernId={selected.id} />
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-[22px] bg-[#F0F7F2] p-5 text-[#164C35]">
          <CircleDot className="mt-0.5 shrink-0" size={20} aria-hidden="true" />
          <p className="text-[14px] font-extrabold leading-6">
            Bu gözlemler tek başına bir tanı anlamına gelmez. Çocuğunuzun hangi alanlarda zorlandığını anlamak için bir başlangıç olabilir.
          </p>
        </div>
      </div>
    </section>
  );
}
