import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { buttonVariants } from "@/components/ui/button";
import { routePaths } from "@/config/routes";
import { Link } from "@/i18n/navigation";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import type { DoctorBriefProps } from "./types";

/* ── Verified Checkmark Icon ──────────────────────────────────────────────── */
const CheckCircleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-5 w-5 text-[var(--brand-blue)] transition-transform duration-300 group-hover:scale-110"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

/* ── Sparkles Glint Icon ──────────────────────────────────────────────────── */
const SparkleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-4 w-4 text-[var(--brand-pink)]"
  >
    <path d="M12 2L14.39 8.26L21 9.27L16.5 14.14L17.77 21L12 17.77L6.23 21L7.5 14.14L3 9.27L9.61 8.26L12 2Z" />
  </svg>
);

/* ── Arrow Left (RTL-aware) Icon ─────────────────────────────────────────── */
const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4 transition-transform duration-300 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export async function DoctorBrief({
  className = "",
  showFullCta = true,
}: DoctorBriefProps) {
  const t = await getTranslations("home.doctorBrief");
  const whatsappUrl = buildWhatsAppUrl(
    "مرحباً دكتور محمد صالح، أود الاستفسار وحجز موعد استشارة.",
  );

  const credentialItems = [
    t("credentials.c1"),
    t("credentials.c2"),
    t("credentials.c3"),
    t("credentials.c4"),
  ];

  return (
    <section
      id="about"
      data-aos="fade-up"
      className={`about-brief-section reveal-section ${className}`}
      aria-labelledby="about-brief-heading"
    >
      <div className="section-container container">
        <div className="about-content">
          {/* ── Left Column: Doctor Featured Image & Floating Badges ─────── */}
          <div
            className="about-image stagger-child"
            style={{ "--stagger-i": 0 } as React.CSSProperties}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="about-image-wrapper">
              {/* Soft ambient background glow */}
              <div className="about-image-glow" aria-hidden="true" />

              {/* Main portrait frame */}
              <div className="about-image-frame">
                <Image
                  src="/saleh-hero-2.jpeg"
                  alt={t("doctorName")}
                  width={1792}
                  height={2400}
                  priority={false}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                  className="about-img"
                  decoding="async"
                />

                {/* Subtle protective vignette */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Floating Badge 1: 20+ Years Experience (Top-End) */}
              <div className="floating-badge floating-badge-top">
                <div className="badge-icon-box">
                  <SparkleIcon />
                </div>
                <div className="badge-text-box">
                  <span className="badge-title">{t("badge.experience")}</span>
                  <span className="badge-subtitle">{t("badge.trust")}</span>
                </div>
              </div>

              {/* Floating Badge 2: Academic Credibility (Bottom-Start) */}
              <div className="floating-badge floating-badge-bottom">
                <div className="badge-verified-dot" />
                <div className="badge-text-box">
                  <span className="badge-highlight">{t("doctorName")}</span>
                  <span className="badge-sub">{t("credentials.c1")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Text & Academic Credentials ─────────────────── */}
          <div
            className="about-text stagger-child"
            style={{ "--stagger-i": 1 } as React.CSSProperties}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {/* Eyebrow badge */}
            <div className="about-eyebrow-container">
              <span className="about-pulse-dot" />
              <span className="about-eyebrow">{t("eyebrow")}</span>
            </div>

            {/* Doctor Name & Role */}
            <div className="doctor-header-group">
              <span className="doctor-name-accent">{t("doctorName")}</span>
              <p className="doctor-role-text">{t("doctorTitle")}</p>
            </div>

            {/* Main Section Heading */}
            <h2 id="about-brief-heading" className="about-heading">
              {t("heading")}
            </h2>

            {/* Reassuring Clinical Narratives */}
            <div className="about-paragraphs">
              <p className="about-lead-text">{t("p1")}</p>
              <p className="about-secondary-text">{t("p2")}</p>
            </div>

            {/* Credentials Checklist */}
            <ul className="credentials-list" aria-label={t("heading")}>
              {credentialItems.map((credential, idx) => (
                <li key={idx} className="credential-item group">
                  <span className="credential-icon-box" aria-hidden="true">
                    <CheckCircleIcon />
                  </span>
                  <span className="credential-text">{credential}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons (Exciting interactive touch) */}
            {showFullCta && (
              <div className="about-cta-group">
                <Link
                  href={routePaths.about}
                  className={`${buttonVariants({ size: "lg" })} about-btn-primary group`}
                >
                  <span>{t("cta.moreAbout")}</span>
                  <ArrowIcon />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonVariants({ variant: "outline", size: "lg" })} about-btn-secondary`}
                >
                  <span className="about-whatsapp-dot" />
                  <span>{t("cta.bookConsultation")}</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
