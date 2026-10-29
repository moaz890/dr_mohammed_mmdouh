import type { MetadataRoute } from "next";

import { env } from "@/config/env";
import { getLocalizedPath, routePaths, sitemapRoutes } from "@/config/routes";
import { getAllArticleSlugs } from "@/features/articles/data";
import { getAllServiceSlugs } from "@/features/services/data";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = sitemapRoutes.flatMap((routeKey) => {
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

  const articleSlugs = getAllArticleSlugs();
  const articleEntries = articleSlugs.flatMap((slug) =>
    routing.locales.map((locale) => ({
      url: new URL(
        getLocalizedPath(`/articles/${slug}`, locale),
        env.NEXT_PUBLIC_SITE_URL,
      ).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((altLocale) => [
            altLocale,
            new URL(
              getLocalizedPath(`/articles/${slug}`, altLocale),
              env.NEXT_PUBLIC_SITE_URL,
            ).toString(),
          ]),
        ),
      },
    })),
  );

  const serviceSlugs = getAllServiceSlugs();
  const serviceEntries = serviceSlugs.flatMap((slug) =>
    routing.locales.map((locale) => ({
      url: new URL(
        getLocalizedPath(`/services/${slug}`, locale),
        env.NEXT_PUBLIC_SITE_URL,
      ).toString(),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((altLocale) => [
            altLocale,
            new URL(
              getLocalizedPath(`/services/${slug}`, altLocale),
              env.NEXT_PUBLIC_SITE_URL,
            ).toString(),
          ]),
        ),
      },
    })),
  );

  return [...staticEntries, ...articleEntries, ...serviceEntries];
}
