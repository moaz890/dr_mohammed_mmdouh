export type StatKey = "experience" | "surgeries" | "patients" | "rating";

export type StatItem = {
  id: StatKey;
  number: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  iconType: "calendar" | "procedures" | "users" | "star";
};

export type StatsProps = {
  className?: string;
};
