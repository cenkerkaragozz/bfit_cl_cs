import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";

type SanityImageProps = {
  image: unknown;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
};

export function SanityImage({
  image,
  alt,
  width,
  height,
  className,
  sizes,
}: SanityImageProps) {
  const src = urlForImage(image)?.width(width).height(height).fit("crop").url();

  if (!src) {
    return (
      <div
        className={`grid place-items-center bg-[rgba(36,29,24,0.08)] ${className ?? ""}`}
        aria-hidden="true"
      >
        <span className="h-12 w-12 rounded-full bg-white/60" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
    />
  );
}
