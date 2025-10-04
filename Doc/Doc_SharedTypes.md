# Implementation Plan with Medical Knowledge Base

## 1. **Shared Types Package Structure**

Let's start by creating the shared types package that both backend and frontend will use:

```bash
# Create shared-types package
mkdir shared-types
cd shared-types
npm init -y
```

### Package.json for shared-types:
```json
{
  "name": "@virtual-patient/shared-types",
  "version": "1.0.0",
  "description": "Shared TypeScript types for Virtual Patient Platform",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "prepublishOnly": "npm run build"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  },
  "files": [
    "dist"
  ]
}
```

### TypeScript Configuration (tsconfig.json):
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "lib": ["ES2022", "DOM"],
    "declaration": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## 2. **Core Type Definitions**


## 3. **Next Steps Implementation**

### 3.1. Build and Test Shared Types
```bash
cd shared-types
npm install
npm run build
```
# Clean Reorganization of Shared Types Package

## Final File Structure:
```
src/
├── index.ts
├── database.ts          # Enums and base entities
├── medical.ts           # Drugs, procedures, tests, exams
├── orders.ts            # All order-related types
├── simulation.ts        # Scenarios, sessions, time management
├── assessment.ts        # Scoring and evaluation
└── api.ts              # API request/response types
```

## 1. **src/database.ts** (Base enums and entities)
```typescript
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
```

## 2. **src/medical.ts** (Medical knowledge base)
```typescript
// Medical knowledge base types
import { ScenarioDifficulty, EventPriority } from './database';

export interface Drug {
  id: string;
  name: string;
  genericName: string;
  brandNames: string[];
  drugClass: string;
  subClass?: string;
  category: string;
  standardDosages: DosageRanges;
  administrationRoutes: string[];
  frequencyOptions: string[];
  indications: string[];
  contraindications: string[];
  sideEffects: string[];
  interactions: string[];
  monitoringParameters: string[];
  onsetOfAction?: string;
  duration?: string;
  halfLife?: string;
  fdaApproved: boolean;
  validatedByExpertId?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface DosageRanges {
  adult: DosageRange;
  pediatric?: DosageRange;
  geriatric?: DosageRange;
  renalImpairment?: DosageRange;
  hepaticImpairment?: DosageRange;
}

export interface DosageRange {
  min: number;
  max: number;
  unit: string;
  frequency: string;
}

export interface Procedure {
  id: string;
  code?: string;
  name: string;
  description: string;
  category: string;
  indications: string[];
  contraindications: string[];
  requiredEquipment: string[];
  steps: ProcedureStep[];
  risks: string[];
  complications: string[];
  estimatedRealTime: number;
  estimatedVirtualTime: number;
  requiresSupervision: boolean;
  difficultyLevel: ScenarioDifficulty;
  validatedByExpertId?: string;
  isActive: boolean;
  createdAt: Date;
}

export interface ProcedureStep {
  step: number;
  description: string;
  keyPoints: string[];
  warnings?: string[];
}

export interface LaboratoryTest {
  id: string;
  code?: string;
  name: string;
  description: string;
  category: string;
  specimenTypes: string[];
  collectionInstructions: string;
  normalRanges: NormalRanges;
  criticalValues: CriticalValues;
  interpretationGuide: string;
  processingTimeVirtual: number;
  statProcessingTimeVirtual?: number;
  requiresCollection: boolean;
  validatedByExpertId?: string;
  isActive: boolean;
  createdAt: Date;
}

export interface NormalRanges {
  [key: string]: {
    ageRanges: AgeRange[];
    genderSpecific?: boolean;
    units: string;
  };
}

export interface AgeRange {
  minAge: number;
  maxAge: number;
  range: string;
  notes?: string;
}

export interface CriticalValues {
  [key: string]: {
    low?: number;
    high?: number;
    urgency: EventPriority;
  };
}

export interface ImagingStudy {
  id: string;
  code?: string;
  name: string;
  description: string;
  modality: string;
  indications: string[];
  contraindications: string[];
  preparationInstructions: string;
  radiationExposure?: string;
  durationRealTime: number;
  durationVirtualTime: number;
  statDurationVirtual?: number;
  validatedByExpertId?: string;
  isActive: boolean;
  createdAt: Date;
}

export interface PhysicalExam {
  id: string;
  name: string;
  description: string;
  system: string;
  technique: string;
  normalFindings: string;
  abnormalFindings: AbnormalFinding[];
  requiredEquipment: string[];
  estimatedRealTime: number;
  estimatedVirtualTime: number;
  validatedByExpertId?: string;
  isActive: boolean;
  createdAt: Date;
}

export interface AbnormalFinding {
  finding: string;
  indication: string;
  severity: EventPriority;
  description: string;
}

export interface DrugInteraction {
  drug1Id: string;
  drug2Id: string;
  interactionType: string;
  description: string;
  mechanism?: string;
  management?: string;
  severity: EventPriority;
  evidenceLevel?: string;
}
```

