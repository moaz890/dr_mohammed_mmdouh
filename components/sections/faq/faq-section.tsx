import { getTranslations } from "next-intl/server";

import { FaqAccordion } from "./faq-accordion";
import { FaqContactSwitcher } from "./faq-contact-switcher";
import type { FaqItemData, FaqItemId, FaqSectionProps } from "./types";

/* ── Help / Question Sparkle Icon ────────────────────────────────────────── */
const FaqEyebrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4 text-[var(--brand-blue)] animate-pulse"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const FAQ_ITEM_IDS: FaqItemId[] = [
  "booking",
  "painlessBirth",
  "fibroids",
  "laparoscopy",
];

export async function FaqSection({ className = "" }: FaqSectionProps) {
  const t = await getTranslations("home.faqSection");
  const tLocations = await getTranslations("home.locationsSection");

  const branches = [
    {
      id: "newCairo" as const,
      name: tLocations("branches.newCairo.name"),
      city: tLocations("branches.newCairo.city"),
      phone: tLocations("branches.newCairo.phone"),
    },
    {
      id: "madinaty" as const,
      name: tLocations("branches.madinaty.name"),
      city: tLocations("branches.madinaty.city"),
      phone: tLocations("branches.madinaty.phone"),
    },
  ];

  const items: FaqItemData[] = FAQ_ITEM_IDS.map((id) => {
    const item: FaqItemData = {
      id,
      question: t(`items.${id}.question`),
      answer: t(`items.${id}.answer`),
    };

    if (id === "booking") {
      item.branches = [
        {
          name: t("items.booking.branches.newCairo.name"),
          address: t("items.booking.branches.newCairo.address"),
          phone: t("items.booking.branches.newCairo.phone"),
        },
        {
          name: t("items.booking.branches.madinaty.name"),
          address: t("items.booking.branches.madinaty.address"),
          phone: t("items.booking.branches.madinaty.phone"),
        },
      ];
    }

    return item;
  });

  return (
    <section
      id="faq"
      className={`faq-section bg-light reveal-section ${className}`}
      aria-labelledby="faq-heading"
      data-aos="fade-up"
    >
      {/* Decorative ambient blurred spots */}
      <div className="faq-ambient-glow faq-ambient-glow-1" aria-hidden="true" />
      <div className="faq-ambient-glow faq-ambient-glow-2" aria-hidden="true" />

      <div className="section-container container">
        {/* ── Section Title ──────────────────────────────────────────────── */}
        <div className="section-title text-center" data-aos="fade-up">
          <div className="faq-eyebrow-box">
            <FaqEyebrowIcon />
            <span className="faq-eyebrow">{t("eyebrow")}</span>
          </div>

          <h2 id="faq-heading" className="faq-main-heading">
            {t("title")}
          </h2>

          <p className="faq-main-subtitle">{t("subtitle")}</p>
        </div>

        {/* ── FAQ Interactive Accordion List ──────────────────────────────── */}
        <div
          className="faq-accordion-container mx-auto max-w-4xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaqAccordion items={items} />

          {/* ── Still Have Questions Support Banner ──────────────────────── */}
          <div className="faq-support-banner mt-10 rounded-2xl border border-[var(--brand-blue)]/20 p-6 text-center shadow-sm sm:p-8">
            <h4 className="text-lg font-bold text-foreground sm:text-xl">
              {t("stillHaveQuestions.title")}
            </h4>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("stillHaveQuestions.description")}
            </p>

            <FaqContactSwitcher
              branches={branches}
              callBtnLabel={t("stillHaveQuestions.callBtn")}
              whatsappBtnLabel={t("stillHaveQuestions.whatsappBtn")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
