# Story 1.4: User Registration

**Epic:** Epic 1 - Project Foundation & Authentication
**Status:** done
**Started:** 2026-04-17
**Completed:** 2026-04-17

## User Story

As a new staff member,
I want to register for an account with my email and password,
So that I can access the portal.

## Acceptance Criteria

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

## Requirements Fulfilled

- FR1: Users can log in using username and password authentication
- FR5: System can restrict access to specific features based on user role
- FR49: System can sanitize all user inputs to prevent injection attacks
- FR50: System can hash passwords using secure algorithms (bcrypt)
- NFR-S1: Passwords hashed using bcrypt with work factor 12
- NFR-A8: All form inputs have properly associated labels
- NFR-A9: Error messages are descriptive and indicate how to fix errors
- NFR-A10: Required fields are clearly indicated before form submission

## Technical Notes

- API endpoint: POST /api/v1/auth/register
- Validate email format and password strength
- Rate limiting deferred to Story 1.5 (login rate limiting)
- CSRF protection to be added with session management
- Return 201 Created on success, 400 Bad Request on validation error

## Implementation Tasks

- [x] Create Prisma schema with users table (Story 1.3)
- [x] Create registration API endpoint
- [x] Add password hashing with bcrypt (work factor 12)
- [x] Add email validation (format, length)
- [x] Add password validation (min 8 chars, complexity)
- [x] Add name and department validation
- [x] Handle duplicate email errors
- [x] Create registration form component
- [x] Add form validation with real-time feedback
- [x] Style form with IIUM design system
- [x] Test registration endpoint successfully

## Implementation Log

**Steps completed:**
1. ✅ Created authentication routes in apps/api/src/routes/auth.routes.ts
2. ✅ Created auth controller with register handler in apps/api/src/controllers/auth.controller.ts
3. ✅ Created validation schemas in apps/api/src/schemas/auth.schema.ts
4. ✅ Implemented password hashing with bcrypt (work factor 12)
5. ✅ Added email format validation
6. ✅ Added password strength validation (8+ chars, uppercase, lowercase, number)
7. ✅ Added duplicate email handling with clear error messages
8. ✅ Created registration form component in apps/web/src/pages/RegisterPage.tsx
9. ✅ Added real-time form validation with user-friendly error messages
10. ✅ Styled form with IIUM design system (teal primary button, clean layout)
11. ✅ Added success state with redirect to login page
12. ✅ Tested registration endpoint successfully - user created with REQUESTER role
13. ✅ Tested validation - weak passwords and invalid emails rejected

**API Endpoint Created:**
- POST /api/v1/auth/register
- Request body: { email, password, name, department }
- Response 201: { success, message, data: { id, email, name, department, role, createdAt } }
- Response 400: { success: false, error: { code, message, details } }

**Frontend Component Created:**
- apps/web/src/pages/RegisterPage.tsx
- Form with email, password, name, department fields
- Real-time validation with green checkmarks for valid fields
- Red borders with error messages for invalid fields
- Success state with automatic redirect to login
- IIUM design system styling (teal buttons, clean borders)

**Validation Rules:**
- Email: Valid format, 5-255 characters
- Password: Minimum 8 characters, must contain uppercase, lowercase, and number
- Name: 2-255 characters, required
- Department: 2-255 characters, required

**Security Features:**
- Password hashing with bcrypt work factor 12
- Input sanitization via Fastify schema validation
- SQL injection prevention via Prisma ORM
- Clear error messages without exposing sensitive data

**Database Package:**
- Created packages/database/index.ts to export Prisma client
- Enables proper imports across workspace packages

**Testing:**
- Tested successful registration: test@example.com created with REQUESTER role
- Tested validation: Weak password "weak" rejected with appropriate error
- API server running on http://localhost:3001

**Notes:**
- CSRF protection and rate limiting to be added in Story 1.5 with session management
- Registration sets all users to REQUESTER role by default
- Admin can upgrade roles via user management (Story 1.7)
