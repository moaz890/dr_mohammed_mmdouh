import { getTranslations } from "next-intl/server";

import { routePaths } from "@/config/routes";
import { Link } from "@/i18n/navigation";

/* ── 6 Expressive, Medically-Accurate Specialty Icons ─────────────────────── */

/** 1. Robotic Surgery: Articulated multi-joint robotic surgical arm with precision micro-forceps */
const RoboticSurgeryArm = () => (
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
    {/* Base console */}
    <rect x="3" y="18" width="6" height="4" rx="1" />
    {/* Joint 1 */}
    <circle cx="6" cy="18" r="1.5" />
    <path d="M6 16.5l3-6.5" />
    {/* Joint 2 */}
    <circle cx="9" cy="10" r="1.5" />
    <path d="M10.2 9l5-2" />
    {/* Wrist Joint */}
    <circle cx="15.5" cy="7" r="1.5" />
    <path d="M16.5 6l3-3m-1 5l3-1" />
    {/* Laser guidance beam */}
    <path d="M21 2l-2 2" strokeDasharray="1 1" />
  </svg>
);

/** 2. Laparoscopy: Fiberoptic laparoscope telescope with trocar sheath and illuminated tip */
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
    {/* Camera handle */}
    <path d="m3 3 4 4" strokeWidth={2.4} />
    <circle cx="4" cy="4" r="2" />
    {/* Long fine optical shaft */}
    <path d="M6 6l11 11" strokeWidth={2} />
    {/* Trocar collar sleeve */}
    <rect
      x="13.5"
      y="11.5"
      width="4"
      height="2"
      transform="rotate(45 13.5 11.5)"
      rx="0.5"
    />
    {/* Optical light lens & beam at tip */}
    <circle cx="19" cy="19" r="2" />
    <path d="M19 16v-1M22 19h1M20.5 17.5l1-1" />
  </svg>
);

/** 3. Fibroids: Uterine anatomical contour with localized fibroid focus & protective shield */
const UterineFibroidsShield = () => (
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
    {/* Uterus fundus & fallopian tube arches */}
    <path d="M12 21v-4" />
    <path d="M9 17h6" />
    <path d="M8 15c-3-2-5-6-5-9 0-1.5 1-2.5 2.5-2.5 2 0 3.5 2 6.5 2s4.5-2 6.5-2c1.5 0 2.5 1 2.5 2.5 0 3-2 7-5 9" />
    {/* Focal fibroid node being treated */}
    <circle cx="12" cy="10.5" r="2.5" />
    <circle cx="12" cy="10.5" r="1" />
  </svg>
);

/** 4. Endometriosis: Precision pelvic micro-excision crosshair & restorative flower of life */
const EndometriosisExcision = () => (
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
    {/* Pelvic protective cradle */}
    <path d="M4 8c2 7 8 12 8 12s6-5 8-12" />
    <path d="M7 6c3-2 7-2 10 0" />
    {/* Micro-targeted laser excision cross */}
    <circle cx="12" cy="11" r="3" />
    <path d="M12 6.5v2M12 13.5v2M7.5 11h2M14.5 11h2" />
    <circle cx="12" cy="11" r="0.75" />
  </svg>
);

/** 5. Hysterectomy: Laparoscopic surgical forceps with healing medical cross */
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
    {/* Scissor / grasper handles */}
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    {/* Crossing surgical shafts */}
    <path d="M8 16.5l3.5-4.5" />
    <path d="M16 16.5l-3.5-4.5" />
    {/* Precision shaft to tip */}
    <path d="M12 12V3" strokeWidth={2} />
    {/* Grasping micro-jaws */}
    <path d="M10 3.5h4M10.5 2l1.5 1 1.5-1" />
    {/* Healing cross indicator */}
    <path d="M19 6h4M21 4v4" />
  </svg>
);

/** 6. Painless Delivery: Loving mother figure tenderly embracing newborn infant */
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
    {/* Mother head */}
    <circle cx="9" cy="6" r="3" />
    {/* Mother protective arm embrace */}
    <path d="M4 18c0-3.5 2.5-6.5 6-7.5" />
    <path d="M6 18c2 3 8 3 11 0" />
    {/* Baby head */}
    <circle cx="15.5" cy="11" r="2.2" />
    {/* Swaddled baby body in mother's arms */}
    <path d="M13 14.5c1.5 2 4.5 2 6 0 1-1.5 0-3.5-2-4" />
    {/* Reassurance heartbeat */}
    <path d="M18.5 4.5c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8L19.5 9l-1.8-1.7a2 2 0 0 1 0-2.8z" />
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
  | "robotic"
  | "laparoscopy"
  | "fibroids"
  | "endometriosis"
  | "hysterectomy"
  | "delivery";

type Specialty = {
  id: SpecialtyId;
  icon: React.FC;
  href: string;
  accentClass: "blue" | "pink";
};

const SPECIALTIES: Specialty[] = [
  {
    id: "robotic",
    icon: RoboticSurgeryArm,
    href: routePaths.laparoscopy,
    accentClass: "blue",
  },
  {
    id: "laparoscopy",
    icon: LaparoscopeTrocar,
    href: routePaths.laparoscopy,
    accentClass: "pink",
  },
  {
    id: "fibroids",
    icon: UterineFibroidsShield,
    href: routePaths.gynecology,
    accentClass: "blue",
  },
  {
    id: "endometriosis",
    icon: EndometriosisExcision,
    href: routePaths.gynecology,
    accentClass: "pink",
  },
  {
    id: "hysterectomy",
    icon: SurgicalLaparoscopyTool,
    href: routePaths.services,
    accentClass: "blue",
  },
  {
    id: "delivery",
    icon: MotherAndNewborn,
    href: routePaths.obstetrics,
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
