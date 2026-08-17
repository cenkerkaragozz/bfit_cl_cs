import type { Metadata } from "next";
import { Titillium_Web, Manrope } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, SITE } from "@/lib/seo/site";
import {
  buildJsonLdGraph,
  buildOrganizationNode,
  buildWebSiteNode,
} from "@/lib/seo/jsonld";
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
  metadataBase: new URL(SITE.origin),
  title: {
    default: "BrainFit Karşıyaka | Çocuklar İçin Zihin Check-Up",
    template: `%s | ${SITE.brandName}`,
  },
  description:
    "BrainFit Karşıyaka'da 1 saatlik Zihin Check-Up ile çocuğunuzun bilişsel profilini anlayın ve kişiye özel egzersiz planı hakkında bilgi alın.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE.brandName,
    locale: SITE.locale,
    url: SITE.origin,
    images: [
      {
        url: absoluteUrl(SITE.defaultOgImage),
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const siteWideJsonLd = buildJsonLdGraph([
  buildOrganizationNode(),
  buildWebSiteNode(),
]);

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
        <JsonLd graph={siteWideJsonLd} />
        {children}
      </body>
    </html>
  );
}
