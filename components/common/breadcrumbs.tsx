import { getTranslations } from "next-intl/server";
import { Fragment } from "react";

import { routePaths } from "@/config/routes";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { BreadcrumbItem } from "@/types/breadcrumbs";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export async function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const t = await getTranslations("breadcrumbs");
  const tRoutes = await getTranslations("navigation.routes");

  return (
    <nav aria-label={t("ariaLabel")} className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link href={routePaths.home} className="hover:text-foreground">
            {t("home")}
          </Link>
        </li>
        {items.map((item, index) => {
          const label =
            item.label ?? (item.routeKey ? tRoutes(item.routeKey) : undefined);
          const href =
            item.href ?? (item.routeKey ? routePaths[item.routeKey] : undefined);
          const isLast = index === items.length - 1;

          if (!label) {
            return null;
          }

          return (
            <Fragment key={`${label}-${index}`}>
              <li aria-hidden="true" className="text-border">
                /
              </li>
              <li
                className={cn(isLast && "font-medium text-foreground")}
                {...(isLast ? { "aria-current": "page" as const } : {})}
              >
                {!isLast && href ? (
                  <Link href={href} className="hover:text-foreground">
                    {label}
                  </Link>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
