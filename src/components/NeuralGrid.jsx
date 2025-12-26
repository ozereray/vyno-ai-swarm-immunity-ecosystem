import React from "react";
import { motion } from "framer-motion";

export default function NeuralGrid() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-vyno-black">
      {/* Dinamik Merkezi Parlama - Sistemin 'Bağışıklık' nabzını temsil eder */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-vyno-accent/10 via-transparent to-transparent"
      />

      {/* Statik Teknolojik Grid Katmanı */}
      <svg
        className="h-full w-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Alt Karartma - İçeriğin okunabilirliğini artırmak için */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vyno-black/20 to-vyno-black" />
    </div>
  );
}
