// Database enums and base types
export enum UserRole {
  STUDENT = 'STUDENT',
  NURSE = 'NURSE',
  SUPERVISOR = 'SUPERVISOR',
  MEDICAL_EXPERT = 'MEDICAL_EXPERT',
  ADMIN = 'ADMIN'
}

export enum ScenarioDifficulty {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
  EXPERT = 'EXPERT'
}

export enum SessionStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export enum TimeFlowMode {
  REAL_TIME = 'REAL_TIME',
  ACCELERATED = 'ACCELERATED',
  PAUSED = 'PAUSED'
}

export enum ActionStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED'
}

export enum EventPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum AssessmentType {
  FORMATIVE = 'FORMATIVE',
  SUMMATIVE = 'SUMMATIVE'
}

export enum EmotionalState {
  CALM = 'CALM',
  ANXIOUS = 'ANXIOUS',
  COOPERATIVE = 'COOPERATIVE',
  RESISTANT = 'RESISTANT',
  DISTRESSED = 'DISTRESSED',
  ANGRY = 'ANGRY',
  CONFUSED = 'CONFUSED'
}

export enum AuthenticationProvider {
  LOCAL = 'LOCAL',
  INSTITUTIONAL = 'INSTITUTIONAL',
  OAUTH_GOOGLE = 'OAUTH_GOOGLE',
  OAUTH_MICROSOFT = 'OAUTH_MICROSOFT'
}

// Base interfaces matching Prisma schema
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  specialization?: string;
  licenseNumber?: string;
  institutionId?: string;
  authProvider: AuthenticationProvider;
  externalId?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
}

export interface Institution {
  id: string;
  name: string;
  domain?: string;
  isActive: boolean;
  createdAt: Date;
}

export enum InterventionType {
  PREVENTIVE = 'PREVENTIVE',
  CORRECTIVE = 'CORRECTIVE',
  ENHANCEMENT = 'ENHANCEMENT'
}