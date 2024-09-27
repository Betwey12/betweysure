import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host");
  const protocol = req.headers.get("x-forwarded-proto") || "http";

  // Check if the protocol is http or if the host doesn't start with "www."
  if (
    (protocol === "http" || host?.slice(0, 4) !== "www.") &&
    !host?.includes("localhost")
  ) {
    // Fix the host by adding "www." if missing
    const correctedHost = host?.slice(0, 4) === "www." ? host : `www.${host}`;

    // Preserve the query parameters by appending req.nextUrl.search
    const redirectUrl = `https://${correctedHost}${req.nextUrl.pathname}${req.nextUrl.search}`;

    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}
