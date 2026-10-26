import { getTranslations } from "next-intl/server";

import { buildWhatsAppUrl } from "@/lib/whatsapp";

import { LocationsMapTabs } from "./locations-map-tabs";
import type {
  BranchLocationId,
  BranchLocationItem,
  LocationsSectionProps,
} from "./types";

/* ── Map Marker Pin Icon ─────────────────────────────────────────────────── */
const MapMarkerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-6 w-6 text-[var(--brand-pink)]"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

/* ── Phone Call Icon ─────────────────────────────────────────────────────── */
const PhoneSolidIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

/* ── WhatsApp Icon ───────────────────────────────────────────────────────── */
const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-4 w-4 text-[#25D366]"
  >
    <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.957.564 3.782 1.541 5.328L2 22l4.792-1.505a9.98 9.98 0 0 0 5.239 1.488c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.727 14.157c-.242.679-1.205 1.282-1.996 1.455-.54.118-1.246.212-3.616-.769-3.033-1.254-4.991-4.343-5.143-4.544-.147-.202-1.222-1.626-1.222-3.102 0-1.475.772-2.2 1.045-2.502.274-.303.596-.379.794-.379.199 0 .398.002.571.011.184.01.43-.07.673.513.25.597.854 2.083.929 2.235.075.152.124.331.025.533-.1.202-.15.327-.298.502-.149.176-.312.392-.446.527-.149.149-.304.312-.131.61.173.298.769 1.269 1.649 2.052 1.134 1.01 2.09 1.323 2.389 1.472.298.149.472.124.646-.075.174-.199.746-.869.944-1.168.199-.298.398-.249.671-.149.273.099 1.74.82 2.038.969.298.149.497.224.571.348.075.124.075.724-.167 1.403z" />
  </svg>
);

/* ── Eyebrow Compass Icon ────────────────────────────────────────────────── */
const CompassIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4 text-[var(--brand-blue)]"
  >
    <circle cx="12" cy="12" r="10" />
    <polygon
      points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
      fill="currentColor"
    />
  </svg>
);

const BRANCH_CONFIGS: Record<
  BranchLocationId,
  {
    accentColor: "blue" | "pink";
    mapSrc: string;
    directionsUrl: string;
  }
> = {
  newCairo: {
    accentColor: "blue",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.518!2d31.4533918!3d30.0010579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145823d0f4de36bb%3A0x41df343c0782ea11!2z2KfZhNiv2YPYqtmI2LEg2YXYrdmF2K8g2YXYrdiv2K3YtCDYtdin2YTYrQ!5e0!3m2!1sar!2seg",
    directionsUrl: "https://maps.app.goo.gl/vPkmz1cYdyjekeRE8?g_st=ic",
  },
  madinaty: {
    accentColor: "pink",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.78!2d31.62!3d30.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f5fa861933fd%3A0x6898e38080aec49!2sMedical+Center+1+-+Madinaty+South+Sector!5e0!3m2!1sar!2seg",
    directionsUrl: "https://maps.app.goo.gl/qNRDnm9gEdSfFQ4KA?g_st=ic",
  },
};

const BRANCH_IDS: BranchLocationId[] = ["newCairo", "madinaty"];

