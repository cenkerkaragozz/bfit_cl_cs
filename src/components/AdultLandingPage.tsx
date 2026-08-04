"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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

type SubmitState = "idle" | "submitting" | "success" | "error";

const audienceCards = [
  {
    id: "fatigue",
    title: "Zihinsel yorgunluk",
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
      "Dikkat, bilgiyi işleme ve zihinsel dayanıklılık gün içindeki performansınızı etkileyebilir.",
  },
  {
    id: "planning",
    title: "Günlük planlama",
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
      "Günlük hayatı düzenlemek, farklı zihinsel becerilerin birlikte çalışmasını gerektirir.",
  },
  {
    id: "active-mind",
    title: "Zihnimi aktif tutmak istiyorum",
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
      "Bugünkü performansınızı bilmek, destekleyebileceğiniz becerileri görmenin başlangıcı olabilir.",
  },
] as const;

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

function AudienceSection() {
  return (
    <section
      id="help"
      aria-labelledby="adult-audience-title"
      className="section-surface relative scroll-mt-28 overflow-hidden py-[72px] md:py-[112px]"
    >
      <div className="inner">
        <div className="max-w-[820px]">
          <div className="badge border-[#E7A988] bg-transparent text-[#8C5038]">
            Son bir yıl
          </div>
          <h2
            id="adult-audience-title"
            className="section-title mt-7 max-w-[800px] text-[#241D18]"
          >
            Son bir yılda zihinsel performansınızda bir değişiklik fark ettiniz mi?
          </h2>
          <p className="body-copy mt-5 max-w-[680px] text-[17px]">
            Aşağıdaki durumlardan bazıları size tanıdık gelebilir.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3 xl:gap-6">
          {audienceCards.map((card) => {
            const Icon = card.icon;
            const NoteIcon = card.noteIcon;

            return (
              <article
                key={card.id}
                className="flex h-full min-w-0 flex-col rounded-[30px] bg-white p-6 shadow-[0_18px_44px_rgba(36,29,24,0.08)] sm:p-7 lg:p-6 xl:p-7"
              >
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
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-[15px] font-semibold leading-6.5 text-[rgba(36,29,24,0.76)]"
                    >
                      <span
                        className={`mt-[9px] h-2 w-2 shrink-0 rounded-full ${card.bulletColor}`}
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <div
                    className={`flex min-h-[116px] items-start gap-4 rounded-[22px] p-5 ${card.noteSurface}`}
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
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-9 flex justify-center">
          <a
            href="#about"
            className="pill-button arrow-shift min-h-[54px] w-full max-w-[440px] px-7 text-center text-[15px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164C35] sm:w-auto sm:min-w-[420px]"
          >
            Bunlardan birkaçını ben de yaşıyorum
            <ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
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
