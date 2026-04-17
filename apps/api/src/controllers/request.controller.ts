import { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaClient } from '@iium-portal/database';

const prisma = new PrismaClient();

export const getAllRequests = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    // Fetch all requests with assigned user information
    const requests = await prisma.request.findMany({
      include: {
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Transform data to match frontend expectations
    const transformedRequests = requests.map((req) => ({
      id: req.id,
      referenceNumber: req.requestNumber,
      title: req.title,
      description: req.description,
      status: req.status.toLowerCase() as 'open' | 'in_progress' | 'resolved' | 'closed',
      priority: req.urgency.toLowerCase() as 'low' | 'medium' | 'high',
      requestType: req.requestType,
      assignedTo: req.assignedTo ? {
        id: req.assignedTo.id,
        name: req.assignedTo.name,
        email: req.assignedTo.email,
      } : null,
      createdBy: {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
      },
      department: req.user.department,
      createdAt: req.createdAt.toISOString(),
      updatedAt: req.updatedAt.toISOString(),
    }));

    return reply.code(200).send({
      success: true,
      data: transformedRequests,
      count: transformedRequests.length,
    });
  } catch (error) {
    console.error('Error fetching requests:', error);
    return reply.code(500).send({
      success: false,
      error: {
        message: 'Failed to fetch requests',
        code: 'FETCH_REQUESTS_ERROR',
      },
    });
  }
};

export const getRequestById = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = request.params as { id: string };

    const req = await prisma.request.findUnique({
      where: { id },
      include: {
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        attachments: true,
      },
    });

    if (!req) {
      return reply.code(404).send({
        success: false,
        error: {
          message: 'Request not found',
          code: 'REQUEST_NOT_FOUND',
        },
      });
    }

    const transformedRequest = {
      id: req.id,
      referenceNumber: req.requestNumber,
      title: req.title,
      description: req.description,
      status: req.status.toLowerCase() as 'open' | 'in_progress' | 'resolved' | 'closed',
      priority: req.urgency.toLowerCase() as 'low' | 'medium' | 'high',
      requestType: req.requestType,
      assignedTo: req.assignedTo ? {
        id: req.assignedTo.id,
        name: req.assignedTo.name,
        email: req.assignedTo.email,
      } : null,
      createdBy: {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
      },
      department: req.user.department,
      attachments: req.attachments,
      createdAt: req.createdAt.toISOString(),
      updatedAt: req.updatedAt.toISOString(),
    };

    return reply.code(200).send({
      success: true,
      data: transformedRequest,
    });
  } catch (error) {
    console.error('Error fetching request:', error);
    return reply.code(500).send({
      success: false,
      error: {
        message: 'Failed to fetch request',
        code: 'FETCH_REQUEST_ERROR',
      },
    });
  }
};
