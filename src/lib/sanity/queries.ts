import { sanityFetch } from "@/lib/sanity/client";

export type PostCard = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  updatedAt?: string;
  commentCount?: number;
  cardImage?: {
    alt?: string;
    asset?: unknown;
    [key: string]: unknown;
  };
  mainImage?: {
    alt?: string;
    asset?: unknown;
    [key: string]: unknown;
  };
  author?: {
    name?: string;
    image?: unknown;
  };
  categories?: { title: string }[];
  body?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: {
    alt?: string;
    asset?: unknown;
    [key: string]: unknown;
  };
  noindex?: boolean;
};

const postFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  updatedAt,
  commentCount,
  cardImage,
  mainImage,
  author->{name, image},
  categories[]->{title},
  seoTitle,
  seoDescription,
  ogImage,
  noindex
`;

export async function getLatestPosts(): Promise<PostCard[]> {
  const posts = await sanityFetch<PostCard[]>({
    query: `*[_type == "post" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc)[0...3] {
      ${postFields}
    }`,
  });

  return posts ?? [];
}

export async function getAllPosts(): Promise<PostCard[]> {
  const posts = await sanityFetch<PostCard[]>({
    query: `*[_type == "post" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc) {
      ${postFields}
    }`,
  });

  return posts ?? [];
}

export async function getPostBySlug(slug: string): Promise<PostCard | null> {
  return sanityFetch<PostCard>({
    query: `*[_type == "post" && slug.current == $slug][0] {
      ${postFields},
      body
    }`,
    params: { slug },
  });
}

export type PostSitemapEntry = {
  slug: string;
  publishedAt?: string;
  updatedAt?: string;
  noindex?: boolean;
};

export async function getAllPostSlugs(): Promise<PostSitemapEntry[]> {
  const posts = await sanityFetch<PostSitemapEntry[]>({
    query: `*[_type == "post" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc) {
      "slug": slug.current,
      publishedAt,
      updatedAt,
      noindex
    }`,
  });

  return posts ?? [];
}
