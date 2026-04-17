import { useEffect, useState } from 'react';
import { Button, Card } from '@iium-portal/ui';
import { ThemeToggle } from '../components/ThemeToggle';

interface AnalyticsData {
  totalRequests: number;
  requestsThisMonth: number;
  requestsThisWeek: number;
  backlog: number;
  byStatus: {
    OPEN: number;
    IN_PROGRESS: number;
    RESOLVED: number;
    CLOSED: number;
  };
  byType: {
    BUG: number;
    ENHANCEMENT: number;
    FORM_CHANGE: number;
    REPORT_CHANGE: number;
    WORKFLOW_IMPROVEMENT: number;
  };
  byUrgency: {
    LOW: number;
    MEDIUM: number;
    HIGH: number;
  };
}

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/admin/analytics', {
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json();
        setAnalytics(data.data);
      } else {
        console.error('Failed to fetch analytics');
      }
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--iium-deep)' }}>
        <div className="dls-container" style={{ paddingTop: '80px' }}>
          <p style={{ color: 'var(--iium-text-secondary)' }}>Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--iium-deep)' }}>
      {/* Header */}
      <header style={{ padding: '24px 0', borderBottom: '1px solid var(--iium-border-subtle)' }}>
        <div className="dls-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px' }}>
            IIUM <span style={{ color: 'var(--iium-gold)' }}>DIGITAL</span>
          </h1>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--iium-gold)', textTransform: 'uppercase' }}>
              Admin Dashboard
            </span>
            <Button variant="ghost" onClick={() => window.location.href = '/logout'}>
              Logout
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dls-container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '48px', marginBottom: '32px' }}>
          Analytics Dashboard
        </h1>

        {/* Metrics Cards */}
        <div className="grid-layout" style={{ marginBottom: '48px' }}>
          <Card>
            <span className="brand-label">Total Requests</span>
            <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--iium-teal)', marginTop: '16px' }}>
              {analytics?.totalRequests || 0}
            </div>
            <p style={{ color: 'var(--iium-text-muted)', fontSize: '14px', marginTop: '8px' }}>
              All time
            </p>
          </Card>

          <Card>
            <span className="brand-label">This Month</span>
            <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--iium-gold)', marginTop: '16px' }}>
              {analytics?.requestsThisMonth || 0}
            </div>
            <p style={{ color: 'var(--iium-text-muted)', fontSize: '14px', marginTop: '8px' }}>
              Requests this month
            </p>
          </Card>

          <Card>
            <span className="brand-label">This Week</span>
            <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--iium-teal)', marginTop: '16px' }}>
              {analytics?.requestsThisWeek || 0}
            </div>
            <p style={{ color: 'var(--iium-text-muted)', fontSize: '14px', marginTop: '8px' }}>
              Requests this week
            </p>
          </Card>

          <Card>
            <span className="brand-label">Backlog</span>
            <div style={{ fontSize: '48px', fontWeight: 700, color: '#ff4d4d', marginTop: '16px' }}>
              {analytics?.backlog || 0}
            </div>
            <p style={{ color: 'var(--iium-text-muted)', fontSize: '14px', marginTop: '8px' }}>
              Open + In Progress
            </p>
          </Card>
        </div>

        {/* Breakdown Sections */}
        <div className="grid-layout">
          {/* By Status */}
          <Card>
            <span className="brand-label">By Status</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '24px', marginTop: '16px' }}>
              Request Status
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--iium-text-secondary)' }}>Open</span>
                <span style={{ fontWeight: 700, color: 'var(--iium-teal)' }}>{analytics?.byStatus?.OPEN || 0}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--iium-text-secondary)' }}>In Progress</span>
                <span style={{ fontWeight: 700, color: '#3b82f6' }}>{analytics?.byStatus?.IN_PROGRESS || 0}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--iium-text-secondary)' }}>Resolved</span>
                <span style={{ fontWeight: 700, color: 'var(--iium-teal)' }}>{analytics?.byStatus?.RESOLVED || 0}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--iium-text-secondary)' }}>Closed</span>
                <span style={{ fontWeight: 700, color: 'var(--iium-text-muted)' }}>{analytics?.byStatus?.CLOSED || 0}</span>
              </div>
            </div>
          </Card>

          {/* By Type */}
          <Card>
            <span className="brand-label">By Type</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '24px', marginTop: '16px' }}>
              Request Types
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--iium-text-secondary)' }}>Bug Report</span>
                <span style={{ fontWeight: 700 }}>{analytics?.byType?.BUG || 0}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--iium-text-secondary)' }}>Enhancement</span>
                <span style={{ fontWeight: 700 }}>{analytics?.byType?.ENHANCEMENT || 0}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--iium-text-secondary)' }}>Form Change</span>
                <span style={{ fontWeight: 700 }}>{analytics?.byType?.FORM_CHANGE || 0}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--iium-text-secondary)' }}>Report Change</span>
                <span style={{ fontWeight: 700 }}>{analytics?.byType?.REPORT_CHANGE || 0}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--iium-text-secondary)' }}>Workflow Improvement</span>
                <span style={{ fontWeight: 700 }}>{analytics?.byType?.WORKFLOW_IMPROVEMENT || 0}</span>
              </div>
            </div>
          </Card>

          {/* By Urgency */}
          <Card>
            <span className="brand-label">By Urgency</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '24px', marginTop: '16px' }}>
              Priority Levels
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--iium-text-secondary)' }}>High Priority</span>
                <span style={{ fontWeight: 700, color: '#ff4d4d' }}>{analytics?.byUrgency?.HIGH || 0}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--iium-text-secondary)' }}>Medium Priority</span>
                <span style={{ fontWeight: 700, color: 'var(--iium-gold)' }}>{analytics?.byUrgency?.MEDIUM || 0}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--iium-text-secondary)' }}>Low Priority</span>
                <span style={{ fontWeight: 700, color: 'var(--iium-text-muted)' }}>{analytics?.byUrgency?.LOW || 0}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card style={{ marginTop: '48px' }}>
          <span className="brand-label">Quick Actions</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', marginBottom: '24px', marginTop: '16px' }}>
            Management
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="default">View All Requests</Button>
            <Button variant="secondary">User Management</Button>
            <Button variant="ghost">Export Reports</Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
