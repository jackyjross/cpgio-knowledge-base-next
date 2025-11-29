"use client";

import Hero from "./components/Hero";
import { TrendingUp, ShoppingCart, Smartphone, Megaphone, Package } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";

export default function HomePage() {
  const router = useRouter();

  const pillars = [
    {
      title: "Growth Strategy & Planning",
      description: "Data-driven ASIN prioritization, 3P-first philosophy, and strategic frameworks for market entry and expansion.",
      icon: TrendingUp,
      slug: "growth-strategy",
    },
    {
      title: "Marketplace Operations",
      description: "Catalog development, GS1 compliance, brand protection, and marketplace cleanup across all channels.",
      icon: ShoppingCart,
      slug: "marketplace-ops",
    },
    {
      title: "Direct-to-Consumer & Owned Channels",
      description: "Omnichannel orchestration across Amazon 3P/1P, Walmart, TikTok Shop, and 10+ DTC sites.",
      icon: Smartphone,
      slug: "dtc-channels",
    },
    {
      title: "Retail Media & Performance Marketing",
      description: "5-8x ROAS campaigns, Amazon Marketing Cloud integration, and data-driven media optimization.",
      icon: Megaphone,
      slug: "retail-media",
    },
    {
      title: "Operations & Supply Chain",
      description: "48K units/hr peak velocity, <0.01% defect rates, and integrated fulfillment operations.",
      icon: Package,
      slug: "supply-chain",
    },
  ];

  return (
    <main className="bg-background">
      <Hero />

      <section className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Strategic Capabilities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive eCommerce solutions across five strategic pillars
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <Card
                    key={pillar.slug}
                    className="cursor-pointer hover:shadow-md transition-all hover:border-primary/50"
                    onClick={() => router.push(`/capabilities#${pillar.slug}`)}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {pillar.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {pillar.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
