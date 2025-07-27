"use client";

import { motion } from "framer-motion";

export const LoaderOne = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative">
        {/* Central spinning ring */}
        <motion.div
          className="w-20 h-20 border-4 border-transparent border-t-purple-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Outer pulsing ring */}
        <motion.div
          className="absolute inset-0 w-20 h-20 border-2 border-purple-500/30 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Loading text */}
        <motion.div
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm font-mono"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading...
        </motion.div>
      </div>
    </div>
  );
};