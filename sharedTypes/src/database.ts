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

export enum OrderStatus {
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

export enum OrderPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum MedicationPriority {
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

export enum AdministrationRoute {
  ORAL = 'ORAL',
  INTRAVENOUS = 'INTRAVENOUS',
  INTRAMUSCULAR = 'INTRAMUSCULAR',
  SUBCUTANEOUS = 'SUBCUTANEOUS',
  TOPICAL = 'TOPICAL',
  INHALATION = 'INHALATION',
  NASAL = 'NASAL',
  OPHTHALMIC = 'OPHTHALMIC',
  OTIC = 'OTIC',
  RECTAL = 'RECTAL',
  VAGINAL = 'VAGINAL',
  OTHER = 'OTHER',
  TRANSDERMAL = 'Transdermal',//	Transdermal	Applied via a patch for absorption through the skin.
  BUCCAL = 'BUCC',//	Buccal	Placed between the gum and cheek.
}

export enum AdministrationRoute_Abstract {
  ORAL = 'PO',    // PO	By mouth (Per Os)	The patient swallows the medication.
  INTRAVENOUS = 'IV',// IV	Intravenous	Injected directly into a vein.
  INTRAMUSCULAR = 'IM',// IM	Intramuscular	Injected into a muscle.
  SUBCUTANEOUS = 'SC',// SC or SQ	Subcutaneous	Injected into the tissue under the skin.
  TOPICAL = 'TOPICAL',// Topical	Topical	Applied to the skin surface.
  INHALATION = 'INH',// Inhalation	Inhalation (INH)	Breathed into the lungs via an inhaler or nebulizer.
  NASAL = 'NASAL',// Nasal	Nasal	Sprayed or dropped into the nostrils.
  OPHTHALMIC = 'OP',// Ophthalmic	Ophthalmic (OP)	Dropped or applied into the eye.
  OTIC = 'OTIC',// Otic	Otic	Dropped into the ear.
  RECTAL = 'PR',// PR	Per rectum	Suppository or liquid inserted into the rectum.
  VAGINAL = 'PV',// PV	Per vagina	Suppository or cream inserted into the vagina.
  OTHER = 'OTHER',
  TRANSDERMAL='TD',//	Transdermal	Applied via a patch for absorption through the skin.
  BUCCAL='Bucc',	//Buccal	Placed between the gum and cheek.
}

// Commonly used administration routes with descriptions
//
// Common administration routes with descriptions

export enum Frequency {
// QD or Q24H	Once daily (Quaque Die)	Every 24 hours. Important: QD is on the "Do Not Use" list due to confusion with QID. Q24H is strongly preferred.
  ONCE = 'ONCE', // Once	One time only	A single dose.
  DAILY = 'DAILY',
  BID = 'BID', // Twice a day - Approximately every 12 hours.
  TID = 'TID', // Three times a day - Approximately every 8 hours.
  QID = 'QID', // Four times a day - Approximately every 6 hours.
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  PRN = 'AS_NEEDED',// PRN	As needed (Pro Re Nata)	Requires a reason (e.g., "for pain," "for anxiety").
  Q4H='Q4H',  // Q4H	Every 4 hours	
  Q6H='Q6H',  // Q6H	Every 6 hours	
  Q8H='Q8H',  // Q8H	Every 8 hours	
  Q12H='Q12H',  // Q12H	Every 12 hours	
}
