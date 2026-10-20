import { getTranslations } from "next-intl/server";

/* ── 8 Distinct, Highly Expressive Medical Credentials Icons ──────────────── */

/** 1. MBBS: Bachelor of Medicine & Surgery (Stethoscope with heartbeat waveform) */
const StethoscopeHeart = () => (
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

/** 2. MD: Medical Doctorate in OB/GYN (Doctoral mortarboard with scroll & laurel) */
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

/** 3. Fellowship UK: MRCOG London (Royal Crown of the Royal College with shield) */
const RoyalCollegeCrown = () => (
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
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    <circle cx="12" cy="4" r="1" />
    <circle cx="5" cy="4" r="1" />
    <circle cx="19" cy="4" r="1" />
  </svg>
);

/** 4. Fellowship EU: GESEA European Endoscopy (European stars circle with trocar precision cross) */
const EuropeanEndoscopy = () => (
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
    <path d="m14 10-4 4m0-4 4 4" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
  </svg>
);

/** 5. Lecturer: Faculty Lecturer & Supervisor (Academic lecture podium & chalkboard) */
const LecturerPodium = () => (
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
    <path d="M4 19h16" />
    <path d="M4 4h16v10H4z" />
    <path d="M12 14v5" />
    <path d="M8 8h5M8 11h8" />
  </svg>
);

/** 6. Consultant: Senior Consultant Surgeon & IVF Expert (Surgical scrub badge with star of mastery) */
const SurgeonConsultant = () => (
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
    <circle cx="12" cy="8" r="5" />
    <path d="M3 21v-2a7 7 0 0 1 14 0v2" />
    <path d="M17 11l2 2 4-4" />
    <path d="M8 8h.01M16 8h.01" />
  </svg>
);

/** 7. Kasr Al-Ainy: Cairo University Hospitals (Hospital medical center with health cross) */
const KasrAlAinyHospital = () => (
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
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M12 7v10M7 12h10" />
    <path d="M9 21v-3h6v3" />
  </svg>
);

/** 8. Society: EFSS Egyptian Fertility Society (Fertility DNA double-helix / embryo life node) */
const FertilitySociety = () => (
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
  | "mbbs"
  | "md"
  | "fellowship_uk"
  | "fellowship_eu"
  | "lecturer"
  | "consultant"
  | "kasr_al_aini"
  | "society";

type Credential = {
  id: CredentialId;
  icon: React.FC;
  variant: "blue" | "pink";
};

const CREDENTIALS: Credential[] = [
  { id: "mbbs", icon: StethoscopeHeart, variant: "blue" },
  { id: "md", icon: DoctorateDegree, variant: "pink" },
  { id: "fellowship_uk", icon: RoyalCollegeCrown, variant: "blue" },
  { id: "fellowship_eu", icon: EuropeanEndoscopy, variant: "pink" },
  { id: "lecturer", icon: LecturerPodium, variant: "blue" },
  { id: "consultant", icon: SurgeonConsultant, variant: "pink" },
  { id: "kasr_al_aini", icon: KasrAlAinyHospital, variant: "blue" },
  { id: "society", icon: FertilitySociety, variant: "pink" },
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
