'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, Copy, Check, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MeshGradient } from '../components/ui/MeshGradient';
import { GlassCard } from '../components/ui/GlassCard';
import { FadeIn } from '../components/animations/FadeIn';

interface RFPQuestion {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const rfpQuestions: RFPQuestion[] = [
  {
    id: '1',
    category: 'Operations & Fulfillment',
    question: 'What is your fulfillment capacity and peak velocity?',
    answer: 'CPGIO operates a high-velocity fulfillment operation with peak capacity of 48,000 units/hour during launch events and sustained capacity of 200,000 units/month. Our quality control maintains <0.01% defect rates even at peak volume. We handle FBA, FBM, and hybrid 3P/1P coordination, including co-packing, kitting, and SIOC bundle creation.',
  },
  {
    id: '2',
    category: 'Media & Performance',
    question: 'What are your typical ROAS and advertising performance metrics?',
    answer: 'Our media campaigns typically achieve 5-8x ROAS with new-to-brand customer acquisition rates of 29-41%. We have successfully optimized ACoS from 38% to 21% for grocery brands and maintain over 60% organic sales after initial media investment. We use Amazon Marketing Cloud (AMC) and Pacvue for data-driven optimization.',
  },
  {
    id: '3',
    category: 'Brand Protection',
    question: 'How do you handle unauthorized sellers and marketplace violations?',
    answer: 'CPGIO employs systematic rogue seller containment including IP infringement claims (trademark, copyright, patent, counterfeit), policy violations, and Amazon Transparency program implementation. In one case study, we removed 56 unauthorized sellers and recovered $526K in monthly revenue representing 28,608 units of protected inventory.',
  },
  {
    id: '4',
    category: 'Catalog Management',
    question: 'What is your approach to catalog development and ASIN optimization?',
    answer: 'We use a data-driven ASIN Scorecard System evaluating 7 weighted criteria: Page Score (SEO, images, A+ Content), Competition, Ratings & Reviews, Variation Strategy, and Growth Velocity. This prioritization framework has enabled us to launch 800+ ASINs with 45% faster time-to-sale and achieve +267% sales growth for multi-brand portfolios.',
  },
  {
    id: '5',
    category: 'Operations & Fulfillment',
    question: 'What is your quality control process and defect rate?',
    answer: 'Our integrated operations maintain a <0.01% defect rate across all fulfillment activities. This includes GS1/GTIN management, custom labeling, quality inspections, and SIOC optimization. Even during peak velocity operations (48K units/hour), we maintain this quality standard through automated workflow systems (HyperQue) and real-time quality checkpoints.',
  },
  {
    id: '6',
    category: 'Growth Strategy',
    question: 'Do you recommend starting with 3P or 1P on Amazon?',
    answer: 'CPGIO recommends a "3P First" philosophy for rapid market entry with precise pricing control and catalog cleanup. This approach provides data-rich feedback to inform long-term retail strategy. Once top-performing SKUs are identified (typically top 10-20%), we expand to 1P/Vendor Central while maintaining unified operations and media strategy across both channels.',
  },
  {
    id: '7',
    category: 'Business Models',
    question: 'What financial models do you offer (3PL vs Distribution)?',
    answer: 'CPGIO offers both 3PL (brand retains ownership, transparent service billing) and Distribution (we own inventory, manage pricing/compliance) models using the same operational engine. This allows brands to choose based on maturity and strategic goals, not operational capability. Transition between models takes <30 days with 100% cost transparency.',
  },
  {
    id: '8',
    category: 'Technology & Integration',
    question: 'What technology platforms and integrations do you support?',
    answer: 'Our HyperQue system provides 100% integration across forecasting, purchasing, fulfillment, content, media, and customer operations. We integrate with Amazon Marketing Cloud (AMC), Pacvue for media optimization, and support 10+ sales channels including Amazon 3P, 1P, Walmart, TikTok Shop, and DTC sites. Data accuracy across all systems is 99.9%.',
  },
  {
    id: '9',
    category: 'Media & Performance',
    question: 'How do you approach new product launches and ranking?',
    answer: 'We use targeted media to accelerate ranking while generating shopper insights. Campaigns focus on new-to-brand customers and adapt dynamically by SKU life stage. Budget automation increases as listings mature and organic ranking improves. This approach has achieved launches of 800+ ASINs with 45% time reduction and enabled brands to scale from <$50K to $1M monthly in 18 months.',
  },
  {
    id: '10',
    category: 'Marketplace Operations',
    question: 'How do you handle GS1 compliance and catalog cleanup?',
    answer: 'We conduct full catalog audits to separate authentic, GS1-compliant UPCs from rogue listings, establish compliant catalog under Brand Registry, and ensure one-to-one product matching. Audit completion typically takes 5-10 days and achieves 100% catalog accuracy. This foundation is essential for 1P migration and long-term marketplace control.',
  },
  {
    id: '11',
    category: 'Omnichannel',
    question: 'What channels beyond Amazon do you support?',
    answer: 'CPGIO manages Amazon 3P, 1P, Walmart, TikTok Shop, and 10+ DTC sites through unified operations. We have launched brands on TikTok Shop generating $100K first-year revenue and scaled household brands to $20M+ annual run rate across multiple channels. Channel-specific optimization is supported by cross-platform inventory coordination.',
  },
  {
    id: '12',
    category: 'Product Innovation',
    question: 'Do you offer product development and merchandising services?',
    answer: 'Yes. CPGIO provides AI-powered bundle optimization (tested 100+ variations for water flavor brands), custom seasonal products (advent calendars generating $300K+ in Q4), SIOC bundle optimization (20%+ shipping savings with +12 point rating improvement), and variety pack strategies driven by data and market analysis.',
  },
  {
    id: '13',
    category: 'Compliance & Standards',
    question: 'How do you ensure MAP pricing and EDLP compliance?',
    answer: 'Our Brand Protection capability includes MAP-Aligned Pricing enforcement and EDLP strategies as core components. We continuously monitor pricing violations, implement Amazon Transparency program, and take swift action against violators. Response time to new violations is <24 hours with systematic IP infringement and policy violation procedures.',
  },
  {
    id: '14',
    category: 'Case Study Results',
    question: 'Can you provide examples of client results and outcomes?',
    answer: 'Key outcomes include: Baby food brand - restored 50+ compliant ASINs; Mason Jar brand - removed 56 sellers, recovered $526K monthly revenue; SOLA scaling - achieved 60%+ organic sales post-media; Influencer spice launch - 48K units/hour velocity; SKU launch program - 800+ ASINs with 45% faster time-to-sale; BFY portfolio - +267% sales growth ($71K → $261K).',
  },
  {
    id: '15',
    category: 'Onboarding & Timeline',
    question: 'What is your typical onboarding timeline and process?',
    answer: '3P market entry: 30-45 days to first sale. Full catalog audit: 5-10 days. Financial model transition (3PL ↔ Distribution): <30 days. ASIN prioritization and action plan: <48 hours from audit completion. Our integrated operations approach eliminates typical friction between isolated vendor functions, enabling faster launches and scaling.',
  },
  {
    id: '16',
    category: 'Reporting & Analytics',
    question: 'What reporting and analytics do you provide?',
    answer: 'Real-time data flows across all functions through our HyperQue system with 99.9% data accuracy. Reporting includes: ASIN Scorecard System (7 criteria evaluation), media performance (ROAS, ACoS, new-to-brand %), inventory velocity, Buy Box control (>95% typical), defect rates, and cross-channel performance. Amazon Marketing Cloud (AMC) integration provides advanced attribution.',
  },
  {
    id: '17',
    category: 'Team & Expertise',
    question: 'What is your team structure and areas of expertise?',
    answer: 'CPGIO operates an integrated team covering: Operations & Supply Chain (forecasting, purchasing, fulfillment), Retail Media & Performance Marketing (AMC, Pacvue), Marketplace Operations (catalog, compliance, brand protection), Growth Strategy & Planning (ASIN prioritization, 3P/1P strategy), and Direct-to-Consumer channels. All functions are connected through unified systems and real-time data.',
  },
  {
    id: '18',
    category: 'Competitive Differentiation',
    question: 'What makes CPGIO different from other 3PLs or agencies?',
    answer: 'CPGIO is a systems-first integrated operation, not siloed vendor services. Performance reflects system completeness and connectivity with 100% real-time integration across all functions. We offer financial flexibility (3PL or Distribution models) using the same operational engine. Our approach eliminates friction, reduces costs 25-40% over time, and provides unified data and strategy across 3P, 1P, and omnichannel.',
  },
  {
    id: '19',
    category: 'Pricing & Investment',
    question: 'What is your pricing structure?',
    answer: '3PL Model: Transparent service billing with 100% itemized costs. Distribution Model: Margin-based with full pricing/compliance management by CPGIO. Both models use the same operational engine with flexibility to transition in <30 days. Typical cost optimization of 25-40% achieved over time versus siloed operations. Investment scales with brand growth and channel expansion.',
  },
  {
    id: '20',
    category: 'Success Metrics',
    question: 'How do you measure and ensure client success?',
    answer: 'Success metrics include: Fulfillment velocity and defect rates, Media ROAS and new-to-brand %, Revenue recovery from brand protection, Catalog accuracy and compliance, Time-to-sale for new ASINs, Buy Box control percentage, Organic sales transition post-media, Cross-channel revenue growth. All metrics tracked in real-time through integrated systems with monthly strategic reviews.',
  },
];

export default function RFPCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(rfpQuestions.map(q => q.category)))];

  const filteredQuestions = rfpQuestions.filter(q => {
    const matchesSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopy = async (id: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      <MeshGradient />

      <div className="min-h-screen p-8 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <FadeIn>
            <div className="space-y-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>

              <div className="text-center space-y-4">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-primary-600 via-accent-blue to-accent-purple bg-clip-text text-transparent">
                  RFP Center
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get direct answers to common RFP questions with copy-paste responses and supporting data.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Search Bar */}
          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-blue opacity-20 blur-2xl" />
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search RFP questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-6 text-lg bg-white/70 backdrop-blur-md border-2 border-white/40 rounded-2xl shadow-glass focus:outline-none focus:border-primary-400 focus:shadow-glow transition-all placeholder-gray-400"
                />
              </div>
            </div>
          </FadeIn>

          {/* Category Filter */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-600 to-accent-blue text-white shadow-glow'
                      : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Results Count */}
          <FadeIn delay={0.3}>
            <p className="text-center text-gray-600 font-medium">
              Showing {filteredQuestions.length} of {rfpQuestions.length} questions
            </p>
          </FadeIn>

          {/* Questions Accordion */}
          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => (
              <FadeIn key={q.id} delay={0.35 + idx * 0.02}>
                <GlassCard hover={false} className="overflow-hidden">
                  <button
                    onClick={() => setExpandedQuestion(expandedQuestion === q.id ? null : q.id)}
                    className="w-full p-6 flex items-start justify-between hover:bg-white/30 transition-colors text-left"
                  >
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-gradient-to-r from-primary-50 to-blue-50 text-primary-700 text-xs font-bold rounded-full border border-primary-200">
                          {q.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {q.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-primary-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                        expandedQuestion === q.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedQuestion === q.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 space-y-4">
                          <div className="p-6 bg-white/40 rounded-xl border border-primary-100">
                            <p className="text-gray-700 leading-relaxed text-base">
                              {q.answer}
                            </p>
                          </div>
                          <div className="flex justify-end">
                            <motion.button
                              onClick={() => handleCopy(q.id, q.answer)}
                              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-blue text-white rounded-xl font-semibold hover:shadow-glow transition-all"
                              whileTap={{ scale: 0.95 }}
                            >
                              {copiedId === q.id ? (
                                <>
                                  <Check className="w-4 h-4" />
                                  <span>Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-4 h-4" />
                                  <span>Copy Answer</span>
                                </>
                              )}
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </FadeIn>
            ))}
          </div>

          {/* Empty State */}
          {filteredQuestions.length === 0 && (
            <FadeIn delay={0.4}>
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">
                  No questions found matching your search.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-4 text-primary-600 font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            </FadeIn>
          )}

          {/* CTA */}
          <FadeIn delay={0.5}>
            <GlassCard className="p-12 text-center">
              <div className="space-y-6 max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-purple bg-clip-text text-transparent">
                  Need More Information?
                </h3>
                <p className="text-gray-600 text-lg">
                  Contact our team for custom RFP responses or detailed capability discussions.
                </p>
                <div className="flex gap-4 justify-center pt-4">
                  <a
                    href="mailto:sales@cpgio.com"
                    className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-blue text-white rounded-xl font-bold text-lg hover:shadow-glow-lg hover:scale-105 transition-all"
                  >
                    Contact Sales
                  </a>
                  <Link
                    href="/capabilities"
                    className="px-8 py-4 bg-white/50 backdrop-blur-sm border-2 border-primary-200 rounded-xl font-bold text-lg text-primary-700 hover:bg-white/70 hover:scale-105 transition-all"
                  >
                    Explore Capabilities
                  </Link>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
