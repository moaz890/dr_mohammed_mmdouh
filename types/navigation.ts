import { routePaths } from "@/config/routes";
import type { NavItem } from "@/types/breadcrumbs";

export type { NavItem };

/** Primary navbar items (order matters). */
export const primaryNavigation: NavItem[] = [
  { routeKey: "home", href: routePaths.home },
  { routeKey: "services", href: routePaths.services },
  { routeKey: "about", href: routePaths.about },
  { routeKey: "videos", href: routePaths.videos },
  { routeKey: "articles", href: routePaths.articles },
  { routeKey: "clinics", href: routePaths.clinics },
];
