'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-purple-500/20">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold font-space-grotesk bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Sahil Singh</h3>
            <p className="text-gray-400">GenAI Engineer & AI Innovator</p>
          </div>

          {/* <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-purple-400" />
            <span>using Next.js & AI</span>
          </div> */}

          <div className="mt-6 pt-6 border-t border-purple-500/20">
            <p className="text-sm text-gray-500">
              © 2024 Sahil Singh. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}