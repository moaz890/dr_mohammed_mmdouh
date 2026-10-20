export type TestimonialItemId = "item1" | "item2" | "item3" | "item4";

export interface TestimonialConfig {
  id: TestimonialItemId;
  avatarColor: "pink" | "blue" | "teal" | "purple";
}

export interface TestimonialItem {
  id: TestimonialItemId;
  quote: string;
  author: string;
  initial: string;
  service: string;
  stars: number;
  avatarColor: "pink" | "blue" | "teal" | "purple";
}

export interface TestimonialsProps {
  className?: string;
}
