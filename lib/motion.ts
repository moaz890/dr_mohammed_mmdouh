import type { Transition, Variants } from "framer-motion";

export const motionTransition: Transition = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1],
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export function getMotionSafeTransition(
  prefersReducedMotion: boolean,
  transition: Transition = motionTransition,
): Transition {
  if (prefersReducedMotion) {
    return { duration: 0 };
  }
  return transition;
}

export function getMotionSafeVariants(
  prefersReducedMotion: boolean,
  variants: Variants = fadeInVariants,
): Variants {
  if (prefersReducedMotion) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    };
  }
  return variants;
}
