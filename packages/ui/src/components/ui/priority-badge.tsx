import * as React from 'react';
import { cn } from '../../lib/utils';

export interface PriorityBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  priority: 'low' | 'medium' | 'high';
}

const priorityStyles = {
  low: 'bg-gray-50 text-gray-600 border-gray-200',
  medium: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  high: 'bg-orange-50 text-orange-700 border-orange-200',
};

const priorityLabels = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
};

const PriorityBadge = React.forwardRef<HTMLSpanElement, PriorityBadgeProps>(
  ({ priority, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
          priorityStyles[priority],
          className
        )}
        {...props}
      >
        {priorityLabels[priority]}
      </span>
    );
  }
);

PriorityBadge.displayName = 'PriorityBadge';

export { PriorityBadge };
