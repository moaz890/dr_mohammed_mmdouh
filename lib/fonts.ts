import { IBM_Plex_Sans_Arabic, Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const fontVariables = `${plusJakartaSans.variable} ${ibmPlexSansArabic.variable}`;

export const fontClassNames = {
  latin: plusJakartaSans.className,
  arabic: ibmPlexSansArabic.className,
};
