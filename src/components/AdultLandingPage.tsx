"use client";

import { FormEvent, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  BatteryMedium,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Lightbulb,
  Puzzle,
  Star,
  XCircle,
} from "lucide-react";
import { CheckUpSection } from "@/components/CheckUpSection";
import { CheckUpShowcaseSection } from "@/components/CheckUpShowcaseSection";
import { ContactActions } from "@/components/ContactActions";
import { ReportAndMeasurementSection } from "@/components/ReportAndMeasurementSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { TrustBar } from "@/components/TrustBar";
import { useHoverable } from "@/lib/useHoverable";

type SubmitState = "idle" | "submitting" | "success" | "error";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const heroChips = [
  "Karşıyaka · Yüz yüze",
  "Bilişsel profil değerlendirmesi",
  "Kişisel egzersiz planı",
] as const;

const audienceCards = [
  {
    id: "fatigue",
    title: "Zihinsel yorgunluk",
    image: "/images/yetiskinler-recognition/mental-fatigue-editorial.webp",
    imageAlt:
      "Gün ortasında çalışma masasındaki işlerine kısa bir ara vererek düşüncelerini toparlayan bir yetişkin.",
    imagePosition: "50% 44%",
    icon: BatteryMedium,
    noteIcon: Lightbulb,
    iconSurface: "bg-[#EAF8FC]",
    iconColor: "text-[#1787AE]",
    bulletColor: "bg-[#1787AE]",
    noteSurface: "bg-[#EFF9FC]",
    bullets: [
      "Yorulmaktan çok, dağılmış hissediyorum.",
      "Sabah daha iyiyim ama gün ilerledikçe aynı verimi sürdüremiyorum.",
      "Bir işe başlamak için eskisinden daha fazla çaba harcıyorum.",
      "Zihnimi susturmakta zorlanıyorum.",
    ],
    explanation:
      "Zihinsel yorgunluk her zaman yoğun bir gün geçirmek anlamına gelmez. Dikkat ve bilgi işlemeyle ilişkili beceriler de gün içindeki performansınızı etkileyebilir.",
  },
  {
    id: "planning",
    title: "Günlük planlama",
    image:
      "/images/yetiskinler-recognition/daily-planning-editorial-landscape.webp",
    imageAlt:
      "Günlük hazırlık sırasında notuna ve anahtarlarına bakarak işlerini sıraya koyan bir yetişkin.",
    imagePosition: "50% 50%",
    icon: CalendarDays,
    noteIcon: Puzzle,
    iconSurface: "bg-[#EDF8EF]",
    iconColor: "text-[#3E9A55]",
    bulletColor: "bg-[#55AB5C]",
    noteSurface: "bg-[#F2F9EA]",
    bullets: [
      "Birden fazla işi aynı anda yönetmekte zorlanıyorum.",
      "Harekete geçmem eskisinden daha uzun sürüyor.",
      "Nereden başlayacağıma karar vermekte zorlanıyorum.",
      "Başladığım işi tamamlamak için daha fazla çaba harcıyorum.",
    ],
    explanation:
      "Ne yapacağınızı bilmek ile onu tamamlamak aynı şey değildir. Günlük hayatı organize etmek, farklı zihinsel becerilerin birlikte çalışmasını gerektirir.",
  },
  {
    id: "active-mind",
    title: "Zihnimi aktif tutmak istiyorum",
    image: "/images/yetiskinler-recognition/active-mind-editorial.webp",
    imageAlt:
      "Okuma, yemek hazırlama, müzik ve yapboz gibi zihni aktif tutan günlük uğraşları gösteren editoryal illüstrasyon.",
    imagePosition: "50% 50%",
    icon: Brain,
    noteIcon: Star,
    iconSurface: "bg-[#FFF6E5]",
    iconColor: "text-[#ECA82D]",
    bulletColor: "bg-[#F3AD30]",
    noteSurface: "bg-[#FFF8E8]",
    bullets: [
      "Yaş alırken zihinsel çevikliğimi korumak istiyorum.",
      "Yeni şeyler öğrenmeye devam etmek istiyorum.",
      "Bugünkü zihinsel performansımı merak ediyorum.",
      "Zihinsel becerilerimi aktif tutmak istiyorum.",
    ],
    explanation:
      "Bilişsel becerilerinizi tanımak için mutlaka bir zorluk yaşamanız gerekmez. Bugünkü performansınızı bilmek, hangi alanları destekleyebileceğinizi anlamanın başlangıcı olabilir.",
  },
] as const;

