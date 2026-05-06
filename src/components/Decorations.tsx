"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="38"
      height="38"
      viewBox="0 0 38 38"
      aria-hidden="true"
    >
      <circle cx="19" cy="19" r="18" fill="#F4865D" />
      <path
        d="M19 7.4c1.8 6.1 5.1 9.2 11.3 10.9-6.2 1.9-9.6 5.2-11.2 11.3-1.8-6.1-5.1-9.4-11.2-11.2 6.1-1.8 9.4-5.1 11.1-11Z"
        fill="#160A08"
      />
      <circle cx="19" cy="19" r="4.4" fill="#F9DC7B" />
    </svg>
  );
}

export function StarBurst({
  className = "",
  color = "#F4865D",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <motion.svg
      className={className}
      width="54"
      height="54"
      viewBox="0 0 54 54"
      aria-hidden="true"
      animate={{ rotate: [0, 8, 0], scale: [1, 1.06, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M27 3.5c2.7 12.5 10 19.8 23.3 23.4C37 30.6 29.7 37.8 27 50.5 24.3 37.8 17 30.6 3.7 26.9 17 23.3 24.3 16 27 3.5Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </motion.svg>
  );
}

export function Squiggle({ className = "", color = "#9B745F" }) {
  return (
    <svg
      className={className}
      width="92"
      height="32"
      viewBox="0 0 92 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 17.4c8.3-15.6 16.2 14.7 25 0 8.9-14.9 16.4 15.2 25.5-.4 9.1-15.7 17 14.7 33-2.1"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}

export function ArrowDoodle({ className = "", color = "#241D18" }) {
  return (
    <svg
      className={className}
      width="96"
      height="76"
      viewBox="0 0 96 76"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 52c25.5 16.2 65.8 4.6 74.4-29"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d="M64.7 25.4 82 21.6l4.1 17.3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </svg>
  );
}

export function DrawnUnderline({
  active = true,
  className = "",
}: {
  active?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="410"
      height="34"
      viewBox="0 0 410 34"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M6 20c72-18 150-17 229-12 55 3.5 109 6.2 169-2"
        stroke="#F9DC7B"
        strokeLinecap="round"
        strokeWidth="12"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: active ? 1 : 0 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

export function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="58"
      height="44"
      viewBox="0 0 58 44"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.5 5C11.2 8.7 6 15 6 25.3 6 33.7 10.6 39 17.2 39c5.5 0 9.4-3.5 9.4-8.4 0-5.2-3.8-8.3-8.5-8.3-1.3 0-2.5.2-3.5.7.8-5.4 4.4-9.1 10.9-12.2L20.5 5Zm30.2 0C41.4 8.7 36.2 15 36.2 25.3c0 8.4 4.6 13.7 11.2 13.7 5.5 0 9.4-3.5 9.4-8.4 0-5.2-3.8-8.3-8.5-8.3-1.3 0-2.5.2-3.5.7.8-5.4 4.4-9.1 10.9-12.2L50.7 5Z"
        fill="#F4865D"
      />
    </svg>
  );
}

export function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="108"
      height="106"
      viewBox="0 0 108 106"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M53.5 99C60.7 68.4 76.2 43 99 14"
        stroke="#164C35"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d="M61 63c18.8 3.3 31.1-6.7 37.7-30.3C75.5 34.6 61.3 44.8 61 63Z"
        fill="#C9F58B"
        stroke="#164C35"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M42 79.8c-19.1 1.1-31.6-9.3-37-31.2 23.6 1.2 37 11.6 37 31.2Z"
        fill="#91DDF4"
        stroke="#164C35"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M47.7 48C32.5 39.7 29.2 25.1 37.6 4c19 14.5 22.5 29.5 10.1 44Z"
        fill="#F9DC7B"
        stroke="#164C35"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
}

export function Sunflower({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="124"
      height="122"
      viewBox="0 0 124 122"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <ellipse
          key={index}
          cx="62"
          cy="37"
          rx="9"
          ry="21"
          fill="#F9DC7B"
          transform={`rotate(${index * 30} 62 62)`}
        />
      ))}
      <circle cx="62" cy="62" r="18" fill="#F4865D" />
      <path
        d="M62 80c-2 12-7.8 23.4-16.5 34M63 80c8.6 10.7 16.6 18.8 29 26"
        stroke="#C9F58B"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
}
