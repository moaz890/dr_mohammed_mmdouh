import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { brand } from "@/config/brand";
import { Link } from "@/i18n/navigation";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import { FooterScrollTop } from "./footer-scroll-top";
import type { SiteFooterProps } from "./types";

/* ── Social Icons ────────────────────────────────────────────────────────── */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

/* ── Contact & UI SVGs ───────────────────────────────────────────────────── */
const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="size-4 shrink-0"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="size-4 shrink-0"
  >
    <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.957.564 3.782 1.541 5.328L2 22l4.792-1.505a9.98 9.98 0 0 0 5.239 1.488c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.727 14.157c-.242.679-1.205 1.282-1.996 1.455-.54.118-1.246.212-3.616-.769-3.033-1.254-4.991-4.343-5.143-4.544-.147-.202-1.222-1.626-1.222-3.102 0-1.475.772-2.2 1.045-2.502.274-.303.596-.379.794-.379.199 0 .398.002.571.011.184.01.43-.07.673.513.25.597.854 2.083.929 2.235.075.152.124.331.025.533-.1.202-.15.327-.298.502-.149.176-.312.392-.446.527-.149.149-.304.312-.131.61.173.298.769 1.269 1.649 2.052 1.134 1.01 2.09 1.323 2.389 1.472.298.149.472.124.646-.075.174-.199.746-.869.944-1.168.199-.298.398-.249.671-.149.273.099 1.74.82 2.038.969.298.149.497.224.571.348.075.124.075.724-.167 1.403z" />
  </svg>
);

const PinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="size-4 shrink-0"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="size-4 shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="size-4 shrink-0 text-[var(--brand-pink)]"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ArrowChevron = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="size-3 shrink-0 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export async function SiteFooter({ className = "" }: SiteFooterProps) {
  const t = await getTranslations("footer");
  const tCommon = await getTranslations("common");

  const currentYear = new Date().getFullYear();
  const mainPhone = "01050600032";
  const emergencyWhatsapp = buildWhatsAppUrl(undefined, mainPhone);

  const fbUrl = "https://www.facebook.com/profile.php?id=61582952941867";
  const ytUrl = "https://www.youtube.com/@Prof-moh-mamdouhsaleh/featured";
  const igUrl = "https://www.instagram.com/p/DO_kC2MDJ2R/";

  return (
    <footer className={`site-footer ${className}`} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        {t("brand.doctorName")} - Footer
      </h2>

      {/* Decorative top ambient light bar */}
      <div className="footer-top-accent" aria-hidden="true" />
      <div className="footer-ambient-glow" aria-hidden="true" />

      <div className="footer-container">
        {/* ── 1. Floating Emergency & Instant Booking Banner ───────────────── */}
        <section
          className="footer-emergency-strip"
          aria-label={t("emergencyBar.title")}
        >
          <div className="footer-emergency-content">
            <div className="footer-emergency-badge">
              <span className="footer-pulse-dot" aria-hidden="true" />
              <span>{t("emergencyBar.eyebrow")}</span>
            </div>
            <h3 className="footer-emergency-title">{t("emergencyBar.title")}</h3>
            <p className="footer-emergency-desc">{t("emergencyBar.subtitle")}</p>
          </div>

          <div className="footer-emergency-actions">
            <a
              href={`tel:+2${mainPhone}`}
              className="footer-btn footer-btn--phone"
              aria-label={t("emergencyBar.callBtn")}
            >
              <PhoneIcon />
              <span>{t("emergencyBar.callBtn")}</span>
            </a>

            <a
              href={emergencyWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-btn footer-btn--whatsapp"
              aria-label={t("emergencyBar.whatsappBtn")}
            >
              <WhatsAppIcon />
              <span>{t("emergencyBar.whatsappBtn")}</span>
            </a>
          </div>
        </section>

        {/* ── 2. Main 4-Column Grid ────────────────────────────────────────── */}
        <div className="footer-grid">
          {/* Col 1: Doctor Profile & Brand Authority */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <div className="footer-logo-wrapper">
                <Image
                  src={brand.logo.src}
                  alt={tCommon("brand.logoAlt")}
                  width={140}
                  height={140}
                  className="footer-logo-img object-contain"
                />
              </div>
              <div>
                <h4 className="footer-brand-name">{t("brand.doctorName")}</h4>
                <p className="footer-brand-title">{t("brand.doctorTitle")}</p>
              </div>
            </div>

            <p className="footer-brand-tagline">{t("brand.tagline")}</p>

            <div className="footer-cert-badge">
              <ShieldCheckIcon />
              <span>{t("brand.badge")}</span>
            </div>

            {/* Official Social Media Pill Icons */}
            <div
              className="footer-social-cluster"
              aria-label="Official Social Channels"
            >
              <a
                href={fbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn fb"
                aria-label="Facebook Profile"
                title="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={ytUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn yt"
                aria-label="YouTube Channel"
                title="YouTube"
              >
                <YouTubeIcon />
              </a>
              <a
                href={igUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn ig"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Specialized Medical Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t("sections.services")}</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="/services/ivf" className="footer-link-item group">
                  <ArrowChevron />
                  <span>{t("servicesList.ivf")}</span>
                </Link>
              </li>
              <li>
                <Link href="/services/obstetrics" className="footer-link-item group">
                  <ArrowChevron />
                  <span>{t("servicesList.painlessBirth")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/advanced-laparoscopy"
                  className="footer-link-item group"
                >
                  <ArrowChevron />
                  <span>{t("servicesList.laparoscopy")}</span>
                </Link>
              </li>
              <li>
                <Link href="/services/gynecology" className="footer-link-item group">
                  <ArrowChevron />
                  <span>{t("servicesList.fibroids")}</span>
                </Link>
              </li>
              <li>
                <Link href="/services/gynecology" className="footer-link-item group">
                  <ArrowChevron />
                  <span>{t("servicesList.endometriosis")}</span>
                </Link>
              </li>
              <li>
                <Link href="/services/obstetrics" className="footer-link-item group">
                  <ArrowChevron />
                  <span>{t("servicesList.ultrasound")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t("sections.quickLinks")}</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="/" className="footer-link-item group">
                  <ArrowChevron />
                  <span>{t("quickLinksList.home")}</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link-item group">
                  <ArrowChevron />
                  <span>{t("quickLinksList.about")}</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link-item group">
                  <ArrowChevron />
                  <span>{t("quickLinksList.services")}</span>
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="footer-link-item group">
                  <ArrowChevron />
                  <span>{t("quickLinksList.faq")}</span>
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="footer-link-item group">
                  <ArrowChevron />
                  <span>{t("quickLinksList.testimonials")}</span>
                </Link>
              </li>
              <li>
                <Link href="/#locations" className="footer-link-item group">
                  <ArrowChevron />
                  <span>{t("quickLinksList.locations")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Clinics, Locations & Hours */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t("sections.branches")}</h4>

            <div className="footer-branches-stack">
              {/* New Cairo Branch */}
              <div className="footer-branch-card">
                <div className="footer-branch-title">
                  <PinIcon />
                  <h5>{t("branches.newCairo.name")}</h5>
                </div>
                <p className="footer-branch-address">
                  {t("branches.newCairo.address")}
                </p>
                <div className="footer-branch-links">
                  <a href="tel:+201050600032" className="footer-branch-phone">
                    <PhoneIcon />
                    <span>01050600032</span>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/VdrbahguBBgAXdp16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-branch-map"
                  >
                    {t("branches.newCairo.mapLabel")}
                  </a>
                </div>
              </div>

              {/* Madinaty Branch */}
              <div className="footer-branch-card">
                <div className="footer-branch-title">
                  <PinIcon />
                  <h5>{t("branches.madinaty.name")}</h5>
                </div>
                <p className="footer-branch-address">
                  {t("branches.madinaty.address")}
                </p>
                <div className="footer-branch-links">
                  <a href="tel:+201050600033" className="footer-branch-phone">
                    <PhoneIcon />
                    <span>01050600033</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Madinaty+Medical+Center"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-branch-map"
                  >
                    {t("branches.madinaty.mapLabel")}
                  </a>
                </div>
              </div>

              {/* Working Hours Snapshot */}
              <div className="footer-hours-card">
                <div className="footer-hours-header">
                  <ClockIcon />
                  <span>{t("hours.title")}</span>
                </div>
                <p className="footer-hours-schedule">{t("hours.schedule")}</p>
                <p className="footer-hours-note">{t("hours.note")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. Medical Ethics & Disclaimer Strip ─────────────────────────── */}
        <div className="footer-disclaimer-strip">
          <ShieldCheckIcon />
          <p>{t("disclaimer")}</p>
        </div>

        {/* ── 4. Bottom Legal, Copyright & Scroll to Top ───────────────────── */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">{t("copyright", { year: currentYear })}</p>

          <p className="footer-crafting-note">
            <span className="footer-craft-heart" aria-hidden="true">
              ♥
            </span>
            <span>{t("craftedWith")}</span>
          </p>

          <FooterScrollTop />
        </div>
      </div>
    </footer>
  );
}
