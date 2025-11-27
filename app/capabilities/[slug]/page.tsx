import { notFound } from 'next/navigation';
import Link from 'next/link';
import { capabilities, getCapabilityById } from '@/lib/data/capabilities';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';
import { MeshGradient } from '@/app/components/ui/MeshGradient';
import { GlassCard } from '@/app/components/ui/GlassCard';
import { FadeIn } from '@/app/components/animations/FadeIn';
import { CountUp } from '@/app/components/animations/CountUp';
import { CopyBox } from '@/app/components/ui/CopyBox';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static paths for all capabilities
export async function generateStaticParams() {
  return capabilities.map((capability) => ({
    slug: capability.id,
  }));
}

// Generate metadata for each capability
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapabilityById(slug);

  if (!capability) {
    return {
      title: 'Capability Not Found',
    };
  }

  return {
    title: `${capability.title} | CPGIO Capabilities`,
    description: capability.description,
    openGraph: {
      title: capability.title,
      description: capability.description,
    },
  };
}

export default async function CapabilityDetailPage({ params }: Props) {
  const { slug } = await params;
  const capability = getCapabilityById(slug);

  if (!capability) {
    notFound();
  }

  // Generate RFP-ready content
  const rfpContent = `${capability.title}

${capability.description}

Key Points:
${capability.keyPoints.map((point, idx) => `${idx + 1}. ${point}`).join('\n')}

Service-Level KPIs:
${capability.kpis.map(kpi => `• ${kpi.metric}: ${kpi.value} - ${kpi.description}`).join('\n')}

Related Case Studies: ${capability.relatedCaseStudies.join(', ')}`;

  return (
    <>
      <MeshGradient />

      <div className="min-h-screen p-8 relative">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Breadcrumb */}
          <FadeIn>
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <Link href="/" className="hover:text-primary-600 transition-colors">
                Home
              </Link>
              <span>›</span>
              <Link href="/capabilities" className="hover:text-primary-600 transition-colors">
                Capabilities
              </Link>
              <span>›</span>
              <span className="text-gray-900">{capability.title}</span>
            </div>
          </FadeIn>

          {/* Back Button */}
          <FadeIn delay={0.1}>
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Capabilities</span>
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn delay={0.2}>
            <GlassCard className="p-10">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-50 to-blue-50 text-primary-700 text-sm font-bold rounded-full border border-primary-200">
                  {capability.category}
                </div>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 via-accent-blue to-accent-purple bg-clip-text text-transparent leading-tight">
                  {capability.title}
                </h1>
                <p className="text-2xl text-gray-700 leading-relaxed font-medium">{capability.description}</p>

                <div className="flex items-center gap-3 text-sm text-gray-600 pt-4">
                  <span className="font-semibold text-gray-900">Pillar:</span>
                  <span className="px-3 py-1 bg-white/50 rounded-full font-medium">{capability.pillar}</span>
                </div>
              </div>
            </GlassCard>
          </FadeIn>

          {/* Key Points */}
          <FadeIn delay={0.3}>
            <GlassCard className="p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Points</h2>
              <div className="space-y-5">
                {capability.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-700 text-lg leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </FadeIn>

          {/* Service-Level KPIs */}
          <FadeIn delay={0.4}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-blue bg-clip-text text-transparent">
                Service-Level KPIs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capability.kpis.map((kpi, idx) => (
                  <FadeIn key={idx} delay={0.45 + idx * 0.05}>
                    <GlassCard className="p-8 group hover:scale-105 transition-transform">
                      <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-blue bg-clip-text text-transparent mb-4">
                        <CountUp value={kpi.value} />
                      </div>
                      <div className="text-lg font-bold text-gray-900 mb-2">
                        {kpi.metric}
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {kpi.description}
                      </div>
                    </GlassCard>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* RFP Copy Box */}
          <FadeIn delay={0.6}>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">RFP Response Copy</h2>
              <p className="text-gray-600">
                Pre-formatted response ready to paste into your RFP or proposal.
              </p>
              <CopyBox content={rfpContent} title={`${capability.title} - RFP Response`} />
            </div>
          </FadeIn>

          {/* Related Case Studies */}
          {capability.relatedCaseStudies.length > 0 && (
            <FadeIn delay={0.7}>
              <GlassCard className="p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Case Studies</h2>
                <div className="flex flex-wrap gap-3 mb-4">
                  {capability.relatedCaseStudies.map((caseStudyId) => (
                    <div
                      key={caseStudyId}
                      className="px-5 py-3 bg-gradient-to-r from-accent-teal/10 to-accent-blue/10 text-accent-teal rounded-xl text-sm font-bold border border-accent-teal/20 hover:scale-105 transition-transform"
                    >
                      {caseStudyId.split('-').map(word =>
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Case studies coming soon with detailed results and metrics.
                </p>
              </GlassCard>
            </FadeIn>
          )}

          {/* CTA Section */}
          <FadeIn delay={0.8}>
            <GlassCard className="p-12 text-center">
              <div className="space-y-6 max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-purple bg-clip-text text-transparent">
                  Want to learn more about {capability.title}?
                </h3>
                <p className="text-gray-600 text-lg">
                  Contact our team to discuss how this capability can drive results for your brand.
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
                    Explore More Capabilities
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
