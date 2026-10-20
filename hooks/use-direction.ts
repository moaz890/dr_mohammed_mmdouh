"use client";

import { useLocale } from "next-intl";

import type { AppLocale } from "@/i18n/routing";
import { getDirection, isRtlLocale } from "@/utils/locale";

export function useAppLocale(): AppLocale {
  return useLocale() as AppLocale;
}

export function useDirection(): "rtl" | "ltr" {
  const locale = useAppLocale();
  return getDirection(locale);
}

export function useIsRtl(): boolean {
  const locale = useAppLocale();
  return isRtlLocale(locale);
}
