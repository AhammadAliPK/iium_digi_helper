---
title: "Product Brief Distillate: Internal Software Change Request Portal"
type: llm-distillate
source: "product-brief-internal-software-change-request-portal.md"
created: "2026-04-16T21:00:00+08:00"
purpose: "Token-efficient context for downstream PRD creation"
---

# Product Brief Distillate: Internal Software Change Request Portal

This distillate contains overflow context from product brief discovery — requirements hints, technical constraints, user insights, and strategic details optimized for PRD creation.

## Technical Context

**Tech Stack (locked):**
- Frontend: React
- Styling: Tailwind CSS
- UI Components: shadcn/ui
- Monorepo: Turborepo
- Rationale: Modern, component-driven, scalable from day one

**IIUM Brand Identity:**
- Primary: Teal `#008670`
- Accent: Gold `#CDB067`
- Deep background: `#030F0D`
- Typography: Roboto Slab (headings), Inter (UI), Barlow Condensed (labels)
- Design principles: No logo distortions, no drop shadows, no busy backgrounds

**Authentication:**
- Assumption: University SSO integration
- Risk: SSO integration may require IT security review, policy changes, or technical work not accounted for
- Consider: Map specific SSO integration approach, fallback options, and timeline dependencies

## User Insights & Aha Moments

**Requester "Aha Moment":**
- Immediate email updates on status changes = no more manual follow-ups
- They want to see current status via email, not by checking portal
- Key insight: Email is the comfort zone; portal is the submission mechanism, email is the communication mechanism

**Software Team "Aha Moment":**
- One place to see ALL requests
- Ability to prioritize work effectively
- Clear ownership eliminates hunting across email threads

**Usage Pattern:**
- Sporadic but important — requests sent when there's an issue or enhancement need
- Not daily busywork; pattern is "problem arises → submit request"
- This affects onboarding: users don't use it frequently enough to develop deep muscle memory

**User Types (Primary):**
- Administrative staff: Form changes, report updates, small workflow improvements
- Faculty office staff: Submit requests on behalf of academic units
- Department coordinators: Manage multiple requests across teams
- Operations staff: Request system fixes and enhancements
- Software development team: Review, prioritize, assign, and fulfill

## Scope Signals

**In Scope for MVP:**
- Structured request submission form
- Request dashboard for software team
- Request categorization and prioritization
- Assignment to developers
- Status workflow: open → in progress → resolved → closed
- Email notifications for status changes
- Request history and status visibility

**Explicitly Out of Scope for v1:**
- User accounts and authentication (assumes university SSO)
- SLA tracking or reporting
- Analytics dashboards
- Integration with external project management tools
- Infrastructure upgrade requests
- Software installation requests
- Software purchasing requests
- Hardware requests
- General IT support (Wi-Fi, printers, laptops)

**2-3 Year Vision (Phase 2-3):**
- Full IT service portal
- Infrastructure upgrades
- Software installation requests
- Software purchase requests
- Advanced analytics
- Automated routing
- Integration capabilities

## Requirements Hints

**Request Form Fields (implied, not specified):**
- Request type (bug, enhancement, form change, report change, workflow improvement)
- Urgency level
- System affected
- Description
- Attachments (likely needed for screenshots, documents)
- Contact information

**Email Notification Requirements:**
- Immediate confirmation on submission
- Status change notifications (open → in progress → resolved → closed)
- Status updates should be viewable via email without logging into portal

**Workflow Requirements:**
- Software team needs: review, categorize, set priority, assign ownership
- Requester needs: submit, track status, receive updates (via email)
- Status workflow: open → in progress → resolved → closed (minimum viable)

## Competitive Intelligence

**Reference Model:**
- DBS Bank Singapore has similar internal tools
- Proves the model works in enterprise environments
- This adapts that approach to university-specific needs

**Generic Competitors (out of scope but referenced):**
- ServiceNow: Full ITSM platform, too complex for this use case
- Jira Service Management: Generic enterprise tool, not university-context-aware
- Differentiator: Focused scope for university software systems only

