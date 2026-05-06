"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Brain,
  ChartNoAxesColumnIncreasing,
  Heart,
  Target,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDoodle,
  HeroDottedPath,
  HeroLoop,
  HeroPlants,
  HeroRing,
  HeroStrokes,
  HeroUnderline,
  HeroWaveBand,
  Squiggle,
  StarBurst,
} from "@/components/Decorations";

const portraits = [
  {
    src: "/images/portrait-calm.svg",
    alt: "Smiling person in a calm blue portrait card",
    className:
      "left-[8%] top-[16%] z-20 h-[198px] w-[137px] rotate-[-7deg] bg-[var(--sky)] sm:left-[13%] sm:h-[246px] sm:w-[171px] md:left-[12%] md:top-[18%] md:h-[330px] md:w-[228px] lg:left-[3%] lg:top-[20%] xl:left-[4%] xl:h-[372px] xl:w-[258px]",
    sizes: "(max-width: 640px) 38vw, (max-width: 1024px) 28vw, 258px",
  },
  {
    src: "/images/portrait-happier.svg",
    alt: "Happy wellness portrait on a coral background",
    className:
      "right-[13%] top-[2%] z-40 h-[226px] w-[157px] rotate-[7deg] bg-[var(--coral)] sm:right-[16%] sm:h-[286px] sm:w-[198px] md:right-[13%] md:h-[388px] md:w-[269px] lg:right-[9%] lg:top-[6%] xl:right-[10%] xl:h-[450px] xl:w-[312px]",
    sizes: "(max-width: 640px) 44vw, (max-width: 1024px) 32vw, 312px",
  },
  {
    src: "/images/portrait-positive.svg",
    alt: "Positive portrait card on a lavender background",
    className:
      "bottom-[3%] right-[2%] z-10 h-[184px] w-[128px] rotate-[-1deg] bg-[var(--lavender)] sm:right-[9%] sm:h-[234px] sm:w-[163px] md:bottom-auto md:right-[2%] md:top-[43%] md:h-[320px] md:w-[222px] lg:right-[0%] lg:top-[42%] xl:h-[362px] xl:w-[251px]",
    sizes: "(max-width: 640px) 36vw, (max-width: 1024px) 26vw, 251px",
  },
];

const labels = [
  {
    text: "Calm",
    className:
      "left-[13%] top-[43%] sm:left-[18%] md:left-[9%] md:top-[45%] lg:left-[3%] xl:left-[4%]",
  },
  {
    text: "Happier",
    className:
      "right-[7%] top-[30%] sm:right-[12%] md:right-[5%] md:top-[31%] lg:right-[3%] xl:right-[4%]",
  },
  {
    text: "Positive",
    className:
      "bottom-[18%] right-[16%] sm:right-[22%] md:bottom-auto md:right-[15%] md:top-[69%] lg:right-[18%]",
  },
] as const;

