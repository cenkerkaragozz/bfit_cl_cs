import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LandingFunnel } from "@/components/LandingFunnel";
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
          <LandingFunnel />
          <BlogSection posts={posts} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
