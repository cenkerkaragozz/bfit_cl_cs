import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.brandName,
    short_name: "BrainFit",
    description:
      "BrainFit Karşıyaka'da çocuklar ve yetişkinler için Zihin Check-Up ve bilişsel gelişim programları.",
    lang: SITE.language,
    start_url: "/",
    display: "standalone",
    // Brand green (--green in globals.css, the same colour used to render
    // public/images/og-default.png) and the site's canvas background
    // (--canvas / body background in globals.css).
    theme_color: "#164c35",
    background_color: "#faf9f5",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
