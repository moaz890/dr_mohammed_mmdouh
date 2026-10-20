import type { AppLocale } from "@/i18n/routing";

/**
 * Central route registry for localized URLs, sitemap generation, and navigation.
 * Path values are locale-agnostic; next-intl adds the `/en` or `/ar` prefix.
 */
export const routePaths = {
  home: "/",
  about: "/about",
  services: "/services",
  ivf: "/services/ivf",
  obstetrics: "/services/obstetrics",
  gynecology: "/services/gynecology",
  laparoscopy: "/services/advanced-laparoscopy",
  articles: "/articles",
  faq: "/faq",
  gallery: "/gallery",
  videos: "/videos",
  testimonials: "/testimonials",
  contact: "/contact",
  appointment: "/appointment",
  privacy: "/privacy-policy",
  terms: "/terms",
  clinics: "/clinics",
} as const;

export type RouteKey = keyof typeof routePaths;

export const publicRoutes = Object.values(routePaths);

export const routeTranslationKeys: Record<RouteKey, string> = {
  home: "navigation.routes.home",
  about: "navigation.routes.about",
  services: "navigation.routes.services",
  ivf: "navigation.routes.ivf",
  obstetrics: "navigation.routes.obstetrics",
  gynecology: "navigation.routes.gynecology",
  laparoscopy: "navigation.routes.laparoscopy",
  articles: "navigation.routes.articles",
  faq: "navigation.routes.faq",
  gallery: "navigation.routes.gallery",
  videos: "navigation.routes.videos",
  testimonials: "navigation.routes.testimonials",
  contact: "navigation.routes.contact",
  appointment: "navigation.routes.appointment",
  privacy: "navigation.routes.privacy",
  terms: "navigation.routes.terms",
  clinics: "navigation.routes.clinics",
};

export const sitemapRoutes: RouteKey[] = [
  "home",
  "about",
  "services",
  "ivf",
  "obstetrics",
  "gynecology",
  "laparoscopy",
  "articles",
  "faq",
  "gallery",
  "videos",
  "testimonials",
  "contact",
  "appointment",
  "clinics",
  "privacy",
  "terms",
];

export function getLocalizedPath(path: string, locale: AppLocale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") {
    return `/${locale}`;
  }
  return `/${locale}${normalized}`;
}
