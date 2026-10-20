import { z } from "zod";

import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

export const localeSchema = z.enum(routing.locales);

export type LocaleSchema = z.infer<typeof localeSchema>;

export function assertLocale(value: string): asserts value is AppLocale {
  localeSchema.parse(value);
}
