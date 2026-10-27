import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

import { JsonLd } from "@/components/common/json-ld";
import { ScrollRevealObserver } from "@/components/sections/about";
import { CtaSection } from "@/components/sections/cta";
import { DoctorBrief } from "@/components/sections/doctor-brief";
import { FaqSection } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { LocationsSection } from "@/components/sections/locations";
import { ReelsSection } from "@/components/sections/reels";
import { Services } from "@/components/sections/services";
import { SocialSection } from "@/components/sections/social";
import { Stats } from "@/components/sections/stats";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { VisionSection } from "@/components/sections/vision";
import { env } from "@/config/env";
import { getLocalizedPath } from "@/config/routes";
import type { AppLocale } from "@/i18n/routing";
import { createPhysicianJsonLd } from "@/lib/seo/json-ld";
import { createRouteMetadata } from "@/lib/seo/route-metadata";

type HomePageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;
  return createRouteMetadata(locale, "home");
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "seo.physician" });
  const pageUrl = new URL(
    getLocalizedPath("/", locale),
    env.NEXT_PUBLIC_SITE_URL,
  ).toString();

  const structuredData = createPhysicianJsonLd({
    locale,
    jobTitle: t("jobTitle"),
    medicalSpecialty: t("medicalSpecialty"),
    pageUrl,
  });

  return (
    <>
      <JsonLd data={structuredData} />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <ScrollRevealObserver />
        <Hero />
        <Stats />
        <DoctorBrief />
        <TestimonialsSection />
        <Services />
        <ReelsSection />
        <VisionSection />
        <FaqSection />
        <LocationsSection />
        <CtaSection />
        <SocialSection />
      </main>
    </>
  );
}
