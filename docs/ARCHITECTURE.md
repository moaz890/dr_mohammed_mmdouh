# Architecture — Dr. Mohamed Mamdouh Saleh (Medical Platform Foundation)

This document describes the foundational architecture for a bilingual (English/Arabic) medical website built to scale over multiple years.

## Stack

| Layer      | Choice                    | Rationale                                                                          |
| ---------- | ------------------------- | ---------------------------------------------------------------------------------- |
| Framework  | **Next.js 15 App Router** | Server Components by default, built-in Metadata API, static generation for locales |
| UI runtime | **React 19**              | Aligns with Next 15; concurrent features for future interactive modules            |
| Language   | **TypeScript (strict)**   | Long-term maintainability, safer refactors across a growing team                   |
| Styling    | **Tailwind CSS v4**       | Utility-first with design tokens via `@theme`; logical properties for RTL/LTR      |
| i18n       | **next-intl**             | First-class App Router support, localized navigation, server + client translations |
| Components | **shadcn/ui + Radix**     | Accessible primitives, own the code, medical-grade UX without vendor lock-in       |

## Routing & internationalization

- **Locale prefix routing**: `/en`, `/ar` via `middleware.ts` and `i18n/routing.ts`.
- **Default locale**: `en` with `localePrefix: "always"` so URLs are explicit (better for SEO, analytics, and sharing).
- **Request config**: `i18n/request.ts` loads `messages/{locale}.json` on the server.
- **Localized navigation**: `i18n/navigation.ts` exports `Link`, `redirect`, `useRouter`, etc., so internal links never hardcode locale segments.
- **Static locale params**: `generateStaticParams()` in `app/[locale]/layout.tsx` pre-renders both locales at build time.

**Why next-intl over alternatives?** Deep Next.js integration, typed messages, navigation helpers, and middleware that composes cleanly with App Router segments.

## RTL / LTR

- Root `app/layout.tsx` sets **`lang`** and **`dir`** from the active locale (`utils/locale.ts`).
- Fonts: **Inter** (Latin) and **Noto Sans Arabic** (Arabic), switched per locale on `<body>`.
- Prefer **logical Tailwind utilities** (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `text-start`).
- Helpers in `utils/rtl.ts` for direction detection and migration away from physical spacing.
- shadcn `components.json` has **`rtl: true`** for component-level RTL awareness.

## Folder structure

```
app/                 # Routes, metadata routes (sitemap, robots)
components/
  ui/                # shadcn primitives
  common/            # Cross-cutting UI (breadcrumbs, locale switcher, JSON-LD)
  layout/            # Future header/footer shells
  sections/          # Future page sections (not implemented)
features/            # Domain modules (appointments, articles, etc.)
hooks/               # Client hooks
lib/                 # Shared libraries (SEO, motion, query, validations)
services/            # HTTP / external integrations
config/              # Site, routes, env, design tokens (TS)
constants/           # Static constants
types/               # Shared TypeScript types
utils/               # Pure helpers
providers/           # Client providers composition
messages/            # Translation dictionaries
i18n/                # next-intl routing, request, navigation
styles/              # Global CSS and token layers
public/              # Static assets
```

**Feature-oriented growth**: New capabilities (e.g. `features/appointments`) colocate hooks, schemas, and UI without polluting `app/`.

## SEO architecture

| Concern              | Location                                                              |
| -------------------- | --------------------------------------------------------------------- |
| Per-page metadata    | `lib/seo/metadata.ts` → `createPageMetadata()`                        |
| hreflang / canonical | `buildAlternateLanguages()` using `config/routes.ts`                  |
| Open Graph & Twitter | Inside `createPageMetadata()`                                         |
| JSON-LD (Physician)  | `lib/seo/json-ld.ts` + `components/common/json-ld.tsx`                |
| Sitemap              | `app/sitemap.ts` (all future routes registered in `config/routes.ts`) |
| Robots               | `app/robots.ts`                                                       |

Central **`config/routes.ts`** defines paths once for navigation labels, sitemap, and alternates—avoid duplicating URL lists across the codebase.

## Design system

- **CSS variables** in `styles/globals.css` (brand-ready medical teal primary, light/dark).
- **Supplemental tokens** in `styles/tokens.css` (shadows, z-index).
- **TS mirror** in `config/design-system.ts` for programmatic use (containers, motion durations, z-index scale).
- **Tailwind v4 `@theme inline`** maps tokens to utilities (container widths, section spacing).

## Providers & client boundaries

`providers/app-providers.tsx` wraps client-only concerns:

- **next-themes** — light / dark / system (`attribute="class"`)
- **TanStack Query** — client data fetching with sane defaults
- **Framer Motion** — `MotionConfig` tied to `prefers-reduced-motion`
- **Sonner** — accessible toasts themed with design tokens

Server Components remain the default; client providers are mounted once at the locale layout level.

## Forms & validation

- **React Hook Form + Zod + @hookform/resolvers** installed.
- Template schema: `lib/validations/contact.schema.ts` (for future Contact / Appointment flows).
- All user-visible validation messages must come from **`messages/*`** when forms are built.

## Data & services

- `services/api-client.ts` — thin `fetch` wrapper with request IDs (extend with auth, retries, and medical API endpoints later).
- `lib/query-client.ts` — shared QueryClient factory for SSR hydration if needed later.

## Developer experience

- **ESLint** — Next.js core-web-vitals + TypeScript + `eslint-plugin-simple-import-sort`
- **Prettier** — consistent formatting
- **Husky + lint-staged** — pre-commit lint/format on staged files
- **Strict TS** — `noUncheckedIndexedAccess`, `noImplicitReturns`
- **Path alias** — `@/*` → project root

## Performance defaults

- Server Components first; `"use client"` only in providers, motion, theme, query, and interactive primitives.
- `next.config.ts`: `optimizePackageImports` for `lucide-react`, `lodash-es`, `date-fns`.
- `next/image` AVIF/WebP configured for future media-heavy pages (gallery, videos).
- Fonts loaded via `next/font` with `display: swap`.

## Accessibility

- Skip link (`components/common/skip-link.tsx`) → `#main-content`
- Visible `:focus-visible` styles in global CSS
- Reduced motion honored in CSS and Framer Motion provider
- Radix/shadcn primitives for keyboard and ARIA patterns

## Adding a new localized page (checklist)

1. Add route to `config/routes.ts` and translation keys under `navigation.routes` in **both** `messages/en.json` and `messages/ar.json`.
2. Create `app/[locale]/your-page/page.tsx` (Server Component).
3. Export `generateMetadata` using `createPageMetadata()` or `createDefaultMetadata()`.
4. Use `Link` from `@/i18n/navigation` and `getTranslations()` for all copy.
5. Add structured data via `JsonLd` if the page is indexable medical content.

## Environment

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

Required for canonical URLs, sitemap, Open Graph, and JSON-LD.
