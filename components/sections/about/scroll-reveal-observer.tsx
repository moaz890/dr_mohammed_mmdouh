"use client";

import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver that adds `.is-visible` to every
 * `.reveal-section` once it enters the viewport.
 *
 * Place this component once, high in the About page tree (e.g. inside the
 * page layout). It renders nothing — pure side-effect.
 */
export function ScrollRevealObserver() {
  useEffect(() => {
    /* Respect prefers-reduced-motion */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            /* Un-observe after reveal so we don't re-run */
            observer.unobserve(entry.target);
          }
        });
      },
      {
        /* Fire when 12% of the section is visible */
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    const sections = document.querySelectorAll<HTMLElement>(".reveal-section");
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
