// All order-related types in one place
import { ActionStatus, EventPriority } from './database';
import { Drug, Procedure, LaboratoryTest, ImagingStudy, PhysicalExam } from './medical';

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

export interface VitalSigns {
  bloodPressure: { systolic: number; diastolic: number };
  heartRate: number;
  respiratoryRate: number;
  temperature: number;
  oxygenSaturation: number;
  painLevel: number;
}