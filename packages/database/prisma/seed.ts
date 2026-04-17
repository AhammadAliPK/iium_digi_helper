import { PrismaClient, UserRole } from '@prisma/client';
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
