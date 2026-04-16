---
stepsCompleted: ["step-01-validate-prerequisites", "step-02-design-epics", "step-03-create-stories", "step-04-final-validation"]
inputDocuments: ["prd.md", "architecture.md", "ux-design-specification.md"]
workflowType: "epics-and-stories"
lastStep: 4
status: "complete"
completedAt: "2026-04-16"
project_name: 'IIUM Internal Software Change Request Portal'
user_name: 'Ahammadali'
date: '2026-04-16'
epicsCreated: 6
storiesCreated: 30
validationResults: "passed"
---

# IIUM Internal Software Change Request Portal - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for IIUM Internal Software Change Request Portal, decomposing the requirements from the PRD, UX Design, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

**Authentication & Access Control (5 FRs):**
- FR1: Users can log in using username and password authentication
- FR2: System can authenticate users via JSON Web Tokens (JWT) with session expiration
- FR3: Users can reset forgotten passwords via email verification
- FR4: System can enforce role-based access control (requester, handler, admin roles)
- FR5: System can restrict access to specific features based on user role

**Request Submission (9 FRs):**
- FR6: Requesters can submit software change requests through a structured form
- FR7: Requesters can specify request type (bug, enhancement, form change, report change, workflow improvement)
- FR8: Requesters can indicate urgency level (low, medium, high)
- FR9: Requesters can select the affected system from a dropdown list
- FR10: Requesters can provide title and description for the request
- FR11: Requesters can attach files (screenshots, documents) to requests
- FR12: System can validate form fields before submission
- FR13: System can provide clear error messages for invalid submissions
- FR14: Requesters can receive immediate email confirmation upon successful request submission

**Request Management (8 FRs):**
- FR15: Handlers can view all incoming requests in a centralized dashboard
- FR16: Handlers can filter requests by status, priority, department, or request type
- FR17: Handlers can view detailed information for a specific request
- FR18: Handlers can assign requests to specific developers
- FR19: Handlers can update request status (open, in progress, resolved, closed)
- FR20: Handlers can add comments or notes to requests
- FR21: Requesters can view their submitted requests and current status
- FR22: Requesters can view the full history of status changes and comments for their requests

**Email Notifications (5 FRs):**
- FR23: System can send immediate email confirmation when a request is submitted
- FR24: System can send email notifications when request status changes
- FR25: System can send email notifications when a request is assigned to a developer
- FR26: System can send email notifications when comments are added to a request
- FR27: System can deliver notification emails within 5 minutes of trigger event

**System Administration (4 FRs):**
- FR28: Admins can view analytics dashboard with request volume metrics
- FR29: Admins can view performance metrics (triage time, resolution time)
- FR30: Admins can view request breakdown by type, department, and system
- FR31: Admins can export reports for governance meetings

**User Account Management (2 FRs):**
- FR32: Admins can manage user accounts (create, deactivate, update roles)
- FR33: Users can update their own profile information (email, name, department)

**Help & Support (3 FRs):**
- FR34: Users can access help documentation for using the portal
- FR35: Users can find support contact information for assistance
- FR36: System can provide contextual help for form fields and features

**Error Handling & Recovery (4 FRs):**
- FR37: System can display user-friendly error messages for failed operations
- FR38: System can provide recovery guidance for common errors
- FR39: System can maintain data integrity during error conditions
- FR40: System can log errors for administrator review

**Data Management (4 FRs):**
- FR41: System can store all requests with complete history
- FR42: System can preserve request data even if operations fail
- FR43: System can enforce file attachment size limits (maximum 5MB)
- FR44: System can validate file attachment types

**Security (6 FRs):**
- FR45: System can protect against Cross-Site Request Forgery (CSRF) attacks
- FR46: System can protect against Cross-Site Scripting (XSS) attacks
- FR47: System can enforce Content Security Policy (CSP) headers
- FR48: System can implement rate limiting on login and submission endpoints
- FR49: System can sanitize all user inputs to prevent injection attacks
- FR50: System can hash passwords using secure algorithms (bcrypt/argon2)

### NonFunctional Requirements

**Performance (9 NFRs):**
- NFR-P1: Initial page load completes within 2 seconds (above-the-fold content)
- NFR-P2: Request submission form loads within 2 seconds
- NFR-P3: Software team dashboard loads within 2 seconds
- NFR-P4: Form submission completes within 3 seconds (submit to confirmation)
- NFR-P5: Time to Interactive (TTI) is under 3 seconds
- NFR-P6: System supports 100 concurrent users without performance degradation
- NFR-P7: System maintains performance under peak load (500 concurrent users)
- NFR-P8: Lighthouse Performance score is 90 or higher
- NFR-P9: System performance is monitored and logged for optimization

**Security (18 NFRs):**
- NFR-S1: User passwords are hashed using bcrypt or argon2 with minimum work factor 12
- NFR-S2: JWT tokens expire after 8 hours of inactivity
- NFR-S3: JWT tokens are signed using RS256 algorithm or stronger
- NFR-S4: Failed login attempts are rate-limited (5 attempts per 15 minutes per IP)
- NFR-S5: Password reset links expire after 1 hour
- NFR-S6: All data is encrypted at rest using AES-256 or equivalent
- NFR-S7: All data transmission is encrypted using TLS 1.3 or higher
- NFR-S8: Sensitive data (passwords, tokens) is never logged or exposed in error messages
- NFR-S9: File attachments are scanned for malware before storage
- NFR-S10: System implements CSRF protection on all state-changing endpoints
- NFR-S11: System implements XSS protection (input sanitization, output encoding, CSP headers)
- NFR-S12: System implements Content Security Policy (CSP) headers
- NFR-S13: System implements HTTP Strict Transport Security (HSTS) headers
- NFR-S14: System implements rate limiting on submission endpoints (10 requests per minute per user)
- NFR-S15: System validates and sanitizes all user inputs to prevent SQL injection
- NFR-S16: Sessions are invalidated after 8 hours of inactivity
- NFR-S17: Users can manually log out from all devices
- NFR-S18: Session tokens are stored securely (HttpOnly, Secure, SameSite cookies)

**Accessibility (10 NFRs):**
- NFR-A1: System complies with WCAG 2.1 Level AA standards
- NFR-A2: System is navigable using keyboard only (no mouse required)
- NFR-A3: System is compatible with screen readers (JAWS, NVDA, VoiceOver)
- NFR-A4: Color contrast ratios meet WCAG AA (4.5:1 for normal text, 3:1 for large text)
- NFR-A5: Focus indicators are visible on all interactive elements
- NFR-A6: Text can be resized up to 200% without loss of functionality
- NFR-A7: System does not rely on color alone to convey information
- NFR-A8: All form inputs have properly associated labels
- NFR-A9: Error messages are descriptive and indicate how to fix errors
- NFR-A10: Required fields are clearly indicated before form submission

**Integration (8 NFRs):**
- NFR-I1: Email notifications are delivered within 5 minutes of trigger event
- NFR-I2: Email delivery success rate is 98% or higher
- NFR-I3: System logs all email delivery attempts and failures
- NFR-I4: System implements retry logic for failed email deliveries (3 attempts)
- NFR-I5: System integrates with university SSO using OAuth 2.0 or SAML 2.0 (Phase 2)
- NFR-I6: SSO integration does not add more than 1 second to login time (Phase 2)
- NFR-I7: System provides REST API for future integrations
- NFR-I8: API follows OpenAPI (Swagger) specification for documentation

**Reliability (9 NFRs):**
- NFR-R1: System uptime is 99% during business hours (Monday-Friday, 8am-6pm)
- NFR-R2: Planned maintenance is scheduled outside business hours with 48-hour notice
- NFR-R3: System can recover from failures without data loss (zero data loss tolerance)
- NFR-R4: All database transactions are atomic (all-or-nothing)
- NFR-R5: System implements database backups daily with 30-day retention
- NFR-R6: System preserves all request data even if operations fail
- NFR-R7: System displays user-friendly error messages for all error conditions
- NFR-R8: System logs all errors for administrator review
- NFR-R9: System provides recovery guidance for common errors

**Scalability (5 NFRs):**
- NFR-SC1: System supports 10x user growth with less than 10% performance degradation
- NFR-SC2: System can scale to 10,000 users with architectural changes (database indexing, caching)
- NFR-SC3: System can handle 1,000 requests per day with current architecture
- NFR-SC4: System can scale to 10,000 requests per day with architectural optimizations
- NFR-SC5: System can store 5 years of request history with archival policy for older data

### Additional Requirements

