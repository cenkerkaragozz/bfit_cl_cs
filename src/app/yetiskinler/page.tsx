import type { Metadata } from "next";
import { AdultLandingPage } from "@/components/AdultLandingPage";
import { BlogSection } from "@/components/BlogSection";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getLatestPosts } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "BrainFit Karşıyaka | Yetişkinlerde Bilişsel Profil Değerlendirmesi",
  description:
    "BrainFit Karşıyaka'da bilişsel profil değerlendirmesiyle dikkat, hafıza ve zihinsel performansınızı tanıyın; size özel egzersiz planı hakkında bilgi alın.",
};

export const revalidate = 300;

export default async function AdultsPage() {
  const posts = await getLatestPosts();

  return (
    <div className="site-matte">
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
