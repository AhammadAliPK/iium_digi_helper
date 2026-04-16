# IIUM Internal Software Change Request Portal

A web-based portal for IIUM staff to submit, track, and manage software change requests for university systems.

## 🎯 Overview

The IIUM Internal Software Change Request Portal streamlines the process of requesting software changes, bug fixes, and enhancements. Staff can submit structured requests, track progress, receive email notifications, and the software team can triage, assign, and manage all requests in one centralized dashboard.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm 8+
- PostgreSQL 14+

### Installation

```bash
# Navigate to project
cd iium-change-request-portal

# Install dependencies
pnpm install

# Setup environment
cp .env.example .env

# Run database migrations
pnpm --filter @repo/database prisma migrate dev

# Start development
pnpm dev
```

### Access
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Database: localhost:5432

## 📁 Project Structure

```
iium-change-request-portal/
├── apps/
│   ├── web/          # React SPA frontend
│   └── api/          # Fastify backend API
├── packages/
│   ├── ui/           # Shared UI components (shadcn/ui)
│   ├── config/       # Shared configurations
│   ├── types/        # TypeScript types
│   ├── database/     # Prisma schema & client
│   └── utils/        # Shared utilities
├── turbo.json        # Turborepo configuration
└── package.json      # Root package.json
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Query** - Server state management
- **React Router v6** - Routing
- **React Hook Form** - Form handling
- **Zod** - Form validation

### Backend
- **Fastify** - REST API framework
- **TypeScript** - Type safety
- **PostgreSQL** - Database
- **Prisma** - ORM & migrations
- **jose** - JWT authentication (RS256)
- **bcrypt** - Password hashing (work factor 12)
- **Nodemailer** - Email notifications
- **Pino** - Structured logging

## 👥 User Roles

### Requester (All Staff)
- Submit software change requests
- Track request status
- View request history
- Receive email notifications

### Handler (Software Team)
- View all incoming requests
- Filter and prioritize requests
- Assign requests to developers
- Update request status
- Add comments and notes

### Admin (ICT Management)
- Access analytics dashboard
- Manage user accounts
- Export reports
- View system metrics

## 📚 Documentation

### Planning Documents
- [Architecture](./_bmad-archive/planning-artifacts/architecture.md) - Solution architecture and technical decisions
- [Epics & Stories](./_bmad-archive/planning-artifacts/epics.md) - 6 epics, 30 user stories
- [PRD](./_bmad-archive/planning-artifacts/prd.md) - Product requirements document
- [UX Design](./_bmad-archive/planning-artifacts/ux-design-specification.md) - Design system and UX requirements

### Implementation
- [Sprint Status](./_bmad-output/implementation-artifacts/sprint-status.yaml) - Development progress tracking
- [Stories](./_bmad-output/implementation-artifacts/stories/) - Individual story files

### Standards
- [README Standard](./_bmad-archive/README-STANDARD.md) - Documentation guidelines

## 🔧 Development

### Available Scripts

```bash
# Development
pnpm dev              # Start all apps in development mode
pnpm --filter web dev # Start frontend only
pnpm --filter api dev # Start backend only

# Building
pnpm build            # Build all apps for production
pnpm --filter web build
pnpm --filter api build

# Database
pnpm --filter @repo/database prisma studio    # Open Prisma Studio
pnpm --filter @repo/database prisma migrate dev  # Run migrations
pnpm --filter @repo/database prisma generate     # Generate Prisma Client

# Testing & Quality
pnpm test             # Run all tests
pnpm lint             # Run linter
pnpm format           # Format code with Prettier
```

### Environment Variables

See `.env.example` for required environment variables:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/iium_portal

# JWT
JWT_PRIVATE_KEY_PATH=./config/jwt/private.key
JWT_PUBLIC_KEY_PATH=./config/jwt/public.key

# Email (SMTP)
SMTP_HOST=smtp.iium.edu.my
SMTP_PORT=587
SMTP_USER=portal@iium.edu.my
SMTP_PASS=your-password

# App
APP_URL=http://localhost:3000
API_URL=http://localhost:3001
NODE_ENV=development
```

## 🎨 IIUM Design System

The portal follows IIUM branding guidelines:

- **Primary Color:** Teal #008670
- **Secondary Color:** Gold #CDB067
- **Typography:** Roboto Slab (headings), Inter (body), Barlow Condensed (labels)
- **Design Principles:** Clean borders, no drop shadows, minimal backgrounds

## 🔐 Security

- **Authentication:** Custom JWT with RS256 asymmetric signing
- **Password Hashing:** bcrypt with work factor 12
- **Session Management:** HttpOnly, Secure, SameSite=strict cookies
- **CSRF Protection:** Enabled on all state-changing endpoints
- **Rate Limiting:** Login attempts, submission endpoints
- **Input Validation:** Zod schemas on all API endpoints

## 📊 Current Progress

### Epics Status
- ✅ **Epic 1:** Project Foundation & Authentication (7 stories)
- ⏳ **Epic 2:** Request Submission (6 stories)
- ⏳ **Epic 3:** Request Management & Triage (5 stories)
- ⏳ **Epic 4:** Communication & Notifications (5 stories)
- ⏳ **Epic 5:** Analytics & Administration (3 stories)
- ⏳ **Epic 6:** Help, Support & Error Handling (4 stories)

### Tracking
See [sprint-status.yaml](./_bmad-output/implementation-artifacts/sprint-status.yaml) for real-time progress.

## 🚢 Deployment

### Development
```bash
pnpm dev
```

### Production (Docker Compose)
```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Manual Production
```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 🤝 Contributing

This is an internal IIUM project. For contributions:
1. Check [sprint-status.yaml](./_bmad-output/implementation-artifacts/sprint-status.yaml) for assigned stories
2. Create story file using `/bmad-create-story <story-key>`
3. Implement according to acceptance criteria
4. Update status in sprint-status.yaml when done

## 📝 License

Internal IIUM Project - Not for external distribution

## 👥 Team

- **Product Owner:** IIUM ICT Department
- **Development:** Software Development Team
- **Design:** IIUM Digital Services

---

**Last Updated:** 2026-04-17
**BMAD Version:** 6.3.0
**Project Phase:** Implementation
