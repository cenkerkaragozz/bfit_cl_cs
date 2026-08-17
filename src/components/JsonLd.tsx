import type { JsonLdGraph } from "@/lib/seo/jsonld";

/**
 * Renders a single JSON-LD `<script>` tag for a `@graph` of structured-data
 * nodes. Per the Next.js JSON-LD guide, `JSON.stringify` output must have
 * `<` escaped before going into `dangerouslySetInnerHTML` — CMS-sourced
 * strings (post titles/excerpts) flow into this payload, and an unescaped
 * `</script>` would break out of the tag.
 */
export function JsonLd({ graph }: { graph: JsonLdGraph }) {
  const json = JSON.stringify(graph).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
