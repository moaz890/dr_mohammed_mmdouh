import { setRequestLocale } from "next-intl/server";

import { ScrollRevealObserver } from "@/components/sections/about";
import { ReelsSection } from "@/components/sections/reels";
import type { AppLocale } from "@/i18n/routing";
import { createRouteMetadata } from "@/lib/seo/route-metadata";

type VideosPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: VideosPageProps) {
  const { locale } = await params;
  return createRouteMetadata(locale, "videos");
}

export default async function VideosPage({ params }: VideosPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      <ScrollRevealObserver />
      <ReelsSection />
    </main>
  );
}
