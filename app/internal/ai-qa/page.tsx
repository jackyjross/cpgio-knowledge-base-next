"use client";

import { useState } from "react";
import { MeshGradient } from "../../components/ui/MeshGradient";
import { GlassCard } from "../../components/ui/GlassCard";
import { FadeIn } from "../../components/animations/FadeIn";
import {
  MessageSquare,
  Send,
  Sparkles,
  ArrowLeft,
  Copy,
  Check,
  Search,
  Zap
} from "lucide-react";
import Link from "next/link";
import { capabilities } from "@/lib/data/capabilities";
import { caseStudies } from "@/lib/data/case-studies";
import { rfpAnswers } from "@/lib/data/rfp-answers";

interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: string[];
}

export default function AIQAPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your CPGIO Knowledge Base assistant. Ask me anything about our capabilities, case studies, or RFP answers. I can help you find specific information or generate responses for proposals.",
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const suggestedQuestions = [
    "What is our defect rate?",
    "Tell me about the SOLA case study",
    "What ROAS do we typically achieve?",
    "How do we handle brand protection?",
    "What are our fulfillment capabilities?"
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response with knowledge base search
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages(prev => [...prev, response]);
      setIsLoading(false);
    }, 1000);
  };

  const generateResponse = (query: string): Message => {
    const lowerQuery = query.toLowerCase();

    // Search through knowledge base
    const matchingCapabilities = capabilities.filter(cap =>
      cap.title.toLowerCase().includes(lowerQuery) ||
      cap.description.toLowerCase().includes(lowerQuery) ||
      cap.keyPoints.some(kp => kp.toLowerCase().includes(lowerQuery))
    );

    const matchingCaseStudies = caseStudies.filter(cs =>
      cs.brand.toLowerCase().includes(lowerQuery) ||
      cs.challenge.toLowerCase().includes(lowerQuery)
    );

    const matchingRFPs = rfpAnswers.filter(rfp =>
      rfp.question.toLowerCase().includes(lowerQuery) ||
      rfp.answer.toLowerCase().includes(lowerQuery)
    );

    // Generate contextual response
    if (matchingRFPs.length > 0) {
      const rfp = matchingRFPs[0];
      return {
        role: "assistant",
        content: rfp.answer,
        sources: [`RFP: ${rfp.question}`]
      };
    }

    if (matchingCapabilities.length > 0) {
      const cap = matchingCapabilities[0];
      return {
        role: "assistant",
        content: `${cap.description}\n\nKey Points:\n${cap.keyPoints.map((kp, i) => `${i + 1}. ${kp}`).join('\n')}\n\nKPIs:\n${cap.kpis.map(kpi => `• ${kpi.metric}: ${kpi.value} - ${kpi.description}`).join('\n')}`,
        sources: [`Capability: ${cap.title}`]
      };
    }

    if (matchingCaseStudies.length > 0) {
      const cs = matchingCaseStudies[0];
      return {
        role: "assistant",
        content: `**${cs.brand}** (${cs.category})\n\n**Challenge:** ${cs.challenge}\n\n**Execution:**\n${cs.execution.map((e, i) => `${i + 1}. ${e}`).join('\n')}\n\n**Results:**\n${Object.entries(cs.results).map(([key, value]) => `• ${key}: ${value}`).join('\n')}`,
        sources: [`Case Study: ${cs.brand}`]
      };
    }

    return {
      role: "assistant",
      content: `I found ${matchingCapabilities.length + matchingCaseStudies.length + matchingRFPs.length} results in the knowledge base. Could you be more specific about what you're looking for?`,
      sources: []
    };
  };

  const handleCopy = async (content: string, index: number) => {
    await navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <main className="min-h-screen relative">
      <MeshGradient />

      <div className="max-w-5xl mx-auto px-4 py-12 relative z-10">
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
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                AI Q&A Assistant
              </h1>
              <p className="text-slate-700">
                Ask questions about CPGIO capabilities and get instant answers
              </p>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <FadeIn delay={0.1}>
          <GlassCard className="mb-6">
            {/* Messages */}
            <div className="space-y-6 mb-6 max-h-[500px] overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-4 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div className={`max-w-[80%] ${message.role === "user" ? "order-first" : ""}`}>
                    <div
                      className={`p-4 rounded-lg ${
                        message.role === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-900"
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{message.content}</div>

                      {message.sources && message.sources.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-slate-300">
                          <div className="text-xs text-slate-700 font-medium mb-1">
                            Sources:
                          </div>
                          {message.sources.map((source, idx) => (
                            <div key={idx} className="text-xs text-slate-600">
                              {source}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {message.role === "assistant" && (
                      <button
                        onClick={() => handleCopy(message.content, index)}
                        className="mt-2 text-xs text-slate-700 hover:text-slate-900 flex items-center gap-1"
                      >
                        {copiedIndex === index ? (
                          <>
                            <Check className="w-3 h-3" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            Copy
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center flex-shrink-0 text-white font-medium text-sm">
                      U
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white animate-pulse" />
                  </div>
                  <div className="bg-slate-100 p-4 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask a question..."
                className="flex-1 px-4 py-3 bg-slate-100 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send
              </button>
            </div>
          </GlassCard>
        </FadeIn>

        {/* Suggested Questions */}
        <FadeIn delay={0.2}>
          <GlassCard>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900">
                Suggested Questions
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInput(question)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-sm transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </main>
  );
}
