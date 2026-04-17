import { FastifyInstance } from 'fastify';
import { getAllRequests, getRequestById } from '../controllers/request.controller';

export async function requestRoutes(fastify: FastifyInstance) {
  // Get all requests
  fastify.get('/', {
    onRequest: [fastify.authenticate],
    handler: getAllRequests,
  });

  // Get request by ID
  fastify.get('/:id', {
    onRequest: [fastify.authenticate],
    handler: getRequestById,
  });
}
