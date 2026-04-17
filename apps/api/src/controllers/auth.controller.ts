import { PrismaClient, UserRole } from '@iium-portal/database';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';
import { generateToken } from '../utils/jwt.js';

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

export async function loginHandler(request: any, reply: any) {
  try {
    const { email, password } = request.body;

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return reply.status(401).send({
        success: false,
        error: {
          code: 'INVALID_CREDENTIALS',
          message: 'Invalid email or password',
          details: ['Please check your credentials and try again']
        }
      });
    }

    // Check if user is active
    if (!user.isActive) {
      return reply.status(403).send({
        success: false,
        error: {
          code: 'ACCOUNT_DISABLED',
          message: 'Your account has been disabled',
          details: ['Please contact your administrator for assistance']
        }
      });
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatch) {
      return reply.status(401).send({
        success: false,
        error: {
          code: 'INVALID_CREDENTIALS',
          message: 'Invalid email or password',
          details: ['Please check your credentials and try again']
        }
      });
    }

    // Generate JWT token
    const token = await generateToken({
      userId: user.id,
      email: user.email,
      role: user.role
    });

    // Set HttpOnly cookie
    reply.setCookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 8 * 60 * 60 * 1000 // 8 hours
    });

    return reply.send({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          department: user.department,
          role: user.role
        }
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    request.log.error(error);
    return reply.status(500).send({
      success: false,
      error: {
        code: 'LOGIN_ERROR',
        message: 'An error occurred during login',
        details: ['Please try again or contact support if the problem persists']
      }
    });
  }
}

export async function logoutHandler(request: any, reply: any) {
  reply.clearCookie('token', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });

  return reply.send({
    success: true,
    message: 'Logged out successfully'
  });
}

export async function getMeHandler(request: any, reply: any) {
  try {
    const token = request.cookies.token;

    if (!token) {
      return reply.status(401).send({
        success: false,
        error: {
          code: 'UNAUTHORIZED',
          message: 'Not authenticated',
          details: ['Please log in to access this resource']
        }
      });
    }

    const { verifyToken } = await import('../utils/jwt.js');
    const payload = await verifyToken(token);

    const user = await prisma.user.findUnique({
      where: { id: payload.userId as string },
      select: {
        id: true,
        email: true,
        name: true,
        department: true,
        role: true,
        createdAt: true
      }
    });

    if (!user) {
      return reply.status(404).send({
        success: false,
        error: {
          code: 'USER_NOT_FOUND',
          message: 'User not found',
          details: ['Your account may have been deleted']
        }
      });
    }

    return reply.send({
      success: true,
      data: { user }
    });
  } catch (error) {
    return reply.status(401).send({
      success: false,
      error: {
        code: 'UNAUTHORIZED',
        message: 'Invalid or expired session',
        details: ['Please log in again']
      }
    });
  }
}
