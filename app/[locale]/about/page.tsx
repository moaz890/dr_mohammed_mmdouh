import { setRequestLocale } from "next-intl/server";

import {
  Articles,
  BookingCta,
  Clinics,
  Credentials,
  Faq,
  Philosophy,
  ScrollRevealObserver,
  Specialties,
  Tips,
} from "@/components/sections/about";
import { DoctorBrief } from "@/components/sections/doctor-brief";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import type { AppLocale } from "@/i18n/routing";
import { createRouteMetadata } from "@/lib/seo/route-metadata";

type AboutPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: AboutPageProps) {
  const { locale } = await params;
  return createRouteMetadata(locale, "about");
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      <ScrollRevealObserver />
      <Hero />
      <Stats />
      <DoctorBrief showFullCta={false} />
      <Philosophy />
      <Credentials />
      <Specialties />
      <Tips />
      <Articles />
      <Faq />
      <Clinics />
      <BookingCta />
    </main>
  );
}
