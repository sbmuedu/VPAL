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

// export interface SupervisorIntervention {
//   id: string;
//   sessionId: string;
//   supervisorId: string;
//   interventionType: string;
//   message: string;
//   contextData: any;
//   virtualTime: Date;
//   studentAcknowledged: boolean;
//   studentResponse?: string;
//   interventionEffective?: boolean;
//   createdAt: Date;
// }