"use client";

import { useState } from "react";

import type { FaqItemData, FaqItemId } from "./types";

/* ── 4 Bespoke Medical Topic Icons ────────────────────────────────────────── */
const BookingIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="m9 16 2 2 4-4" />
  </svg>
);

const PainlessBirthIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M9 10h.01M15 10h.01" />
    <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
  </svg>
);

const FibroidsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const RoboticSurgeryIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    <path d="m18 6 3-3m-3 15 3 3M6 6 3 3m3 15-3 3" />
  </svg>
);

const PhoneCallIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-3.5 w-3.5"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LocationPinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-3.5 w-3.5"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`h-4 w-4 transition-transform duration-300 ${
      isOpen ? "rotate-180 text-white" : "text-muted-foreground"
    }`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ICON_MAP = {
  booking: BookingIcon,
  painlessBirth: PainlessBirthIcon,
  fibroids: FibroidsIcon,
  robotic: RoboticSurgeryIcon,
};

interface FaqAccordionProps {
  items: FaqItemData[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  // Start with item 4 active (as requested in user's reference snippet)
  const [openId, setOpenId] = useState<FaqItemId | null>("robotic");

  const toggle = (id: FaqItemId) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className="faq-list space-y-4"
      role="region"
      aria-label="Frequently Asked Questions"
    >
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const Icon = ICON_MAP[item.id];

        return (
          <div
            key={item.id}
            className={`faq-item ${isOpen ? "active faq-item--open" : ""} stagger-child`}
            style={{ "--stagger-i": index } as React.CSSProperties}
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 100}
          >
            {/* Top accent highlight shimmer line */}
            <div className="faq-item-accent-bar" aria-hidden="true" />

            {/* Question Header Button */}
            <button
              type="button"
              className="faq-question w-full text-start"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-question-${item.id}`}
            >
              <div className="faq-question-content flex items-center gap-3.5">
                <span className="faq-topic-icon-box" aria-hidden="true">
                  <Icon />
                </span>
                <span className="faq-question-text">{item.question}</span>
              </div>

              <div
                className={`faq-chevron-box ${
                  isOpen
                    ? "bg-[var(--brand-pink)] text-white shadow-md shadow-[var(--brand-pink)]/25"
                    : ""
                }`}
                aria-hidden="true"
              >
                <ChevronIcon isOpen={isOpen} />
              </div>
            </button>

            {/* Expandable Answer Container */}
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              className={`faq-answer-wrapper ${isOpen ? "faq-answer-wrapper--open" : ""}`}
            >
              <div className="faq-answer-inner">
                <div className="faq-answer">
                  <p className="faq-answer-text">{item.answer}</p>

                  {/* If the item has branch booking cards (Question 1) */}
                  {item.branches && item.branches.length > 0 && (
                    <div className="faq-branches-grid mt-4 grid gap-3 sm:grid-cols-2">
                      {item.branches.map((branch) => (
                        <div key={branch.name} className="faq-branch-card">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h5 className="faq-branch-name font-bold text-foreground">
                                {branch.name}
                              </h5>
                              <p className="faq-branch-address mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                                <LocationPinIcon />
                                <span>{branch.address}</span>
                              </p>
                            </div>
                          </div>

                          <div className="mt-3 flex items-center gap-2">
                            <a
                              href={`tel:${branch.phone}`}
                              className="faq-branch-tel-btn inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all"
                              dir="ltr"
                            >
                              <PhoneCallIcon />
                              <span>{branch.phone}</span>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
