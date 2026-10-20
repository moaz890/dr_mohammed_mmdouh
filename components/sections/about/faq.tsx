"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const FAQ_IDS = ["booking", "robotic", "specialties", "branches"] as const;
type FaqId = (typeof FAQ_IDS)[number];

/* ── 4 Expressive Icons for FAQ Topics ────────────────────────────────────── */

/** 1. Booking: Calendar date appointment with confirmed clock badge */
const BookingCalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="faq-topic-icon"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <path d="m9 16 2 2 4-4" />
  </svg>
);

/** 2. Robotic Surgery: Robotic surgical arm articulating tip */
const RoboticFaqIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="faq-topic-icon"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    <path d="m18 6 3-3m-3 15 3 3M6 6 3 3m3 15-3 3" />
  </svg>
);

/** 3. Specialties: Fetal & High-Risk Pregnancy Ultrasound */
const SpecialtyFaqIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="faq-topic-icon"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);

/** 4. Branches: Clinic hospital building with location marker */
const BranchesFaqIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="faq-topic-icon"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const faqIcons: Record<FaqId, React.FC> = {
  booking: BookingCalendarIcon,
  robotic: RoboticFaqIcon,
  specialties: SpecialtyFaqIcon,
  branches: BranchesFaqIcon,
};

/* Chevron icon */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="faq-chevron"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Faq() {
  const t = useTranslations("about");
  const [openId, setOpenId] = useState<FaqId | null>(null);

  const toggle = (id: FaqId) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section reveal-section" aria-labelledby="faq-heading">
      <div className="section-container faq-container">
        <div className="section-header">
          <span className="section-eyebrow">{t("faq.eyebrow")}</span>
          <h2 id="faq-heading" className="section-title">
            {t("faq.title")}
          </h2>
          <p className="section-subtitle">{t("faq.subtitle")}</p>
        </div>

        <div className="faq-list" role="list">
          {FAQ_IDS.map((id, i) => {
            const isOpen = openId === id;
            const Icon = faqIcons[id];
            return (
              <div
                key={id}
                className={`faq-item stagger-child${isOpen ? " faq-item--open" : ""}`}
                style={{ "--stagger-i": i } as React.CSSProperties}
                role="listitem"
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggle(id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${id}`}
                  id={`faq-trigger-${id}`}
                >
                  <div className="faq-question-wrap">
                    <span className="faq-topic-badge" aria-hidden>
                      <Icon />
                    </span>
                    <span className="faq-question">{t(`faq.items.${id}.q`)}</span>
                  </div>
                  <Chevron open={isOpen} />
                </button>

                {/* CSS Grid height animation: 0fr ↔ 1fr */}
                <div
                  id={`faq-answer-${id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${id}`}
                  className="faq-answer-wrap"
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  <div className="faq-answer-inner">
                    <p className="faq-answer">{t(`faq.items.${id}.a`)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
