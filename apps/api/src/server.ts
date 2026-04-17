import Fastify from 'fastify';
import cors from '@fastify/cors';
import { authRoutes } from './routes/auth.routes.js';

const fastify = Fastify({
  logger: true
});

// Register CORS
await fastify.register(cors, {
  origin: true,
  credentials: true
});

// Health check route
fastify.get('/api/v1/health', async () => {
  return { status: 'ok', message: 'IIUM Change Request Portal API is running' };
});

// Register authentication routes
await fastify.register(authRoutes, { prefix: '/api/v1/auth' });

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
