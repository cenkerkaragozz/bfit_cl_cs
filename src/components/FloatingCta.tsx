"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ContactActions } from "@/components/ContactActions";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "905555555555";
const WHATSAPP_MESSAGE =
  "Merhaba, çocuğum için Zihin Check-Up randevusu almak istiyorum.";

const whatsappHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

// PMS 361 C
const BRAND = "#43B02A";

function WhatsAppGlyph({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

export function FloatingCta({
  audience = "children",
}: {
  audience?: "children" | "adults";
}) {
  const reduceMotion = useReducedMotion();
  const [showBubble, setShowBubble] = useState(false);

  // Mini sohbet balonunu dikkat çekmek için bir süre sonra göster.
  useEffect(() => {
    const open = window.setTimeout(() => setShowBubble(true), 3200);
    const close = window.setTimeout(() => setShowBubble(false), 11000);
    return () => {
      window.clearTimeout(open);
      window.clearTimeout(close);
    };
  }, []);

  return (
    <>
      <aside
        aria-label="Hızlı iletişim"
        className="fixed inset-x-0 bottom-0 z-[60] border-t border-black/5 bg-white/94 px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_34px_rgba(36,29,24,0.12)] backdrop-blur-md md:hidden"
      >
        <ContactActions audience={audience} className="mx-auto max-w-[540px]" />
      </aside>

      <div
        className="fixed bottom-5 right-5 z-[60] hidden sm:bottom-6 sm:right-6 md:block"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      >
        {/* Dikkat çeken mini sohbet balonu */}
        <AnimatePresence>
          {showBubble ? (
            <motion.div
              key="bubble"
              initial={{ opacity: 0, y: 14, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="absolute bottom-[78px] right-0 w-[230px] rounded-[18px] rounded-br-[4px] bg-white p-4 pr-8 shadow-[0_18px_44px_rgba(36,29,24,0.18)]"
            >
              <button
                type="button"
                onClick={() => setShowBubble(false)}
                aria-label="Kapat"
                className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full text-[var(--text-muted)] transition hover:bg-[#F4F1EB] hover:text-[#241D18]"
              >
                <X size={14} strokeWidth={2.6} />
              </button>
              <p className="text-[14px] font-extrabold leading-5 text-[#241D18]">
                Sorularınız mı var? 👋
              </p>
              <p className="mt-1 text-[13px] font-medium leading-5 text-[var(--text-support)]">
                WhatsApp&apos;tan yazın, uzman ekibimiz yanıtlasın.
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile yazın"
          className="group relative flex items-center"
          onHoverStart={() => setShowBubble(false)}
          animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Nabız atan halkalar */}
          {!reduceMotion ? (
            <>
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute right-0 h-[60px] w-[60px] rounded-full"
                style={{ background: BRAND }}
                animate={{ scale: [1, 1.12, 1.55], opacity: [0, 0.18, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeOut",
                  times: [0, 0.2, 1],
                }}
              />
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute right-0 h-[60px] w-[60px] rounded-full"
                style={{ background: BRAND }}
                animate={{ scale: [1, 1.12, 1.55], opacity: [0, 0.12, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeOut",
                  times: [0, 0.2, 1],
                  delay: 1.9,
                }}
              />
            </>
          ) : null}

          {/* Hover'da açılan etiket */}
          <span className="pointer-events-none absolute right-full mr-3 origin-right whitespace-nowrap rounded-full bg-[#241D18] px-4 py-2 text-[13px] font-extrabold text-white opacity-0 shadow-[0_12px_28px_rgba(36,29,24,0.22)] transition-all duration-300 group-hover:opacity-100 max-sm:hidden">
            WhatsApp&apos;tan Yazın
          </span>

          {/* Ana buton */}
          <span
            className="relative grid h-[60px] w-[60px] place-items-center rounded-full text-white shadow-[0_14px_30px_rgba(67,176,42,0.45)] transition-transform duration-200 group-hover:scale-105 group-active:scale-95"
            style={{ background: BRAND }}
          >
            <WhatsAppGlyph size={30} />
            {/* Çevrim içi noktası */}
            <span
              aria-hidden="true"
              className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full border-2 border-white bg-[#FCBF48]"
            />
          </span>
        </motion.a>
      </div>
    </>
  );
}
