import {
  ArrowUpRight,
  CalendarClock,
  CircleHelp,
  Cloud,
  Footprints,
  Heart,
  MessageSquareWarning,
  NotebookPen,
  TimerOff,
  Users,
} from "lucide-react";

const observations = [
  { text: "Sınıfta sık sık dalıp gidiyor.", icon: Cloud, color: "#164C35" },
  { text: "Bildiği sorularda hata yapıyor.", icon: CircleHelp, color: "#E86F5B" },
  { text: "Ödevin başına oturmak istemiyor.", icon: NotebookPen, color: "#8AAE32" },
  { text: "Yerinde durmakta zorlanıyor.", icon: Footprints, color: "#D49210" },
  { text: "Dikkatini uzun süre sürdüremiyor.", icon: TimerOff, color: "#1E99B5" },
  {
    text: "Öğretmeni sık sık olumsuz geri bildirim veriyor.",
    icon: MessageSquareWarning,
    color: "#164C35",
  },
  { text: "Arkadaş ilişkilerinde zorlanıyor.", icon: Users, color: "#E86F5B" },
  { text: "Yapması gerekenleri sürekli erteliyor.", icon: CalendarClock, color: "#1E99B5" },
] as const;

function CoralSpiral() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute right-[3%] top-[56px] hidden h-16 w-16 text-[#E86F5B] lg:block xl:right-[4%]"
    >
      <path
        d="M8 10c0 9 13 10 13 1 0-7-10-7-10 1 0 11 19 17 26 9 5-6 8-16 3-12-6 7-1 18 13 20"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AmberStarburst() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute right-[9%] top-[150px] hidden h-12 w-12 text-[#D49210] lg:block"
    >
      <path
        d="M24 3v12M24 33v12M3 24h12M33 24h12M9 9l8.5 8.5M30.5 30.5 39 39M39 9l-8.5 8.5M17.5 30.5 9 39"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CyanWave() {
  return (
    <svg
      viewBox="0 0 78 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute bottom-[54px] left-[2%] hidden h-10 w-20 text-[#1E99B5] lg:block"
    >
      <path
        d="M3 20c8-12 16 12 24 0s16 12 24 0 16 12 24 0"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HelpSection() {
  return (
    <section
      id="help"
      className="section-surface relative scroll-mt-28 overflow-hidden py-[72px] md:py-[112px]"
    >
      <CoralSpiral />
      <AmberStarburst />
      <CyanWave />

      <div className="inner relative z-10">
        <div className="max-w-[960px]">
          <div className="badge border-[#E86F5B] bg-[#FEF0EC] text-[#C4533C]">
            SİZE TANIDIK GELİYOR MU?
          </div>
          <h2 className="section-title mt-7 max-w-[900px]">
            Bunlardan hangileri size tanıdık geliyor?
          </h2>
          <p className="body-copy mt-5 max-w-[680px]">
            Aşağıdaki durumlardan biri ya da birkaçı size tanıdık gelebilir.
          </p>
        </div>

        <ul
          className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4"
          aria-label="Tanıdık gelebilecek durumlar"
        >
          {observations.map((observation) => {
            const Icon = observation.icon;

            return (
              <li
                key={observation.text}
                className="group flex min-h-[164px] flex-col rounded-[26px] border border-[rgba(36,29,24,0.07)] bg-white px-5 py-5 shadow-[0_18px_42px_rgba(36,29,24,0.08)] transition duration-200 hover:border-[rgba(36,29,24,0.16)] motion-reduce:transition-none lg:min-h-[184px] lg:px-6 lg:py-6 motion-safe:hover:-translate-y-0.5"
              >
                <Icon
                  aria-hidden="true"
                  className="size-8 shrink-0 md:size-9"
                  color={observation.color}
                  size={36}
                  strokeWidth={2.1}
                />
                <p className="mt-auto max-w-[24ch] pt-8 text-[17px] font-extrabold leading-[1.45] text-[#241D18] lg:text-[18px]">
                  {observation.text}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-7 flex w-full flex-col items-start gap-3 rounded-[22px] bg-[#F0F7F2] p-4 text-[#164C35] sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:p-5">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#164C35]">
            <Heart
              aria-hidden="true"
              className="text-white"
              fill="currentColor"
              size={19}
              strokeWidth={2.1}
            />
          </span>
          <p className="text-[15px] font-extrabold leading-6">
            Bu gözlemler tek başına bir tanı değildir.
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="#checkup-form"
            className="mt-6 inline-flex min-h-13 items-center gap-2 rounded-full bg-[#E86F5B] px-7 text-[15px] font-extrabold text-[#160A08] shadow-[0_14px_30px_rgba(232,111,91,0.2)] transition duration-150 hover:bg-[#F5927E] motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#160A08] motion-safe:hover:-translate-y-px"
          >
            Ön Görüşme Planla
            <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.1} />
          </a>
        </div>
      </div>
    </section>
  );
}
