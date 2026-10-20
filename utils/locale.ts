import { RTL_LOCALES } from "@/constants/locales";
import type { AppLocale } from "@/i18n/routing";

export function isRtlLocale(locale: AppLocale): boolean {
  return RTL_LOCALES.includes(locale);
}

export function getDirection(locale: AppLocale): "rtl" | "ltr" {
  return isRtlLocale(locale) ? "rtl" : "ltr";
}

export function getLocaleFontClass(
  locale: AppLocale,
  fonts: { latin: string; arabic: string },
): string {
  return isRtlLocale(locale) ? fonts.arabic : fonts.latin;
}
