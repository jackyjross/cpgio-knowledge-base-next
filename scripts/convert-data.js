// Script to convert knowledge-base-data.js to TypeScript modules
const fs = require('fs');
const path = require('path');

// Read the original data file
const originalData = require('../lib/data/knowledge-base-data-original.js');

// Helper to format TypeScript
function formatCapability(cap) {
  return `  {
    id: '${cap.id}',
    title: '${cap.title}',
    category: '${cap.category}',
    pillar: '${cap.pillar}',
    description: \`${cap.description}\`,
    keyPoints: ${JSON.stringify(cap.keyPoints, null, 6).replace(/^/gm, '    ')},
    kpis: ${JSON.stringify(cap.kpis, null, 6).replace(/^/gm, '    ')},
    relatedCaseStudies: ${JSON.stringify(cap.relatedCaseStudies)}
  }`;
}

// Convert capabilities
const capabilitiesTS = `import type { Capability } from '../types';

export const capabilities: Capability[] = [
${originalData.knowledgeBase.capabilities.map(formatCapability).join(',\n')}
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
`;

// Write to file
fs.writeFileSync(
  path.join(__dirname, '../lib/data/capabilities.ts'),
  capabilitiesTS
);

console.log('✅ Capabilities converted successfully!');
console.log(`   Total: ${originalData.knowledgeBase.capabilities.length} capabilities`);
