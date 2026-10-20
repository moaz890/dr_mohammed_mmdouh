import { getTranslations } from "next-intl/server";

import { buildWhatsAppUrl } from "@/lib/whatsapp";

import type { CtaSectionProps } from "./types";

/* ── Calendar Check Icon ─────────────────────────────────────────────────── */
const CalendarCheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-6 w-6 sm:h-7 sm:w-7 shrink-0"
  >
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M3 10h18" />
    <path d="m9 16 2 2 4-4" />
  </svg>
);

/* ── Phone Call Icon ─────────────────────────────────────────────────────── */
const PhoneSolidIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

/* ── WhatsApp Icon ───────────────────────────────────────────────────────── */
const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
  >
    <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.957.564 3.782 1.541 5.328L2 22l4.792-1.505a9.98 9.98 0 0 0 5.239 1.488c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.727 14.157c-.242.679-1.205 1.282-1.996 1.455-.54.118-1.246.212-3.616-.769-3.033-1.254-4.991-4.343-5.143-4.544-.147-.202-1.222-1.626-1.222-3.102 0-1.475.772-2.2 1.045-2.502.274-.303.596-.379.794-.379.199 0 .398.002.571.011.184.01.43-.07.673.513.25.597.854 2.083.929 2.235.075.152.124.331.025.533-.1.202-.15.327-.298.502-.149.176-.312.392-.446.527-.149.149-.304.312-.131.61.173.298.769 1.269 1.649 2.052 1.134 1.01 2.09 1.323 2.389 1.472.298.149.472.124.646-.075.174-.199.746-.869.944-1.168.199-.298.398-.249.671-.149.273.099 1.74.82 2.038.969.298.149.497.224.571.348.075.124.075.724-.167 1.403z" />
  </svg>
);

export async function CtaSection({
  className = "",
  id = "booking-cta",
}: CtaSectionProps) {
  const t = await getTranslations("home.ctaSection");

  const phone = t("phone");
  const whatsappUrl = buildWhatsAppUrl(undefined, phone);

  return (
    <section className={`cta-section ${className}`} id={id}>
      {/* Background visual flourishes */}
      <div className="cta-ambient-bg" aria-hidden="true" />
      <div className="cta-ambient-circle cta-ambient-circle-1" aria-hidden="true" />
      <div className="cta-ambient-circle cta-ambient-circle-2" aria-hidden="true" />

      <div className="container aos-init aos-animate" data-aos="zoom-in">
        <h2>
          <i className="fas fa-calendar-check" aria-hidden="true">
            <CalendarCheckIcon />
          </i>
          <span>{t("title")}</span>
        </h2>

        <p>{t("subtitle")}</p>

        <div className="cta-buttons">
          <a
            href={`tel:${phone}`}
            className="cta-btn"
            aria-label={`${t("callBtn")}: ${phone}`}
          >
            <i className="fas fa-phone" aria-hidden="true">
              <PhoneSolidIcon />
            </i>
            <span>{t("callBtn")}</span>
          </a>

          <a
            href={whatsappUrl}
            className="cta-btn whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("whatsappBtn")}
          >
            <i className="fab fa-whatsapp" aria-hidden="true">
              <WhatsAppIcon />
            </i>
            <span>{t("whatsappBtn")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
