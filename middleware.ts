import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(ar|en)/:path*",
    // Exclude: Next.js internals, static files, and API routes from locale middleware
    "/((?!_next|_next/static|_next/image|api|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
