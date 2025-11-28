"use client";

import { useState } from "react";
import { Search, ChevronDown, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const rfpAnswers = [
  {
    id: "1",
    question: "What is your fulfillment capacity and peak velocity?",
    answer: "CPGIO operates a high-velocity fulfillment operation with peak capacity of 48,000 units/hour during launch events and sustained capacity of 200,000 units/month. Our quality control maintains <0.01% defect rates even at peak volume.",
  },
  {
    id: "2",
    question: "What are your typical ROAS and advertising performance metrics?",
    answer: "Our media campaigns typically achieve 5-8x ROAS with new-to-brand customer acquisition rates of 29-41%. We use Amazon Marketing Cloud (AMC) and Pacvue for data-driven optimization.",
  },
  {
    id: "3",
    question: "How do you handle unauthorized sellers and marketplace violations?",
    answer: "CPGIO employs systematic rogue seller containment including IP infringement claims, policy violations, and Amazon Transparency program implementation. In one case study, we removed 56 unauthorized sellers and recovered $526K in monthly revenue.",
  },
  {
    id: "4",
    question: "What is your approach to catalog development and ASIN optimization?",
    answer: "We use a data-driven ASIN Scorecard System evaluating 7 weighted criteria: Page Score (SEO, images, A+ Content), Competition, Ratings & Reviews, Variation Strategy, and Growth Velocity. This has enabled us to launch 800+ ASINs with 45% faster time-to-sale.",
  },
  {
    id: "5",
    question: "Do you recommend starting with 3P or 1P on Amazon?",
    answer: "CPGIO recommends a '3P First' philosophy for rapid market entry with precise pricing control and catalog cleanup. Once top-performing SKUs are identified (typically top 10-20%), we expand to 1P/Vendor Central while maintaining unified operations.",
  },
  {
    id: "6",
    question: "What financial models do you offer (3PL vs Distribution)?",
    answer: "CPGIO offers both 3PL (brand retains ownership, transparent service billing) and Distribution (we own inventory, manage pricing/compliance) models using the same operational engine. Transition between models takes <30 days with 100% cost transparency.",
  },
  {
    id: "7",
    question: "What technology platforms and integrations do you support?",
    answer: "Our HyperQue system provides 100% integration across forecasting, purchasing, fulfillment, content, media, and customer operations. We integrate with Amazon Marketing Cloud (AMC), Pacvue, and support 10+ sales channels.",
  },
  {
    id: "8",
    question: "How do you handle GS1 compliance and catalog cleanup?",
    answer: "We conduct full catalog audits to separate authentic, GS1-compliant UPCs from rogue listings, establish compliant catalog under Brand Registry, and ensure one-to-one product matching. Audit completion typically takes 5-10 days with 100% catalog accuracy.",
  },
  {
    id: "9",
    question: "What channels beyond Amazon do you support?",
    answer: "CPGIO manages Amazon 3P, 1P, Walmart, TikTok Shop, and 10+ DTC sites through unified operations. We've launched brands on TikTok Shop generating $100K first-year revenue and scaled household brands to $20M+ annual run rate.",
  },
  {
    id: "10",
    question: "Can you provide examples of client results and outcomes?",
    answer: "Key outcomes include: Baby food brand - restored 50+ compliant ASINs; Mason Jar brand - removed 56 sellers, recovered $526K monthly revenue; SOLA scaling - achieved 60%+ organic sales post-media; Influencer spice launch - 48K units/hour velocity; SKU launch program - 800+ ASINs with 45% faster time-to-sale.",
  },
];

export default function RFPCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredAnswers = rfpAnswers.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = async (id: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/" className="inline-block text-slate-400 hover:text-white transition-colors mb-8">
            ← Back to Home
          </Link>
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            RFP Center
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Copy-paste answers to common RFP questions. All responses backed by real KPIs and case studies.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-full" />
          <div className="relative">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
            <input
              type="text"
              placeholder="Search RFP questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-16 pl-20 pr-8 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-400 text-lg backdrop-blur-sm focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {filteredAnswers.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
                <ChevronDown
                  className={`flex-shrink-0 text-slate-400 transition-transform ${
                    expandedId === item.id ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-4">
                        <p className="text-slate-300 leading-relaxed">{item.answer}</p>
                      </div>
                      <button
                        onClick={() => handleCopy(item.id, item.answer)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
                      >
                        {copiedId === item.id ? (
                          <>
                            <Check size={16} />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={16} />
                            Copy Answer
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {filteredAnswers.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400">No results found. Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}
