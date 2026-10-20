import type { MetadataRoute } from "next";

import { env } from "@/config/env";
import { getLocalizedPath, routePaths, sitemapRoutes } from "@/config/routes";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitemapRoutes.flatMap((routeKey) => {
    const path = routePaths[routeKey];

    return routing.locales.map((locale) => ({
      url: new URL(getLocalizedPath(path, locale), env.NEXT_PUBLIC_SITE_URL).toString(),
      lastModified,
      changeFrequency: routeKey === "home" ? ("weekly" as const) : ("monthly" as const),
      priority: routeKey === "home" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((altLocale) => [
            altLocale,
            new URL(
              getLocalizedPath(path, altLocale),
              env.NEXT_PUBLIC_SITE_URL,
            ).toString(),
          ]),
        ),
      },
    }));
  });
}
