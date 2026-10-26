import { getTranslations } from "next-intl/server";

import { getGooglePlaceReviews } from "@/lib/google-reviews";

import { TestimonialsCarousel } from "./testimonial-carousel";
import type { TestimonialConfig, TestimonialItem, TestimonialsProps } from "./types";

const TAGAMO_MAPS_REVIEWS_URL = "https://maps.app.goo.gl/vPkmz1cYdyjekeRE8?g_st=ic";

/* ── Multi-color Google "G" Icon ─────────────────────────────────────────── */
const GoogleColorIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

/* ── Gleaming Gold Star Icon ──────────────────────────────────────────────── */
const StarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-4 w-4 text-[#f59e0b] drop-shadow-[0_1px_2px_rgba(245,158,11,0.35)] transition-transform duration-300 group-hover:scale-110"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

/* ── External Link Icon ──────────────────────────────────────────────────── */
const ExternalLinkIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* ── Edit / Write Review Icon ────────────────────────────────────────────── */
const WriteReviewIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-3.5 w-3.5"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

/* ── Eyebrow Reviews Sparkle Icon ────────────────────────────────────────── */
const ReviewSparkleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4 text-[var(--brand-pink)] animate-pulse"
  >
    <path
      d="M12 2l2.4 7.2h7.6l-6.2 4.5 2.4 7.3-6.2-4.6-6.2 4.6 2.4-7.3-6.2-4.5h7.6z"
      fill="currentColor"
      opacity={0.2}
    />
    <path d="M12 2l2.4 7.2h7.6l-6.2 4.5 2.4 7.3-6.2-4.6-6.2 4.6 2.4-7.3-6.2-4.5h7.6z" />
  </svg>
);

const TESTIMONIAL_CONFIGS: TestimonialConfig[] = [
  { id: "item1", avatarColor: "pink", googleVerified: true },
  { id: "item2", avatarColor: "blue", googleVerified: true },
  { id: "item3", avatarColor: "teal", googleVerified: true },
  { id: "item4", avatarColor: "purple", googleVerified: true },
];

export async function TestimonialsSection({ className = "" }: TestimonialsProps) {
  const t = await getTranslations("home.testimonialsSection");
  const googleData = await getGooglePlaceReviews();

  const hasLiveReviews = Boolean(
    googleData && googleData.reviews && googleData.reviews.length > 0,
  );

  const avatarColors: Array<"pink" | "blue" | "teal" | "purple"> = [
    "pink",
    "blue",
    "teal",
    "purple",
  ];

  // Fetch up to 8 live reviews (or whatever count is available, e.g. 6+) for a smooth carousel experience
  const items: TestimonialItem[] = hasLiveReviews
    ? googleData!.reviews.slice(0, 8).map((r, i) => ({
        id: `live_review_${i}`,
        quote: r.text,
        author: r.authorName,
        initial: r.authorName?.trim()?.charAt(0) || "م",
        service: r.relativeTime || t("googleReviews.verifiedOnGoogle"),
        stars: r.rating || 5,
        avatarColor: avatarColors[i % avatarColors.length] || "pink",
        authorPhoto: r.authorPhoto,
        relativeTime: r.relativeTime,
      }))
    : TESTIMONIAL_CONFIGS.map((config) => ({
        ...config,
        quote: t(`items.${config.id}.quote`),
        author: t(`items.${config.id}.author`),
        initial: t(`items.${config.id}.initial`),
        service: t(`items.${config.id}.service`),
        stars: 5,
      }));

  const ratingScore = googleData?.rating
    ? googleData.rating.toFixed(1)
    : t("ratingSummary.score");

  return (
    <section
      id="testimonials"
      className={`testimonials-section reveal-section ${className}`}
      aria-labelledby="testimonials-heading"
      data-aos="fade-up"
    >
      {/* Decorative ambient blurred spots */}
      <div
        className="testimonials-ambient-glow testimonials-ambient-glow-1"
        aria-hidden="true"
      />
      <div
        className="testimonials-ambient-glow testimonials-ambient-glow-2"
        aria-hidden="true"
      />

      <div className="section-container container">
        {/* ── Section Header ──────────────────────────────────────────────── */}
        <div className="section-title text-center" data-aos="fade-up">
          <div className="testimonials-eyebrow-box">
            <ReviewSparkleIcon />
            <span className="testimonials-eyebrow">{t("eyebrow")}</span>
          </div>

          <h2 id="testimonials-heading" className="testimonials-main-heading">
            {t("title")}
          </h2>

          <p className="testimonials-main-subtitle">{t("subtitle")}</p>

          {/* ── Google Maps Reviews Featured Pill & CTAs ───────────────────── */}
          <div className="testimonials-google-banner">
            <div className="testimonials-google-badge">
              <GoogleColorIcon className="h-5 w-5 shrink-0" />
              <div className="testimonials-rating-stars" aria-label="5 stars rating">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="testimonials-rating-score">{ratingScore}</span>
              <span className="testimonials-rating-divider" aria-hidden="true">
                •
              </span>
              <span className="testimonials-rating-label">
                {t("googleReviews.badge")}
              </span>
            </div>

            <div className="testimonials-google-actions">
              <a
                href={TAGAMO_MAPS_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="google-action-btn google-action-btn-primary"
                aria-label={t("googleReviews.viewAllBtn")}
              >
                <GoogleColorIcon className="h-4 w-4 shrink-0" />
                <span>{t("googleReviews.viewAllBtn")}</span>
                <ExternalLinkIcon className="h-3.5 w-3.5 opacity-80" />
              </a>

              <a
                href={TAGAMO_MAPS_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="google-action-btn google-action-btn-secondary"
                aria-label={t("googleReviews.writeReviewBtn")}
              >
                <WriteReviewIcon />
                <span>{t("googleReviews.writeReviewBtn")}</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Interactive Testimonials Carousel (Auto-playing, Drag/Swipe, Navigation) ──────────────── */}
        <TestimonialsCarousel
          items={items}
          reviewsUrl={TAGAMO_MAPS_REVIEWS_URL}
          verifiedLabel={t("googleReviews.verifiedOnGoogle")}
        />
      </div>
    </section>
  );
}
