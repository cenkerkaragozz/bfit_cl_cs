import type { Metadata } from "next";
import { AdultLandingPage } from "@/components/AdultLandingPage";
import { BlogSection } from "@/components/BlogSection";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { adultFaqs } from "@/lib/faq-data";
import { getLatestPosts } from "@/lib/sanity/queries";
import { absoluteUrl, SITE } from "@/lib/seo/site";
import {
  buildFaqPageNode,
  buildJsonLdGraph,
  buildServiceNode,
} from "@/lib/seo/jsonld";

const title = "Yetişkinlerde Bilişsel Profil Değerlendirmesi";
const description =
  "BrainFit Karşıyaka'da bilişsel profil değerlendirmesiyle dikkat, hafıza ve zihinsel performansınızı tanıyın; size özel egzersiz planı hakkında bilgi alın.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/yetiskinler",
  },
  // A page-level `openGraph` object replaces the layout's entirely (Next.js
  // does not deep-merge it), so the site-wide defaults are repeated here.
  openGraph: {
    type: "website",
    siteName: SITE.brandName,
    locale: SITE.locale,
    title,
    description,
    url: absoluteUrl("/yetiskinler"),
    images: [
      {
        url: absoluteUrl(SITE.defaultOgImage),
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const revalidate = 300;

const adultsJsonLd = buildJsonLdGraph([
  buildServiceNode({
    name: "Bilişsel Profil Değerlendirmesi",
    serviceType: "Bilişsel değerlendirme",
    description,
    audienceType: "Yetişkinler",
  }),
  buildFaqPageNode(adultFaqs),
]);

export default async function AdultsPage() {
  const posts = await getLatestPosts();

  return (
    <div className="site-matte">
      <JsonLd graph={adultsJsonLd} />
      <div className="page-shell">
        <Header audience="adults" />
        <main>
          <AdultLandingPage />
          <BlogSection posts={posts} variant="adults" />
        </main>
        <Footer animated />
      </div>
      <FloatingCta audience="adults" />
    </div>
  );
}
