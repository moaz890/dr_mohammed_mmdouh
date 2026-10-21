import { getTranslations } from "next-intl/server";

/* ── 4 Bespoke Medical Care Philosophy Icons ────────────────────────────── */

/** 1. Listening & Empathy: Attentive ear with heart pulse */
const ListeningEarHeart = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="h-6 w-6"
  >
    <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10" />
    <path d="M12 8.5a2.5 2.5 0 0 1 5 0c0 3-2.5 3-2.5 5" />
    <circle cx="10" cy="19" r="1" fill="currentColor" />
  </svg>
);

/** 2. Shared Decision-Making: Handshake & mutual collaborative balance */
const SharedDecisionHands = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="h-6 w-6"
  >
    <path d="M16 11V7a4 4 0 0 0-8 0v4" />
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <circle cx="12" cy="16" r="1.5" />
  </svg>
);

/** 3. Continuous Support: Protective nurturing embrace & life branch */
const ContinuousSupport = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="h-6 w-6"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 11v6M9 14h6" strokeWidth={2} />
  </svg>
);

/** 4. Patient Safety: Shield of medical security with checkmark */
const PatientSafetyShield = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="h-6 w-6"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" strokeWidth={2} />
  </svg>
);

/* Quote Icon */
const QuoteMark = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    className="h-8 w-8 text-[var(--brand-pink)]/40"
  >
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
);

const PILLARS = [
  { id: "listening", icon: ListeningEarHeart, variant: "blue" },
  { id: "decision", icon: SharedDecisionHands, variant: "pink" },
  { id: "support", icon: ContinuousSupport, variant: "blue" },
  { id: "safety", icon: PatientSafetyShield, variant: "pink" },
] as const;

export async function Philosophy() {
  const t = await getTranslations("about");

  return (
    <section
      className="philosophy-section reveal-section"
      aria-labelledby="philosophy-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">{t("philosophy.eyebrow")}</span>
          <h2 id="philosophy-heading" className="section-title">
            {t("philosophy.title")}
          </h2>
          <p className="section-subtitle">{t("philosophy.subtitle")}</p>
        </div>

        {/* Narrative Card */}
        <div
          className="philosophy-manifesto-card stagger-child"
          style={{ "--stagger-i": 0 } as React.CSSProperties}
        >
          <div className="philosophy-manifesto-quote-icon">
            <QuoteMark />
          </div>

          <div className="philosophy-manifesto-content">
            <p className="philosophy-manifesto-lead">{t("philosophy.p1")}</p>
            <p className="philosophy-manifesto-secondary">{t("philosophy.p2")}</p>

            <div className="philosophy-manifesto-footer">
              <span className="philosophy-clinic-badge">
                {t("philosophy.clinicName")}
              </span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="philosophy-pillars-grid" role="list">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`philosophy-pillar-card stagger-child philosophy-pillar-card--${pillar.variant}`}
                style={{ "--stagger-i": i + 1 } as React.CSSProperties}
                role="listitem"
              >
                <div
                  className={`philosophy-pillar-icon-box philosophy-pillar-icon-box--${pillar.variant}`}
                  aria-hidden
                >
                  <Icon />
                </div>
                <h3 className="philosophy-pillar-title">
                  {t(`philosophy.pillars.${pillar.id}.title`)}
                </h3>
                <p className="philosophy-pillar-desc">
                  {t(`philosophy.pillars.${pillar.id}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
