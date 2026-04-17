import { PrismaClient, RequestStatus, RequestType, UrgencyLevel } from '@iium-portal/database';

const prisma = new PrismaClient();

export async function getAnalyticsHandler(request: any, reply: any) {
  try {
    // Get current date info for calculations
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));

    // Count total requests
    const totalRequests = await prisma.request.count();

    // Count requests this month
    const requestsThisMonth = await prisma.request.count({
      where: {
        createdAt: {
          gte: startOfMonth
        }
      }
    });

    // Count requests this week
    const requestsThisWeek = await prisma.request.count({
      where: {
        createdAt: {
          gte: startOfWeek
        }
      }
    });

    // Count backlog (Open + In Progress)
    const backlog = await prisma.request.count({
      where: {
        status: {
          in: [RequestStatus.OPEN, RequestStatus.IN_PROGRESS]
        }
      }
    });

    // Count by status
    const openCount = await prisma.request.count({
      where: { status: RequestStatus.OPEN }
    });

    const inProgressCount = await prisma.request.count({
      where: { status: RequestStatus.IN_PROGRESS }
    });

    const resolvedCount = await prisma.request.count({
      where: { status: RequestStatus.RESOLVED }
    });

    const closedCount = await prisma.request.count({
      where: { status: RequestStatus.CLOSED }
    });

    // Count by type
    const bugCount = await prisma.request.count({
      where: { requestType: RequestType.BUG }
    });

    const enhancementCount = await prisma.request.count({
      where: { requestType: RequestType.ENHANCEMENT }
    });

    const formChangeCount = await prisma.request.count({
      where: { requestType: RequestType.FORM_CHANGE }
    });

    const reportChangeCount = await prisma.request.count({
      where: { requestType: RequestType.REPORT_CHANGE }
    });

    const workflowImprovementCount = await prisma.request.count({
      where: { requestType: RequestType.WORKFLOW_IMPROVEMENT }
    });

    // Count by urgency
    const lowCount = await prisma.request.count({
      where: { urgency: UrgencyLevel.LOW }
    });

    const mediumCount = await prisma.request.count({
      where: { urgency: UrgencyLevel.MEDIUM }
    });

    const highCount = await prisma.request.count({
      where: { urgency: UrgencyLevel.HIGH }
    });

    return reply.send({
      success: true,
      data: {
        totalRequests,
        requestsThisMonth,
        requestsThisWeek,
        backlog,
        byStatus: {
          OPEN: openCount,
          IN_PROGRESS: inProgressCount,
          RESOLVED: resolvedCount,
          CLOSED: closedCount
        },
        byType: {
          BUG: bugCount,
          ENHANCEMENT: enhancementCount,
          FORM_CHANGE: formChangeCount,
          REPORT_CHANGE: reportChangeCount,
          WORKFLOW_IMPROVEMENT: workflowImprovementCount
        },
        byUrgency: {
          LOW: lowCount,
          MEDIUM: mediumCount,
          HIGH: highCount
        }
      }
    });
  } catch (error) {
    request.log.error(error);
    return reply.status(500).send({
      success: false,
      error: {
        code: 'ANALYTICS_ERROR',
        message: 'Failed to fetch analytics data',
        details: ['Please try again later']
      }
    });
  }
}