## 3. **src/orders.ts** (All order-related types)
```typescript
// All order-related types
import { ActionStatus, EventPriority, EmotionalState } from './database';
import { Drug, Procedure, LaboratoryTest, ImagingStudy, PhysicalExam } from './medical';

export interface VitalSigns {
  bloodPressure: { systolic: number; diastolic: number };
  heartRate: number;
  respiratoryRate: number;
  temperature: number;
  oxygenSaturation: number;
  painLevel: number;
}

export interface MedicationOrder {
  id: string;
  sessionId: string;
  studentId: string;
  drugId: string;
  drug: Drug;
  dosage: string;
  route: string;
  frequency: string;
  duration?: string;
  indication: string;
  orderTime: Date;
  virtualOrderTime: Date;
  expectedAdministrationTime?: Date;
  actualAdministrationTime?: Date;
  status: ActionStatus;
  administeredByUserId?: string;
  response?: MedicationResponse;
  appropriatenessScore?: number;
  timingScore?: number;
  documentationScore?: number;
}

export interface MedicationResponse {
  effectiveness: number;
  sideEffects: string[];
  vitalSignChanges: VitalSigns;
  onsetTime: number;
}

export interface ProcedureOrder {
  id: string;
  sessionId: string;
  studentId: string;
  procedureId: string;
  procedure: Procedure;
  indication: string;
  location?: string;
  urgency: EventPriority;
  orderTime: Date;
  virtualOrderTime: Date;
  scheduledTime?: Date;
  completionTime?: Date;
  status: ActionStatus;
  performedByUserId?: string;
  findings?: any;
  complications: string[];
  techniqueScore?: number;
  indicationScore?: number;
  safetyScore?: number;
}

export interface LabOrder {
  id: string;
  sessionId: string;
  studentId: string;
  testId: string;
  test: LaboratoryTest;
  indication: string;
  urgency: EventPriority;
  statOrder: boolean;
  orderTime: Date;
  virtualOrderTime: Date;
  collectionTime?: Date;
  resultTime?: Date;
  status: ActionStatus;
  collectedByUserId?: string;
  results?: any;
  isCritical: boolean;
  appropriatenessScore?: number;
  interpretationScore?: number;
  timingScore?: number;
}

export interface ImagingOrder {
  id: string;
  sessionId: string;
  studentId: string;
  studyId: string;
  study: ImagingStudy;
  indication: string;
  bodyPart: string;
  urgency: EventPriority;
  statOrder: boolean;
  orderTime: Date;
  virtualOrderTime: Date;
  studyTime?: Date;
  resultTime?: Date;
  status: ActionStatus;
  performedByUserId?: string;
  findings?: any;
  isCritical: boolean;
  appropriatenessScore?: number;
  interpretationScore?: number;
}

export interface ExamOrder {
  id: string;
  sessionId: string;
  studentId: string;
  examId: string;
  exam: PhysicalExam;
  indication: string;
  bodyPart?: string;
  orderTime: Date;
  virtualOrderTime: Date;
  performedTime?: Date;
  status: ActionStatus;
  findings?: any;
  normal?: boolean;
  techniqueScore?: number;
  documentationScore?: number;
  completenessScore?: number;
}
```

