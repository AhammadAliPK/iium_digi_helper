---
stepsCompleted: ["step-01-init", "step-02-discovery", "step-02b-vision", "step-02c-executive-summary", "step-03-success", "step-04-journeys", "step-05-domain", "step-06-innovation", "step-07-project-type", "step-08-scoping", "step-09-functional", "step-10-nonfunctional", "step-11-polish"]
inputDocuments: ["product-brief-internal-software-change-request-portal.md", "product-brief-internal-software-change-request-portal-distillate.md"]
workflowType: "prd"
documentCounts:
  briefs: 2
  research: 0
  brainstorming: 0
  projectDocs: 0
classification:
  projectType: "web_app"
  domain: "education"
  complexity: "medium"
  projectContext: "greenfield"
---

# Product Requirements Document - Internal Software Change Request Portal

**Author:** Ahammadali
**Date:** 2026-04-16

## Executive Summary

The Internal Software Change Request Portal transforms how IIUM university staff submit and track software-related requests. Today, requests for bug fixes, form changes, report modifications, and small enhancements flow through email, chat, and informal conversations — creating chaos characterized by incomplete information, unclear ownership, tracking impossibility, and wasted time for both requesters and the software team.

This portal provides a centralized web-based platform where staff submit structured software change requests and the software team manages them with clarity and consistency. For staff, the portal means submitting a request once and receiving real-time email status updates — eliminating the need for manual follow-ups. For the software team, it means one place to see all incoming requests, prioritize work based on business need, assign ownership, and track progress consistently.

The product is a focused internal tool for existing university software systems only — not a full ITSM platform. It solves immediate pain with minimal complexity, establishing a foundation for a broader IT service vision over 2-3 years.

**Target Users:**
- **Requesters:** Administrative staff, faculty office staff, department coordinators, operations staff
- **Handlers:** Software development team

### What Makes This Special

**Focused Scope:** Unlike generic ITSM platforms (ServiceNow, Jira Service Management), this portal is purpose-built for one thing: software change requests for existing university systems. No hardware, no infrastructure, no general IT support — just software changes, handled with simplicity and speed.

**University-Native Context:** The portal speaks the language of university operations — forms, reports, workflows, leave applications, course management. It's designed for how university staff actually work, not generic enterprise workflows.

**Email-First User Experience:** The portal captures structure, but email delivers peace of mind. Status updates arrive in the requester's inbox automatically — no need to log in and check. This design acknowledges that email is the comfort zone for communication, while being terrible for tracking.

**Lightweight Adoption:** No complex ITSM frameworks, no SLA matrices, no permission hierarchies. Submit, review, assign, notify. Easy to learn, easy to use, easy to maintain.

**Proven Model:** Similar tools exist in enterprise environments like DBS Bank Singapore, proving the model works. This adapts that approach to university-specific needs.

**Core Insight:** The chaos isn't just about lost requests — it's about the emotional toll of not knowing. Staff hate following up. The software team hates hunting across threads. The portal solves both by making email work *for* them, not against them.

## Project Classification

**Project Type:** Web application (internal portal)
**Domain:** Education/University (edtech adjacent)
**Complexity:** Medium (institutional context without heavy regulation)
**Project Context:** Greenfield (new product, no existing system to extend)

## Success Criteria

### User Success

**Requester Success:**
- Staff member submits a request and receives immediate confirmation via email
- Requester never needs to follow up manually — status updates arrive in inbox automatically
- Requester can check current status at any time without emailing the software team
- Staff experiences relief from not wondering "did anyone see this?"

**Software Team Success:**
- One centralized place to see ALL incoming requests
- Clear ownership on every request — no hunting across email threads
- Ability to prioritize work based on business need, not inbox position
- Complete, structured information upfront — minimal back-and-forth clarification

### Business Success

**Adoption Metrics:**
- **3 months:** 60% of software change requests submitted via portal
- **6 months:** 80% of software change requests submitted via portal
- Measurable reduction in email-based software requests (target: 70% reduction by month 6)

