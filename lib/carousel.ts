import type { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

export function createDefaultCarouselOptions(
  overrides: EmblaOptionsType = {},
): EmblaOptionsType {
  return {
    align: "start",
    loop: false,
    direction: "ltr",
    ...overrides,
  };
}

export function createAutoplayPlugin(
  options?: Parameters<typeof Autoplay>[0],
): EmblaPluginType {
  return Autoplay({
    delay: 5000,
    stopOnInteraction: true,
    ...options,
  });
}
