import type { AppLocale } from "@/i18n/routing";

export interface ServiceFear {
  id: string;
  fear: string;
  reality: string;
  sourceTag: string;
}

export interface ServiceFaq {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceRecoveryPhase {
  phase: string;
  duration: string;
  description: string;
}

export interface ServiceReference {
  title: string;
  organization: string;
  year: string;
  summary: string;
  url?: string;
}

export interface ServiceAuthor {
  name: string;
  title: string;
  credentials: string;
  avatar: string;
}

export interface ServiceDetailContent {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  imageSrc: string;
  author: ServiceAuthor;
  overview: string[];
  keyBenefits: string[];
  indications: string[];
  procedureSteps: ServiceStep[];
  fears: ServiceFear[];
  recoveryTimeline: ServiceRecoveryPhase[];
  faqs: ServiceFaq[];
  references: ServiceReference[];
  relatedArticleSlug?: string;
}

export type LocalizedServices = Record<AppLocale, Record<string, ServiceDetailContent>>;
