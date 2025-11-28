import { notFound } from 'next/navigation';
import Link from 'next/link';
import { caseStudies, getCaseStudyById } from '@/lib/data/case-studies';
import { capabilities } from '@/lib/data/capabilities';
import { ArrowLeft, CheckCircle2, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';
import { MeshGradient } from '@/app/components/ui/MeshGradient';
import { GlassCard } from '@/app/components/ui/GlassCard';
import { FadeIn } from '@/app/components/animations/FadeIn';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static paths for all case studies
export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.id,
  }));
}

// Generate metadata for each case study
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyById(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.brand} | CPGIO Case Studies`,
    description: caseStudy.challenge,
    openGraph: {
      title: `${caseStudy.brand} Case Study`,
      description: caseStudy.challenge,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseStudyById(slug);

  if (!caseStudy) {
    notFound();
  }

  // Get related capabilities
  const relatedCapabilities = caseStudy.relatedCapabilities
    .map(capId => capabilities.find(cap => cap.id === capId))
    .filter(Boolean);

  return (
    <main className="min-h-screen relative">
      <MeshGradient />

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Back Link */}
        <FadeIn>
          <Link
            href="/case-studies"
            className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--color-accent-blue)]/20 text-[var(--color-accent-blue)] border border-[var(--color-accent-blue)]/30">
                {caseStudy.category}
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              {caseStudy.brand}
            </h1>
            <p className="text-2xl text-white/70">
              {caseStudy.challenge}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Challenge */}
            <FadeIn delay={0.2}>
              <GlassCard>
                <h2 className="text-2xl font-bold text-white mb-4">
                  The Challenge
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </GlassCard>
            </FadeIn>

            {/* Execution */}
            <FadeIn delay={0.3}>
              <GlassCard>
                <h2 className="text-2xl font-bold text-white mb-6">
                  How We Delivered
                </h2>
                <div className="space-y-4">
                  {caseStudy.execution.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-teal)] flex-shrink-0 mt-0.5" />
                      <p className="text-white/80 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>

            {/* Results */}
            <FadeIn delay={0.4}>
              <GlassCard>
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-6 h-6 text-[var(--color-accent-orange)]" />
                  <h2 className="text-2xl font-bold text-white">
                    Results
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(caseStudy.results).map(([key, value], index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className="text-sm text-white/60 mb-2">{key}</div>
                      <div className="text-2xl font-bold text-[var(--color-accent-teal)]">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Related Capabilities */}
            {relatedCapabilities.length > 0 && (
              <FadeIn delay={0.5}>
                <GlassCard>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Related Capabilities
                  </h3>
                  <div className="space-y-3">
                    {relatedCapabilities.map((capability) => (
                      <Link
                        key={capability?.id}
                        href={`/capabilities/${capability?.id}`}
                        className="block p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[var(--color-accent-blue)]/50 transition-colors"
                      >
                        <div className="text-sm text-white font-medium">
                          {capability?.title}
                        </div>
                        <div className="text-xs text-white/60 mt-1">
                          {capability?.category}
                        </div>
                      </Link>
                    ))}
                  </div>
                </GlassCard>
              </FadeIn>
            )}

            {/* CTA */}
            <FadeIn delay={0.6}>
              <GlassCard className="bg-gradient-to-br from-[var(--color-accent-blue)]/10 to-[var(--color-accent-teal)]/10 border-[var(--color-accent-blue)]/30">
                <h3 className="text-xl font-bold text-white mb-3">
                  Ready to achieve similar results?
                </h3>
                <p className="text-white/70 mb-4 text-sm">
                  Let's discuss how CPGIO can accelerate your eCommerce growth.
                </p>
                <a
                  href="mailto:contact@cpgio.com"
                  className="inline-block px-6 py-3 bg-[var(--color-accent-blue)] hover:bg-[var(--color-accent-blue)]/80 text-white font-medium rounded-lg transition-colors w-full text-center"
                >
                  Get in Touch
                </a>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}
