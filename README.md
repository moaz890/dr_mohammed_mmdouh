# Dr. Mohamed Mamdouh Saleh — Medical Website Platform

Production foundation for a bilingual (English / Arabic) medical website.

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Visit [http://localhost:3000/en](http://localhost:3000/en) or [http://localhost:3000/ar](http://localhost:3000/ar).

## Scripts

| Command                     | Description                    |
| --------------------------- | ------------------------------ |
| `npm run dev`               | Development server (Turbopack) |
| `npm run build`             | Production build               |
| `npm run lint` / `lint:fix` | ESLint                         |
| `npm run format`            | Prettier                       |
| `npm run typecheck`         | TypeScript                     |

## Architecture

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for routing, i18n, SEO, design system, and how to add new localized pages.

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · next-intl · shadcn/ui · TanStack Query · React Hook Form · Zod
