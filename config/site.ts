import type { AppLocale } from "@/i18n/routing";

export const doctorProfile = {
  name: {
    en: "Dr. Mohamed Mamdouh Saleh",
    ar: "د. محمد ممدوح صالح",
  },
  title: {
    en: "Lecturer and Senior Obstetric & IVF Consultant · Advanced Laparoscopy Surgeon",
    ar: "محاضر واستشاري أول توليد وأطفال أنابيب · جراح مناظير متقدم",
  },
  specialties: ["obstetrics", "ivf", "gynecology", "laparoscopy"] as const,
} as const;

export const siteConfig = {
  name: doctorProfile.name,
  defaultLocale: "en" as AppLocale,
  locales: ["en", "ar"] as const satisfies readonly AppLocale[],
  creator: doctorProfile.name.en,
  twitterHandle: undefined as string | undefined,
} as const;
