import { getTranslations, setRequestLocale } from "next-intl/server";

import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { ScrollRevealObserver } from "@/components/sections/about";
import { CtaSection } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";
import { LocationsSection } from "@/components/sections/locations";
import type { AppLocale } from "@/i18n/routing";
import { createRouteMetadata } from "@/lib/seo/route-metadata";

type ClinicsPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: ClinicsPageProps) {
  const { locale } = await params;
  return createRouteMetadata(locale, "clinics");
}

export default async function ClinicsPage({ params }: ClinicsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "clinicsPage" });

  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      <ScrollRevealObserver />

      {/* ── 1. Hero Header & Breadcrumbs ─────────────────────────────────── */}
      <section className="clinics-page-hero">
        <div className="clinics-page-hero-container">
          <div className="clinics-breadcrumbs-wrapper">
            <Breadcrumbs items={[{ routeKey: "clinics" }]} />
          </div>

          <span className="clinics-page-badge">{t("badge")}</span>
          <h1 className="clinics-page-title">{t("title")}</h1>
          <p className="clinics-page-subtitle">{t("subtitle")}</p>

          <div className="clinics-features-pills">
            <div className="clinics-pill">
              <span className="clinics-pill-icon" aria-hidden="true">
                ✓
              </span>
              <span>{t("features.reservation")}</span>
            </div>
            <div className="clinics-pill">
              <span className="clinics-pill-icon" aria-hidden="true">
                ✓
              </span>
              <span>{t("features.sonar")}</span>
            </div>
            <div className="clinics-pill">
              <span className="clinics-pill-icon" aria-hidden="true">
                ✓
              </span>
              <span>{t("features.parking")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Full Interactive Locations & Map Tabs ─────────────────────── */}
      <LocationsSection />

      {/* ── 3. Step-by-Step Booking Guide ─────────────────────────────────── */}
      <section
        className="clinics-guide-section"
        aria-labelledby="clinics-guide-heading"
      >
        <div className="clinics-guide-container">
          <div className="clinics-guide-header">
            <h2 id="clinics-guide-heading" className="clinics-guide-title">
              {t("bookingGuide.title")}
            </h2>
            <p className="clinics-guide-subtitle">{t("bookingGuide.subtitle")}</p>
          </div>

          <div className="clinics-guide-grid">
            <div className="clinics-step-card">
              <div className="clinics-step-num-badge">01</div>
              <h3 className="clinics-step-title">{t("bookingGuide.step1Title")}</h3>
              <p className="clinics-step-desc">{t("bookingGuide.step1Desc")}</p>
            </div>

            <div className="clinics-step-card">
              <div className="clinics-step-num-badge">02</div>
              <h3 className="clinics-step-title">{t("bookingGuide.step2Title")}</h3>
              <p className="clinics-step-desc">{t("bookingGuide.step2Desc")}</p>
            </div>

            <div className="clinics-step-card">
              <div className="clinics-step-num-badge">03</div>
              <h3 className="clinics-step-title">{t("bookingGuide.step3Title")}</h3>
              <p className="clinics-step-desc">{t("bookingGuide.step3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Frequently Asked Questions ─────────────────────────────────── */}
      <FaqSection />

      {/* ── 5. Direct Booking Call to Action ──────────────────────────────── */}
      <CtaSection />
    </main>
  );
}
