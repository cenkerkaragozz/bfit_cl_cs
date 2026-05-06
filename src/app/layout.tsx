import type { Metadata } from "next";
import { Fraunces, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const fraunces = Fraunces({
  subsets: ["latin"],
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
  title: "BrainFit | Mental health is wealth",
  description:
    "BrainFit is an editorial wellness landing page with programs, clinics, treatments, and Sanity-powered mental health articles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
