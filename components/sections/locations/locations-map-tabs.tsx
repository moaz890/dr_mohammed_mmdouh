"use client";

import { useState } from "react";

import type { BranchLocationId, BranchLocationItem } from "./types";

/* ── External Link Icon ──────────────────────────────────────────────────── */
const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* ── Map Pin Icon ────────────────────────────────────────────────────────── */
const MapPinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4 text-[var(--brand-pink)]"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

interface LocationsMapTabsProps {
  branches: BranchLocationItem[];
  directionsLabel: string;
}

export function LocationsMapTabs({ branches, directionsLabel }: LocationsMapTabsProps) {
  const [activeBranchId, setActiveBranchId] = useState<BranchLocationId>("newCairo");

  const activeBranch = branches.find((b) => b.id === activeBranchId) ?? branches[0];

  if (!activeBranch) {
    return null;
  }

  return (
    <div className="locations-maps-box">
      {/* ── Tabs Selector ────────────────────────────────────────────────── */}
      <div
        className="locations-tabs-bar mb-6"
        role="tablist"
        aria-label="اختيار فرع العيادة على الخريطة"
      >
        {branches.map((branch) => {
          const isActive = activeBranchId === branch.id;

          return (
            <button
              key={branch.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`map-panel-${branch.id}`}
              id={`map-tab-${branch.id}`}
              onClick={() => setActiveBranchId(branch.id)}
              className={`locations-tab-btn flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                isActive
                  ? "locations-tab-btn--active bg-[var(--brand-blue)] text-white shadow-lg shadow-[var(--brand-blue)]/25"
                  : "bg-white/80 text-foreground/80 hover:bg-white hover:text-foreground"
              }`}
            >
              <MapPinIcon />
              <span>{branch.name}</span>
              <span
                className={`locations-tab-badge rounded-md px-2 py-0.5 text-xs ${
                  isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                {branch.city}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Active Map Viewport Frame ─────────────────────────────────────── */}
      <div
        id={`map-panel-${activeBranch.id}`}
        role="tabpanel"
        aria-labelledby={`map-tab-${activeBranch.id}`}
        className="locations-map-card overflow-hidden rounded-2xl border border-[var(--brand-blue)]/20 bg-white shadow-xl shadow-[var(--brand-blue)]/10"
      >
        {/* Top Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 bg-muted/30 px-5 py-3.5 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-lg bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
              <MapPinIcon />
            </span>
            <div>
              <h4 className="text-sm font-bold text-foreground sm:text-base">
                {activeBranch.name}
              </h4>
              <p className="text-xs text-muted-foreground">{activeBranch.address}</p>
            </div>
          </div>

          <a
            href={activeBranch.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="locations-directions-link inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-white px-3.5 py-1.5 text-xs font-bold text-[var(--brand-blue)] shadow-sm transition-all hover:bg-[var(--brand-blue)] hover:text-white"
          >
            <ExternalLinkIcon />
            <span>{directionsLabel}</span>
          </a>
        </div>

        {/* Responsive Map Embed Container */}
        <div className="locations-iframe-wrapper relative w-full pt-[56.25%] sm:pt-[45%] lg:pt-[36%]">
          <iframe
            key={activeBranch.mapSrc}
            src={activeBranch.mapSrc}
            title={`خريطة ${activeBranch.name}`}
            className="absolute inset-0 size-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
