import React from "react";
import { motion } from "framer-motion";
import { Car, Zap, Cpu } from "lucide-react"; // 'CPU' yerine 'Cpu' olarak düzeltildi

const sectors = [
  {
    name: "Mobility",
    desc: "ASIL-D compliant immunity for autonomous fleets and software-defined vehicles.",
    icon: <Car />,
  },
  {
    name: "Energy",
    desc: "Resilient decentralized grid protection and self-healing energy clusters.",
    icon: <Zap />,
  },
  {
    name: "Industry",
    desc: "Zero-downtime swarm logic for smart manufacturing and Industry 4.0 infrastructures.",
    icon: <Cpu />, // 'Cpu' ikonu burada kullanıldı
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="py-40 px-10 md:px-24 border-t border-white/5 bg-black/20 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-600 text-xs font-bold uppercase tracking-[0.4em] mb-16"
        >
          Universal Applicability
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 border border-white/5">
          {sectors.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              viewport={{ once: true }}
              className="p-16 flex flex-col items-start transition-all bg-vyno-black group"
            >
              <div className="text-vyno-accent mb-12 group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="text-white text-3xl font-bold mb-6 tracking-tight">
                {s.name}
              </h3>
              <p className="text-zinc-500 font-light text-lg leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
