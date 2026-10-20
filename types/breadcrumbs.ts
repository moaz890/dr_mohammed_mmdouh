import type { RouteKey } from "@/config/routes";
import { routePaths } from "@/config/routes";

export type BreadcrumbItem = {
  routeKey?: RouteKey;
  href?: string;
  label?: string;
};

export type NavItem = {
  routeKey: RouteKey;
  href: (typeof routePaths)[RouteKey];
};
