import type { AppLocale } from "@/i18n/routing";

export const LOCALE_LABELS: Record<AppLocale, string> = {
  en: "English",
  ar: "العربية",
};

export const RTL_LOCALES: readonly AppLocale[] = ["ar"];

export const DEFAULT_LOCALE: AppLocale = "en";
