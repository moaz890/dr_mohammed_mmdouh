import type { AppLocale } from "@/i18n/routing";

export type ArticleCategory =
  "painless-delivery" | "high-risk-pregnancy" | "icsi-ivf" | "laparoscopy";

export interface ArticleFear {
  id: string;
  fear: string;
  reality: string;
  sourceTag: string;
}

export interface ArticleFaq {
  id: string;
  question: string;
  answer: string;
}

export interface ArticleAdvice {
  id: string;
  title: string;
  description: string;
  type: "do" | "dont" | "tip";
}

export interface ArticleReference {
  title: string;
  organization: string;
  year: string;
  summary: string;
  url?: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string[];
}

export interface ArticleAuthor {
  name: string;
  title: string;
  credentials: string;
  avatar: string;
}

export interface ArticleContent {
  slug: string;
  category: ArticleCategory;
  categoryLabel: string;
  title: string;
  subtitle: string;
  excerpt: string;
  imageSrc: string;
  readTimeMinutes: number;
  publishedAt: string;
  updatedAt: string;
  author: ArticleAuthor;
  keyTakeaways: string[];
  fears: ArticleFear[];
  sections: ArticleSection[];
  advices: ArticleAdvice[];
  warningSigns: {
    title: string;
    items: string[];
  };
  faqs: ArticleFaq[];
  references: ArticleReference[];
}

export type LocalizedArticles = Record<AppLocale, Record<string, ArticleContent>>;
