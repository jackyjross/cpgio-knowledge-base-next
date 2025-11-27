'use client';

import { useState } from 'react';
import Link from 'next/link';
import { capabilities, getAllPillars, getCapabilitiesByPillar, getPillarCounts } from '@/lib/data/capabilities';
import { ChevronDown, Users, FileText, Sparkles, ArrowRight } from 'lucide-react';
import { MeshGradient } from './components/ui/MeshGradient';
import { GlassCard } from './components/ui/GlassCard';
import { HeroText } from './components/animations/HeroText';
import { FadeIn } from './components/animations/FadeIn';
import { CountUp } from './components/animations/CountUp';

export default function HomePage() {
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  const pillars = getAllPillars();
  const pillarCounts = getPillarCounts();

  const togglePillar = (pillar: string) => {
    setExpandedPillar(expandedPillar === pillar ? null : pillar);
  };

  const journeyCards = [
    {
      icon: Users,
      title: 'New to CPGIO?',
      description: `Explore our 5 strategic pillars and ${capabilities.length} core capabilities with proven KPIs and case studies.`,
      cta: 'Explore Capabilities',
      href: '/capabilities',
      color: 'blue',
    },
    {
      icon: FileText,
      title: 'Evaluating Us?',
      description: 'Get direct answers to common RFP questions with copy-paste responses and supporting data.',
      cta: 'Browse RFP Center',
      href: '/rfp-center',
      color: 'purple',
    },
    {
      icon: Sparkles,
      title: 'Internal Team?',
      description: 'Use AI-powered search to find specific answers, case studies, or prep for client calls.',
      cta: 'Search Knowledge Base',
      href: '/search',
      color: 'teal',
    },
  ];

  const performanceMetrics = [
    { value: '48K units/hr', label: 'Peak Velocity' },
    { value: '5-8x', label: 'ROAS Range' },
    { value: '$526K', label: 'Monthly Revenue Recovery' },
    { value: '800+', label: 'ASINs Launched' },
    { value: '56', label: 'Sellers Removed' },
    { value: '<0.01%', label: 'Defect Rate' },
  ];

  return (
    <>
      <MeshGradient />

      <div className="min-h-screen flex flex-col p-8 relative">
        <div className="max-w-7xl mx-auto w-full space-y-20">
          {/* Hero Section */}
          <FadeIn className="text-center space-y-6 pt-12 pb-8">
            <HeroText
              text="The Intelligence Engine for CPG Growth"
              className="text-6xl md:text-7xl font-bold"
              gradient
            />
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
              Choose your path: discover our capabilities, evaluate us for an RFP, or access internal resources.
            </p>
          </FadeIn>

          {/* Journey Pathways */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journeyCards.map((card, idx) => (
              <FadeIn key={card.title} delay={idx * 0.1}>
                <Link href={card.href}>
                  <GlassCard className="p-8 h-full group">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-blue rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow">
                        <card.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {card.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary-600 font-semibold pt-2 group-hover:gap-3 transition-all">
                        <span>{card.cta}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Strategic Pillars */}
          <FadeIn className="space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-blue bg-clip-text text-transparent">
                Our 5 Strategic Pillars
              </h2>
              <p className="text-lg text-gray-600">
                Click any pillar to expand and see specific capabilities with KPIs.
              </p>
            </div>

            <div className="space-y-4">
              {pillars.map((pillar, idx) => {
                const pillarCapabilities = getCapabilitiesByPillar(pillar);
                const isExpanded = expandedPillar === pillar;

                return (
                  <FadeIn key={pillar} delay={idx * 0.05}>
                    <GlassCard hover={false} className="overflow-hidden">
                      <button
                        onClick={() => togglePillar(pillar)}
                        className="w-full p-8 flex items-center justify-between hover:bg-white/30 transition-colors"
                      >
                        <div className="flex-1 text-left">
                          <h3 className="text-2xl font-bold text-gray-900">{pillar}</h3>
                          <p className="text-sm text-gray-600 mt-2 font-medium">
                            {pillarCounts[pillar]} {pillarCounts[pillar] === 1 ? 'Capability' : 'Capabilities'}
                          </p>
                        </div>
                        <ChevronDown
                          className={`w-6 h-6 text-primary-600 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="px-6 pb-6 space-y-4">
                          {pillarCapabilities.map((cap) => (
                            <Link
                              key={cap.id}
                              href={`/capabilities/${cap.id}`}
                            >
                              <GlassCard className="p-6 bg-white/40">
                                <div className="flex items-start justify-between mb-3">
                                  <h4 className="font-bold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
                                    {cap.title}
                                  </h4>
                                  <ArrowRight className="w-5 h-5 text-primary-600 flex-shrink-0" />
                                </div>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{cap.description}</p>
                                <div className="flex flex-wrap gap-2">
                                  {cap.kpis.slice(0, 3).map((kpi, idx) => (
                                    <span
                                      key={idx}
                                      className="text-xs px-3 py-1.5 bg-gradient-to-r from-primary-50 to-blue-50 text-primary-700 rounded-full font-semibold border border-primary-200"
                                    >
                                      {kpi.metric}: {kpi.value}
                                    </span>
                                  ))}
                                </div>
                              </GlassCard>
                            </Link>
                          ))}
                        </div>
                      )}
                    </GlassCard>
                  </FadeIn>
                );
              })}
            </div>
          </FadeIn>

          {/* Performance Highlights */}
          <FadeIn className="space-y-8 pt-8">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-primary-600 to-accent-purple bg-clip-text text-transparent">
              Performance Highlights
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {performanceMetrics.map((metric, idx) => (
                <FadeIn key={metric.label} delay={idx * 0.05}>
                  <GlassCard className="p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-blue bg-clip-text text-transparent">
                      <CountUp value={metric.value} />
                    </div>
                    <div className="text-sm text-gray-600 mt-2 font-medium">{metric.label}</div>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Footer */}
          <div className="text-center text-gray-500 text-sm py-8 space-y-1">
            <p className="font-medium">Next.js Production Build • Premium Design System</p>
            <p>{capabilities.length} Capabilities • 5 Pillars • TypeScript • Framer Motion</p>
          </div>
        </div>
      </div>
    </>
  );
}
