import { getTranslations } from "next-intl/server";

/* Icons */
const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="clinic-icon-svg"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.53 2 2 0 0 1 3.6 1.36h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPin = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="clinic-icon-svg"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ExternalLink = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="h-4 w-4"
  >
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

type Branch = {
  id: "new_cairo" | "madinaty";
  accent: "blue" | "pink";
  /* Google Maps embed src */
  mapSrc: string;
  /* directions URL */
  mapUrl: string;
};

const BRANCHES: Branch[] = [
  {
    id: "new_cairo",
    accent: "blue",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.518!2d31.4533918!3d30.0010579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145823d0f4de36bb%3A0x41df343c0782ea11!2z2KfZhNiv2YPYqtmI2LEg2YXYrdmF2K8g2YXYrdiv2K3YtCDYtdin2YTYrQ!5e0!3m2!1sar!2seg",
    mapUrl: "https://maps.app.goo.gl/vPkmz1cYdyjekeRE8?g_st=ic",
  },
  {
    id: "madinaty",
    accent: "pink",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.78!2d31.62!3d30.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f5fa861933fd%3A0x6898e38080aec49!2sMedical+Center+1+-+Madinaty+South+Sector!5e0!3m2!1sar!2seg",
    mapUrl: "https://maps.app.goo.gl/qNRDnm9gEdSfFQ4KA?g_st=ic",
  },
];

export async function Clinics() {
  const t = await getTranslations("about");

  return (
    <section
      className="clinics-section reveal-section"
      aria-labelledby="clinics-heading"
    >
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">{t("clinics.eyebrow")}</span>
          <h2 id="clinics-heading" className="section-title">
            {t("clinics.title")}
          </h2>
          <p className="section-subtitle">{t("clinics.subtitle")}</p>
        </div>

        <div className="clinics-grid" role="list">
          {BRANCHES.map((branch, i) => (
            <div
              key={branch.id}
              className={`clinic-card stagger-child clinic-card--${branch.accent}`}
              style={{ "--stagger-i": i } as React.CSSProperties}
              role="listitem"
            >
              {/* Header band */}
              <div
                className={`clinic-header-band clinic-header-band--${branch.accent}`}
              >
                <h3 className="clinic-name">
                  {t(`clinics.branches.${branch.id}.name`)}
                </h3>
              </div>

              {/* Address + phone */}
              <div className="clinic-info">
                <div className="clinic-detail">
                  <MapPin />
                  <span>{t(`clinics.branches.${branch.id}.address`)}</span>
                </div>
                <div className="clinic-detail">
                  <PhoneIcon />
                  <a
                    href={`tel:${t(`clinics.branches.${branch.id}.phone`)}`}
                    className="clinic-phone-link"
                  >
                    {t(`clinics.branches.${branch.id}.phone`)}
                  </a>
                </div>
              </div>

              {/* Map iframe */}
              <div className="clinic-map-frame">
                <iframe
                  src={branch.mapSrc}
                  title={`موقع ${t(`clinics.branches.${branch.id}.name`)}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="clinic-map"
                  allowFullScreen
                />
              </div>

              {/* Actions */}
              <div className="clinic-actions">
                <a
                  href={`tel:${t(`clinics.branches.${branch.id}.phone`)}`}
                  className={`clinic-btn clinic-btn--primary clinic-btn--${branch.accent}`}
                >
                  <PhoneIcon />
                  {t("clinics.callBtn")}
                </a>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clinic-btn clinic-btn--outline"
                >
                  <ExternalLink />
                  {t("clinics.directionsBtn")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
