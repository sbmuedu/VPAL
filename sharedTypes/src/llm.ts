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
    confidence?: number;        // Make optional if not always provided
    vitalSignChanges: Partial<VitalSigns>;
    triggeredEvents: string[];
    medicalAccuracy: number;
    processingTime?: number;    // Make optional
    tokensUsed?: number;        // Make optional if not always provided
    educationalValue: number;
    
    accuracy?: number;          // Add this
    thinkingTime?: number;      // Add this
    appropriateness?: number;   // Add this
    emotionalAppropriateness?: number; // Add this
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