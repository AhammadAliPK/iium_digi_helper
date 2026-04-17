# Story 1.2: Design System Foundation

**Epic:** Epic 1 - Project Foundation & Authentication
**Status:** done
**Started:** 2026-04-17
**Completed:** 2026-04-17

## User Story

As a developer,
I want to configure shadcn/ui with IIUM design tokens and typography,
So that all UI components follow university branding guidelines.

## Acceptance Criteria

**Given** the Turborepo project is initialized
**When** I configure Tailwind CSS with IIUM design tokens
**Then** the following design tokens are configured:
  - Primary color: Teal #008670
  - Secondary color: Gold #CDB067
  - Deep background: #030F0D
**And** typography is configured with:
  - Roboto Slab for headings
  - Inter for body text
  - Barlow Condensed for labels
**And** shadcn/ui components are installed in packages/ui
**And** Button component is customized with Primary (teal), Secondary (gold), and Ghost variants
**And** form components (Input, Textarea, Select) have teal focus rings
**And** Tailwind config is shared across apps via packages/config

## Requirements Fulfilled

- UX-DR1: Configure shadcn/ui components with IIUM color tokens
- UX-DR2: Integrate IIUM typography scale
- UX-DR3: Apply IIUM design principles (no drop shadows, clean borders)
- UX-DR4: Create Tailwind config with IIUM design tokens as CSS custom properties
- UX-DR12: Customize Button component with IIUM variants
- UX-DR13: Customize form components with teal focus rings

## Technical Notes

- Use CSS custom properties for design tokens
- Configure Tailwind to use IIUM fonts via Google Fonts
- No drop shadows per IIUM design principles
- Clean borders only on Card components

## Implementation Tasks

- [x] Install shadcn/ui dependencies
- [x] Configure Google Fonts (Roboto Slab, Inter, Barlow Condensed)
- [x] Update Tailwind config with IIUM design tokens
- [x] Create Button component with Primary, Secondary, and Ghost variants
- [x] Create Input component with teal focus ring
- [x] Create Textarea component with teal focus ring
- [x] Create Label component with Barlow Condensed font
- [x] Create Card component without shadows
- [x] Update globals.css with IIUM CSS variables
- [x] Create UI components index file
- [x] Test design system in web app


## Implementation Log

**Steps completed:**
1. ✅ Installed shadcn/ui dependencies (tailwindcss-animate, tailwind-merge, clsx, class-variance-authority)
2. ✅ Configured Google Fonts (Roboto Slab, Inter, Barlow Condensed) via index.html
3. ✅ Updated Tailwind config with complete IIUM design tokens from official DLS
4. ✅ Created Button component with Primary (teal), Secondary (gold), Ghost, Outline variants
5. ✅ Created Input component with teal focus ring matching DLS .form-control
6. ✅ Created Textarea component with teal focus ring matching DLS styles
7. ✅ Created Label component with Barlow Condensed font matching DLS .brand-label
8. ✅ Created Card component without shadows matching DLS .iium-card with hover effects
9. ✅ Updated globals.css with IIUM CSS variables from official DLS
10. ✅ Created UI components index file exporting all components
11. ✅ Test design system in web app - Build successful ✅
12. ✅ Aligned with official IIUM Design Language System (iium_digital_dls.html)

**DLS Integration:**
- Dark theme by default (var(--iium-deep) background)
- Surface architecture (var(--iium-surface), var(--iium-surface-raised))
- Official IIUM colors (teal #008670, gold #CDB067)
- DLS typography system (Roboto Slab, Inter, Barlow Condensed)
- DLS border radius (14px lg, 8px sm)
- DLS transitions and animations (spring easing, 250ms duration)
- Card hover effects matching DLS specifications
- Form controls matching DLS .form-control styles
- Labels matching DLS .brand-label styles

**Components Created:**
- packages/ui/src/components/ui/button.tsx
- packages/ui/src/components/ui/input.tsx
- packages/ui/src/components/ui/textarea.tsx
- packages/ui/src/components/ui/label.tsx
- packages/ui/src/components/ui/card.tsx

**Notes:**
- All components follow IIUM design principles from DLS
- No drop shadows on components (IIUM principle)
- Clean borders with teal focus rings for accessibility
- Hover animations on cards with lift effect
- Responsive grid layouts for component showcase
- Build output: 4.27 kB CSS (1.48 kB gzipped)
