"use client";

import { MotionConfig } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

type MotionProviderProps = {
  children: React.ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}
