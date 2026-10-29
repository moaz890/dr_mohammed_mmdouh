import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { FaqAccordion } from "@/features/articles/components/faq-accordion";
import { FearsCard } from "@/features/articles/components/fears-card";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  getServices,
} from "@/features/services/data";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { createPageMetadata, loadDefaultMetadataContent } from "@/lib/seo/metadata";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type ServicePageProps = {
  params: Promise<{
    locale: AppLocale;
    slug: string;
  }>;
};

export function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  const paths: { locale: AppLocale; slug: string }[] = [];

  for (const locale of routing.locales) {
    for (const slug of slugs) {
      paths.push({ locale, slug });
    }
  }

  return paths;
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { locale, slug } = await params;
  const service = getServiceBySlug(locale, slug);

  if (!service) {
    return {};
  }

  const defaults = await loadDefaultMetadataContent(locale);

  return createPageMetadata({
    locale,
    pathname: `/services/${slug}`,
    title: `${service.title} | ${defaults.siteName}`,
    description: service.excerpt,
    siteName: defaults.siteName,
    images: [{ url: service.imageSrc }],
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getServiceBySlug(locale, slug);
  if (!service) {
    notFound();
  }

  const isAr = locale === "ar";
  const allServices = getServices(locale);
  const relatedServices = allServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const labels = {
    servicesCrumb: isAr ? "الخدمات" : "Services",
    overviewTitle: isAr ? "نظرة طبية شاملة على الإجراء" : "Clinical Overview",
    benefitsTitle: isAr
      ? "أبرز مميزات وفوائد الإجراء بالمنظار"
      : "Key Clinical Benefits",
    indicationsTitle: isAr ? "دواعي إجراء العملية" : "Clinical Indications",
    stepsTitle: isAr
      ? "خطوات الإجراء والتقنية الجراحية"
      : "Procedure Steps & Technique",
    stepPrefix: isAr ? "الخطوة" : "Step",
    recoveryTitle: isAr
      ? "خطة التعافي السريع بعد العملية"
      : "Rapid Recovery Plan (ERAS)",
    fearsSectionTitle: isAr
      ? "مخاوف المريضة الشائعة وحقيقتها الطبية"
      : "Patient Concerns vs. Medical Evidence",
    fearsSectionSubtitle: isAr
      ? "إجابات علمية موثقة من أكبر الجمعيات الطبية العالمية لتطمينك وتفنيد المفاهيم المغلوطة"
      : "Evidence-based clinical clarifications debunking common anxieties based on international guidelines.",
    fearLabel: isAr ? "المخاوف والأفكار المغلوطة" : "Common Anxiety / Misconception",
    realityLabel: isAr ? "الحقيقة الطبية المثبتة" : "Medical Evidence & Reality",
    evidenceSource: isAr ? "المرجع المعتمد" : "Clinical Source",
    faqSectionTitle: isAr
      ? "الأسئلة الشائعة حول الإجراء"
      : "Frequently Asked Questions",
    referencesSectionTitle: isAr
      ? "المراجع والأدلة الطبية العالمية المعتمدة"
      : "Verified Medical References & Guidelines",
    relatedServicesTitle: isAr ? "خدمات طبية ذات صلة" : "Related Medical Services",
    readRelatedArticle: isAr
      ? "اقرأي المقال الطبي التفصيلي"
      : "Read In-depth Medical Article",
    cta: {
      title: isAr
        ? "هل ترغبين في استشارة الدكتور محمد صالح حول حالتك؟"
        : "Need an Expert Consultation with Dr. Mohamed Saleh?",
      subtitle: isAr
        ? "تواصلي مباشرة مع الفريق الطبي عبر الواتساب أو احجزي موعدك في أقرب فرع عيادة (التجمع الخامس أو مدينتي)."
        : "Connect directly with our clinical team on WhatsApp or book an appointment at our clinics (New Cairo or Madinaty).",
      whatsappBtn: isAr ? "استشارة فورية عبر واتساب" : "Instant WhatsApp Inquiry",
      callBtn: isAr ? "اتصال هاتفي بالعيادة" : "Call Clinic",
      clinicsBtn: isAr ? "فروع العيادات والمواعيد" : "Clinics & Location Info",
    },
  };

  const whatsappUrl = buildWhatsAppUrl(
    isAr
      ? `مرحباً دكتور محمد صالح، أود الاستفسار وحجز موعد بخصوص خدمة: ${service.title}`
      : `Hello Dr. Mohamed Saleh, I would like to inquire about: ${service.title}`,
  );

  // Schema.org Structured Data for MedicalProcedure
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.excerpt,
    image: service.imageSrc,
    procedureType: "Surgical / Minimally Invasive",
    howPerformed: service.procedureSteps.map((s) => s.title).join(", "),
    performer: {
      "@type": "Physician",
      name: service.author.name,
      jobTitle: service.author.title,
      medicalSpecialty: "Obstetrics and Gynecology",
    },
    citation: service.references.map(
      (r) => `${r.organization}: ${r.title} (${r.year})`,
    ),
  };

  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="article-reader-container py-8 sm:py-12">
        {/* ── 1. Breadcrumbs ────────────────────────────────────────────── */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { routeKey: "services", label: labels.servicesCrumb },
              { label: service.categoryLabel },
            ]}
          />
        </div>

        {/* ── 2. Header & Title ─────────────────────────────────────────── */}
        <header className="article-reader-header">
          <span className="article-reader-category">
            <span>✨</span>
            <span>{service.categoryLabel}</span>
          </span>

          <h1 className="article-reader-title text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>

          <p className="article-reader-subtitle mt-3 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {service.subtitle}
          </p>

          {/* Doctor Trust Badge */}
          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-foreground">{service.author.name}</p>
              <p className="text-xs text-muted-foreground">
                {service.author.credentials}
              </p>
            </div>
          </div>
        </header>

        {/* ── 3. Hero Service Image ─────────────────────────────────────── */}
        <div className="relative mb-10 h-[22rem] w-full overflow-hidden rounded-2xl shadow-xl sm:h-[30rem]">
          <Image
            src={service.imageSrc}
            alt={service.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* ── 4. Key Clinical Benefits Box ──────────────────────────────── */}
        <section
          className="article-takeaways-box mb-10"
          aria-label={labels.benefitsTitle}
        >
          <div className="article-takeaways-header">
            <span>💎</span>
            <span>{labels.benefitsTitle}</span>
          </div>
          <ul className="article-takeaways-list">
            {service.keyBenefits.map((benefit, idx) => (
              <li key={idx} className="article-takeaways-item">
                <span className="article-takeaways-bullet">✔</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 5. Clinical Overview & Indications ────────────────────────── */}
        <section className="my-10 space-y-6">
          <h2 className="text-2xl font-black text-foreground sm:text-3xl">
            {labels.overviewTitle}
          </h2>
          {service.overview.map((para, idx) => (
            <p
              key={idx}
              className="text-base leading-relaxed text-foreground/85 sm:text-lg"
            >
              {para}
            </p>
          ))}

          {/* Indications Box */}
          <div className="mt-8 rounded-2xl border border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]/5 p-6 sm:p-8">
            <h3 className="mb-4 text-xl font-bold text-[var(--brand-blue)]">
              📋 {labels.indicationsTitle}
            </h3>
            <ul className="space-y-3">
              {service.indications.map((ind, idx) => (
                <li key={idx} className="flex items-start gap-3 text-foreground/90">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-blue)]" />
                  <span className="font-medium">{ind}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 6. Procedure Steps ────────────────────────────────────────── */}
        <section className="my-12">
          <h2 className="mb-6 text-2xl font-black text-foreground sm:text-3xl">
            ⚙️ {labels.stepsTitle}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.procedureSteps.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-[var(--brand-blue)]/40 hover:shadow-md"
              >
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-[var(--brand-blue)]/10 px-3 py-1 text-xs font-bold text-[var(--brand-blue)]">
                    <span>{labels.stepPrefix}</span>
                    <span>{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. Patient Fears vs Reality ───────────────────────────────── */}
        <FearsCard
          fears={service.fears}
          labels={{
            sectionTitle: labels.fearsSectionTitle,
            sectionSubtitle: labels.fearsSectionSubtitle,
            fearLabel: labels.fearLabel,
            realityLabel: labels.realityLabel,
            evidenceSource: labels.evidenceSource,
          }}
        />

        {/* ── 8. Recovery Timeline ──────────────────────────────────────── */}
        <section className="my-12">
          <h2 className="mb-6 text-2xl font-black text-foreground sm:text-3xl">
            ⏳ {labels.recoveryTitle}
          </h2>
          <div className="space-y-4">
            {service.recoveryTimeline.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="sm:w-1/3">
                  <span className="inline-block rounded-md bg-[var(--brand-pink)]/10 px-2.5 py-1 text-xs font-bold text-[var(--brand-pink)]">
                    {item.duration}
                  </span>
                  <h4 className="mt-1 font-bold text-foreground">{item.phase}</h4>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:w-2/3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 9. Interactive FAQ Accordion ──────────────────────────────── */}
        <FaqAccordion faqs={service.faqs} sectionTitle={labels.faqSectionTitle} />

        {/* ── 10. Verified Medical References ───────────────────────────── */}
        {service.references.length > 0 && (
          <section className="article-references-box my-10">
            <h3 className="article-references-header">
              📚 {labels.referencesSectionTitle}
            </h3>
            <div>
              {service.references.map((ref, idx) => (
                <div key={idx} className="article-reference-card">
                  <h4 className="article-reference-title">{ref.title}</h4>
                  <p className="article-reference-meta">
                    <strong>{ref.organization}</strong> ({ref.year}) — {ref.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 11. Cross-link to Related Educational Article ─────────────── */}
        {service.relatedArticleSlug && (
          <div className="my-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-muted/40 p-6 sm:flex-row">
            <div>
              <span className="text-xs font-bold text-[var(--brand-blue)]">
                📖 {isAr ? "ثقافة طبية موثقة" : "Medical Article"}
              </span>
              <p className="mt-1 font-bold text-foreground">
                {labels.readRelatedArticle}
              </p>
            </div>
            <Link
              href={`/articles/${service.relatedArticleSlug}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[var(--brand-blue)] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-[var(--brand-blue)]/90"
            >
              <span>{isAr ? "قراءة المقال الطبي" : "Read Article"}</span>
              <span className="rtl:rotate-180">→</span>
            </Link>
          </div>
        )}

        {/* ── 12. Doctor Consultation CTA Banner ────────────────────────── */}
        <section className="my-12 rounded-3xl bg-gradient-to-br from-[#1f4f60] to-[#163844] p-8 text-center text-white shadow-xl sm:p-12">
          <h3 className="text-2xl font-black sm:text-3xl">{labels.cta.title}</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            {labels.cta.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105"
            >
              <span>💬</span>
              <span>{labels.cta.whatsappBtn}</span>
            </a>

            <a
              href="tel:01050600032"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/20"
            >
              <span>📞</span>
              <span>
                {labels.cta.callBtn}: <bdi>01050600032</bdi>
              </span>
            </a>

            <Link
              href="/clinics"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#1f4f60] shadow-md transition-all hover:bg-white/90"
            >
              <span>📍</span>
              <span>{labels.cta.clinicsBtn}</span>
            </Link>
          </div>
        </section>

        {/* ── 13. Related Services ──────────────────────────────────────── */}
        {relatedServices.length > 0 && (
          <section className="my-14">
            <h3 className="mb-6 text-2xl font-black text-foreground">
              {labels.relatedServicesTitle}
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {relatedServices.map((rel) => (
                <article
                  key={rel.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-[var(--brand-blue)]/40 hover:shadow-lg"
                >
                  <Link
                    href={`/services/${rel.slug}`}
                    className="relative h-44 w-full overflow-hidden"
                  >
                    <Image
                      src={rel.imageSrc}
                      alt={rel.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute start-3 top-3 rounded-md bg-black/60 px-2 py-1 text-xs font-bold text-white backdrop-blur">
                      {rel.categoryLabel}
                    </span>
                  </Link>

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <Link href={`/services/${rel.slug}`}>
                        <h4 className="font-bold text-foreground transition-colors group-hover:text-[var(--brand-blue)] line-clamp-2">
                          {rel.title}
                        </h4>
                      </Link>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>

                    <Link
                      href={`/services/${rel.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--brand-blue)]"
                    >
                      <span>{isAr ? "تفاصيل الخدمة الطبية" : "View Details"}</span>
                      <span className="rtl:rotate-180">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
