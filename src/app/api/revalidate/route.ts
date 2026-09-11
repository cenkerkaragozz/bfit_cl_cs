import { revalidatePath } from "next/cache";
import { parseBody } from "next-sanity/webhook";
import type { NextRequest } from "next/server";

type WebhookPayload = {
  _type?: string;
  slug?: string;
};

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return Response.json({ message: "Invalid signature" }, { status: 401 });
    }

    if (!body?._type) {
      return Response.json({ message: "Bad Request" }, { status: 400 });
    }

    revalidatePath("/");
    revalidatePath("/blog");
    revalidatePath("/yetiskinler");
    revalidatePath("/sitemap.xml");

    if (body._type === "post" && body.slug) {
      revalidatePath(`/blog/${body.slug}`);
    }

    return Response.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    console.error("Revalidate webhook failed", error);
    return Response.json({ message: "Error revalidating" }, { status: 500 });
  }
}
