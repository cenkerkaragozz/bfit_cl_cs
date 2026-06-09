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
              <a href="#services">Hizmetlerimiz</a>
              <a href="#clinics">Merkezlerimiz</a>
              <a href="#treatments">Programlarımız</a>
              <button
                type="button"
                className="rounded-full border border-white/20 px-4 py-2 font-extrabold text-white"
              >
                TR
              </button>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20"
                aria-label="Alt Menüyü Aç"
              >
                <Menu size={18} />
              </button>
            </nav>

            <div className="mt-20 grid max-w-[520px] grid-cols-2 gap-8 border-t border-white/12 pt-10">
              <div>
                <p className="display text-[64px] leading-none">48.000+</p>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  Eğitim Alan Katılımcılar
                </p>
              </div>
              <div>
                <p className="display text-[64px] leading-none">%93</p>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  Memnuniyet Oranı
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
              30&apos;lu Yaşlarda Zihinsel Sağlık
            </div>
            <h2 className="display mt-7 max-w-[600px] text-[clamp(46px,6vw,84px)]">
              Zihinsel gelişim rehberimiz e-posta kutunuzda.
            </h2>
            <form className="mt-9 flex max-w-[520px] items-center gap-3 border-b border-white/24 pb-3">
              <label className="sr-only" htmlFor="newsletter-email">
                E-posta Adresi
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="E-posta adresinizi giriniz"
                className="min-w-0 flex-1 bg-transparent py-3 text-white placeholder:text-white/48"
              />
              <button
                type="submit"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--yellow)] text-[var(--ink)]"
                aria-label="Bültene Kaydol"
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
                aria-label={`Sosyal Medya - ${index + 1}`}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
          <p>Tüm Hakları Saklıdır © 2026 BrainFit.</p>
          <div className="flex gap-7">
            <a href="#">Gizlilik Politikası</a>
            <a className="inline-flex items-center gap-1" href="#">
              Site Haritası
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
