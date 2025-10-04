// Simulation and time management types
import { AssessmentEvidence, CompetencyScores, CompetencyWeights } from './assessment';
import { 
  ScenarioDifficulty, 
  SessionStatus, 
  AssessmentType, 
  TimeFlowMode, 
  EventPriority, 
  EmotionalState,
  ActionStatus 
} from './database';
import { ImagingStudy, LaboratoryTest, PhysicalExam, Procedure } from './medical';
import { ExamOrder, ImagingOrder, LabOrder, MedicationOrder, ProcedureOrder, VitalSigns } from './orders';

// export interface CompetencyWeights {
//   diagnostic: number;
//   procedural: number;
//   communication: number;
//   professionalism: number;
//   criticalThinking: number;
// }

// export interface CompetencyScores {
//   diagnostic: CompetencyScore;
//   procedural: CompetencyScore;
//   communication: CompetencyScore;
//   professionalism: CompetencyScore;
//   criticalThinking: CompetencyScore;
// }

// export interface CompetencyScore {
//   score: number;
//   feedback: string;
//   evidence: AssessmentEvidence[]; // This will come from assessment.ts
// }

// export interface AssessmentEvidence {
//   actionId: string;
//   actionType: string;
//   timestamp: Date;
//   scoreImpact: number;
//   feedback: string;
// }

export interface PhysiologyModel {
  cardiovascular: SystemModel;
  respiratory: SystemModel;
  neurological: SystemModel;
  metabolic: SystemModel;
  // ... other systems
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
  timeToNextStage: number; // virtual minutes
}

export interface DiseaseStage {
  stage: number;
  description: string;
  vitalSignChanges: VitalSigns;
  symptoms: string[];
  complications: string[];
}

export interface ScheduledEvent {
  virtualTime: string; // "00:30" format
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

// export interface VitalSigns {
//   bloodPressure: { systolic: number; diastolic: number };
//   heartRate: number;
//   respiratoryRate: number;
//   temperature: number;
//   oxygenSaturation: number;
//   painLevel: number;
// }

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

// Add missing order interfaces that were referenced
// export interface ProcedureOrder {
//   id: string;
//   sessionId: string;
//   studentId: string;
//   procedureId: string;
//   procedure: Procedure;
//   indication: string;
//   location?: string;
//   urgency: EventPriority;
//   orderTime: Date;
//   virtualOrderTime: Date;
//   scheduledTime?: Date;
//   completionTime?: Date;
//   status: ActionStatus;
//   performedByUserId?: string;
//   findings?: any;
//   complications: string[];
//   techniqueScore?: number;
//   indicationScore?: number;
//   safetyScore?: number;
// }

// export interface LabOrder {
//   id: string;
//   sessionId: string;
//   studentId: string;
//   testId: string;
//   test: LaboratoryTest;
//   indication: string;
//   urgency: EventPriority;
//   statOrder: boolean;
//   orderTime: Date;
//   virtualOrderTime: Date;
//   collectionTime?: Date;
//   resultTime?: Date;
//   status: ActionStatus;
//   collectedByUserId?: string;
//   results?: any;
//   isCritical: boolean;
//   appropriatenessScore?: number;
//   interpretationScore?: number;
//   timingScore?: number;
// }

// export interface ImagingOrder {
//   id: string;
//   sessionId: string;
//   studentId: string;
//   studyId: string;
//   study: ImagingStudy;
//   indication: string;
//   bodyPart: string;
//   urgency: EventPriority;
//   statOrder: boolean;
//   orderTime: Date;
//   virtualOrderTime: Date;
//   studyTime?: Date;
//   resultTime?: Date;
//   status: ActionStatus;
//   performedByUserId?: string;
//   findings?: any;
//   isCritical: boolean;
//   appropriatenessScore?: number;
//   interpretationScore?: number;
// }

// export interface ExamOrder {
//   id: string;
//   sessionId: string;
//   studentId: string;
//   examId: string;
//   exam: PhysicalExam;
//   indication: string;
//   bodyPart?: string;
//   orderTime: Date;
//   virtualOrderTime: Date;
//   performedTime?: Date;
//   status: ActionStatus;
//   findings?: any;
//   normal?: boolean;
//   techniqueScore?: number;
//   documentationScore?: number;
//   completenessScore?: number;
// }

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
  endTime: Date;
  currentVirtualTime: Date;
  lastRealTimeUpdate: Date;
  timeFlowMode: TimeFlowMode;
  totalRealTimeElapsed: number;
  totalVirtualTimeElapsed: number;
  timePressureEnabled: boolean;
  
//   // State tracking
//   complicationsEncountered: string[];
//   mistakesMade: MedicalError[];
//   interventionsReceived: SupervisorIntervention[];
//   currentPatientState: PatientState;
//   currentEmotionalState: EmotionalState;
//   completedSteps: string[];
//   activeMedications: ActiveMedication[];
//   latestVitalSigns: VitalSigns;
  
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

export { VitalSigns };
