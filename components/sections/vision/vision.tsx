import { getTranslations } from "next-intl/server";

import { routePaths } from "@/config/routes";
import { Link } from "@/i18n/navigation";

import type { VisionCardConfig, VisionCardItem, VisionProps } from "./types";

/* ── 1. Infant & Painless Delivery Icon (Soft maternal & newborn care) ──── */
const VisionBabyIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-7 w-7 transition-transform duration-500 group-hover:scale-110"
  >
    {/* Baby head silhouette */}
    <circle cx="12" cy="11" r="5" strokeWidth={1.9} />
    {/* Calm closed eyes */}
    <path d="M10 10.5c.3-.3.8-.3 1.1 0" />
    <path d="M13 10.5c.3-.3.8-.3 1.1 0" />
    {/* Gentle smile */}
    <path d="M11 13c.6.5 1.4.5 2 0" />
    {/* Pacifier button */}
    <circle cx="12" cy="14" r="1" fill="currentColor" />
    {/* Swaddle wraps / nurturing embrace */}
    <path d="M7 17a8 8 0 0 0 10 0" strokeWidth={1.9} />
    <path d="M5.5 20a11.5 11.5 0 0 0 13 0" />
    {/* Sparkle of new life */}
    <path
      d="m19 5 1 2 2 1-2 1-1 2-1-2-2-1 2-1z"
      fill="currentColor"
      stroke="none"
      className="text-[var(--brand-pink)] opacity-90"
    />
  </svg>
);

/* ── 2. Heartbeat & Pregnancy Pulse Icon (Fetal monitoring & 4D ultrasound) ─ */
const VisionHeartbeatIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-7 w-7 transition-transform duration-500 group-hover:scale-110"
  >
    {/* Maternal Heart Contour */}
    <path
      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
      strokeWidth={1.9}
    />
    {/* Vital ECG pulse waveform leaping across */}
    <path
      d="M3 13h4l2.2-4.5 3.2 9 2.6-6 1.8 3h4.2"
      stroke="var(--brand-blue)"
      strokeWidth={2.2}
      className="drop-shadow-sm"
    />
  </svg>
);

/* ── 3. Advanced Laparoscopy & Procedures Icon (Minimally invasive surgery) ── */
const VisionProceduresIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-7 w-7 transition-transform duration-500 group-hover:scale-110"
  >
    {/* Surgical procedure table & precision posture */}
    <path d="M3 17h18M6 17v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" strokeWidth={1.9} />
    <circle cx="8" cy="7" r="2.2" />
    <path d="M5 21v-4M19 21v-4" />
    {/* Laparoscopic optical scope / precision beam */}
    <line
      x1="14"
      y1="3"
      x2="11.5"
      y2="9.5"
      stroke="var(--brand-blue)"
      strokeWidth={2.2}
    />
    {/* Precision micro-crosshair */}
    <circle cx="14" cy="3" r="1.5" fill="var(--brand-pink)" stroke="none" />
    <path
      d="M10 13.5l1.5-2.5 2 4.5 1.5-2"
      stroke="var(--brand-blue)"
      strokeWidth={1.8}
    />
  </svg>
);

/* ── Compass & Discovery Sparkle Icon (Eyebrow Badge) ────────────────────── */
const CompassSparkleIcon = () => (
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
    <circle cx="12" cy="12" r="9" />
    <polygon
      points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
      fill="var(--brand-pink)"
      stroke="none"
    />
  </svg>
);

/* ── Arrow Left (RTL-aware) Icon ─────────────────────────────────────────── */
const ArrowLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4 transition-transform duration-300 rtl:rotate-180 group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CARD_CONFIGS: VisionCardConfig[] = [
  {
    id: "painlessBirth",
    accentColor: "pink",
    href: routePaths.obstetrics,
  },
  {
    id: "pregnancyCare",
    accentColor: "blue",
    href: routePaths.obstetrics,
  },
  {
    id: "laparoscopy",
    accentColor: "teal",
    href: routePaths.laparoscopy,
  },
];

const ICON_MAP = {
  painlessBirth: VisionBabyIcon,
  pregnancyCare: VisionHeartbeatIcon,
  laparoscopy: VisionProceduresIcon,
};

export async function VisionSection({ className = "" }: VisionProps) {
  const t = await getTranslations("home.visionSection");

  const cards: VisionCardItem[] = CARD_CONFIGS.map((config) => ({
    ...config,
    title: t(`cards.${config.id}.title`),
    subtitle: t(`cards.${config.id}.subtitle`),
    description: t(`cards.${config.id}.description`),
    badge: t(`cards.${config.id}.badge`),
    linkText: t(`cards.${config.id}.linkText`),
  }));

  return (
    <section
      id="vision"
      className={`vision-section reveal-section ${className}`}
      aria-labelledby="vision-heading"
      data-aos="fade-up"
    >
      {/* Decorative ambient blurred color spots */}
      <div
        className="vision-ambient-glow vision-ambient-glow-pink"
        aria-hidden="true"
      />
      <div
        className="vision-ambient-glow vision-ambient-glow-blue"
        aria-hidden="true"
      />

      <div className="section-container container">
        {/* ── Section Title & Doctor Vision Narrative ────────────────────── */}
        <div className="vision-header section-title" data-aos="fade-up">
          <div className="vision-eyebrow-box">
            <CompassSparkleIcon />
            <span className="vision-eyebrow">{t("eyebrow")}</span>
          </div>

          <h2 id="vision-heading" className="vision-main-heading">
            {t("title")}
          </h2>

          <p className="vision-main-subtitle">{t("description")}</p>
        </div>

        {/* ── 3 Vision Medical Cards ─────────────────────────────────────── */}
        <div className="vision-cards">
          {cards.map((card, index) => {
            const Icon = ICON_MAP[card.id];

            return (
              <article
                key={card.id}
                className={`vision-card vision-card-${card.accentColor} stagger-child group`}
                style={{ "--stagger-i": index } as React.CSSProperties}
                data-aos="zoom-in"
                data-aos-delay={(index + 1) * 100}
              >
                {/* Subtle top border illumination */}
                <div className="vision-card-accent-bar" aria-hidden="true" />

                {/* Card Top: Glowing Icon & Category Badge */}
                <div className="vision-card-top">
                  <div className="vision-icon-wrapper">
                    <div className="vision-icon-halo" aria-hidden="true" />
                    <Icon />
                  </div>
                  <span className="vision-badge">{card.badge}</span>
                </div>

                {/* Card Body: Title, Subtitle & Comprehensive Details */}
                <div className="vision-card-body">
                  <h3 className="vision-card-title">{card.title}</h3>
                  <p className="vision-card-subtitle">{card.subtitle}</p>
                  <p className="vision-card-desc">{card.description}</p>
                </div>

                {/* Card Footer: Clinical Service Link */}
                <div className="vision-card-footer">
                  <Link
                    href={card.href}
                    className="vision-card-link group/link"
                    aria-label={`${card.title} - ${card.linkText}`}
                  >
                    <span>{card.linkText}</span>
                    <ArrowLinkIcon />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
