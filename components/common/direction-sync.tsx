"use client";

import { useLocale } from "next-intl";
import { useLayoutEffect } from "react";

import type { AppLocale } from "@/i18n/routing";
import { fontClassNames } from "@/lib/fonts";
import { getDirection, getLocaleFontClass } from "@/utils/locale";

/**
 * DirectionSync dynamically keeps the root <html> and <body> attributes
 * (dir, lang, and font classes) in 100% sync with the active locale
 * across all client-side navigations and transitions.
 */
export function DirectionSync() {
  const locale = useLocale() as AppLocale;
  const direction = getDirection(locale);
  const fontClass = getLocaleFontClass(locale, fontClassNames);

  useLayoutEffect(() => {
    // 1. Immediately update html dir and lang on client transitions
    document.documentElement.dir = direction;
    document.documentElement.lang = locale;

    // 2. Immediately update body font class for correct typography
    document.body.classList.remove(fontClassNames.latin, fontClassNames.arabic);
    document.body.classList.add(fontClass);
  }, [direction, locale, fontClass]);

  return null;
}
