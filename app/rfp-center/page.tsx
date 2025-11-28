"use client";

import { useState } from "react";
import { rfpAnswers, getRFPTags, searchRFPAnswers, getRFPAnswersByTag } from "@/lib/data/rfp-answers";
import { capabilities } from "@/lib/data/capabilities";
import { MeshGradient } from "../components/ui/MeshGradient";
import { GlassCard } from "../components/ui/GlassCard";
import { FadeIn } from "../components/animations/FadeIn";
import { Search, ChevronDown, Copy, Check, Tag, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function RFPCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const allTags = getRFPTags();

  // Filter by search and tag
  const filteredAnswers = rfpAnswers.filter(rfp => {
    const matchesSearch = searchQuery === "" ||
      rfp.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rfp.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rfp.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = selectedTag === "All" || rfp.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  const handleCopy = async (question: string, answer: string) => {
    const fullText = `Q: ${question}\n\nA: ${answer}`;
    await navigator.clipboard.writeText(fullText);
    setCopiedId(question);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="min-h-screen relative">
      <MeshGradient />

      <div className="max-w-5xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              RFP Answer Center
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-4">
              Pre-written answers to common RFP questions. All responses backed by real KPIs and case studies.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-white/50">
              <span>{rfpAnswers.length} answers available</span>
              <span>•</span>
              <span>Click to expand, copy to clipboard</span>
            </div>
          </div>
        </FadeIn>

        {/* Search Bar */}
        <FadeIn delay={0.1}>
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <input
                type="text"
                placeholder="Search by keyword, question, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-14 pr-6 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 backdrop-blur-sm focus:outline-none focus:border-[var(--color-accent-blue)]/50 transition-colors"
              />
            </div>
          </div>
        </FadeIn>

        {/* Tag Filter */}
        <FadeIn delay={0.15}>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-white/40" />
              <span className="text-sm text-white/60 font-medium">Filter by Topic</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag("All")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedTag === "All"
                    ? "bg-[var(--color-accent-blue)]/20 text-[var(--color-accent-blue)] border border-[var(--color-accent-blue)]/30"
                    : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                }`}
              >
                All ({rfpAnswers.length})
              </button>
              {allTags.map((tag) => {
                const count = rfpAnswers.filter(rfp => rfp.tags.includes(tag)).length;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedTag === tag
                        ? "bg-[var(--color-accent-blue)]/20 text-[var(--color-accent-blue)] border border-[var(--color-accent-blue)]/30"
                        : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {tag} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* RFP Answers Accordion */}
        <div className="space-y-4">
          {filteredAnswers.map((rfp, index) => {
            const relatedCapability = capabilities.find(cap => cap.id === rfp.relatedCapabilityId);

            return (
              <FadeIn key={rfp.question} delay={0.05 * Math.min(index, 10)}>
                <GlassCard className="overflow-hidden p-0">
                  <button
                    onClick={() => setExpandedId(expandedId === rfp.question ? null : rfp.question)}
                    className="w-full p-6 flex items-start justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {rfp.question}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {rfp.tags.map(tag => (
                          <span
                            key={tag}
                            className="inline-block px-2 py-1 rounded text-xs bg-white/10 text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ChevronDown
                      className={`flex-shrink-0 text-white/40 transition-transform ${
                        expandedId === rfp.question ? "rotate-180" : ""
                      }`}
                      size={20}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedId === rfp.question && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 space-y-4">
                          {/* Answer */}
                          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                            <p className="text-white/80 leading-relaxed whitespace-pre-line">
                              {rfp.answer}
                            </p>
                          </div>

                          {/* Related Capability */}
                          {relatedCapability && (
                            <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                              <div className="flex-1">
                                <div className="text-xs text-white/50 mb-1">Related Capability</div>
                                <div className="text-sm font-medium text-white">
                                  {relatedCapability.title}
                                </div>
                              </div>
                              <Link
                                href={`/capabilities/${relatedCapability.id}`}
                                className="flex items-center gap-1 text-sm text-[var(--color-accent-blue)] hover:text-[var(--color-accent-teal)] transition-colors"
                              >
                                View
                                <ExternalLink className="w-3 h-3" />
                              </Link>
                            </div>
                          )}

                          {/* Copy Button */}
                          <button
                            onClick={() => handleCopy(rfp.question, rfp.answer)}
                            className="flex items-center gap-2 px-6 py-3 bg-[var(--color-accent-blue)] hover:bg-[var(--color-accent-blue)]/80 text-white rounded-lg font-medium transition-colors w-full justify-center"
                          >
                            {copiedId === rfp.question ? (
                              <>
                                <Check size={16} />
                                Copied to Clipboard!
                              </>
                            ) : (
                              <>
                                <Copy size={16} />
                                Copy Q&A to Clipboard
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>

        {/* No Results */}
        {filteredAnswers.length === 0 && (
          <FadeIn delay={0.2}>
            <div className="text-center py-16">
              <p className="text-white/40 text-lg mb-4">
                No results found for "{searchQuery}" {selectedTag !== "All" && `in "${selectedTag}"`}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag("All");
                }}
                className="text-[var(--color-accent-blue)] hover:text-[var(--color-accent-teal)] transition-colors"
              >
                Clear filters
              </button>
            </div>
          </FadeIn>
        )}

        {/* Footer CTA */}
        <FadeIn delay={0.3}>
          <div className="mt-16 text-center">
            <GlassCard className="bg-gradient-to-br from-[var(--color-accent-blue)]/10 to-[var(--color-accent-teal)]/10 border-[var(--color-accent-blue)]/30">
              <h3 className="text-2xl font-bold text-white mb-3">
                Need a custom answer?
              </h3>
              <p className="text-white/70 mb-6">
                Contact us for tailored RFP responses specific to your project requirements.
              </p>
              <a
                href="mailto:contact@cpgio.com"
                className="inline-block px-8 py-4 bg-[var(--color-accent-blue)] hover:bg-[var(--color-accent-blue)]/80 text-white font-medium rounded-lg transition-colors"
              >
                Contact Sales Team
              </a>
            </GlassCard>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
