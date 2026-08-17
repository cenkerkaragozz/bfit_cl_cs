/**
 * Ground-truth SEO/business constants for BrainFit Karşıyaka.
 *
 * Everything that needs the canonical domain, brand name, postal address,
 * phone number, geo coordinates, or Google Business Profile link should
 * import from here rather than hardcoding the value inline.
 *
 * Source of truth: SEO_DECISIONS.md (site owner confirmed, 2026-08-18).
 */

export const SITE = {
  /** Canonical origin, no trailing slash. */
  origin: "https://karsiyaka.brainfit.com.tr",
  /** Legal / brand name. */
  brandName: "BrainFit Karşıyaka",
  /** Default OG image, relative to origin. */
  defaultOgImage: "/images/og-default.png",
  /** Brand logo, relative to origin. Used for the Organization JSON-LD node. */
  logoImage: "/images/BF_Logo_CMYK.png",
  address: {
    streetAddress: "İmbatlı Mah., 6076/4. Sk. No:4 D:10",
    addressLocality: "Karşıyaka",
    addressRegion: "İzmir",
    postalCode: "35530",
    addressCountry: "TR",
  },
  telephone: "+905513657484",
  geo: {
    latitude: 38.4735372,
    longitude: 27.1133766,
  },
  googleBusinessProfileUrl: "https://maps.app.goo.gl/R8oWb3pZcAns9FRy9",
  googlePlaceId: "0x14bbd955c1e2ea97:0x9a157ae96da064ac",
  locale: "tr_TR",
  language: "tr",
} as const;

/**
 * Joins the site origin with a path, guaranteeing exactly one slash between
 * them and no trailing slash on the result (unless the path is just "/").
 */
export function absoluteUrl(path: string): string {
  const origin = SITE.origin.replace(/\/+$/, "");
  const normalizedPath = `/${path.replace(/^\/+/, "")}`;

  if (normalizedPath === "/") {
    return origin;
  }

  return `${origin}${normalizedPath.replace(/\/+$/, "")}`;
}
