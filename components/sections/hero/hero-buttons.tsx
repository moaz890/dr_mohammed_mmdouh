import { CalendarDays, MessageCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { routePaths } from "@/config/routes";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type HeroButtonsProps = {
  primaryLabel: string;
  secondaryLabel: string;
  whatsappUrl: string;
  className?: string;
};

export function HeroButtons({
  primaryLabel,
  secondaryLabel,
  whatsappUrl,
  className,
}: HeroButtonsProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3.5 sm:flex-row sm:flex-wrap items-stretch sm:items-center",
        className,
      )}
    >
      <Link
        href={routePaths.appointment}
        className={cn(
          buttonVariants({ size: "lg" }),
          "h-12 gap-2.5 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] px-7 text-base font-bold text-white shadow-lg shadow-[var(--brand-blue)]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--brand-blue)]/35 hover:-translate-y-0.5 active:translate-y-0",
        )}
      >
        <CalendarDays className="size-5" aria-hidden />
        <span>{primaryLabel}</span>
      </Link>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "h-12 gap-2.5 rounded-full border-2 border-[var(--brand-pink)]/40 bg-white/80 px-7 text-base font-bold text-[var(--brand-pink)] shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-[var(--brand-pink-muted)] hover:border-[var(--brand-pink)] hover:-translate-y-0.5 active:translate-y-0",
        )}
      >
        <MessageCircle className="size-5 text-[var(--brand-pink)]" aria-hidden />
        <span>{secondaryLabel}</span>
      </a>
    </div>
  );
}