**Effectiveness Metrics:**
- **Response Time:** Initial triage within 48 hours of submission
- **Completion Rate:** 90% of requests moved from "open" to "resolved" within 30 days
- **Drop Rate:** Fewer than 5% of requests abandoned or lost

**User Satisfaction:**
- Requesters report zero manual follow-ups required
- Software team reports reduced time spent managing requests vs. fulfilling them
- Positive feedback from pilot departments on clarity and transparency

### Technical Success

**Reliability:**
- **Uptime:** 99% availability during business hours (Monday-Friday, 8am-6pm)
- **Email Delivery:** 98% of notification emails delivered successfully within 5 minutes
- **Data Integrity:** Zero lost requests — all submissions preserved and recoverable

**Performance:**
- **Portal Load Time:** Under 2 seconds for submission form load
- **Form Submission:** Under 3 seconds from submit to confirmation
- **Dashboard Load:** Under 2 seconds for software team dashboard

**Integration:**
- University SSO authentication works seamlessly
- Email system integration reliable and timely

### Measurable Outcomes

| Metric | 3-Month Target | 6-Month Target | 12-Month Target |
|--------|----------------|----------------|-----------------|
| Portal Adoption Rate | 60% | 80% | 90% |
| Email Request Reduction | 50% | 70% | 85% |
| Average Triage Time | 48hrs | 36hrs | 24hrs |
| Request Drop Rate | <10% | <5% | <2% |
| User Satisfaction (pilot) | 3.5/5 | 4.0/5 | 4.5/5 |

## Product Scope

### MVP - Minimum Viable Product

**Essential for proving the concept:**
- Custom JWT authentication (username/password)
- Structured request submission form
- Request dashboard for software team
- Request categorization, prioritization, and assignment
- Status workflow (open → in progress → resolved → closed)
- Email notifications for status changes
- Request history and status visibility

**MVP Success Definition:** Staff can submit requests and receive email updates without manual follow-up. Software team can see and prioritize all requests in one place.

### Growth Features (Post-MVP)

**Competitive differentiation and expansion:**
- University SSO integration
- Request analytics dashboard
- SLA tracking and reporting
- Requester self-service portal
- Advanced filtering and search
- Request templates for common request types
- Integration with project management tools (Jira, GitHub, etc.)

### Vision (Future)

**Full IT service portal (2-3 years):**
- Infrastructure, software installation, and purchase requests
- Hardware requests and general IT support triage
- Advanced analytics, automated routing, and AI-powered categorization
- Self-service knowledge base and student-facing help desk

## User Journeys

### Journey 1: Aisha — Department Coordinator

**Opening Scene:**  
Aisha is a department coordinator at IIUM. It's 10am on a Tuesday. She's just received three emails from faculty members about issues with the leave application form — one can't submit, one needs a new field for approval chain, and one wants an export feature. She's forwarded these to "IT support" before, but they always seem to get lost. She doesn't know who's working on what, or when anything will be fixed. She's frustrated and dreading the follow-up emails she'll need to send next week.

**Rising Action:**  
Aisha opens the new Internal Software Change Request Portal for the first time. The form is simple — she selects "Form Change" as the request type, marks urgency as "Medium," chooses "Leave Application" as the affected system, and describes each issue clearly. She even attaches screenshots of the error messages. When she clicks submit, she immediately receives an email confirmation: "Your request #REQ-2024-001 has been received. You'll get updates at every step — no need to follow up."

**Climax:**  
Two days later, Aisha's phone buzzes. An email arrives: "Your request #REQ-2024-001 is now In Progress — assigned to Developer: Sarah." She feels a surge of relief — someone saw it. Someone's working on it. She doesn't need to send that awkward follow-up email. Three days later, another email: "Your request #REQ-2024-001 has been Resolved." Aisha logs into the portal to see the details, tests the form, and everything works.

