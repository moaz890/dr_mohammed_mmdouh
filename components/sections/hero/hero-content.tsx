"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { getMotionSafeTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

import { HeroButtons } from "./hero-buttons";
import { HeroTrust } from "./hero-trust";
import type { HeroContentProps } from "./types";

type HeroContentSectionProps = HeroContentProps & {
  selectedIndex: number;
};

export function HeroContent({
  eyebrow,
  doctorName,
  titleLine1,
  titleLine2,
  slides,
  selectedIndex,
  ctaPrimary,
  ctaSecondary,
  whatsappUrl,
  trustItems,
}: HeroContentSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const transition = getMotionSafeTransition(prefersReducedMotion, {
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1],
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition },
  };

  const activeSlide = slides[selectedIndex] ?? slides[0];

  return (
    <motion.div
      className={cn(
        "flex flex-col gap-6 lg:gap-7",
        "items-start text-start",
        "rtl:items-end rtl:text-end",
      )}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="space-y-3.5">
        <p className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-pink)]/30 bg-[var(--brand-pink-muted)] px-3.5 py-1.5 text-xs font-bold tracking-wider text-[var(--brand-pink)] shadow-sm backdrop-blur-sm sm:text-xs">
          <span
            className="size-2 rounded-full bg-[var(--brand-pink)] animate-pulse"
            aria-hidden
          />
          {eyebrow}
        </p>

        <h1 className="max-w-xl text-3xl font-extrabold leading-[1.2] tracking-tight text-[var(--brand-blue)] sm:text-4xl lg:text-5xl">
          {doctorName}
        </h1>

        <div className="max-w-xl space-y-1 text-base font-semibold leading-relaxed text-foreground/85 sm:text-lg sm:leading-8">
          <p>{titleLine1}</p>
          <p className="text-[var(--brand-pink)]/90 font-medium text-sm sm:text-base">
            {titleLine2}
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="relative min-h-[5.5rem] w-full max-w-xl sm:min-h-[6rem]"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={selectedIndex}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-8"
          >
            {activeSlide?.description}
          </motion.p>
        </AnimatePresence>
      </motion.div>

      <motion.div variants={itemVariants}>
        <HeroButtons
          primaryLabel={ctaPrimary}
          secondaryLabel={ctaSecondary}
          whatsappUrl={whatsappUrl}
        />
      </motion.div>

      <motion.div variants={itemVariants} className="w-full">
        <HeroTrust items={trustItems} />
      </motion.div>
    </motion.div>
  );
}
