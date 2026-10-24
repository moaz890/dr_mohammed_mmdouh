"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

import type { ArticleContent } from "../types";

type CategoryFilterProps = {
  articles: ArticleContent[];
  locale: AppLocale;
  labels: {
    all: string;
    readTimeMinutes: string;
    readArticle: string;
    verifiedBy: string;
    searchPlaceholder: string;
    noResults: string;
  };
};

export function CategoryFilter({ articles, locale, labels }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const map = new Map<string, string>();
    articles.forEach((a) => {
      map.set(a.category, a.categoryLabel);
    });
    return Array.from(map.entries()).map(([key, label]) => ({
      key,
      label,
    }));
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "all" || article.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.subtitle.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* ── Filters & Search Bar ─────────────────────────────────────────── */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="articles-category-nav !my-0">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`articles-category-pill ${selectedCategory === "all" ? "active" : ""}`}
          >
            <span>{labels.all}</span>
            <span className="rounded-full bg-black/10 px-2 py-0.5 text-xs dark:bg-white/10">
              {articles.length}
            </span>
          </button>

          {categories.map((cat) => {
            const count = articles.filter((a) => a.category === cat.key).length;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`articles-category-pill ${selectedCategory === cat.key ? "active" : ""}`}
              >
                <span>{cat.label}</span>
                <span className="rounded-full bg-black/10 px-2 py-0.5 text-xs dark:bg-white/10">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative min-w-[240px]">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={labels.searchPlaceholder}
            className="w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/20"
          />
        </div>
      </div>

      {/* ── Articles Grid ────────────────────────────────────────────────── */}
      {filteredArticles.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-12 text-center">
          <p className="text-base text-muted-foreground">{labels.noResults}</p>
        </div>
      ) : (
        <div className="articles-grid-container" role="list">
          {filteredArticles.map((article) => (
            <article key={article.slug} className="article-card" role="listitem">
              <Link href={`/articles/${article.slug}`} className="block">
                <div className="article-card-image-box">
                  <span className="article-card-badge-overlay">
                    {article.categoryLabel}
                  </span>
                  <Image
                    src={article.imageSrc}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="article-card-image"
                  />
                </div>
              </Link>

              <div className="article-card-body">
                <div className="article-card-meta">
                  <span>
                    ⏱️ {article.readTimeMinutes} {labels.readTimeMinutes}
                  </span>
                  <span>•</span>
                  <span>{article.publishedAt}</span>
                </div>

                <Link href={`/articles/${article.slug}`}>
                  <h3 className="article-card-title">{article.title}</h3>
                </Link>

                <p className="article-card-excerpt">{article.excerpt}</p>

                <div className="article-card-footer">
                  <span className="text-xs text-muted-foreground">
                    ✓ {labels.verifiedBy}
                  </span>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[var(--brand-pink)] hover:underline"
                  >
                    <span>{labels.readArticle}</span>
                    <span aria-hidden="true">{locale === "ar" ? "←" : "→"}</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
