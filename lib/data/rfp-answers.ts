import type { RFPAnswer } from '../types';

export const rfpAnswers: RFPAnswer[] = [
  {
    question: "What is your defect rate?",
    answer: "We maintain a <0.01% defect rate even at peak volumes of 48,000 units/hour. Our quality control protocols include automated weight verification, visual inspection, and SIOC compliance checks at every stage.",
    relatedCapabilityId: 'fulfillment-excellence',
    tags: ['logistics', 'quality', 'operations']
  },
  {
    question: "How do you handle returns and customer service?",
    answer: "We provide full customer service integration including returns processing, refund management, and customer communication. Our integrated operations system ensures <24 hour response time and maintains customer satisfaction scores above 95%.",
    relatedCapabilityId: 'integrated-operations',
    tags: ['customer-service', 'operations', 'quality']
  },
  {
    question: "What ROAS do you typically achieve?",
    answer: "We consistently deliver 5-8x ROAS through data-driven media strategies. Recent examples include SOLA (7-8x ROAS, scaled to $800K/month) and Bob's Red Mill (5.53x ROAS with 29% new-to-brand customers). We use Amazon Marketing Cloud (AMC) and Pacvue for advanced targeting and optimization.",
    relatedCapabilityId: 'media-framework',
    tags: ['media', 'advertising', 'roas', 'performance']
  },
  {
    question: "How do you protect brands from unauthorized sellers?",
    answer: "We use a multi-layered approach: Amazon Brand Registry enrollment, Transparency program implementation, systematic IP violation reporting, test buy programs, and MAP enforcement. In one campaign, we removed 56 unauthorized sellers and recovered $526K in monthly revenue.",
    relatedCapabilityId: 'brand-protection',
    tags: ['brand-protection', 'compliance', 'amazon']
  },
  {
    question: "What is your fulfillment capacity?",
    answer: "Peak velocity: 48,000 units/hour. Surge capacity: 200,000 units/month. We support FBA, FBM, and hybrid 3P/1P operations with co-packing and kitting capabilities. Our facilities handle both high-velocity launches and sustained operational excellence.",
    relatedCapabilityId: 'fulfillment-excellence',
    tags: ['logistics', 'fulfillment', 'capacity', 'operations']
  },
  {
    question: "Do you offer both 3PL and distribution models?",
    answer: "Yes. We offer both 3PL (brand retains inventory ownership) and Distribution (we purchase and own inventory) models using the same operational engine. The choice depends on brand maturity and control preferences, not capability. Transition between models takes <30 days if needed.",
    relatedCapabilityId: 'financial-flexibility',
    tags: ['business-model', '3pl', 'distribution', 'flexibility']
  },
  {
    question: "How do you ensure GS1 compliance?",
    answer: "We conduct comprehensive catalog audits to ensure 100% GS1-compliant UPC matching. Our process includes separating authentic UPCs from rogue listings, establishing compliant listings under Brand Registry, and GTIN validation. Audit completion typically takes 5-10 days.",
    relatedCapabilityId: 'marketplace-cleanup',
    tags: ['compliance', 'gs1', 'amazon', 'catalog']
  },
  {
    question: "Can you launch products on multiple marketplaces?",
    answer: "Yes. We manage Amazon 3P, Amazon 1P, Walmart, TikTok Shop, and 10+ DTC sites through unified operations. Recent results include scaling a household brand from <$50K to $1M monthly in 18 months and generating $100K first-year revenue on TikTok Shop for a beverage brand.",
    relatedCapabilityId: 'omnichannel-expansion',
    tags: ['omnichannel', 'marketplaces', 'expansion', 'walmart', 'tiktok']
  },
  {
    question: "How quickly can you launch new ASINs?",
    answer: "We've achieved 45% time reduction in launch-to-sale cycles through standardized processes and quality control protocols. We've successfully launched 800+ ASINs with portfolio-level content standardization and A+ Content at scale.",
    relatedCapabilityId: 'catalog-optimization',
    tags: ['catalog', 'launch', 'efficiency', 'content']
  },
  {
    question: "What makes your approach different from other 3PLs?",
    answer: "Our integrated operations system unites forecasting, purchasing, fulfillment, content, media, and customer operations in real-time. Unlike isolated vendor functions, our systems-first approach ensures 100% cross-functional integration with 85%+ task automation and 99.9% data accuracy.",
    relatedCapabilityId: 'integrated-operations',
    tags: ['differentiation', 'operations', 'systems', 'integration']
  },
  {
    question: "How do you prioritize which ASINs to focus on?",
    answer: "We use a 7-criteria ASIN Scorecard System evaluating Page Score, Competition, Rating, Reviews, Variation Strategy, Growth Velocity, and A+ Content. This delivers 3x ROI vs. equal allocation approaches with prioritization completed in <48 hours from audit.",
    relatedCapabilityId: 'asin-prioritization',
    tags: ['strategy', 'prioritization', 'asin', 'roi']
  },
  {
    question: "Do you handle product bundling and innovation?",
    answer: "Yes. We use AI-powered bundle design, custom product development (advent calendars, seasonal items), and SIOC optimization. Recent results include $300K+ Q4 seasonal revenue (candle advent calendar) and 20%+ shipping savings through SIOC optimization.",
    relatedCapabilityId: 'product-innovation',
    tags: ['innovation', 'bundling', 'product-development', 'sioc']
  },
  {
    question: "What is your experience with Amazon Brand Registry?",
    answer: "We manage Brand Registry enrollment and leverage all protection benefits: Report a Violation, A+ Content access, Sponsored Brands ads, and Brand Analytics. This foundation enables IP enforcement, counterfeit removal, and catalog control.",
    relatedCapabilityId: 'brand-protection',
    tags: ['brand-registry', 'amazon', 'ip-protection', 'compliance']
  },
  {
    question: "How do you optimize advertising spend?",
    answer: "We use dual-purpose media strategies: accelerate organic ranking + generate customer insights. Integration with Amazon Marketing Cloud (AMC) and Pacvue enables dynamic plans that adapt by SKU and life stage. We've improved ACoS from 38% to 21% while maintaining 29-41% new-to-brand rates.",
    relatedCapabilityId: 'media-framework',
    tags: ['media', 'optimization', 'advertising', 'amc']
  },
  {
    question: "What reporting and analytics do you provide?",
    answer: "We provide full transparency through custom dashboards covering sales velocity, inventory turns, advertising performance, buy box %, defect rates, and customer metrics. All data flows in real-time across our integrated operations system with 99.9% accuracy.",
    relatedCapabilityId: 'integrated-operations',
    tags: ['reporting', 'analytics', 'transparency', 'data']
  },
  {
    question: "How do you handle seasonal spikes?",
    answer: "Our surge capacity of 200,000 units/month handles seasonal peaks. We've successfully managed influencer product launches (48,000 units/hour velocity) and provided backstop fulfillment for household cleaning brands during high-demand periods.",
    relatedCapabilityId: 'fulfillment-excellence',
    tags: ['seasonality', 'capacity', 'fulfillment', 'surge']
  },
  {
    question: "Do you support 1P (Vendor Central) operations?",
    answer: "Yes. Our 3P First philosophy recommends starting with 3P for control and data, then expanding top 10-20% of SKUs to 1P when scale justifies it. We support hybrid 3P/1P operations with unified catalog and operations management.",
    relatedCapabilityId: '3p-foundation',
    tags: ['1p', 'vendor-central', '3p', 'hybrid']
  },
  {
    question: "What is your approach to content optimization?",
    answer: "We optimize all product detail page elements: titles, bullets, images, descriptions, and A+ Content. Using SEO-driven keyword research and conversion rate analysis, we've built A+ Content for 400+ ASINs and improved organic ranking through data-driven optimization.",
    relatedCapabilityId: 'catalog-optimization',
    tags: ['content', 'seo', 'optimization', 'a-plus-content']
  },
  {
    question: "How do you handle MAP pricing enforcement?",
    answer: "We implement MAP-aligned pricing and EDLP strategies combined with Amazon Transparency, IP claims, and systematic rogue seller removal. Response time to new violations is <24 hours with documented revenue recovery of $526K/month in brand protection campaigns.",
    relatedCapabilityId: 'brand-protection',
    tags: ['pricing', 'map', 'enforcement', 'brand-protection']
  },
  {
    question: "What is your onboarding timeline?",
    answer: "Comprehensive marketplace audit: 5-10 days. Initial catalog cleanup and compliance: 2-4 weeks. Full operational integration: 30-60 days. We can begin generating revenue within 30-60 days through orphan ASIN takeover strategies while building compliant infrastructure.",
    relatedCapabilityId: 'marketplace-cleanup',
    tags: ['onboarding', 'timeline', 'implementation']
  }
];

// Helper function to search RFP answers
export function searchRFPAnswers(query: string): RFPAnswer[] {
  const lowerQuery = query.toLowerCase();
  return rfpAnswers.filter(rfp =>
    rfp.question.toLowerCase().includes(lowerQuery) ||
    rfp.answer.toLowerCase().includes(lowerQuery) ||
    rfp.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

// Helper function to get RFP answers by tag
export function getRFPAnswersByTag(tag: string): RFPAnswer[] {
  return rfpAnswers.filter(rfp => rfp.tags.includes(tag));
}

// Helper function to get all unique tags
export function getRFPTags(): string[] {
  const tags = new Set<string>();
  rfpAnswers.forEach(rfp => rfp.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
}

// Helper function to get RFP answers by capability
export function getRFPAnswersByCapability(capabilityId: string): RFPAnswer[] {
  return rfpAnswers.filter(rfp => rfp.relatedCapabilityId === capabilityId);
}
