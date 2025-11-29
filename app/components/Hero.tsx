"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary">
            Knowledge Base
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            From RFP to ROI
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            An open knowledge base optimized for fast development, easy maintenance,
            and strategic decision-making. Built for evaluators, partners, and internal teams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-base bg-primary hover:bg-primary/90">
              <Link href="/capabilities">
                Explore Capabilities
                <ArrowRight className="ml-2 h-4 w-4 arrow-glow" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base border-primary/30 hover:bg-primary/10">
              <Link href="/rfp-center">
                Access RFP Center
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