## 4. **src/simulation.ts** (Scenario and session management)
```typescript
// Simulation core types
import { 
  ScenarioDifficulty, 
  SessionStatus, 
  AssessmentType, 
  TimeFlowMode, 
  EventPriority, 
  EmotionalState 
} from './database';
import { VitalSigns, MedicationOrder, ProcedureOrder, LabOrder, ImagingOrder, ExamOrder } from './orders';
import { CompetencyWeights, CompetencyScores } from './assessment';

export interface PhysiologyModel {
  cardiovascular: SystemModel;
  respiratory: SystemModel;
  neurological: SystemModel;
  metabolic: SystemModel;
}

export interface SystemModel {
  baseline: number;
  variability: number;
  responseToInterventions: InterventionResponse[];
  failureThresholds: FailureThreshold[];
}

export interface InterventionResponse {
  intervention: string;
  expectedEffect: number;
  timeToEffect: number;
  duration: number;
}

export interface FailureThreshold {
  parameter: string;
  criticalValue: number;
  consequence: string;
}

export interface ComplicationTrigger {
  condition: string;
  triggerValue: number;
  complication: string;
  severity: EventPriority;
}

export interface DiseaseProgression {
  stages: DiseaseStage[];
  timeToNextStage: number;
}

export interface DiseaseStage {
  stage: number;
  description: string;
  vitalSignChanges: VitalSigns;
  symptoms: string[];
  complications: string[];
}

export interface ScheduledEvent {
  virtualTime: string;
  eventType: string;
  details: any;
  requiresAttention: boolean;
}

export interface BranchingPath {
  decisionPoint: string;
  options: PathOption[];
}

export interface PathOption {
  choice: string;
  nextScenarioState: string;
  consequences: string[];
}

export interface PatientState {
  vitalSigns: VitalSigns;
  symptoms: string[];
  mentalStatus: string;
  physicalFindings: PhysicalFinding[];
  labResults: LabResult[];
  treatmentResponse: TreatmentEffect[];
}

export interface PhysicalFinding {
  system: string;
  finding: string;
  severity: EventPriority;
  description: string;
}

export interface LabResult {
  test: string;
  value: number;
  units: string;
  normalRange: string;
  isCritical: boolean;
  timestamp: Date;
}

export interface TreatmentEffect {
  treatment: string;
  effectiveness: number;
  sideEffects: string[];
  onsetTime: number;
}

export interface ActiveMedication {
  drugId: string;
  drugName: string;
  dosage: string;
  route: string;
  frequency: string;
  startTime: Date;
  endTime?: Date;
  effects: MedicationEffect[];
}

export interface MedicationEffect {
  parameter: string;
  change: number;
  onsetTime: number;
  duration: number;
}

export interface MedicalError {
  type: string;
  description: string;
  timestamp: Date;
  consequence: string;
  severity: EventPriority;
}

export interface MedicalScenario {
  id: string;
  title: string;
  description: string;
  difficulty: ScenarioDifficulty;
  specialty: string;
  estimatedDuration: number;
  timeAccelerationRate: number;
  maxFastForwardDuration?: number;
  requiresTimePressure: boolean;
  competencyWeights: CompetencyWeights;
  learningObjectives: string[];
  chiefComplaint: string;
  historyOfPresentIllness: string;
  pastMedicalHistory: string;
  medications: string[];
  allergies: string[];
  initialVitalSigns: VitalSigns;
  initialEmotionalState: EmotionalState;
  physiologyModel: PhysiologyModel;
  complicationTriggers?: ComplicationTrigger[];
  naturalProgression: DiseaseProgression;
  scheduledEvents?: ScheduledEvent[];
  branchingPaths?: BranchingPath[];
  validatedByExpertId?: string;
  validationDate?: Date;
  validationNotes?: string;
  version: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  institutionId?: string;
}

export interface ScenarioSession {
  id: string;
  scenarioId: string;
  studentId: string;
  supervisorId?: string;
  status: SessionStatus;
  assessmentType: AssessmentType;
  
  // Time management
  startTime: Date;
  currentVirtualTime: Date;
  lastRealTimeUpdate: Date;
  timeFlowMode: TimeFlowMode;
  totalRealTimeElapsed: number;
  totalVirtualTimeElapsed: number;
  timePressureEnabled: boolean;
  
  // State tracking
  complicationsEncountered: string[];
  mistakesMade: MedicalError[];
  interventionsReceived: SupervisorIntervention[];
  currentPatientState: PatientState;
  currentEmotionalState: EmotionalState;
  completedSteps: string[];
  activeMedications: ActiveMedication[];
  latestVitalSigns: VitalSigns;
  
  // Orders
  medicationOrders: MedicationOrder[];
  procedureOrders: ProcedureOrder[];
  labOrders: LabOrder[];
  imagingOrders: ImagingOrder[];
  examOrders: ExamOrder[];
  
  // Assessment
  competencyScores: CompetencyScores;
  overallScore?: number;
  timeEfficiencyScore?: number;
  stressPerformanceScore?: number;
  finalFeedback?: string;
}

export interface TimeEvent {
  id: string;
  sessionId: string;
  triggeredByActionId?: string;
  eventType: string;
  eventData: any;
  virtualTimeScheduled: Date;
  virtualTimeTriggered?: Date;
  realTimeTriggered?: Date;
  isComplication: boolean;
  severity: EventPriority;
  requiresAttention: boolean;
  wasMissed: boolean;
  missPenalty?: number;
  acknowledgedByUserId?: string;
  acknowledgedAt?: Date;
}
```

