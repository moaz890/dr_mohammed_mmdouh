export type FaqItemId = "booking" | "painlessBirth" | "fibroids" | "robotic";

export interface FaqBranch {
  name: string;
  address: string;
  phone: string;
}

export interface FaqItemData {
  id: FaqItemId;
  question: string;
  answer: string;
  branches?: FaqBranch[];
}

export interface FaqSectionProps {
  className?: string;
}
