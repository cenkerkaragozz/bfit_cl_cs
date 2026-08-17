/**
 * Single source of truth for the FAQ copy rendered on the homepage
 * (`ChildFaqSection.tsx`) and `/yetiskinler` (`AdultLandingPage.tsx`), and
 * consumed by the FAQPage JSON-LD builders for those two pages.
 *
 * This lives outside those components (rather than being exported from
 * them) because both are `"use client"` modules: importing a plain data
 * export from a client-boundary file into a server component resolves to
 * a client-reference proxy at build time, not the actual array — the
 * FAQPage JSON-LD builder would fail with `faqs.map is not a function`
 * during `next build`. Keeping the data here, and having the client
 * components import it, avoids that boundary entirely while still
 * guaranteeing the emitted schema can never drift from what's rendered.
 */
export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export const childFaqs = [
  {
    id: "medical",
    question: "Zihin Check-Up tıbbi bir test mi?",
    answer:
      "Hayır. Tıbbi tanı ya da tedavi amacı taşımaz; çocuğunuzun bilişsel becerilerini anlamaya yardımcı bir değerlendirmedir.",
  },
  {
    id: "result",
    question: "Değerlendirme sonunda ne elde ederiz?",
    answer:
      "Çocuğunuzun güçlü yönleri, desteklenmesi gereken alanlar ve bunlara uygun kişiye özel gelişim planı belirlenir.",
  },
  {
    id: "without-problem",
    question: "Belirgin bir sorun yoksa başvurabilir miyiz?",
    answer:
      "Evet. Zihin Check-Up yalnızca zorlanma yaşayan çocuklar için değil, çocuğunu daha yakından tanımak isteyen tüm aileler için uygundur.",
  },
  {
    id: "contact",
    question: "İlk iletişim nasıl ilerler?",
    answer:
      "WhatsApp’tan yazabilir ya da formu bırakabilirsiniz; ekibimiz sizi arayıp süreci anlatır.",
  },
] as const satisfies readonly FaqEntry[];

export const adultFaqs = [
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
] as const satisfies readonly FaqEntry[];
