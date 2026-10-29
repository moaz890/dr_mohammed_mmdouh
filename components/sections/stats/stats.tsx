import { getTranslations } from "next-intl/server";

import { StatCounter } from "./stat-counter";
import type { StatItem, StatsProps } from "./types";

/* ── 4 Bespoke Medical Stat Icons ─────────────────────────────────────────── */

/** 1. Calendar & Clinical Experience (Calendar with checkmark badge & star) */
const StatCalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-8 w-8 text-[var(--brand-blue)]"
  >
    {/* Calendar frame */}
    <rect x="3" y="4" width="18" height="18" rx="3" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    {/* Date markers */}
    <circle cx="8" cy="14" r="1" fill="currentColor" />
    <circle cx="12" cy="14" r="1" fill="currentColor" />
    {/* Verified Checkmark badge */}
    <path d="m14 17.5 2 2 4-4" stroke="var(--brand-pink)" strokeWidth={2.2} />
  </svg>
);

/** 2. Surgical Procedures & Advanced Laparoscopy (Operating bed & pulse waveform) */
const StatProceduresIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-8 w-8 text-[#25899e]"
  >
    {/* Clinical procedure bed & patient silhouette */}
    <path d="M3 17h18M6 17v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
    <circle cx="8" cy="7" r="2.5" />
    {/* Hospital bed legs */}
    <path d="M5 21v-4M19 21v-4" />
    {/* Vital pulse surge */}
    <path d="M13 13.5l1.5-3 2 5 1.5-2" stroke="var(--brand-blue)" strokeWidth={2} />
  </svg>
);

/** 3. Happy Patients & Maternal Care (Mother & baby empathy shield) */
const StatUsersIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-8 w-8 text-[var(--brand-pink)]"
  >
    {/* Mother / Caring figure */}
    <circle cx="9" cy="7" r="3" />
    <path d="M3 20v-2a5 5 0 0 1 8.5-3.5" />
    {/* Protected infant / new life */}
    <circle cx="16.5" cy="10" r="2" />
    <path d="M13.5 20a4 4 0 0 1 6-3.46M19.5 20v-1" />
    {/* Heart accent of safety */}
    <path
      d="M17 3.5a1.5 1.5 0 0 0-2.2 0l-.3.3-.3-.3a1.5 1.5 0 0 0-2.2 2.1l2.5 2.5 2.5-2.5a1.5 1.5 0 0 0 0-2.1z"
      fill="var(--brand-pink-light)"
      stroke="var(--brand-pink)"
      strokeWidth={1.2}
    />
  </svg>
);

/** 4. 5-Star Patient Rating & Excellence (Golden radiant star with laurels) */
const StatStarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-8 w-8 text-[#d97706]"
  >
    {/* Radiant star */}
    <polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      fill="rgba(245, 158, 11, 0.2)"
      stroke="#d97706"
      strokeWidth={1.8}
    />
    {/* Sparkle glint */}
    <path d="M12 6v2M12 16v2M7 12H5M19 12h-2" stroke="#f59e0b" strokeWidth={1.5} />
  </svg>
);

/** 5-Star Mini Rating Row */
const FiveStarRating = () => (
  <div
    className="flex items-center justify-center gap-1 mt-1 text-[#f59e0b]"
    aria-label="5 out of 5 stars"
  >
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4 drop-shadow-[0_1px_2px_rgba(245,158,11,0.3)]"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const STAT_CONFIGS = [
  {
    id: "experience",
    number: 20,
    prefix: "+",
    suffix: "",
    decimals: 0,
    iconType: "calendar",
  },
  {
    id: "surgeries",
    number: 10000,
    prefix: "+",
    suffix: "",
    decimals: 0,
    iconType: "procedures",
  },
  {
    id: "patients",
    number: 50000,
    prefix: "+",
    suffix: "",
    decimals: 0,
    iconType: "users",
  },
  {
    id: "rating",
    number: 5,
    prefix: "",
    suffix: "",
    decimals: 1,
    iconType: "star",
  },
] as const;

export async function Stats({ className = "" }: StatsProps) {
  const t = await getTranslations("home.stats");

  const statItems: StatItem[] = STAT_CONFIGS.map((config) => ({
    ...config,
    label: t(`items.${config.id}.label`),
    description: t(`items.${config.id}.description`),
  }));

  const getIcon = (type: StatItem["iconType"]) => {
    switch (type) {
      case "calendar":
        return <StatCalendarIcon />;
      case "procedures":
        return <StatProceduresIcon />;
      case "users":
        return <StatUsersIcon />;
      case "star":
        return <StatStarIcon />;
    }
  };

  return (
    <section
      id="stats"
      className={`stats-section reveal-section ${className}`}
      aria-label={t("title")}
    >
      <div className="section-container container">
        <div className="stats-grid">
          {statItems.map((item, index) => (
            <div
              key={item.id}
              className={`stat-item stat-item-${item.id} stagger-child`}
              style={{ "--stagger-i": index } as React.CSSProperties}
              data-aos="zoom-in"
              data-aos-delay={(index + 1) * 100}
            >
              {/* Icon badge */}
              <div className={`stat-icon stat-icon-${item.iconType}`}>
                {getIcon(item.iconType)}
              </div>

              {/* Animated number with data-target */}
              <div className="stat-number" dir="ltr" data-target={item.number}>
                <StatCounter
                  target={item.number}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  decimals={item.decimals}
                  delay={index * 100}
                />
              </div>

              {/* Main label (سنة خبرة / عملية ناجحة / ...) */}
              <div className="stat-label">{item.label}</div>

              {/* Sub-label / 5-star rating */}
              {item.id === "rating" ? (
                <FiveStarRating />
              ) : (
                <div className="stat-description">{item.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