**Resolution:**  
Aisha's new reality is simple. When faculty come to her with software issues, she submits them to the portal and forgets about them. The updates come to her. She's no longer the bad guy chasing IT. She's the problem-solver who gets things done.

**Journey Requirements:** Request submission form, email notifications, status visibility, request history

---

### Journey 2: Sarah — Software Developer

**Opening Scene:**  
Sarah is a software developer at IIUM. It's Monday morning, and her inbox is flooded. Emails from five different departments about various software issues. Some are vague ("the system is broken"), some are duplicates (three people reported the same thing), and she has no idea which ones are urgent. She's spending her morning hunting through email threads trying to figure out what to work on first. She's overwhelmed and worried she's missing the important stuff.

**Rising Action:**  
Sarah opens the Internal Software Change Request Portal dashboard. For the first time, she sees everything in one place. All 23 requests, neatly organized. She can filter by status, priority, department, and request type. She notices three "High" priority requests that came in over the weekend — she never saw those in her email. She clicks on one, reads the complete description with screenshots attached, and immediately understands the issue. She clicks "Assign to Me," changes status to "In Progress," and moves to the next one.

**Climax:**  
As Sarah works through requests, she assigns them to herself or other developers. Each time she updates a status, the system automatically sends an email to the requester. No need to write "I'm working on this" emails. No need to remember to notify people. The portal does it for her. By noon, she's cleared the high-priority queue and has a clear picture of what's coming next. She feels in control for the first time in months.

**Resolution:**  
Sarah's new reality is structured and predictable. She comes in, checks the portal dashboard, prioritizes based on business need not inbox position, and works through requests systematically. The software team can finally see what they're dealing with and plan accordingly. No more chaos, no more lost requests, no more guilt about missing something important.

**Journey Requirements:** Request dashboard, filtering and search, assignment capability, status updates, automatic email notifications

---

### Journey 3: Rahman — System Administrator

**Opening Scene:**  
Rahman is the system administrator for the portal. It's been three months since launch, and adoption is growing. But he's flying blind — he doesn't know which departments are using the portal most, what types of requests are common, or if there are bottlenecks in the workflow. He needs to understand how the system is being used so he can report to leadership and plan improvements.

**Rising Action:**  
Rahman logs into the portal's admin section. He navigates to the Analytics Dashboard. He sees that 72% of requests now come through the portal (up from 45% last month). The Academic Affairs department submits the most requests. Form changes are the most common request type. The average triage time is 36 hours. He can see which developers are handling the most requests and identify a bottleneck — one developer has 15 assigned requests while another has only 3.

**Climax:**  
Rahman uses this data to reassign workload, reducing the bottleneck. He also notices that the "Leave Application" system generates 40% of all requests — he recommends to leadership that this system needs a comprehensive review, not just piecemeal fixes. He exports a report for the monthly IT governance meeting, showing clear metrics on portal performance and adoption.

**Resolution:**  
Rahman can now manage the portal proactively instead of reactively. He has data to support decisions, visibility into usage patterns, and the ability to identify and address issues before they become problems. The portal is no longer a black box — it's a measurable, manageable part of IT operations.

**Journey Requirements:** Admin dashboard, analytics and reporting, request volume metrics, performance tracking, user management

---

### Journey 4: Fatimah — Faculty Office Staff (Error Recovery)

**Opening Scene:**  
Fatimah works in the Faculty Office. She's submitting a request for a report layout change. She fills out the form, uploads the mockup, clicks submit — and gets an error: "Attachment file too large. Maximum size: 5MB." Her mockup is 8MB. She's frustrated — she doesn't know how to resize PDFs, and she doesn't have time for this.

**Rising Action:**  
Instead of giving up and emailing IT (defeating the purpose), Fatimah sees a help link: "Having trouble? Contact support." She clicks it and sees instructions: "Compress your file OR email portal-support@iium.edu.my for help." She quickly compresses the PDF using an online tool, re-uploads, and submits successfully. This time she gets the confirmation email.

