# Story 2.1: Database Schema for Requests

**Epic:** Epic 2 - Request Submission
**Status:** done
**Started:** 2026-04-16 (completed in Story 1.3)
**Completed:** 2026-04-16

## User Story

As a developer,
I want to create the database schema for requests and attachments,
So that we can store request data and file uploads.

## Acceptance Criteria

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

## Requirements Fulfilled

- FR11: File attachments supported with metadata validation
- FR41: Request history foundation (request_history table created)
- FR43: File size limits foundation (file_size field for validation)

## Technical Notes

- Request number as unique identifier (e.g., REQ-2026-001) to be generated on creation
- File storage path: apps/api/uploads/
- Cascade delete for attachments when request is deleted
- File metadata stored for validation (size, type)

## Implementation Tasks

- [x] Create RequestType enum (BUG, ENHANCEMENT, FORM_CHANGE, REPORT_CHANGE, WORKFLOW_IMPROVEMENT)
- [x] Create UrgencyLevel enum (LOW, MEDIUM, HIGH)
- [x] Create RequestStatus enum (OPEN, IN_PROGRESS, RESOLVED, CLOSED)
- [x] Create Request model with all required fields
- [x] Create Attachment model with file metadata
- [x] Create RequestHistory model for audit trail
- [x] Add indexes on userId, status, and createdAt
- [x] Establish foreign key relationships
- [x] Add cascade delete for attachments
- [x] Push schema to database
- [x] Generate Prisma Client

## Implementation Log

**Steps completed in Story 1.3:**
1. ✅ Created RequestType enum with 5 types
2. ✅ Created UrgencyLevel enum with 3 levels
3. ✅ Created RequestStatus enum with 4 statuses
4. ✅ Created Request model with:
   - id (cuid)
   - requestNumber (unique)
   - userId (foreign key to users table)
   - requestType (enum)
   - urgency (enum)
   - systemAffected (string)
   - title (string)
   - description (Text)
   - status (enum, default OPEN)
   - assignedToUserId (foreign key to users, nullable)
   - createdAt, updatedAt timestamps
5. ✅ Created Attachment model with file metadata
6. ✅ Created RequestHistory model for audit trail
7. ✅ Added indexes on userId, status, and createdAt
8. ✅ Established foreign key relationships
9. ✅ Added cascade delete for attachments
10. ✅ Successfully pushed schema to database (iium_digital_db)

**Database Schema Created:**
- packages/database/prisma/schema.prisma

**Models Created:**
- Request: Stores all request data with proper relationships
- RequestType: Enum for request categorization
- UrgencyLevel: Enum for priority levels
- RequestStatus: Enum for workflow states
- Attachment: Stores file metadata for uploads
- RequestHistory: Tracks all changes and comments

**Notes:**
- Schema was created as part of Epic 1 (Story 1.3) to establish complete database foundation
- All foreign key relationships properly configured
- Cascade delete ensures data integrity
- Indexes optimize common query patterns
- File metadata fields support size and type validation (to be implemented in Story 2.5)
