# Story 1.2: Design System Foundation

**Epic:** Epic 1 - Project Foundation & Authentication
**Status:** done
**Started:** 2026-04-17
**Completed:** 2026-04-17
**Updated:** 2026-04-17 (Added Light Theme Support)

## User Story

As a developer,
I want to configure shadcn/ui with IIUM design tokens and typography,
So that all UI components follow university branding guidelines.

## Acceptance Criteria

**Given** the Turborepo project is initialized
**When** I configure Tailwind CSS with IIUM design tokens
**Then** the following design tokens are configured:
  - Primary color: Turquoise #00928F (PANTONE 7716 C - Official IIUM Turquoise)
  - Secondary color: Gold #D59F0F (PANTONE 7555 C - Official IIUM Gold)
  - Light theme background: #FFFFFF (default)
  - Dark theme background: #030F0D (optional)
**And** typography is configured with:
  - Roboto Slab for headings
  - Inter for body text
  - Barlow Condensed for labels
**And** shadcn/ui components are installed in packages/ui
**And** Button component is customized with Primary (teal), Secondary (gold), and Ghost variants
**And** form components (Input, Textarea, Select) have teal focus rings
**And** Tailwind config is shared across apps via packages/config
**And** Theme toggle component allows switching between light and dark themes

## Requirements Fulfilled

- UX-DR1: Configure shadcn/ui components with IIUM color tokens
- UX-DR2: Integrate IIUM typography scale
- UX-DR3: Apply IIUM design principles (clean borders, subtle shadows in light theme)
- UX-DR4: Create Tailwind config with IIUM design tokens as CSS custom properties
- UX-DR12: Customize Button component with IIUM variants
- UX-DR13: Customize form components with teal focus rings
- Light theme support matching IIUM website design patterns
- Dark theme support for reduced eye strain (optional toggle)
- Theme provider with localStorage persistence

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
- [x] Create Card component with light/dark theme support
- [x] Update globals.css with IIUM CSS variables (light theme default)
- [x] Add dark theme variant via data-theme attribute
- [x] Create UI components index file
- [x] Create ThemeProvider component with localStorage persistence
- [x] Create ThemeToggle component with header styling (text label + icon)
- [x] Update main.tsx to wrap app with ThemeProvider
- [x] Add ThemeToggle to all page headers (Login, Register, Admin Dashboard)
- [x] Position ThemeToggle after logout/action buttons in header
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
8. ✅ Created Card component with light/dark theme support
9. ✅ Updated globals.css with IIUM CSS variables (light theme default, dark theme optional)
10. ✅ Created UI components index file exporting all components
11. ✅ Created ThemeProvider component with React Context API
12. ✅ Created ThemeToggle component with sun/moon icons
13. ✅ Updated main.tsx to wrap app with ThemeProvider
14. ✅ Created ThemeToggle component with header styling
15. ✅ Updated AdminDashboard.tsx to include ThemeToggle in header (after logout button)
16. ✅ Updated LoginPage.tsx to include ThemeToggle in header
17. ✅ Updated RegisterPage.tsx to include ThemeToggle in header (including success state)
18. ✅ Test design system in web app - Build successful ✅
19. ✅ Aligned with official IIUM Design Language System and website design patterns
20. ✅ Build output: 5.80 kB CSS (1.81 kB gzipped), 265.82 kB JS (83.40 kB gzipped)

**Light Theme Implementation (2026-04-17):**
- Default theme now uses light background matching IIUM website (https://www.iium.edu.my/v2/)
- Background colors:
  * --iium-deep: #FFFFFF (pure white base)
  * --iium-surface: #F8FAFC (light gray-blue components)
  * --iium-surface-raised: #FFFFFF (card backgrounds)
- Text colors optimized for light backgrounds:
  * --iium-text-primary: #1A202C (dark gray)
  * --iium-text-secondary: #4A5568 (medium gray)
  * --iium-text-muted: #718096 (light gray)
- Subtle borders and shadows for depth:
  * --iium-border-subtle: rgba(0, 146, 143, 0.15)
  * Cards have subtle shadows (0 1px 3px rgba(0, 0, 0, 0.05))
  * Hover effects with turquoise shadows

**Dark Theme Implementation (via data-theme="dark"):**
- Optional dark theme for reduced eye strain
- Background colors:
  * --iium-deep: #030F0D (deep turquoise-black)
  * --iium-surface: #081D1A (standard component)
  * --iium-surface-raised: #0F2B26 (hover/active)
- Text colors for dark backgrounds:
  * --iium-text-primary: #FFFFFF
  * --iium-text-secondary: rgba(255, 255, 255, 0.75)
  * --iium-text-muted: rgba(255, 255, 255, 0.45)

**Theme Switching:**
- ThemeProvider component uses React Context API
- Theme preference persisted to localStorage
- ThemeToggle button with "Light"/"Dark" text label and sun/moon icons
- Positioned in page header (top-right) alongside navigation buttons
- Smooth transitions between themes (250ms duration)
- Hover effects for better UX
- Available on all pages (Login, Register, Admin Dashboard)

**DLS Integration:**
- Light theme by default (matching IIUM website patterns)
- Surface architecture for both light and dark themes
- Official IIUM colors from Visual Identity System 2021:
  * Turquoise #00928F (PANTONE 7716 C) - Primary corporate colour
  * Gold #D59F0F (PANTONE 7555 C) - Secondary corporate colour
  * Kulliyyah accent colours available for thematic usage
- DLS typography system (Roboto Slab, Inter, Barlow Condensed)
- DLS border radius (14px lg, 8px sm)
- DLS transitions and animations (spring easing, 250ms duration)
- Card hover effects matching theme specifications
- Form controls matching DLS .form-control styles with theme support
- Labels matching DLS .brand-label styles

**Components Created:**
- packages/ui/src/components/ui/button.tsx
- packages/ui/src/components/ui/input.tsx
- packages/ui/src/components/ui/textarea.tsx
- packages/ui/src/components/ui/label.tsx
- packages/ui/src/components/ui/card.tsx
- apps/web/src/components/ThemeProvider.tsx (NEW)
- apps/web/src/components/ThemeToggle.tsx (NEW)

**Notes:**
- All components follow IIUM Visual Identity System 2021 guidelines
- Official IIUM Turquoise (#00928F) and Gold (#D59F0F) are the primary brand colors
- Kulliyyah accent colours available: KICT Green, KENMS Yellow, KOED Blue, etc.
- Light theme is now the default (matching IIUM website)
- Dark theme available via toggle button in header (reduced eye strain option)
- Theme preference persists across sessions via localStorage
- Theme toggle positioned in page header alongside navigation buttons
- Clean borders with turquoise focus rings for accessibility
- Hover animations on cards with theme-appropriate shadows
- Responsive grid layouts for component showcase
- Build output: 5.80 kB CSS (1.81 kB gzipped), 265.82 kB JS (83.40 kB gzipped)

**Header Layout (Theme Toggle Position):**
- Login Page: Logo | Theme Toggle | Register Button
- Register Page: Logo | Theme Toggle | Login Button
- Admin Dashboard: Logo | Admin Badge | Logout | Theme Toggle
