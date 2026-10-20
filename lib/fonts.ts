import { Inter, JetBrains_Mono, Noto_Sans_Arabic } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const fontVariables = `${inter.variable} ${notoSansArabic.variable} ${jetbrainsMono.variable}`;

export const fontClassNames = {
  latin: inter.className,
  arabic: notoSansArabic.className,
};
