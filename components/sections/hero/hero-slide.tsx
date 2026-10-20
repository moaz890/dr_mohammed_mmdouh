import Image from "next/image";

import { cn } from "@/lib/utils";

import type { HeroSlideImage } from "./types";

type HeroSlideProps = {
  image: HeroSlideImage;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function HeroSlide({ image, alt, priority = true, className }: HeroSlideProps) {
  return (
    <div className={cn("relative size-full overflow-hidden", className)}>
      <Image
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        priority={priority}
        loading="eager"
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="size-full object-cover object-top sm:object-[center_15%] transition-transform duration-700 ease-out"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-blue)]/15 via-transparent to-transparent" />
    </div>
  );
}
