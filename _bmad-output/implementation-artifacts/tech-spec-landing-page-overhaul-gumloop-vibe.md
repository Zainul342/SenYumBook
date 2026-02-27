---
title: 'SenYumBook Landing Page Overhaul — Gumloop Vibe'
slug: 'landing-page-overhaul-gumloop-vibe'
created: '2026-02-27'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'TypeScript']
files_to_modify: ['src/app/globals.css', 'src/app/page.tsx', 'src/app/layout.tsx']
code_patterns: ['CSS custom properties', 'Tailwind v4 @import', 'Next.js App Router', 'Server Components']
test_patterns: ['Visual browser verification', 'npm run build']
---

# Tech-Spec: SenYumBook Landing Page Overhaul — Gumloop Vibe

**Created:** 2026-02-27

## Overview

### Problem Statement

The current SenYumBook landing page (`src/app/page.tsx`) is a basic skeleton with only 5 generic sections (Hero, Features, Pricing, FAQ, Footer). It uses placeholder emoji icons, lacks visual assets, has no social proof sections, and does NOT follow the complete 15-section structure defined in `senyumbook-portofolio-summary.md`. The design feels flat and "basic" — far from the premium SaaS look the product needs for high-conversion portfolio presentation.

### Solution

Completely overhaul `page.tsx` and `globals.css` to:
1. Follow the full 15-section structure from `senyumbook-portofolio-summary.md`
2. Apply the **Gumloop.com vibe** (scraped data): clean white backgrounds (#FCFCFC), bold accent colors, large typography (72px h1), modern sans-serif fonts, rounded buttons, and generous spacing
3. Blend with SenYumBook's dental clinic identity: warm blue (#4A90E2) primary, green (#7ED957) accent, calming/trustworthy tone
4. Add visual assets using generated mockup images

### Scope

**In Scope:**
- Complete rewrite of `src/app/globals.css` (new design tokens merging Gumloop vibe with dental clinic warmth)
- Complete rewrite of `src/app/page.tsx` (all 15 sections from portfolio summary)
- Update `src/app/layout.tsx` (font swap from Instrument Serif to Geist Sans + Inter)
- Generate hero image / dashboard mockup via `generate_image`
- Responsive design (mobile-first)
- Smooth micro-animations (fadeInUp, hover effects)

**Out of Scope:**
- Backend functionality (booking system, WhatsApp API integration)
- Authentication / signup form logic
- Multi-page routing (About, Blog, etc.)
- SEO optimization beyond basic meta tags (already done)
- Deployment / CI/CD configuration

## Context for Development

### Codebase Patterns

- **CSS Strategy:** Vanilla CSS custom properties in `globals.css` with utility classes (`.zen-card`, `.zen-btn-primary`, etc.)
- **Component Style:** Currently all inline in `page.tsx` as a single Server Component — no separate component files
- **Font Loading:** Google Fonts via `<link>` tags in `layout.tsx` (not via `@import` in CSS — this caused a Tailwind v4 parsing error previously)
- **Tailwind v4:** Uses `@import "tailwindcss"` at top of `globals.css`; PostCSS plugin configured in `postcss.config.mjs`

### Gumloop Design Reference (Scraped Data)

| Token | Gumloop Value | SenYumBook Adaptation |
|-------|--------------|----------------------|
| Background | `#FCFCFC` | `#FCFCFC` (adopt as-is) |
| Text Primary | `#030712` | `#0A0A0A` (slightly softer) |
| Accent/CTA | `#FF59AF` (pink) | `#4A90E2` (blue — dental trust) |
| Secondary Accent | — | `#7ED957` (green — health) |
| Font Heading | GeistSans 72px | Inter 700 (72px clamp) |
| Font Body | GeistSans/system | Inter 400 (16-18px) |
| Button Radius | 10px | 10px (adopt) |
| Input Radius | 3px | 8px (slightly warmer) |
| Base Spacing Unit | 4px | 4px (adopt) |
| Button Style | Ghost border + transparent bg | Solid fill + ghost variant |
| Shadow | Minimal / none | Soft subtle shadows |

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `senyumbook-portofolio-summary.md` | Master content blueprint (15 sections with exact copy) |
| `src/app/globals.css` | Current design tokens — will be overhauled |
| `src/app/page.tsx` | Current skeleton page — will be rewritten |
| `src/app/layout.tsx` | Root layout with fonts and meta — minor updates |
| `docs/ux-design-specification.md` | UX spec for reference (Pure Zen system) |

### Technical Decisions

1. **Font Change:** Replace `Instrument Serif` heading font with `Inter` (weight 700-800) to match Gumloop's modern, bold heading style. Keep `Inter` for body text.
2. **Color Shift:** Move from popcorn.space warm tones to Gumloop's cleaner palette, but keep dental-appropriate blue (#4A90E2) as primary accent instead of Gumloop's pink.
3. **Layout:** Use CSS Grid for feature cards and pricing cards. Flexbox for navigation and alignment.
4. **No Component Splitting:** Keep everything in `page.tsx` as a single file for portfolio simplicity — this is a static landing page, not a full app.
5. **Images:** Generate 1-2 mockup images via `generate_image` tool for Hero section and product demo.

## Implementation Plan

### Tasks

#### [ ] Task 1: Update `src/app/globals.css` — New Design System

- File: `src/app/globals.css`
- Action: Full rewrite replacing current tokens with Gumloop-inspired tokens (GeistSans/Inter, #FCFCFC bg, #4A90E2 primary, #7ED957 secondary).
- Notes: Keep Tailwind v4 `@import`, add utility classes (`.zen-card`, etc), add soft shadows and micro-animations.

#### [ ] Task 2: Update `src/app/layout.tsx` — Font Swap

- File: `src/app/layout.tsx`
- Action: Swap font link from Instrument Serif to Inter bold weights.
- Notes: Update `--font-heading` to use Inter. Keep SEO meta intact.

#### [ ] Task 3: Rewrite `src/app/page.tsx` — Full 15-Section Landing Page

- File: `src/app/page.tsx`
- Action: Rewrite entirely to contain 15 semantic HTML sections matching the portofolio summary text strictly.
- Notes: Use Tailwind utility classes mapping to new tokens. Mobile-first grid layouts. Dummy links.

#### [ ] Task 4: Generate Visual Assets

- File: N/A (Using Tool `generate_image`)
- Action: Create required dashboard hero mockup.
- Notes: High quality, SaaS dashboard, dental context.

### Acceptance Criteria

- [ ] AC 1: Given the landing page is loaded, When I inspect CSS variables, Then all color tokens match the Gumloop-adapted palette (#FCFCFC background, #4A90E2 primary, #7ED957 secondary).
- [ ] AC 2: Given the landing page is rendered, When I scroll from top to bottom, Then all 15+ sections from `senyumbook-portofolio-summary.md` are visible in correct order.
- [ ] AC 3: Given any heading element, When inspected, Then it uses Inter font with bold weight (700+) and h1 is >=48px on desktop.
- [ ] AC 4: Given the page is viewed on mobile (375px width), When scrolling, Then all sections stack vertically, text is readable, buttons are tappable (min 44px height).
- [ ] AC 5: Given all changes are made, When running `npm run build`, Then the build completes with zero errors.
- [ ] AC 6: Given the page is loaded in a browser, When visually inspected, Then it feels like a premium SaaS landing page comparable to gumloop.com (clean white space, bold typography, prominent CTAs).

## Additional Context

### Dependencies

- No new npm packages required
- Font change: Inter (already available via Google Fonts, just need to update link weights)
- Generated images: Will be placed in `/public/` directory

### Testing Strategy

1. **Build Test:** `npm run build` — must pass with zero errors
2. **Dev Server:** `npm run dev` — visually inspect at `localhost:3000`
3. **Browser Check:** Open in browser, scroll through all sections, verify responsiveness at 375px/768px/1440px
4. **Content Check:** Cross-reference each section against `senyumbook-portofolio-summary.md` to verify all 15 sections are present with correct copy

### Notes

- The Gumloop vibe is applied to LAYOUT and VISUAL STYLE only — the content/copy comes 100% from `senyumbook-portofolio-summary.md`
- This is a PORTFOLIO landing page (fictional data for demo purposes)
- All testimonials, clinic names, and statistics are fictional
- The page is static (no backend connections) — all CTAs link to `#` or dummy anchors
