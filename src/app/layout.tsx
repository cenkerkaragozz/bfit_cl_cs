import type { Metadata } from "next";
import { Titillium_Web, Manrope } from "next/font/google";
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

export const metadata: Metadata = {
  title: "BrainFit Karşıyaka | Çocuklar İçin Zihin Check-Up",
  description:
    "BrainFit Karşıyaka'da 1 saatlik Zihin Check-Up ile çocuğunuzun bilişsel profilini anlayın ve kişiye özel egzersiz planı hakkında bilgi alın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${titilliumWeb.variable} ${manrope.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
