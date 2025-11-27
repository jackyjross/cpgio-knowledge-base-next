'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface CopyBoxProps {
  content: string;
  title?: string;
}

export function CopyBox({ content, title = 'RFP Response' }: CopyBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-blue opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-2xl" />
      <div className="relative bg-gray-900/95 backdrop-blur-md rounded-2xl border border-gray-700 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-gray-800/50">
          <span className="text-sm font-semibold text-gray-300">{title}</span>
          <motion.button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg text-sm font-medium transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </motion.button>
        </div>
        <div className="p-6 text-gray-300 text-sm leading-relaxed font-mono overflow-x-auto">
          <pre className="whitespace-pre-wrap">{content}</pre>
        </div>
      </div>
    </div>
  );
}
