"use client";

import { useState } from "react";
import { MeshGradient } from "../../components/ui/MeshGradient";
import { GlassCard } from "../../components/ui/GlassCard";
import { FadeIn } from "../../components/animations/FadeIn";
import {
  FileText,
  Upload,
  ArrowLeft,
  Download,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check
} from "lucide-react";
import Link from "next/link";
import { rfpAnswers } from "@/lib/data/rfp-answers";
import { capabilities } from "@/lib/data/capabilities";

interface AnalyzedQuestion {
  question: string;
  matchedAnswer?: typeof rfpAnswers[0];
  matchedCapability?: typeof capabilities[0];
  confidence: "high" | "medium" | "low";
  suggestedResponse: string;
}

export default function RFPAnalyzerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzedQuestions, setAnalyzedQuestions] = useState<AnalyzedQuestion[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const analyzeRFP = () => {
    setIsAnalyzing(true);

    // Simulate RFP analysis
    setTimeout(() => {
      const mockQuestions: AnalyzedQuestion[] = [
        {
          question: "What is your fulfillment capacity and defect rate?",
          matchedAnswer: rfpAnswers.find(r => r.question.includes("defect rate")),
          confidence: "high",
          suggestedResponse: "We maintain peak velocity of 48,000 units/hour with <0.01% defect rates. Our quality control protocols include automated weight verification, visual inspection, and SIOC compliance checks at every stage."
        },
        {
          question: "Describe your typical ROAS for advertising campaigns",
          matchedAnswer: rfpAnswers.find(r => r.question.includes("ROAS")),
          confidence: "high",
          suggestedResponse: "We consistently deliver 5-8x ROAS through data-driven media strategies. Recent examples include SOLA (7-8x ROAS, scaled to $800K/month) and Bob's Red Mill (5.53x ROAS with 29% new-to-brand customers)."
        },
        {
          question: "How do you handle brand protection and unauthorized sellers?",
          matchedAnswer: rfpAnswers.find(r => r.question.includes("unauthorized")),
          confidence: "high",
          suggestedResponse: "We use a multi-layered approach: Amazon Brand Registry enrollment, Transparency program implementation, systematic IP violation reporting, test buy programs, and MAP enforcement. In one campaign, we removed 56 unauthorized sellers and recovered $526K in monthly revenue."
        },
        {
          question: "What marketplaces do you support beyond Amazon?",
          matchedAnswer: rfpAnswers.find(r => r.question.includes("marketplace")),
          confidence: "medium",
          suggestedResponse: "We manage Amazon 3P, Amazon 1P, Walmart, TikTok Shop, and 10+ DTC sites through unified operations. Recent results include scaling a household brand from <$50K to $1M monthly in 18 months."
        },
        {
          question: "Describe your onboarding process and timeline",
          matchedAnswer: rfpAnswers.find(r => r.question.includes("onboarding")),
          confidence: "high",
          suggestedResponse: "Comprehensive marketplace audit: 5-10 days. Initial catalog cleanup and compliance: 2-4 weeks. Full operational integration: 30-60 days. We can begin generating revenue within 30-60 days through orphan ASIN takeover strategies."
        }
      ];

      setAnalyzedQuestions(mockQuestions);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const exportResponses = () => {
    const content = analyzedQuestions.map((q, i) =>
      `Question ${i + 1}: ${q.question}\n\nResponse:\n${q.suggestedResponse}\n\n${'-'.repeat(80)}\n\n`
    ).join('');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rfp-responses.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen relative">
      <MeshGradient />

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/internal"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium mb-4"
          >
            <ArrowLeft className="w-4 h-4 arrow-glow" />
            <span>Back to Dashboard</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                RFP Analyzer
              </h1>
              <p className="text-slate-700">
                Upload RFP documents and automatically generate responses
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upload Section */}
          <div className="lg:col-span-1">
            <FadeIn delay={0.1}>
              <GlassCard>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Upload RFP Document
                </h3>

                <div className="mb-6">
                  <label className="block w-full">
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                      <div className="text-sm text-slate-700 mb-2">
                        Drop files here or click to upload
                      </div>
                      <div className="text-xs text-slate-600">
                        Supports PDF, DOCX, TXT, Excel
                      </div>
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        accept=".pdf,.docx,.txt,.xlsx,.xls"
                        className="hidden"
                      />
                    </div>
                  </label>

                  {file && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-slate-900 flex-1">{file.name}</span>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                  )}
                </div>

                <button
                  onClick={analyzeRFP}
                  disabled={!file || isAnalyzing}
                  className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Analyze RFP
                    </>
                  )}
                </button>

                {analyzedQuestions.length > 0 && (
                  <div className="mt-4">
                    <button
                      onClick={exportResponses}
                      className="w-full px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Export All Responses
                    </button>
                  </div>
                )}

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-xs font-medium text-slate-900 mb-2">
                    How it works:
                  </div>
                  <ul className="text-xs text-slate-800 space-y-1">
                    <li>• Extracts questions from RFP</li>
                    <li>• Matches with knowledge base</li>
                    <li>• Generates tailored responses</li>
                    <li>• Cites sources and capabilities</li>
                  </ul>
                </div>
              </GlassCard>
            </FadeIn>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              <GlassCard>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-slate-900">
                    Analyzed Questions & Responses
                  </h3>
                  {analyzedQuestions.length > 0 && (
                    <div className="text-sm text-slate-700">
                      {analyzedQuestions.length} questions found
                    </div>
                  )}
                </div>

                {analyzedQuestions.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-600">
                      Upload an RFP document to see analyzed questions and suggested responses
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {analyzedQuestions.map((item, index) => (
                      <div key={index} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                        {/* Question */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-700 text-xs font-bold">
                            Q{index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-slate-900 mb-2">
                              {item.question}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                                item.confidence === "high"
                                  ? "bg-green-100 text-green-700"
                                  : item.confidence === "medium"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                              }`}>
                                {item.confidence === "high" ? (
                                  <CheckCircle2 className="w-3 h-3" />
                                ) : (
                                  <AlertCircle className="w-3 h-3" />
                                )}
                                {item.confidence} confidence
                              </span>
                              {item.matchedAnswer && (
                                <span className="text-xs text-slate-600">
                                  Matched with knowledge base
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Response */}
                        <div className="bg-slate-50 p-4 rounded-lg mb-3">
                          <div className="text-sm text-slate-900 whitespace-pre-wrap">
                            {item.suggestedResponse}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleCopy(item.suggestedResponse, index)}
                            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-xs font-medium transition-colors flex items-center gap-1"
                          >
                            {copiedIndex === index ? (
                              <>
                                <Check className="w-3 h-3" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                Copy Response
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}
