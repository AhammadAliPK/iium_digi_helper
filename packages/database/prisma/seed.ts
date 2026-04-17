import { PrismaClient, UserRole, RequestType, UrgencyLevel, RequestStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Hash password with bcrypt work factor 12
  const passwordHash = await bcrypt.hash('password123', 12);

  // Create demo users
  const requester = await prisma.user.upsert({
    where: { email: 'requester@iium.edu.my' },
    update: {},
    create: {
      email: 'requester@iium.edu.my',
      passwordHash,
      name: 'Aisha Binti Ahmad',
      department: 'Academic Affairs',
      role: UserRole.REQUESTER,
    },
  });

  const handler = await prisma.user.upsert({
    where: { email: 'handler@iium.edu.my' },
    update: {},
    create: {
      email: 'handler@iium.edu.my',
      passwordHash,
      name: 'Sarah Binti Lee',
      department: 'ICT Department',
      role: UserRole.HANDLER,
    },
  });

  const admin = await prisma.user.upsert({
    where: { email: 'admin@iium.edu.my' },
    update: {},
    create: {
      email: 'admin@iium.edu.my',
      passwordHash,
      name: 'Rahman Bin Kassim',
      department: 'ICT Department',
      role: UserRole.ADMIN,
    },
  });

  console.log('✅ Seeded users:');
  console.log(`   - Requester: ${requester.email} (password: password123)`);
  console.log(`   - Handler: ${handler.email} (password: password123)`);
  console.log(`   - Admin: ${admin.email} (password: password123)`);

  // Create demo requests
  const request1 = await prisma.request.upsert({
    where: { requestNumber: 'REQ-2026-001' },
    update: {},
    create: {
      requestNumber: 'REQ-2026-001',
      userId: requester.id,
      requestType: RequestType.BUG,
      urgency: UrgencyLevel.HIGH,
      systemAffected: 'Student Portal',
      title: 'Login page not loading on mobile devices',
      description: 'Students are unable to access the login page when using mobile browsers. The loading spinner appears indefinitely.',
      status: RequestStatus.OPEN,
      assignedToUserId: handler.id,
    },
  });

  const request2 = await prisma.request.upsert({
    where: { requestNumber: 'REQ-2026-002' },
    update: {},
    create: {
      requestNumber: 'REQ-2026-002',
      userId: requester.id,
      requestType: RequestType.ENHANCEMENT,
      urgency: UrgencyLevel.MEDIUM,
      systemAffected: 'Exam Management System',
      title: 'Add bulk upload feature for exam schedules',
      description: 'Need ability to upload multiple exam schedules at once using Excel template instead of entering one by one.',
      status: RequestStatus.IN_PROGRESS,
      assignedToUserId: handler.id,
    },
  });

  const request3 = await prisma.request.upsert({
    where: { requestNumber: 'REQ-2026-003' },
    update: {},
    create: {
      requestNumber: 'REQ-2026-003',
      userId: requester.id,
      requestType: RequestType.FORM_CHANGE,
      urgency: UrgencyLevel.LOW,
      systemAffected: 'Course Registration',
      title: 'Update prerequisite fields in course form',
      description: 'Add new prerequisite fields for engineering courses to match updated curriculum requirements.',
      status: RequestStatus.OPEN,
    },
  });

  const request4 = await prisma.request.upsert({
    where: { requestNumber: 'REQ-2026-004' },
    update: {},
    create: {
      requestNumber: 'REQ-2026-004',
      userId: requester.id,
      requestType: RequestType.REPORT_CHANGE,
      urgency: UrgencyLevel.HIGH,
      systemAffected: 'Financial Aid System',
      title: 'Update financial aid report format',
      description: 'Report needs to include new columns for semester breakdown and different calculation method.',
      status: RequestStatus.RESOLVED,
      assignedToUserId: handler.id,
    },
  });

  const request5 = await prisma.request.upsert({
    where: { requestNumber: 'REQ-2026-005' },
    update: {},
    create: {
      requestNumber: 'REQ-2026-005',
      userId: admin.id,
      requestType: RequestType.WORKFLOW_IMPROVEMENT,
      urgency: UrgencyLevel.MEDIUM,
      systemAffected: 'Change Request Portal',
      title: 'Implement email notifications for status changes',
      description: 'Users should receive email notifications when their request status changes or when comments are added.',
      status: RequestStatus.OPEN,
    },
  });

  console.log('✅ Seeded requests:');
  console.log(`   - REQ-2026-001: Login page not loading (HIGH, Open)`);
  console.log(`   - REQ-2026-002: Bulk upload feature (MEDIUM, In Progress)`);
  console.log(`   - REQ-2026-003: Prerequisite fields (LOW, Open)`);
  console.log(`   - REQ-2026-004: Financial aid report (HIGH, Resolved)`);
  console.log(`   - REQ-2026-005: Email notifications (MEDIUM, Open)`);

  console.log('🌱 Seed complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