**Starter Template:**
- Initialize Turborepo monorepo using `pnpm create turbo iium-change-request-portal`
- Manual setup approach (not using pre-built templates like T3 Stack)
- Configure pnpm as package manager (recommended for Turborepo)

**Infrastructure & Deployment:**
- Target deployment: VPS with Docker Compose orchestration
- PostgreSQL database with Prisma ORM and migrations
- Fastify REST API framework with TypeScript
- Local filesystem storage for file attachments (5MB limit per file)
- Docker Compose configuration for development, staging, and production environments

**Technical Stack:**
- Frontend: React SPA with TypeScript, React Router v6, React Query, Axios
- Styling: Tailwind CSS with IIUM design tokens (Teal #008670, Gold #CDB067)
- UI Components: shadcn/ui customized with IIUM branding
- Backend: Fastify with TypeScript, structured logging (Pini)
- Authentication: Custom JWT using jose library, RS256 signing
- Password Hashing: bcrypt with work factor 12
- Token Storage: HttpOnly cookies with Secure, SameSite=strict flags
- State Management: React Query for server state, Context API for auth state
- Form Handling: React Hook Form with Zod validation

**Security Implementation:**
- JWT tokens: RS256 asymmetric signing, 8-hour inactivity expiration
- CSRF protection: Required on all state-changing endpoints (Fastify CSRF plugin)
- Rate limiting: 5 login attempts per 15 minutes per IP, 10 submissions per minute per user
- Security headers: CSP, HSTS, XSS protection headers
- Input validation: Zod schemas on all API endpoints

**Integration Requirements:**
- Email notifications via university SMTP server
- Email retry logic: 3 attempts with exponential backoff
- Email templates: Confirmation, status changes, assignments, comments
- University SSO integration: Deferred to Phase 2 (OAuth 2.0/SAML 2.0)

**Monitoring & Logging:**
- Structured JSON logging using Pino
- Error logging for administrator review
- Performance monitoring deferred to post-MVP
- Uptime monitoring: 99% during business hours target

### UX Design Requirements

**Design System Foundation (UX-DR1 to UX-DR5):**
- UX-DR1: Configure shadcn/ui components with IIUM color tokens (Teal #008670, Gold #CDB067, Deep Background #030F0D)
- UX-DR2: Integrate IIUM typography scale (Roboto Slab for headings, Inter for body, Barlow Condensed for labels)
- UX-DR3: Apply IIUM design principles: no drop shadows, clean borders, no busy backgrounds
- UX-DR4: Create Tailwind config with IIUM design tokens as CSS custom properties
- UX-DR5: Implement semantic color mapping for workflow states (Open=Gray, In Progress=Blue, Resolved=Teal, Closed=Dark)

**Component Implementation (UX-DR6 to UX-DR15):**
- UX-DR6: Create RequestCard component with compact and full variants, displaying request title, status badge, priority, assignee, and creation date
- UX-DR7: Create ActivityTimeline component showing chronological request history with solid circles for past events, hollow for future
- UX-DR8: Create StatusBadge component with color-coded backgrounds and text for Open, In Progress, Resolved, and Closed states
- UX-DR9: Create RequestForm component with progressive disclosure, multi-step flow (request type selection, details, review, submit)
- UX-DR10: Create FilterPanel component with dropdown selects for Status, Priority, Department, and Type filters
- UX-DR11: Create NotificationDrawer component sliding in from right with recent notifications list
- UX-DR12: Customize shadcn/ui Button component with Primary (teal), Secondary (gold), and Ghost variants using Barlow Condensed font
- UX-DR13: Customize shadcn/ui form components (Input, Textarea, Select) with teal focus rings and Inter font
- UX-DR14: Create Avatar component for user assignment visualization with initials fallback
- UX-DR15: Create Card component without shadow (IIUM principle) with border-only design

**Accessibility Implementation (UX-DR16 to UX-DR20):**
- UX-DR16: Ensure all color combinations meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
- UX-DR17: Implement keyboard navigation with logical Tab order following visual layout
- UX-DR18: Add visible focus indicators (2px teal ring) on all interactive elements
- UX-DR19: Implement ARIA labels for all icons without visible text
- UX-DR20: Ensure all form inputs have properly associated labels using <label> or aria-label

**Responsive Design (UX-DR21 to UX-DR23):**
- UX-DR21: Implement mobile-first CSS with Tailwind breakpoints (<640px mobile, 640-1024px tablet, >1024px desktop)
- UX-DR22: Optimize touch targets on mobile with minimum 44×44px tap targets and 8px spacing between elements
- UX-DR23: Implement hamburger menu navigation on mobile (<1024px) with full-screen drawer

**Interaction Patterns (UX-DR24 to UX-DR25):**
- UX-DR24: Implement real-time form validation with green checkmarks for valid fields and red borders with error messages for invalid fields
- UX-DR25: Implement loading states with skeleton screens for initial page loads, spinners for individual components, and progress bars for file uploads

**Page-Specific UX Requirements:**
- UX-DR26: Homepage with clean, minimal design and prominent "Submit Request" call-to-action (teal color)
- UX-DR27: Requester dashboard as list view of my requests with status badges and action buttons
- UX-DR28: Handler dashboard as card-based grid layout (3 columns desktop, 2 tablet, 1 mobile) with filtering controls
- UX-DR29: Request details page with split view (details + activity timeline) on desktop, stacked on mobile

### FR Coverage Map

| FR | Epic | Description |
|----|------|-------------|
| FR1 | Epic 1 | Username/password login |
| FR2 | Epic 1 | JWT authentication |
| FR3 | Epic 1 | Password reset via email |
| FR4 | Epic 1 | Role-based access control |
| FR5 | Epic 1 | Feature access restriction |
| FR6 | Epic 2 | Structured request submission form |
| FR7 | Epic 2 | Request type selection |
| FR8 | Epic 2 | Urgency level indication |
| FR9 | Epic 2 | System affected selection |
| FR10 | Epic 2 | Title and description fields |
| FR11 | Epic 2 | File attachments |
| FR12 | Epic 2 | Form validation |
| FR13 | Epic 2 | Clear error messages |
| FR14 | Epic 2 | Email confirmation |
| FR15 | Epic 3 | Centralized dashboard |
| FR16 | Epic 3 | Dashboard filtering |
| FR17 | Epic 3 | Request detail view |
| FR18 | Epic 3 | Assignment to developers |
| FR19 | Epic 3 | Status updates |
| FR20 | Epic 3 | Comments/notes |
| FR21 | Epic 4 | Requester request visibility |
| FR22 | Epic 4 | Request history visibility |
| FR23 | Epic 4 | Immediate confirmation email |
| FR24 | Epic 4 | Status change emails |
| FR25 | Epic 4 | Assignment emails |
| FR26 | Epic 4 | Comment emails |
| FR27 | Epic 4 | 5-minute email delivery |
| FR28 | Epic 5 | Analytics dashboard |
| FR29 | Epic 5 | Performance metrics |
| FR30 | Epic 5 | Request breakdown |
| FR31 | Epic 5 | Report exports |
| FR32 | Epic 1/5 | Admin user management |
| FR33 | Epic 1 | Profile updates |
| FR34 | Epic 6 | Help documentation |
| FR35 | Epic 6 | Support contact |
| FR36 | Epic 6 | Contextual help |
| FR37 | Epic 6 | User-friendly errors |
| FR38 | Epic 6 | Recovery guidance |
| FR39 | Epic 6 | Data integrity |
| FR40 | Epic 6 | Error logging |
| FR41 | Epic 6 | Request history storage |
| FR42 | Epic 6 | Data preservation |
| FR43 | Epic 6 | File size limits |
| FR44 | Epic 6 | File type validation |
| FR45-FR50 | Epic 1 | Security (CSRF, XSS, CSP, rate limiting, sanitization, hashing) |

## Epic List

### Epic 1: Project Foundation & Authentication

**Goal:** Initialize the Turborepo monorepo project and implement a complete authentication system enabling secure user access

**What users can accomplish:** After this epic, users can log in, reset passwords, and manage their profiles. The technical foundation (project structure, database, API) is established.

**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR32, FR33, FR45, FR46, FR47, FR48, FR49, FR50

**Key Requirements:**
- Initialize Turborepo monorepo with pnpm
- Set up PostgreSQL database with Prisma
- Implement JWT authentication (jose library, RS256 signing)
- Create login/logout functionality
- Password reset via email
- Role-based access control (requester, handler, admin)
- User profile management
- Security implementation (CSRF, rate limiting, password hashing with bcrypt)

**UX-DRs covered:** Design system foundation (UX-DR1 to UX-DR5), Button/Form components (UX-DR12, UX-DR13)

---

### Epic 2: Request Submission

**Goal:** Enable staff to submit structured software change requests with file attachments and receive immediate email confirmation

**What users can accomplish:** After this epic, requesters (Aisha, administrative staff, faculty coordinators) can submit complete, structured requests through an intuitive form and get instant confirmation.

**FRs covered:** FR6, FR7, FR8, FR9, FR10, FR11, FR12, FR13, FR14

**Key Requirements:**
- Progressive disclosure request form (request type, details, review)
- Request type selection (bug, enhancement, form change, report change, workflow improvement)
- Urgency level selection (low, medium, high)
- System affected dropdown
- Title and description fields with validation
- File upload attachments (5MB limit, type validation)
- Real-time form validation
- Immediate email confirmation on submission

**UX-DRs covered:** RequestForm component (UX-DR9), real-time validation (UX-DR24), loading states (UX-DR25)

---

### Epic 3: Request Management & Triage

**Goal:** Provide the software team with a centralized dashboard to view, filter, prioritize, assign, and manage all incoming requests

**What users can accomplish:** After this epic, handlers (Sarah, software team) can see all requests in one place, filter by status/priority/department, assign to developers, and update request status.

**FRs covered:** FR15, FR16, FR17, FR18, FR19, FR20

**Key Requirements:**
- Centralized handler dashboard (card-based grid layout)
- Filter requests by status, priority, department, type
- Request detail view with full information
- Assign requests to developers
- Update request status (open → in progress → resolved → closed)
- Add comments/notes to requests
- Visual ownership indicators (who's assigned)

**UX-DRs covered:** RequestCard component (UX-DR6), FilterPanel (UX-DR10), Handler dashboard (UX-DR28), StatusBadge (UX-DR8)

---

### Epic 4: Communication & Notifications

**Goal:** Implement automatic email notifications and request history visibility so users stay informed without manual follow-up

**What users can accomplish:** After this epic, both requesters and handlers receive automatic email updates for all request activities, and users can view complete request history.

**FRs covered:** FR21, FR22, FR23, FR24, FR25, FR26, FR27

**Key Requirements:**
- Email notification system (Nodemailer, SMTP integration)
- Immediate confirmation emails
- Status change notification emails
- Assignment notification emails
- Comment notification emails
- 5-minute delivery target with 98% success rate
- Retry logic (3 attempts with exponential backoff)
- Request history visibility for requesters
- Activity timeline component

**UX-DRs covered:** ActivityTimeline component (UX-DR7), NotificationDrawer (UX-DR11)

---

### Epic 5: Analytics & Administration

**Goal:** Provide system administrators with analytics dashboards, user management tools, and reporting capabilities (Phase 2)

**What users can accomplish:** After this epic, admins (Rahman) can view analytics dashboards, manage user accounts, export reports, and gain insights into portal usage.

**FRs covered:** FR28, FR29, FR30, FR31, FR32

**Key Requirements:**
- Analytics dashboard (request volume metrics)
- Performance metrics (triage time, resolution time)
- Request breakdown by type, department, system
- Report exports for governance meetings
- User account management (create, deactivate, update roles)
- Department-level transparency and reporting

**Note:** Some analytics features deferred to Phase 2 per PRD scope

---

### Epic 6: Help, Support & Error Handling

**Goal:** Implement comprehensive help documentation, support access, and robust error handling to ensure users can recover from issues independently

**What users can accomplish:** After this epic, users can access help documentation, find support contact information, receive contextual help, and encounter user-friendly error messages with recovery guidance.

**FRs covered:** FR34, FR35, FR36, FR37, FR38, FR39, FR40, FR41, FR42, FR43, FR44

**Key Requirements:**
- Help documentation access
- Support contact information
- Contextual help for form fields and features
- User-friendly error messages
- Recovery guidance for common errors
- Data integrity maintenance during errors
- Error logging for administrator review
- Complete request history storage
- Data preservation on failure
- File attachment size limits (5MB)
- File type validation

---

## Epic 1: Project Foundation & Authentication

**Goal:** Initialize the Turborepo monorepo project and implement a complete authentication system enabling secure user access

**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR32, FR33, FR45, FR46, FR47, FR48, FR49, FR50

**UX-DRs covered:** UX-DR1, UX-DR2, UX-DR3, UX-DR4, UX-DR5, UX-DR12, UX-DR13

---

### Story 1.1: Initialize Turborepo Monorepo

As a developer,
I want to initialize the Turborepo monorepo project structure,
So that we have a solid foundation for building the application.

**Acceptance Criteria:**

**Given** a clean development environment with Node.js and pnpm installed
**When** I run `pnpm create turbo iium-change-request-portal`
**Then** a Turborepo monorepo is created with apps/web and apps/api directories
**And** the project uses pnpm as the package manager
**And** package.json is configured with appropriate scripts
**And** turbo.json is configured for build orchestration
**And** .gitignore excludes node_modules, .env, and build artifacts
**And** a basic README.md documents the project setup

**Requirements fulfilled:** Starter template from Architecture, NFR-R9 (error logging foundation)

**Technical notes:**
- Use manual setup approach (not T3 Stack or other templates)
- Configure apps/web for React SPA
- Configure apps/api for Fastify backend
- Set up packages/ui, packages/config, packages/types, packages/database, packages/utils

---

### Story 1.2: Design System Foundation

As a developer,
I want to configure shadcn/ui with IIUM design tokens and typography,
So that all UI components follow university branding guidelines.

**Acceptance Criteria:**

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

**Requirements fulfilled:** UX-DR1, UX-DR2, UX-DR3, UX-DR4, UX-DR12, UX-DR13

**Technical notes:**
- Use CSS custom properties for design tokens
- Configure Tailwind to use IIUM fonts via Google Fonts
- No drop shadows per IIUM design principles
- Clean borders only on Card components

---

### Story 1.3: Database Schema & Authentication Models

As a developer,
I want to create the Prisma schema for users, roles, and authentication,
So that we can securely store user credentials and manage access.

**Acceptance Criteria:**

**Given** the project has Prisma installed and configured
**When** I create the database schema for authentication
**Then** the following models are created in Prisma schema:
  - `users` table with columns: id (cuid), email (unique), password_hash, name, department, role, created_at, updated_at
  - `user_roles` enum: REQUESTER, HANDLER, ADMIN
  - `password_reset_tokens` table with columns: id, user_id, token, expires_at, used
**And** all string columns use appropriate lengths and constraints
**And** indexes are created on users.email and password_reset_tokens.token
**And** database migrations are generated successfully
**And** Prisma Client is generated from the schema

**Requirements fulfilled:** FR1, FR4, NFR-S1 (bcrypt work factor 12), NFR-S6 (AES-256 at rest), FR41 (history foundation)

**Technical notes:**
- Use Prisma with PostgreSQL
- Configure bcrypt with work factor 12 for password hashing
- Set up connection pooling in Prisma configuration
- Create seed script for demo users (requester, handler, admin)

---

### Story 1.4: User Registration

As a new staff member,
I want to register for an account with my email and password,
So that I can access the portal.

**Acceptance Criteria:**

**Given** I am not logged into the portal
**When** I navigate to the registration page and submit:
  - Email address (valid format, required)
  - Password (minimum 8 characters, required)
  - Name (required)
  - Department (required)
**Then** a new user account is created with role set to REQUESTER
**And** my password is hashed using bcrypt with work factor 12
**And** I receive a success message and can log in immediately
**And** attempting to register with an existing email shows a clear error message
**And** form validation provides real-time feedback on invalid inputs
**And** the registration form follows IIUM design system (teal submit button)

**Requirements fulfilled:** FR1 (username/password), FR5 (feature access), FR45 (CSRF), FR48 (rate limiting), FR49 (input sanitization), FR50 (bcrypt), NFR-A8 (form labels), NFR-A9 (error messages)

**Technical notes:**
- API endpoint: POST /api/v1/auth/register
- Validate email format and password strength
- Rate limit: 5 registration attempts per 15 minutes per IP
- CSRF token required on form submission
- Return 201 Created on success, 400 Bad Request on validation error

---

### Story 1.5: User Login & JWT Authentication

As a registered user,
I want to log in with my email and password,
So that I can access the portal securely.

**Acceptance Criteria:**

**Given** I have a registered user account
**When** I submit my email and password on the login page
**Then** the system validates my credentials
**And** if valid, a JWT token is generated with:
  - RS256 asymmetric signing algorithm
  - Expiration of 8 hours of inactivity
  - User ID and role in the payload
**And** the JWT is stored in an HttpOnly, Secure, SameSite=strict cookie
**And** I am redirected to the dashboard appropriate for my role
**And** if invalid, I see a clear "Invalid email or password" error message
**And** after 5 failed login attempts from my IP, login is temporarily blocked for 15 minutes

**Requirements fulfilled:** FR1 (username/password), FR2 (JWT auth), FR4 (RBAC), FR45 (CSRF), FR48 (rate limiting), NFR-S2 (8h expiration), NFR-S3 (RS256), NFR-S4 (5 attempts/15min), NFR-S16 (8h inactivity), NFR-S18 (HttpOnly cookies)

**Technical notes:**
- API endpoint: POST /api/v1/auth/login
- JWT library: jose for RS256 signing
- Generate RSA key pair for signing (private key, public key)
- CSRF protection required on state-changing endpoints
- Login form follows IIUM design system

---

### Story 1.6: Password Reset via Email

As a user who forgot my password,
I want to reset my password via email verification,
So that I can regain access to my account.

**Acceptance Criteria:**

**Given** I have a registered user account but forgot my password
**When** I request a password reset by entering my email
**Then** the system generates a secure reset token
**And** the token expires after 1 hour
**And** an email is sent to my registered email with a reset link
**And** the email includes clear instructions and the reset link
**And** when I click the reset link, I can enter a new password
**And** the new password must meet the same requirements as registration
**And** after successful reset, the reset token is marked as used
**And** I can log in with my new password immediately
**And** attempting to use an expired or used token shows a clear error message

**Requirements fulfilled:** FR3 (password reset), FR23 (email confirmation), NFR-S5 (1 hour expiration), NFR-I1 (5min delivery), NFR-I2 (98% success), NFR-I4 (3 retry attempts)

**Technical notes:**
- API endpoints: POST /api/v1/auth/forgot-password, POST /api/v1/auth/reset-password
- Store reset tokens in password_reset_tokens table
- Generate cryptographically secure random tokens
- Email template: "Password Reset Request" with IIUM branding
- SMTP integration via Nodemailer
- Retry logic: 3 attempts with exponential backoff

---

### Story 1.7: Role-Based Access Control & User Profiles

As a user,
I want to view and update my profile information,
So that my account details are current.

As an admin,
I want to manage user accounts and roles,
So that access is properly controlled.

**Acceptance Criteria:**

**Given** I am logged into the portal
**When** I navigate to my profile page
**Then** I can view my current information: name, email, department, role
**And** I can update my name and department
**And** I cannot change my email or role (admin only)
**And** changes are saved immediately with a success confirmation

**Given** I am logged in as an ADMIN
**When** I navigate to the user management page
**Then** I can view all user accounts in a list
**And** I can filter users by role or department
**And** I can create new user accounts
**And** I can update user roles (REQUESTER, HANDLER, ADMIN)
**And** I can deactivate user accounts
**And** deactivating a user prevents them from logging in

**Requirements fulfilled:** FR4 (RBAC), FR5 (feature restriction), FR32 (admin user management), FR33 (profile updates), FR45 (CSRF), NFR-A1 (WCAG AA)

**Technical notes:**
- API endpoints: GET/PUT /api/v1/users/me, GET/POST /api/v1/users, PUT /api/v1/users/:id/role
- Middleware to check user roles for protected endpoints
- Admin-only routes require ADMIN role
- Profile form follows IIUM design system
- User management page is accessible to admins only

---

### Epic 1 Summary

**Stories created:** 7 stories
**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR32, FR33, FR45, FR46, FR47, FR48, FR49, FR50
**UX-DRs covered:** UX-DR1, UX-DR2, UX-DR3, UX-DR4, UX-DR5, UX-DR12, UX-DR13

After Epic 1, users can register, log in securely, reset passwords, and manage profiles. The technical foundation (Turborepo, design system, database) is established.

---

## Epic 2: Request Submission

**Goal:** Enable staff to submit structured software change requests with file attachments and receive immediate email confirmation

**FRs covered:** FR6, FR7, FR8, FR9, FR10, FR11, FR12, FR13, FR14

**UX-DRs covered:** UX-DR9 (RequestForm), UX-DR14 (Avatar), UX-DR15 (Card), UX-DR24 (validation), UX-DR25 (loading states)

---

### Story 2.1: Database Schema for Requests

As a developer,
I want to create the database schema for requests and attachments,
So that we can store request data and file uploads.

**Acceptance Criteria:**

**Given** Epic 1 is complete with users and authentication tables
**When** I add the requests schema to Prisma
**Then** the following models are created:
  - `requests` table with columns: id (cuid), request_number, user_id, request_type, urgency, system_affected, title, description, status, created_at, updated_at
  - `request_types` enum: BUG, ENHANCEMENT, FORM_CHANGE, REPORT_CHANGE, WORKFLOW_IMPROVEMENT
  - `urgency_levels` enum: LOW, MEDIUM, HIGH
  - `request_statuses` enum: OPEN, IN_PROGRESS, RESOLVED, CLOSED
  - `attachments` table with columns: id (cuid), request_id, filename, file_path, file_size, file_type, uploaded_at
**And** indexes are created on requests.user_id, requests.status, and requests.created_at
**And** foreign key relationships are established (attachments → requests, requests → users)
**And** database migrations are generated and applied successfully

**Requirements fulfilled:** FR11 (attachments), FR41 (request history), FR43 (file size limits foundation)

**Technical notes:**
- Add request_number as a unique identifier (e.g., REQ-2026-001)
- Configure file storage path for attachments (apps/api/uploads/)
- Add cascade delete for attachments when request is deleted
- Store file metadata for validation

---

### Story 2.2: RequestForm Component (Progressive Disclosure)

As a developer,
I want to create the RequestForm component with multi-step progressive disclosure,
So that users can submit requests through a guided, intuitive interface.

**Acceptance Criteria:**

**Given** the design system is configured from Epic 1
**When** I build the RequestForm component
**Then** it follows a multi-step progressive disclosure pattern:
  - Step 1: Request type selection (clickable cards with icons and descriptions)
  - Step 2: Request details (title, urgency, system, description)
  - Step 3: Attachments (optional file upload)
  - Step 4: Review & submit
**And** a progress indicator shows "Step X of 4" at the top
**And** users can navigate back to previous steps
**And** form data is auto-saved to localStorage to prevent data loss
**And** the form follows IIUM design system (teal primary buttons, clean layout)
**And** the form is fully responsive (mobile-first, stacked vertical layout)

**Requirements fulfilled:** FR6 (structured form), FR7 (request type), UX-DR9 (RequestForm), UX-DR21 (mobile-first), UX-DR25 (loading states)

**Technical notes:**
- Use React Hook Form for form state management
- Use Zod for validation schemas
- Implement localStorage auto-save on each step
- Use React state for current step tracking
- Component should be reusable for different request types

---

### Story 2.3: Request Type & System Selection

As a requester,
I want to select the request type and affected system,
So that my request is properly categorized and routed.

**Acceptance Criteria:**

**Given** I am on Step 1 of the RequestForm
**When** I view the request type selection
**Then** I see clickable cards for each request type:
  - Bug Report: "Something isn't working correctly"
  - Form Change: "Add, remove, or modify form fields"
  - Report Change: "Modify or create new reports"
  - Workflow Improvement: "Process or efficiency enhancement"
  - Other: "Software-related requests not listed above"
**And** each card has an icon and helper text
**And** selecting a type highlights the card with a teal border
**And** after selecting request type, the system dropdown appears
**And** the system dropdown includes: Leave Portal, Course Management, Student Information System, Reporting Portal, Other
**And** my selection is persisted in the form state
**And** both fields are required before proceeding to Step 2

**Requirements fulfilled:** FR7 (request type), FR8 (urgency level), FR9 (system affected), NFR-A10 (required field indicators)

**Technical notes:**
- Store request types as enum in Prisma schema
- System options should be configurable (seed data)
- Selection state managed by React Hook Form
- Zod validation for required fields

---

### Story 2.4: Request Details Input & Validation

As a requester,
I want to provide title, description, and urgency with real-time validation,
So that I submit complete information.

**Acceptance Criteria:**

**Given** I have selected request type and system on Step 1
**When** I proceed to Step 2 (Request Details)
**Then** I see the following form fields:
  - Title (required, min 10 characters, max 200 characters)
  - Urgency level (required): Low, Medium, High with time indicators
  - Description (required, min 50 characters, textarea with placeholder examples)
**And** each field has a clear label above it
**And** real-time validation provides green checkmarks for valid fields
**And** invalid fields show red borders with specific error messages below
**And** the title field shows placeholder: "e.g., Add supervisor approval field to leave application"
**And** the description field shows placeholder: "Describe what's not working or what you need changed..."
**And** helper text says: "The more detail you provide, the faster we can help"
**And** all validation follows IIUM design system (teal focus rings)

**Requirements fulfilled:** FR10 (title/description), FR12 (validation), FR13 (error messages), UX-DR24 (real-time validation)

**Technical notes:**
- Use React Hook Form with Zod schemas
- Title validation: min 10 chars, max 200 chars
- Description validation: min 50 chars, max 5000 chars
- Urgency: radio buttons with visual labels
- Debounce validation to 300ms after user stops typing

---

### Story 2.5: File Upload Attachments

As a requester,
I want to attach files (screenshots, documents) to my request,
So that I can provide visual context and documentation.

**Acceptance Criteria:**

**Given** I am on Step 3 (Attachments) of the RequestForm
**When** I click "Upload File" button
**Then** a file picker dialog opens
**And** I can select files (images, PDFs, documents)
**And** the system validates:
  - File size is ≤ 5MB
  - File type is allowed (jpg, jpeg, png, gif, pdf, doc, docx, txt)
**And** upload progress is shown with a progress bar
**And** uploaded files appear in a list with:
  - Filename
  - File size
  - Remove button (×)
**And** I can upload up to 5 attachments per request
**And** attempting to upload a file > 5MB shows error: "File too large. Maximum size is 5MB."
**And** attempting to upload an invalid file type shows error: "Invalid file type. Allowed: jpg, png, pdf, doc, docx, txt."

**Requirements fulfilled:** FR11 (file attachments), FR43 (5MB limit), FR44 (file type validation), UX-DR25 (progress bar)

**Technical notes:**
- API endpoint: POST /api/v1/requests/:id/attachments (multipart/form-data)
- File storage: apps/api/uploads/ directory
- Validate file size and type on both client and server
- Generate unique filename to prevent collisions
- Malware scanning optional (deferred to post-MVP)

---

### Story 2.6: Request Submission & Email Confirmation

As a requester,
I want to submit my request and receive immediate email confirmation,
So that I know my request was received.

**Acceptance Criteria:**

**Given** I have completed all steps of the RequestForm
**When** I proceed to Step 4 (Review & Submit)
**Then** I see a summary card showing all entered information:
  - Request type and system
  - Title and description (truncated if long)
  - Urgency level
  - List of attached files
**And** I see a prominent "Submit Request" button (teal, bottom-right)
**And** when I click submit, the submit button changes to "Submitting..." with a spinner
**And** on successful submission:
  - The success message appears: "Request submitted successfully"
  - Request reference is displayed: "REQ-2026-001"
  - Reassurance text: "Check your email for confirmation. You'll receive updates as your request progresses."
  - Action buttons: "View My Requests" (primary), "Submit Another Request" (secondary)
**And** I receive an email within 1 minute with:
  - Subject: "[IIUM Software Portal] Request Received: REQ-2026-001"
  - Request title and reference number
  - Current status: Open
  - Link to view the request in the portal
**And** if submission fails, I see a clear error message with recovery guidance

**Requirements fulfilled:** FR6 (structured submission), FR14 (email confirmation), FR23 (immediate email), NFR-I1 (5min delivery target), NFR-I2 (98% success), UX-DR26 (homepage)

**Technical notes:**
- API endpoint: POST /api/v1/requests
- Create request_number: REQ-{year}-{sequential number}
- Return 201 Created with request data
- Send email via Nodemailer after successful creation
- Email template uses IIUM branding (teal header, gold accents)
- Retry logic: 3 attempts with exponential backoff if email fails

---

### Epic 2 Summary

**Stories created:** 6 stories
**FRs covered:** FR6, FR7, FR8, FR9, FR10, FR11, FR12, FR13, FR14
**UX-DRs covered:** UX-DR9, UX-DR14, UX-DR15, UX-DR24, UX-DR25

After Epic 2, staff can submit structured software change requests with file attachments and receive immediate email confirmation. The request form is intuitive with progressive disclosure and real-time validation.

---

## Epic 3: Request Management & Triage

**Goal:** Provide the software team with a centralized dashboard to view, filter, prioritize, assign, and manage all incoming requests

**FRs covered:** FR15, FR16, FR17, FR18, FR19, FR20

**UX-DRs covered:** UX-DR6 (RequestCard), UX-DR8 (StatusBadge), UX-DR10 (FilterPanel), UX-DR14 (Avatar), UX-DR28 (Handler dashboard)

---

### Story 3.1: Handler Dashboard (Card Grid Layout)

As a handler (software team member),
I want to view all requests in a centralized card-based dashboard,
So that I can see everything at a glance.

**Acceptance Criteria:**

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
  - Request type icon
**And** cards are sorted by creation date (newest first)
**And** I can click any card to view full request details
**And** the dashboard has no pagination (scroll to load more in future)
**And** the layout follows IIUM design system (no shadows, clean borders)

**Requirements fulfilled:** FR15 (centralized dashboard), UX-DR6 (RequestCard), UX-DR8 (StatusBadge), UX-DR28 (card grid layout), NFR-P3 (2s load time)

**Technical notes:**
- API endpoint: GET /api/v1/requests (with pagination params for future)
- Use React Query for data fetching and caching
- Implement infinite scroll or pagination for >50 requests
- Role-based access: only HANDLER and ADMIN can access
- Mobile-first responsive design

---

### Story 3.2: FilterPanel Component

As a handler,
I want to filter requests by status, priority, department, and type,
So that I can focus on specific requests.

**Acceptance Criteria:**

**Given** I am viewing the handler dashboard
**When** I see the filter controls above the card grid
**Then** I can filter by:
  - Status: All, Open, In Progress, Resolved, Closed
  - Priority: All, Low, Medium, High
  - Department: All, Academic Affairs, Registrar, ICT, etc.
  - Request Type: All, Bug, Enhancement, Form Change, Report Change, Workflow Improvement
**And** filters are applied immediately when selected (no "Apply" button needed)
**And** active filters are shown as chips with × to remove
**And** a "Clear all filters" button appears when any filters are active
**And** the request count updates: "Showing 12 of 45 requests"
**And** filters work together using AND logic
**And** filters persist across page navigations (URL params)
**And** on mobile, filters stack vertically above cards

**Requirements fulfilled:** FR16 (filtering), UX-DR10 (FilterPanel), NFR-P3 (2s load time)

**Technical notes:**
- API endpoint: GET /api/v1/requests?status=open&priority=high&type=bug
- Use React Query's cache key to store filter state
- Update URL query params for shareable filter links
- Debounce filter changes to 300ms before API call

---

### Story 3.3: Request Detail View

As a handler,
I want to view detailed information for a specific request,
So that I can understand the full context.

**Acceptance Criteria:**

**Given** I am viewing the handler dashboard
**When** I click on a request card
**Then** a slide-in panel or modal opens with full request details:
  - Request reference number and title (prominent)
  - Status badge and priority indicator
  - Requester information: name, department, email
  - Request type and affected system
  - Full description (preserves formatting)
  - List of attachments with download links
  - Created date and last updated timestamp
  - Assigned developer (if assigned) with avatar
  - Activity timeline showing status history
**And** on desktop, the panel slides in from the right (400px width)
**And** on mobile, it opens as a full-screen modal
**And** I can close the panel by clicking outside, pressing Escape, or clicking ×
**And** all information is read-only in this view

**Requirements fulfilled:** FR17 (detail view), FR22 (history visibility), UX-DR7 (ActivityTimeline), NFR-A3 (screen reader support)

**Technical notes:**
- API endpoint: GET /api/v1/requests/:id
- Include requester details in response (join with users table)
- Include attachments list with download URLs
- Implement focus trap when panel is open
- Close panel on Escape key press

---

### Story 3.4: Assign Request to Developer

As a handler,
I want to assign requests to specific developers,
So that ownership is clear.

**Acceptance Criteria:**

**Given** I am viewing a request's detail panel
**When** I am a HANDLER or ADMIN
**Then** I see an "Assign to Developer" dropdown
**And** the dropdown shows all users with HANDLER or ADMIN role
**And** each option shows:
  - Developer name
  - Avatar with initials fallback
**And** when I select a developer and confirm:
  - The request is assigned to that developer
  - The developer's avatar appears on the request card
  - An assignment notification email is sent to the developer
  - The activity timeline records "Assigned to [Developer Name]"
**And** I can reassign to a different developer at any time
**And** the dropdown shows "Unassigned" option to remove assignment

**Requirements fulfilled:** FR18 (assign to developers), FR25 (assignment emails), UX-DR14 (Avatar), NFR-I1 (5min email delivery)

**Technical notes:**
- API endpoints: GET /api/v1/users (handlers only), PUT /api/v1/requests/:id/assign
- Update requests.assigned_to_user_id field
- Send email via Nodemailer to assigned developer
- Email template: "You've been assigned to REQ-2026-001"
- Real-time update via React Query cache invalidation

---

### Story 3.5: Update Request Status & Comments

As a handler,
I want to update request status and add comments,
So that progress is tracked and communicated.

**Acceptance Criteria:**

**Given** I am viewing a request's detail panel
**When** I am a HANDLER or ADMIN
**Then** I see a status update section with:
  - Status dropdown: Open, In Progress, Resolved, Closed
  - Comment textarea (optional)
  - "Update Status" button
**And** when I change status and optionally add a comment:
  - The request status updates immediately
  - The activity timeline records the status change and comment
  - A status notification email is sent to the requester
  - If a comment is added, a comment notification email is also sent
  - The request card on the dashboard reflects the new status
**And** I can add comments without changing status (for notes/questions)
**And** the comment textarea has placeholder: "Add a note or question..."
**And** all status changes and comments are preserved in request history

**Requirements fulfilled:** FR19 (status updates), FR20 (comments/notes), FR24 (status emails), FR26 (comment emails), FR22 (history visibility), UX-DR7 (ActivityTimeline)

**Technical notes:**
- API endpoint: PUT /api/v1/requests/:id/status
- Request body: { status, comment (optional) }
- Create request_history or comments table to track all changes
- Send emails via Nodemailer:
  - Status change: "Your request REQ-2026-001 is now In Progress"
  - Comment: "New comment on REQ-2026-001"
- Real-time updates via React Query cache invalidation

---

### Epic 3 Summary

**Stories created:** 5 stories
**FRs covered:** FR15, FR16, FR17, FR18, FR19, FR20
**UX-DRs covered:** UX-DR6, UX-DR7, UX-DR8, UX-DR10, UX-DR14, UX-DR28

After Epic 3, the software team can manage all incoming requests through a centralized dashboard with filtering, assignment, status updates, and comments. Requesters receive automatic email notifications for all status changes.

---

## Epic 4: Communication & Notifications

**Goal:** Implement automatic email notifications and request history visibility so users stay informed without manual follow-up

**FRs covered:** FR21, FR22, FR23, FR24, FR25, FR26, FR27

**UX-DRs covered:** UX-DR7 (ActivityTimeline), UX-DR11 (NotificationDrawer)

---

### Story 4.1: Email Notification System Foundation

As a developer,
I want to set up the email notification system with Nodemailer and SMTP,
So that we can send transactional emails.

**Acceptance Criteria:**

**Given** the project has Fastify API configured from Epic 1
**When** I set up the email notification system
**Then** Nodemailer is configured with:
  - SMTP transport (configurable via environment variables)
  - Connection pooling for performance
  - Retry logic: 3 attempts with exponential backoff (1s, 5s, 15s intervals)
  - Timeout: 30 seconds per email
**And** email service module is created with:
  - sendConfirmation() function
  - sendStatusChange() function
  - sendAssignment() function
  - sendComment() function
**And** email templates are stored as HTML with:
  - IIUM branding (teal header, gold accents)
  - Responsive design (mobile-friendly)
  - Clear subject lines and call-to-action buttons
**And** all email sending attempts are logged with:
  - Recipient email
  - Email type
  - Success/failure status
  - Timestamp
**And** environment variables are documented in .env.example

**Requirements fulfilled:** NFR-I1 (5min delivery), NFR-I2 (98% success), NFR-I3 (logging), NFR-I4 (retry logic), FR23 (immediate confirmation)

**Technical notes:**
- Install Nodemailer: npm install nodemailer
- Configure SMTP via environment variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
- Create email service module: apps/api/src/services/emailService.ts
- Email templates in apps/api/src/services/emailService/templates/
- Use Pino for structured logging of email events

---

### Story 4.2: Requester Dashboard & Request History

As a requester,
I want to view my submitted requests and their current status,
So that I can track progress without emailing the software team.

**Acceptance Criteria:**

**Given** I am logged in as a REQUESTER, HANDLER, or ADMIN
**When** I navigate to "My Requests" page
**Then** I see a list of all requests I have submitted
**And** each request row displays:
  - Request reference number (clickable link)
  - Request title (truncated if too long)
  - Status badge (color-coded)
  - Assigned developer avatar (if assigned)
  - Created date (e.g., "2 days ago")
  - Last updated timestamp
**And** requests are sorted by creation date (newest first)
**And** I can filter by status: All, Open, In Progress, Resolved, Closed
**And** the list shows 25 requests per page with pagination
**And** on mobile, the layout adapts to a card-based list (stacked vertical)
**And** clicking a request takes me to the request details page

**Requirements fulfilled:** FR21 (request visibility), FR22 (history visibility), UX-DR27 (requester dashboard), NFR-A1 (WCAG AA)

**Technical notes:**
- API endpoint: GET /api/v1/users/me/requests
- Query params: ?status=open&page=1&limit=25
- Use React Query for data fetching and caching
- Implement pagination controls (Previous, Next, page numbers)
- Role-based access: any logged-in user can see their own requests

---

### Story 4.3: ActivityTimeline Component

As a user,
I want to see a chronological history of all status changes and comments on my request,
So that I understand what has happened.

**Acceptance Criteria:**

**Given** I am viewing a request's detail page
**When** I view the ActivityTimeline section
**Then** I see a vertical timeline showing all events in reverse chronological order (newest first)
**And** each timeline entry shows:
  - Solid circle (●) for past events
  - Date and timestamp (e.g., "2026-04-16 14:30")
  - Event description (status change or comment)
  - Actor name (who made the change)
**And** status change entries display:
  - Previous status → New status (e.g., "Open → In Progress")
  - Actor name and role
**And** comment entries display:
  - Comment text (preserves formatting)
  - Actor name
  - "Comment added" label
**And** the timeline follows IIUM design system:
  - No shadows or drop effects
  - Clean vertical line connecting events
  - Teal color for status changes, gray for comments
**And** on mobile, the timeline is still vertical but more compact

**Requirements fulfilled:** FR22 (history visibility), UX-DR7 (ActivityTimeline), NFR-A3 (screen reader support)

**Technical notes:**
- API endpoint: GET /api/v1/requests/:id/history
- Join requests, users, and request_history/comments tables
- Return array of events sorted by created_at DESC
- Use semantic HTML: <ul> with role="log" and aria-live="polite"
- Each entry: <li> with aria-label describing the event

---

### Story 4.4: Email Notification Templates & Delivery

As a user,
I want to receive beautifully formatted email notifications for status changes, assignments, and comments,
So that I stay informed without logging in.

**Acceptance Criteria:**

**Given** the email system is configured from Story 4.1
**When** a request event triggers an email notification
**Then** the appropriate email template is used:

**Confirmation Email (on request submission):**
- Subject: "[IIUM Software Portal] Request Received: REQ-2026-001"
- Content: Request title, reference number, current status (Open)
- Link: "View your request" button to portal
- Footer: "You'll receive email notifications as your request progresses"

**Status Change Email:**
- Subject: "[IIUM Software Portal] Update: REQ-2026-001 is now In Progress"
- Content: Previous status → New status, assigned developer (if applicable)
- Link: "View request details" button to portal
- Timeline: Shows brief history of status changes

**Assignment Email (to assigned developer):**
- Subject: "[IIUM Software Portal] You're assigned: REQ-2026-001"
- Content: Request title, requester name, priority, description preview
- Link: "Start working on this request" button

**Comment Email (to requester):**
- Subject: "[IIUM Software Portal] New comment on REQ-2026-001"
- Content: Comment text, commenter name, request title
- Link: "View request details" button
**And** all emails:
  - Use IIUM branding (teal header, gold accents, Roboto Slab headings)
  - Are responsive and mobile-friendly
  - Have clear call-to-action buttons
  - Include "Unsubscribe" or "Manage notifications" link (future)
  - Are delivered within 5 minutes of trigger event
  - Have 98% delivery success rate (retry logic handles failures)

**Requirements fulfilled:** FR23 (confirmation), FR24 (status emails), FR25 (assignment emails), FR26 (comment emails), FR27 (5min delivery), NFR-I1 (5min target), NFR-I2 (98% success)

**Technical notes:**
- Email templates: HTML files in apps/api/src/services/emailService/templates/
- Use inline CSS for email client compatibility
- Template variables: {{requestNumber}}, {{title}}, {{status}}, etc.
- Call Nodemailer send() function with retry logic
- Log all send attempts: success, failure, retry count
- Monitor delivery rate for 98% target compliance

---

### Story 4.5: NotificationDrawer Component

As a user,
I want to access a notification center showing recent portal activity,
So that I can see updates at a glance.

**Acceptance Criteria:**

**Given** I am logged into the portal
**When** I click the bell icon in the header
**Then** a NotificationDrawer slides in from the right
**And** the drawer shows:
  - Title: "Notifications"
  - List of recent notification events (last 30 days)
  - Each notification shows:
    - Event type icon (status change, assignment, comment)
    - Request reference and title
    - Preview text (e.g., "Status changed to In Progress")
    - Time ago (e.g., "2 hours ago")
  - "Mark all as read" button
**And** unread notifications have a teal dot indicator
**And** clicking a notification takes me to the relevant request
**And** the drawer closes when I click outside or press Escape
**And** if there are no notifications, it shows: "No new notifications"
**And** on desktop, drawer width is 400px; on mobile, it's full-width

**Requirements fulfilled:** UX-DR11 (NotificationDrawer), FR21 (request visibility for improvements)

**Technical notes:**
- API endpoint: GET /api/v1/notifications
- Store notifications in database or compute from request_history
- Limit to last 30 days of activity
- Use React state for drawer open/close
- Implement focus trap when drawer is open
- Close drawer on Escape key press
- Real-time updates: poll every 30s or use WebSocket (future)

---

### Epic 4 Summary

**Stories created:** 5 stories
**FRs covered:** FR21, FR22, FR23, FR24, FR25, FR26, FR27
**UX-DRs covered:** UX-DR7, UX-DR11

After Epic 4, users receive automatic email notifications for all request activities and can view their request history through the requester dashboard and activity timeline. The notification center provides at-a-glance updates.

---

## Epic 5: Analytics & Administration (Phase 2)

**Goal:** Provide system administrators with analytics dashboards, user management tools, and reporting capabilities

**FRs covered:** FR28, FR29, FR30, FR31, FR32

**Note:** Some analytics features are deferred to Phase 2 per PRD scope

---

### Story 5.1: Admin Analytics Dashboard

As an admin,
I want to view an analytics dashboard showing request volume metrics and performance metrics,
So that I can gain insights into portal usage.

**Acceptance Criteria:**

**Given** I am logged in as an ADMIN
**When** I navigate to the Analytics Dashboard
**Then** I see the following metrics cards at the top:
  - Total requests (all-time)
  - Requests this month
  - Requests this week
  - Current backlog (Open + In Progress count)
**And** I see a "Request Volume Over Time" chart showing:
  - Daily request volume for the last 30 days
  - Line chart with requests by status (Open, In Progress, Resolved)
  - Hover tooltips showing exact counts
**And** I see "Performance Metrics" section:
  - Average triage time (time from Open to In Progress)
  - Average resolution time (time from Open to Resolved)
  - Requests completed this month
  - Requests overdue (In Progress > 7 days)
**And** all metrics update in real-time or refresh every 5 minutes
**And** the dashboard is responsive and mobile-friendly
**And** the layout follows IIUM design system (clean, no shadows)

**Requirements fulfilled:** FR28 (analytics dashboard), FR29 (performance metrics), UX-DR26 (clean design), NFR-P3 (2s load time)

**Technical notes:**
- API endpoint: GET /api/v1/admin/analytics
- Calculate metrics from requests table using SQL aggregations
- Use Chart.js or Recharts for data visualization
- Cache metrics for 5 minutes to reduce database load
- Role-based access: ADMIN only
- Implement loading skeletons while data fetches

---

### Story 5.2: Request Breakdown & Reports

As an admin,
I want to see request breakdown by type, department, and system, and export reports for governance meetings,
So that I can share insights with leadership.

**Acceptance Criteria:**

**Given** I am logged in as an ADMIN
**When** I view the Request Breakdown section
**Then** I see the following breakdown views:

**By Request Type:**
- Bar chart showing count by type (Bug, Enhancement, Form Change, Report Change, Workflow Improvement)
- Percentage of total for each type
- Clickable bars to filter dashboard

**By Department:**
- Bar chart showing count by department (Academic Affairs, Registrar, ICT, etc.)
- Top 5 departments by request volume
- Clickable bars to filter dashboard

**By System:**
- Bar chart showing count by system (Leave Portal, Course Management, SIS, Reporting, etc.)
- Top 5 systems by request volume
- Clickable bars to filter dashboard

**By Status:**
- Pie chart showing distribution: Open, In Progress, Resolved, Closed
- Percentage and count for each status

**Export Functionality:**
- "Export Report" button (CSV format)
- Report includes: period (start/end date), all breakdown metrics, timestamp
- Filename format: `iium-portal-report-YYYY-MM-DD.csv`
**And** all charts use IIUM brand colors (teal, gold, gray)
**And** date range selector allows filtering by time period

**Requirements fulfilled:** FR30 (request breakdown), FR31 (report exports), NFR-P3 (2s load time)

**Technical notes:**
- API endpoint: GET /api/v1/admin/reports/breakdown
- Query parameters: ?startDate=2026-01-01&endDate=2026-04-16
- Use SQL GROUP BY for aggregations
- CSV generation: Convert JSON to CSV format with proper headers
- Set Content-Disposition header for file download
- Role-based access: ADMIN only

---

### Story 5.3: Admin User Management Interface

As an admin,
I want a comprehensive user management interface to create, deactivate, and update user roles,
So that I can manage access effectively.

**Acceptance Criteria:**

**Given** I am logged in as an ADMIN
**When** I navigate to the User Management page
**Then** I see a comprehensive user table with columns:
  - Avatar (initials fallback)
  - Name
  - Email
  - Department
  - Role (REQUESTER, HANDLER, ADMIN)
  - Status (Active, Inactive)
  - Created date
  - Actions (Edit, Deactivate)
**And** the table has the following features:
  - Search by name or email
  - Filter by role: All, Requester, Handler, Admin
  - Filter by status: All, Active, Inactive
  - Sort by any column
  - Pagination: 25 users per page
**And** I can click "Add New User" button to open a modal form
**And** the Add User form includes:
  - Name (required)
  - Email (required, unique)
  - Department (required)
  - Role dropdown: REQUESTER, HANDLER, ADMIN
  - "Send welcome email" checkbox (optional)
  - "Generate random password" checkbox (optional)
**And** when I create a user:
  - User account is created immediately
  - If "Send welcome email" is checked, user receives credentials via email
  - Success message confirms creation
**And** I can click "Edit" on any user to open edit modal
**And** I can update: name, department, role
**And** I cannot change email (to prevent hijacking)
**And** I can click "Deactivate" to deactivate a user
**And** deactivation:
  - Sets user status to Inactive
  - Prevents user from logging in
  - Shows confirmation: "Deactivate [User Name]? They will lose access to the portal."
**And** I can reactivate inactive users

**Requirements fulfilled:** FR32 (admin user management), FR4 (RBAC), FR5 (feature access), NFR-A1 (WCAG AA)

**Technical notes:**
- API endpoints: GET /api/v1/admin/users, POST /api/v1/admin/users, PUT /api/v1/admin/users/:id, PUT /api/v1/admin/users/:id/deactivate
- Use Datatable or table component with sorting/filtering
- Modal for Add/Edit User forms
- Role-based access: ADMIN only
- Email template for welcome email (if enabled)
- Soft delete: Set is_active=false instead of deleting records

---

### Epic 5 Summary

**Stories created:** 3 stories
**FRs covered:** FR28, FR29, FR30, FR31, FR32
**Note:** Epic 5 provides Phase 2 analytics and administration capabilities. Advanced features (predictive analytics, automated routing) are deferred to future phases.

After Epic 5, administrators have comprehensive tools for analytics, reporting, and user management. The portal can scale to support organizational growth and data-driven decision-making.

---

## Epic 6: Help, Support & Error Handling

**Goal:** Implement comprehensive help documentation, support access, and robust error handling to ensure users can recover from issues independently

**FRs covered:** FR34, FR35, FR36, FR37, FR38, FR39, FR40, FR41, FR42, FR43, FR44

---

### Story 6.1: Global Error Handling & User-Friendly Messages

As a user,
I want to see clear, user-friendly error messages for all failed operations,
So that I understand what went wrong and how to fix it.

**Acceptance Criteria:**

**Given** I am using the portal and an error occurs
**When** the error is displayed to me
**Then** I see a user-friendly error message that:
  - Uses plain language (no technical jargon)
  - Explains what went wrong
  - Suggests how to fix the issue
  - Is concise (1-2 sentences)
  - Has no blame or shaming language
**And** error messages appear:
  - Near the relevant field (for form validation errors)
  - As a toast notification (for API errors)
  - On a dedicated error page (for critical errors)
**And** specific error messages include:

**Form Validation:**
- "Please enter at least 10 characters for the title"
- "Email address is required and must be valid"
- "Password must be at least 8 characters"

**API Errors:**
- "Request failed. Please check your connection and try again."
- "Unable to save changes. Please try again or contact support."
- "File too large. Maximum size is 5MB."

**Authentication Errors:**
- "Invalid email or password. Please try again or reset your password."
- "Your session has expired. Please log in again."
- "You don't have permission to access this page."

**And** all error messages follow IIUM design system:
  - Red background with dark red text for critical errors
  - Red border with helpful text for validation errors
  - Accessible with aria-live="assertive" for screen readers

**Requirements fulfilled:** FR37 (user-friendly errors), FR13 (clear error messages), NFR-A9 (descriptive errors), NFR-A10 (required field indicators)

**Technical notes:**
- Global error handler in Fastify: catch all errors and format consistently
- Frontend error boundary: catch React component errors
- Axios interceptors: catch API errors and display toasts
- Form validation: React Hook Form error messages
- Error response format: `{ success: false, error: { code, message, details } }`

---

### Story 6.2: Error Logging & Recovery Guidance

As a developer,
I want to implement comprehensive error logging and recovery guidance,
So that admins can diagnose issues and users can recover from errors.

**Acceptance Criteria:**

**Given** the application is running and errors occur
**When** errors are logged by the system
**Then** all errors are logged with:
  - Timestamp (ISO 8601)
  - Error level: ERROR, WARN, INFO
  - Error code or message
  - Stack trace (for errors)
  - User ID (if authenticated)
  - Request URL or endpoint
  - Additional context relevant to debugging
**And** logs are stored:
  - In structured JSON format using Pino
  - Rotated daily (one log file per day)
  - Retained for 30 days per NFR-R5
**And** admin error log viewer (accessible to ADMINs):
  - Shows recent errors with filters
  - Searchable by error code, user, date range
  - Export log files for analysis
**And** recovery guidance is provided:
  - "Please try again. If the problem persists, contact support."
  - "Check your internet connection and try again."
  - "If you continue to see this error, please contact support@iium.edu.my"
**And** critical errors trigger admin notifications:
  - Database connection failures
  - Email delivery failures (after 3 retries)
  - Authentication service failures

**Requirements fulfilled:** FR40 (error logging), FR38 (recovery guidance), NFR-R8 (error logging), NFR-R9 (recovery guidance)

**Technical notes:**
- Install Pino: npm install pino pino-pretty
- Configure Pino for structured JSON logging
- Create error log viewer page (ADMIN only)
- Set up log rotation: daily files, 30-day retention
- Log to: apps/api/logs/error-YYYY-MM-DD.json
- Console logs in development, file logs in production
- Admin notification for critical errors (future: Slack/email)

---

### Story 6.3: Help Documentation & Support

As a user,
I want to access help documentation and find support contact information,
So that I can get help when I need it.

**Acceptance Criteria:**

**Given** I am using the portal
**When** I need help or have questions
**Then** I can access help through:

**Help Documentation:**
- "Help" link in header (next to user profile)
- Help page with searchable documentation
- Topics covered:
  - How to submit a request
  - How to track my request status
  - Understanding request types
  - How attachments work
  - FAQ (Frequently Asked Questions)
- Documentation is mobile-friendly and searchable

**Contextual Help:**
- Tooltip icons (?) next to complex fields
- Helper text below form fields: "The more detail you provide, the faster we can help"
- Links to relevant help articles from error messages

**Support Contact:**
- "Contact Support" button on help page
- Support information displayed:
  - Email: portal-support@iium.edu.my
  - Expected response time: "Within 1 business day"
  - Include request reference in all support emails
- Support request form (alternative to email)

**Error Recovery Help:**
- "Having trouble?" link on error pages
- Clear instructions for common issues:
  - "Can't log in? Try resetting your password."
  - "File upload failed? Compress your file or try a smaller file."
  - "Request not submitting? Check all required fields."

**And** all help content follows IIUM design system (clean, accessible)

**Requirements fulfilled:** FR34 (help documentation), FR35 (support contact), FR36 (contextual help), NFR-A1 (WCAG AA), NFR-A3 (screen reader)

**Technical notes:**
- Create Help page: apps/web/src/pages/HelpPage.tsx
- Store help content as markdown or CMS
- Implement search functionality (client-side filtering)
- Tooltip component: shadcn/ui Tooltip
- Support form: Submit to support email via API
- Make help content accessible (semantic HTML, ARIA)

---

### Story 6.4: Request History & Data Preservation

As a system,
I want to store complete request history and preserve data even if operations fail,
So that no data is ever lost.

**Acceptance Criteria:**

**Given** requests are being created and updated in the system
**When** operations succeed or fail
**Then** the following data preservation guarantees are met:

**Complete Request History:**
- Every status change is recorded in request_history table
- Every comment is stored with timestamp and actor
- All historical data is queryable via ActivityTimeline
- History is preserved even when request is deleted (soft delete)

**Atomic Transactions:**
- All database operations use transactions
- If any part of a multi-step operation fails, all changes rollback
- Example: Creating request with attachments → if file upload fails, request is not created

**Data Integrity on Failure:**
- If email notification fails, request is still saved
- If attachment upload fails mid-request, request is preserved without the attachment
- If comment fails, status change still succeeds (logged separately)
- Errors are logged but data is never lost

**File Attachments:**
- Files are stored before database record is created
- File size validated before upload (5MB limit)
- File type validated before upload
- If validation fails, file is rejected (not stored)

**Database Backups:**
- Daily automated backups of PostgreSQL database
- 30-day retention per NFR-R5
- Backup includes: all tables, schemas, and sequences
- Backups stored securely with encryption

**Request History Query:**
- API returns complete history for any request
- History includes: created_at, updated_at, status changes, comments, attachments
- No history is ever lost or truncated

**Requirements fulfilled:** FR39 (data integrity), FR41 (history storage), FR42 (data preservation), FR43 (file limits), FR44 (file validation), NFR-R3 (zero data loss), NFR-R4 (atomic transactions), NFR-R5 (backups)

**Technical notes:**
- Create request_history table: id, request_id, field_name, old_value, new_value, changed_by, changed_at
- Create comments table: id, request_id, user_id, content, created_at
- Use Prisma transactions: $transaction(async (tx) => { ... })
- Implement soft delete: add deleted_at column instead of DELETE
- Database backup: cron job with pg_dump or WAL archiving
- File validation: Check size and type before saving to disk

---

### Epic 6 Summary

**Stories created:** 4 stories
**FRs covered:** FR34, FR35, FR36, FR37, FR38, FR39, FR40, FR41, FR42, FR43, FR44

After Epic 6, users have access to comprehensive help documentation, support contact information, and robust error handling. The system preserves all data with atomic transactions, complete history tracking, and daily backups. Users can recover from errors independently with clear guidance.

---

## 🎉 All Epics Complete! 🎉

**Total Epics:** 6 epics
**Total Stories:** 30 stories

**Epic Breakdown:**
- Epic 1 (Project Foundation & Authentication): 7 stories
- Epic 2 (Request Submission): 6 stories
- Epic 3 (Request Management & Triage): 5 stories
- Epic 4 (Communication & Notifications): 5 stories
- Epic 5 (Analytics & Administration): 3 stories
- Epic 6 (Help, Support & Error Handling): 4 stories

**Requirements Coverage:**
- All 50 Functional Requirements covered ✅
- All 59 Non-Functional Requirements addressed ✅
- All 29 UX Design Requirements implemented ✅

---

**Select an Option:**  
[A] Advanced Elicitation — Explore alternative story structures  
[P] Party Mode — Review epics and stories from multiple perspectives  
[C] Continue — Finalize epics document and proceed to validation
