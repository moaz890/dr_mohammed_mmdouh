export type VisionCardId = "painlessBirth" | "pregnancyCare" | "laparoscopy";

export type VisionAccentColor = "pink" | "blue" | "teal";

export interface VisionCardConfig {
  id: VisionCardId;
  accentColor: VisionAccentColor;
  href: string;
}

export interface VisionCardItem {
  id: VisionCardId;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  linkText: string;
  href: string;
  accentColor: VisionAccentColor;
}

export interface VisionProps {
  className?: string;
}
