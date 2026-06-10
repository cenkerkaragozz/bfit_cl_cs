import { BlogSection } from "@/components/BlogSection";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LandingFunnel } from "@/components/LandingFunnel";
import { TrustBar } from "@/components/TrustBar";
import { getLatestPosts } from "@/lib/sanity/queries";

export const revalidate = 300;

export default async function Home() {
  const posts = await getLatestPosts();

  return (
    <div className="site-matte">
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
      <FloatingCta />
    </div>
  );
}
