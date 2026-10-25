"use client";

import { useLocale, useTranslations } from "next-intl";

import { LOCALE_LABELS } from "@/constants/locales";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { fontClassNames } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { getDirection, getLocaleFontClass } from "@/utils/locale";

type LocaleSwitcherProps = {
  className?: string;
};

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const t = useTranslations("common.locale");
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = (item: AppLocale) => {
    if (item === locale) return;
    const nextDir = getDirection(item);
    document.documentElement.dir = nextDir;
    document.documentElement.lang = item;
    const nextFont = getLocaleFontClass(item, fontClassNames);
    document.body.classList.remove(fontClassNames.latin, fontClassNames.arabic);
    document.body.classList.add(nextFont);
    router.replace(pathname, { locale: item });
  };

  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <span className="sr-only">{t("switchLabel")}</span>
      {routing.locales.map((item) => {
        const isActive = item === locale;

        return (
          <button
            key={item}
            type="button"
            lang={item}
            aria-current={isActive ? "true" : undefined}
            disabled={isActive}
            onClick={() => handleSwitch(item)}
            className={cn(
              "rounded-md px-2 py-1 text-sm font-medium transition-colors",
              isActive
                ? "bg-[var(--brand-blue)] text-white"
                : "text-muted-foreground hover:bg-[var(--brand-blue-muted)] hover:text-[var(--brand-blue)]",
            )}
          >
            {LOCALE_LABELS[item]}
          </button>
        );
      })}
    </div>
  );
}
