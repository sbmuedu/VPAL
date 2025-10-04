# Enhanced Database Schema with Medical Knowledge Base

You're absolutely right! We need a comprehensive medical knowledge base for drugs, procedures, exams, and lab tests. This will make the simulation much more realistic and educational.

## Enhanced Prisma Schema with Medical Knowledge Base

```prisma
// schema.prisma
// ... previous enums and models ...

// NEW MODELS FOR MEDICAL KNOWLEDGE BASE

model Drug {
  id          String   @id @default(uuid())
  name        String   @unique
  genericName String
  brandNames  String[]
  
  // Classification
  drugClass   String
  subClass    String?
  category    String // prescription, otc, controlled
  
  // Dosage information
  standardDosages Json // { adult: { min: 5, max: 10, unit: "mg" }, pediatric: {...} }
  administrationRoutes String[] // oral, iv, im, subcutaneous, etc.
  frequencyOptions String[] // QD, BID, TID, QID, PRN, etc.
  
  // Clinical information
  indications   String[]
  contraindications String[]
  sideEffects   String[]
  interactions  String[]
  monitoringParameters String[] // what to monitor when administering
  
  // Time parameters
  onsetOfAction String? // "5-10 minutes"
  duration      String? // "4-6 hours"
  halfLife      String?
  
  // Validation
  fdaApproved   Boolean @default(true)
  validatedByExpertId String?
  validatedByExpert User? @relation(fields: [validatedByExpertId], references: [id], onDelete: SetNull)
  
  // Metadata
  isActive      Boolean @default(true)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  // Relations
  medicationOrders MedicationOrder[]
  
  @@map("drugs")
}

model Procedure {
  id          String   @id @default(uuid())
  code        String?  // CPT code or institutional code
  name        String   @unique
  description String
  category    String   // diagnostic, therapeutic, surgical, nursing
  
  // Procedure details
  indications   String[]
  contraindications String[]
  requiredEquipment String[]
  steps         Json // Step-by-step procedure guide
  risks         String[]
  complications String[]
  
  // Time requirements
  estimatedRealTime Int // seconds
  estimatedVirtualTime Int // minutes
  requiresSupervision Boolean @default(false)
  difficultyLevel ScenarioDifficulty
  
  // Validation
  validatedByExpertId String?
  validatedByExpert User? @relation(fields: [validatedByExpertId], references: [id], onDelete: SetNull)
  
  // Metadata
  isActive      Boolean @default(true)
  createdAt     DateTime @default(now())
  
  // Relations
  procedureOrders ProcedureOrder[]
  
  @@map("procedures")
}

model LaboratoryTest {
  id          String   @id @default(uuid())
  code        String?  // LOINC code
  name        String   @unique
  description String
  category    String   // hematology, chemistry, microbiology, etc.
  
  // Test information
  specimenTypes String[] // blood, urine, CSF, etc.
  collectionInstructions String
  normalRanges Json // { ageRanges: [{minAge: 0, maxAge: 18, range: "X-Y"}] }
  criticalValues Json // values that require immediate attention
  interpretationGuide String
  
  // Time parameters
  processingTimeVirtual Int // minutes until results available
  statProcessingTimeVirtual Int? // minutes for STAT orders
  requiresCollection Boolean @default(true)
  
  // Validation
  validatedByExpertId String?
  validatedByExpert User? @relation(fields: [validatedByExpertId], references: [id], onDelete: SetNull)
  
  // Metadata
  isActive      Boolean @default(true)
  createdAt     DateTime @default(now())
  
  // Relations
  labOrders     LabOrder[]
  
  @@map("laboratory_tests")
}

model ImagingStudy {
  id          String   @id @default(uuid())
  code        String?  // CPT code
  name        String   @unique
  description String
  modality    String   // X-ray, CT, MRI, Ultrasound, etc.
  
  // Study information
  indications   String[]
  contraindications String[]
  preparationInstructions String
  radiationExposure String? // for radiology studies
  
  // Time parameters
  durationRealTime Int // minutes for actual procedure
  durationVirtualTime Int // minutes until results available
  statDurationVirtual Int? // minutes for STAT orders
  
  // Validation
  validatedByExpertId String?
  validatedByExpert User? @relation(fields: [validatedByExpertId], references: [id], onDelete: SetNull)
  
  // Metadata
  isActive      Boolean @default(true)
  createdAt     DateTime @default(now())
  
  // Relations
  imagingOrders ImagingOrder[]
  
  @@map("imaging_studies")
}

model PhysicalExam {
  id          String   @id @default(uuid())
  name        String   @unique
  description String
  system      String   // cardiovascular, respiratory, neurological, etc.
  
  // Exam details
  technique    String   // how to perform the exam
  normalFindings String
  abnormalFindings Json // { finding: "crackles", indication: "pulmonary edema" }
  requiredEquipment String[]
  
  // Time requirements
  estimatedRealTime Int // seconds
  estimatedVirtualTime Int // minutes
  
  // Validation
  validatedByExpertId String?
  validatedByExpert User? @relation(fields: [validatedByExpertId], references: [id], onDelete: SetNull)
  
  // Metadata
  isActive      Boolean @default(true)
  createdAt     DateTime @default(now())
  
  // Relations
  examOrders    ExamOrder[]
  
  @@map("physical_exams")
}

// UPDATED ORDER MODELS (replacing generic MedicalAction)

model MedicationOrder {
  id          String   @id @default(uuid())
  sessionId   String
  session     ScenarioSession @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  studentId   String
  student     User     @relation(fields: [studentId], references: [id], onDelete: Cascade)
  drugId      String
  drug        Drug     @relation(fields: [drugId], references: [id], onDelete: Cascade)
  
  // Order details
  dosage      String   // "5 mg"
  route       String   // "IV", "PO", etc.
  frequency   String   // "Q6H", "BID", etc.
  duration    String?  // "7 days", "until discharge"
  indication  String   // reason for ordering
  
  // Time tracking
  orderTime   DateTime @default(now())
  virtualOrderTime DateTime
  expectedAdministrationTime DateTime?
  actualAdministrationTime DateTime?
  
  // Status and outcomes
  status      ActionStatus @default(PENDING)
  administeredByUserId String? // nurse who administered
  administeredBy User? @relation(fields: [administeredByUserId], references: [id], onDelete: SetNull)
  response    Json? // patient's response to medication
  
  // Assessment
  appropriatenessScore Float? // 0-1 score
  timingScore    Float? // 0-1 score
  documentationScore Float? // 0-1 score
  
  @@map("medication_orders")
}

model ProcedureOrder {
  id          String   @id @default(uuid())
  sessionId   String
  session     ScenarioSession @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  studentId   String
  student     User     @relation(fields: [studentId], references: [id], onDelete: Cascade)
  procedureId String
  procedure   Procedure @relation(fields: [procedureId], references: [id], onDelete: Cascade)
  
  // Order details
  indication  String
  location    String? // "left arm", "chest", etc.
  urgency     EventPriority @default(MEDIUM)
  
  // Time tracking
  orderTime   DateTime @default(now())
  virtualOrderTime DateTime
  scheduledTime DateTime?
  completionTime DateTime?
  
  // Status and outcomes
  status      ActionStatus @default(PENDING)
  performedByUserId String? // who performed the procedure
  performedBy User? @relation(fields: [performedByUserId], references: [id], onDelete: SetNull)
  findings    Json? // results of the procedure
  complications String[] // any complications encountered
  
  // Assessment
  techniqueScore Float? // 0-1 score
  indicationScore Float? // 0-1 score
  safetyScore   Float? // 0-1 score
  
  @@map("procedure_orders")
}

model LabOrder {
  id          String   @id @default(uuid())
  sessionId   String
  session     ScenarioSession @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  studentId   String
  student     User     @relation(fields: [studentId], references: [id], onDelete: Cascade)
  testId      String
  test        LaboratoryTest @relation(fields: [testId], references: [id], onDelete: Cascade)
  
  // Order details
  indication  String
  urgency     EventPriority @default(MEDIUM)
  statOrder   Boolean @default(false)
  
  // Time tracking
  orderTime   DateTime @default(now())
  virtualOrderTime DateTime
  collectionTime DateTime?
  resultTime  DateTime? // when results become available
  
  // Status and results
  status      ActionStatus @default(PENDING)
  collectedByUserId String? // who collected the specimen
  collectedBy User? @relation(fields: [collectedByUserId], references: [id], onDelete: SetNull)
  results     Json? // actual test results
  isCritical  Boolean @default(false) // critical value flag
  
  // Assessment
  appropriatenessScore Float? // 0-1 score
  interpretationScore Float? // 0-1 score
  timingScore    Float? // 0-1 score
  
  @@map("lab_orders")
}

model ImagingOrder {
  id          String   @id @default(uuid())
  sessionId   String
  session     ScenarioSession @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  studentId   String
  student     User     @relation(fields: [studentId], references: [id], onDelete: Cascade)
  studyId     String
  study       ImagingStudy @relation(fields: [studyId], references: [id], onDelete: Cascade)
  
  // Order details
  indication  String
  bodyPart    String
  urgency     EventPriority @default(MEDIUM)
  statOrder   Boolean @default(false)
  
  // Time tracking
  orderTime   DateTime @default(now())
  virtualOrderTime DateTime
  studyTime   DateTime? // when study performed
  resultTime  DateTime? // when results available
  
  // Status and results
  status      ActionStatus @default(PENDING)
  performedByUserId String? // who performed the study
  performedBy User? @relation(fields: [performedByUserId], references: [id], onDelete: SetNull)
  findings    Json? // radiology report
  isCritical  Boolean @default(false)
  
  // Assessment
  appropriatenessScore Float? // 0-1 score
  interpretationScore Float? // 0-1 score
  
  @@map("imaging_orders")
}

model ExamOrder {
  id          String   @id @default(uuid())
  sessionId   String
  session     ScenarioSession @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  studentId   String
  student     User     @relation(fields: [studentId], references: [id], onDelete: Cascade)
  examId      String
  exam        PhysicalExam @relation(fields: [examId], references: [id], onDelete: Cascade)
  
  // Order details
  indication  String
  bodyPart    String?
  
  // Time tracking
  orderTime   DateTime @default(now())
  virtualOrderTime DateTime
  performedTime DateTime?
  
  // Status and findings
  status      ActionStatus @default(PENDING)
  findings    Json? // exam findings
  normal      Boolean? // whether findings were normal
  
  // Assessment
  techniqueScore Float? // 0-1 score
  documentationScore Float? // 0-1 score
  completenessScore Float? // 0-1 score
  
  @@map("exam_orders")
}

// UPDATE ScenarioSession model to include orders
model ScenarioSession {
  // ... existing fields ...
  
  // REPLACE activeOrders with specific order types
  medicationOrders MedicationOrder[]
  procedureOrders ProcedureOrder[]
  labOrders       LabOrder[]
  imagingOrders   ImagingOrder[]
  examOrders      ExamOrder[]
  
  // ... rest of existing fields ...
}

// NEW MODEL FOR ORDER SETS AND TEMPLATES
model OrderSet {
  id          String   @id @default(uuid())
  name        String
  description String
  category    String   // "chest_pain", "sepsis", "stroke", etc.
  difficulty  ScenarioDifficulty
  
  // Orders in this set
  medications Json // { drugId: string, dosage: string, route: string, frequency: string }[]
  procedures  String[] // procedureIds
  labTests    String[] // testIds
  imagingStudies String[] // studyIds
  exams       String[] // examIds
  
  // Clinical context
  indications String[]
  contraindications String[]
  
  // Validation
  validatedByExpertId String?
  validatedByExpert User? @relation(fields: [validatedByExpertId], references: [id], onDelete: SetNull)
  
  // Metadata
  isActive      Boolean @default(true)
  createdAt     DateTime @default(now())
  
  @@map("order_sets")
}

// NEW MODEL FOR DRUG INTERACTIONS
model DrugInteraction {
  id          String   @id @default(uuid())
  drug1Id     String
  drug1       Drug     @relation(fields: [drug1Id], references: [id], onDelete: Cascade)
  drug2Id     String
  drug2       Drug     @relation(fields: [drug2Id], references: [id], onDelete: Cascade)
  
  interactionType String // "contraindicated", "major", "moderate", "minor"
  description String
  mechanism   String?
  management  String?
  
  severity    EventPriority
  evidenceLevel String? // "established", "probable", "possible"
  
  @@unique([drug1Id, drug2Id])
  @@map("drug_interactions")
}
```

