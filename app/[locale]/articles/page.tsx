import Image from "next/image";
import { setRequestLocale } from "next-intl/server";

import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CategoryFilter } from "@/features/articles/components/category-filter";
import { getArticles } from "@/features/articles/data";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { createPageMetadata, loadDefaultMetadataContent } from "@/lib/seo/metadata";

type ArticlesPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: ArticlesPageProps) {
  const { locale } = await params;
  const defaults = await loadDefaultMetadataContent(locale);

  const title =
    locale === "ar"
      ? `المقالات الطبية والتثقيف الصحي | ${defaults.siteName}`
      : `Clinical Articles & Patient Education | ${defaults.siteName}`;

  const description =
    locale === "ar"
      ? "دليل طبي شامل موثق من مراجع عالمية (ACOG و RCOG و ESHRE) يجيب على مخاوف وتساؤلات المريضات حول الولادة بدون ألم، الحمل الحرج، والحقن المجهري."
      : "Evidence-based clinical guidance and patient education answering fears around painless childbirth, high-risk pregnancy, and reproductive surgery.";

  return createPageMetadata({
    locale,
    pathname: "/articles",
    title,
    description,
    siteName: defaults.siteName,
  });
}

export default async function ArticlesPage({ params }: ArticlesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const articles = getArticles(locale);
  const featuredArticle = articles[0]; // painless-delivery is top priority

  const isAr = locale === "ar";

  const labels = {
    eyebrow: isAr ? "التثقيف الطبي الموثق" : "Evidence-Based Patient Education",
    title: isAr
      ? "دليلك الطبي الشامل للإجابة عن كل تساؤلاتك ومخاوفك"
      : "Clinical Articles & Medical Reassurance",
    subtitle: isAr
      ? "مقالات استشارية موثقة وفق أحدث إرشادات الكليات الملكية والأمريكية (ACOG, RCOG, ESHRE) لمساعدتك في اتخاذ قرارات صحية واعية ومطمئنة."
      : "Authoritative medical guides addressing patient anxieties, clinical evidence, and actionable advice from leading international obstetric societies.",
    featuredBadge: isAr ? "المقال المميز الأكثر قراءة" : "Featured Article",
    readTimeMinutes: isAr ? "دقائق قراءة" : "min read",
    readArticle: isAr ? "قراءة الدليل بالكامل" : "Read Full Guide",
    verifiedBy: isAr
      ? "معتمد ومراجع من أ.د. محمد ممدوح صالح"
      : "Medically Reviewed by Prof. Dr. Mohamed Saleh",
    all: isAr ? "جميع المقالات" : "All Articles",
    searchPlaceholder: isAr
      ? "ابحث في موضوعات المقالات..."
      : "Search clinical topics...",
    noResults: isAr
      ? "لم نجد مقالات تطابق بحثك حالياً."
      : "No articles found matching your criteria.",
    trustBadgeTitle: isAr
      ? "معايير الاعتماد الطبي والموثوقية"
      : "Clinical Standards & Reliable Evidence",
    trustBadgeDesc: isAr
      ? "جميع المعلومات المنشورة في هذه المقالات تستند مباشرة إلى الإرشادات السريرية للكلية الأمريكية لأطباء النساء والتوليد (ACOG)، الكلية الملكية البريطانية (RCOG)، والجمعية الأوروبية للتناسل البشري والأجنة (ESHRE)."
      : "Every recommendation within these articles is strictly aligned with clinical guidelines from ACOG, RCOG, ESHRE, and the European Society for Gynaecological Endoscopy (ESGE).",
  };

  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      {/* ── 1. Header & Breadcrumbs ─────────────────────────────────────── */}
      <section className="articles-hub-hero">
        <div className="articles-hub-container">
          <div className="mb-4">
            <Breadcrumbs items={[{ routeKey: "articles" }]} />
          </div>

          <span className="articles-hub-badge">{labels.eyebrow}</span>
          <h1 className="articles-hub-title">{labels.title}</h1>
          <p className="articles-hub-subtitle">{labels.subtitle}</p>
        </div>
      </section>

      <div className="articles-hub-container py-10">
        {/* ── 2. Featured Article Spotlight ───────────────────────────────── */}
        {featuredArticle && (
          <section aria-label="Featured Article">
            <div className="article-featured-card">
              <div className="article-featured-image-wrapper">
                <Image
                  src={featuredArticle.imageSrc}
                  alt={featuredArticle.title}
                  fill
                  priority
                  className="article-featured-image"
                />
              </div>

              <div className="article-featured-body">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-[var(--brand-pink-muted)] px-3 py-1 text-xs font-bold text-[var(--brand-pink)]">
                    ⭐ {labels.featuredBadge}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">
                    ⏱️ {featuredArticle.readTimeMinutes} {labels.readTimeMinutes}
                  </span>
                </div>

                <Link href={`/articles/${featuredArticle.slug}`}>
                  <h2 className="mb-3 text-xl font-black text-foreground hover:text-[var(--brand-blue)] sm:text-2xl">
                    {featuredArticle.title}
                  </h2>
                </Link>

                <p className="mb-6 text-sm text-muted-foreground line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
                  <span className="text-xs font-semibold text-muted-foreground">
                    ✓ {labels.verifiedBy}
                  </span>
                  <Link
                    href={`/articles/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-blue)] px-5 py-2 text-sm font-bold text-white shadow-md transition hover:bg-[var(--brand-blue)]/90"
                  >
                    <span>{labels.readArticle}</span>
                    <span aria-hidden="true">{isAr ? "←" : "→"}</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 3. Categorized Articles Grid ─────────────────────────────────── */}
        <CategoryFilter articles={articles} locale={locale} labels={labels} />

        {/* ── 4. Clinical Evidence Trust Banner ────────────────────────────── */}
        <section className="mt-8 rounded-2xl border border-[var(--brand-blue)]/20 bg-[var(--brand-blue-muted)]/50 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-blue)] text-2xl text-white shadow-md">
              🛡️
            </div>
            <div>
              <h3 className="text-lg font-black text-foreground">
                {labels.trustBadgeTitle}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {labels.trustBadgeDesc}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