**Climax:**  
The next day, Fatimah receives an email: "Your request #REQ-2024-047 is In Progress." She's relieved — the system worked even when she hit a snag. She made it through without emailing IT directly.

**Resolution:**  
Fatimah's experience taught her that the portal can handle hiccups. There's a path forward when things go wrong. She's more confident using the portal next time, knowing there's support if she needs it.

**Journey Requirements:** Error handling and recovery, help documentation, support contact information, clear validation messages

---

### Journey Requirements Summary

**Core Capabilities Revealed by Journeys:**

| Journey | Key Capabilities Required |
|---------|---------------------------|
| Aisha (Requester) | Submission form, email notifications, status visibility, request history |
| Sarah (Developer) | Dashboard, filtering/search, assignment, status updates, auto-notifications |
| Rahman (Admin) | Analytics dashboard, metrics and reporting, user management, workload balancing |
| Fatimah (Recovery) | Error handling, help docs, support contact, clear validation messages |

**Cross-Cutting Requirements:**
- University SSO authentication for all user types
- Role-based access control (requester, handler, admin)
- Email notification system (reliable, timely)
- Request status workflow (open → in progress → resolved → closed)
- Attachment handling with validation and limits

## Web Application Specific Requirements

### Project-Type Overview

The Internal Software Change Request Portal is a Single Page Application (SPA) built with React, providing a responsive web interface for university staff to submit and track software change requests. The application uses custom JWT authentication with username/password, with plans to integrate university SSO in Phase 2.

### Technical Architecture Considerations

**Application Type:**
- **Single Page Application (SPA)** built with React
- Client-side routing via React Router
- State management through React hooks/context
- API communication via RESTful endpoints

**Authentication & Security:**
- **Custom JWT authentication** (MVP)
  - Username/password login
  - JWT tokens with expiration
  - Token refresh mechanism
  - Secure token storage (HttpOnly cookies or localStorage with XSS protection)
- **Planned: University SSO integration** (Phase 2)
  - OAuth 2.0 / SAML integration with IIUM identity provider
- **Security measures:**
  - CSRF protection tokens on all state-changing endpoints
  - XSS prevention (input sanitization, output encoding)
  - Content Security Policy (CSP) headers
  - HSTS (HTTP Strict Transport Security) headers
  - Secure cookie flags (HttpOnly, Secure, SameSite)
  - Rate limiting on login and submission endpoints
  - Input validation and sanitization
  - SQL injection prevention (parameterized queries)
  - Password hashing (bcrypt/argon2)

**Browser Support Matrix:**

| Browser | Minimum Version | Notes |
|---------|----------------|-------|
| Chrome | Last 2 versions | Primary target |
| Edge | Last 2 versions | Primary target |
| Firefox | Last 2 versions | Primary target |
| Safari | Last 2 versions | Desktop + iOS |
| Mobile Safari | iOS 14+ | iPhone/iPad support |
| Chrome Mobile | Android 10+ | Android support |

**No support for:**
- Internet Explorer (any version)
- Legacy browser versions

**Responsive Design Strategy:**
- **Mobile-first CSS** using Tailwind CSS breakpoints
- **Breakpoint targets:**
  - Mobile: < 640px (small phones)
  - Tablet: 640px - 1024px (tablets, small laptops)
  - Desktop: > 1024px (standard desktop)
- **Touch-friendly UI:** Minimum 44x44px tap targets, readable without zoom
- **Mobile-optimized submission form:** Stack fields vertically, larger inputs
- **Desktop dashboard:** Multi-column layout for software team
- **Progressive enhancement:** Core functionality works on all devices

**Performance Targets:**
- **Initial page load:** < 2 seconds (above-the-fold content)
- **Submission form load:** < 2 seconds
- **Dashboard load:** < 2 seconds
- **Form submission:** < 3 seconds (submit → confirmation)
- **Time to Interactive:** < 3 seconds
- **Lighthouse targets:**
  - Performance score: 90+
  - Accessibility score: 90+
  - Best Practices score: 90+

