import { ImageIcon } from "lucide-react";

const tones = {
  coral: {
    surface: "bg-[#FEF0EC]",
    accent: "bg-[#F5927E]",
    ink: "text-[#8C5038]",
  },
  forest: {
    surface: "bg-[#F0F7F2]",
    accent: "bg-[#164C35]",
    ink: "text-[#164C35]",
  },
  amber: {
    surface: "bg-[#FFF7E8]",
    accent: "bg-[#FCBF48]",
    ink: "text-[#8C5038]",
  },
} as const;

export function EditorialImageSlot({
  assetId,
  altPlan,
  tone,
}: {
  assetId: "C-PHOTO-01" | "A-PHOTO-01" | "A-PHOTO-02";
  altPlan: string;
  tone: keyof typeof tones;
}) {
  const palette = tones[tone];

  return (
    <figure
      data-asset-id={assetId}
      data-alt-plan={altPlan}
      className="w-full"
    >
      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-[28px] border border-black/5 ${palette.surface}`}
      >
        <span
          className={`absolute -right-[18%] -top-[6%] h-[48%] w-[78%] rotate-[-18deg] rounded-[48%] opacity-55 ${palette.accent}`}
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-[10%] -left-[18%] h-[44%] w-[72%] rotate-[16deg] rounded-[48%] bg-white/75"
          aria-hidden="true"
        />
        <div className="absolute inset-0 grid place-items-center p-7 text-center">
          <div className="max-w-[250px] rounded-[24px] border border-white/80 bg-white/86 p-5 shadow-[0_18px_44px_rgba(36,29,24,0.1)] backdrop-blur-sm">
            <ImageIcon className={`mx-auto ${palette.ink}`} size={28} aria-hidden="true" />
            <p className={`mt-3 text-[12px] font-extrabold uppercase tracking-[0.12em] ${palette.ink}`}>
              {assetId}
            </p>
            <p className="mt-2 text-[15px] font-extrabold leading-6 text-[#241D18]">
              Görsel alanı
            </p>
            <p className="mt-1 text-[12px] font-semibold leading-5 text-[rgba(36,29,24,0.58)]">
              4:5 mobil kadraj · stok veya AI görsel
            </p>
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-[11px] font-bold text-[rgba(36,29,24,0.5)]">
        Temsili görsel · eklenecek
      </figcaption>
    </figure>
  );
}
