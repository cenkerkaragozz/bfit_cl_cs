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
      <circle cx="19" cy="19" r="18" fill="#F5927E" />
      <path
        d="M19 7.4c1.8 6.1 5.1 9.2 11.3 10.9-6.2 1.9-9.6 5.2-11.2 11.3-1.8-6.1-5.1-9.4-11.2-11.2 6.1-1.8 9.4-5.1 11.1-11Z"
        fill="#160A08"
      />
      <circle cx="19" cy="19" r="4.4" fill="#FCEA96" />
    </svg>
  );
}

export function StarBurst({
  className = "",
  color = "#F5927E",
  animate = true,
}: {
  className?: string;
  color?: string;
  animate?: boolean;
}) {
  return (
    <motion.svg
      className={className}
      width="54"
      height="54"
      viewBox="0 0 54 54"
      aria-hidden="true"
      animate={animate ? { rotate: [0, 8, 0], scale: [1, 1.06, 1] } : undefined}
      transition={animate ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : undefined}
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

export function HeroUnderline({
  className = "",
  active = true,
  animate = true,
}: {
  className?: string;
  active?: boolean;
  animate?: boolean;
}) {
  return (
    <svg
      className={className}
      width="260"
      height="28"
      viewBox="0 0 260 28"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M3 17c36-5.7 74-9.4 114-8.5 22.8.5 46.9 2.6 70 1.3 21.5-1.2 43-4.8 69-4.8"
        stroke="#FCBF48"
        strokeLinecap="round"
        strokeWidth="4"
        initial={animate ? { pathLength: 0 } : undefined}
        animate={animate ? { pathLength: active ? 1 : 0 } : undefined}
        transition={animate ? { duration: 0.9, ease: [0.22, 1, 0.36, 1] } : undefined}
      />
      <motion.path
        d="M58 15c10.5-2 23.2-1.5 36.5 0-9.8.4-20.4 1.8-31.5 4.5"
        stroke="#FCBF48"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        initial={animate ? { pathLength: 0 } : undefined}
        animate={animate ? { pathLength: active ? 1 : 0 } : undefined}
        transition={
          animate ? { duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] } : undefined
        }
      />
    </svg>
  );
}

export function HeroLoop({ className = "", color = "#8C5BEF" }) {
  return (
    <svg
      className={className}
      width="170"
      height="160"
      viewBox="0 0 170 160"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M132 38C95-2 37 10 20 56 2 105 43 143 93 139c28-2.2 48-15 61-35"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
}

export function HeroStrokes({
  className = "",
  color = "#F5927E",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
    >
      <path d="M10 37l13-4" stroke={color} strokeLinecap="round" strokeWidth="4" />
      <path d="M8 21l16 5" stroke={color} strokeLinecap="round" strokeWidth="4" />
      <path d="M28 7l9 11" stroke={color} strokeLinecap="round" strokeWidth="4" />
    </svg>
  );
}

export function HeroDottedPath({
  className = "",
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <svg
      className={className}
      width="620"
      height="150"
      viewBox="0 0 620 150"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M7 116c102-39 214 20 309 1 88-17.5 65-92 142-109 50-11 91 14 155-2"
        stroke="#8C5BEF"
        strokeDasharray="9 17"
        strokeLinecap="round"
        strokeWidth="3"
        initial={animate ? { pathLength: 0, opacity: 0.35 } : undefined}
        animate={animate ? { pathLength: 1, opacity: 1, strokeDashoffset: [0, -52] } : undefined}
        transition={
          animate
            ? {
                pathLength: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.45 },
                strokeDashoffset: { duration: 5.8, repeat: Infinity, ease: "linear" },
              }
            : undefined
        }
      />
    </svg>
  );
}

export function HeroWaveBand({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 250"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 92c133 24 232 34 365 14 115-17 190-73 329-63 126 9 182 73 300 70 127-3 198-78 319-57 59 10 93 37 127 61v133H0V92Z"
        fill="#D2F594"
      />
      <path
        d="M0 126c147 32 285 12 425 5 118-6 208 34 326 27 97-6 166-54 251-70 137-25 226 36 438 34v128H0V126Z"
        fill="#FCEA96"
        opacity="0.82"
      />
      <path
        d="M0 116c122 28 239 43 365 19 155-29 250-21 373 9 135 32 203 16 326-20 127-37 228-15 376 37v89H0V116Z"
        fill="#F8FAE7"
        opacity="0.9"
      />
    </svg>
  );
}

export function HeroPlants({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 190"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <g transform="translate(7 55)">
        <path d="M31 118c26-44 43-72 82-88" stroke="#63B776" strokeLinecap="round" strokeWidth="7" />
        <path d="M31 118C20 83 17 54 30 30c23 20 23 51 1 88Z" fill="#8CDB9A" />
        <path d="M31 118C9 94-2 70 1 42c31 8 43 36 30 76Z" fill="#63B776" />
        <path d="M31 118c31-12 57-10 78 3-25 25-55 24-78-3Z" fill="#9FE98D" />
      </g>
      <g transform="translate(702 80)">
        <path d="M38 80V16" stroke="#8C5BEF" strokeLinecap="round" strokeWidth="8" />
        <path d="M39 80c-27-17-39-39-35-65 28 9 42 31 35 65Z" fill="#8C5BEF" />
        <path d="M39 80c5-31 22-51 50-58 5 31-13 52-50 58Z" fill="#7C46E8" />
        <path d="M39 80c26 1 45 12 58 34-31 9-51-2-58-34Z" fill="#A47AF5" />
      </g>
      <g transform="translate(1300 37)">
        <path d="M73 135c-19-45-36-79-68-115" stroke="#A7E96F" strokeLinecap="round" strokeWidth="8" />
        <path d="M73 135c4-51 22-85 55-104 17 50 0 83-55 104Z" fill="#63B776" />
        <path d="M73 135c24-30 48-45 75-42-7 39-32 53-75 42Z" fill="#79CF66" />
        <path d="M73 135C40 111 28 80 37 41c38 14 50 46 36 94Z" fill="#8DE358" />
      </g>
    </svg>
  );
}

export function HeroRing({
  className = "",
  color = "#AAE8F6",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="5.5" stroke={color} strokeWidth="3" />
    </svg>
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
        stroke="#FCEA96"
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
        fill="#F5927E"
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
        d="M53.5 99C54.5 83.5 54.7 65.8 49 47.5M54.4 79.5C49.2 77.7 44.9 75.5 40 72M53.8 64.8C58.5 61.5 62.5 57.7 66.8 53.5"
        stroke="#164C35"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M61 63c18.8 3.3 31.1-6.7 37.7-30.3C75.5 34.6 61.3 44.8 61 63Z"
        fill="#D9F8A8"
        stroke="#164C35"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M42 79.8c-19.1 1.1-31.6-9.3-37-31.2 23.6 1.2 37 11.6 37 31.2Z"
        fill="#AAE8F6"
        stroke="#164C35"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M47.7 48C32.5 39.7 29.2 25.1 37.6 4c19 14.5 22.5 29.5 10.1 44Z"
        fill="#FCEA96"
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
          fill="#FCEA96"
          transform={`rotate(${index * 30} 62 62)`}
        />
      ))}
      <circle cx="62" cy="62" r="18" fill="#F5927E" />
      <path
        d="M62 80c-2 12-7.8 23.4-16.5 34M63 80c8.6 10.7 16.6 18.8 29 26"
        stroke="#D9F8A8"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
}
