import { setRequestLocale } from "next-intl/server";

import { ScrollRevealObserver } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import type { AppLocale } from "@/i18n/routing";
import { createRouteMetadata } from "@/lib/seo/route-metadata";

type ServicesPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: ServicesPageProps) {
  const { locale } = await params;
  return createRouteMetadata(locale, "services");
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      <ScrollRevealObserver />
      <Services />
    </main>
  );
}
