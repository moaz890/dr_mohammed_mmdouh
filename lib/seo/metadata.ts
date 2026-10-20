import type { Metadata } from "next";

import { env } from "@/config/env";
import { getLocalizedPath } from "@/config/routes";
import { siteConfig } from "@/config/site";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

export type PageMetadataContent = {
  title: string;
  description: string;
  keywords?: string | string[];
  siteName: string;
};

export type PageMetadataInput = PageMetadataContent & {
  locale: AppLocale;
  pathname: string;
  noIndex?: boolean;
  images?: NonNullable<Metadata["openGraph"]>["images"];
};

export function buildAlternateLanguages(pathname: string): Metadata["alternates"] {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      new URL(getLocalizedPath(pathname, locale), env.NEXT_PUBLIC_SITE_URL).toString(),
    ]),
  );

  return {
    canonical: new URL(
      getLocalizedPath(pathname, routing.defaultLocale),
      env.NEXT_PUBLIC_SITE_URL,
    ).toString(),
    languages: {
      ...languages,
      "x-default": new URL(
        getLocalizedPath(pathname, routing.defaultLocale),
        env.NEXT_PUBLIC_SITE_URL,
      ).toString(),
    },
  };
}

export function createPageMetadata({
  locale,
  pathname,
  title,
  description,
  keywords,
  siteName,
  noIndex = false,
  images,
}: PageMetadataInput): Metadata {
  const url = new URL(getLocalizedPath(pathname, locale), env.NEXT_PUBLIC_SITE_URL);

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
    alternates: buildAlternateLanguages(pathname),
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: routing.locales
        .filter((item) => item !== locale)
        .map((item) => (item === "ar" ? "ar_EG" : "en_US")),
      url: url.toString(),
      siteName,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: images
        ? Array.isArray(images)
          ? images.map((image) => {
              if (typeof image === "string") return image;
              if (image instanceof URL) return image.toString();
              return image.url;
            })
          : undefined
        : undefined,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export async function createDefaultMetadata(
  locale: AppLocale,
  pathname: string,
): Promise<Metadata> {
  const { getTranslations } = await import("next-intl/server");
  const tDefault = await getTranslations({
    locale,
    namespace: "metadata.default",
  });
  const tOpenGraph = await getTranslations({
    locale,
    namespace: "metadata.openGraph",
  });

  return createPageMetadata({
    locale,
    pathname,
    title: tDefault("title"),
    description: tDefault("description"),
    keywords: tDefault("keywords"),
    siteName: tOpenGraph("siteName"),
  });
}

export async function loadDefaultMetadataContent(
  locale: AppLocale,
): Promise<PageMetadataContent> {
  const { getTranslations } = await import("next-intl/server");
  const tDefault = await getTranslations({
    locale,
    namespace: "metadata.default",
  });
  const tOpenGraph = await getTranslations({
    locale,
    namespace: "metadata.openGraph",
  });

  return {
    title: tDefault("title"),
    description: tDefault("description"),
    keywords: tDefault("keywords"),
    siteName: tOpenGraph("siteName"),
  };
}