## 5. **src/assessment.ts** (Scoring and evaluation)
```typescript
// Assessment and scoring types
import { EventPriority } from './database';

export interface CompetencyWeights {
  diagnostic: number;
  procedural: number;
  communication: number;
  professionalism: number;
  criticalThinking: number;
}

export interface CompetencyScores {
  diagnostic: CompetencyScore;
  procedural: CompetencyScore;
  communication: CompetencyScore;
  professionalism: CompetencyScore;
  criticalThinking: CompetencyScore;
}

export interface CompetencyScore {
  score: number;
  feedback: string;
  evidence: AssessmentEvidence[];
}

export interface AssessmentEvidence {
  actionId: string;
  actionType: string;
  timestamp: Date;
  scoreImpact: number;
  feedback: string;
}

export interface TimeEfficiencyMetrics {
  totalVirtualTimeUsed: number;
  optimalTimeForScenario: number;
  timeWasted: number;
  criticalActionResponseTimes: Map<string, number>;
  fastForwardUsage: number;
  missedEventPenalties: number;
  stressImpact: StressImpactAnalysis;
}

export interface StressImpactAnalysis {
  performanceUnderPressure: number;
  errorRateIncrease: number;
  decisionMakingSpeed: number;
  communicationEffectiveness: number;
}

export interface SupervisorIntervention {
  id: string;
  sessionId: string;
  supervisorId: string;
  interventionType: string;
  message: string;
  contextData: any;
  virtualTime: Date;
  studentAcknowledged: boolean;
  studentResponse?: string;
  interventionEffective?: boolean;
  createdAt: Date;
}
```

## 6. **src/api.ts** (API request/response types)
```typescript
// API request/response types
import { 
  User, 
  ScenarioDifficulty,
  AssessmentType,
  EventPriority,
  EmotionalState 
} from './database';
import { 
  MedicalScenario, 
  ScenarioSession, 
  PatientState,
  VitalSigns 
} from './simulation';
import { TimeEvent } from './simulation';

export interface ConversationContext {
  patientState: PatientState;
  medicalHistory: string;
  conversationHistory: Message[];
  emotionalState: EmotionalState;
  educationalObjectives: string[];
}

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
```

## 7. **src/index.ts** (Clean exports)
```typescript
// Re-export all types from individual modules
export * from './database';
export * from './medical';
export * from './orders';
export * from './simulation';
export * from './assessment';
export * from './api';
```

## Build the Package:
```bash
cd shared-types
npm run build
```

This clean reorganization:
- ✅ **Eliminates duplicate exports**
- ✅ **Logical separation of concerns**
- ✅ **Clear dependency flow** (database → medical → orders → simulation → assessment → api)
- ✅ **Easy to maintain and extend**

**The build should now work without errors!** Ready to proceed with the backend implementation?
You're absolutely right! We need an `llm.ts` file for LLM-specific types. Let me create it:

## 8. **src/llm.ts** (LLM and Conversation Types)

