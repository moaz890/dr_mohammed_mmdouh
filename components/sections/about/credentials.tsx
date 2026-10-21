import { getTranslations } from "next-intl/server";

/* ── 8 Distinct, Highly Expressive Medical Credentials Icons ──────────────── */

/** 1. M.Sc.: Master's Degree in Obstetrics & Gynecology (Scroll with ribbon & academic seal) */
const MasterDegreeScroll = () => (
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
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <circle cx="12" cy="15" r="3" />
    <path d="m10 18 2 2 2-2" />
  </svg>
);

/** 2. MD: Doctorate in Obstetrics, Gynecology & ICSI (Doctoral mortarboard with laurel & scroll) */
const DoctorateDegree = () => (
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
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12.5V17c2.5 2.5 9.5 2.5 12 0v-4.5" />
    <path d="M10 21h4" />
  </svg>
);

/** 3. GESEA LEVEL 2 MIGS: European Society of Gynaecological Endoscopy Board Certification */
const GeseaCertification = () => (
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
    <circle cx="12" cy="12" r="9" strokeDasharray="2 3" />
    <circle cx="12" cy="12" r="4" />
    <path d="m10 12 1.5 1.5L14.5 10" strokeWidth={2} />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
  </svg>
);

/** 4. ESGE Member: European Society for Gynaecological Endoscopy (Shield & endoscopy telescope) */
const EsgeMembership = () => (
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
    <path d="m9 12 2 2 4-4" strokeWidth={2} />
  </svg>
);

/** 5. ASRM Member: American Society for Reproductive Medicine (Fertility DNA node & vitality) */
const AsrmMembership = () => (
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
    <path d="M2 15c6.667-6 13.333 0 20-6" />
    <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
    <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="5" cy="12" r="1.5" />
    <circle cx="19" cy="12" r="1.5" />
  </svg>
);

/** 6. Senior Consultant: Infertility & ICSI Consultant (Stethoscope with medical star badge) */
const ConsultantBadge = () => (
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
    <path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3" />
    <path d="M9 12.5v3.5a3 3 0 0 0 3 3h2" />
    <circle cx="18" cy="19" r="3" />
    <path d="M2 3h5M11 3h5" />
    <path d="M16 19h1" />
  </svg>
);

/** 7. Advanced Laparoscopy Expert: Laparoscopic Hysterectomy & Complex Surgery (Trocar & precision scope) */
const LaparoscopyExpert = () => (
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
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <path d="M8 16.5l3.5-4.5" />
    <path d="M16 16.5l-3.5-4.5" />
    <path d="M12 12V3" strokeWidth={2} />
    <path d="M10 3.5h4M10.5 2l1.5 1 1.5-1" />
    <circle cx="12" cy="6" r="1" fill="currentColor" />
  </svg>
);

/** 8. Philosophy of Care: Evidence-Based & Compassionate Medical Care (Empathy heart with shield) */
const CarePhilosophy = () => (
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
    <path d="M12 8v6M9 11h6" strokeWidth={2} />
  </svg>
);

const CheckVerified = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="h-3.5 w-3.5"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

type CredentialId =
  | "msc"
  | "md"
  | "gesea"
  | "esge"
  | "asrm"
  | "consultant"
  | "laparoscopy_expert"
  | "care_philosophy";

type Credential = {
  id: CredentialId;
  icon: React.FC;
  variant: "blue" | "pink";
};

const CREDENTIALS: Credential[] = [
  { id: "msc", icon: MasterDegreeScroll, variant: "blue" },
  { id: "md", icon: DoctorateDegree, variant: "pink" },
  { id: "gesea", icon: GeseaCertification, variant: "blue" },
  { id: "esge", icon: EsgeMembership, variant: "pink" },
  { id: "asrm", icon: AsrmMembership, variant: "blue" },
  { id: "consultant", icon: ConsultantBadge, variant: "pink" },
  { id: "laparoscopy_expert", icon: LaparoscopyExpert, variant: "blue" },
  { id: "care_philosophy", icon: CarePhilosophy, variant: "pink" },
];

export async function Credentials() {
  const t = await getTranslations("about");

  return (
    <section
      className="credentials-section reveal-section"
      aria-labelledby="credentials-heading"
    >
      <div className="section-container">
        {/* Section header */}
        <div className="section-header">
          <span className="section-eyebrow">{t("credentials.eyebrow")}</span>
          <h2 id="credentials-heading" className="section-title">
            {t("credentials.title")}
          </h2>
          <p className="section-subtitle">{t("credentials.subtitle")}</p>
        </div>

        {/* Cards grid */}
        <div className="credentials-grid" role="list">
          {CREDENTIALS.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <article
                key={cred.id}
                className={`credential-card stagger-child credential-card--${cred.variant}`}
                style={{ "--stagger-i": i } as React.CSSProperties}
                role="listitem"
              >
                {/* Distinct Icon badge */}
                <div
                  className={`credential-icon-badge credential-icon-badge--${cred.variant}`}
                  aria-hidden
                >
                  <Icon />
                </div>

                {/* Content */}
                <div className="credential-body">
                  <h3 className="credential-title">
                    {t(`credentials.items.${cred.id}.title`)}
                  </h3>
                  <p className="credential-subtitle">
                    {t(`credentials.items.${cred.id}.subtitle`)}
                  </p>
                </div>

                {/* Verified badge */}
                <div className="credential-verified" aria-label="معتمد وموثق">
                  <CheckVerified />
                  <span>{t("credentials.verified")}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
