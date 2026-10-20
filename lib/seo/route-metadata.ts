import type { RouteKey } from "@/config/routes";
import { routePaths } from "@/config/routes";
import type { AppLocale } from "@/i18n/routing";
import { createPageMetadata, loadDefaultMetadataContent } from "@/lib/seo/metadata";

export async function createRouteMetadata(locale: AppLocale, routeKey: RouteKey) {
  const { getTranslations } = await import("next-intl/server");
  const tRoutes = await getTranslations({
    locale,
    namespace: "navigation.routes",
  });
  const defaults = await loadDefaultMetadataContent(locale);
  const pathname = routePaths[routeKey];

  return createPageMetadata({
    locale,
    pathname,
    title: `${tRoutes(routeKey)} | ${defaults.siteName}`,
    description: defaults.description,
    siteName: defaults.siteName,
  });
}
