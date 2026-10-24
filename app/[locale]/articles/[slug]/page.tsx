import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { ArticleAuthorBadge } from "@/features/articles/components/article-author-badge";
import { ArticleCta } from "@/features/articles/components/article-cta";
import { FaqAccordion } from "@/features/articles/components/faq-accordion";
import { FearsCard } from "@/features/articles/components/fears-card";
import {
  getAllArticleSlugs,
  getArticleBySlug,
  getArticles,
} from "@/features/articles/data";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { createPageMetadata, loadDefaultMetadataContent } from "@/lib/seo/metadata";

type ArticlePageProps = {
  params: Promise<{
    locale: AppLocale;
    slug: string;
  }>;
};

export function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  const paths: { locale: AppLocale; slug: string }[] = [];

  for (const locale of routing.locales) {
    for (const slug of slugs) {
      paths.push({ locale, slug });
    }
  }

  return paths;
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(locale, slug);

  if (!article) {
    return {};
  }

  const defaults = await loadDefaultMetadataContent(locale);

  return createPageMetadata({
    locale,
    pathname: `/articles/${slug}`,
    title: `${article.title} | ${defaults.siteName}`,
    description: article.excerpt,
    siteName: defaults.siteName,
    images: [{ url: article.imageSrc }],
  });
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = getArticleBySlug(locale, slug);
  if (!article) {
    notFound();
  }

  const isAr = locale === "ar";
  const allArticles = getArticles(locale);
  const relatedArticles = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  const labels = {
    articlesCrumb: isAr ? "المقالات" : "Articles",
    keyTakeawaysTitle: isAr
      ? "أهم النقاط السريعة والموجز السريري"
      : "Key Takeaways & Clinical Summary",
    fearsSectionTitle: isAr
      ? "مخاوف المريضة الشائعة وحقيقتها الطبية"
      : "Patient Fears vs. Medical Reality",
    fearsSectionSubtitle: isAr
      ? "إجابات علمية دقيقة تطمئنك وتفند المخاوف والمفاهيم المغلوطة بالاستناد إلى الدراسات المعتمدة"
      : "Evidence-based clinical clarifications debunking common anxieties and misconceptions.",
    fearLabel: isAr ? "المخاوف والأفكار المغلوطة" : "Common Fear / Misconception",
    realityLabel: isAr ? "الحقيقة الطبية المثبتة" : "Medical Evidence & Reality",
    evidenceSource: isAr ? "المرجع المعتمد" : "Clinical Source",
    adviceSectionTitle: isAr
      ? "نصائح وإرشادات ذهبية للمريضة"
      : "Doctor's Advice & Patient Guidance",
    warningSignsTitle: isAr
      ? "علامات الخطر التي تستدعي التواصل الفوري"
      : "Red Flags Requiring Immediate Attention",
    faqSectionTitle: isAr
      ? "الأسئلة الشائعة وإجابات الطبيب"
      : "Frequently Asked Questions",
    referencesSectionTitle: isAr
      ? "المراجع والأدلة الطبية العالمية المعتمدة"
      : "Verified Medical References & Guidelines",
    medicallyReviewedBy: isAr ? "مراجع ومعتمد طبياً" : "Medically Reviewed",
    readTime: isAr ? "دقائق قراءة" : "min read",
    publishedOn: isAr ? "تاريخ النشر:" : "Published:",
    relatedArticlesTitle: isAr ? "مقالات طبية ذات صلة" : "Related Medical Articles",
    cta: {
      title: isAr
        ? "هل لديك استفسار خاص بحالتك أو ترغبين في استشارة الطبيب؟"
        : "Have Specific Questions About Your Condition?",
      subtitle: isAr
        ? "احجزي موعد كشف أو استشيري الفريق الطبي مباشرة عبر الواتساب للحصول على تقييم فردي دقيق."
        : "Book a consultation or message our clinical team on WhatsApp for personalized evaluation.",
      whatsappBtn: isAr ? "استشارة فورية عبر واتساب" : "Instant WhatsApp Inquiry",
      bookAppointmentBtn: isAr
        ? "فروع العيادات ومواعيد الكشف"
        : "Clinics & Appointments",
      whatsappMessagePrefix: isAr
        ? "مرحباً دكتور، أود الاستفسار بخصوص مقال"
        : "Hello Doctor, I would like to inquire regarding the article",
    },
  };

  // Structured Data (JSON-LD) for MedicalWebPage / Article SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: article.title,
    description: article.excerpt,
    image: [article.imageSrc],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.title,
    },
    medicalAudience: "Patients",
    about: {
      "@type": "MedicalCondition",
      name: article.categoryLabel,
    },
    citation: article.references.map(
      (r) => `${r.organization}: ${r.title} (${r.year})`,
    ),
  };

  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="article-reader-container">
        {/* ── 1. Breadcrumbs & Category ─────────────────────────────────── */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { routeKey: "articles", label: labels.articlesCrumb },
              { label: article.categoryLabel },
            ]}
          />
        </div>

        {/* ── 2. Header & Title ─────────────────────────────────────────── */}
        <header className="article-reader-header">
          <span className="article-reader-category">
            <span>🏷️</span>
            <span>{article.categoryLabel}</span>
          </span>

          <h1 className="article-reader-title">{article.title}</h1>
          <p className="article-reader-subtitle">{article.subtitle}</p>

          <ArticleAuthorBadge
            author={article.author}
            publishedAt={article.publishedAt}
            readTimeMinutes={article.readTimeMinutes}
            labels={{
              medicallyReviewedBy: labels.medicallyReviewedBy,
              readTime: labels.readTime,
              publishedOn: labels.publishedOn,
            }}
          />
        </header>

        {/* ── 3. Main Hero Image ────────────────────────────────────────── */}
        <div className="relative mb-8 h-[22rem] w-full overflow-hidden rounded-2xl shadow-lg sm:h-[28rem]">
          <Image
            src={article.imageSrc}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* ── 4. Key Takeaways Box ──────────────────────────────────────── */}
        <section
          className="article-takeaways-box"
          aria-label={labels.keyTakeawaysTitle}
        >
          <div className="article-takeaways-header">
            <span>💡</span>
            <span>{labels.keyTakeawaysTitle}</span>
          </div>
          <ul className="article-takeaways-list">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="article-takeaways-item">
                <span className="article-takeaways-bullet">✔</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 5. Patient Fears vs Reality Section ───────────────────────── */}
        <FearsCard
          fears={article.fears}
          labels={{
            sectionTitle: labels.fearsSectionTitle,
            sectionSubtitle: labels.fearsSectionSubtitle,
            fearLabel: labels.fearLabel,
            realityLabel: labels.realityLabel,
            evidenceSource: labels.evidenceSource,
          }}
        />

        {/* ── 6. Clinical Core Content Sections ─────────────────────────── */}
        <section className="my-10 space-y-8">
          {article.sections.map((section) => (
            <div key={section.id} className="space-y-4">
              <h2 className="text-2xl font-black text-foreground">{section.title}</h2>
              {section.content.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-base leading-relaxed text-foreground/85 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </section>

        {/* ── 7. Actionable Patient Advice & Tips ───────────────────────── */}
        {article.advices && article.advices.length > 0 && (
          <section className="my-10">
            <h2 className="mb-6 text-2xl font-black text-foreground">
              {labels.adviceSectionTitle}
            </h2>
            <div className="article-advice-grid">
              {article.advices.map((adv) => (
                <div key={adv.id} className={`article-advice-card type-${adv.type}`}>
                  <h4 className="article-advice-title">
                    <span>
                      {adv.type === "do" ? "✅" : adv.type === "dont" ? "❌" : "💡"}
                    </span>
                    <span>{adv.title}</span>
                  </h4>
                  <p className="article-advice-desc">{adv.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 8. Warning Signs (Red Flags) ──────────────────────────────── */}
        {article.warningSigns && (
          <section className="article-warning-box">
            <div className="article-warning-header">
              <span>🚨</span>
              <span>{labels.warningSignsTitle}</span>
            </div>
            <p className="mb-3 text-sm font-semibold text-red-800 dark:text-red-300">
              {article.warningSigns.title}
            </p>
            <ul className="article-warning-list">
              {article.warningSigns.items.map((item, idx) => (
                <li key={idx} className="article-warning-item">
                  <span>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ── 9. Interactive FAQ Accordion ──────────────────────────────── */}
        <FaqAccordion faqs={article.faqs} sectionTitle={labels.faqSectionTitle} />

        {/* ── 10. Verified Medical References ───────────────────────────── */}
        {article.references && article.references.length > 0 && (
          <section className="article-references-box">
            <h3 className="article-references-header">
              📚 {labels.referencesSectionTitle}
            </h3>
            <div>
              {article.references.map((ref, idx) => (
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

        {/* ── 11. Doctor Consultation CTA Banner ────────────────────────── */}
        <ArticleCta articleTitle={article.title} labels={labels.cta} />

        {/* ── 12. Related Articles ──────────────────────────────────────── */}
        {relatedArticles.length > 0 && (
          <section className="my-12">
            <h3 className="mb-6 text-2xl font-black text-foreground">
              {labels.relatedArticlesTitle}
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {relatedArticles.map((rel) => (
                <div key={rel.slug} className="article-card">
                  <Link href={`/articles/${rel.slug}`} className="block">
                    <div className="article-card-image-box !h-44">
                      <Image
                        src={rel.imageSrc}
                        alt={rel.title}
                        width={400}
                        height={260}
                        className="article-card-image"
                      />
                    </div>
                  </Link>
                  <div className="article-card-body !p-4">
                    <span className="text-xs font-bold text-[var(--brand-blue)]">
                      {rel.categoryLabel}
                    </span>
                    <Link href={`/articles/${rel.slug}`}>
                      <h4 className="mt-1 font-bold text-foreground hover:text-[var(--brand-blue)] line-clamp-2">
                        {rel.title}
                      </h4>
                    </Link>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
