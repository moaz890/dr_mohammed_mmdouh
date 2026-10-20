"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { LocaleSwitcher } from "@/components/common/locale-switcher";
import { brand } from "@/config/brand";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export type NavbarItem = {
  href: string;
  label: string;
  routeKey: string;
};

type NavbarProps = {
  items: NavbarItem[];
};

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar({ items }: NavbarProps) {
  const t = useTranslations("common");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[var(--z-header)] border-b border-border/60 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/85">
      <div
        aria-hidden
        className="h-1 bg-gradient-to-r from-[var(--brand-pink)] via-[var(--brand-pink-light)] to-[var(--brand-blue-light)]"
      />

      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center gap-4 px-4 sm:h-20 sm:px-6 lg:h-[5.25rem] lg:px-8">
        <Link
          href="/"
          className="relative flex shrink-0 items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src={brand.logo.src}
            alt={t("brand.logoAlt")}
            width={brand.logo.width}
            height={brand.logo.height}
            priority
            className="h-14 w-auto object-contain sm:h-16 lg:h-[4.5rem]"
          />
        </Link>

        <nav
          aria-label="Main"
          className="hidden flex-1 items-center justify-center gap-1 lg:flex"
        >
          {items.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.routeKey}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-[var(--brand-blue)]"
                    : "text-foreground/75 hover:bg-[var(--brand-blue-muted)] hover:text-[var(--brand-blue)]",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {active ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[var(--brand-pink)]"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="ms-auto flex items-center gap-2">
          <LocaleSwitcher className="hidden sm:inline-flex" />

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-foreground/80 transition-colors hover:bg-muted lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">
              {mobileOpen ? t("actions.closeMenu") : t("actions.openMenu")}
            </span>
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <>
          <button
            type="button"
            aria-label={t("actions.closeMenu")}
            className="fixed inset-0 z-[calc(var(--z-header)-1)] bg-foreground/20 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            id="mobile-nav"
            aria-label="Main"
            className="absolute inset-x-0 top-full z-[var(--z-header)] border-b border-border bg-background shadow-lg lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {items.map((item) => {
                const active = isActivePath(pathname, item.href);

                return (
                  <li key={item.routeKey}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        active
                          ? "bg-[var(--brand-pink-muted)] text-[var(--brand-blue)]"
                          : "text-foreground/80 hover:bg-muted",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2 sm:hidden">
                <LocaleSwitcher />
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </header>
  );
}
