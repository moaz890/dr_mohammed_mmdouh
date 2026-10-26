export type TestimonialItemId = "item1" | "item2" | "item3" | "item4";

export interface TestimonialConfig {
  id: TestimonialItemId;
  avatarColor: "pink" | "blue" | "teal" | "purple";
  googleVerified?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  initial: string;
  service: string;
  stars: number;
  avatarColor: "pink" | "blue" | "teal" | "purple";
  googleVerified?: boolean;
  authorPhoto?: string;
  relativeTime?: string;
}

export interface TestimonialsProps {
  className?: string;
}