### SEO Strategy

**SEO not required** — This is an internal portal behind authentication. All pages are:
- Disallowed from search engines via robots.txt
- Protected behind authentication (no public access)
- Not indexed by search engines

**Consideration:** If future public-facing pages are added, SEO strategy will be revisited.

### Accessibility Level

**Target compliance:** WCAG 2.1 Level AA

**Key accessibility requirements:**
- Keyboard navigation for all features
- Screen reader compatibility (ARIA labels, semantic HTML)
- Color contrast ratios meeting WCAG AA (4.5:1 for normal text, 3:1 for large text)
- Focus indicators visible on all interactive elements
- Form labels properly associated with inputs
- Error messages accessible and descriptive
- Responsive text sizing (user can zoom up to 200%)
- No keyboard traps
- Skip navigation links for main content
- Alt text for images and icons

**IIUM brand compliance:** Follow IIUM design system accessibility guidelines

### Implementation Considerations

**Frontend Architecture:**
- React components using shadcn/ui for consistent UI
- Tailwind CSS for styling (aligned with IIUM design system colors)
- Form validation with clear error messages
- Optimistic UI updates where appropriate
- Loading states for async operations

**State Management:**
- React Context API for global state (auth, user data)
- Local component state for UI-specific data
- URL-based state where appropriate (filtering, pagination)

**API Integration:**
- RESTful API endpoints
- JWT token in Authorization header
- Error handling with user-friendly messages
- Retry logic for failed requests
- Request timeout handling

**Mobile-Specific Considerations:**
- Touch-optimized interface
- Responsive navigation (hamburger menu on mobile)
- Optimized images and assets
- Reduced motion support (accessibility)
- Viewport meta tag properly configured

**Progressive Enhancement:**
- Core functionality works without JavaScript (form submission fallback)
- Enhanced experience with JavaScript (SPA behavior)
- Graceful degradation for older browsers

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-Solving MVP

The Internal Software Change Request Portal MVP focuses on solving the immediate chaos of email-based software change requests. The goal is to prove that a structured submission process with email notifications can eliminate the pain of lost requests, unclear ownership, and manual follow-ups.

**Resource Requirements:**
- **Team size:** 2-3 developers (React frontend, backend API)
- **Skills needed:** React/TypeScript, Node.js/Python, SQL database, email integration
- **Timeline:** 3-4 months to MVP launch
- **Deployment target:** University infrastructure (on-premises)

**MVP Success Definition:** Staff can submit requests via portal and receive email updates without manual follow-up. Software team can see and prioritize all requests in one place.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- **Requesters (Aisha, Fatimah):** Submit structured requests, receive email notifications, view request status
- **Handlers (Sarah):** View all requests in dashboard, filter by status/priority, assign requests, update status

**Must-Have Capabilities:**

**Authentication & Access:**
- Custom JWT authentication (username/password login)
- Role-based access control (requester, handler, admin)
- Password reset functionality
- Secure session management

**Request Submission:**
- Structured submission form with fields:
  - Request type (bug, enhancement, form change, report change, workflow improvement)
  - Urgency level (low, medium, high)
  - System affected (dropdown of existing systems)
  - Title and description
  - Attachments (screenshots, documents, max 5MB)
- Immediate email confirmation on submission
- Form validation with clear error messages

**Request Management (Software Team):**
- Request dashboard showing all incoming requests
- Filter by status, priority, department, request type
- Request detail view with full information
- Assign to developer capability
- Update status (open → in progress → resolved → closed)
- Add comments/notes to requests

**Email Notifications:**
- Immediate confirmation email on submission
- Status change notifications (open → in progress → resolved → closed)
- Assignment notifications (when assigned to developer)
- Comment notifications (when software team adds notes)

**Request Status Visibility:**
- Requesters can view their submitted requests
- Status tracking (current status, assigned developer, timeline)
- Request history (all status changes and comments)

