import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RequestCard } from '../components/RequestCard';
import { DashboardLayout } from '../components/DashboardLayout';

interface Request {
  id: string;
  referenceNumber: string;
  title: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  assignedTo?: {
    id: string;
    name: string;
    avatar?: string;
  } | null;
  createdAt: string;
}

export default function HandlerDashboard() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('HandlerDashboard mounted');

    // Check if user is logged in
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      console.log('No user found, redirecting to login');
      navigate('/login');
      return;
    }

    const user = JSON.parse(userStr);
    console.log('User found:', user);
    if (user.role !== 'HANDLER' && user.role !== 'ADMIN') {
      console.log('User not authorized for handler dashboard, redirecting to login');
      navigate('/login');
      return;
    }

    console.log('User authorized, fetching requests');
    fetchRequests();
  }, [navigate]);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('http://localhost:3001/api/v1/requests', {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 401) {
        // Token expired or invalid, redirect to login
        localStorage.removeItem('user');
        navigate('/login');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch requests');
      }

      const data = await response.json();
      setRequests(data.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="dls-container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        {/* Page Header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <span style={{
                fontSize: '12px',
                fontWeight: '700',
                color: 'var(--iium-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '8px',
                display: 'block',
                fontFamily: 'Barlow Condensed, sans-serif',
              }}>
                Handler Dashboard
              </span>
              <h2 style={{
                fontFamily: 'Roboto Slab, serif',
                fontSize: '42px',
                fontWeight: '700',
                marginBottom: '8px',
                marginTop: '4px',
                color: 'var(--iium-text-primary)',
              }}>
                All Requests
              </h2>
              <p style={{ color: 'var(--iium-text-secondary)', fontSize: '16px', fontFamily: 'Inter, sans-serif' }}>
                View and manage all software change requests
              </p>
            </div>
            {!loading && !error && requests.length > 0 && (
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{
                  textAlign: 'center',
                  padding: '16px 24px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--iium-glass)',
                  border: '1px solid var(--iium-border-subtle)',
                  minWidth: '100px',
                }}>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    color: 'var(--iium-turquoise)',
                    fontFamily: 'Roboto Slab, serif',
                  }}>
                    {requests.length}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'var(--iium-text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: '600',
                    fontFamily: 'Inter, sans-serif',
                  }}>
                    Total
                  </div>
                </div>
                <div style={{
                  textAlign: 'center',
                  padding: '16px 24px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(251, 191, 36, 0.15)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  minWidth: '100px',
                }}>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    color: '#92400E',
                    fontFamily: 'Roboto Slab, serif',
                  }}>
                    {requests.filter(r => r.priority === 'high').length}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#92400E',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: '600',
                    fontFamily: 'Inter, sans-serif',
                  }}>
                    High Priority
                  </div>
                </div>
                <div style={{
                  textAlign: 'center',
                  padding: '16px 24px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  minWidth: '100px',
                }}>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    color: '#065F46',
                    fontFamily: 'Roboto Slab, serif',
                  }}>
                    {requests.filter(r => r.status === 'open').length}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#065F46',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: '600',
                    fontFamily: 'Inter, sans-serif',
                  }}>
                    Open
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px', animation: 'spin 1s linear infinite' }}>⟳</div>
            <p style={{ color: 'var(--iium-text-muted)', fontSize: '16px' }}>Loading requests...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div
            style={{
              padding: '20px',
              borderRadius: 'var(--iium-radius-sm)',
              backgroundColor: 'rgba(255, 77, 77, 0.1)',
              border: '1px solid rgba(255, 77, 77, 0.3)',
              color: '#ff4d4d',
              marginBottom: '24px',
            }}
          >
            {error}
          </div>
        )}

        {/* Requests Grid */}
        {!loading && !error && (
          <>
            {requests.length === 0 ? (
              <div
                className="iium-card"
                style={{
                  textAlign: 'center',
                  padding: '80px 40px',
                  maxWidth: '500px',
                  margin: '0 auto'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 24px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--iium-glass)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '40px'
                }}>
                  📋
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: '12px',
                    color: 'var(--iium-text-primary)'
                  }}
                >
                  No Requests Yet
                </h3>
                <p style={{ color: 'var(--iium-text-secondary)', fontSize: '16px', lineHeight: '1.6' }}>
                  No change requests have been submitted yet. Check back later or wait for team members to submit requests.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '24px',
                  alignItems: 'start'
                }}
                className="requests-grid"
              >
                {requests.map((request) => (
                  <RequestCard
                    key={request.id}
                    id={request.id}
                    referenceNumber={request.referenceNumber}
                    title={request.title}
                    status={request.status}
                    priority={request.priority}
                    assignedTo={request.assignedTo}
                    createdAt={request.createdAt}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Responsive Styles & Animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .requests-grid {
          animation: fadeInUp 0.5s ease-out;
        }

        @media (max-width: 1024px) {
          .requests-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .requests-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </DashboardLayout>
  );
}
