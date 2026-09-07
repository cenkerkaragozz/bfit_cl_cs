import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function acceptsMarkdown(value: string | null) {
  return (
    value?.split(",").some((entry) => {
      const [mediaType, ...parameters] = entry.trim().toLowerCase().split(";");

      if (mediaType !== "text/markdown") return false;

      const quality = parameters
        .map((parameter) => parameter.trim())
        .find((parameter) => parameter.startsWith("q="))
        ?.slice(2);

      return quality === undefined || Number(quality) > 0;
    }) ?? false
  );
}

export function proxy(request: NextRequest) {
  if (
    (request.method === "GET" || request.method === "HEAD") &&
    acceptsMarkdown(request.headers.get("accept"))
  ) {
    return NextResponse.rewrite(new URL("/.well-known/markdown", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
