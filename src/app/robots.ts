import type { MetadataRoute } from "next";
import { absoluteUrl, SITE } from "@/lib/seo/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
      other: {
        "Content-Signal": "ai-train=no, search=yes, ai-input=no",
      },
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE.origin,
  };
}
