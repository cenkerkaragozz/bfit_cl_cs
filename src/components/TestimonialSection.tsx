"use client";

import {
  LoaderCircle,
  Play,
  ShieldCheck,
  Star,
  Video as VideoIcon,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { flushSync } from "react-dom";
import { Leaf, QuoteIcon } from "@/components/Decorations";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

type TestimonialAudience = "children" | "adults";

type VideoTestimonial = {
  src?: string;
  poster?: string;
  thumbnail?: string;
  title?: string;
};

const testimonialGroups = {
  children: [
    {
      lead: "Ödev başında yaşadığımız zorlanmanın yalnızca isteksizlik olmadığını ",
      highlight: "fark ettik",
      tail: ".",
    },
    {
      lead: "Check-Up sonrasında hangi alanlara odaklanmamız gerektiği bizim için ",
      highlight: "netleşti",
      tail: ".",
    },
    {
      lead: "Süreç ilerledikçe çocuğumuz ders başında daha ",
      highlight: "uzun süre",
      tail: " kalmaya başladı.",
    },
    {
      lead: "Uzmanın raporu sade bir şekilde açıklaması kafamızdaki birçok soruyu ",
      highlight: "yanıtladı",
      tail: ".",
    },
  ],
  adults: [
    {
      lead: "Değerlendirme sonrasında bilişsel profilimi çok daha ",
      highlight: "net",
      tail: " gördüm.",
    },
    {
      lead: "Görüşmenin ardından nereden başlamam gerektiği benim için ",
      highlight: "netleşti",
      tail: ".",
    },
    {
      lead: "BrainFit sürecinde zihinsel çalışma düzenimi daha ",
      highlight: "bilinçli",
      tail: " takip etmeye başladım.",
    },
    {
      lead: "Raporu uzmanla değerlendirdikten sonra günlük çalışma planımı daha ",
      highlight: "gerçekçi",
      tail: " kurmaya başladım.",
    },
  ],
} as const;

const localProofItems = [
  "Karşıyaka'da yüz yüze merkez",
  "WhatsApp ile hızlı randevu",
  "KVKK kapsamında iletişim",
  "Uzman açıklamalı rapor",
] as const;

const videoTestimonialGroups: Record<TestimonialAudience, VideoTestimonial[]> =
  {
    children: [
      {
        title: "Velimizin gözünden değişim",
        src: "/videos/testimonials/children/parent-change-v1.mp4",
        poster: "/videos/testimonials/children/poster-parent-change-v1.webp",
        thumbnail: "/videos/testimonials/children/thumb-custom-1-v1.webp",
      },
      {
        title: "Disleksi, DEHB ve akademik gelişim",
        src: "/videos/testimonials/children/parent-dyslexia-v1.mp4",
        poster: "/videos/testimonials/children/poster-parent-dyslexia-v1.webp",
        thumbnail: "/videos/testimonials/children/thumb-custom-2-v1.webp",
      },
      {
        title: "Milli tenisçimizin annesinin deneyimi",
        src: "/videos/testimonials/children/tennis-parent-v1.mp4",
        poster: "/videos/testimonials/children/poster-tennis-parent-v1.webp",
        thumbnail: "/videos/testimonials/children/thumb-custom-3-v1.webp",
      },
      {
        title: "Sumru’nun gelişim yolculuğu",
        src: "/videos/testimonials/children/sumru-v1.mp4",
        poster: "/videos/testimonials/children/poster-sumru-v1.webp",
        thumbnail: "/videos/testimonials/children/thumb-custom-4-v1.webp",
      },
    ],
    adults: [
      {
        title: "BrainFit nedir?",
        src: "/videos/testimonials/children/founder-explains-v1.mp4",
        poster: "/videos/testimonials/children/poster-founder-explains-v1.webp",
        thumbnail: "/videos/testimonials/children/thumb-founder-adult-v1.webp",
      },
      { src: "", poster: "", title: "" },
      { src: "", poster: "", title: "" },
      { src: "", poster: "", title: "" },
      { src: "", poster: "", title: "" },
      { src: "", poster: "", title: "" },
      { src: "", poster: "", title: "" },
      { src: "", poster: "", title: "" },
    ],
  };

export function TestimonialSection({
  audience = "children",
  showLocalProofBars = true,
}: {
  audience?: TestimonialAudience;
  showLocalProofBars?: boolean;
}) {
  return (
    <Testimonials audience={audience} showLocalProofBars={showLocalProofBars} />
  );
}

function Testimonials({
  audience,
  showLocalProofBars,
}: {
  audience: TestimonialAudience;
  showLocalProofBars: boolean;
}) {
  const [active, setActive] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const [activatedVideo, setActivatedVideo] = useState<number | null>(null);
  const [videoStatus, setVideoStatus] = useState<"idle" | "loading" | "playing" | "error">("idle");
  const [writtenHovered, setWrittenHovered] = useState(false);
  const [writtenFocused, setWrittenFocused] = useState(false);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoTabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Visibility observer (no once) pauses the auto-rotation while the
  // section is offscreen. A separate once-observer drives entrances.
  const sectionVisible = useInView(sectionRef, { margin: "-60px" });
  const sectionSeen = useInView(sectionRef, { once: true, margin: "-60px" });
  const testimonials = testimonialGroups[audience];
  const videoTestimonials = videoTestimonialGroups[audience];
  const isAdults = audience === "adults";
  const participantLabel =
    audience === "adults"
      ? "BrainFit Katılımcısı"
      : "BrainFit Karşıyaka Velisi";
  const videoSectionLabel = isAdults
    ? "Katılımcıların video deneyimleri"
    : "Video deneyimleri";
  const writtenSectionLabel = isAdults
    ? "Yazılı katılımcı deneyimleri"
    : "Yazılı veli deneyimleri";

  useEffect(() => {
    if (reduceMotion) return;
    if (isAdults && !sectionVisible) return;
    if (writtenHovered || writtenFocused) return;

    const timer = window.setInterval(
      () => {
        setActive((current) => (current + 1) % testimonials.length);
      },
      isAdults ? 6500 : 3125,
    );

    return () => window.clearInterval(timer);
  }, [
    audience,
    reduceMotion,
    sectionVisible,
    writtenHovered,
    writtenFocused,
    testimonials.length,
  ]);

  const testimonial = testimonials[active];
  const selectedVideo = videoTestimonials[activeVideo];

  const selectVideo = (index: number) => {
    videoRef.current?.pause();
    setActivatedVideo(null);
    setVideoStatus("idle");
    setActiveVideo(index);
  };

  const activateVideo = () => {
    if (!selectedVideo.src) return;
    flushSync(() => {
      setVideoStatus("loading");
      setActivatedVideo(activeVideo);
    });

    const video = videoRef.current;
    if (!video) {
      setVideoStatus("error");
      return;
    }

    video.load();
    void video.play().catch(() => setVideoStatus("error"));
  };

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="section-surface relative scroll-mt-28 py-[82px] md:py-[116px]"
    >
      <Leaf className="absolute right-[4%] top-[8%] hidden md:block" />
      <div className="inner">
        <div className="relative mx-auto max-w-[1180px]">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div className="min-w-0">
              {!isAdults ? (
                <h2 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[rgba(36,29,24,0.68)] lg:mx-auto lg:max-w-[400px] lg:text-center">
                  {videoSectionLabel}
                </h2>
              ) : null}
              <div
                id={`${audience}-video-panel`}
                role="tabpanel"
                aria-labelledby={`${audience}-video-tab-${activeVideo}`}
                tabIndex={-1}
                className={`${isAdults ? "" : "mt-5"} mx-auto h-auto max-h-[75svh] max-w-full overflow-hidden rounded-[28px] border border-[rgba(36,29,24,0.08)] bg-[#241D18] shadow-[0_22px_52px_rgba(36,29,24,0.16)] focus:outline-none`}
                style={{
                  width: "min(100%, 400px, calc(75svh * 0.5625))",
                  aspectRatio: "9 / 16",
                }}
              >
                {selectedVideo.src && activatedVideo === activeVideo ? (
                  <div className="relative h-full w-full">
                    <video
                      ref={videoRef}
                      key={activeVideo}
                      className="h-full w-full object-contain"
                      controls
                      preload="none"
                      playsInline
                      src={selectedVideo.src}
                      poster={selectedVideo.poster || undefined}
                      onLoadStart={() => setVideoStatus("loading")}
                      onCanPlay={() => setVideoStatus("playing")}
                      onPlaying={() => setVideoStatus("playing")}
                      onError={() => setVideoStatus("error")}
                      aria-label={
                        selectedVideo.title ||
                        `${isAdults ? "Katılımcı" : "Veli"} deneyimi videosu ${activeVideo + 1}`
                      }
                    >
                      Tarayıcınız video oynatmayı desteklemiyor.
                    </video>
                    {videoStatus === "loading" ? (
                      <span className="pointer-events-none absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#241D18]/80 px-4 py-2 text-[11px] font-bold text-white">
                        <LoaderCircle
                          size={15}
                          className="animate-spin motion-reduce:animate-none"
                          aria-hidden="true"
                        />
                        Yükleniyor…
                      </span>
                    ) : null}
                    {videoStatus === "error" ? (
                      <button
                        type="button"
                        onClick={() => {
                          setActivatedVideo(null);
                          setVideoStatus("idle");
                        }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FCBF48] px-5 py-3 text-[12px] font-extrabold uppercase tracking-[0.08em] text-[var(--ink)] shadow-[0_12px_30px_rgba(36,29,24,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--coral)]"
                      >
                        Tekrar dene
                      </button>
                    ) : null}
                  </div>
                ) : selectedVideo.src ? (
                  <div className="relative h-full w-full bg-[#241D18]">
                    <img
                      src={selectedVideo.poster}
                      alt=""
                      width={480}
                      height={854}
                      loading="eager"
                      decoding="async"
                      className="h-full w-full object-contain"
                      aria-hidden="true"
                    />
                    <button
                      type="button"
                      onClick={videoStatus === "error" ? () => {
                        setVideoStatus("idle");
                        setActivatedVideo(null);
                      } : activateVideo}
                      className="absolute left-1/2 top-1/2 flex min-h-16 min-w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FCBF48] px-6 text-[var(--ink)] shadow-[0_12px_30px_rgba(36,29,24,0.28)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--coral)]"
                      aria-label={`${videoStatus === "error" ? "Videoyu yeniden dene" : "Videoyu oynat"}: ${selectedVideo.title || `video ${activeVideo + 1}`}`}
                    >
                      {videoStatus === "error" ? (
                        <span className="text-[12px] font-extrabold uppercase tracking-[0.08em]">
                          Tekrar dene
                        </span>
                      ) : (
                        <Play
                          size={27}
                          fill="currentColor"
                          strokeWidth={2.2}
                          className="ml-1"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                    {videoStatus === "loading" ? (
                      <span className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#241D18]/80 px-4 py-2 text-[11px] font-bold text-white">
                        <LoaderCircle
                          size={15}
                          className="animate-spin motion-reduce:animate-none"
                          aria-hidden="true"
                        />
                        Yükleniyor…
                      </span>
                    ) : null}
                  </div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center overflow-hidden bg-[#241D18] px-6 text-center">
                    <span
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FCBF48] text-[var(--ink)]"
                      aria-hidden="true"
                    >
                      <VideoIcon size={26} strokeWidth={2.2} />
                    </span>
                    <p className="mt-5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/60">
                      Video {activeVideo + 1}
                    </p>
                    <p className="display mt-2 max-w-[14ch] text-[clamp(28px,3.6vw,42px)] leading-[0.98] text-white">
                      {isAdults ? "Katılımcı deneyimi" : "Video referansı"}
                    </p>
                    <p className="mt-3 max-w-[28ch] text-[14px] leading-6 text-white/70">
                      {isAdults
                        ? "Gerçek katılımcı videosu eklendiğinde burada oynatılacak."
                        : "Gerçek video eklendiğinde burada oynatılacak."}
                    </p>
                  </div>
                )}
              </div>

              <div
                className="mx-auto mt-4 flex w-full max-w-[400px] gap-3 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                role="tablist"
                aria-label={videoSectionLabel}
                aria-orientation="horizontal"
              >
                {videoTestimonials.map((video, index) => {
                  const videoTitle = video.title?.trim();

                  return (
                    <button
                      key={index}
                      type="button"
                      id={`${audience}-video-tab-${index}`}
                      role="tab"
                      aria-selected={index === activeVideo}
                      aria-controls={`${audience}-video-panel`}
                      aria-label={
                        videoTitle ||
                        `${isAdults ? "Katılımcı" : "Video"} deneyimi ${index + 1}`
                      }
                      tabIndex={index === activeVideo ? 0 : -1}
                      ref={(element) => {
                        videoTabRefs.current[index] = element;
                      }}
                      onClick={() => selectVideo(index)}
                      onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => {
                        let nextIndex: number | null = null;

                        if (event.key === "ArrowRight") {
                          nextIndex = (index + 1) % videoTestimonials.length;
                        } else if (event.key === "ArrowLeft") {
                          nextIndex =
                            (index - 1 + videoTestimonials.length) %
                            videoTestimonials.length;
                        } else if (event.key === "Home") {
                          nextIndex = 0;
                        } else if (event.key === "End") {
                          nextIndex = videoTestimonials.length - 1;
                        }

                        if (nextIndex === null) return;

                        event.preventDefault();
                        selectVideo(nextIndex);
                        videoTabRefs.current[nextIndex]?.focus();
                      }}
                      className={`relative flex aspect-[9/16] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-[16px] border-2 px-2 transition-[background-color,border-color,box-shadow,transform] duration-200 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--coral)] active:translate-y-px ${
                        index === activeVideo
                          ? "border-[#F5927E] bg-[#FCBF48] text-[var(--ink)] shadow-[0_10px_22px_rgba(245,146,126,0.28)]"
                          : "border-[rgba(36,29,24,0.1)] bg-white text-[var(--ink)] hover:border-[rgba(245,146,126,0.68)]"
                      }`}
                    >
                      {video.thumbnail || video.poster ? (
                        <img
                          src={video.thumbnail || video.poster}
                          alt=""
                          width={144}
                          height={256}
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                          className="absolute inset-0 h-full w-full object-cover"
                          aria-hidden="true"
                        />
                      ) : videoTitle ? (
                        <span className="display max-w-full break-words text-center text-[12px] leading-[1.1]">
                          {videoTitle}
                        </span>
                      ) : (
                        <span
                          className="display text-[24px] leading-none"
                          aria-hidden="true"
                        >
                          {index + 1}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              role="region"
              aria-labelledby={`${audience}-written-testimonials-title`}
              tabIndex={0}
              onMouseEnter={() => setWrittenHovered(true)}
              onMouseLeave={() => setWrittenHovered(false)}
              onFocus={() => setWrittenFocused(true)}
              onBlur={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null,
                  )
                ) {
                  setWrittenFocused(false);
                }
              }}
              className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[var(--coral)] lg:self-center"
            >
              <h2
                id={`${audience}-written-testimonials-title`}
                className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[rgba(36,29,24,0.68)]"
              >
                {writtenSectionLabel}
              </h2>
              <QuoteIcon className="mb-8 mt-6" />
              <blockquote>
                <p className="display max-w-[560px] text-[clamp(36px,4.2vw,48px)] leading-[0.98]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${audience}-${testimonial.highlight}`}
                      className="inline-block"
                      initial={
                        reduceMotion
                          ? undefined
                          : isAdults
                            ? {
                                y: 26,
                                opacity: 0,
                                clipPath: "inset(0 0 100% 0)",
                              }
                            : { y: 16, rotate: -2 }
                      }
                      animate={
                        reduceMotion
                          ? undefined
                          : isAdults
                            ? { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)" }
                            : { y: 0, rotate: 0 }
                      }
                      exit={
                        reduceMotion
                          ? undefined
                          : isAdults
                            ? {
                                y: -18,
                                opacity: 0,
                                clipPath: "inset(0 0 100% 0)",
                              }
                            : { y: -12, rotate: 2 }
                      }
                      transition={{
                        duration: isAdults ? 0.45 : 0.38,
                        ease: isAdults ? easeOutExpo : undefined,
                      }}
                    >
                      {testimonial.lead}
                      {isAdults ? (
                        <motion.span
                          className="inline-block rounded-full bg-[#FCBF48] px-5 pb-2 text-[var(--ink)]"
                          initial={
                            reduceMotion
                              ? undefined
                              : { clipPath: "inset(0 100% 0 0)" }
                          }
                          animate={
                            reduceMotion
                              ? undefined
                              : { clipPath: "inset(0 0% 0 0)" }
                          }
                          transition={{
                            delay: 0.18,
                            duration: 0.4,
                            ease: easeOutExpo,
                          }}
                        >
                          {testimonial.highlight}
                        </motion.span>
                      ) : (
                        <span className="inline-block rounded-full bg-[#FCBF48] px-5 pb-2 text-[var(--ink)]">
                          {testimonial.highlight}
                        </span>
                      )}
                      {testimonial.tail}
                    </motion.span>
                  </AnimatePresence>
                </p>
              </blockquote>

              <div className="mt-10 flex items-center gap-5">
                <div>
                  <p className="font-extrabold">{participantLabel}</p>
                  <div
                    className="mt-1 flex items-center gap-1 text-[#FCBF48]"
                    aria-label="Google Puanı: 4.8/5"
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        fill="currentColor"
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                    ))}
                    <span className="ml-2 text-[14px] font-extrabold text-[rgba(36,29,24,0.68)]">
                      Google Puanı: 4.8/5
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3" aria-hidden="true">
                {testimonials.map((item, index) => (
                  <span
                    key={item.highlight}
                    className={`h-[5px] rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none ${
                      index === active
                        ? "w-10 bg-[#F5927E]"
                        : "w-5 bg-[rgba(36,29,24,0.18)]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[980px]">
            {showLocalProofBars ? (
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {localProofItems.map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3 rounded-[18px] bg-white p-4"
                    initial={
                      reduceMotion || !isAdults ? false : { opacity: 0, y: 12 }
                    }
                    animate={
                      isAdults && sectionSeen ? { opacity: 1, y: 0 } : undefined
                    }
                    transition={{
                      delay: 0.1 + index * 0.08,
                      duration: 0.4,
                      ease: easeOutExpo,
                    }}
                  >
                    <ShieldCheck
                      size={19}
                      className="shrink-0 text-[#6BC862]"
                    />
                    <p className="text-[14px] font-extrabold text-[#241D18]">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
