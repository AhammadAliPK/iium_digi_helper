---
title: "Product Brief: Internal Software Change Request Portal"
status: "complete"
created: "2026-04-16T20:35:00+08:00"
updated: "2026-04-16T21:00:00+08:00"
inputs: []
reviewers: ["skeptic", "opportunity", "adoption-risk"]
---

# Product Brief: Internal Software Change Request Portal

## Executive Summary

The Internal Software Change Request Portal is a lightweight web-based tool that transforms how university staff submit and track software-related requests. Today, requests for bug fixes, form changes, report modifications, and small enhancements flow through email, chat, and informal conversations — creating chaos for both requesters and the software team. This portal provides one central place for structured submission, review, assignment, tracking, and real-time email notifications.

For staff, the portal means clarity: submit a request once, get confirmation immediately, and receive status updates directly in their inbox — no more wondering if anyone saw their request or having to follow up repeatedly. For the software team, it means visibility: one place to see all requests, prioritize work, assign ownership, and track progress consistently.

This is not a full IT service management platform. It's a focused internal tool for a specific problem: software change requests for existing university systems. The portal solves immediate pain with minimal complexity, establishing a foundation for a broader IT service vision over the next 2-3 years.

## The Problem

Software-related requests are everywhere at the university, and nowhere at the same time.

A department coordinator needs a field added to a leave application form. A faculty office staff member discovers a bug in a report export. An operations team requests a small workflow improvement in an internal system. Where do these requests go?

Today: Email inboxes. Chat messages. Hallway conversations. Followed by more emails. More chats. "Did anyone look at this?" "Is this being worked on?" "When will it be done?"

**The cost of chaos:**

- **Incomplete information:** Requests arrive without enough detail, triggering back-and-forth clarification
- **Unclear ownership:** No one knows who's responsible, so requests fall through cracks
- **Tracking impossibility:** No centralized view of what's requested, what's in progress, what's stalled
- **Wasted time:** Staff follow up repeatedly; software team hunts for context across threads
- **Inconsistent prioritization:** Urgent requests get lost alongside nice-to-haves

Both staff and the software team spend more time managing requests than fulfilling them.

## The Solution

A central web portal where university staff submit structured software change requests — and the software team manages them with clarity and consistency.

**For staff (requesters):**
- Submit a request through a simple form with structured fields
- Receive immediate confirmation and a tracking reference
- Get email notifications at every status change — no need to check the portal or follow up
- View request history and current status anytime

**For the software team:**
- One place to see all incoming requests
- Review, categorize, and prioritize each request
- Assign ownership to specific developers
- Update status with automatic email notifications to requesters
- Track work from submission to completion

**The workflow:**
1. Staff member submits a request through the portal
2. Software team receives the request with complete, structured information
3. Software team reviews, categorizes, sets priority, and assigns ownership
4. Staff member receives email notification at each status update
5. Request is tracked from open → in progress → resolved → closed

## What Makes This Different

**Focused scope:** Unlike generic IT service management platforms (ServiceNow, Jira Service Management), this portal is purpose-built for one thing: software change requests for existing university systems. No hardware, no infrastructure, no general IT support — just software changes, handled with simplicity and speed.

**University context:** The portal speaks the language of university operations — forms, reports, workflows, leave applications, course management. It's designed for how university staff actually work, not generic enterprise workflows.

**Lightweight adoption:** No complex ITSM frameworks, no SLA matrices, no permission hierarchies. Submit, review, assign, notify. Easy to learn, easy to use, easy to maintain.

**Reference inspiration:** Similar tools exist in enterprise environments like DBS Bank Singapore, proving the model works. This adapts that approach to university-specific needs.

## Who This Serves

**Primary users — Requesters:**
- **Administrative staff:** Need form changes, report updates, small workflow improvements
- **Faculty office staff:** Submit requests on behalf of academic units
- **Department coordinators:** Manage multiple requests across teams
- **Operations staff:** Request system fixes and enhancements

*What success looks like for them:* They submit a request and forget about it — knowing it's received, tracked, and will be acted on. No more follow-up emails. No more wondering if anyone saw their request. Real-time status updates arrive in their inbox automatically.

**Primary users — Handlers:**
- **Software development team:** Review, prioritize, assign, and fulfill requests

*What success looks like for them:* One place to see all requests, complete with the information needed to act. Clear ownership. No more hunting across email threads. The ability to prioritize work based on business need, not inbox position.

## Success Criteria

**Adoption:**
- Portal is actively used by staff across departments
- Reduction in email-based software requests (measurable shift to portal)

**Effectiveness:**
- Requests are processed and completed (work gets done)
- Software team can see and prioritize all incoming requests
- Fewer dropped or lost requests

**User satisfaction:**
- Requesters receive real-time email updates without manual follow-up
- Staff can easily check request status without emailing the software team

## Scope

**In scope for MVP:**
- Structured request submission form
- Request dashboard for software team
- Request categorization and prioritization
- Assignment to developers
- Status workflow (open → in progress → resolved → closed)
- Email notifications for status changes
- Request history and status visibility

**Explicitly out of scope for v1:**
- User accounts and authentication (assumes university SSO)
- SLA tracking or reporting
- Analytics dashboards
- Integration with external project management tools
- Infrastructure upgrade requests
- Software installation requests
- Software purchasing requests
- Hardware requests
- General IT support (Wi-Fi, printers, laptops)

## Vision

**Phase 1 (Now):** Focused software change request portal — solve immediate chaos for existing systems.

**Phase 2 (1-2 years):** Expand to full IT service portal, including infrastructure upgrades, software installation, and software purchase requests.

**Phase 3 (2-3 years):** Comprehensive IT service platform with advanced analytics, automated routing, and integration capabilities.

The MVP establishes the foundation: a simple, effective way for staff and IT to communicate about software needs. Success here creates demand and justification for the broader vision.

---

**Technical context:**
- Tech stack: React, Tailwind CSS, shadcn/ui, Turborepo (monorepo)
- Brand: IIUM identity (teal #008670, gold #CDB067)
- Deployment: University infrastructure
