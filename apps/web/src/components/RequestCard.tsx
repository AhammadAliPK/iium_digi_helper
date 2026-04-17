import { useNavigate } from 'react-router-dom';

export interface RequestCardProps {
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

const getStatusConfig = (status: string) => {
  const configs = {
    open: {
      label: 'Open',
      backgroundColor: 'rgba(251, 191, 36, 0.15)',
      color: '#92400E',
      borderColor: 'rgba(251, 191, 36, 0.3)',
    },
    in_progress: {
      label: 'In Progress',
      backgroundColor: 'rgba(59, 130, 246, 0.15)',
      color: '#1E40AF',
      borderColor: 'rgba(59, 130, 246, 0.3)',
    },
    resolved: {
      label: 'Resolved',
      backgroundColor: 'rgba(34, 197, 94, 0.15)',
      color: '#065F46',
      borderColor: 'rgba(34, 197, 94, 0.3)',
    },
    closed: {
      label: 'Closed',
      backgroundColor: 'rgba(156, 163, 175, 0.15)',
      color: '#4B5563',
      borderColor: 'rgba(156, 163, 175, 0.3)',
    },
  };
  return configs[status as keyof typeof configs] || configs.open;
};

const getPriorityConfig = (priority: string) => {
  const configs = {
    low: {
      label: 'Low',
      backgroundColor: 'rgba(156, 163, 175, 0.1)',
      color: '#6B7280',
      borderColor: 'rgba(156, 163, 175, 0.2)',
    },
    medium: {
      label: 'Medium',
      backgroundColor: 'rgba(251, 191, 36, 0.15)',
      color: '#92400E',
      borderColor: 'rgba(251, 191, 36, 0.3)',
    },
    high: {
      label: 'High',
      backgroundColor: 'rgba(251, 146, 60, 0.15)',
      color: '#9A3412',
      borderColor: 'rgba(251, 146, 60, 0.3)',
    },
  };
  return configs[priority as keyof typeof configs] || configs.low;
};

export function RequestCard({
  id,
  referenceNumber,
  title,
  status,
  priority,
  assignedTo,
  createdAt,
}: RequestCardProps) {
  const navigate = useNavigate();
  const statusConfig = getStatusConfig(status);
  const priorityConfig = getPriorityConfig(priority);

  const getTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const interval = Math.floor(seconds / secondsInUnit);
      if (interval >= 1) {
        return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
      }
    }
    return 'Just now';
  };

  return (
    <div
      onClick={() => navigate(`/requests/${id}`)}
      style={{
        backgroundColor: 'var(--iium-surface-raised)',
        border: '1px solid var(--iium-border-subtle)',
        borderRadius: '12px',
        padding: '20px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 146, 143, 0.15)';
        e.currentTarget.style.borderColor = 'rgba(0, 146, 143, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.borderColor = 'var(--iium-border-subtle)';
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <span style={{
          fontSize: '12px',
          fontWeight: '600',
          color: 'var(--iium-turquoise)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          fontFamily: 'Roboto Slab, serif',
        }}>
          {referenceNumber}
        </span>
        <span style={{
          fontSize: '11px',
          fontWeight: '600',
          padding: '4px 10px',
          borderRadius: '20px',
          backgroundColor: priorityConfig.backgroundColor,
          color: priorityConfig.color,
          border: `1px solid ${priorityConfig.borderColor}`,
          textTransform: 'uppercase',
          letterSpacing: '0.03em',
        }}>
          {priorityConfig.label}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '16px',
        fontWeight: '700',
        color: 'var(--iium-text-primary)',
        fontFamily: 'Roboto Slab, serif',
        marginBottom: '16px',
        lineHeight: '1.4',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        minHeight: '44px',
      }}>
        {title}
      </h3>

      {/* Status Badge */}
      <div style={{ marginBottom: '16px' }}>
        <span style={{
          fontSize: '12px',
          fontWeight: '600',
          padding: '6px 12px',
          borderRadius: '20px',
          backgroundColor: statusConfig.backgroundColor,
          color: statusConfig.color,
          border: `1px solid ${statusConfig.borderColor}`,
          display: 'inline-block',
          textTransform: 'uppercase',
          letterSpacing: '0.03em',
        }}>
          {statusConfig.label}
        </span>
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '16px',
        marginTop: 'auto',
        borderTop: '1px solid var(--iium-border-subtle)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {assignedTo ? (
            <>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--iium-turquoise)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: '700',
                fontFamily: 'Inter, sans-serif',
              }}>
                {assignedTo.name.charAt(0).toUpperCase()}
              </div>
              <span style={{ fontSize: '13px', color: 'var(--iium-text-secondary)', fontFamily: 'Inter, sans-serif' }}>
                {assignedTo.name.split(' ')[0]}
              </span>
            </>
          ) : (
            <span style={{
              fontSize: '13px',
              color: 'var(--iium-text-muted)',
              fontStyle: 'italic',
              fontFamily: 'Inter, sans-serif',
            }}>
              Unassigned
            </span>
          )}
        </div>
        <span style={{ fontSize: '12px', color: 'var(--iium-text-muted)', fontFamily: 'Inter, sans-serif' }}>
          {getTimeAgo(createdAt)}
        </span>
      </div>
    </div>
  );
}