**Technical Foundation:**
- Responsive design (mobile, tablet, desktop)
- WCAG 2.1 AA accessibility compliance
- Performance targets met (2-3 second load times)
- Basic error handling and recovery
- Help documentation and support contact

**What's NOT in MVP:**
- Analytics dashboard (deferred to Phase 2)
- Advanced filtering and search (deferred to Phase 2)
- Request templates (deferred to Phase 2)
- SLA tracking (deferred to Phase 2)
- University SSO integration (deferred to Phase 2)
- Department-level metrics (deferred to Phase 2)
- Self-service request cancellation (deferred to Phase 2)

### Post-MVP Features

**Phase 2 (Post-MVP — 6-12 months after launch):**

**Enhanced Dashboard Capabilities:**
- Analytics dashboard for system administrators
- Request volume metrics by type, department, system
- Performance tracking (triage time, resolution time)
- Department-level transparency and reporting

**Requester Experience Improvements:**
- Requester self-service portal (view all my requests)
- Request cancellation capability
- Advanced search and filtering
- Request templates for common request types

**Operational Improvements:**
- SLA tracking and reporting
- Advanced filtering for software team
- Bulk operations (assign multiple, close multiple)
- Integration with project management tools (Jira, GitHub)

**Authentication Enhancement:**
- University SSO integration (OAuth 2.0 / SAML)
- Single sign-on across university systems

**Platform Expansion:**
- Mobile app (iOS/Android) for on-the-go access
- API for external integrations

**Phase 3 (Expansion — 12-24 months after launch):**

**Full IT Service Portal:**
- Infrastructure upgrade requests
- Software installation requests
- Software purchase requests
- Hardware requests
- General IT support triage (Wi-Fi, printers, laptops)

**Advanced Capabilities:**
- AI-powered request categorization and prioritization
- Self-service knowledge base integration
- Automated routing based on request type
- Advanced analytics and predictive insights

**Service Expansion:**
- Student-facing help desk
- Integration with university service catalog
- Multi-language support

### Risk Mitigation Strategy

**Technical Risks:**

| Risk | Mitigation |
|------|------------|
| Email delivery failures | Multiple retry attempts, fallback notification methods, monitoring dashboard |
| JWT token security exploits | Follow OWASP best practices, regular security audits, token expiration policies |
| Mobile UX complexity | Progressive enhancement, testing on real devices, fallback to desktop experience |
| Performance degradation | Load testing before launch, performance monitoring, optimization budget |

**Market Risks:**

| Risk | Mitigation |
|------|------------|
| Low adoption — staff prefer email | Pilot with 2-3 friendly departments, executive sponsorship for portal usage mandate, clear timeline for sunsetting email requests |
| Software team capacity overwhelmed | Phased rollout (start with 2-3 departments), monitor request volume, scale team as needed |
| Shadow IT — departments build competing systems | Quick response times, demonstrate portal value, executive support for centralized solution |

**Resource Risks:**

| Risk | Mitigation |
|------|------------|
| Fewer developers than planned | Scope reduction (cut analytics dashboard, advanced filtering), extend timeline, prioritize core journeys only |
| Delayed university infrastructure access | Plan for cloud deployment as fallback, containerize application for portability |
| Limited budget for tools/licenses | Use open-source alternatives (shadcn/ui, open-source database), leverage existing university tools |

**Adoption Risk Mitigation:**

**Pilot Program (Months 1-3):**
- Launch with 2-3 friendly departments
- Gather feedback and iterate quickly
- Build success stories and proof points
- Identify and address adoption barriers

**University-Wide Rollout (Months 4-6):**
- Executive communication about portal benefits
- Training sessions for department coordinators
- Clear timeline for transitioning from email to portal
- Support resources (help documentation, help desk)

**Sunsetting Email Requests (Month 6+):**
- Executive mandate for portal usage
- Auto-responses to email requests directing to portal
- Periodic compliance reporting

## Functional Requirements

### Authentication & Access Control

