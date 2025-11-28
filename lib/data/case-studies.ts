import type { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'influencer-spice-launch',
    brand: 'Confidential Influencer Brand',
    category: 'Fulfillment & Operational Excellence',
    challenge: 'Coordinate massive product launch with influencer-driven demand surge',
    execution: [
      'Sold 48,000 units in under 1 hour',
      'Maintained <0.01% defect rate under extreme volume',
      'Real-time inventory coordination',
      'Crisis-level quality control'
    ],
    results: {
      'Units Shipped': '48,000',
      'Timeframe': '<1 hour',
      'Defect Rate': '0.01%',
      'Achievement': 'Highest online revenue day in brand history'
    },
    relatedCapabilities: ['fulfillment-excellence']
  },
  {
    id: 'mason-jar-protection',
    brand: 'Leading Mason Jar Manufacturer',
    category: 'Brand Protection & Compliance',
    challenge: 'Unauthorized sellers cannibalizing brand equity and revenue',
    execution: [
      'Implemented Amazon Transparency program',
      'Systematic IP and policy violation enforcement',
      'Unauthorized seller removal campaign',
      'Revenue recovery strategies'
    ],
    results: {
      'Sellers Removed': '56',
      'Units Recovered': '28,608',
      'Monthly Revenue': '$526,192',
      'Timeline': '6 months'
    },
    relatedCapabilities: ['brand-protection', 'orphan-asin-takeover']
  },
  {
    id: 'baby-food-crisis',
    brand: '#1 US Baby Food Brand',
    category: 'Fulfillment & Operational Excellence',
    challenge: '50+ ASINs delisted due to Amazon policy changes',
    execution: [
      'Emergency GS1 re-verification process',
      'Amazon Seller Support escalation coordination',
      'Catalog integrity restoration',
      'Revenue loss prevention'
    ],
    results: {
      'ASINs Restored': '50+',
      'Downtime': 'Minimized',
      'Catalog Integrity': '100%',
      'Achievement': 'Full sales restoration'
    },
    relatedCapabilities: ['marketplace-cleanup']
  },
  {
    id: 'consumer-goods-8b',
    brand: '$8B Consumer Goods Company',
    category: 'Portfolio Growth & Scaling',
    challenge: 'Scale multi-category portfolio with MAP enforcement',
    execution: [
      'Data-driven ASIN prioritization',
      'MAP enforcement and pricing discipline',
      'Tight channel control across marketplaces',
      'Incremental assortment expansion'
    ],
    results: {
      'Monthly Revenue': '$1M',
      'Timeline': '18 months',
      'Categories': '3',
      'Achievement': 'Enterprise-level multi-category success'
    },
    relatedCapabilities: ['financial-flexibility', 'asin-prioritization', '3p-foundation']
  },
  {
    id: 'holdings-93b',
    brand: '$93B Holdings Company',
    category: 'Portfolio Growth & Scaling',
    challenge: 'Accelerate FBA revenue and launch bundle program',
    execution: [
      '1P/3P hybrid optimization',
      'Systematic bundle development',
      'High-velocity SKU launches (30+ UPCs/month)',
      'Complementary channel strategy'
    ],
    results: {
      'FBA Growth': '+68%',
      'Monthly Revenue': '$1.04M',
      'Bundle Program': '$8M/year',
      'Timeline': '6 quarters'
    },
    relatedCapabilities: ['financial-flexibility', '3p-foundation', 'product-innovation']
  },
  {
    id: 'bfy-snack-portfolio',
    brand: 'Better-For-You Snack Portfolio',
    category: 'Portfolio Growth & Scaling',
    challenge: 'Optimize multi-brand portfolio through content excellence',
    execution: [
      'Comprehensive listing optimization',
      'Portfolio-wide A+ content development',
      'SEO-driven keyword strategy',
      'Merchandising standardization'
    ],
    results: {
      'Sales Growth': '+267%',
      'From Revenue': '$71K',
      'To Revenue': '$261K',
      'Period': 'Monthly'
    },
    relatedCapabilities: ['catalog-optimization', 'asin-prioritization']
  },
  {
    id: 'candle-advent',
    brand: '#1 US Candle Brand',
    category: 'Product Innovation & Merchandising',
    challenge: 'Develop custom seasonal product for Q4 revenue maximization',
    execution: [
      'Custom advent calendar ASIN development',
      'Seasonal opportunity identification',
      'Q4 merchandising strategy',
      'Omnichannel expansion to brick-and-mortar'
    ],
    results: {
      'Q4 Revenue': '$300,000+',
      'Expansion': 'Brick-and-mortar in 2025',
      'Achievement': 'New seasonal SKU category established'
    },
    relatedCapabilities: ['product-innovation']
  },
  {
    id: 'water-flavor-ai',
    brand: 'Water Flavor Manufacturer',
    category: 'Product Innovation & Merchandising',
    challenge: 'Optimize bundle strategy for maximum revenue',
    execution: [
      'AI-designed bundle variations (100+ configurations)',
      'Performance testing and validation',
      'Deployed top 20 performing bundles',
      'Enhanced PDP engagement metrics'
    ],
    results: {
      'Variations Tested': '100+',
      'Deployed': 'Top 20',
      'Revenue Lift': 'Significant',
      'Achievement': 'AI-driven merchandising optimization'
    },
    relatedCapabilities: ['product-innovation']
  },
  {
    id: 'energizer-sioc',
    brand: 'Energizer Lighting',
    category: 'Product Innovation & Merchandising',
    challenge: 'Reduce shipping costs while improving customer satisfaction',
    execution: [
      'Created 24 SIOC-ready ASINs',
      'Packaging optimization for sustainability',
      'Cost efficiency analysis',
      'Customer experience enhancement'
    ],
    results: {
      'Shipping Savings': '20%+',
      'Rating Improvement': '+12 points',
      'ASINs Created': '24',
      'Achievement': 'Sustainability + cost efficiency'
    },
    relatedCapabilities: ['product-innovation']
  },
  {
    id: 'sola-scaling',
    brand: 'SOLA (DTC Health Food Brand)',
    category: 'Media & Customer Acquisition',
    challenge: 'Scale DTC brand from minimal Amazon presence to retail-ready volume',
    execution: [
      'Customer acquisition efficiency optimization',
      'AMS media strategy (7-8x ROAS)',
      'Organic ranking acceleration',
      'Retail-readiness positioning'
    ],
    results: {
      'From Revenue': '$20K/month',
      'To Revenue': '$800K/month',
      'Timeline': '18 months',
      'ROAS': '7-8x',
      'Organic Sales': '60%',
      'Retail Expansion': 'Walmart, Kroger, HEB'
    },
    relatedCapabilities: ['media-framework', 'asin-prioritization']
  },
  {
    id: 'bobs-red-mill',
    brand: "Bob's Red Mill",
    category: 'Media & Customer Acquisition',
    challenge: 'Establish strong Amazon presence for natural baking leader',
    execution: [
      'Targeted media strategy for natural foods category',
      'New-to-brand customer acquisition focus',
      'Promotional optimization',
      'Sustained scaling methodology'
    ],
    results: {
      'Sales': '$241K',
      'Spend': '$43K',
      'ROAS': '5.53x',
      'New-to-Brand': '29%',
      'Scaled To': '$500K+/month',
      'Timeline': 'First year'
    },
    relatedCapabilities: ['media-framework']
  },
  {
    id: 'grocery-brand-media',
    brand: 'Grocery Brand',
    category: 'Media & Customer Acquisition',
    challenge: 'Optimize media efficiency and customer acquisition',
    execution: [
      'Campaign restructuring',
      'ACoS optimization',
      'New-to-brand targeting enhancement',
      'Performance analytics and iteration'
    ],
    results: {
      'ACoS From': '38%',
      'ACoS To': '21%',
      'NTB From': '26%',
      'NTB To': '41%',
      'ROAS': '4.8x (maintained)'
    },
    relatedCapabilities: ['media-framework']
  },
  {
    id: 'household-cleaning-backstop',
    brand: 'Household Cleaning Brand',
    category: 'Operational Flexibility & Support',
    challenge: 'Provide 3P backup during 1P stockouts',
    execution: [
      'Rapid 3P fulfillment activation',
      'Surge capacity deployment (200K units/month)',
      'Demand spike management',
      'Revenue continuity maintenance'
    ],
    results: {
      'Surge Capacity': '200,000 units/month',
      'Incremental Revenue': '$1M+',
      'Achievement': 'Channel flexibility and risk mitigation'
    },
    relatedCapabilities: ['fulfillment-excellence', 'financial-flexibility']
  },
  {
    id: 'household-brand-expansion',
    brand: 'Leading Household Brand',
    category: 'Omnichannel Expansion',
    challenge: 'Rapid omnichannel expansion from single platform',
    execution: [
      'Amazon 3P + FBA optimization',
      'Walmart Marketplace launch',
      '10+ DTC sites (TikTok Shop, Macy\'s Marketplace)',
      'Unified operations across platforms'
    ],
    results: {
      'From Revenue': '<$50K',
      'To Revenue': '$1M monthly',
      'Timeline': '18 months',
      'Annual Run Rate': '$20M+',
      'Platforms': '10+'
    },
    relatedCapabilities: ['omnichannel-expansion', 'integrated-operations']
  },
  {
    id: 'beverage-tiktok-launch',
    brand: 'Leading Beverage Mix Manufacturer',
    category: 'Omnichannel Expansion',
    challenge: 'Launch new TikTok Shop channel',
    execution: [
      'TikTok Shop setup and optimization',
      'DTC execution strategy',
      'Influencer campaign coordination',
      'Platform-specific merchandising'
    ],
    results: {
      'Timeline': 'May - December 2024',
      'Revenue': '$100K by year-end',
      'Achievement': 'Successful new platform entry'
    },
    relatedCapabilities: ['omnichannel-expansion']
  },
  {
    id: 'sku-launch-program',
    brand: 'Multiple CPG Brands',
    category: 'Catalog Development & Optimization',
    challenge: 'Systematize and accelerate ASIN launch process',
    execution: [
      'Standardized launch methodology',
      'GTINs, A+ content, AMS integration',
      'Launch-to-sale time reduction',
      'Quality control protocols'
    ],
    results: {
      'ASINs Launched': '800+',
      'Time Reduction': '45%',
      'Achievement': 'Scalable launch system across brands'
    },
    relatedCapabilities: ['catalog-optimization', 'fulfillment-excellence']
  },
  {
    id: 'otc-health-wellness',
    brand: 'OTC Health & Wellness Brand',
    category: 'Catalog Development & Optimization',
    challenge: 'Build and optimize large-scale ASIN portfolio',
    execution: [
      'Built and optimized 400+ ASINs',
      'Content and merchandising improvements',
      'Unlocked new revenue channels',
      'Enhanced catalog-wide performance'
    ],
    results: {
      'ASINs Optimized': '400+',
      'Achievement': 'Large-scale catalog excellence'
    },
    relatedCapabilities: ['catalog-optimization']
  }
];

// Helper function to get a case study by ID
export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.id === id);
}

// Helper function to get case studies by category
export function getCaseStudiesByCategory(category: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.category === category);
}

// Helper function to get all unique categories
export function getCaseStudyCategories(): string[] {
  return Array.from(new Set(caseStudies.map(cs => cs.category)));
}

// Helper function to get case studies by capability
export function getCaseStudiesByCapability(capabilityId: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.relatedCapabilities.includes(capabilityId));
}
