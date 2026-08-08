"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ChevronDown, XCircle } from "lucide-react";

const faqs = [
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
] as const;

export function ChildFaqSection() {
  const [openFaq, setOpenFaq] = useState<string>(faqs[0].id);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="section-pad section-surface scroll-mt-28">
      <div className="inner">
        <div className="max-w-[760px]">
          <div className="badge border-[#6BC862] text-[#164C35]">Hizmet kapsamı</div>
          <h2 className="section-title mt-7">Çocuğunuz için nasıl bir destek sunuyoruz?</h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[28px] bg-[#F0F7F2] p-6 md:p-8">
            <h3 className="compact-title text-[#164C35]">Ne yapıyoruz?</h3>
            <ul className="mt-6 grid gap-3">
              {["Bilişsel Değerlendirme", "Bilişsel Yeterlilik Analizi", "Kişiye Özel Gelişim Planı", "Düzenli Gelişim Takibi"].map((item) => (
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
          <div className="max-w-[480px]">
            <p className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#8C5038]">Sık sorulanlar</p>
            <h3 className="mid-section-title mt-3 text-[#241D18]">Aklınızdaki temel sorular.</h3>
            <p className="mt-5 max-w-[44ch] text-[15px] font-semibold leading-7 text-[rgba(36,29,24,0.72)]">
              Zihin Check-Up süreciyle ilgili ailelerin en çok merak ettiği konuları kısa ve açık biçimde yanıtladık.
            </p>
          </div>

          <div className="grid gap-3">
            {faqs.map((faq) => {
              const open = openFaq === faq.id;
              const panelId = `child-faq-${faq.id}`;

              return (
                <article key={faq.id} className="overflow-hidden rounded-[22px] border border-[rgba(36,29,24,0.08)] bg-white">
                  <h4>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenFaq(open ? "" : faq.id)}
                      className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-[16px] font-extrabold text-[#241D18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#E86F5B]"
                    >
                      {faq.question}
                      <ChevronDown
                        className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                        size={18}
                        aria-hidden="true"
                      />
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
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
