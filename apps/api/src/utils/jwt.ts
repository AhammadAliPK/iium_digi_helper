import { SignJWT, jwtVerify } from 'jose';
import { readFileSync } from 'fs';
import { join } from 'path';

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
