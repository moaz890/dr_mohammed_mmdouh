"use client";

import { motion } from "framer-motion";
import { Activity, Award, Baby, ScanLine, ShieldCheck } from "lucide-react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { getMotionSafeTransition } from "@/lib/motion";

import { HeroBadge } from "./hero-badge";
import type { HeroTrustItem } from "./types";

const trustIcons = {
  experience: Award,
  ultrasound: ScanLine,
  ivf: Baby,
  laparoscopy: Activity,
  care: ShieldCheck,
} as const;

type HeroTrustProps = {
  items: HeroTrustItem[];
};

export function HeroTrust({ items }: HeroTrustProps) {
  const prefersReducedMotion = useReducedMotion();
  const transition = getMotionSafeTransition(prefersReducedMotion, {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
  });

  return (
    <motion.ul
      className="flex flex-wrap gap-2 sm:gap-2.5"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : 0.08,
            delayChildren: prefersReducedMotion ? 0 : 0.35,
          },
        },
      }}
    >
      {items.map((item) => {
        const Icon = trustIcons[item.id as keyof typeof trustIcons] ?? ShieldCheck;

        return (
          <motion.li
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition },
            }}
          >
            <HeroBadge
              icon={<Icon className="size-3.5 sm:size-4" aria-hidden />}
              label={item.label}
            />
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
