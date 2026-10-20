import { env } from "@/config/env";
import { doctorProfile } from "@/config/site";
import type { AppLocale } from "@/i18n/routing";

type PhysicianSchemaInput = {
  locale: AppLocale;
  jobTitle: string;
  medicalSpecialty: string;
  pageUrl: string;
};

export function createPhysicianJsonLd({
  locale,
  jobTitle,
  medicalSpecialty,
  pageUrl,
}: PhysicianSchemaInput) {
  const name = doctorProfile.name[locale];

  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name,
    jobTitle,
    medicalSpecialty,
    url: pageUrl,
    worksFor: {
      "@type": "MedicalOrganization",
      name: doctorProfile.name[locale],
      url: env.NEXT_PUBLIC_SITE_URL,
    },
  };
}

export function jsonLdScript(
  data: Record<string, unknown> | Record<string, unknown>[],
) {
  return {
    __html: JSON.stringify(data),
  };
}
