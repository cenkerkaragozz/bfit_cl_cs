import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/sanity/queries";
import { absoluteUrl } from "@/lib/seo/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/yetiskinler"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  // `getAllPostSlugs` (via `sanityFetch`) already returns [] instead of
  // throwing when Sanity is unconfigured or the request fails, but this is
  // wrapped defensively so the sitemap route can never break the build.
  let postRoutes: MetadataRoute.Sitemap = [];

  try {
    const posts = await getAllPostSlugs();
    postRoutes = posts
      .filter((post) => !post.noindex)
      .map((post) => {
        const lastModifiedSource = post.updatedAt ?? post.publishedAt;

        return {
          url: absoluteUrl(`/blog/${post.slug}`),
          lastModified: lastModifiedSource ? new Date(lastModifiedSource) : undefined,
          changeFrequency: "monthly",
          priority: 0.6,
        };
      });
  } catch (error) {
    console.warn("Sitemap: failed to load blog posts", error);
  }

  return [...staticRoutes, ...postRoutes];
}
