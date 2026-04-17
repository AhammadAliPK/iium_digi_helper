// Shared TypeScript types
// This will contain shared types used across the monorepo

export interface IUser {
  id: string;
  email: string;
  name: string;
  department: string;
  role: 'REQUESTER' | 'HANDLER' | 'ADMIN';
  created_at: Date;
  updated_at: Date;
}

export interface IRequest {
  id: string;
  request_number: string;
  user_id: string;
  request_type: 'BUG' | 'ENHANCEMENT' | 'FORM_CHANGE' | 'REPORT_CHANGE' | 'WORKFLOW_IMPROVEMENT';
  urgency: 'LOW' | 'MEDIUM' | 'HIGH';
  system_affected: string;
  title: string;
  description: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  created_at: Date;
  updated_at: Date;
}
