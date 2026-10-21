import type { AppLocale } from "@/i18n/routing";

export const doctorProfile = {
  name: {
    en: "Prof. Mohammed Mamdouh Saleh",
    ar: "الأستاذ الدكتور محمد ممدوح صالح",
  },
  shortName: {
    en: "Prof. Mohammed Saleh",
    ar: "أ.د. محمد ممدوح صالح",
  },
  title: {
    en: "Senior Consultant in Obstetrics & Gynecology | Advanced Gynecologic Laparoscopy | Infertility & ICSI",
    ar: "استشاري أول أمراض النساء والتوليد وعلاج تأخر الإنجاب والحقن المجهري، وخبير جراحات المناظير النسائية المتقدمة",
  },
  clinicName: {
    en: "Dr. Saleh Specialty Clinics",
    ar: "عيادات د. صالح التخصصية",
  },
  specialties: ["laparoscopy", "infertility", "obstetrics", "gynecology"] as const,
} as const;

export const siteConfig = {
  name: doctorProfile.name,
  defaultLocale: "en" as AppLocale,
  locales: ["en", "ar"] as const satisfies readonly AppLocale[],
  creator: doctorProfile.name.en,
  twitterHandle: undefined as string | undefined,
} as const;
