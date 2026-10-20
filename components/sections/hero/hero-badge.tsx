import { cn } from "@/lib/utils";

type HeroBadgeProps = {
  icon: React.ReactNode;
  label: string;
  className?: string;
};

export function HeroBadge({ icon, label, className }: HeroBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-sm backdrop-blur-sm sm:text-sm",
        className,
      )}
    >
      <span className="text-[var(--brand-blue)]">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