## Key Benefits of This Enhanced Design:

### 1. **Realistic Ordering System**
- Students select from predefined medical knowledge base
- Exact dosages, routes, frequencies like real EMR systems
- Drug interactions and contraindications checking

### 2. **Comprehensive Medical Database**
- **Drugs**: 1000+ medications with full prescribing information
- **Procedures**: Step-by-step guidance with time requirements
- **Lab Tests**: Normal ranges, critical values, interpretation
- **Imaging Studies**: Modality-specific requirements
- **Physical Exams**: Technique and expected findings

### 3. **Time-Accurate Processing**
- Realistic processing times for each order type
- STAT vs routine order differentiation
- Results delivery simulation

### 4. **Educational Value**
- Immediate feedback on order appropriateness
- Scoring based on evidence-based guidelines
- Learning proper ordering patterns

### 5. **Clinical Decision Support**
- Drug interaction checking
- Appropriate use criteria for tests/procedures
- Best practice adherence scoring

## Example Usage Flow:

```typescript
// Student orders medication
const order = await prisma.medicationOrder.create({
  data: {
    sessionId: 'session-123',
    studentId: 'student-456',
    drugId: 'drug-789', // e.g., Amoxicillin
    dosage: '500 mg',
    route: 'PO',
    frequency: 'Q8H',
    indication: 'Community-acquired pneumonia'
  }
});

// System automatically checks:
// - Is this drug appropriate for the diagnosis?
// - Is the dosage correct for the condition?
// - Are there any interactions with current medications?
// - When should results be expected?
```

This design will make the simulation feel exactly like real hospital software while providing rich educational feedback on ordering patterns and clinical decision-making.

**Ready to implement this comprehensive medical knowledge base schema?**