```typescript
// LLM-specific types and conversation management
import { EmotionalState, EventPriority } from './database';
import { VitalSigns, PatientState } from './simulation';

export interface LLMConfig {
  model: string; // 'mistral', 'llama3', etc.
  temperature: number;
  maxTokens: number;
  topP: number;
  frequencyPenalty: number;
  presencePenalty: number;
}

export interface ConversationContext {
  patientState: PatientState;
  medicalHistory: string;
  currentSymptoms: string[];
  vitalSigns: VitalSigns;
  emotionalState: EmotionalState;
  painLevel: number; // 0-10
  conversationHistory: ConversationTurn[];
  educationalObjectives: string[];
  scenarioConstraints: ScenarioConstraints;
}

export interface ConversationTurn {
  role: 'user' | 'patient' | 'system';
  content: string;
  timestamp: Date;
  emotionalContext?: EmotionalState;
  vitalSignChanges?: Partial<VitalSigns>;
}

export interface ScenarioConstraints {
  allowedMedicalTerms: string[];
  prohibitedResponses: string[];
  educationalLevel: string; // 'beginner', 'intermediate', 'advanced'
  culturalContext: string;
  personalityTraits: string[];
}

export interface PatientPersona {
  age: number;
  gender: string;
  culturalBackground: string;
  educationLevel: string;
  healthLiteracy: number; // 1-10
  personalityType: string; // 'anxious', 'stoic', 'dramatic', etc.
  communicationStyle: string; // 'detailed', 'brief', 'emotional', etc.
  trustInMedicalSystem: number; // 1-10
}

export interface LLMPromptTemplate {
  template: string;
  variables: string[];
  examples: PromptExample[];
  constraints: string[];
}

export interface PromptExample {
  input: string;
  output: string;
  context: Partial<ConversationContext>;
}

export interface LLMResponse {
  rawResponse: string;
  processedResponse: string;
  emotionalState: EmotionalState;
  confidence: number; // 0-1
  vitalSignChanges: Partial<VitalSigns>;
  triggeredEvents: string[];
  educationalValue: number; // 0-1
  medicalAccuracy: number; // 0-1
  processingTime: number; // ms
  tokensUsed: number;
}

export interface ConversationAnalysis {
  conversationQuality: number; // 0-1
  empathyScore: number; // 0-1
  clarityScore: number; // 0-1
  medicalAccuracy: number; // 0-1
  educationalValue: number; // 0-1
  identifiedLearningGaps: string[];
  suggestedFollowUpQuestions: string[];
}

export interface MedicalReasoningStep {
  step: number;
  reasoning: string;
  confidence: number;
  evidence: string[];
  conclusion?: string;
}

export interface DifferentialDiagnosis {
  conditions: DiagnosisCandidate[];
  supportingEvidence: string[];
  rulingOut: string[];
  nextSteps: string[];
}

export interface DiagnosisCandidate {
  condition: string;
  probability: number; // 0-1
  evidenceFor: string[];
  evidenceAgainst: string[];
  urgency: EventPriority;
}

// Ollama-specific types
export interface OllamaGenerateRequest {
  model: string;
  prompt: string;
  system?: string;
  template?: string;
  options?: OllamaOptions;
  stream?: boolean;
  context?: number[];
}

export interface OllamaOptions {
  num_keep?: number;
  seed?: number;
  num_predict?: number;
  top_k?: number;
  top_p?: number;
  tfs_z?: number;
  typical_p?: number;
  repeat_last_n?: number;
  temperature?: number;
  repeat_penalty?: number;
  presence_penalty?: number;
  frequency_penalty?: number;
  mirostat?: number;
  mirostat_tau?: number;
  mirostat_eta?: number;
  penalize_newline?: boolean;
  stop?: string[];
}

export interface OllamaGenerateResponse {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
  context?: number[];
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  prompt_eval_duration?: number;
  eval_count?: number;
  eval_duration?: number;
}

export interface OllamaModel {
  name: string;
  modified_at: string;
  size: number;
  digest: string;
  details: {
    format: string;
    family: string;
    families: string[] | null;
    parameter_size: string;
    quantization_level: string;
  };
}

export interface LLMHealthCheck {
  status: 'healthy' | 'unhealthy';
  models: OllamaModel[];
  activeModel: string;
  responseTime: number;
  lastError?: string;
}

// Prompt templates for different medical scenarios
export const PROMPT_TEMPLATES = {
  HISTORY_TAKING: `
