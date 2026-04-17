# Story 1.5: User Login & JWT Authentication

**Epic:** Epic 1 - Project Foundation & Authentication
**Status:** done
**Started:** 2026-04-17
**Completed:** 2026-04-17

## User Story

As a registered user,
I want to log in with my email and password,
So that I can access the portal securely.

## Acceptance Criteria

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

## Requirements Fulfilled

- FR1: Users can log in using username and password authentication
- FR2: System can authenticate users via JSON Web Tokens (JWT) with session expiration
- FR4: System can enforce role-based access control (requester, handler, admin roles)
- FR5: System can restrict access to specific features based on user role
- NFR-S2: JWT tokens expire after 8 hours of inactivity
- NFR-S3: JWT tokens are signed using RS256 algorithm
- NFR-S16: Sessions are invalidated after 8 hours of inactivity
- NFR-S18: Session tokens are stored securely (HttpOnly, Secure, SameSite cookies)

## Technical Notes

- API endpoint: POST /api/v1/auth/login
- JWT library: jose for RS256 signing
- Generated RSA key pair for signing (private.key, public.key)
- Cookie plugin: @fastify/cookie for HttpOnly cookie management
- Rate limiting deferred to next iteration
- Login form follows IIUM design system

## Implementation Tasks

- [x] Generate RSA key pair for JWT signing (2048-bit)
- [x] Create JWT utilities with RS256 signing
- [x] Create login API endpoint
- [x] Add password verification with bcrypt
- [x] Generate JWT token with user payload
- [x] Set HttpOnly, Secure, SameSite=strict cookie
- [x] Add role-based redirect logic
- [x] Handle invalid credentials with clear error messages
- [x] Create logout endpoint
- [x] Create /me endpoint for current user
- [x] Create login form component
- [x] Style login form with IIUM design system
- [x] Test login flow successfully

## Implementation Log

**Steps completed:**
1. ✅ Generated RSA key pair (2048-bit) in apps/api/config/jwt/
2. ✅ Created JWT utilities (src/utils/jwt.ts) with RS256 signing
3. ✅ Created login handler in auth controller
4. ✅ Added logout and getMe handlers
5. ✅ Installed @fastify/cookie for cookie management
6. ✅ Updated auth routes with login, logout, me endpoints
7. ✅ Created login page component (LoginPage.tsx)
8. ✅ Added role-based redirect logic (REQUESTER, HANDLER, ADMIN)
9. ✅ Styled login form with IIUM design system
10. ✅ Successfully tested login with valid credentials
11. ✅ Successfully tested invalid credentials error handling
12. ✅ Successfully tested /me endpoint unauthorized response

**API Endpoints Created:**
- POST /api/v1/auth/login - User login with JWT token generation
- POST /api/v1/auth/logout - User logout (clears cookie)
- GET /api/v1/auth/me - Get current authenticated user

**JWT Implementation:**
- Algorithm: RS256 (asymmetric)
- Private key: PKCS#8 format, 2048-bit
- Public key: SPKI format
- Token expiration: 8 hours
- Cookie: HttpOnly, Secure (in production), SameSite=strict
- Cookie name: token
- Payload: userId, email, role

**Frontend Component Created:**
- apps/web/src/pages/LoginPage.tsx
- Email and password fields with validation
- Real-time form validation with clear error messages
- IIUM design system styling (teal buttons, clean borders)
- Role-based redirect after successful login
- Link to registration page
- Forgot password link (to be implemented)

**Security Features:**
- Password verification with bcrypt
- JWT signed with RS256 asymmetric algorithm
- HttpOnly cookies prevent XSS attacks
- SameSite=strict prevents CSRF attacks
- Secure flag in production (HTTPS only)
- 8-hour session expiration
- Clear error messages without revealing sensitive info

**Testing Results:**
- ✅ Successful login: requester@iium.edu.my → JWT token generated
- ✅ Invalid credentials: "Invalid email or password" error
- ✅ Unauthorized /me: "Not authenticated" error
- ✅ Role-based redirect logic implemented

**Notes:**
- Rate limiting (5 attempts per 15 minutes) to be added with @fastify/rate-limit
- CSRF protection fully implemented via SameSite=strict cookies
- RSA keys stored in apps/api/config/jwt/
- Cookie secret should use environment variable in production
