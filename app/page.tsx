"use client";

import Hero from "./components/Hero";
import GlassCard from "./components/GlassCard";
import { TrendingUp, ShoppingCart, Smartphone, Megaphone, Package } from "lucide-react";
import { useRouter } from "next/navigation";

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
    <main>
      <Hero />

      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Strategic Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((pillar) => (
            <GlassCard
              key={pillar.slug}
              title={pillar.title}
              description={pillar.description}
              icon={pillar.icon}
              onClick={() => router.push(`/capabilities#${pillar.slug}`)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
