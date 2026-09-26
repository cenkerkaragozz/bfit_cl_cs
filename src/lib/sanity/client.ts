import { createClient } from "next-sanity";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-06";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const hasSanityConfig = Boolean(projectId && dataset);

export const client = createClient({
  projectId: projectId || "brainfit-placeholder",
  dataset: dataset || "production",
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 300,
}: {
  query: string;
  params?: Record<string, unknown>;
  revalidate?: number;
}): Promise<T | null> {
  if (!hasSanityConfig) {
    return null;
  }

  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate },
    });
  } catch (error) {
    console.warn("Sanity fetch failed", error);
    return null;
  }
}
