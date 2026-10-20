import { format as formatDateFns } from "date-fns";
import { ar, enUS } from "date-fns/locale";

import type { AppLocale } from "@/i18n/routing";

const localeMap = {
  en: enUS,
  ar,
} as const;

export function formatLocalizedDate(
  date: Date | number,
  pattern: string,
  locale: AppLocale,
) {
  return formatDateFns(date, pattern, { locale: localeMap[locale] });
}
