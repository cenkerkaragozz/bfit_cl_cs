import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client, hasSanityConfig } from "@/lib/sanity/client";

const builder = createImageUrlBuilder(client);

export function urlForImage(source: unknown) {
  if (!hasSanityConfig || !source) {
    return null;
  }

  return builder.image(source as SanityImageSource).auto("format");
}