const faqs = [
  {
    id: "medical",
    question: "Bu bir sağlık hizmeti mi?",
    answer:
      "Hayır. BrainFit bir sağlık kuruluşu değildir. Bilişsel becerilerinizin bugünkü durumunu anlamanıza yardımcı olan bir değerlendirmedir.",
  },
  {
    id: "result",
    question: "Değerlendirme sonunda ne elde ederim?",
    answer:
      "Beş ana bilişsel alanı birlikte gösteren kişisel profil ve bu profile göre şekillenen egzersiz planı elde edersiniz.",
  },
  {
    id: "without-problem",
    question: "Belirgin bir zorlanmam yoksa başvurabilir miyim?",
    answer:
      "Evet. Bu değerlendirme yalnızca bir zorlanma yaşayanlar için değil; dikkatini, öğrenme biçimini veya zihinsel çalışma düzenini daha yakından tanımak isteyenler için de uygundur.",
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
      <TrustBar variant="adults" />
      <AudienceSection />
      <AdultApproachSection />
      <TestimonialSection audience="adults" />
      <CheckUpSection audience="adults" />
      <ReportAndMeasurementSection surface="white" audience="adults" />
      <CheckUpShowcaseSection audience="adults" />
      <ScopeAndFaqSection />
      <AdultCheckUpFormSection />
    </>
  );
}

