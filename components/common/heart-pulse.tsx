"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type HeartPulseProps = {
  className?: string;
};

export function HeartPulse({ className }: HeartPulseProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      aria-hidden
    >
      {!prefersReducedMotion ? (
        <>
          <motion.span
            className="absolute size-14 rounded-full bg-[var(--brand-pink)]/20"
            animate={{ scale: [1, 1.55, 1], opacity: [0.45, 0, 0.45] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute size-10 rounded-full bg-[var(--brand-pink)]/30"
            animate={{ scale: [1, 1.35, 1], opacity: [0.55, 0.12, 0.55] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.15,
            }}
          />
        </>
      ) : null}

      <motion.div
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.12, 1] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart
          className="size-8 fill-[var(--brand-pink)] text-[var(--brand-pink)] sm:size-9"
          strokeWidth={1.75}
        />
      </motion.div>
    </div>
  );
}
