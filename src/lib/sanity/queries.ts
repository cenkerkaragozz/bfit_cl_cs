import { sanityFetch } from "@/lib/sanity/client";

export type PostCard = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
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
};

const postFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  commentCount,
  cardImage,
  mainImage,
  author->{name, image},
  categories[]->{title}
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
