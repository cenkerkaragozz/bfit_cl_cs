import type { Metadata } from "next";
import { BlogSection } from "@/components/BlogSection";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { LandingFunnel } from "@/components/LandingFunnel";
import { TrustBar } from "@/components/TrustBar";
import { childFaqs } from "@/lib/faq-data";
import { getLatestPosts } from "@/lib/sanity/queries";
import {
  buildFaqPageNode,
  buildJsonLdGraph,
  buildServiceNode,
} from "@/lib/seo/jsonld";

export const revalidate = 300;

export const metadata: Metadata = {
  // `absolute` keeps this exact string and ignores the root layout's
  // `title.template`, since this copy already contains the brand suffix.
  title: {
    absolute: "BrainFit Karşıyaka | Çocuklar İçin Zihin Check-Up",
  },
  description:
    "BrainFit Karşıyaka'da 1 saatlik Zihin Check-Up ile çocuğunuzun bilişsel profilini anlayın ve kişiye özel egzersiz planı hakkında bilgi alın.",
  alternates: {
    canonical: "/",
  },
};

const homeJsonLd = buildJsonLdGraph([
  buildServiceNode({
    name: "Zihin Check-Up",
    serviceType: "Bilişsel değerlendirme",
    description:
      "BrainFit Karşıyaka'da 1 saatlik Zihin Check-Up ile çocuğunuzun bilişsel profilini anlayın ve kişiye özel egzersiz planı hakkında bilgi alın.",
    audienceType: "Çocuklar ve ebeveynler",
  }),
  buildFaqPageNode(childFaqs),
]);

export default async function Home() {
  const posts = await getLatestPosts();

  return (
    <div className="site-matte">
      <JsonLd graph={homeJsonLd} />
      <div className="page-shell">
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <LandingFunnel />
          <BlogSection posts={posts} />
        </main>
        <Footer />
      </div>
      <FloatingCta audience="children" />
    </div>
  );
}
