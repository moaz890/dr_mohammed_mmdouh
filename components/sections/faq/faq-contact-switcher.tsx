"use client";

import { useState } from "react";

import { buildWhatsAppUrl } from "@/lib/whatsapp";

export interface FaqBranchItem {
  id: "newCairo" | "madinaty";
  name: string;
  city: string;
  phone: string;
}

interface FaqContactSwitcherProps {
  branches: FaqBranchItem[];
  callBtnLabel: string;
  whatsappBtnLabel: string;
}

/* ── Map Pin Icon ────────────────────────────────────────────────────────── */
const MapPinIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/* ── Phone Call Icon ─────────────────────────────────────────────────────── */
const PhoneSolidIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-4 w-4 shrink-0"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

/* ── WhatsApp Icon ───────────────────────────────────────────────────────── */
const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-4 w-4 shrink-0"
  >
    <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.957.564 3.782 1.541 5.328L2 22l4.792-1.505a9.98 9.98 0 0 0 5.239 1.488c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.727 14.157c-.242.679-1.205 1.282-1.996 1.455-.54.118-1.246.212-3.616-.769-3.033-1.254-4.991-4.343-5.143-4.544-.147-.202-1.222-1.626-1.222-3.102 0-1.475.772-2.2 1.045-2.502.274-.303.596-.379.794-.379.199 0 .398.002.571.011.184.01.43-.07.673.513.25.597.854 2.083.929 2.235.075.152.124.331.025.533-.1.202-.15.327-.298.502-.149.176-.312.392-.446.527-.149.149-.304.312-.131.61.173.298.769 1.269 1.649 2.052 1.134 1.01 2.09 1.323 2.389 1.472.298.149.472.124.646-.075.174-.199.746-.869.944-1.168.199-.298.398-.249.671-.149.273.099 1.74.82 2.038.969.298.149.497.224.571.348.075.124.075.724-.167 1.403z" />
  </svg>
);

export function FaqContactSwitcher({
  branches,
  callBtnLabel,
  whatsappBtnLabel,
}: FaqContactSwitcherProps) {
  const [activeBranchId, setActiveBranchId] = useState<"newCairo" | "madinaty">(
    "newCairo",
  );

  const activeBranch = branches.find((b) => b.id === activeBranchId) ?? branches[0];

  if (!activeBranch) {
    return null;
  }

  const whatsappUrl = buildWhatsAppUrl(
    `مرحباً دكتور محمد صالح، أود الاستفسار وحجز موعد في ${activeBranch.name}.`,
    activeBranch.phone,
  );

  return (
    <div className="mt-5 flex flex-col items-center">
      {/* ── Branch Tabs Selector ─────────────────────────────────────────── */}
      <div
        className="mb-4 grid w-full max-w-md grid-cols-1 gap-2.5 sm:grid-cols-2"
        role="tablist"
        aria-label="اختيار فرع العيادة"
      >
        {branches.map((branch) => {
          const isActive = activeBranchId === branch.id;
          return (
            <button
              key={branch.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveBranchId(branch.id)}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                isActive
                  ? "bg-[var(--brand-blue)] text-white shadow-md shadow-[var(--brand-blue)]/25"
                  : "bg-muted/70 text-foreground/80 hover:bg-muted hover:text-foreground"
              }`}
            >
              <MapPinIcon
                className={isActive ? "text-white" : "text-[var(--brand-pink)]"}
              />
              <span>{branch.name}</span>
              <span
                className={`rounded-md px-1.5 py-0.5 text-[11px] ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-background/80 text-muted-foreground"
                }`}
              >
                {branch.city}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Contact Buttons for Active Branch ────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="faq-cta-whatsapp-btn inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold shadow-md transition-all"
        >
          <WhatsAppIcon />
          <span>
            {whatsappBtnLabel} ({activeBranch.city})
          </span>
        </a>

        <a
          href={`tel:${activeBranch.phone}`}
          className="faq-cta-call-btn inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-bold transition-all hover:bg-muted"
        >
          <PhoneSolidIcon />
          <span>
            {callBtnLabel}: <bdi>{activeBranch.phone}</bdi>
          </span>
        </a>
      </div>
    </div>
  );
}
