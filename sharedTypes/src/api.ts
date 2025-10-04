// API request/response types
import { 
  User, 
  ScenarioDifficulty,
  AssessmentType,
  EventPriority,
  EmotionalState, 
  TimeFlowMode,
  UserRole
} from './database';
import { ConversationAnalysis, ConversationContext, ConversationTurn, PromptTemplateType } from './llm';
import { 
  MedicalScenario, 
  ScenarioSession, 
  PatientState,
  TimeEvent, 
  VitalSigns
} from './simulation';
import { Request as ExpressRequest } from 'express';

// Add missing interface
// export interface ConversationContext {
//   patientState: PatientState;
//   medicalHistory: string;
//   conversationHistory: Message[];
//   emotionalState: EmotionalState;
//   educationalObjectives: string[];
// }

export interface Message {
  role: 'user' | 'patient';
  content: string;
  timestamp: Date;
}

// Authentication
export interface LoginRequest {
  email: string;
  password: string;
  institutionCode?: string;
}

export interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
}

// Scenarios
export interface ScenarioListRequest {
  difficulty?: ScenarioDifficulty;
  specialty?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface ScenarioListResponse {
  scenarios: MedicalScenario[];
  total: number;
  page: number;
  totalPages: number;
}

// Sessions
export interface StartSessionRequest {
  scenarioId: string;
  assessmentType: AssessmentType;
}

export interface StartSessionResponse {
  session: ScenarioSession;
  patientState: PatientState;
}

// Orders
export interface MedicationOrderRequest {
  drugId: string;
  dosage: string;
  route: string;
  frequency: string;
  duration?: string;
  indication: string;
}

export interface ProcedureOrderRequest {
  procedureId: string;
  indication: string;
  location?: string;
  urgency: EventPriority;
}

export interface LabOrderRequest {
  testId: string;
  indication: string;
  urgency: EventPriority;
  statOrder?: boolean;
}

export interface ImagingOrderRequest {
  studyId: string;
  indication: string;
  bodyPart: string;
  urgency: EventPriority;
  statOrder?: boolean;
}

export interface ExamOrderRequest {
  examId: string;
  indication: string;
  bodyPart?: string;
}

// Time management
export interface FastForwardRequest {
  virtualMinutes: number;
  stopOnEvents: boolean;
}

export interface TimeStateResponse {
  currentVirtualTime: Date;
  timeFlowMode: TimeFlowMode;
  totalVirtualTimeElapsed: number;
  totalRealTimeElapsed: number;
  nextScheduledEvent?: Date;
  pendingInterruptions: TimeEvent[];
}

// Real-time updates
export interface SessionUpdate {
  type: 'vital_signs' | 'patient_state' | 'order_update' | 'event_triggered';
  data: any;
  timestamp: Date;
  virtualTimestamp: Date;
}

// LLM Conversation
export interface PatientQuestionRequest {
  question: string;
  context?: ConversationContext;
}

export interface PatientQuestionResponse {
  response: string;
  emotionalState: EmotionalState;
  vitalSignChanges?: VitalSigns;
  triggeredEvents?: string[];
}
// LLM Management
export interface LLMHealthCheckResponse {
  status: 'healthy' | 'unhealthy';
  activeModel: string;
  availableModels: string[];
  responseTime: number;
}

export interface SwitchModelRequest {
  model: string;
}

export interface ConversationAnalysisRequest {
  sessionId: string;
  conversationHistory: ConversationTurn[];
}

export interface ConversationAnalysisResponse {
  analysis: ConversationAnalysis;
  suggestions: string[];
  learningGaps: string[];
}

// Prompt management
export interface GeneratePromptRequest {
  templateType: PromptTemplateType;
  variables: Record<string, any>;
  context: Partial<ConversationContext>;
}

export interface GeneratePromptResponse {
  prompt: string;
  variablesUsed: string[];
  estimatedTokens: number;
}

// Extend Express Request if you have custom properties
export interface CustomRequest extends ExpressRequest {
  user?: {
    id: string;
    role: UserRole;
    email: string;
  };
}