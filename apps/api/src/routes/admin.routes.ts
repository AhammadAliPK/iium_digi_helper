import { FastifyInstance } from 'fastify';
import { getAnalyticsHandler } from '../controllers/admin.controller.js';

export async function adminRoutes(fastify: FastifyInstance) {
  // Admin analytics dashboard
  fastify.get('/analytics', {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            data: {
              type: 'object',
              properties: {
                totalRequests: { type: 'number' },
                requestsThisMonth: { type: 'number' },
                requestsThisWeek: { type: 'number' },
                backlog: { type: 'number' },
                byStatus: {
                  type: 'object',
                  properties: {
                    OPEN: { type: 'number' },
                    IN_PROGRESS: { type: 'number' },
                    RESOLVED: { type: 'number' },
                    CLOSED: { type: 'number' }
                  }
                },
                byType: {
                  type: 'object',
                  properties: {
                    BUG: { type: 'number' },
                    ENHANCEMENT: { type: 'number' },
                    FORM_CHANGE: { type: 'number' },
                    REPORT_CHANGE: { type: 'number' },
                    WORKFLOW_IMPROVEMENT: { type: 'number' }
                  }
                },
                byUrgency: {
                  type: 'object',
                  properties: {
                    LOW: { type: 'number' },
                    MEDIUM: { type: 'number' },
                    HIGH: { type: 'number' }
                  }
                }
              }
            }
          }
        }
      }
    }
  }, getAnalyticsHandler);
}
