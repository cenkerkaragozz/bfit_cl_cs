"use client";

import { ArrowUpRight, Globe2, Menu, MessageCircle, Send, Users } from "lucide-react";
import { LogoMark } from "@/components/Decorations";

export function Footer() {
  return (
    <footer id="contact" className="bg-[var(--footer)] px-0 py-12 text-white md:py-16">
      <div className="inner">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <nav
              className="flex flex-wrap items-center gap-x-9 gap-y-4 text-[14px] font-bold text-white/72"
              aria-label="Footer navigation"
            >
              <a href="#services">Services</a>
              <a href="#clinics">Clinics</a>
              <a href="#treatments">Treatments</a>
              <button
                type="button"
                className="rounded-full border border-white/20 px-4 py-2 font-extrabold text-white"
              >
                EN
              </button>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20"
                aria-label="Open footer menu"
              >
                <Menu size={18} />
              </button>
            </nav>

            <div className="mt-20 grid max-w-[520px] grid-cols-2 gap-8 border-t border-white/12 pt-10">
              <div>
                <p className="font-[var(--display)] text-[64px] leading-none">48k</p>
                <p className="mt-3 text-[15px] leading-6 text-white/58">
                  People enrolled program
                </p>
              </div>
              <div>
                <p className="font-[var(--display)] text-[64px] leading-none">93%</p>
                <p className="mt-3 text-[15px] leading-6 text-white/58">
                  People get benefitted
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="flex items-center gap-3">
              <LogoMark className="h-12 w-12" />
              <span className="text-[28px] font-extrabold">BrainFit</span>
            </div>
            <div className="badge mt-10 border-white/50 text-[var(--yellow)]">
              Mental health at 30&apos;s
            </div>
            <h2 className="display mt-7 max-w-[600px] text-[clamp(46px,6vw,84px)]">
              Gentle mental care in your inbox.
            </h2>
            <form className="mt-9 flex max-w-[520px] items-center gap-3 border-b border-white/24 pb-3">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent py-3 text-white placeholder:text-white/48"
              />
              <button
                type="submit"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--yellow)] text-[var(--ink)]"
                aria-label="Subscribe to newsletter"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-8 border-t border-white/12 pt-8 text-[14px] text-white/55 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            {[MessageCircle, Users, Globe2].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/16 text-white"
                aria-label={`BrainFit social link ${index + 1}`}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
          <p>Copyright 2026 BrainFit. All rights reserved.</p>
          <div className="flex gap-7">
            <a href="#">Privacy</a>
            <a className="inline-flex items-center gap-1" href="#">
              Sitemap
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
