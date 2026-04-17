import { SignJWT, jwtVerify } from 'jose';
import { readFileSync } from 'fs';
import { join } from 'path';
import { FastifyRequest, FastifyReply } from 'fastify';

// Load RSA keys
const PRIVATE_KEY_PATH = join(process.cwd(), 'config/jwt/private.key');
const PUBLIC_KEY_PATH = join(process.cwd(), 'config/jwt/public.key');

// Use KeyObject from crypto for better compatibility
import { createPrivateKey, createPublicKey } from 'crypto';

const privateKey = createPrivateKey({
  key: readFileSync(PRIVATE_KEY_PATH),
  format: 'pem',
  type: 'pkcs8'
});

const publicKey = createPublicKey({
  key: readFileSync(PUBLIC_KEY_PATH),
  format: 'pem',
  type: 'spki'
});

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

export async function generateToken(payload: JWTPayload): Promise<string> {
  const token = await new SignJWT({
    userId: payload.userId,
    email: payload.email,
    role: payload.role
  })
    .setProtectedHeader({ alg: 'RS256' })
    .setIssuedAt()
    .setExpirationTime('8h')
    .sign(privateKey);

  return token;
}

export async function verifyToken(token: string): Promise<JWTPayload> {
  try {
    const { payload } = await jwtVerify(token, publicKey);
    return payload as unknown as JWTPayload;
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
}

export async function authenticateToken(request: FastifyRequest, reply: FastifyReply) {
  try {
    // Try cookie first (existing pattern)
    let token = request.cookies.token;

    // Fallback to Authorization header
    if (!token && request.headers.authorization) {
      token = request.headers.authorization.replace('Bearer ', '');
    }

    if (!token) {
      return reply.status(401).send({
        success: false,
        error: {
          message: 'No token provided',
          code: 'NO_TOKEN'
        }
      });
    }

    const payload = await verifyToken(token);
    request.user = payload;
  } catch (error) {
    return reply.status(401).send({
      success: false,
      error: {
        message: 'Invalid or expired token',
        code: 'INVALID_TOKEN'
      }
    });
  }
}

// Extend FastifyRequest type to include user
declare module 'fastify' {
  interface FastifyRequest {
    user?: JWTPayload;
  }
}