- FR1: Users can log in using username and password authentication
- FR2: System can authenticate users via JSON Web Tokens (JWT) with session expiration
- FR3: Users can reset forgotten passwords via email verification
- FR4: System can enforce role-based access control (requester, handler, admin roles)
- FR5: System can restrict access to specific features based on user role

### Request Submission

- FR6: Requesters can submit software change requests through a structured form
- FR7: Requesters can specify request type (bug, enhancement, form change, report change, workflow improvement)
- FR8: Requesters can indicate urgency level (low, medium, high)
- FR9: Requesters can select the affected system from a dropdown list
- FR10: Requesters can provide title and description for the request
- FR11: Requesters can attach files (screenshots, documents) to requests
- FR12: System can validate form fields before submission
- FR13: System can provide clear error messages for invalid submissions
- FR14: Requesters can receive immediate email confirmation upon successful request submission

### Request Management

- FR15: Handlers can view all incoming requests in a centralized dashboard
- FR16: Handlers can filter requests by status, priority, department, or request type
- FR17: Handlers can view detailed information for a specific request
- FR18: Handlers can assign requests to specific developers
- FR19: Handlers can update request status (open, in progress, resolved, closed)
- FR20: Handlers can add comments or notes to requests
- FR21: Requesters can view their submitted requests and current status
- FR22: Requesters can view the full history of status changes and comments for their requests

### Email Notifications

- FR23: System can send immediate email confirmation when a request is submitted
- FR24: System can send email notifications when request status changes
- FR25: System can send email notifications when a request is assigned to a developer
- FR26: System can send email notifications when comments are added to a request
- FR27: System can deliver notification emails within 5 minutes of trigger event

### System Administration

- FR28: Admins can view analytics dashboard with request volume metrics
- FR29: Admins can view performance metrics (triage time, resolution time)
- FR30: Admins can view request breakdown by type, department, and system
- FR31: Admins can export reports for governance meetings

### User Account Management

- FR32: Admins can manage user accounts (create, deactivate, update roles)
- FR33: Users can update their own profile information (email, name, department)

### Help & Support

- FR34: Users can access help documentation for using the portal
- FR35: Users can find support contact information for assistance
- FR36: System can provide contextual help for form fields and features

### Error Handling & Recovery

- FR37: System can display user-friendly error messages for failed operations
- FR38: System can provide recovery guidance for common errors
- FR39: System can maintain data integrity during error conditions
- FR40: System can log errors for administrator review

### Data Management

- FR41: System can store all requests with complete history
- FR42: System can preserve request data even if operations fail
- FR43: System can enforce file attachment size limits (maximum 5MB)
- FR44: System can validate file attachment types

### Security

- FR45: System can protect against Cross-Site Request Forgery (CSRF) attacks
- FR46: System can protect against Cross-Site Scripting (XSS) attacks
- FR47: System can enforce Content Security Policy (CSP) headers
- FR48: System can implement rate limiting on login and submission endpoints
- FR49: System can sanitize all user inputs to prevent injection attacks
- FR50: System can hash passwords using secure algorithms (bcrypt/argon2)

## Non-Functional Requirements

### Performance

**Response Time:**
- NFR-P1: Initial page load completes within 2 seconds (above-the-fold content)
- NFR-P2: Request submission form loads within 2 seconds
- NFR-P3: Software team dashboard loads within 2 seconds
- NFR-P4: Form submission completes within 3 seconds (submit to confirmation)
- NFR-P5: Time to Interactive (TTI) is under 3 seconds

**Concurrent Users:**
- NFR-P6: System supports 100 concurrent users without performance degradation
- NFR-P7: System maintains performance under peak load (500 concurrent users)

**Performance Measurement:**
- NFR-P8: Lighthouse Performance score is 90 or higher
- NFR-P9: System performance is monitored and logged for optimization

### Security

