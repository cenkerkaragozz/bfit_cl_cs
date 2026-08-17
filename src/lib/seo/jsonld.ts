/**
 * JSON-LD structured-data builders for BrainFit Karşıyaka.
 *
 * All entity data (domain, address, phone, geo, GBP url, logo/OG image)
 * comes from `src/lib/seo/site.ts` — never hardcode it here.
 *
 * Deliberately excluded, per SEO_DECISIONS.md:
 *  - Rating/star markup on the org node (unverified third-party rating
 *    data; a Google manual-action risk). The GBP is linked via `sameAs`
 *    instead.
 *  - Any Health- or Medical-prefixed @type on the org node (the product
 *    explicitly disclaims medical diagnosis/treatment).
 *  - A site-search action on the WebSite node (no internal search feature).
 */
import { absoluteUrl, SITE } from "@/lib/seo/site";

const SCHEMA_CONTEXT = "https://schema.org" as const;

/** Stable @id anchors so other nodes (on this page or others) can reference them. */
export const ORGANIZATION_ID = `${SITE.origin}/#organization`;
export const WEBSITE_ID = `${SITE.origin}/#website`;
export const BLOG_ID = `${SITE.origin}/blog#blog`;

export interface JsonLdGraph {
  "@context": typeof SCHEMA_CONTEXT;
  "@graph": JsonLdNode[];
}

export type JsonLdNode =
  | OrganizationNode
  | WebSiteNode
  | ServiceNode
  | FaqPageNode
  | BlogNode
  | BreadcrumbListNode
  | BlogPostingNode;

interface PostalAddressNode {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface GeoCoordinatesNode {
  "@type": "GeoCoordinates";
  latitude: number;
  longitude: number;
}

interface AreaServedNode {
  "@type": "City";
  name: string;
}

interface IdReference {
  "@id": string;
}

export interface OrganizationNode {
  "@type": ["LocalBusiness", "EducationalOrganization"];
  "@id": string;
  name: string;
  url: string;
  logo: string;
  image: string;
  telephone: string;
  address: PostalAddressNode;
  geo: GeoCoordinatesNode;
  sameAs: string[];
  areaServed: AreaServedNode[];
}

export interface WebSiteNode {
  "@type": "WebSite";
  "@id": string;
  url: string;
  name: string;
  publisher: IdReference;
  inLanguage: string;
}

interface PeopleAudienceNode {
  "@type": "PeopleAudience";
  audienceType: string;
}

export interface ServiceNode {
  "@type": "Service";
  name: string;
  serviceType: string;
  provider: IdReference;
  areaServed: AreaServedNode[];
  audience: PeopleAudienceNode;
  description: string;
}

interface QuestionNode {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
}

export interface FaqPageNode {
  "@type": "FAQPage";
  mainEntity: QuestionNode[];
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export interface BlogNode {
  "@type": "Blog";
  "@id": string;
  name: string;
  url: string;
  publisher: IdReference;
  inLanguage: string;
}

interface ListItemNode {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

export interface BreadcrumbListNode {
  "@type": "BreadcrumbList";
  itemListElement: ListItemNode[];
}

export interface BreadcrumbItem {
  name: string;
  /** Path relative to the site origin, e.g. "/blog". */
  path: string;
}

interface PersonNode {
  "@type": "Person";
  name: string;
}

export interface BlogPostingNode {
  "@type": "BlogPosting";
  headline: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  author?: PersonNode;
  publisher: IdReference;
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
  inLanguage: string;
}

export interface BlogPostingInput {
  title: string;
  excerpt?: string | null;
  publishedAt?: string | null;
  updatedAt?: string | null;
  imageUrl?: string | null;
  authorName?: string | null;
  /** Absolute canonical URL of the post. */
  canonicalUrl: string;
}

function isNonEmptyString(value: string | null | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

const AREA_SERVED: AreaServedNode[] = [
  { "@type": "City", name: SITE.address.addressLocality },
  { "@type": "City", name: SITE.address.addressRegion },
];

/** The site-wide LocalBusiness / EducationalOrganization node. */
export function buildOrganizationNode(): OrganizationNode {
  return {
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "@id": ORGANIZATION_ID,
    name: SITE.brandName,
    url: SITE.origin,
    logo: absoluteUrl(SITE.logoImage),
    image: absoluteUrl(SITE.defaultOgImage),
    telephone: SITE.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    sameAs: [SITE.googleBusinessProfileUrl],
    areaServed: AREA_SERVED,
  };
}

/** The site-wide WebSite node. No site-search action: there is no internal search feature. */
export function buildWebSiteNode(): WebSiteNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.origin,
    name: SITE.brandName,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: SITE.language,
  };
}

export function buildServiceNode(params: {
  name: string;
  serviceType: string;
  description: string;
  audienceType: string;
}): ServiceNode {
  return {
    "@type": "Service",
    name: params.name,
    serviceType: params.serviceType,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: AREA_SERVED,
    audience: {
      "@type": "PeopleAudience",
      audienceType: params.audienceType,
    },
    description: params.description,
  };
}

export function buildFaqPageNode(faqs: readonly FaqEntry[]): FaqPageNode {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBlogNode(): BlogNode {
  return {
    "@type": "Blog",
    "@id": BLOG_ID,
    name: "BrainFit Günlüğü",
    url: absoluteUrl("/blog"),
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: SITE.language,
  };
}

export function buildBreadcrumbListNode(
  items: readonly BreadcrumbItem[],
): BreadcrumbListNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * Builds a BlogPosting node, omitting any property whose source value is
 * missing/empty rather than emitting null/undefined — Sanity content is
 * incomplete by nature, and schema.org consumers treat empty values as
 * errors rather than absent ones.
 */
export function buildBlogPostingNode(input: BlogPostingInput): BlogPostingNode {
  const node: BlogPostingNode = {
    "@type": "BlogPosting",
    headline: input.title,
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.canonicalUrl,
    },
    inLanguage: SITE.language,
  };

  if (isNonEmptyString(input.excerpt)) {
    node.description = input.excerpt;
  }
  if (isNonEmptyString(input.publishedAt)) {
    node.datePublished = input.publishedAt;
  }
  if (isNonEmptyString(input.updatedAt)) {
    node.dateModified = input.updatedAt;
  }
  if (isNonEmptyString(input.imageUrl)) {
    node.image = input.imageUrl;
  }
  if (isNonEmptyString(input.authorName)) {
    node.author = { "@type": "Person", name: input.authorName };
  }

  return node;
}

export function buildJsonLdGraph(nodes: JsonLdNode[]): JsonLdGraph {
  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": nodes,
  };
}
