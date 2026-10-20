import { brand } from "@/config/brand";

import type { HeroSlideImage } from "./types";

export const heroSlideImages: HeroSlideImage[] = brand.heroSlides.map((slide) => ({
  ...slide,
}));
