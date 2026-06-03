import type { Metadata } from "next";
import { AdultLandingPage } from "@/components/AdultLandingPage";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "BrainFit Karşıyaka Yetişkin Programı | Zihin Check-Up",
  description:
    "BrainFit Karşıyaka yetişkin programlarıyla odak, hafıza, öğrenme kapasitesi ve zihinsel netlik alanlarında kişisel başlangıç noktanızı keşfedin.",
};

export default function AdultsPage() {
  return (
    <div className="site-matte">
      <div className="page-shell">
        <Header audience="adults" />
        <main>
          <AdultLandingPage />
        </main>
        <Footer />
      </div>
    </div>
  );
}
