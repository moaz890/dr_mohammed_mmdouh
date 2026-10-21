import { getTranslations } from "next-intl/server";

import { buildWhatsAppUrl } from "@/lib/whatsapp";

import { FaqAccordion } from "./faq-accordion";
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

/* ── WhatsApp Icon ───────────────────────────────────────────────────────── */
const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-4 w-4 text-[#25D366]"
  >
    <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.957.564 3.782 1.541 5.328L2 22l4.792-1.505a9.98 9.98 0 0 0 5.239 1.488c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.727 14.157c-.242.679-1.205 1.282-1.996 1.455-.54.118-1.246.212-3.616-.769-3.033-1.254-4.991-4.343-5.143-4.544-.147-.202-1.222-1.626-1.222-3.102 0-1.475.772-2.2 1.045-2.502.274-.303.596-.379.794-.379.199 0 .398.002.571.011.184.01.43-.07.673.513.25.597.854 2.083.929 2.235.075.152.124.331.025.533-.1.202-.15.327-.298.502-.149.176-.312.392-.446.527-.149.149-.304.312-.131.61.173.298.769 1.269 1.649 2.052 1.134 1.01 2.09 1.323 2.389 1.472.298.149.472.124.646-.075.174-.199.746-.869.944-1.168.199-.298.398-.249.671-.149.273.099 1.74.82 2.038.969.298.149.497.224.571.348.075.124.075.724-.167 1.403z" />
  </svg>
);

/* ── Phone Call Icon ─────────────────────────────────────────────────────── */
const PhoneSolidIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-4 w-4 text-[var(--brand-blue)]"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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

  const whatsappUrl = buildWhatsAppUrl(
    "مرحباً دكتور محمد صالح، أود الاستفسار عن مواعيد العيادات والخدمات.",
  );

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

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="faq-cta-whatsapp-btn inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold shadow-md transition-all"
              >
                <WhatsAppIcon />
                <span>{t("stillHaveQuestions.whatsappBtn")}</span>
              </a>

              <a
                href="tel:01050600032"
                className="faq-cta-call-btn inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-bold transition-all"
              >
                <PhoneSolidIcon />
                <span>{t("stillHaveQuestions.callBtn")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
