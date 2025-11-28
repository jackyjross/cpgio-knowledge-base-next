"use client";

import { useState } from "react";
import { MeshGradient } from "../components/ui/MeshGradient";
import { GlassCard } from "../components/ui/GlassCard";
import { FadeIn } from "../components/animations/FadeIn";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  TrendingUp,
  Users,
  Briefcase,
  Search,
  Sparkles,
  ArrowRight,
  BarChart3,
  Clock,
  CheckCircle2
} from "lucide-react";
import { useRouter } from "next/navigation";
import { capabilities } from "@/lib/data/capabilities";
import { caseStudies } from "@/lib/data/case-studies";
import { rfpAnswers } from "@/lib/data/rfp-answers";

export default function InternalDashboard() {
  const router = useRouter();

  const stats = [
    {
      label: "Total Capabilities",
      value: capabilities.length.toString(),
      icon: TrendingUp,
      color: "blue",
      link: "/capabilities"
    },
    {
      label: "Case Studies",
      value: caseStudies.length.toString(),
      icon: Briefcase,
      color: "teal",
      link: "/case-studies"
    },
    {
      label: "RFP Answers",
      value: rfpAnswers.length.toString(),
      icon: FileText,
      color: "orange",
      link: "/rfp-center"
    },
    {
      label: "Knowledge Base",
      value: "Ready",
      icon: CheckCircle2,
      color: "green",
      link: "/"
    }
  ];

  const tools = [
    {
      title: "AI Q&A Assistant",
      description: "Ask questions about CPGIO capabilities, get instant answers powered by our knowledge base.",
      icon: MessageSquare,
      href: "/internal/ai-qa",
      color: "blue",
      features: ["Natural language queries", "Context-aware responses", "Source citations"]
    },
    {
      title: "RFP Analyzer",
      description: "Upload RFP documents, automatically extract requirements and generate responses.",
      icon: FileText,
      href: "/internal/rfp-analyzer",
      color: "teal",
      features: ["Document parsing", "Auto-match capabilities", "Export responses"]
    },
    {
      title: "Analytics Dashboard",
      description: "Track usage metrics, popular searches, and knowledge base performance.",
      icon: BarChart3,
      href: "/internal/analytics",
      color: "purple",
      features: ["Usage metrics", "Search analytics", "Performance tracking"]
    }
  ];

  const recentActivity = [
    { action: "RFP Answer Updated", item: "Defect Rate Question", time: "2 hours ago" },
    { action: "Case Study Added", item: "SOLA Scaling", time: "1 day ago" },
    { action: "Capability Updated", item: "Media Framework", time: "2 days ago" },
  ];

  return (
    <main className="min-h-screen relative">
      <MeshGradient />

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-slate-900">
                  Internal Dashboard
                </h1>
                <p className="text-slate-600">
                  CPGIO Knowledge Base Management & Tools
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <FadeIn key={stat.label} delay={0.1 + index * 0.05}>
                <GlassCard
                  onClick={() => router.push(stat.link)}
                  className="cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 text-${stat.color}-600`} />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">
                    {stat.label}
                  </div>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>

        {/* Tools Section */}
        <FadeIn delay={0.3}>
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">
                Internal Tools
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <FadeIn key={tool.title} delay={0.35 + index * 0.05}>
                    <GlassCard
                      onClick={() => router.push(tool.href)}
                      className="cursor-pointer h-full"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${tool.color}-500 to-${tool.color}-600 flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-2">
                            {tool.title}
                          </h3>
                          <p className="text-sm text-slate-600 mb-4">
                            {tool.description}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {tool.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <div className="flex items-center text-blue-600 font-medium text-sm">
                          Open Tool
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </GlassCard>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Recent Activity */}
        <FadeIn delay={0.5}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Activity Feed */}
            <div className="lg:col-span-2">
              <GlassCard>
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-5 h-5 text-slate-600" />
                  <h3 className="text-xl font-bold text-slate-900">
                    Recent Activity
                  </h3>
                </div>

                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-900">
                          {activity.action}
                        </div>
                        <div className="text-sm text-slate-600">
                          {activity.item}
                        </div>
                      </div>
                      <div className="text-xs text-slate-500">
                        {activity.time}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Quick Actions */}
            <div>
              <GlassCard>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Quick Actions
                </h3>

                <div className="space-y-3">
                  <button
                    onClick={() => router.push("/internal/ai-qa")}
                    className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors flex items-center justify-between"
                  >
                    <span>Ask AI Question</span>
                    <MessageSquare className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => router.push("/internal/rfp-analyzer")}
                    className="w-full px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg font-medium text-sm transition-colors flex items-center justify-between"
                  >
                    <span>Analyze RFP</span>
                    <FileText className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => router.push("/")}
                    className="w-full px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg font-medium text-sm transition-colors flex items-center justify-between"
                  >
                    <span>View Public Site</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </GlassCard>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
