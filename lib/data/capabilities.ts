import type { Capability } from '../types';

export const capabilities: Capability[] = [
  {
    id: 'integrated-operations',
    title: 'Integrated Operations',
    category: 'Core Philosophy',
    pillar: 'Operations & Supply Chain',
    description: 'Systems-first approach uniting forecasting, purchasing, fulfillment, content, media, and customer operations',
    keyPoints: [
      'Performance reflects system completeness and connectivity',
      'Real-time data flows across all functions',
      'HyperQue system for workflow automation',
      'Eliminates friction between isolated vendor functions'
    ],
    kpis: [
      { metric: 'System Integration', value: '100%', description: 'All functions connected in real-time' },
      { metric: 'Task Automation', value: '85%+', description: 'Automated workflow prioritization' },
      { metric: 'Data Accuracy', value: '99.9%', description: 'Cross-functional data consistency' }
    ],
    relatedCaseStudies: ['baby-food-crisis', 'household-brand-expansion']
  },
  {
    id: 'financial-flexibility',
    title: 'Financial Flexibility',
    category: 'Business Models',
    pillar: 'Growth Strategy & Planning',
    description: 'Both 3PL and Distribution models using the same operational engine',
    keyPoints: [
      '3PL: Brand retains ownership, transparent service billing, strategic control',
      'Distribution: Operator owns inventory, manages pricing/compliance, margin-based model',
      'Same operational capabilities regardless of financial model',
      'Choice based on brand maturity, not capability'
    ],
    kpis: [
      { metric: 'Model Flexibility', value: '2 Options', description: '3PL or Distribution with same ops engine' },
      { metric: 'Transition Time', value: '<30 days', description: 'Switch between models if needed' },
      { metric: 'Cost Transparency', value: '100%', description: 'Fully itemized billing' }
    ],
    relatedCaseStudies: ['consumer-goods-8b', 'holdings-93b']
  },
  // TODO: Add remaining 10 capabilities from original data
];

// Helper to get capability by ID
export function getCapabilityById(id: string): Capability | undefined {
  return capabilities.find(cap => cap.id === id);
}

// Helper to get capabilities by pillar
export function getCapabilitiesByPillar(pillar: string): Capability[] {
  return capabilities.filter(cap => cap.pillar === pillar);
}

// Get all unique pillars
export function getAllPillars(): string[] {
  return Array.from(new Set(capabilities.map(cap => cap.pillar)));
}
