import { getTranslations } from "next-intl/server";

import type { TestimonialConfig, TestimonialItem, TestimonialsProps } from "./types";

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

/* ── Verified Patient Badge Checkmark ─────────────────────────────────────── */
const VerifiedCheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-3.5 w-3.5 text-[#10b981]"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

/* ── Decorative Background Quotation Watermark ───────────────────────────── */
const QuoteWatermark = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="testimonial-quote-watermark"
  >
    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
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
  { id: "item1", avatarColor: "pink" },
  { id: "item2", avatarColor: "blue" },
  { id: "item3", avatarColor: "teal" },
  { id: "item4", avatarColor: "purple" },
];

export async function TestimonialsSection({ className = "" }: TestimonialsProps) {
  const t = await getTranslations("home.testimonialsSection");

  const items: TestimonialItem[] = TESTIMONIAL_CONFIGS.map((config) => ({
    ...config,
    quote: t(`items.${config.id}.quote`),
    author: t(`items.${config.id}.author`),
    initial: t(`items.${config.id}.initial`),
    service: t(`items.${config.id}.service`),
    stars: 5,
  }));

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

          {/* Trust Rating Highlight Pill */}
          <div className="testimonials-rating-pill">
            <div className="testimonials-rating-stars" aria-label="5 stars rating">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span className="testimonials-rating-score">
              {t("ratingSummary.score")}
            </span>
            <span className="testimonials-rating-divider" aria-hidden="true">
              •
            </span>
            <span className="testimonials-rating-label">
              {t("ratingSummary.verifiedBadge")}
            </span>
          </div>
        </div>

        {/* ── 4 Testimonials Responsive Grid ──────────────────────────────── */}
        <div className="testimonials-grid">
          {items.map((item, index) => (
            <article
              key={item.id}
              className={`testimonial-card testimonial-card-${item.avatarColor} stagger-child group`}
              style={{ "--stagger-i": index } as React.CSSProperties}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              {/* Subtle top shimmer accent */}
              <div className="testimonial-card-shimmer" aria-hidden="true" />

              {/* Watermark Quote Icon */}
              <QuoteWatermark />

              {/* Card Header: 5 Stars & Verified Badge */}
              <div className="testimonial-card-header">
                <div
                  className="stars flex items-center gap-1"
                  aria-label="5 of 5 stars"
                >
                  {[...Array(item.stars)].map((_, starIndex) => (
                    <StarIcon key={starIndex} />
                  ))}
                </div>
                <div className="testimonial-verified-badge">
                  <VerifiedCheckIcon />
                  <span>موثق</span>
                </div>
              </div>

              {/* Card Body: Quote Content */}
              <blockquote className="testimonial-body">
                <p className="testimonial-quote">“{item.quote}”</p>
              </blockquote>

              {/* Card Footer: Patient Profile */}
              <div className="testimonial-author">
                <div
                  className={`avatar testimonial-avatar testimonial-avatar-${item.avatarColor}`}
                  aria-hidden="true"
                >
                  <span>{item.initial}</span>
                </div>
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">{item.author}</h4>
                  <span className="testimonial-author-service">{item.service}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
