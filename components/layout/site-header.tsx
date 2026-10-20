import { getTranslations } from "next-intl/server";

import { Navbar, type NavbarItem } from "@/components/layout/navbar";
import { primaryNavigation } from "@/types/navigation";

export async function SiteHeader() {
  const t = await getTranslations("navigation.routes");

  const items: NavbarItem[] = primaryNavigation.map((item) => ({
    href: item.href,
    routeKey: item.routeKey,
    label: t(item.routeKey),
  }));

  return <Navbar items={items} />;
}
