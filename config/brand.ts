export const brand = {
  logo: {
    src: "/dr-saleh.png",
    width: 1024,
    height: 1024,
  },
  heroSlides: [
    { src: "/hero.jpeg", width: 1792, height: 2400 },
    { src: "/saleh-hero-2.jpeg", width: 1792, height: 2400 },
    { src: "/saleh-hero-3.jpeg", width: 1792, height: 2400 },
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
