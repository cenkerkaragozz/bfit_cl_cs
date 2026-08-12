"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const childNavItems = [
  { label: "Yaşadıklarınız", href: "#help" },
  { label: "Deneyimler", href: "#experiences" },
  { label: "Zihin Check-Up", href: "#checkup" },
  { label: "Bilişsel Profil", href: "#cognitive-profile" },
  { label: "İletişim", href: "#contact" },
];

const adultNavItems = [
  { label: "Yaşadıklarınız", href: "#help" },
  { label: "Deneyimler", href: "#experiences" },
  { label: "Değerlendirme", href: "#checkup" },
  { label: "Bilişsel Profil", href: "#cognitive-profile" },
  { label: "İletişim", href: "#contact" },
];

type HeaderProps = {
  audience?: "children" | "adults";
};

const SPY_SUPPRESS_MS = 600;
const CONDENSE_THRESHOLD = 120;

export function Header({ audience = "children" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const [isCondensed, setIsCondensed] = useState(false);
  const reduceMotion = useReducedMotion();
  const suppressSpyUntilRef = useRef(0);
  const visibleHrefsRef = useRef<Set<string>>(new Set());

  const navItems = audience === "adults" ? adultNavItems : childNavItems;
  const logoHref = audience === "adults" ? "/yetiskinler" : "/";
  const logoAriaLabel = audience === "adults" ? "BrainFit yetişkinler sayfası" : "BrainFit ana sayfa";

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsCondensed(latest > CONDENSE_THRESHOLD);
  });

  const computeActive = useCallback(() => {
    if (Date.now() < suppressSpyUntilRef.current) return;

    const doc = document.documentElement;
    const scrolledToBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 4;
    const contactItem = navItems.find((item) => item.href === "#contact");

    if (scrolledToBottom && contactItem && document.querySelector(contactItem.href)) {
      setActiveHref(contactItem.href);
      return;
    }

    const current = navItems.find((item) => visibleHrefsRef.current.has(item.href));
    setActiveHref(current ? current.href : null);
  }, [navItems]);

  useEffect(() => {
    const targets = navItems
      .map((item) => ({ href: item.href, el: document.querySelector<HTMLElement>(item.href) }))
      .filter((target): target is { href: string; el: HTMLElement } => Boolean(target.el));

    visibleHrefsRef.current = new Set();

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const match = targets.find((target) => target.el === entry.target);
          if (!match) continue;
          if (entry.isIntersecting) {
            visibleHrefsRef.current.add(match.href);
          } else {
            visibleHrefsRef.current.delete(match.href);
          }
        }
        computeActive();
      },
      { rootMargin: "-100px 0px -55% 0px", threshold: [0, 1] },
    );

    targets.forEach((target) => observer.observe(target.el));

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        computeActive();
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [navItems, computeActive]);

  const handleNavClick = useCallback((href: string) => {
    setActiveHref(href);
    suppressSpyUntilRef.current = Date.now() + SPY_SUPPRESS_MS;
  }, []);

  const activeLabel = navItems.find((item) => item.href === activeHref)?.label ?? null;

  return (
    <header className="pointer-events-none sticky top-0 z-50 h-0">
      <div className="inner pointer-events-auto relative pt-5">
        <motion.nav
          className="main-nav mx-auto flex max-w-[1110px] items-center justify-between gap-4 rounded-[30px] bg-white/95 px-5 backdrop-blur"
          aria-label="Primary navigation"
          animate={{
            minHeight: isCondensed ? "60px" : "72px",
            boxShadow: isCondensed
              ? "0 22px 60px rgba(36,29,24,0.16)"
              : "0 18px 50px rgba(36,29,24,0.08)",
          }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" }}
        >
          <Link className="header-logo flex min-w-0 shrink-0 items-center" href={logoHref} aria-label={logoAriaLabel}>
            <Image
              src="/images/BF_Logo_CMYK.png"
              alt="BrainFit"
              width={1377}
              height={146}
              className="h-auto w-[146px] shrink-0 sm:w-[186px]"
              priority
            />
          </Link>

          <div className="flex min-w-0 flex-1 items-center justify-center">
            <div className="hidden items-center gap-1 text-[14px] font-bold text-[rgba(36,29,24,0.76)] lg:flex xl:gap-2">
              {navItems.map((item) => {
                const isActive = item.href === activeHref;
                return (
                  <a
                    key={item.href}
                    className="relative rounded-full px-3 py-2 transition-colors xl:px-4"
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => handleNavClick(item.href)}
                    style={{ color: isActive ? "var(--ink)" : "rgba(36,29,24,0.76)" }}
                  >
                    {isActive ? (
                      reduceMotion ? (
                        <span
                          className="absolute inset-0 -z-10 rounded-full"
                          style={{ background: "var(--paper)" }}
                          aria-hidden="true"
                        />
                      ) : (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 -z-10 rounded-full"
                          style={{ background: "var(--paper)" }}
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          aria-hidden="true"
                        />
                      )
                    ) : null}
                    <span className="relative">{item.label}</span>
                  </a>
                );
              })}
            </div>

            <AnimatePresence>
              {activeLabel ? (
                <motion.span
                  key={activeLabel}
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-full truncate rounded-full bg-[var(--paper)] px-3 py-1.5 text-[11px] font-bold text-[var(--ink)] lg:hidden"
                >
                  {activeLabel}
                </motion.span>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="header-actions flex shrink-0 items-center gap-3">
            <div className="audience-switch" role="group" aria-label="Kitle seçimi">
              {audience === "children" ? (
                <span className="audience-switch-segment audience-switch-segment-active" aria-current="page">
                  Çocuk
                </span>
              ) : (
                <Link
                  className="audience-switch-segment audience-switch-segment-inactive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E86F5B]"
                  href="/"
                >
                  Çocuk
                </Link>
              )}
              {audience === "adults" ? (
                <span className="audience-switch-segment audience-switch-segment-active" aria-current="page">
                  Yetişkinler
                </span>
              ) : (
                <Link
                  className="audience-switch-segment audience-switch-segment-inactive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E86F5B]"
                  href="/yetiskinler"
                >
                  Yetişkinler
                </Link>
              )}
            </div>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-white lg:hidden"
              type="button"
              aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>

        {isMenuOpen ? (
          <div
            id="mobile-navigation"
            className="mx-auto mt-3 max-w-[1110px] rounded-[24px] bg-white/95 p-3 shadow-[0_18px_50px_rgba(36,29,24,0.1)] backdrop-blur lg:hidden"
          >
            <div className="grid gap-1 text-[15px] font-extrabold text-[rgba(36,29,24,0.76)]">
              {navItems.map((item) => {
                const isActive = item.href === activeHref;
                return (
                  <a
                    key={item.href}
                    className={`rounded-full px-5 py-3 transition hover:bg-[var(--paper)] hover:text-[var(--ink)] ${
                      isActive ? "bg-[var(--paper)] text-[var(--ink)]" : ""
                    }`}
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => {
                      handleNavClick(item.href);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
