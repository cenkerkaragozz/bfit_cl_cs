import { ArrowUpRight, MessageCircle } from "lucide-react";

type Audience = "children" | "adults";

const messages: Record<Audience, string> = {
  children: "Merhaba, çocuğum için Zihin Check-Up hakkında bilgi almak istiyorum.",
  adults: "Merhaba, yetişkin bilişsel profil değerlendirmesi hakkında bilgi almak istiyorum.",
};

export function getWhatsAppHref(audience: Audience) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, "");

  if (!phone) return null;

  return `https://wa.me/${phone}?text=${encodeURIComponent(messages[audience])}`;
}

export function ContactActions({
  audience,
  className = "",
  showCallbackLink = true,
}: {
  audience: Audience;
  className?: string;
  showCallbackLink?: boolean;
}) {
  const whatsappHref = getWhatsAppHref(audience);

  return (
    <div className={`grid ${showCallbackLink ? "grid-cols-2" : "grid-cols-1"} gap-3 ${className}`}>
      <a
        href={whatsappHref ?? "#contact"}
        target={whatsappHref ? "_blank" : undefined}
        rel={whatsappHref ? "noopener noreferrer" : undefined}
        aria-label={
          whatsappHref
            ? "WhatsApp'tan yazın"
            : "WhatsApp iletişim bilgisi yayın öncesinde eklenecek"
        }
        aria-disabled={!whatsappHref}
        className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#164C35] px-4 text-center text-[14px] font-extrabold text-white shadow-[0_14px_28px_rgba(22,76,53,0.2)] transition duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164C35] active:translate-y-0"
      >
        <MessageCircle size={18} aria-hidden="true" />
        WhatsApp&apos;tan Yaz
      </a>
      {showCallbackLink ? (
        <a
          href="#callback-form"
          className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#F5927E] px-4 text-center text-[14px] font-extrabold text-[#160A08] shadow-[0_14px_28px_rgba(245,146,126,0.24)] transition duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4533C] active:translate-y-0"
        >
          Size Ulaşalım
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}
