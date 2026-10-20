import { getTranslations } from "next-intl/server";

import { buildWhatsAppUrl } from "@/lib/whatsapp";

import { HeroShell } from "./hero-shell";
import type { HeroContentProps, HeroTrustItem } from "./types";

const TRUST_IDS = ["experience", "ultrasound", "ivf", "laparoscopy", "care"] as const;

export async function Hero() {
  const t = await getTranslations("home.hero");

  const slides = [
    {
      description: t("slides.0.description"),
      imageAlt: t("slides.0.imageAlt"),
    },
    {
      description: t("slides.1.description"),
      imageAlt: t("slides.1.imageAlt"),
    },
    {
      description: t("slides.2.description"),
      imageAlt: t("slides.2.imageAlt"),
    },
  ];

  const trustItems: HeroTrustItem[] = TRUST_IDS.map((id) => ({
    id,
    label: t(`trust.${id}`),
  }));

  const content: HeroContentProps = {
    eyebrow: t("eyebrow"),
    doctorName: t("doctorName"),
    titleLine1: t("title.line1"),
    titleLine2: t("title.line2"),
    slides,
    ctaPrimary: t("cta.primary"),
    ctaSecondary: t("cta.secondary"),
    whatsappUrl: buildWhatsAppUrl(t("cta.whatsappMessage")),
    trustItems,
    sliderLabels: {
      ariaLabel: t("slider.ariaLabel"),
      prev: t("slider.prev"),
      next: t("slider.next"),
      goToSlide: t("slider.goToSlide"),
    },
  };

  return <HeroShell {...content} />;
}
