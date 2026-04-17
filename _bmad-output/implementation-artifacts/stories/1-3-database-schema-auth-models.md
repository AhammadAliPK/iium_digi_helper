# Story 1.3: Database Schema & Authentication Models

**Epic:** Epic 1 - Project Foundation & Authentication
**Status:** done
**Started:** 2026-04-17
**Completed:** 2026-04-17

## User Story

As a developer,
I want to create the Prisma schema for users, roles, and authentication,
So that we can securely store user credentials and manage access.

## Acceptance Criteria

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

## Requirements Fulfilled

- FR1: Users can log in using username and password authentication
- FR4: System can enforce role-based access control (requester, handler, admin roles)
- NFR-S1: Passwords hashed using bcrypt with work factor 12
- NFR-S6: All data encrypted at rest (PostgreSQL AES-256)
- FR41: History foundation (request_history table created)

## Technical Notes

- Used Prisma with PostgreSQL
- Configured bcrypt with work factor 12 for password hashing
- Set up connection pooling (connection_limit=10, pool_timeout=10, connect_timeout=10)
- Created seed script for demo users

## Implementation Tasks

- [x] Install Prisma and @prisma/client
- [x] Create Prisma schema with users table
- [x] Create UserRole enum (REQUESTER, HANDLER, ADMIN)
- [x] Create password_reset_tokens table
- [x] Add indexes on users.email and password_reset_tokens.token
- [x] Configure database connection to local PostgreSQL
- [x] Generate Prisma Client
- [x] Push schema to database (iium_digital_db)
- [x] Create seed script with demo users
- [x] Run seed script successfully

## Implementation Log

**Steps completed:**
1. ✅ Created Prisma schema with authentication models:
   - users table with proper columns and constraints
   - UserRole enum with REQUESTER, HANDLER, ADMIN
   - password_reset_tokens table for password reset functionality
   - Indexes on email and token columns for performance

2. ✅ Added additional models for future stories:
   - Request, RequestType, UrgencyLevel, RequestStatus enums
   - Request model with proper relations
   - Attachment model for file uploads
   - RequestHistory model for audit trail

3. ✅ Configured database connection:
   - DATABASE_URL: postgresql://postgres:ali123@127.0.0.1:5432/iium_digital_db
   - Connection pooling configured (10 connections, 10s timeout)
   - Environment variables set in .env

4. ✅ Generated Prisma Client successfully

5. ✅ Pushed schema to database (iium_digital_db) - all tables created

6. ✅ Created seed script with demo users:
   - requester@iium.edu.my (Aisha Binti Ahmad, Academic Affairs)
   - handler@iium.edu.my (Sarah Binti Lee, ICT Department)
   - admin@iium.edu.my (Rahman Bin Kassim, ICT Department)
   - All passwords: password123 (hashed with bcrypt work factor 12)

7. ✅ Ran seed script successfully - 3 users created

**Database Schema Created:**
- packages/database/prisma/schema.prisma
- All models configured with proper relations
- Cascade delete configured for dependent records
- Indexes on frequently queried columns

**Seed Data:**
- packages/database/prisma/seed.ts
- 3 demo users created for testing
- Passwords hashed with bcrypt (work factor 12)

**Notes:**
- Database: iium_digital_db (local PostgreSQL)
- Prisma version: 6.2.0
- All tables created successfully
- Seed data ready for authentication testing
