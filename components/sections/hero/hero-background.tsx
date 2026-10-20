export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--brand-pink-muted)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--brand-blue-muted)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="absolute -start-20 top-24 size-72 rounded-full bg-[var(--brand-blue)]/10 blur-3xl" />
      <div className="absolute -end-16 top-1/3 size-96 rounded-full bg-[var(--brand-pink)]/10 blur-3xl" />
      <div className="absolute bottom-0 start-1/3 size-64 rounded-full bg-[var(--brand-blue-light)]/15 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--brand-blue) 1px, transparent 1px), linear-gradient(to bottom, var(--brand-blue) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
