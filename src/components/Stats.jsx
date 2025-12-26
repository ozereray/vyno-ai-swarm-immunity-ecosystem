import { motion } from 'framer-motion';

const stats = [
  { label: "Neural Nodes", value: "10,000+", detail: "Distributed swarm agents" },
  { label: "Integrity Level", value: "ASIL-D", detail: "Highest safety standard" },
  { label: "Healing Speed", value: "<2ms", detail: "Real-time autonomous recovery" },
  { label: "Deployment", value: "Global", detail: "Cross-sector infrastructure" }
];

export default function Stats() {
  return (
    <section id="tech" className="py-24 bg-vyno-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-2"
            >
              <span className="text-vyno-accent text-5xl font-black tracking-tighter">
                {stat.value}
              </span>
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </span>
              <span className="text-zinc-600 text-[10px] uppercase tracking-wider">
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}