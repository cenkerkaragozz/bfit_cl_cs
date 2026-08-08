import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { FooterMotion } from "@/components/FooterMotion";

export function Footer({ animated = false }: { animated?: boolean }) {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim();
  const telHref = contactPhone
    ? `tel:${contactPhone.replace(/[^\d+]/g, "")}`
    : null;

  const lead = (
    <>
      <Image
        src="/images/BF_Logo_CMYK.png"
        alt="BrainFit"
        width={1377}
        height={146}
        className="h-auto w-[190px] sm:w-[230px]"
      />
      <h2 className="mid-section-title mt-8 max-w-[620px]">
        Sorunuz varsa önce konuşalım.
      </h2>
      <p className="mt-5 max-w-[560px] text-[15px] font-semibold leading-7 text-white/68">
        Çocuklar ve yetişkinler için Zihin Check-Up süreci hakkında bilgi almak üzere iletişim bölümündeki iki seçenekten birini kullanabilirsiniz.
      </p>
    </>
  );

  const panel = (
    <>
      <div className="flex items-center gap-3 text-white/76">
        <MapPin className="text-[#FCBF48]" size={20} aria-hidden="true" />
        <span className="text-[14px] font-extrabold">BrainFit Karşıyaka · İzmir</span>
      </div>
      <nav className="mt-7 grid grid-cols-2 gap-3 text-[14px] font-extrabold" aria-label="Alt bilgi bağlantıları">
        <Link className="rounded-full border border-white/14 px-4 py-3 text-center transition hover:bg-white/8" href="/">Çocuklar</Link>
        <Link className="rounded-full border border-white/14 px-4 py-3 text-center transition hover:bg-white/8" href="/yetiskinler">Yetişkinler</Link>
        <a className="rounded-full border border-white/14 px-4 py-3 text-center transition hover:bg-white/8" href="#checkup">Zihin Check-Up</a>
        <a className="rounded-full border border-white/14 px-4 py-3 text-center transition hover:bg-white/8" href="#cognitive-profile">Bilişsel Profil</a>
      </nav>
      {telHref ? (
        <a
          href={telHref}
          className="mt-6 inline-flex min-h-11 items-center gap-2 text-[13px] font-bold text-white/64 underline decoration-white/30 underline-offset-4 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FCBF48]"
        >
          <Phone size={16} aria-hidden="true" />
          Telefonla arayın: {contactPhone}
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      ) : null}
    </>
  );

  return (
    <footer id="site-footer" className="bg-[var(--footer)] px-0 py-12 pb-28 text-white md:py-16">
      <div className="inner">
        {animated ? (
          <FooterMotion lead={lead} panel={panel} />
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>{lead}</div>
            <div className="rounded-[28px] border border-white/12 bg-white/6 p-6 md:p-8">
              {panel}
            </div>
          </div>
        )}

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/12 pt-7 text-[12px] font-semibold text-white/48 sm:flex-row sm:items-center">
          <p>Tüm Hakları Saklıdır © 2026 BrainFit.</p>
        </div>
      </div>
    </footer>
  );
}
