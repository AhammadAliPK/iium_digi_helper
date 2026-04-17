import { PrismaClient, UserRole } from '@iium-portal/database';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function registerHandler(request: any, reply: any) {
  try {
    const { email, password, name, department } = request.body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return reply.status(400).send({
        success: false,
        error: {
          code: 'USER_EXISTS',
          message: 'A user with this email already exists',
          details: ['Please use a different email address or log in if you already have an account']
        }
      });
    }

    // Hash password with bcrypt work factor 12
    const passwordHash = await bcrypt.hash(password, 12);

    // Create new user with REQUESTER role
    const newUser = await prisma.user.create({
      data: {
        email,
        passwordHash,
        name,
        department,
        role: UserRole.REQUESTER
      },
      select: {
        id: true,
        email: true,
        name: true,
        department: true,
        role: true,
        createdAt: true
      }
    });

    return reply.status(201).send({
      success: true,
      message: 'Registration successful. You can now log in with your credentials.',
      data: newUser
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Handle unique constraint violation
      if (error.code === 'P2002') {
        return reply.status(400).send({
          success: false,
          error: {
            code: 'USER_EXISTS',
            message: 'A user with this email already exists',
            details: ['Please use a different email address or log in if you already have an account']
          }
        });
      }
    }

    request.log.error(error);
    return reply.status(500).send({
      success: false,
      error: {
        code: 'REGISTRATION_ERROR',
        message: 'An error occurred during registration',
        details: ['Please try again or contact support if the problem persists']
      }
    });
  }
}