## Open Questions & Risks

**Stakeholder & Governance:**
- No clear stakeholder identification or buy-in strategy identified
- Missing governance model for request prioritization
- Who decides what's urgent? How are disputes resolved?
- Risk: Portal becomes another inbox without clear escalation paths

**Adoption & Change Management:**
- No migration strategy from existing email-based chaos
- Risk: Old habits persist alongside new tool; adoption stalls
- Risk: Email is path of least resistance; portal requires more effort upfront
- Risk: Low adoption without mandates or incentives
- Consider: Pilot with 2-3 departments first, executive sponsorship, clear timeline for sunsetting email requests

**Success Metrics (need specificity):**
- Currently soft: "Portal is actively used"
- Consider: "80% of requests via portal within 3 months"
- Consider: "Average response time under 48 hours"
- Consider: "Reduction in email-based software requests by X%"

**Capacity & Resource:**
- Untested assumption: Software team has capacity to staff request review workflow
- Risk: Request backlog accumulates without dedicated triage resources
- Risk: Portal highlights request volume beyond team's capacity

## Cultural & Organizational Context

**Problem Validation:**
- Current chaos: Requests via email, chat, hallway conversations
- Pain: Incomplete details, unclear ownership, tracking impossibility, wasted time, inconsistent prioritization
- Both staff and software team spend more time managing requests than fulfilling them

**Success Definition (User's Words):**
- "People are using it"
- "Work gets done"
- "Real-time email updates"

**Why Now?**
- Not explicitly defined in brief
- Consider: Growing request volume? New leadership mandate? Recent incident?
- Opportunity: Position as digital transformation catalyst and cultural change pilot

## Strategic Positioning Opportunities

**Elevated Narrative Options:**
- Digital transformation catalyst, not just a ticketing system
- Proof of concept for institutional change management
- Staff empowerment and workplace satisfaction tool

**Untapped Value:**
- Knowledge base and request pattern analytics (long-term value in data)
- Requester productivity metrics and transparency dashboard
- Integration with teaching and learning analytics

**Network Effects:**
- Viral adoption through department champions
- Data network effect (more departments = more valuable analytics)
- Template for other institutional workflows (facilities, HR, finance, student services)
- Student-facing expansion potential

## Rejected Ideas

**Explicitly Rejected (from user):**
- Infrastructure upgrade requests (out of scope for v1, in scope for Phase 2)
- Software installation requests (out of scope for v1, in scope for Phase 2)
- Software purchasing requests (out of scope for v1, in scope for Phase 2)
- Hardware requests (out of scope entirely)
- General IT support like Wi-Fi, printers, laptops (out of scope entirely)

**Implicitly Rejected (via scope):**
- Complex ITSM frameworks (rejected in favor of "lightweight adoption")
- SLA matrices (rejected for v1)
- Permission hierarchies (rejected for v1)
- Analytics dashboards (rejected for v1, in scope for Phase 3)

## Data & Compliance Considerations

**Absent in Brief (noted by reviewers):**
- No data retention or archival policy defined
- No compliance considerations documented
- No legal/procedural requirements for request historical data
- Risk: Uncontrolled database growth, legal/compliance exposure

**Consider Adding:**
- Retention periods for request data
- Archival procedures
- Data governance requirements
- Privacy considerations for request content

## Deployment Considerations

**Deployment Target:**
- University infrastructure (not cloud-hosted, based on context)
- Implications: On-premises deployment, university security policies, internal network access

**Integration Points:**
- University SSO (assumed, not specified)
- Email system (for notifications)
- Existing university software systems (for context, not integration)

## Development Approach Considerations

**Monorepo with Turborepo:**
- Suggests expectation of multiple packages/apps
- May indicate future expansion plans
- Consider: Frontend app, backend API, shared packages structure

**Component-Driven with shadcn/ui:**
- Suggests emphasis on UI consistency and speed
- Aligns with IIUM brand system integration
- Consider: Design system components library for reuse across Phase 2-3 expansion
