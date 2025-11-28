"use client";

import { useState } from "react";
import { caseStudies, getCaseStudyCategories } from "@/lib/data/case-studies";
import { GlassCard } from "../components/ui/GlassCard";
import { MeshGradient } from "../components/ui/MeshGradient";
import { FadeIn } from "../components/animations/FadeIn";
import { ArrowRight, Filter } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CaseStudiesPage() {
  const router = useRouter();
  const categories = getCaseStudyCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredCaseStudies = selectedCategory === "All"
    ? caseStudies
    : caseStudies.filter(cs => cs.category === selectedCategory);

  return (
    <main className="min-h-screen relative">
      <MeshGradient />

      {/* Header */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Case Studies
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real-world results from our work with leading CPG brands across fulfillment, media, and omnichannel growth.
            </p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
            <Filter className="w-4 h-4 text-white/40" />
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedCategory === "All"
                  ? "bg-[var(--color-accent-blue)]/20 text-[var(--color-accent-blue)] border border-[var(--color-accent-blue)]/30"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              All ({caseStudies.length})
            </button>
            {categories.map((category) => {
              const count = caseStudies.filter(cs => cs.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-[var(--color-accent-blue)]/20 text-[var(--color-accent-blue)] border border-[var(--color-accent-blue)]/30"
                      : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCaseStudies.map((caseStudy, index) => {
            // Get first key result for preview
            const firstResult = Object.entries(caseStudy.results)[0];

            return (
              <FadeIn key={caseStudy.id} delay={0.1 + (index % 9) * 0.05}>
                <GlassCard
                  onClick={() => router.push(`/case-studies/${caseStudy.id}`)}
                  className="cursor-pointer h-full flex flex-col"
                >
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-accent-blue)]/20 text-[var(--color-accent-blue)] border border-[var(--color-accent-blue)]/30">
                      {caseStudy.category}
                    </span>
                  </div>

                  {/* Brand */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {caseStudy.brand}
                  </h3>

                  {/* Challenge */}
                  <p className="text-gray-700 mb-4 flex-grow">
                    {caseStudy.challenge}
                  </p>

                  {/* Featured Result */}
                  {firstResult && (
                    <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-sm text-gray-600 mb-1">
                        {firstResult[0]}
                      </div>
                      <div className="text-xl font-bold text-[var(--color-accent-blue)]">
                        {firstResult[1]}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex items-center text-[var(--color-accent-blue)] font-medium text-sm mt-auto">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>

        {/* No Results */}
        {filteredCaseStudies.length === 0 && (
          <FadeIn delay={0.2}>
            <div className="text-center py-12">
              <p className="text-white/40 text-lg">
                No case studies found in this category.
              </p>
            </div>
          </FadeIn>
        )}
      </section>
    </main>
  );
}
