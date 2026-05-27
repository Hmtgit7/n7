# N7 Banking

N7 Banking is a responsive banking website for modern digital financial services. The site presents N7 and CB7 banking capabilities through a polished landing experience, product sections, insight cards, case studies, and a structured footer with company links and addresses.

## Links

- Live site: [n7-nine.vercel.app](https://n7-nine.vercel.app/)
- Repository: [Hmtgit7/n7](https://github.com/Hmtgit7/n7)

## Overview

The website is built as a high-fidelity, responsive frontend for a banking platform. It includes sections for modern banking positioning, trusted partners, core banking, digital banking, fintech insights, case studies, calls to action, and footer navigation.

## Features

- Responsive layout across desktop, tablet, and mobile screens
- Fixed navigation with scroll-based compact state
- Hero section with banking visual and trusted brand row
- Solutions section for banking products and services
- Core banking and digital banking product sections
- Infinite ticker marquee for banking messaging
- Insights and case-study sections with carousel interaction
- Final call-to-action and structured footer
- Optimized SVG and image assets

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) for deployment

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
pnpm dev           # Start local development server
pnpm build         # Create production build
pnpm start         # Run production server
pnpm lint          # Run ESLint
pnpm typecheck     # Run TypeScript checks
pnpm format        # Format files with Prettier
pnpm ci:check      # Run format, lint, typecheck, and build
```

## Project Structure

```text
app/
  components/      Reusable page sections and UI
  globals.css      Global styling and responsive layout rules
  layout.tsx       Root app layout and metadata
  page.tsx         Homepage composition

public/
  assets/          Public SVGs and images
  solution-icons/  Solution icon assets
  trusted/         Trusted brand logo assets
```

## Deployment

The site is deployed on Vercel and available at:

[https://n7-nine.vercel.app/](https://n7-nine.vercel.app/)
