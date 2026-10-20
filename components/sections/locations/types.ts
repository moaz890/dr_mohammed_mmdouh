export type BranchLocationId = "newCairo" | "madinaty";

export interface BranchLocationItem {
  id: BranchLocationId;
  name: string;
  city: string;
  address: string;
  phone: string;
  badge: string;
  accentColor: "blue" | "pink";
  mapSrc: string;
  directionsUrl: string;
}

export interface LocationsSectionProps {
  className?: string;
}
