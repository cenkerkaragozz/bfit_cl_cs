import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/videos/testimonials/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value:
              '</.well-known/api-catalog>; rel="api-catalog"; type="application/json", </.well-known/agent-description.json>; rel="service-desc"; type="application/json", </llms.txt>; rel="service-doc"; type="text/plain", </sitemap.xml>; rel="describedby"; type="application/xml"',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;

// Makes Cloudflare bindings (R2 cache, IMAGES, ...) available during `next dev`.
// Guarded and dynamically imported so the adapter is never loaded during a
// production build — this project also deploys to Vercel, which must stay
// unaware of the Cloudflare toolchain.
if (process.env.NODE_ENV === "development") {
  void import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) =>
    initOpenNextCloudflareForDev()
  );
}