export async function LocationsSection({ className = "" }: LocationsSectionProps) {
  const t = await getTranslations("home.locationsSection");

  const branches: BranchLocationItem[] = BRANCH_IDS.map((id) => ({
    id,
    name: t(`branches.${id}.name`),
    city: t(`branches.${id}.city`),
    address: t(`branches.${id}.address`),
    phone: t(`branches.${id}.phone`),
    badge: t(`branches.${id}.badge`),
    accentColor: BRANCH_CONFIGS[id].accentColor,
    mapSrc: BRANCH_CONFIGS[id].mapSrc,
    directionsUrl: BRANCH_CONFIGS[id].directionsUrl,
  }));

  return (
    <section
      id="locations"
      className={`locations-section reveal-section ${className}`}
      aria-labelledby="locations-heading"
      data-aos="fade-up"
    >
      {/* Decorative ambient blurred spots */}
      <div
        className="locations-ambient-glow locations-ambient-glow-1"
        aria-hidden="true"
      />
      <div
        className="locations-ambient-glow locations-ambient-glow-2"
        aria-hidden="true"
      />

      <div className="section-container container">
        {/* ── Section Title ──────────────────────────────────────────────── */}
        <div className="section-title text-center" data-aos="fade-up">
          <div className="locations-eyebrow-box">
            <CompassIcon />
            <span className="locations-eyebrow">{t("eyebrow")}</span>
          </div>

          <h2 id="locations-heading" className="locations-main-heading">
            {t("title")}
          </h2>

          <p className="locations-main-subtitle">{t("subtitle")}</p>
        </div>

        {/* ── Locations Content Layout ────────────────────────────────────── */}
        <div className="locations-content space-y-12">
          {/* ── 2 Location Cards (Side by Side) ─────────────────────────── */}
          <div
            className="locations-cards grid gap-6 sm:gap-8 lg:grid-cols-2"
            data-aos="fade-left"
          >
            {branches.map((branch, index) => {
              const whatsappUrl = buildWhatsAppUrl(
                `مرحباً دكتور محمد صالح، أود حجز موعد في ${branch.name}.`,
                branch.phone,
              );

              return (
                <article
                  key={branch.id}
                  className={`location-card location-card-${branch.accentColor} stagger-child group`}
                  style={{ "--stagger-i": index } as React.CSSProperties}
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 120}
                >
                  {/* Top shimmer accent bar */}
                  <div className="location-card-accent-bar" aria-hidden="true" />

                  <div className="location-card-body flex items-start gap-4 sm:gap-5">
                    {/* Glowing Marker Icon Box */}
                    <div className="location-icon-wrapper flex size-14 shrink-0 items-center justify-center rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-110">
                      <div className="location-icon-halo" aria-hidden="true" />
                      <MapMarkerIcon />
                    </div>

                    <div className="location-card-info flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="location-card-name text-xl font-extrabold text-foreground transition-colors group-hover:text-[var(--brand-blue)]">
                          {branch.name}
                        </h3>
                        <span className="location-card-badge rounded-full px-3 py-1 text-xs font-bold">
                          {branch.badge}
                        </span>
                      </div>

                      <p className="location-card-address mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {branch.address}
                      </p>

                      {/* Contact Action Buttons */}
                      <div className="location-actions mt-5 flex flex-wrap items-center gap-2.5">
                        <a
                          href={`tel:${branch.phone}`}
                          className="location-phone-btn inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold shadow-sm transition-all sm:text-sm"
                          dir="ltr"
                          aria-label={`اتصال بـ ${branch.name}: ${branch.phone}`}
                        >
                          <PhoneSolidIcon />
                          <span>{branch.phone}</span>
                        </a>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="location-whatsapp-btn inline-flex items-center gap-1.5 rounded-xl border border-border px-3.5 py-2 text-xs font-bold transition-all sm:text-sm"
                        >
                          <WhatsAppIcon />
                          <span>{t("whatsappBtn")}</span>
                        </a>

                        <a
                          href={branch.directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="location-directions-btn inline-flex items-center gap-1.5 rounded-xl border border-border px-3.5 py-2 text-xs font-bold text-muted-foreground transition-all hover:text-foreground sm:text-sm"
                        >
                          <MapMarkerIcon />
                          <span>{t("directionsBtn")}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ── Interactive Map Section ─────────────────────────────────── */}
          <div className="locations-map-section mt-10">
            <div className="map-heading-wrapper mb-6 flex items-center justify-center gap-2 text-center">
              <span className="text-xl" role="img" aria-label="pin">
                📍
              </span>
              <h3
                id="map"
                className="text-xl font-extrabold text-foreground sm:text-2xl"
              >
                {t("mapHeading")}
              </h3>
            </div>

            <div className="map-container aos-init aos-animate" data-aos="fade-right">
              <LocationsMapTabs
                branches={branches}
                directionsLabel={t("directionsBtn")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
