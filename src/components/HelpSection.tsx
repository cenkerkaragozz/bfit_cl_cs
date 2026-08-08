"use client";

import { useRef } from "react";
import {
  CalendarClock,
  CircleHelp,
  Cloud,
  Footprints,
  Heart,
  MessageSquareWarning,
  NotebookPen,
  TimerOff,
  Users,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];
// Capped so a card that enters late on mobile never feels delayed, while
// simultaneously visible cards on desktop still cascade in reading order.
const cardDelay = (i: number) => Math.min(i, 3) * 0.045;

const observations = [
  { text: "Sınıfta sık sık dalıp gidiyor.", icon: Cloud, color: "#164C35" },
  { text: "Bildiği sorularda hata yapıyor.", icon: CircleHelp, color: "#E86F5B" },
  { text: "Ödevin başına oturmak istemiyor.", icon: NotebookPen, color: "#8AAE32" },
  { text: "Sürekli hareket ediyor.", icon: Footprints, color: "#D49210" },
  { text: "Dikkatini uzun süre sürdüremiyor.", icon: TimerOff, color: "#1E99B5" },
  {
    text: "Öğretmeninden sık sık olumsuz geri bildirim alıyorsunuz.",
    icon: MessageSquareWarning,
    color: "#164C35",
  },
  { text: "Arkadaş ilişkilerinde zorlanabiliyor.", icon: Users, color: "#E86F5B" },
  { text: "Sürekli erteleme davranışı gösteriyor.", icon: CalendarClock, color: "#1E99B5" },
] as const;

function AmberStarburst({ active }: { active: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute right-[9%] top-[150px] hidden h-12 w-12 text-[#D49210] lg:block"
      initial={false}
      animate={active ? { rotate: [0, 7, 0] } : undefined}
      transition={{ duration: 0.55, ease: easeOutExpo }}
    >
      <path
        d="M24 3v12M24 33v12M3 24h12M33 24h12M9 9l8.5 8.5M30.5 30.5 39 39M39 9l-8.5 8.5M17.5 30.5 9 39"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

export function HelpSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const active = !reduceMotion && inView;

  return (
    <section
      ref={sectionRef}
      id="help"
      className="section-pad section-surface relative scroll-mt-28 overflow-hidden"
    >
      <AmberStarburst active={active} />

      <div className="inner relative z-10">
        <motion.div
          className="max-w-[960px]"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={active ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.45, ease: easeOutExpo }}
        >
          <div className="badge border-[#E86F5B] bg-[#FEF0EC] text-[#C4533C]">
            SİZE TANIDIK GELİYOR MU?
          </div>
          <h2 className="section-title mt-7 max-w-[900px]">
            Bunlardan hangileri size tanıdık geliyor?
          </h2>
          <p className="body-copy mt-5 max-w-[680px]">
            Aşağıdaki durumlardan biri ya da birkaçı size tanıdık gelebilir.
          </p>
        </motion.div>

        <ul
          className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4"
          aria-label="Tanıdık gelebilecek durumlar"
        >
          {observations.map((observation, index) => {
            const Icon = observation.icon;
            const delay = cardDelay(index);

            return (
              <motion.li
                key={observation.text}
                className="group flex min-h-[164px] flex-col rounded-[26px] border border-[rgba(36,29,24,0.07)] bg-white px-5 py-5 shadow-[0_18px_42px_rgba(36,29,24,0.08)] transition-[border-color] duration-200 hover:border-[rgba(36,29,24,0.16)] motion-reduce:transition-none lg:min-h-[184px] lg:px-6 lg:py-6"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 14,
                        boxShadow: "0 10px 26px rgba(36,29,24,0.03)",
                      }
                }
                whileInView={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                        boxShadow: "0 18px 42px rgba(36,29,24,0.08)",
                      }
                }
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay, duration: 0.45, ease: easeOutExpo }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -2, transition: { duration: 0.18, ease: "easeOut" } }
                }
              >
                <motion.span
                  className="inline-block"
                  initial={reduceMotion ? false : { scale: 0.9, opacity: 0.5 }}
                  whileInView={
                    reduceMotion ? undefined : { scale: 1, opacity: 1 }
                  }
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: delay + 0.05,
                    duration: 0.35,
                    ease: easeOutExpo,
                  }}
                >
                  <Icon
                    aria-hidden="true"
                    className="size-8 shrink-0 md:size-9"
                    color={observation.color}
                    size={36}
                    strokeWidth={2.1}
                  />
                </motion.span>
                <p className="mt-auto max-w-[24ch] pt-8 text-[17px] font-extrabold leading-[1.45] text-[#241D18] lg:text-[18px]">
                  {observation.text}
                </p>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          className="mt-7 flex w-full flex-col items-start gap-3 rounded-[22px] bg-[#F0F7F2] p-4 text-[#164C35] sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:p-5"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }
          }
          whileInView={
            reduceMotion
              ? undefined
              : { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }
          }
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.15, duration: 0.45, ease: easeOutExpo }}
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#164C35]">
            <Heart
              aria-hidden="true"
              className="text-white"
              fill="currentColor"
              size={19}
              strokeWidth={2.1}
            />
          </span>
          <p className="text-[15px] font-extrabold leading-6">
            Bu gözlemler tek başına bir tanı değildir.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
