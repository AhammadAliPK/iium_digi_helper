import * as React from 'react';
import { cn } from '../../lib/utils';

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
}

const statusStyles = {
  open: 'bg-gray-50 text-gray-700 border-gray-200',
  in_progress: 'bg-blue-50 text-blue-700 border-blue-200',
  resolved: 'bg-green-50 text-green-700 border-green-200',
  closed: 'bg-gray-100 text-gray-600 border-gray-300',
};

const statusLabels = {
  open: 'Open',
  in_progress: 'In Progress',
  resolved: 'Resolved',
  closed: 'Closed',
};

const StatusBadge = React.forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ status, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
          statusStyles[status],
          className
        )}
        {...props}
      >
        {statusLabels[status]}
      </span>
    );
  }
);

StatusBadge.displayName = 'StatusBadge';

export { StatusBadge };
