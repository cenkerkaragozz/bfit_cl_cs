"use client";

import { useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { CheckCircle2, ChevronDown, XCircle } from "lucide-react";
import { childFaqs as faqs } from "@/lib/faq-data";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Each scope panel activates on its own in-view observer so its entrance and
// internal row/icon stagger begin when that panel approaches the viewport,
// not when the much taller section top scrolls in.
function ScopePanel({
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const panelActive = !reduceMotion && inView;

  return (
    <motion.div
      ref={ref}
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

export function ChildFaqSection() {
  const [openFaq, setOpenFaq] = useState<string>(faqs[0].id);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const active = !reduceMotion && inView;
  const faqRef = useRef<HTMLDivElement>(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-60px" });
  const faqActive = !reduceMotion && faqInView;

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="section-pad section-surface scroll-mt-28"
    >
      <div className="inner">
        <motion.div
          className="max-w-[760px]"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={active ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.4, ease: easeOutExpo }}
        >
          <div className="badge border-[#6BC862] text-[#164C35]">Hizmet kapsamı</div>
          <h2 className="section-title mt-7">Çocuğunuz için nasıl bir destek sunuyoruz?</h2>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <ScopePanel
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
                        initial={reduceMotion ? false : { scale: 0.85 }}
                        animate={
                          panelActive ? { scale: [0.85, 1.1, 1] } : undefined
                        }
                        transition={{
                          delay: 0.15 + index * 0.06 + 0.15,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <CheckCircle2
                          className="text-[#6BC862]"
                          size={19}
                          aria-hidden="true"
                        />
                      </motion.span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </>
            )}
          </ScopePanel>

          <ScopePanel
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
                        initial={reduceMotion ? false : { scale: 0.85 }}
                        animate={
                          panelActive ? { scale: [0.85, 1.1, 1] } : undefined
                        }
                        transition={{
                          delay: 0.15 + index * 0.06 + 0.15,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <XCircle
                          className="text-[#F5927E]"
                          size={19}
                          aria-hidden="true"
                        />
                      </motion.span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </>
            )}
          </ScopePanel>
        </div>

        <div ref={faqRef} className="mt-10 grid gap-7 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            className="max-w-[480px]"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={faqActive ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.4, ease: easeOutExpo }}
          >
            <p className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#8C5038]">Sık sorulanlar</p>
            <h3 className="mid-section-title mt-3 text-[#241D18]">Aklınızdaki temel sorular.</h3>
            <p className="mt-5 max-w-[44ch] text-[15px] font-semibold leading-7 text-[rgba(36,29,24,0.72)]">
              Zihin Check-Up süreciyle ilgili ailelerin en çok merak ettiği konuları kısa ve açık biçimde yanıtladık.
            </p>
          </motion.div>

          <div className="grid gap-3">
            {faqs.map((faq, index) => {
              const open = openFaq === faq.id;
              const panelId = `child-faq-${faq.id}`;

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
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
