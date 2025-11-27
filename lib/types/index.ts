// CPGIO Knowledge Base TypeScript Types
// Converted from JSDoc definitions in knowledge-base-data.js

export interface KPI {
  metric: string;
  value: string;
  description: string;
}

export interface Capability {
  id: string;
  title: string;
  category: string;
  pillar: string;
  description: string;
  keyPoints: string[];
  kpis: KPI[];
  relatedCaseStudies: string[];
}

export interface CaseStudy {
  id: string;
  brand: string;
  category: string;
  challenge: string;
  execution: string[];
  results: Record<string, string>;
  relatedCapabilities: string[];
}

export interface RFPAnswer {
  question: string;
  answer: string;
  relatedCapabilityId: string;
  tags: string[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'Amazon' | 'eCommerce' | 'Logistics';
  cpgioContext: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string;
  photo: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceKPIs {
  [category: string]: {
    [key: string]: KPI;
  };
}

export interface KnowledgeBase {
  capabilities: Capability[];
  caseStudies: CaseStudy[];
  serviceKPIs: ServiceKPIs;
  rfpAnswers: RFPAnswer[];
  glossary: GlossaryTerm[];
  team: TeamMember[];
  process: ProcessStep[];
}
