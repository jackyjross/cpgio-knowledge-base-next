import { notFound } from 'next/navigation';
import Link from 'next/link';
import { capabilities, getCapabilityById } from '@/lib/data/capabilities';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Breadcrumb */}
          <FadeIn>
            <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span>›</span>
              <Link href="/capabilities" className="hover:text-blue-600 transition-colors">
                Capabilities
              </Link>
              <span>›</span>
              <span className="text-slate-900">{capability.title}</span>
            </div>
          </FadeIn>

          {/* Back Button */}
          <FadeIn delay={0.1}>
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Capabilities</span>
            </Link>
          </FadeIn>

          {/* Header */}
          <Card>
            <CardHeader className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                {capability.category}
              </Badge>
              <CardTitle className="text-5xl md:text-6xl">
                {capability.title}
              </CardTitle>
              <CardDescription className="text-xl">
                {capability.description}
              </CardDescription>
              <div className="flex items-center gap-3 text-sm pt-4">
                <span className="font-semibold">Pillar:</span>
                <Badge variant="outline">{capability.pillar}</Badge>
              </div>
            </CardHeader>
          </Card>

          {/* Key Points */}
          <Card>
            <CardHeader>
              <CardTitle>Key Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {capability.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-base leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Service-Level KPIs */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Service-Level KPIs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capability.kpis.map((kpi, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl font-bold mb-2">
                      <CountUp value={kpi.value} />
                    </div>
                    <CardTitle className="text-xl">
                      {kpi.metric}
                    </CardTitle>
                    <CardDescription>
                      {kpi.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* RFP Copy Box */}
          <FadeIn delay={0.6}>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">RFP Response Copy</h2>
              <p className="text-slate-600">
                Pre-formatted response ready to paste into your RFP or proposal.
              </p>
              <CopyBox content={rfpContent} title={`${capability.title} - RFP Response`} />
            </div>
          </FadeIn>

          {/* Related Case Studies */}
          {capability.relatedCaseStudies.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Related Case Studies</CardTitle>
                <CardDescription>
                  Case studies coming soon with detailed results and metrics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {capability.relatedCaseStudies.map((caseStudyId) => (
                    <Badge
                      key={caseStudyId}
                      variant="secondary"
                      className="text-sm px-3 py-1"
                    >
                      {caseStudyId.split('-').map(word =>
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* CTA Section */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl">
                Want to learn more about {capability.title}?
              </CardTitle>
              <CardDescription className="text-lg pt-2">
                Contact our team to discuss how this capability can drive results for your brand.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="mailto:sales@cpgio.com">
                    Contact Sales
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/capabilities">
                    Explore More Capabilities
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
