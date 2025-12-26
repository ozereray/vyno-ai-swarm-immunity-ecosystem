import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 'motion' artık kullanılıyor
import { Activity, ShieldAlert, CheckCircle } from "lucide-react";

export default function IntegrityMonitor() {
  const [status, setStatus] = useState("Optimal");
  const [integrity, setIntegrity] = useState(100);

  const simulateThreat = () => {
    setStatus("Threat Detected");
    setIntegrity(74);

    // Otonom İyileşme Protokolü - Alman mühendislik hassasiyeti [cite: 2025-12-06]
    setTimeout(() => {
      setStatus("Self-Healing...");
      setTimeout(() => {
        setStatus("Optimal");
        setIntegrity(100);
      }, 2000);
    }, 1500);
  };

  return (
    <section className="py-24 px-10 md:px-24 bg-black/40 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto glass p-12 rounded-2xl border border-[#00FF88]/20"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h3 className="text-[#00FF88] text-xs font-bold uppercase tracking-[0.3em] mb-2">
              Live System Diagnostics
            </h3>
            <p className="text-white text-2xl font-bold tracking-tighter">
              Integrity Tester
            </p>
          </div>
          <motion.button
            whileHover={{ scale: status === "Optimal" ? 1.05 : 1 }}
            whileTap={{ scale: status === "Optimal" ? 0.95 : 1 }}
            onClick={simulateThreat}
            disabled={status !== "Optimal"}
            className={`px-6 py-3 border text-[10px] font-bold uppercase tracking-widest transition-all ${
              status === "Optimal"
                ? "bg-red-500/10 border-red-500/50 text-red-500 hover:bg-red-50"
                : "bg-zinc-800 border-zinc-700 text-zinc-500 cursor-not-allowed"
            }`}
          >
            {status === "Optimal" ? "Simulate Threat" : "Processing..."}
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Node Status */}
          <div className="space-y-4">
            <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
              Node Status
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={status}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className={`flex items-center gap-2 font-mono text-sm ${
                  status === "Optimal" ? "text-[#00FF88]" : "text-red-400"
                }`}
              >
                {status === "Optimal" ? (
                  <CheckCircle size={14} />
                ) : (
                  <ShieldAlert size={14} />
                )}
                {status}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* System Integrity Bar */}
          <div className="space-y-4">
            <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
              System Integrity
            </span>
            <div className="flex flex-col gap-2">
              <div className="text-white font-mono text-xl">{integrity}%</div>
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: `${integrity}%` }}
                  className={`h-full ${
                    integrity === 100 ? "bg-[#00FF88]" : "bg-red-500"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* ASIL-D Compliance */}
          <div className="space-y-4">
            <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
              ASIL-D Compliance
            </span>
            <div className="flex items-center gap-2 text-[#00FF88] font-mono text-sm">
              <Activity size={14} className="animate-pulse" />
              <span>ACTIVE SYSTEM</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
