import { getTranslations } from "next-intl/server";

import { CtaBranchItem, CtaBranchSwitcher } from "./cta-branch-switcher";
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

export async function CtaSection({
  className = "",
  id = "booking-cta",
}: CtaSectionProps) {
  const t = await getTranslations("home.ctaSection");
  const tLocations = await getTranslations("home.locationsSection");

  const branches: CtaBranchItem[] = [
    {
      id: "newCairo",
      name: tLocations("branches.newCairo.name"),
      city: tLocations("branches.newCairo.city"),
      address: tLocations("branches.newCairo.address"),
      phone: tLocations("branches.newCairo.phone"),
      badge: tLocations("branches.newCairo.badge"),
    },
    {
      id: "madinaty",
      name: tLocations("branches.madinaty.name"),
      city: tLocations("branches.madinaty.city"),
      address: tLocations("branches.madinaty.address"),
      phone: tLocations("branches.madinaty.phone"),
      badge: tLocations("branches.madinaty.badge"),
    },
  ];

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

        {/* ── Interactive Clinic Branch Switcher for Reservation ──────────── */}
        <CtaBranchSwitcher
          branches={branches}
          callBtnLabel={t("callBtn")}
          whatsappBtnLabel={t("whatsappBtn")}
        />
      </div>
    </section>
  );
}
