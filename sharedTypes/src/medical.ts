// Medical knowledge base types
import { ScenarioDifficulty, EventPriority, ActionStatus } from './database';
import { VitalSigns } from './simulation';

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

// Order interfaces
// export interface MedicationOrder {
//   id: string;
//   sessionId: string;
//   studentId: string;
//   drugId: string;
//   drug: Drug;
//   dosage: string;
//   route: string;
//   frequency: string;
//   duration?: string;
//   indication: string;
//   orderTime: Date;
//   virtualOrderTime: Date;
//   expectedAdministrationTime?: Date;
//   actualAdministrationTime?: Date;
//   status: ActionStatus;
//   administeredByUserId?: string;
//   response?: MedicationResponse;
//   appropriatenessScore?: number;
//   timingScore?: number;
//   documentationScore?: number;
// }

// export interface MedicationResponse {
//   effectiveness: number;
//   sideEffects: string[];
//   vitalSignChanges: VitalSigns;
//   onsetTime: number;
// }

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