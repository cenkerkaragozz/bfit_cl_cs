"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Narrow client wrapper used only by the adult page footer. The server
 * component stays a server component; only the two grid columns are
 * wrapped here so the logo/closing message lands before the contact
 * panel and links.
 */
export function FooterMotion({
  lead,
  panel,
}: {
  lead: ReactNode;
  panel: ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const active = !reduceMotion && inView;

  return (
    <div ref={ref} className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={active ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5, ease: easeOutExpo }}
      >
        {lead}
      </motion.div>
      <motion.div
        className="rounded-[28px] border border-white/12 bg-white/6 p-6 md:p-8"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={active ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 0.14, duration: 0.5, ease: easeOutExpo }}
      >
        {panel}
      </motion.div>
    </div>
  );
}
