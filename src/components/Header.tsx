"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const childNavItems = [
  { label: "Yaşadıklarınız", href: "#help" },
  { label: "Zihin Check-Up", href: "#checkup" },
  { label: "Bilişsel Profil", href: "#cognitive-profile" },
  { label: "Deneyimler", href: "#experiences" },
  { label: "İletişim", href: "#contact" },
];

const adultNavItems = [
  { label: "Yaşadıklarınız", href: "#help" },
  { label: "Değerlendirme", href: "#checkup" },
  { label: "Bilişsel Profil", href: "#cognitive-profile" },
  { label: "Deneyimler", href: "#experiences" },
  { label: "İletişim", href: "#contact" },
];

type HeaderProps = {
  audience?: "children" | "adults";
};

export function Header({ audience = "children" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = audience === "adults" ? adultNavItems : childNavItems;
  const logoHref = audience === "adults" ? "/yetiskinler" : "/";
  const logoAriaLabel = audience === "adults" ? "BrainFit yetişkinler sayfası" : "BrainFit ana sayfa";

  return (
    <header className="pointer-events-none sticky top-0 z-50 h-0">
      <div className="inner pointer-events-auto relative pt-5">
        <nav
          className="main-nav mx-auto flex min-h-[72px] max-w-[1110px] items-center justify-between gap-4 rounded-[30px] bg-white/95 px-5 shadow-[0_18px_50px_rgba(36,29,24,0.08)] backdrop-blur"
          aria-label="Primary navigation"
        >
          <Link className="header-logo flex min-w-0 items-center" href={logoHref} aria-label={logoAriaLabel}>
            <Image
              src="/images/BF_Logo_CMYK.png"
              alt="BrainFit"
              width={1377}
              height={146}
              className="h-auto w-[146px] shrink-0 sm:w-[186px]"
              priority
            />
          </Link>

          <div className="hidden items-center gap-6 text-[14px] font-bold text-[rgba(36,29,24,0.76)] lg:flex xl:gap-10">
            {navItems.map((item) => (
              <a key={item.href} className="transition hover:text-[var(--ink)]" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="header-actions flex items-center gap-3">
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
        </nav>

        {isMenuOpen ? (
          <div
            id="mobile-navigation"
            className="mx-auto mt-3 max-w-[1110px] rounded-[24px] bg-white/95 p-3 shadow-[0_18px_50px_rgba(36,29,24,0.1)] backdrop-blur lg:hidden"
          >
            <div className="grid gap-1 text-[15px] font-extrabold text-[rgba(36,29,24,0.76)]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="rounded-full px-5 py-3 transition hover:bg-[var(--paper)] hover:text-[var(--ink)]"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
