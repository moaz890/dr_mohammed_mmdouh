import "@/styles/globals.css";

import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { brand } from "@/config/brand";
import type { AppLocale } from "@/i18n/routing";
import { fontClassNames, fontVariables } from "@/lib/fonts";
import { getDirection, getLocaleFontClass } from "@/utils/locale";

export const metadata: Metadata = {
  icons: {
    icon: [{ url: brand.logo.src, type: "image/jpeg" }],
    apple: [{ url: brand.logo.src, type: "image/jpeg" }],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = (await getLocale()) as AppLocale;
  const direction = getDirection(locale);
  const fontClass = getLocaleFontClass(locale, fontClassNames);

  return (
    <html
      lang={locale}
      dir={direction}
      suppressHydrationWarning
      className={`${fontVariables} h-full`}
    >
      <body className={`${fontClass} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
