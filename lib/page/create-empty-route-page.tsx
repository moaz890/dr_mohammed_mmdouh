import { setRequestLocale } from "next-intl/server";

import type { RouteKey } from "@/config/routes";
import type { AppLocale } from "@/i18n/routing";
import { createRouteMetadata } from "@/lib/seo/route-metadata";

type PageParams = {
  params: Promise<{ locale: AppLocale }>;
};

export function createEmptyRoutePage(routeKey: RouteKey) {
  async function generateMetadata({ params }: PageParams) {
    const { locale } = await params;
    return createRouteMetadata(locale, routeKey);
  }

  async function Page({ params }: PageParams) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <main id="main-content" tabIndex={-1} className="flex-1" />;
  }

  return { generateMetadata, Page };
}
