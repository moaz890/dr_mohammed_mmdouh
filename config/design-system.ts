/**
 * Design tokens consumed by Tailwind (@theme) and application code.
 * Prefer logical CSS properties in components; tokens stay direction-agnostic.
 */
export const designSystem = {
  container: {
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem",
    "2xl": "96rem",
    prose: "65ch",
  },
  spacing: {
    section: {
      sm: "3rem",
      md: "5rem",
      lg: "7rem",
    },
  },
  zIndex: {
    base: 0,
    dropdown: 50,
    sticky: 100,
    header: 200,
    overlay: 300,
    modal: 400,
    toast: 500,
    skipLink: 600,
  },
  motion: {
    duration: {
      fast: 150,
      normal: 250,
      slow: 400,
    },
    easing: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
      emphasized: "cubic-bezier(0.2, 0, 0, 1)",
    },
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  },
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },
  typography: {
    fontFamily: {
      sans: "var(--font-sans)",
      arabic: "var(--font-arabic)",
      mono: "var(--font-mono)",
    },
  },
} as const;

export type DesignSystem = typeof designSystem;
