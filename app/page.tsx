'use client';

import { useState } from 'react';
import { capabilities, getAllPillars, getCapabilitiesByPillar, getPillarCounts } from '@/lib/data/capabilities';
import { ChevronDown, Users, FileText, Sparkles } from 'lucide-react';

export default function HomePage() {
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  const pillars = getAllPillars();
  const pillarCounts = getPillarCounts();

  const togglePillar = (pillar: string) => {
    setExpandedPillar(expandedPillar === pillar ? null : pillar);
  };

  return (
    <div className="min-h-screen flex flex-col p-8">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-primary">
            CPGIO Knowledge Base
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Choose your path: discover our capabilities, evaluate us for an RFP, or access internal resources.
          </p>
        </div>

        {/* Three Journey Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-border rounded-lg hover:border-accent-blue hover:shadow-lg transition-all cursor-pointer group">
            <div className="w-14 h-14 bg-bg-accent-blue rounded-md flex items-center justify-center mb-4 mx-auto">
              <Users className="w-7 h-7 text-accent-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">New to CPGIO?</h3>
            <p className="text-text-secondary text-base text-center mb-4">
              Explore our 5 strategic pillars and {capabilities.length} core capabilities with proven KPIs and case studies.
            </p>
            <div className="text-center text-accent-blue font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Explore Capabilities →
            </div>
          </div>

          <div className="p-6 border border-border rounded-lg hover:border-accent-blue hover:shadow-lg transition-all cursor-pointer group">
            <div className="w-14 h-14 bg-bg-accent-blue rounded-md flex items-center justify-center mb-4 mx-auto">
              <FileText className="w-7 h-7 text-accent-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Evaluating Us?</h3>
            <p className="text-text-secondary text-base text-center mb-4">
              Get direct answers to common RFP questions with copy-paste responses and supporting data.
            </p>
            <div className="text-center text-accent-blue font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Browse RFP Center →
            </div>
          </div>

          <div className="p-6 border border-border rounded-lg hover:border-accent-blue hover:shadow-lg transition-all cursor-pointer group">
            <div className="w-14 h-14 bg-bg-accent-blue rounded-md flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="w-7 h-7 text-accent-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Internal Team?</h3>
            <p className="text-text-secondary text-base text-center mb-4">
              Use AI-powered search to find specific answers, case studies, or prep for client calls.
            </p>
            <div className="text-center text-accent-blue font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Search Knowledge Base →
            </div>
          </div>
        </div>

        {/* Pillar Cards Section */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold">Our 5 Strategic Pillars</h2>
            <p className="text-text-secondary">
              Click any pillar to expand and see specific capabilities with KPIs.
            </p>
          </div>

          <div className="space-y-3">
            {pillars.map((pillar) => {
              const pillarCapabilities = getCapabilitiesByPillar(pillar);
              const isExpanded = expandedPillar === pillar;

              return (
                <div key={pillar} className="border border-border rounded-lg overflow-hidden hover:border-accent-blue transition-colors">
                  <button
                    onClick={() => togglePillar(pillar)}
                    className="w-full p-6 flex items-center justify-between bg-bg-secondary hover:bg-bg-hover transition-colors"
                  >
                    <div className="flex-1 text-left">
                      <h3 className="text-lg font-semibold text-primary">{pillar}</h3>
                      <p className="text-sm text-text-secondary mt-1">
                        {pillarCounts[pillar]} {pillarCounts[pillar] === 1 ? 'Capability' : 'Capabilities'}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-text-secondary transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="p-4 bg-bg-tertiary space-y-3">
                      {pillarCapabilities.map((cap) => (
                        <div
                          key={cap.id}
                          className="p-4 bg-bg-primary border border-border rounded-md hover:border-accent-blue hover:shadow-sm transition-all cursor-pointer"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-primary">{cap.title}</h4>
                            <span className="text-accent-blue text-sm">→</span>
                          </div>
                          <p className="text-sm text-text-secondary mb-3">{cap.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {cap.kpis.slice(0, 3).map((kpi, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-3 py-1 bg-bg-accent-blue text-accent-blue rounded-full font-medium"
                              >
                                {kpi.metric}: {kpi.value}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance Highlights */}
        <div className="space-y-6 pt-8 border-t border-border">
          <h2 className="text-2xl font-semibold text-center">Performance Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue">48K units/hr</div>
              <div className="text-sm text-text-secondary mt-1">Peak Velocity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue">5-8x</div>
              <div className="text-sm text-text-secondary mt-1">ROAS Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue">$526K</div>
              <div className="text-sm text-text-secondary mt-1">Monthly Revenue Recovery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue">800+</div>
              <div className="text-sm text-text-secondary mt-1">ASINs Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue">56</div>
              <div className="text-sm text-text-secondary mt-1">Sellers Removed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue">&lt;0.01%</div>
              <div className="text-sm text-text-secondary mt-1">Defect Rate</div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-text-tertiary text-sm py-8">
          <p>Next.js Production Build • Phase 2: Data Migration Complete</p>
          <p className="mt-1">{capabilities.length} Capabilities • 5 Pillars • TypeScript</p>
        </div>
      </div>
    </div>
  );
}
