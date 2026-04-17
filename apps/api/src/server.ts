import Fastify from 'fastify';
import cors from '@fastify/cors';
import cookie from '@fastify/cookie';
import { authRoutes } from './routes/auth.routes.js';
import { adminRoutes } from './routes/admin.routes.js';

const fastify = Fastify({
  logger: true
});

// Register CORS with credentials support
await fastify.register(cors, {
  origin: ['http://localhost:3000', 'http://localhost:3002', 'http://localhost:3003'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
});

// Register cookie support
await fastify.register(cookie, {
  secret: process.env.COOKIE_SECRET || 'iium-digital-cookie-secret-key',
  hook: 'onRequest',
  parseOptions: {}
});

// Health check route
fastify.get('/api/v1/health', async () => {
  return { status: 'ok', message: 'IIUM Change Request Portal API is running' };
});

// Register authentication routes
await fastify.register(authRoutes, { prefix: '/api/v1/auth' });

// Register admin routes
await fastify.register(adminRoutes, { prefix: '/api/v1/admin' });

// Start server
const start = async () => {
  try {
    const port = Number(process.env.API_PORT) || 3001;
    await fastify.listen({ port, host: '0.0.0.0' });
    console.log(`API server running on http://localhost:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
