import { absoluteUrl, SITE } from "@/lib/seo/site";

const catalog = {
  version: "1.0",
  service: {
    name: SITE.brandName,
    description:
      "BrainFit Karşıyaka'nın çocuklar ve yetişkinler için Zihin Check-Up ve bilişsel gelişim hizmetleri.",
    homepage: absoluteUrl("/"),
  },
  resources: [
    {
      id: "checkup-request",
      href: absoluteUrl("/api/checkup-request"),
      method: "POST",
      contentTypes: ["application/json", "application/x-www-form-urlencoded"],
      requiredFields: ["parentName", "phone"],
      oneOfRequiredFields: ["participantAge", "childAge"],
      description:
        "Ücretsiz ön görüşme talebini alır ve ekip tarafından geri dönüş için e-posta bildirimi oluşturur.",
    },
  ],
  representations: [
    {
      resource: absoluteUrl("/"),
      requestHeader: "Accept: text/markdown",
      responseContentType: "text/markdown",
      defaultContentType: "text/html",
    },
  ],
  documentation: absoluteUrl("/llms.txt"),
};

export function GET() {
  return Response.json(catalog, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