**Authentication & Authorization:**
- NFR-S1: User passwords are hashed using bcrypt or argon2 with minimum work factor 12
- NFR-S2: JWT tokens expire after 8 hours of inactivity
- NFR-S3: JWT tokens are signed using RS256 algorithm or stronger
- NFR-S4: Failed login attempts are rate-limited (5 attempts per 15 minutes per IP)
- NFR-S5: Password reset links expire after 1 hour

**Data Protection:**
- NFR-S6: All data is encrypted at rest using AES-256 or equivalent
- NFR-S7: All data transmission is encrypted using TLS 1.3 or higher
- NFR-S8: Sensitive data (passwords, tokens) is never logged or exposed in error messages
- NFR-S9: File attachments are scanned for malware before storage

**Attack Prevention:**
- NFR-S10: System implements CSRF protection on all state-changing endpoints
- NFR-S11: System implements XSS protection (input sanitization, output encoding, CSP headers)
- NFR-S12: System implements Content Security Policy (CSP) headers
- NFR-S13: System implements HTTP Strict Transport Security (HSTS) headers
- NFR-S14: System implements rate limiting on submission endpoints (10 requests per minute per user)
- NFR-S15: System validates and sanitizes all user inputs to prevent SQL injection

**Session Management:**
- NFR-S16: Sessions are invalidated after 8 hours of inactivity
- NFR-S17: Users can manually log out from all devices
- NFR-S18: Session tokens are stored securely (HttpOnly, Secure, SameSite cookies)

### Accessibility

**Compliance Level:**
- NFR-A1: System complies with WCAG 2.1 Level AA standards
- NFR-A2: System is navigable using keyboard only (no mouse required)
- NFR-A3: System is compatible with screen readers (JAWS, NVDA, VoiceOver)

**Visual Accessibility:**
- NFR-A4: Color contrast ratios meet WCAG AA (4.5:1 for normal text, 3:1 for large text)
- NFR-A5: Focus indicators are visible on all interactive elements
- NFR-A6: Text can be resized up to 200% without loss of functionality
- NFR-A7: System does not rely on color alone to convey information

**Form Accessibility:**
- NFR-A8: All form inputs have properly associated labels
- NFR-A9: Error messages are descriptive and indicate how to fix errors
- NFR-A10: Required fields are clearly indicated before form submission

### Integration

**Email System:**
- NFR-I1: Email notifications are delivered within 5 minutes of trigger event
- NFR-I2: Email delivery success rate is 98% or higher
- NFR-I3: System logs all email delivery attempts and failures
- NFR-I4: System implements retry logic for failed email deliveries (3 attempts)

**Authentication (Phase 2):**
- NFR-I5: System integrates with university SSO using OAuth 2.0 or SAML 2.0
- NFR-I6: SSO integration does not add more than 1 second to login time

**Future Integrations:**
- NFR-I7: System provides REST API for future integrations
- NFR-I8: API follows OpenAPI (Swagger) specification for documentation

### Reliability

**Availability:**
- NFR-R1: System uptime is 99% during business hours (Monday-Friday, 8am-6pm)
- NFR-R2: Planned maintenance is scheduled outside business hours with 48-hour notice
- NFR-R3: System can recover from failures without data loss (zero data loss tolerance)

**Data Integrity:**
- NFR-R4: All database transactions are atomic (all-or-nothing)
- NFR-R5: System implements database backups daily with 30-day retention
- NFR-R6: System preserves all request data even if operations fail

**Error Handling:**
- NFR-R7: System displays user-friendly error messages for all error conditions
- NFR-R8: System logs all errors for administrator review
- NFR-R9: System provides recovery guidance for common errors

### Scalability

**User Growth:**
- NFR-SC1: System supports 10x user growth with less than 10% performance degradation
- NFR-SC2: System can scale to 10,000 users with architectural changes (database indexing, caching)

**Request Volume:**
- NFR-SC3: System can handle 1,000 requests per day with current architecture
- NFR-SC4: System can scale to 10,000 requests per day with architectural optimizations

**Data Growth:**
- NFR-SC5: System can store 5 years of request history with archival policy for older data
