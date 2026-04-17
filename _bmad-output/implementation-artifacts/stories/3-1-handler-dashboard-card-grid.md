# Story 3.1: Handler Dashboard (Card Grid Layout)

**Epic:** Epic 3 - Request Management & Triage
**Story ID:** 3-1-handler-dashboard-card-grid
**Status:** in-progress
**Assigned:** Amelia (Dev Agent)
**Priority:** High

## User Story

As a **handler (software team member)**,
I want to **view all requests in a centralized card-based dashboard**,
So that **I can see everything at a glance**.

## Acceptance Criteria

**Given** I am logged in as a HANDLER or ADMIN
**When** I navigate to the handler dashboard
**Then** I see all requests displayed as cards in a grid layout:
  - 3 columns on desktop (>1024px)
  - 2 columns on tablet (640-1024px)
  - 1 column on mobile (<640px)

**And** each request card displays:
  - Request reference number (e.g., REQ-2026-001)
  - Request title (truncated if too long)
  - Status badge (color-coded)
  - Priority indicator (Low=Gray, Medium=Gold, High=Orange)
  - Assigned developer avatar (if assigned) or "Unassigned"
  - Creation date (e.g., "2 days ago")

## Technical Requirements

### Components to Create:
1. **RequestCard Component**
   - Display request summary information
   - Status badge with color coding
   - Priority indicator
   - Assigned avatar or placeholder
   - Click to navigate to detail view

2. **HandlerDashboard Page**
   - Responsive grid layout
   - Fetch requests from API
   - Display RequestCard components
   - Empty state for no requests

### API Endpoints:
- `GET /api/v1/requests` - Fetch all requests (authenticated)

### Database:
- Use existing Request schema
- Join with User for assigned developer info

### Design Tokens:
- Use IIUM design system colors
- Card styling from globals.css
- Responsive breakpoints

## Implementation Notes

- Use existing form validation patterns
- Follow IIUM DLS styling
- Ensure mobile-first responsive design
- Add loading states
- Handle error states
- Use TypeScript for type safety

## Definition of Done

- [ ] Story file created
- [ ] RequestCard component implemented
- [ ] HandlerDashboard page implemented
- [ ] Responsive grid layout working
- [ ] API integration complete
- [ ] Status badges color-coded
- [ ] Priority indicators working
- [ ] Assigned avatars or placeholders
- [ ] Loading and error states
- [ ] Mobile responsive
- [ ] Tested on desktop, tablet, mobile
- [ ] Code follows project patterns
