import { childFaqs } from "@/lib/faq-data";
import { getLatestPosts } from "@/lib/sanity/queries";
import { absoluteUrl, SITE } from "@/lib/seo/site";

function cleanLine(value: string | undefined) {
  return value?.replace(/[\r\n]+/g, " ").trim() ?? "";
}

function estimateMarkdownTokens(markdown: string) {
  return Math.ceil(markdown.length / 4);
}

export async function GET() {
  const posts = await getLatestPosts();
  const lines = [
    `# ${SITE.brandName}`,
    "",
    "> Çocuğunuzun yaşadığı zorluğun nedenini birlikte keşfedelim.",
    "",
    "BrainFit Karşıyaka, çocuklar ve yetişkinler için bilişsel becerileri anlamaya ve kişiye özel gelişim planı oluşturmaya yardımcı olan Zihin Check-Up hizmeti sunar.",
    "",
    "## Zihin Check-Up",
    "",
    "- Bilimsel değerlendirme ile güçlü yönleri ve desteğe ihtiyaç duyulan alanları görünür kılmaya yardımcı olur.",
    "- Değerlendirme sonunda kişisel bilişsel profil ve bu profile uygun gelişim planı paylaşılır.",
    "- Hizmet tıbbi tanı veya tedavi amacı taşımaz.",
    "",
    "## Site bölümleri",
    "",
    `- [Çocuklar](${absoluteUrl("/")})`,
    `- [Yetişkinler](${absoluteUrl("/yetiskinler")})`,
    `- [Blog](${absoluteUrl("/blog")})`,
    "",
    "## Sık sorulan sorular",
    "",
    ...childFaqs.flatMap((faq) => [
      `### ${cleanLine(faq.question)}`,
      "",
      cleanLine(faq.answer),
      "",
    ]),
    "## Güncel yazılar",
    "",
  ];

  if (posts.length === 0) {
    lines.push("Henüz yayınlanmış bir içerik bulunmuyor.");
  } else {
    for (const post of posts) {
      lines.push(
        `- [${cleanLine(post.title)}](${absoluteUrl(`/blog/${post.slug}`)})${
          post.excerpt ? ` — ${cleanLine(post.excerpt)}` : ""
        }`,
      );
    }
  }

  lines.push(
    "",
    "## İletişim",
    "",
    `- Telefon: ${SITE.telephone}`,
    `- [Ücretsiz ön görüşme formu](${absoluteUrl("/#checkup-form")})`,
    `- [API kataloğu](${absoluteUrl("/.well-known/api-catalog")})`,
  );

  const markdown = `${lines.join("\n").trim()}\n`;

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Language": SITE.language,
      "Content-Location": "/",
      Vary: "Accept",
      "x-markdown-tokens": String(estimateMarkdownTokens(markdown)),
    },
  });
}
