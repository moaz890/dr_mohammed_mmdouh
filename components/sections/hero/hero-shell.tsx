"use client";

import { useCallback, useState } from "react";

import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { HeroSlider } from "./hero-slider";
import { heroSlideImages } from "./hero-slides";
import type { HeroContentProps } from "./types";

type HeroShellProps = HeroContentProps;

export function HeroShell(props: HeroShellProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelect = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <HeroBackground />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16 xl:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="order-2 lg:order-1">
            <HeroContent {...props} selectedIndex={selectedIndex} />
          </div>

          <div className="order-1 lg:order-2">
            <HeroSlider
              images={heroSlideImages}
              slides={props.slides}
              selectedIndex={selectedIndex}
              onSelect={handleSelect}
              labels={props.sliderLabels}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
