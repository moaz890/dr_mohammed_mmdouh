"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { useIsRtl } from "@/hooks/use-direction";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

import { TestimonialAvatar } from "./testimonial-avatar";
import type { TestimonialItem } from "./types";

interface TestimonialsCarouselProps {
  items: TestimonialItem[];
  reviewsUrl: string;
  verifiedLabel: string;
  prevLabel?: string;
  nextLabel?: string;
}

/* ── Multi-color Google "G" Icon ─────────────────────────────────────────── */
const GoogleColorIcon = ({ className = "h-3 w-3" }: { className?: string }) => (
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

export function TestimonialsCarousel({
  items,
  reviewsUrl,
  verifiedLabel,
  prevLabel = "السابق",
  nextLabel = "التالي",
}: TestimonialsCarouselProps) {
  const isRtl = useIsRtl();
  const prefersReducedMotion = useReducedMotion();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: items.length > 2,
      align: "start",
      direction: isRtl ? "rtl" : "ltr",
      duration: prefersReducedMotion ? 0 : 35,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit({
      direction: isRtl ? "rtl" : "ltr",
    });
  }, [emblaApi, isRtl]);

  return (
    <div className="testimonials-carousel-wrapper">
      {/* ── Carousel Viewport & Track ─────────────────────────────────────── */}
      <div className="testimonials-carousel-viewport" ref={emblaRef}>
        <div className="testimonials-carousel-track">
          {items.map((item) => (
            <div key={item.id} className="testimonials-carousel-slide">
              <article
                className={cn(
                  "testimonial-card group h-full",
                  `testimonial-card-${item.avatarColor}`,
                )}
              >
                {/* Subtle top shimmer accent */}
                <div className="testimonial-card-shimmer" aria-hidden="true" />

                {/* Watermark Quote Icon */}
                <QuoteWatermark />

                {/* Card Header: Stars & Google Verified Link */}
                <div className="testimonial-card-header">
                  <div
                    className="stars flex items-center gap-1"
                    aria-label={`${item.stars} of 5 stars`}
                  >
                    {[...Array(item.stars)].map((_, starIndex) => (
                      <StarIcon key={starIndex} />
                    ))}
                  </div>
                  <a
                    href={reviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="testimonial-verified-badge"
                    title={verifiedLabel}
                  >
                    <GoogleColorIcon className="h-3 w-3 shrink-0" />
                    <span>{verifiedLabel}</span>
                  </a>
                </div>

                {/* Card Body: Quote Content */}
                <blockquote className="testimonial-body">
                  <p className="testimonial-quote">“{item.quote}”</p>
                </blockquote>

                {/* Card Footer: Patient Profile with Avatar Image or Letter Initial Fallback */}
                <div className="testimonial-author">
                  <TestimonialAvatar
                    author={item.author}
                    authorPhoto={item.authorPhoto}
                    initial={item.initial}
                    avatarColor={item.avatarColor}
                  />
                  <div className="testimonial-author-info">
                    <h4 className="testimonial-author-name">{item.author}</h4>
                    <span className="testimonial-author-service">{item.service}</span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* ── Carousel Controls (Arrows + Dots) ─────────────────────────────── */}
      {items.length > 1 && (
        <div className="testimonials-carousel-controls">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev && !emblaApi?.internalEngine()?.options.loop}
            aria-label={prevLabel}
            className="testimonials-carousel-nav-btn"
          >
            <ChevronLeft className="size-5 rtl:rotate-180" aria-hidden="true" />
          </button>

          {/* Pagination Dots */}
          <div className="testimonials-carousel-dots" role="tablist">
            {scrollSnaps.map((_, snapIndex) => (
              <button
                key={snapIndex}
                type="button"
                role="tab"
                aria-selected={selectedIndex === snapIndex}
                aria-label={`Slide ${snapIndex + 1}`}
                onClick={() => scrollTo(snapIndex)}
                className={cn(
                  "testimonials-carousel-dot",
                  selectedIndex === snapIndex && "is-active",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext && !emblaApi?.internalEngine()?.options.loop}
            aria-label={nextLabel}
            className="testimonials-carousel-nav-btn"
          >
            <ChevronRight className="size-5 rtl:rotate-180" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
