"use client";

import { useTranslations } from "next-intl";

export function FooterScrollTop() {
  const t = useTranslations("footer");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="footer-scroll-top"
      aria-label={t("backToTop")}
      title={t("backToTop")}
    >
      <span className="footer-scroll-top-icon" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </span>
      <span className="footer-scroll-top-text">{t("backToTop")}</span>
    </button>
  );
}
