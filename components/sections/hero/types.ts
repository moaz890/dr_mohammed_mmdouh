export type HeroSlideContent = {
  description: string;
  imageAlt: string;
};

export type HeroTrustItem = {
  id: string;
  label: string;
};

export type HeroContentProps = {
  eyebrow: string;
  doctorName: string;
  titleLine1: string;
  titleLine2: string;
  slides: HeroSlideContent[];
  ctaPrimary: string;
  ctaSecondary: string;
  whatsappUrl: string;
  trustItems: HeroTrustItem[];
  sliderLabels: {
    ariaLabel: string;
    prev: string;
    next: string;
    goToSlide: string;
  };
};

export type HeroSlideImage = {
  src: string;
  width: number;
  height: number;
};
