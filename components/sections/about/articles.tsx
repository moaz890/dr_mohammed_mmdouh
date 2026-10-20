import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { routePaths } from "@/config/routes";
import { Link } from "@/i18n/navigation";

/* Arrow icon pointing to start (RTL-ready) */
const ArrowStart = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="article-arrow"
  >
    <path d="M19 12H5" />
    <path d="M12 5l-7 7 7 7" />
  </svg>
);

/* Placeholder gradient images per article (use real images when available) */
const ARTICLES = [
  {
    id: "ivf",
    categoryKey: "articles.items.ivf.category",
    href: routePaths.articles,
    imageSrc: "/hero.jpeg",
    accent: "blue",
  },
  {
    id: "laparoscopy",
    categoryKey: "articles.items.laparoscopy.category",
    href: routePaths.articles,
    imageSrc: "/saleh-hero-2.jpeg",
    accent: "pink",
  },
  {
    id: "prenatal",
    categoryKey: "articles.items.prenatal.category",
    href: routePaths.articles,
    imageSrc: "/saleh-hero-3.jpeg",
    accent: "blue",
  },
] as const;

export async function Articles() {
  const t = await getTranslations("about");

  return (
    <section
      className="articles-section reveal-section"
      aria-labelledby="articles-heading"
    >
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">{t("articles.eyebrow")}</span>
          <h2 id="articles-heading" className="section-title">
            {t("articles.title")}
          </h2>
          <p className="section-subtitle">{t("articles.subtitle")}</p>
        </div>

        <div className="articles-grid" role="list">
          {ARTICLES.map((article, i) => (
            <article
              key={article.id}
              className={`article-card stagger-child article-card--${article.accent}`}
              style={{ "--stagger-i": i } as React.CSSProperties}
              role="listitem"
            >
              {/* Image with zoom on hover */}
              <div className="article-image-wrap">
                <Image
                  src={article.imageSrc}
                  alt={t(`articles.items.${article.id}.title`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="article-image"
                />
              </div>

              {/* Category pill */}
              <div className="article-body">
                <span
                  className={`article-category article-category--${article.accent}`}
                >
                  {t(article.categoryKey)}
                </span>

                <h3 className="article-title">
                  {t(`articles.items.${article.id}.title`)}
                </h3>

                <p className="article-excerpt">
                  {t(`articles.items.${article.id}.excerpt`)}
                </p>

                <Link
                  href={article.href}
                  className="article-link"
                  aria-label={`${t("articles.readFull")} ${t(`articles.items.${article.id}.title`)}`}
                >
                  <span>{t("articles.readFull")}</span>
                  <ArrowStart />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
