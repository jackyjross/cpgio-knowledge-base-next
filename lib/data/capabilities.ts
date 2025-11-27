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
  {
    id: 'asin-prioritization',
    title: 'Data-Driven ASIN Prioritization',
    category: 'Strategic Framework',
    pillar: 'Growth Strategy & Planning',
    description: 'ASIN Scorecard System evaluating 7 weighted criteria for resource allocation',
    keyPoints: [
      'Page Score: SEO keywords, images, bullets, A+ Content',
      'Competition: Transparency, MAP enforcement, Buy Box control',
      'Rating & Reviews: Content optimization, Vine enrollment',
      'Variation Strategy: Multipacks, shopper-friendly variations',
      'Growth Velocity: Sales trends, market share, pricing',
      'Opportunity scoring guides investment decisions',
      'High-opportunity ASINs get immediate attention'
    ],
    kpis: [
      { metric: 'ASIN Evaluation', value: '7 Criteria', description: 'Weighted scorecard system' },
      { metric: 'Prioritization Speed', value: '<48 hours', description: 'From audit to action plan' },
      { metric: 'Resource Efficiency', value: '3x ROI', description: 'vs. equal allocation approach' }
    ],
    relatedCaseStudies: ['sola-scaling', 'bobs-red-mill', 'bfy-snack-portfolio']
  },
  {
    id: 'marketplace-cleanup',
    title: 'Marketplace Cleanup & GS1 Compliance',
    category: 'Amazon Execution',
    pillar: 'Marketplace Operations',
    description: 'Full audit and compliance restoration for marketplace control',
    keyPoints: [
      'Separate authentic, GS1-compliant UPCs from rogue listings',
      'Establish compliant listings under Brand Registry',
      'One-to-one catalog match with brand products',
      'Foundation for 1P migration when appropriate',
      'GTIN validation and management'
    ],
    kpis: [
      { metric: 'Catalog Accuracy', value: '100%', description: 'GS1-compliant UPC matching' },
      { metric: 'Compliance Success', value: '50+ ASINs', description: 'Restored in baby food case' },
      { metric: 'Audit Completion', value: '5-10 days', description: 'Full catalog review' }
    ],
    relatedCaseStudies: ['baby-food-crisis', 'mason-jar-protection']
  },
  {
    id: 'orphan-asin-takeover',
    title: 'Orphan ASIN Takeover Strategy',
    category: 'Amazon Execution',
    pillar: 'Marketplace Operations',
    description: 'Capture well-ranked orphan listings for immediate volume',
    keyPoints: [
      'Absorb orphan listings detached from proper attribution',
      'Dual-track: immediate volume + compliant catalog development',
      'Drive early cash flow and build purchasing cadence',
      'Establish credibility with Amazon',
      'Transition to compliant catalog over time'
    ],
    kpis: [
      { metric: 'Orphan Recovery', value: '85%+', description: 'Success rate on eligible ASINs' },
      { metric: 'Revenue Acceleration', value: '30-60 days', description: 'Time to first revenue' },
      { metric: 'Ranking Retention', value: '90%+', description: 'Maintained after takeover' }
    ],
    relatedCaseStudies: ['mason-jar-protection']
  },
  {
    id: 'brand-protection',
    title: 'Rogue Seller Containment',
    category: 'Brand Protection',
    pillar: 'Marketplace Operations',
    description: 'Systematic removal of unauthorized sellers and IP violations',
    keyPoints: [
      'IP Infringements: trademark, copyright, patent, counterfeit',
      'Policy Violations: unauthorized ASINs, materially different complaints',
      'Amazon Transparency program implementation',
      'MAP-Aligned Pricing and EDLP strategies',
      'Continuous monitoring and enforcement'
    ],
    kpis: [
      { metric: 'Seller Removal', value: '56 sellers', description: 'Removed in Mason Jar case' },
      { metric: 'Revenue Recovery', value: '$526K/month', description: 'Mason Jar brand recovery' },
      { metric: 'Units Recovered', value: '28,608', description: 'Inventory protected' },
      { metric: 'Response Time', value: '<24 hours', description: 'To new violations' }
    ],
    relatedCaseStudies: ['mason-jar-protection']
  },
  {
    id: 'media-framework',
    title: 'Media & Commercialization',
    category: 'Growth Acceleration',
    pillar: 'Retail Media & Performance Marketing',
    description: 'Data-driven media strategy for ranking acceleration and insights',
    keyPoints: [
      'Dual purpose: accelerate ranking + generate insights',
      'Targeted at new-to-brand shoppers and new listings',
      'Amazon Marketing Cloud (AMC) and Pacvue integration',
      'Dynamic plans adapt by SKU and life stage',
      'Budget automation as listings mature',
      'Media efficiency compounds over time'
    ],
    kpis: [
      { metric: 'ROAS Range', value: '5-8x', description: 'Return on ad spend' },
      { metric: 'New-to-Brand', value: '29-41%', description: 'Customer acquisition rate' },
      { metric: 'ACoS Optimization', value: '38% → 21%', description: 'Grocery brand improvement' },
      { metric: 'Organic Transition', value: '60%+', description: 'Organic sales after maturity (SOLA)' }
    ],
    relatedCaseStudies: ['sola-scaling', 'bobs-red-mill', 'grocery-brand-media']
  },
  {
    id: 'fulfillment-excellence',
    title: 'Fulfillment & Operations',
    category: 'Operational Excellence',
    pillar: 'Operations & Supply Chain',
    description: 'High-volume precision with operational flexibility',
    keyPoints: [
      'Peak surge capacity: 200,000 units/month',
      'High-velocity launches: 48,000 units/hour',
      'Quality control: <0.01% defect rate',
      'FBA, FBM, hybrid 3P/1P coordination',
      'Co-packing, kitting, SIOC bundle creation',
      'Custom labeling and GS1/GTIN management'
    ],
    kpis: [
      { metric: 'Peak Velocity', value: '48K units/hour', description: 'Influencer spice launch' },
      { metric: 'Defect Rate', value: '<0.01%', description: 'At peak volume' },
      { metric: 'Surge Capacity', value: '200K units/month', description: 'Household cleaning backstop' },
      { metric: 'Launch Success', value: '800+ ASINs', description: 'With 45% time reduction' }
    ],
    relatedCaseStudies: ['influencer-spice-launch', 'household-cleaning-backstop', 'sku-launch-program']
  },
  {
    id: 'omnichannel-expansion',
    title: 'Omnichannel Orchestration',
    category: 'Platform Expansion',
    pillar: 'Direct-to-Consumer & Owned Channels',
    description: 'Multi-marketplace management with unified operations',
    keyPoints: [
      'Amazon 3P, 1P, Walmart, TikTok Shop, 10+ DTC sites',
      'Channel-specific optimization strategies',
      'Unified operations and data management',
      'Rapid expansion execution',
      'Cross-platform inventory coordination'
    ],
    kpis: [
      { metric: 'Platform Range', value: '10+ channels', description: 'Unified management' },
      { metric: 'Expansion Speed', value: '18 months', description: '<$50K → $1M monthly' },
      { metric: 'TikTok Shop', value: '$100K', description: 'First year revenue (beverage brand)' },
      { metric: 'Annual Run Rate', value: '$20M+', description: 'Household brand positioning' }
    ],
    relatedCaseStudies: ['household-brand-expansion', 'beverage-tiktok-launch']
  },
  {
    id: 'product-innovation',
    title: 'Product Innovation & Merchandising',
    category: 'Catalog Development',
    pillar: 'Growth Strategy & Planning',
    description: 'AI-powered bundling and strategic product development',
    keyPoints: [
      'AI-designed bundle variations and testing',
      'Custom product development (advent calendars, seasonal)',
      'SIOC bundle optimization for cost and sustainability',
      'Variety pack and multipack strategies',
      'Data-driven product configuration'
    ],
    kpis: [
      { metric: 'Bundle Variations', value: '100+ tested', description: 'AI-powered water flavor' },
      { metric: 'Seasonal Revenue', value: '$300K+ Q4', description: 'Candle advent calendar' },
      { metric: 'Shipping Savings', value: '20%+', description: 'SIOC optimization (Energizer)' },
      { metric: 'Rating Improvement', value: '+12 points', description: 'SIOC customer satisfaction' }
    ],
    relatedCaseStudies: ['water-flavor-ai', 'candle-advent', 'energizer-sioc']
  },
  {
    id: 'catalog-optimization',
    title: 'Catalog Development & Optimization',
    category: 'Catalog Management',
    pillar: 'Marketplace Operations',
    description: 'Large-scale ASIN building and content optimization',
    keyPoints: [
      'Portfolio-level content standardization',
      'A+ Content development at scale',
      'SEO-driven keyword strategy',
      'Launch-to-sale time reduction methodology',
      'GTINs, A+ content, AMS support integration'
    ],
    kpis: [
      { metric: 'Catalog Scale', value: '800+ ASINs', description: 'SKU launch program' },
      { metric: 'Launch Efficiency', value: '45% faster', description: 'Time reduction' },
      { metric: 'Portfolio Growth', value: '+267% sales', description: 'BFY snack brands ($71K → $261K)' },
      { metric: 'Content Quality', value: '400+ ASINs', description: 'OTC health & wellness optimization' }
    ],
    relatedCaseStudies: ['sku-launch-program', 'bfy-snack-portfolio', 'otc-health-wellness']
  },
  {
    id: '3p-foundation',
    title: '3P First Philosophy',
    category: 'Strategic Approach',
    pillar: 'Growth Strategy & Planning',
    description: 'Start with 3P for control, expand to 1P when appropriate',
    keyPoints: [
      'Rapid entry with precise pricing control',
      'Catalog cleanup and data-rich feedback',
      'Informs long-term retail strategy',
      'Expand to 1P for top 10-20% of SKUs',
      'CPGIO as connective tissue between 3P and 1P',
      'Unified data and media strategy across channels'
    ],
    kpis: [
      { metric: 'Market Entry', value: '30-45 days', description: 'Time to first sale' },
      { metric: '1P Readiness', value: 'Top 10-20%', description: 'SKUs eligible for Vendor Central' },
      { metric: 'Buy Box Control', value: '>95%', description: 'Typical achievement rate' },
      { metric: 'Cost Optimization', value: '25-40%', description: 'Reduction over time vs. siloed ops' }
    ],
    relatedCaseStudies: ['holdings-93b', 'consumer-goods-8b']
  }
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

// Get capabilities count by pillar
export function getPillarCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  capabilities.forEach(cap => {
    counts[cap.pillar] = (counts[cap.pillar] || 0) + 1;
  });
  return counts;
}
