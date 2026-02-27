# Story: E1-S1 — Project Initialization & Design System Setup

## Story Info
- **Epic:** E1 — Landing Page & Marketing Site
- **Status:** in-progress
- **Priority:** P0
- **Sprint:** 1

## Description
**As a** developer  
**I want to** initialize the Next.js project with Shadcn/UI and the Pure Zen theme  
**So that** all subsequent development has a consistent design foundation.

## Acceptance Criteria

- Given a new project, when initialized, then Next.js 14+ App Router is configured.
- Given Shadcn/UI is installed, when the theme is applied, then colors match Trust Blue (#0057FF), Calming Green (#22C55E), and Off-White (#FDFCF9).
- Given Tailwind is configured, then `rounded-3xl`, large padding utilities, and Instrument Serif + Inter fonts are available.
- Given the project structure, then it matches the architecture document layout.

## Technical Context

### Design System: Pure Zen Theme

**Visual Vibe Inspiration:** https://www.popcorn.space/  
- Clean, minimalist, generous whitespace
- Soft pastel cards with no harsh borders
- Heavily rounded corners (border-radius: 24px+)
- Floating 3D mockups with soft drop shadows
- Elegant Serif/Sans-Serif dual typography

**Color Palette (CSS Variables):**
- Primary (Trust Blue): `#0057FF`
- Primary Foreground: `#FFFFFF`
- Secondary (Calming Green): `#22C55E`
- Background: `#FDFCF9` (Off-White / Warm Cream)
- Foreground: `#1A1A1A`
- Muted: `#F5F5F0`
- Muted Foreground: `#737373`
- Border: `#E8E8E3`
- Card: `#FFFFFF`
- Destructive: `#EF4444`

**Typography:**
- Headings: Instrument Serif (Google Fonts)
- Body/UI: Inter (Google Fonts)
- Type Scale: Large & bold, mobile-first

**Spacing:**
- 8px soft grid
- Card padding: p-6 to p-8
- Universal border-radius: rounded-3xl (24px)

### Project Structure (from Architecture)
```
senyumbook/
├── src/
│   ├── app/
│   │   ├── (landing)/          # Landing page (SSR)
│   │   ├── (public)/           # Patient booking pages
│   │   ├── (dashboard)/        # Authenticated admin area
│   │   └── api/v1/             # API routes
│   ├── components/
│   │   ├── ui/                 # Shadcn/UI components
│   │   ├── booking/            # Patient booking components
│   │   ├── dashboard/          # Admin dashboard components
│   │   └── landing/            # Landing page sections
│   ├── lib/
│   │   ├── supabase/           # Supabase client
│   │   ├── whatsapp/           # WA API integration
│   │   └── utils/              # Shared utilities
│   └── styles/
│       └── globals.css         # Tailwind + Pure Zen theme
├── public/                     # Static assets
└── package.json
```

## Implementation Tasks

1. Initialize Next.js 14+ project with App Router and TypeScript
2. Install and configure Tailwind CSS
3. Install and configure Shadcn/UI
4. Set up Pure Zen theme in `globals.css` (colors, typography, spacing)
5. Configure Google Fonts (Instrument Serif + Inter)
6. Create the folder structure per Architecture doc
7. Create a basic landing page layout component to verify theme works
8. Verify: Dev server runs, theme colors render correctly
