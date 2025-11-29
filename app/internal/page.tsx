"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
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
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <LayoutDashboard className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                Internal Dashboard
              </h1>
              <p className="text-lg text-muted-foreground mt-1">
                CPGIO Knowledge Base Management & Tools
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => router.push(stat.link)}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    stat.color === 'blue' ? 'bg-chart-1' :
                    stat.color === 'teal' ? 'bg-chart-2' :
                    stat.color === 'orange' ? 'bg-chart-4' :
                    'bg-chart-5'
                  }`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <ArrowRight className="w-4 h-4 arrow-glow" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tools Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Internal Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card
                  key={tool.title}
                  className="cursor-pointer hover:shadow-lg transition-shadow flex flex-col"
                  onClick={() => router.push(tool.href)}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        tool.color === 'blue' ? 'bg-chart-1' :
                        tool.color === 'teal' ? 'bg-chart-2' :
                        'bg-chart-3'
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                          {tool.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {tool.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" className="w-full justify-between">
                      <span>Open Tool</span>
                      <ArrowRight className="w-4 h-4 arrow-glow" />
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Feed */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                </div>
                <CardTitle>Recent Activity</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">
                        {activity.action}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.item}
                      </p>
                    </div>
                    <time className="text-xs text-muted-foreground">
                      {activity.time}
                    </time>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                onClick={() => router.push("/internal/ai-qa")}
                className="w-full justify-between"
              >
                <span>Ask AI Question</span>
                <MessageSquare className="w-4 h-4" />
              </Button>

              <Button
                onClick={() => router.push("/internal/rfp-analyzer")}
                variant="outline"
                className="w-full justify-between"
              >
                <span>Analyze RFP</span>
                <FileText className="w-4 h-4" />
              </Button>

              <Button
                onClick={() => router.push("/")}
                variant="outline"
                className="w-full justify-between"
              >
                <span>View Public Site</span>
                <ArrowRight className="w-4 h-4 arrow-glow" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
