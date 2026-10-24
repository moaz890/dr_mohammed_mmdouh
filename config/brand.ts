export const brand = {
  logo: {
    src: "/clinic-logo.jpeg",
    width: 1536,
    height: 1024,
  },
  heroSlides: [
    { src: "/saleh-hero-4.jpeg", width: 3712, height: 5568 },
    { src: "/saleh-hero-5.JPEG", width: 3712, height: 5568 },
    { src: "/saleh-hero-6.jpeg", width: 3264, height: 5275 },
    { src: "/saleh-hero-7.jpeg", width: 3245, height: 4006 },
  ] as const,
  colors: {
    /** Sampled from logo wordmark / child icon */
    blue: "#5A9FB9",
    /** Sampled from logo woman icon / tagline */
    pink: "#DD6B90",
    blueLight: "#73B0C7",
    pinkLight: "#F8D4E0",
    pinkMuted: "#FDF2F6",
    blueMuted: "#EFF7FA",
  },
} as const;