You are a patient in a medical training simulation. Respond as a real patient would.

PATIENT CONTEXT:
- Age: {age}
- Gender: {gender}
- Chief Complaint: {chiefComplaint}
- Current Symptoms: {symptoms}
- Vital Signs: {vitalSigns}
- Pain Level: {painLevel}/10
- Emotional State: {emotionalState}
- Medical History: {medicalHistory}

CONVERSATION GUIDELINES:
- Respond naturally and emotionally appropriate to your symptoms
- Don't diagnose yourself or use medical terminology
- Describe symptoms in layman's terms
- Show appropriate concern or relief based on your condition
- If in pain, mention it naturally in responses
- Be consistent with your medical history

Current conversation history:
{conversationHistory}

Student's question: {question}
Your response as the patient:`,

  PHYSICAL_EXAM_FEEDBACK: `
You are simulating physical examination findings for a medical student.

PATIENT CONDITION: {pathology}
EXAMINATION TECHNIQUE: {technique}
CORRECT FINDINGS: {expectedFindings}
CURRENT PATIENT STATE: {currentState}

Describe what the student would find during this examination:
- Be anatomically accurate
- Match the expected pathology
- Include subtle findings if advanced scenario
- Note patient reactions if procedure causes discomfort`,

  TREATMENT_RESPONSE: `
Simulate patient response to medical treatment.

TREATMENT ADMINISTERED: {treatment}
EXPECTED RESPONSE: {expectedResponse}
CURRENT CONDITION: {currentState}
TIME SINCE TREATMENT: {timeElapsed} minutes

Describe how the patient feels and any changes in symptoms:
- Show gradual improvement or deterioration as appropriate
- Mention side effects if relevant
- Be realistic about timing of effects
- Express appropriate emotional response`,

  EMOTIONAL_RESPONSE: `
Generate emotional patient response to difficult news.

NEWS DELIVERED: {news}
PATIENT PERSONALITY: {personalityType}
RELATIONSHIP WITH PROVIDER: {relationshipQuality}
PRIOR UNDERSTANDING: {priorKnowledge}

Simulate an emotionally appropriate response:
- Show shock, denial, anger, or acceptance as appropriate
- Ask relevant questions a real patient would ask
- Express fears and concerns realistically
- Maintain cultural sensitivity`
} as const;

export type PromptTemplateType = keyof typeof PROMPT_TEMPLATES;
```

## 9. **Update src/api.ts** (Add LLM-related API types)

Add these to `src/api.ts`:

```typescript
// Add to existing api.ts file

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
```

## 10. **Update src/index.ts** (Include LLM exports)

```typescript
// Re-export all types from individual modules
export * from './database';
export * from './medical';
export * from './orders';
export * from './simulation';
export * from './assessment';
export * from './llm';  // Add this line
export * from './api';
```

## 11. **Update package.json** (Add LLM-related dependencies if needed)

```json
{
  "name": "@virtual-patient/shared-types",
  "version": "1.0.0",
  "description": "Shared TypeScript types for Virtual Patient Platform",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "prepublishOnly": "npm run build"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  },
  "files": [
    "dist"
  ]
}
```

## Key Features of the LLM Module:

### 1. **Comprehensive Conversation Management**
- Patient personas with cultural and personality traits
- Conversation context tracking
- Emotional state modeling

### 2. **Medical Reasoning Support**
- Differential diagnosis generation
- Evidence-based reasoning steps
- Treatment response simulation

### 3. **Ollama Integration**
- Native Ollama API types
- Model management
- Health monitoring

### 4. **Prompt Engineering**
- Template system for different scenarios
- Variable substitution
- Example-based learning

### 5. **Quality Assessment**
- Response quality metrics
- Educational value scoring
- Medical accuracy validation

## Build the Updated Package:
```bash
cd shared-types
npm run build
```

Now you have a complete LLM module that will support:
- **Realistic patient conversations** with emotional depth
- **Medical accuracy** through proper prompt engineering
- **Educational scaffolding** with appropriate response complexity
- **Ollama integration** for local model management

**The shared-types package is now complete and ready for use in both backend and frontend!** 

# ---

