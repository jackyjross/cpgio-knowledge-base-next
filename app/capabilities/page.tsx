'use client';

import Link from 'next/link';
import { capabilities, getAllPillars, getCapabilitiesByPillar } from '@/lib/data/capabilities';
import { ArrowLeft } from 'lucide-react';

export default function CapabilitiesPage() {
  const pillars = getAllPillars();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div>
            <h1 className="text-4xl font-bold text-primary">CPGIO Capabilities</h1>
            <p className="text-lg text-text-secondary mt-2">
              Comprehensive overview of CPGIO's operational capabilities, strategic frameworks,
              and service-level performance metrics.
            </p>
          </div>

          <div className="flex gap-4 text-sm text-text-tertiary">
            <span>{capabilities.length} Capabilities</span>
            <span>•</span>
            <span>{pillars.length} Strategic Pillars</span>
          </div>
        </div>

        {/* Capabilities grouped by Pillar */}
        {pillars.map((pillar) => {
          const pillarCapabilities = getCapabilitiesByPillar(pillar);

          return (
            <div key={pillar} className="space-y-4">
              <div className="border-b border-border pb-2">
                <h2 className="text-2xl font-semibold text-primary">{pillar}</h2>
                <p className="text-sm text-text-secondary mt-1">
                  {pillarCapabilities.length} {pillarCapabilities.length === 1 ? 'Capability' : 'Capabilities'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pillarCapabilities.map((capability) => (
                  <Link
                    key={capability.id}
                    href={`/capabilities/${capability.id}`}
                    className="block p-6 border border-border rounded-lg hover:border-accent-blue hover:shadow-lg transition-all group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold text-primary group-hover:text-accent-blue transition-colors">
                          {capability.title}
                        </h3>
                        <span className="text-accent-blue text-sm group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>

                      <p className="text-sm text-text-secondary line-clamp-2">
                        {capability.description}
                      </p>

                      {/* KPI Preview */}
                      <div className="flex flex-wrap gap-2">
                        {capability.kpis.slice(0, 3).map((kpi, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-bg-accent-blue text-accent-blue rounded font-medium"
                          >
                            {kpi.metric}: {kpi.value}
                          </span>
                        ))}
                      </div>

                      <div className="text-sm text-accent-blue font-medium">
                        View details →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
