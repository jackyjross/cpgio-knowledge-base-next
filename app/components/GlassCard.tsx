"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface GlassCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
}

export default function GlassCard({ title, description, icon: Icon, onClick }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
      className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300 transition-colors">
          <Icon size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
