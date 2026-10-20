import { getTranslations } from "next-intl/server";

const TIP_IDS = ["hydration", "checkup", "nutrition", "exercise"] as const;
type TipId = (typeof TIP_IDS)[number];

/* ── 4 Distinct, Expressive Icons for Doctor's Health Advice ─────────────── */

/** 1. Hydration: Water droplet with internal cell vitality ripples */
const HydrationDrop = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="tip-icon-svg"
  >
    <path d="M12 2.5C12 2.5 5 11 5 16a7 7 0 0 0 14 0c0-5-7-13.5-7-13.5z" />
    <path d="M9 16c0 1.66 1.34 3 3 3" />
    <path d="M12 11v2" />
  </svg>
);

/** 2. Checkup: Medical ultrasound probe transducer with acoustic soundwave arcs */
const UltrasoundProbe = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="tip-icon-svg"
  >
    {/* Ultrasound wand transducer */}
    <rect x="8" y="2" width="8" height="12" rx="3" />
    <path d="M10 14v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4" />
    <path d="M12 20v2" />
    {/* Acoustic soundwaves emanating into tissue */}
    <path d="M5 8a7 7 0 0 0 0 8" />
    <path d="M19 8a7 7 0 0 1 0 8" />
    <path d="M12 6h.01" />
  </svg>
);

/** 3. Nutrition: Organic botanical leaf paired with therapeutic vitamin capsule */
const NutritionCapsule = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="tip-icon-svg"
  >
    {/* Healthy natural leaf */}
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.5 12 13 13 12" />
    {/* Mineral vitality spark */}
    <circle cx="16" cy="14" r="1.5" />
    <path d="M19 12v4M17 14h4" strokeWidth={1.5} />
  </svg>
);

/** 4. Exercise: Safe maternal wellness silhouette & pelvic mobility wave */
const MaternalWellnessMotion = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="tip-icon-svg"
  >
    {/* Figure head */}
    <circle cx="12" cy="5" r="2.5" />
    {/* Elegant posture with pelvic floor alignment */}
    <path d="M12 8v5" />
    <path d="M8 11c2-1 6-1 8 0" />
    <path d="M9 16c1.5 2 4.5 2 6 0" />
    {/* Gentle supportive mobility wave */}
    <path d="M3 19c3-1 6-1 9 1s6 2 9 1" />
  </svg>
);

const tipIcons: Record<TipId, React.FC> = {
  hydration: HydrationDrop,
  checkup: UltrasoundProbe,
  nutrition: NutritionCapsule,
  exercise: MaternalWellnessMotion,
};

export async function Tips() {
  const t = await getTranslations("about");

  return (
    <section className="tips-section reveal-section" aria-labelledby="tips-heading">
      {/* Decorative ambient background radial */}
      <div className="tips-blob" aria-hidden />

      <div className="section-container tips-inner">
        <div className="section-header">
          <span className="section-eyebrow">{t("tips.eyebrow")}</span>
          <h2 id="tips-heading" className="section-title">
            {t("tips.title")}
          </h2>
          <p className="section-subtitle">{t("tips.subtitle")}</p>
        </div>

        <div className="tips-grid" role="list">
          {TIP_IDS.map((id, i) => {
            const Icon = tipIcons[id];
            const num = String(i + 1).padStart(2, "0");
            return (
              <article
                key={id}
                className="tip-card stagger-child"
                style={{ "--stagger-i": i } as React.CSSProperties}
                role="listitem"
              >
                {/* Oversized background number */}
                <span className="tip-number" aria-hidden>
                  {num}
                </span>

                {/* Icon circle */}
                <div className="tip-icon-circle">
                  <Icon />
                </div>

                {/* Content */}
                <h3 className="tip-title">{t(`tips.items.${id}.title`)}</h3>
                <p className="tip-body">{t(`tips.items.${id}.body`)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
