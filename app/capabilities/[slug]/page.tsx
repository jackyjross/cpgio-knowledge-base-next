import { notFound } from 'next/navigation';
import Link from 'next/link';
import { capabilities, getCapabilityById } from '@/lib/data/capabilities';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

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

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <Link href="/" className="hover:text-accent-blue transition-colors">
            Home
          </Link>
          <span>›</span>
          <Link href="/capabilities" className="hover:text-accent-blue transition-colors">
            Capabilities
          </Link>
          <span>›</span>
          <span className="text-text-primary">{capability.title}</span>
        </div>

        {/* Back Button */}
        <Link
          href="/capabilities"
          className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Capabilities</span>
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 bg-bg-accent-blue text-accent-blue text-sm font-medium rounded-full">
            {capability.category}
          </div>
          <h1 className="text-4xl font-bold text-primary">{capability.title}</h1>
          <p className="text-xl text-text-secondary">{capability.description}</p>

          <div className="flex items-center gap-2 text-sm text-text-tertiary">
            <span className="font-medium">Pillar:</span>
            <span>{capability.pillar}</span>
          </div>
        </div>

        {/* Key Points */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Key Points</h2>
          <div className="space-y-3">
            {capability.keyPoints.map((point, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                <p className="text-text-secondary">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service-Level KPIs */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Service-Level KPIs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capability.kpis.map((kpi, idx) => (
              <div
                key={idx}
                className="p-6 border border-border rounded-lg bg-bg-secondary"
              >
                <div className="text-3xl font-bold text-accent-blue mb-2">
                  {kpi.value}
                </div>
                <div className="text-sm font-semibold text-primary mb-1">
                  {kpi.metric}
                </div>
                <div className="text-sm text-text-secondary">
                  {kpi.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Case Studies */}
        {capability.relatedCaseStudies.length > 0 && (
          <div className="space-y-4 pt-8 border-t border-border">
            <h2 className="text-2xl font-semibold text-primary">Related Case Studies</h2>
            <div className="flex flex-wrap gap-2">
              {capability.relatedCaseStudies.map((caseStudyId) => (
                <div
                  key={caseStudyId}
                  className="px-4 py-2 bg-bg-accent-teal text-accent-teal rounded-lg text-sm font-medium"
                >
                  {caseStudyId.split('-').map(word =>
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </div>
              ))}
            </div>
            <p className="text-sm text-text-tertiary">
              Case studies coming soon with detailed results and metrics.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="p-8 bg-bg-accent-blue border border-accent-blue rounded-lg text-center space-y-4">
          <h3 className="text-xl font-semibold text-primary">
            Want to learn more about {capability.title}?
          </h3>
          <p className="text-text-secondary">
            Contact our team to discuss how this capability can drive results for your brand.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:sales@cpgio.com"
              className="px-6 py-3 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-blue/90 transition-colors"
            >
              Contact Sales
            </a>
            <Link
              href="/capabilities"
              className="px-6 py-3 border border-border rounded-lg font-medium hover:border-accent-blue transition-colors"
            >
              Explore More Capabilities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
