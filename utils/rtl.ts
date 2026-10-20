import type { AppLocale } from "@/i18n/routing";
import { getDirection, isRtlLocale } from "@/utils/locale";

export { getDirection, isRtlLocale };

/**
 * Maps physical spacing intent to logical Tailwind utilities.
 * Use these helpers when migrating legacy physical margin/padding classes.
 */
export const logicalSpacing = {
  marginInlineStart: (value: string) => `ms-${value}`,
  marginInlineEnd: (value: string) => `me-${value}`,
  paddingInlineStart: (value: string) => `ps-${value}`,
  paddingInlineEnd: (value: string) => `pe-${value}`,
} as const;

export function getChevronIconRotation(locale: AppLocale): string {
  return isRtlLocale(locale) ? "rotate-180" : "";
}

export function getTextAlign(locale: AppLocale): "text-start" | "text-end" {
  return isRtlLocale(locale) ? "text-end" : "text-start";
}
