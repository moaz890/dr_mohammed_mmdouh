"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { useIsRtl } from "@/hooks/use-direction";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

import { HeroSlide } from "./hero-slide";
import type { HeroSlideContent, HeroSlideImage } from "./types";

type HeroSliderProps = {
  images: HeroSlideImage[];
  slides: HeroSlideContent[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  labels: {
    ariaLabel: string;
    prev: string;
    next: string;
    goToSlide: string;
  };
};

export function HeroSlider({
  images,
  slides,
  selectedIndex,
  onSelect,
  labels,
}: HeroSliderProps) {
  const prefersReducedMotion = useReducedMotion();
  const isRtl = useIsRtl();
  const [hovering, setHovering] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      direction: isRtl ? "rtl" : "ltr",
      duration: prefersReducedMotion ? 0 : 30,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelectSlide = () => {
      onSelect(emblaApi.selectedScrollSnap());
    };

    onSelectSlide();
    emblaApi.on("select", onSelectSlide);
    emblaApi.on("reInit", onSelectSlide);

    return () => {
      emblaApi.off("select", onSelectSlide);
      emblaApi.off("reInit", onSelectSlide);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit({
      direction: isRtl ? "rtl" : "ltr",
    });
  }, [emblaApi, isRtl]);

  useEffect(() => {
    if (!emblaApi) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (isRtl) {
          scrollNext();
        } else {
          scrollPrev();
        }
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        if (isRtl) {
          scrollPrev();
        } else {
          scrollNext();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [emblaApi, isRtl, scrollNext, scrollPrev]);

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.65,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* ── Infinite Floating Animation Container (Top ↔ Bottom) ─────────── */}
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [0, -12, 0],
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="relative"
      >
        {/* Ambient Glowing Halo behind the Hero Carousel */}
        <div
          className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-[var(--brand-blue)]/25 via-[var(--brand-pink)]/20 to-[var(--brand-blue-light)]/20 blur-2xl opacity-75 transition-all duration-700"
          aria-hidden
        />

        {/* Carousel Frame */}
        <div className="relative rounded-[2rem] border border-white/70 bg-white/40 p-2.5 shadow-[0_24px_60px_-15px_rgba(90,159,185,0.3)] backdrop-blur-xl sm:p-3.5">
          <div
            key={isRtl ? "hero-carousel-rtl" : "hero-carousel-ltr"}
            ref={emblaRef}
            dir={isRtl ? "rtl" : "ltr"}
            className="overflow-hidden rounded-[1.6rem]"
            aria-roledescription="carousel"
            aria-label={labels.ariaLabel}
          >
            <div className="flex touch-pan-y">
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className="relative min-w-0 flex-[0_0_100%]"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} / ${images.length}`}
                >
                  <div className="relative h-[min(110vw,30rem)] sm:h-[min(60vw,34rem)] lg:h-[min(46vw,680px)] lg:min-h-[580px] lg:max-h-[690px]">
                    <motion.div
                      className="size-full"
                      animate={{
                        scale:
                          selectedIndex === index && !prefersReducedMotion ? 1.025 : 1,
                        opacity: selectedIndex === index ? 1 : 0.65,
                      }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <HeroSlide
                        image={image}
                        alt={slides[index]?.imageAlt ?? ""}
                        priority={true}
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Reassurance Badge (Counter-floating animation for 3D depth) */}
          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    y: [0, 8, 0],
                  }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }
            }
            className="pointer-events-none absolute -bottom-4 start-5 z-20 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-xl shadow-[var(--brand-blue)]/15 backdrop-blur-md sm:flex"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-light)] text-white shadow-md">
              <Sparkles className="size-5" />
            </div>
            <div className="text-start rtl:text-end">
              <p className="text-xs font-bold text-[var(--brand-pink)]">
                رعاية طبية فائقة
              </p>
              <p className="text-sm font-extrabold text-foreground">
                خبرة جراحية وأكاديمية متقدمة
              </p>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="pointer-events-none absolute inset-x-4 top-1/2 z-10 flex -translate-y-1/2 justify-between sm:inset-x-5">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label={labels.prev}
              className={cn(
                "pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-white/80 bg-white/90 text-[var(--brand-blue)] shadow-lg shadow-black/5 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[var(--brand-blue-light)] active:scale-95",
                hovering ? "opacity-100" : "opacity-0 sm:opacity-90",
              )}
            >
              <ChevronLeft className="size-5 rtl:rotate-180" aria-hidden />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label={labels.next}
              className={cn(
                "pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-white/80 bg-white/90 text-[var(--brand-blue)] shadow-lg shadow-black/5 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[var(--brand-blue-light)] active:scale-95",
                hovering ? "opacity-100" : "opacity-0 sm:opacity-90",
              )}
            >
              <ChevronRight className="size-5 rtl:rotate-180" aria-hidden />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Slide Indicators (Dots & Animated Pill) */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={`${image.src}-dot`}
            type="button"
            aria-label={`${labels.goToSlide} ${index + 1}`}
            aria-current={selectedIndex === index ? "true" : undefined}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "w-8 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-pink)] shadow-sm"
                : "w-2.5 bg-[var(--brand-blue)]/25 hover:bg-[var(--brand-blue)]/50",
            )}
          />
        ))}
      </div>
    </motion.div>
  );
}
