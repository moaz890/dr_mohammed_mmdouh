import { getTranslations } from "next-intl/server";

import { routePaths } from "@/config/routes";
import { Link } from "@/i18n/navigation";

/* ── 6 Expressive, Medically-Accurate Specialty Icons ─────────────────────── */

/** 1. Advanced Gynecologic Laparoscopy: Fiberoptic laparoscope telescope with illuminated tip */
const LaparoscopeTrocar = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="specialty-icon-svg"
  >
    <path d="m3 3 4 4" strokeWidth={2.4} />
    <circle cx="4" cy="4" r="2" />
    <path d="M6 6l11 11" strokeWidth={2} />
    <rect
      x="13.5"
      y="11.5"
      width="4"
      height="2"
      transform="rotate(45 13.5 11.5)"
      rx="0.5"
    />
    <circle cx="19" cy="19" r="2" />
    <path d="M19 16v-1M22 19h1M20.5 17.5l1-1" />
  </svg>
);

/** 2. Laparoscopic Hysterectomy: Laparoscopic surgical forceps with healing medical cross */
const SurgicalLaparoscopyTool = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="specialty-icon-svg"
  >
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <path d="M8 16.5l3.5-4.5" />
    <path d="M16 16.5l-3.5-4.5" />
    <path d="M12 12V3" strokeWidth={2} />
    <path d="M10 3.5h4M10.5 2l1.5 1 1.5-1" />
    <path d="M19 6h4M21 4v4" />
  </svg>
);

/** 3. Infertility & ICSI: Reproductive fertility cell node & micropipette precision */
const FertilityIcsiNode = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="specialty-icon-svg"
  >
    <circle cx="12" cy="12" r="7" strokeDasharray="3 2" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <path d="M2 12h3M19 12h3M12 2v3M12 19v3" />
    <path d="m5 5 2 2M17 17l2 2" />
  </svg>
);

/** 4. Obstetrics & Gynecology: Women's health contour & restorative shield */
const WomensHealthContour = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="specialty-icon-svg"
  >
    <path d="M12 21v-4" />
    <path d="M9 17h6" />
    <path d="M8 15c-3-2-5-6-5-9 0-1.5 1-2.5 2.5-2.5 2 0 3.5 2 6.5 2s4.5-2 6.5-2c1.5 0 2.5 1 2.5 2.5 0 3-2 7-5 9" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

/** 5. Pregnancy & Childbirth: Loving mother figure tenderly embracing newborn infant */
const MotherAndNewborn = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="specialty-icon-svg"
  >
    <circle cx="9" cy="6" r="3" />
    <path d="M4 18c0-3.5 2.5-6.5 6-7.5" />
    <path d="M6 18c2 3 8 3 11 0" />
    <circle cx="15.5" cy="11" r="2.2" />
    <path d="M13 14.5c1.5 2 4.5 2 6 0 1-1.5 0-3.5-2-4" />
    <path d="M18.5 4.5c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8L19.5 9l-1.8-1.7a2 2 0 0 1 0-2.8z" />
  </svg>
);

/** 6. Specialized Gynecologic Surgery: Clinical operating instruments with precision star */
const SpecializedSurgeryIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="specialty-icon-svg"
  >
    <path d="M14 3v4a2 2 0 0 0 2 2h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
    <path d="M9 14l2 2 4-4" strokeWidth={2} />
    <circle cx="12" cy="14" r="5" />
  </svg>
);

const ArrowStart = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="specialty-arrow"
  >
    <path d="M19 12H5" />
    <path d="M12 5l-7 7 7 7" />
  </svg>
);

type SpecialtyId =
  | "laparoscopy"
  | "hysterectomy"
  | "infertility_icsi"
  | "obstetrics_gynecology"
  | "pregnancy_childbirth"
  | "specialized_surgery";

type Specialty = {
  id: SpecialtyId;
  icon: React.FC;
  href: string;
  accentClass: "blue" | "pink";
};

const SPECIALTIES: Specialty[] = [
  {
    id: "laparoscopy",
    icon: LaparoscopeTrocar,
    href: routePaths.laparoscopy,
    accentClass: "blue",
  },
  {
    id: "hysterectomy",
    icon: SurgicalLaparoscopyTool,
    href: routePaths.services,
    accentClass: "pink",
  },
  {
    id: "infertility_icsi",
    icon: FertilityIcsiNode,
    href: routePaths.ivf,
    accentClass: "blue",
  },
  {
    id: "obstetrics_gynecology",
    icon: WomensHealthContour,
    href: routePaths.gynecology,
    accentClass: "pink",
  },
  {
    id: "pregnancy_childbirth",
    icon: MotherAndNewborn,
    href: routePaths.obstetrics,
    accentClass: "blue",
  },
  {
    id: "specialized_surgery",
    icon: SpecializedSurgeryIcon,
    href: routePaths.services,
    accentClass: "pink",
  },
];

export async function Specialties() {
  const t = await getTranslations("about");

  return (
    <section
      className="specialties-section reveal-section"
      aria-labelledby="specialties-heading"
    >
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">{t("specialties.eyebrow")}</span>
          <h2 id="specialties-heading" className="section-title">
            {t("specialties.title")}
          </h2>
          <p className="section-subtitle">{t("specialties.subtitle")}</p>
        </div>

        <div className="specialties-grid" role="list">
          {SPECIALTIES.map((sp, i) => {
            const Icon = sp.icon;
            return (
              <article
                key={sp.id}
                className={`specialty-card stagger-child specialty-card--${sp.accentClass}`}
                style={{ "--stagger-i": i } as React.CSSProperties}
                role="listitem"
              >
                {/* Top gradient line */}
                <div className="specialty-top-bar" aria-hidden />

                {/* Medically accurate expressive icon */}
                <div className="specialty-icon-wrap">
                  <Icon />
                </div>

                {/* Content */}
                <h3 className="specialty-name">
                  {t(`specialties.items.${sp.id}.title`)}
                </h3>
                <p className="specialty-desc">
                  {t(`specialties.items.${sp.id}.description`)}
                </p>

                {/* CTA */}
                <Link
                  href={sp.href}
                  className="specialty-cta"
                  aria-label={`${t("specialties.readMore")} ${t(`specialties.items.${sp.id}.title`)}`}
                >
                  <span>{t("specialties.readMore")}</span>
                  <ArrowStart />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
