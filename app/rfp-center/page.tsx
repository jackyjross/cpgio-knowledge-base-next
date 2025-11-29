"use client";

import { useState } from "react";
import { rfpAnswers, getRFPTags } from "@/lib/data/rfp-answers";
import { capabilities } from "@/lib/data/capabilities";
import { Search, ChevronDown, Copy, Check, Tag, ExternalLink, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";

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
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">
              RFP Answer Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pre-written answers to common RFP questions. All responses backed by real KPIs and case studies.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>{rfpAnswers.length} answers available</span>
              <span>•</span>
              <span>Click to expand, copy to clipboard</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Search by keyword, question, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          {/* Tag Filter */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground font-medium">Filter by Topic</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedTag === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag("All")}
              >
                All ({rfpAnswers.length})
              </Button>
              {allTags.map((tag) => {
                const count = rfpAnswers.filter(rfp => rfp.tags.includes(tag)).length;
                return (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag} ({count})
                  </Button>
                );
              })}
            </div>
          </div>

          {/* RFP Answers Accordion */}
          <div className="space-y-4">
            {filteredAnswers.map((rfp) => {
              const relatedCapability = capabilities.find(cap => cap.id === rfp.relatedCapabilityId);

              return (
                <Card key={rfp.question} className="overflow-hidden">
                  <button
                    onClick={() => setExpandedId(expandedId === rfp.question ? null : rfp.question)}
                    className="w-full p-6 flex items-start justify-between text-left hover:bg-accent transition-colors"
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {rfp.question}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {rfp.tags.map(tag => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <ChevronDown
                      className={`flex-shrink-0 text-muted-foreground transition-transform ${
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
                          <Card>
                            <CardContent className="pt-6">
                              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                {rfp.answer}
                              </p>
                            </CardContent>
                          </Card>

                          {/* Related Capability */}
                          {relatedCapability && (
                            <Card>
                              <CardContent className="pt-6">
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <div className="text-xs text-muted-foreground mb-1">Related Capability</div>
                                    <div className="text-sm font-medium">
                                      {relatedCapability.title}
                                    </div>
                                  </div>
                                  <Button variant="ghost" size="sm" asChild>
                                    <Link href={`/capabilities/${relatedCapability.id}`}>
                                      <span>View</span>
                                      <ExternalLink className="w-3 h-3 ml-1" />
                                    </Link>
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          )}

                          {/* Copy Button */}
                          <Button
                            onClick={() => handleCopy(rfp.question, rfp.answer)}
                            className="w-full"
                            size="lg"
                          >
                            {copiedId === rfp.question ? (
                              <>
                                <Check className="w-4 h-4 mr-2" />
                                Copied to Clipboard!
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4 mr-2" />
                                Copy Q&A to Clipboard
                              </>
                            )}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              );
            })}
          </div>

          {/* No Results */}
          {filteredAnswers.length === 0 && (
            <Card>
              <CardContent className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-4">
                  No results found for "{searchQuery}" {selectedTag !== "All" && `in "${selectedTag}"`}
                </p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTag("All");
                  }}
                >
                  Clear filters
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Footer CTA */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl">
                Need a custom answer?
              </CardTitle>
              <CardDescription className="text-lg pt-2">
                Contact us for tailored RFP responses specific to your project requirements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg">
                <a href="mailto:contact@cpgio.com">
                  Contact Sales Team
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
