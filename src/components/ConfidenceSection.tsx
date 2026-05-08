"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { DrawnUnderline, Reveal, StarBurst, Sunflower } from "@/components/Decorations";

const cards = [
  {
    title: "Dikkati Sürdürme",
    copy: "Bir işe başlamak kadar, o işi dikkat dağılmadan sonuna kadar götürmek de geliştirilebilir bir yetidir.",
    image: "/images/confidence-card-1.svg",
    color: "#91DDF4",
  },
  {
    title: "Hafıza ve Geri Çağırma",
    copy: "Öğrenilen bilginin ihtiyaç duyulduğu anda hatırlanması, hafıza kapasitesi ve doğru tekrar teknikleriyle doğrudan ilişkilidir.",
    image: "/images/confidence-card-2.svg",
    color: "#F9DC7B",
  },
  {
    title: "Bilgiyi Uygulama ve Transfer",
    copy: "Sınav ve ödev performansında bilgiyi doğru kullanmak; dikkat, işlem hızı ve planlama yetisiyle mümkündür.",
    image: "/images/confidence-card-3.svg",
    color: "#C9F58B",
  },
] as const;

export function ConfidenceSection() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % cards.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const card = cards[active];

  return (
    <>
      <section id="treatments" className="relative overflow-hidden bg-[#FEF9F5] py-[74px] md:py-[112px]">
        <div className="inner grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="badge border-[#8C8480] text-[#8C8480]">Daha Fazla Israr Etmeden Önce</div>
            <h2 className="mt-7 max-w-[780px] font-[var(--display)] text-[clamp(42px,5.8vw,60px)] font-bold leading-[0.98] tracking-normal text-[#241D18]">
              Yaşananlar bir motivasyon eksikliği veya{" "}
              <span className="relative inline-block">
                tembellik
                <DrawnUnderline className="absolute -bottom-5 left-0 w-full" />
              </span>{" "}
              olmayabilir.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-5">
            <p className="body-copy">
              Çocuklar bazen tüm güçleriyle dener ve yorulurlar. Ancak
              odaklanma veya hafıza kapasitesi zorlandığında, harcadıkları çaba
              aldıkları sonuçla örtüşmeyebilir.
            </p>
            <p className="body-copy">
              Bu nedenle çözüm daha çok baskı kurmak değil; hangi zihinsel
              becerinin desteğe ihtiyaç duyduğunu uzmanlıkla belirlemektir.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1B4332] py-[86px] text-white md:py-[126px]">
        <StarBurst className="absolute left-[4%] top-[14%] opacity-60" color="#FBAE17" />
        <Sunflower className="absolute bottom-[-22px] left-[48%] hidden opacity-95 md:block" />
        <div
          className="absolute right-[-32px] top-[42%] h-32 w-32 rounded-full border-[18px] border-[#FBAE17]/70"
          aria-hidden="true"
        />

        <div className="inner grid items-center gap-12 lg:grid-cols-[0.96fr_0.9fr]">
          <Reveal>
            <div className="badge border-white/60 text-[#FBAE17]">Bu Yolculukta Yalnız Değilsiniz</div>
            <h2 className="display mt-8 max-w-[680px] text-[clamp(42px,5.8vw,60px)] leading-[0.98] text-white">
              Öğrenme, birden fazla bilişsel becerinin uyumudur.
            </h2>
            <p className="mt-8 max-w-[580px] text-[17px] font-medium leading-8 text-white/76">
              Dikkat, hafıza ve planlama gibi beceriler bir bütün olarak
              çalışır. Bu alanlardan birindeki zayıflık, çocuğun performansını
              doğrudan etkiler.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="relative">
            <div className="flex items-stretch gap-5">
              <div className="flex flex-col justify-center gap-3" aria-label="Bilişsel Gelişim Alanları">
                {cards.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-label={
                      index === 0
                        ? "Dikkati Sürdürme Detaylarını Gör"
                        : index === 1
                          ? "Hafıza Detaylarını Gör"
                          : "Uygulama Becerisi Detaylarını Gör"
                    }
                    onClick={() => setActive(index)}
                    className="relative h-[82px] w-[8px] overflow-hidden rounded-full bg-white/20"
                  >
                    <motion.span
                      className="absolute bottom-0 left-0 w-full rounded-full bg-[#FBAE17]"
                      initial={false}
                      animate={{ height: index === active ? "100%" : "20%" }}
                      transition={{ duration: 0.35 }}
                    />
                  </button>
                ))}
              </div>

              <div className="relative min-h-[470px] flex-1 overflow-hidden rounded-[28px] bg-white p-4 text-[var(--ink)] shadow-[0_26px_70px_rgba(0,0,0,0.16)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={card.title}
                    initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                    animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.45 }}
                    className="h-full"
                  >
                    <div
                      className="relative h-[325px] overflow-hidden rounded-[22px]"
                      style={{ background: card.color }}
                    >
                      <Image
                        src={card.image}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="(max-width: 768px) 80vw, 430px"
                        className="object-cover"
                      />
                    </div>
                    <div className="px-3 pt-6">
                      <h3 className="font-[var(--display)] text-[34px] leading-none text-gray-900">
                        {card.title}
                      </h3>
                      <p className="mt-3 max-w-[340px] text-[15px] leading-7 text-gray-600">
                        {card.copy}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
