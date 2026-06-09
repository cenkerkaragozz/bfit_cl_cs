import type { Metadata } from "next";
import { Titillium_Web, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: "700",
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BrainFit Karşıyaka | Zihin Check-Up ve Bilişsel Gelişim",
  description:
    "BrainFit Karşıyaka ile çocukların dikkat, hafıza ve öğrenme becerilerini Zihin Check-Up ve bilişsel gelişim programlarıyla keşfedin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${titilliumWeb.variable} ${manrope.variable} ${playfairDisplay.variable}`}
    >
      <body>
        {children}
      {/* impeccable-live-start */}
<script src="http://localhost:8400/live.js"></script>
{/* impeccable-live-end */}
</body>
    </html>
  );
}
