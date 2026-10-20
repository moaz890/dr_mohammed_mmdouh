import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type SkipLinkProps = {
  className?: string;
};

export async function SkipLink({ className }: SkipLinkProps) {
  const t = await getTranslations("common.actions");

  return (
    <Link
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[var(--z-skip-link)] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground",
        className,
      )}
    >
      {t("skipToContent")}
    </Link>
  );
}
