import Image from "next/image";
import { getTranslations } from "next-intl/server";

import type { ReelConfig, ReelItem, ReelsProps } from "./types";

/* ── Facebook Brand Icon ─────────────────────────────────────────────────── */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

/* ── Verified Checkmark Badge ────────────────────────────────────────────── */
const VerifiedBadge = () => (
  <svg
    viewBox="0 0 24 24"
    fill="var(--brand-blue)"
    aria-hidden="true"
    className="h-4 w-4 shrink-0"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

/* ── External Link Icon ──────────────────────────────────────────────────── */
const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-3.5 w-3.5 transition-transform duration-300 rtl:rotate-180 group-hover:translate-x-0.5"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* ── Reels Clapperboard Icon ─────────────────────────────────────────────── */
const ReelsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4 text-[var(--brand-pink)]"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="m3 9 2.45-3M11 9l2.45-3M19 9l2-2.5M3 9h18" />
    <polygon points="10 13 15 15.5 10 18 10 13" fill="currentColor" />
  </svg>
);

const REEL_CONFIGS: ReelConfig[] = [
  {
    id: "reel1",
    reelId: "1146972750526396",
    url: "https://www.facebook.com/reel/1146972750526396",
  },
  {
    id: "reel2",
    reelId: "4244709919132985",
    url: "https://www.facebook.com/reel/4244709919132985",
  },
  {
    id: "reel3",
    reelId: "1635588791435856",
    url: "https://www.facebook.com/reel/1635588791435856",
  },
];

export async function ReelsSection({ className = "" }: ReelsProps) {
  const t = await getTranslations("home.reelsSection");

  const reels: ReelItem[] = REEL_CONFIGS.map((config) => ({
    ...config,
    title: t(`items.${config.id}.title`),
    description: t(`items.${config.id}.description`),
    tag: t(`items.${config.id}.tag`),
  }));

  const getEmbedUrl = (reelUrl: string) => {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
      reelUrl,
    )}&show_text=false&t=0`;
  };

  return (
    <section
      id="videos"
      className={`reels-section reveal-section ${className}`}
      aria-labelledby="reels-heading"
    >
      <div className="section-container container">
        {/* ── Section Title ──────────────────────────────────────────────── */}
        <div className="section-title text-center" data-aos="fade-up">
          <div className="reels-eyebrow-box">
            <ReelsIcon />
            <span className="reels-eyebrow">{t("eyebrow")}</span>
          </div>
          <h2 id="reels-heading" className="reels-main-heading">
            {t("title")}
          </h2>
          <p className="reels-main-subtitle">{t("subtitle")}</p>
        </div>

        {/* ── 3 Reels Responsive Grid ────────────────────────────────────── */}
        <div className="reels-grid">
          {reels.map((reel, index) => {
            const embedUrl = getEmbedUrl(reel.url);

            return (
              <article
                key={reel.id}
                className="reel-card stagger-child group"
                style={{ "--stagger-i": index } as React.CSSProperties}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 120}
              >
                {/* ── Card Header (Doctor brand + tag) ───────────────────── */}
                <div className="reel-card-header">
                  <div className="reel-author-box">
                    <div className="reel-author-avatar">
                      <Image
                        src="/dr-saleh.png"
                        alt={t("doctorTitle")}
                        width={38}
                        height={38}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="reel-author-info">
                      <div className="reel-author-name">
                        <span>{t("doctorTitle")}</span>
                        <VerifiedBadge />
                      </div>
                      <span className="reel-tag">{reel.tag}</span>
                    </div>
                  </div>

                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reel-fb-icon-btn"
                    aria-label={`${t("watchOnFb")}: ${reel.title}`}
                  >
                    <FacebookIcon />
                  </a>
                </div>

                {/* ── Facebook Player Frame (Embedded from FB servers) ──── */}
                <div className="reel-player-wrapper">
                  <iframe
                    src={embedUrl}
                    className="reel-iframe"
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    title={reel.title}
                  />
                </div>

                {/* ── Card Body & Direct Watch Action ─────────────────────── */}
                <div className="reel-card-body">
                  <h3 className="reel-title">{reel.title}</h3>
                  <p className="reel-desc">{reel.description}</p>

                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reel-watch-btn"
                  >
                    <FacebookIcon />
                    <span>{t("watchOnFb")}</span>
                    <ExternalLinkIcon />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
