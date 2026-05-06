import { BlogSection } from "@/components/BlogSection";
import { ConfidenceSection } from "@/components/ConfidenceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HelpSection } from "@/components/HelpSection";
import { Hero } from "@/components/Hero";
import { ProgramSection } from "@/components/ProgramSection";
import { TestimonialSection } from "@/components/TestimonialSection";
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
          <HelpSection />
          <ConfidenceSection />
          <ProgramSection />
          <TestimonialSection />
          <BlogSection posts={posts} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
