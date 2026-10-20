"use client";

import { useLocale, useTranslations } from "next-intl";

import { LOCALE_LABELS } from "@/constants/locales";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  className?: string;
};

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const t = useTranslations("common.locale");
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();

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
            onClick={() => router.replace(pathname, { locale: item })}
            className={cn(
              "rounded-md px-2 py-1 text-sm transition-colors",
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
