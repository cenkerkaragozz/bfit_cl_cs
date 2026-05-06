"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";
import { LogoMark } from "@/components/Decorations";

const navItems = ["Services", "Clinics", "Treatments"];

export function Header() {
  return (
    <header className="pointer-events-none sticky top-0 z-50 h-0">
      <div className="inner pointer-events-auto pt-5">
        <nav
          className="main-nav mx-auto flex min-h-[72px] max-w-[1110px] items-center justify-between gap-4 rounded-b-[30px] rounded-t-[18px] bg-white/95 px-5 shadow-[0_18px_50px_rgba(36,29,24,0.08)] backdrop-blur"
          aria-label="Primary navigation"
        >
          <Link className="flex items-center gap-3 font-extrabold" href="/">
            <LogoMark className="h-10 w-10 shrink-0" />
            <span className="text-[20px] tracking-normal">BrainFit</span>
          </Link>

          <div className="hidden items-center gap-10 text-[14px] font-bold text-[rgba(36,29,24,0.76)] md:flex">
            {navItems.map((item) => (
              <a key={item} className="transition hover:text-[var(--ink)]" href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              className="hidden h-10 rounded-full border border-[var(--line)] px-4 text-[13px] font-extrabold md:inline-flex"
              type="button"
              aria-label="Selected language English"
            >
              EN
            </button>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-white"
              type="button"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
            <a className="pill-button header-cta arrow-shift" href="#help">
              Get Help ?
              <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