const featureItems = [
  {
    title: "Bilimsel Temelli",
    copy: "Programlarımız, bilişsel gelişim alanındaki en güncel araştırma ve yöntemlere dayanır.",
    icon: Brain,
    iconClass: "bg-[#9B66F4]",
  },
  {
    title: "Kişiye Özel",
    copy: "Her çocuğun ihtiyaçlarına uygun olarak tasarlanan içeriklerle maksimum fayda sağlar.",
    icon: ChartNoAxesColumnIncreasing,
    iconClass: "bg-[#54B8F5]",
  },
  {
    title: "Etkili ve Ölçülebilir",
    copy: "Düzenli ölçümleme ve geri bildirimle gelişimi somut verilerle takip edebilirsiniz.",
    icon: Target,
    iconClass: "bg-[#F4865D]",
  },
  {
    title: "Mutlu Çocuklar",
    copy: "Özgüven, odaklanma ve öğrenme isteğini artıran programlarla daha mutlu bireyler yetiştiriyoruz.",
    icon: Heart,
    iconClass: "bg-[#A6E95F]",
  },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pt-[108px] md:pt-[120px] lg:min-h-screen lg:pt-[132px]">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_79%_18%,rgba(251,174,23,0.12),transparent_26%),radial-gradient(circle_at_46%_54%,rgba(155,102,244,0.08),transparent_24%),linear-gradient(180deg,#faf9f5_0%,#faf9f5_72%,#f8fae7_100%)]" />

      <div className="inner relative z-10 grid gap-8 md:gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center xl:grid-cols-[0.78fr_1.22fr]">
        <div className="relative z-20 max-w-[640px] pb-2 sm:pb-4 lg:pb-28">
          <div className="badge border-[rgba(36,29,24,0.35)] text-[var(--muted-brown)]">
            BİLİMSEL · KANITLANMIŞ · KİŞİSEL
          </div>

          <h1 className="mt-5 max-w-[620px] font-[var(--body)] text-[clamp(35px,9.9vw,39px)] font-extrabold leading-[1.03] tracking-normal text-[#160A08] min-[430px]:text-[clamp(42px,10.4vw,54px)] sm:text-[clamp(50px,7.4vw,64px)] md:mt-7 lg:text-[clamp(50px,4.2vw,62px)] xl:text-[clamp(56px,4.25vw,66px)]">
            <span className="block">Bilişsel gelişimi</span>
            <span className="block">artırmak için</span>
            <span className="block text-[#FBAE17]">bilimsel</span>
            <span className="block text-[#FBAE17]">yöntemlerle</span>
            <span className="block">tasarlanmış</span>
            <span className="block">programlarımızla</span>
            <span className="relative inline-block">
              tanışın<span className="text-[#FBAE17]">.</span>
              <HeroUnderline
                animate={!reduceMotion}
                className="absolute -bottom-6 left-[-5px] h-7 w-[240px] max-w-[72vw] md:-bottom-7 md:w-[280px]"
              />
            </span>
          </h1>

          <div className="mt-12 max-w-[440px] md:mt-14">
            <p className="text-[17px] font-medium leading-8 text-[rgba(36,29,24,0.66)] md:text-lg">
              Çocuğunuzun öğrenme sürecini, dikkatini ve zihinsel kapasitesini
              bilimsel egzersizlerle destekliyoruz.
            </p>
            <a
              className="arrow-shift mt-5 inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-full bg-[#F05A38] px-5 py-3 text-center text-[14px] font-extrabold leading-5 text-[#160A08] shadow-[0_16px_32px_rgba(240,90,56,0.2)] transition hover:-translate-y-1 hover:bg-[#ff6845] sm:px-6"
              href="#help"
            >
              <span>Ücretsiz Check-Up rezervasyonu yap</span>
              <ArrowUpRight className="shrink-0" size={16} />
            </a>
          </div>
        </div>

        <div className="relative z-10 mx-auto h-[390px] w-full max-w-[620px] sm:h-[520px] md:h-[640px] md:max-w-[760px] lg:mx-0 lg:h-[650px] lg:max-w-none xl:h-[720px]">
          <HeroLoop className="absolute left-[1%] top-[35%] z-0 hidden h-[142px] w-[150px] md:block lg:left-[-3%]" />
          <StarBurst
            animate={!reduceMotion}
            className="absolute left-[20%] top-[2%] z-50 h-11 w-11 md:left-[24%] md:top-[4%] md:h-14 md:w-14 lg:left-[18%] lg:top-[2%]"
            color="#FBAE17"
          />
          <HeroStrokes className="absolute left-[4%] top-[24%] z-50 hidden h-12 w-12 text-[#F4865D] md:block" />
          <Squiggle className="absolute right-[1%] top-[3%] z-50 hidden md:block" color="#B87348" />
          <ArrowDoodle className="absolute bottom-[17%] left-[10%] z-50 hidden h-[78px] w-[102px] md:block lg:left-[5%]" />

          <HeroRing className="absolute left-[7%] top-[59%] z-50 h-4 w-4 md:left-[0%]" color="#54B8F5" />
          <HeroRing className="absolute left-[17%] top-[58%] z-50 hidden h-5 w-5 md:block" color="#FBAE17" />
          <HeroRing className="absolute right-[25%] bottom-[15%] z-50 hidden h-4 w-4 md:block" color="#6DC5D5" />
          <HeroRing className="absolute right-[-2%] top-[35%] z-50 h-4 w-4 md:h-5 md:w-5" color="#54B8F5" />
          <HeroRing className="absolute right-[0%] bottom-[25%] z-50 hidden h-5 w-5 md:block" color="#FBAE17" />
          <span className="absolute right-[5%] top-[23%] z-50 h-5 w-5 rounded-full bg-[#FBAE17] md:h-6 md:w-6" aria-hidden="true" />
          <span className="absolute left-[44%] top-[10%] z-50 h-3 w-3 rounded-full border-[3px] border-[#A6D96F]" aria-hidden="true" />

          {portraits.map((portrait, index) => (
            <motion.div
              key={portrait.src}
              className={`absolute overflow-hidden rounded-[22px] shadow-[0_28px_70px_rgba(36,29,24,0.16)] ${portrait.className}`}
              initial={{ opacity: 0, scale: 0.86, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                priority={index < 2}
                sizes={portrait.sizes}
                className="object-cover"
              />
            </motion.div>
          ))}

          {labels.map((label, index) => (
            <motion.div
              key={label.text}
              className={`absolute z-[60] rounded-full border border-[rgba(36,29,24,0.13)] bg-white px-4 py-2.5 text-[13px] font-extrabold text-[#160A08] shadow-[0_14px_35px_rgba(36,29,24,0.12)] sm:text-[14px] md:px-5 md:py-3 md:text-[15px] ${label.className}`}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -10, 0],
                      rotate: [0, index === 0 ? -3 : 3, 0],
                    }
              }
              transition={{
                duration: 3.5 + index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {label.text}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-0 mt-[-34px] min-h-[300px] overflow-hidden pt-20 sm:mt-[-70px] md:min-h-[270px] lg:mt-[-185px] lg:pt-12 xl:mt-[-195px]">
        <HeroWaveBand className="absolute inset-x-0 top-0 -z-10 h-[255px] w-full md:h-[270px]" />
        <HeroPlants className="absolute inset-x-0 bottom-0 z-0 h-[168px] w-full md:h-[190px]" />
        <HeroDottedPath
          animate={!reduceMotion}
          className="absolute left-[21%] top-[64px] z-0 hidden h-[130px] w-[48%] md:block lg:left-[24%] lg:w-[47%]"
        />

        <div className="inner relative z-10 grid gap-6 pt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-7 md:pt-12 lg:grid-cols-4 lg:gap-10 lg:pt-10">
          {featureItems.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="max-w-[310px]">
                <div
                  className={`grid h-10 w-10 place-items-center rounded-full text-white shadow-[0_12px_24px_rgba(36,29,24,0.12)] ${item.iconClass}`}
                  aria-hidden="true"
                >
                  <Icon size={21} strokeWidth={2.7} />
                </div>
                <h2 className="mt-4 text-[18px] font-extrabold leading-tight text-[#160A08] md:text-[19px]">
                  {item.title}
                </h2>
                <p className="mt-2 text-[15px] font-medium leading-7 text-[rgba(36,29,24,0.72)]">
                  {item.copy}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
