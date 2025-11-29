"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <Sparkles size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">The Intelligence Engine for CPG Growth</span>
            <span className="sm:hidden">CPG Growth Intelligence</span>
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            From RFP to ROI.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            The definitive knowledge base for CPGIO's capabilities, case studies, and strategic frameworks.
            Built for evaluators, partners, and internal teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Link href="/capabilities" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                Explore Capabilities
                <ArrowRight className="inline-block ml-2 arrow-glow group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </Link>
            <Link href="/rfp-center" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold backdrop-blur-sm transition-all">
                Access RFP Center
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