function AdultHero() {
  const reduceMotion = useReducedMotion();
  const active = !reduceMotion;

  return (
    <section className="v4">
      <div className="inner v4-inner">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <motion.span
              className="v4-kicker"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={active ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.08, duration: 0.4, ease: easeOutExpo }}
            >
              <span className="v4-kicker-bar" aria-hidden="true" />
              BrainFit Karşıyaka · Bilişsel Gelişim Merkezi
            </motion.span>
            <h1 className="v4-h1">
              <span className="-mb-[0.09em] block overflow-hidden pb-[0.09em]">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { y: "112%" }}
                  animate={active ? { y: "0%" } : undefined}
                  transition={{ delay: 0.18, duration: 0.55, ease: easeOutExpo }}
                >
                  Yorgun olan
                </motion.span>
              </span>
              <span className="-mb-[0.09em] block overflow-hidden pb-[0.09em]">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { y: "112%" }}
                  animate={active ? { y: "0%" } : undefined}
                  transition={{ delay: 0.26, duration: 0.55, ease: easeOutExpo }}
                >
                  bedeniniz değilse?
                </motion.span>
              </span>
            </h1>
            <motion.p
              className="v4-sub"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={active ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.48, duration: 0.45, ease: easeOutExpo }}
            >
              Gün sonunda tükenen şey bazen enerjiniz değil, zihninizdir. Dikkat, hafıza ve işlem hızı gibi bilişsel becerilerinizi değerlendirerek{" "}
              <motion.mark
                className="inline-block"
                initial={reduceMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
                animate={active ? { clipPath: "inset(0 0% 0 0)" } : undefined}
                transition={{ delay: 0.72, duration: 0.4, ease: easeOutExpo }}
              >
                bilişsel profilinizi
              </motion.mark>{" "}
              oluşturuyor; güçlü yönlerinizi ve gelişime açık alanlarınızı birlikte ele alıyoruz.
            </motion.p>
            <motion.div
              className="v4-ctas"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={active ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.62, duration: 0.45, ease: easeOutExpo }}
            >
              <a href="#checkup-form" className="v4-cta-p arrow-shift">
                Bilişsel profilimi keşfet
                <ArrowUpRight size={18} strokeWidth={2.7} aria-hidden="true" />
              </a>
              <a href="#checkup" className="v4-cta-s arrow-shift">
                Süreç nasıl ilerliyor?
                <ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </a>
            </motion.div>
            <div className="v4-chips">
              {heroChips.map((chip, index) => (
                <motion.span
                  key={chip}
                  className="v4-chip"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={active ? { opacity: 1, y: 0 } : undefined}
                  transition={{
                    delay: 0.76 + index * 0.05,
                    duration: 0.3,
                    ease: easeOutExpo,
                  }}
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="v4-visual-space" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const reduceMotion = useReducedMotion();
  const hoverable = useHoverable();
  const sectionRef = useRef<HTMLElement>(null);
  // One section-level observer runs the entrance once per page load;
  // children animate only while the section first enters the viewport.
  const sectionInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const sectionActive = !reduceMotion && sectionInView;

  return (
    <section
      ref={sectionRef}
      id="help"
      aria-labelledby="adult-audience-title"
      className="section-surface relative scroll-mt-28 overflow-hidden py-[72px] md:py-[112px]"
    >
      <div className="inner">
        <div className="max-w-[820px]">
          <motion.div
            className="badge border-[#E7A988] bg-transparent text-[#8C5038]"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.168, duration: 1.344, ease: easeOutExpo }}
          >
            Son 1 yıl
          </motion.div>
          <motion.h2
            id="adult-audience-title"
            className="section-title mt-7 max-w-[800px] text-[#241D18]"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.408, duration: 1.512, ease: easeOutExpo }}
          >
            Son bir yılda zihinsel performansınızda bir değişiklik fark ettiniz mi?
          </motion.h2>
          <motion.p
            className="body-copy mt-5 max-w-[680px] text-[17px]"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.6, duration: 1.344, ease: easeOutExpo }}
          >
            Aşağıdaki durumlardan bazıları size tanıdık gelebilir.
          </motion.p>
        </div>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3 xl:gap-6">
          {audienceCards.map((card, cardIndex) => {
            const Icon = card.icon;
            const NoteIcon = card.noteIcon;
            const cardDelay = 0.672 + cardIndex * 0.312;

            return (
              <motion.article
                key={card.id}
                className="flex h-full min-w-0 flex-col rounded-[30px] bg-white p-6 shadow-[0_18px_44px_rgba(36,29,24,0.08)] sm:p-7 lg:p-6 xl:p-7"
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
                transition={{ delay: cardDelay, duration: 1.68, ease: easeOutExpo }}
                whileHover={
                  hoverable
                    ? {
                        y: -4,
                        transition: { duration: 0.28, ease: easeOutExpo },
                      }
                    : undefined
                }
              >
                <figure className="mb-6">
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[22px] bg-[#F4F1EB] lg:aspect-[3/2]">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 640px) calc(100vw - 76px), (max-width: 1023px) calc(100vw - 84px), (max-width: 1279px) 28vw, 360px"
                      quality={75}
                      loading="lazy"
                      decoding="async"
                      className="object-cover"
                      style={{ objectPosition: card.imagePosition }}
                    />
                  </div>
                </figure>

                <span
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${card.iconSurface} ${card.iconColor}`}
                  aria-hidden="true"
                >
                  <Icon size={27} strokeWidth={2.1} />
                </span>

                <h3 className="compact-title mt-7 text-[#241D18]">
                  {card.title}
                </h3>

                <ul className="mt-5 grid gap-3.5">
                  {card.bullets.map((bullet, bulletIndex) => (
                    <motion.li
                      key={bullet}
                      className="flex items-start gap-3 text-[15px] font-semibold leading-6.5 text-[rgba(36,29,24,0.76)]"
                      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
                      transition={{
                        delay: 1.008 + cardDelay + bulletIndex * 0.168,
                        duration: 1.176,
                        ease: easeOutExpo,
                      }}
                    >
                      <span
                        className={`mt-[9px] h-2 w-2 shrink-0 rounded-full ${card.bulletColor}`}
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <motion.div
                    className={`flex min-h-[116px] items-start gap-4 rounded-[22px] p-5 ${card.noteSurface}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
                    transition={{
                      delay: 1.152 + cardDelay + card.bullets.length * 0.168,
                      duration: 1.512,
                      ease: easeOutExpo,
                    }}
                  >
                    <NoteIcon
                      className={`mt-0.5 shrink-0 ${card.iconColor}`}
                      size={27}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <p className="text-[14px] font-semibold leading-6 text-[rgba(36,29,24,0.72)]">
                      {card.explanation}
                    </p>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="mt-9 flex justify-center"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 2.208, duration: 1.512, ease: easeOutExpo }}
        >
          <a
            href="#about"
            className="pill-button arrow-shift min-h-[54px] w-full max-w-[440px] px-7 text-center text-[15px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164C35] sm:w-auto sm:min-w-[420px]"
          >
            Bunlardan birkaçını ben de yaşıyorum
            <ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function AdultApproachSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const sectionActive = !reduceMotion && sectionInView;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-surface-alt scroll-mt-28 py-[68px] md:py-[104px]"
    >
      <div className="inner grid gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
        <div>
          <motion.div
            className="badge border-[#9B66F4] bg-[#F5F0FE] text-[#6A3FD4]"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.05, duration: 0.4, ease: easeOutExpo }}
          >
            BrainFit nasıl yardımcı olur?
          </motion.div>
          <h2 className="section-title mt-7 max-w-[760px]">
            <motion.span
              className="block"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.12, duration: 0.45, ease: easeOutExpo }}
            >
              İlk adım,
            </motion.span>
            <motion.span
              className="block text-[#164C35]"
              initial={
                reduceMotion ? false : { clipPath: "inset(0 100% 0 0)" }
              }
              animate={
                sectionActive ? { clipPath: "inset(0 0% 0 0)" } : undefined
              }
              transition={{ delay: 0.26, duration: 0.55, ease: easeOutExpo }}
            >
              zihinsel profilinizi
            </motion.span>
            <motion.span
              className="block"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.36, duration: 0.45, ease: easeOutExpo }}
            >
              anlamaktır.
            </motion.span>
          </h2>
        </div>
        <motion.div
          className="rounded-[28px] bg-white px-6 py-7 shadow-[0_18px_48px_rgba(36,29,24,0.08)] md:px-8 md:py-9"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 18, filter: "blur(6px)" }
          }
          animate={
            sectionActive
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : undefined
          }
          transition={{ delay: 0.2, duration: 0.6, ease: easeOutExpo }}
        >
          <div className="flex items-start gap-4">
            <Brain className="mt-1 shrink-0 text-[#164C35]" size={28} aria-hidden="true" />
            <h3 className="compact-title max-w-[15ch] text-[#164C35]">
              Birlikte bakınca tablo netleşir.
            </h3>
          </div>
          <p className="mt-6 max-w-[44ch] text-[1rem] font-normal leading-7 text-[#514236] [text-wrap:pretty]">
            BrainFit; dikkat, hafıza ve zihinsel yorgunluk gibi günlük deneyimleri tek başına yorumlamak yerine bilişsel alanları birlikte ele alır. Amaç, yaşadıklarınızı daha anlaşılır hâle getirmektir.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function AdultScopePanel({
  from,
  delay = 0,
  className,
  children,
}: {
  from: "left" | "right";
  delay?: number;
  className?: string;
  children: (panelActive: boolean) => ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const panelInView = useInView(panelRef, { once: true, margin: "-60px" });
  const panelActive = !reduceMotion && panelInView;

  return (
    <motion.div
      ref={panelRef}
      className={className}
      initial={
        reduceMotion ? false : { opacity: 0, x: from === "left" ? -20 : 20 }
      }
      animate={panelActive ? { opacity: 1, x: 0 } : undefined}
      transition={{ delay, duration: 0.45, ease: easeOutExpo }}
    >
      {children(panelActive)}
    </motion.div>
  );
}

function ScopeAndFaqSection() {
  const [openFaq, setOpenFaq] = useState<string>(faqs[0].id);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const sectionActive = !reduceMotion && sectionInView;
  const faqRef = useRef<HTMLDivElement>(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-60px" });
  const faqActive = !reduceMotion && faqInView;

  return (
    <section ref={sectionRef} className="section-surface py-[72px] md:py-[112px]">
      <div className="inner">
        <motion.div
          className="max-w-[760px]"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.4, ease: easeOutExpo }}
        >
          <div className="badge border-[#6BC862] text-[#164C35]">Hizmet kapsamı</div>
          <h2 className="section-title mt-7">Neler sunduğumuz ve sunmadığımız konusunda şeffafız.</h2>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <AdultScopePanel
            from="left"
            className="rounded-[28px] bg-[#F0F7F2] p-6 md:p-8"
          >
            {(panelActive) => (
              <>
                <h3 className="compact-title text-[#164C35]">Ne yapıyoruz?</h3>
                <ul className="mt-6 grid gap-3">
                  {["Bilişsel Değerlendirme", "Bilişsel Yeterlilik Analizi", "Kişiye Özel Gelişim Planı", "Düzenli Gelişim Takibi"].map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-3 rounded-[18px] bg-white p-4 text-[15px] font-extrabold text-[#241D18]"
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={panelActive ? { opacity: 1, y: 0 } : undefined}
                      transition={{
                        delay: 0.15 + index * 0.06,
                        duration: 0.35,
                        ease: easeOutExpo,
                      }}
                    >
                      <motion.span
                        className="shrink-0"
                        initial={reduceMotion ? false : { scale: 0.9 }}
                        animate={panelActive ? { scale: [0.9, 1.05, 1] } : undefined}
                        transition={{
                          delay: 0.28 + index * 0.06,
                          duration: 0.28,
                          ease: "easeOut",
                        }}
                      >
                        <CheckCircle2 className="text-[#6BC862]" size={19} aria-hidden="true" />
                      </motion.span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </>
            )}
          </AdultScopePanel>

          <AdultScopePanel
            from="right"
            delay={0.12}
            className="rounded-[28px] bg-[#FEF9F5] p-6 md:p-8"
          >
            {(panelActive) => (
              <>
                <h3 className="compact-title text-[#8C5038]">Ne yapmıyoruz?</h3>
                <ul className="mt-6 grid gap-3">
                  {["Tıbbi tanı koymuyoruz", "İlaç önermiyor veya mevcut tedavinin yerine geçmiyoruz"].map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-3 rounded-[18px] bg-white p-4 text-[15px] font-extrabold leading-6 text-[#241D18]"
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={panelActive ? { opacity: 1, y: 0 } : undefined}
                      transition={{
                        delay: 0.15 + index * 0.06,
                        duration: 0.35,
                        ease: easeOutExpo,
                      }}
                    >
                      <motion.span
                        className="mt-0.5 shrink-0"
                        initial={reduceMotion ? false : { scale: 0.9 }}
                        animate={panelActive ? { scale: [0.9, 1.05, 1] } : undefined}
                        transition={{
                          delay: 0.28 + index * 0.06,
                          duration: 0.28,
                          ease: "easeOut",
                        }}
                      >
                        <XCircle className="text-[#F5927E]" size={19} aria-hidden="true" />
                      </motion.span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </>
            )}
          </AdultScopePanel>
        </div>

        <div ref={faqRef} className="mt-10 grid gap-7 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={faqActive ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.4, ease: easeOutExpo }}
          >
            <p className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#8C5038]">Sık sorulanlar</p>
            <h3 className="mid-section-title mt-3 text-[#241D18]">Aklınızdaki temel sorular.</h3>
          </motion.div>
          <div className="grid gap-3">
            {faqs.map((faq, index) => {
              const open = openFaq === faq.id;
              const panelId = `faq-${faq.id}`;

              return (
                <motion.article
                  key={faq.id}
                  className="overflow-hidden rounded-[22px] border border-[rgba(36,29,24,0.08)] bg-white"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={faqActive ? { opacity: 1, y: 0 } : undefined}
                  transition={{
                    delay: 0.15 + index * 0.08,
                    duration: 0.4,
                    ease: easeOutExpo,
                  }}
                >
                  <h4>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
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
                        id={panelId}
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
                </motion.article>
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
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const sectionActive = !reduceMotion && sectionInView;

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
    <section
      ref={sectionRef}
      id="contact"
      className="section-surface relative scroll-mt-28 overflow-hidden py-[72px] md:py-[112px]"
    >
      <div id="checkup-form" className="inner scroll-mt-28">
        <div className="section-cta-surface grid gap-9 rounded-[34px] px-5 py-8 sm:px-7 md:p-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <motion.div
              className="badge border-[#160A08]/35 bg-white/20 text-[#160A08]"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.05, duration: 0.4, ease: easeOutExpo }}
            >
              İletişime geçin
            </motion.div>
            <motion.h2
              className="section-title mt-7 max-w-[650px] !text-[#160A08]"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.12, duration: 0.45, ease: easeOutExpo }}
            >
              Zihninizde neyin değiştiğini merak ediyorsanız, önce bugünkü performansınızı tanıyın.
            </motion.h2>
            <motion.p
              className="mt-6 max-w-[560px] text-[16px] font-semibold leading-8 text-[#160A08]/76"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.2, duration: 0.45, ease: easeOutExpo }}
            >
              Daha kolay odaklanmak, günlük hayatı daha iyi organize etmek ya da yaş alırken bilişsel becerilerinizi aktif tutmak... Başlangıç noktası, hangi alanlarda güçlü olduğunuzu bilmektir. BrainFit Karşıyaka&apos;da oluşturulan bilişsel profiliniz doğrultusunda, size özel bir egzersiz planıyla sürecinizi yapılandırıyoruz.
            </motion.p>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.28, duration: 0.45, ease: easeOutExpo }}
            >
              <ContactActions audience="adults" className="mt-7 max-w-[560px]" />
            </motion.div>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {["1 saatlik değerlendirme", "Bilişsel profil", "Kişisel egzersiz planı"].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 rounded-[18px] bg-white/24 p-3"
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={sectionActive ? { opacity: 1, y: 0 } : undefined}
                  transition={{
                    delay: 0.36 + index * 0.06,
                    duration: 0.35,
                    ease: easeOutExpo,
                  }}
                >
                  <CheckCircle2 size={17} className="shrink-0 text-[#164C35]" aria-hidden="true" />
                  <p className="text-[12px] font-extrabold leading-5 text-[#160A08]">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.form
            id="callback-form"
            onSubmit={handleSubmit}
            method="post"
            action="/api/checkup-request"
            aria-busy={submitState === "submitting"}
            className="scroll-mt-28 rounded-[28px] bg-white p-5 shadow-[0_28px_80px_rgba(22,10,8,0.18)] md:p-7"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 24,
                    boxShadow: "0 24px 68px rgba(22,10,8,0.12)",
                  }
            }
            animate={
              sectionActive
                ? {
                    opacity: 1,
                    y: 0,
                    boxShadow: "0 28px 80px rgba(22,10,8,0.18)",
                  }
                : undefined
            }
            transition={{ delay: 0.18, duration: 0.55, ease: easeOutExpo }}
          >
            <h3 className="compact-title text-[#241D18]">Size Ulaşalım</h3>
            <p className="mt-2 text-[14px] font-semibold leading-6 text-[var(--text-support)]">İletişim bilgilerinizi bırakın; ekibimiz sorularınızı yanıtlasın.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-extrabold text-[rgba(36,29,24,0.68)]">Adınız Soyadınız<input name="parentName" autoComplete="name" required className="min-h-13 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold text-[#241D18] outline-none transition duration-200 focus:border-[#164C35] focus:ring-3 focus:ring-[#164C35]/10" placeholder="Adınız soyadınız" /></label>
              <label className="grid gap-2 text-xs font-extrabold text-[rgba(36,29,24,0.68)]">Telefon Numaranız<input name="phone" autoComplete="tel" required inputMode="tel" className="min-h-13 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold text-[#241D18] outline-none transition duration-200 focus:border-[#164C35] focus:ring-3 focus:ring-[#164C35]/10" placeholder="05XX XXX XX XX" /></label>
              <label className="grid gap-2 text-xs font-extrabold text-[rgba(36,29,24,0.68)]">Yaşınız<input name="participantAge" required inputMode="numeric" className="min-h-13 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold text-[#241D18] outline-none transition duration-200 focus:border-[#164C35] focus:ring-3 focus:ring-[#164C35]/10" placeholder="Örn. 34" /></label>
              <label className="grid gap-2 text-xs font-extrabold text-[rgba(36,29,24,0.68)] sm:col-span-2">Kısa Notunuz <span className="font-semibold text-[var(--text-muted)]">(isteğe bağlı)</span><textarea name="note" className="min-h-28 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 py-3 text-[16px] font-bold text-[#241D18] outline-none transition duration-200 focus:border-[#164C35] focus:ring-3 focus:ring-[#164C35]/10" placeholder="Odak, hafıza, öğrenme ya da günlük temponuzla ilgili eklemek istediğiniz bir ayrıntı varsa yazabilirsiniz." /></label>
            </div>
            <input type="hidden" name="audience" value="adults" />
            <button type="submit" disabled={submitState === "submitting"} className="mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#164C35] px-6 text-[15px] font-extrabold text-white shadow-[0_16px_34px_rgba(22,76,53,0.24)] transition duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164C35] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-65">
              {submitState === "submitting" ? (
                <>
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-white/40 border-t-white motion-reduce:animate-none"
                  />
                  İletiliyor...
                </>
              ) : (
                <>
                  Size Ulaşalım
                  <ArrowUpRight size={18} aria-hidden="true" />
                </>
              )}
            </button>
            <p data-compliance-status="pending" className="mt-4 text-[11px] font-semibold leading-5 text-[var(--text-support)]">Aydınlatma ve veri işleme metni yayın öncesinde bu alana eklenecek.</p>
            <AnimatePresence initial={false}>
              {message ? (
                <motion.div
                  key="adult-form-status"
                  role="status"
                  aria-live="polite"
                  className="overflow-hidden"
                  initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                  animate={reduceMotion ? undefined : { opacity: 1, height: "auto" }}
                  exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: easeOutExpo }}
                >
                  <p
                    className={`mt-4 flex items-start gap-2 rounded-[18px] px-4 py-3 text-[14px] font-extrabold leading-6 ${submitState === "success" ? "bg-[#F0F7F2] text-[#164C35]" : "bg-[#FFF0D7] text-[#8C5038]"}`}
                  >
                    {submitState === "success" ? (
                      <motion.span
                        className="mt-0.5 shrink-0"
                        initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
                        animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                        transition={{ delay: 0.12, duration: 0.25, ease: easeOutExpo }}
                      >
                        <CheckCircle2 size={18} className="text-[#164C35]" aria-hidden="true" />
                      </motion.span>
                    ) : null}
                    <span>{message}</span>
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
