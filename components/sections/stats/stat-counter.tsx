"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  delay?: number;
};

export function StatCounter({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2000,
  delay = 0,
}: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasStartedRef = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    /* Immediate display if prefers-reduced-motion is active */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(target);
      hasStartedRef.current = true;
      return;
    }

    const targetElement =
      containerRef.current?.closest(".stats-section") ??
      containerRef.current?.closest(".stat-item") ??
      containerRef.current;

    if (!targetElement) return;

    let animationFrameId: number;
    let delayTimeoutId: ReturnType<typeof setTimeout> | undefined;

    const startCountAnimation = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;

      delayTimeoutId = setTimeout(() => {
        let startTime: number | null = null;

        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Ease-out expo curve for ultra-smooth deceleration
          const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

          const rawValue = easeOutProgress * target;
          const currentValue =
            decimals > 0
              ? parseFloat(rawValue.toFixed(decimals))
              : Math.round(rawValue);
          setDisplayValue(currentValue);

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(step);
          } else {
            setDisplayValue(target);
          }
        };

        animationFrameId = requestAnimationFrame(step);
      }, delay);
    };

    // Evaluates whether the user has scrolled enough that the section
    // has entered at least halfway from the bottom of the viewport
    const checkReachedHalfway = () => {
      if (hasStartedRef.current) return;
      const rect = targetElement.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inViewport) return;

      const reachedHalf =
        rect.top + rect.height * 0.45 <= window.innerHeight ||
        rect.top <= window.innerHeight * 0.7;

      if (reachedHalf) {
        startCountAnimation();
      }
    };

    // High-resolution IntersectionObserver across 10% steps
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          const rect = entry.boundingClientRect;
          const reachedHalf =
            entry.intersectionRatio >= 0.35 ||
            rect.top + rect.height * 0.45 <= window.innerHeight ||
            rect.top <= window.innerHeight * 0.7;

          if (reachedHalf) {
            startCountAnimation();
            observer.disconnect();
          }
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      },
    );

    observer.observe(targetElement);

    // Initial check in case page is already loaded at/past this position
    checkReachedHalfway();

    // Passive scroll listener backup ensuring it never gets missed
    window.addEventListener("scroll", checkReachedHalfway, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkReachedHalfway);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (delayTimeoutId) {
        clearTimeout(delayTimeoutId);
      }
    };
  }, [target, duration, delay, decimals]);

  // Formatter for integers with thousands separator (e.g. 10,000) or fixed decimals (e.g. 5.0)
  const formattedNumber =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : displayValue.toLocaleString("en-US");

  return (
    <span
      ref={containerRef}
      dir="ltr"
      className="stat-number-inner inline-flex items-center tabular-nums"
      data-target={target}
    >
      {prefix && (
        <span className="stat-prefix text-[var(--brand-blue)] select-none">
          {prefix}
        </span>
      )}
      <span className="stat-digits">{formattedNumber}</span>
      {suffix && (
        <span className="stat-suffix text-[var(--brand-pink)] select-none">
          {suffix}
        </span>
      )}
    </span>
  );
}
