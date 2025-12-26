import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-10 md:px-24">
      <motion.span 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-vyno-accent font-mono text-xs tracking-[0.5em] uppercase mb-8"
      >
        Autonomous Swarm Intelligence
      </motion.span>
      
      <motion.h1 
        initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl md:text-[140px] font-medium tracking-tighter leading-[0.9] text-white"
      >
        INFRASTRUCTURE <br /> 
        <span className="text-zinc-700 italic">THAT HEALS</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-12 max-w-2xl text-zinc-500 text-xl font-light leading-relaxed"
      >
        VYNO is a decentralized neural ecosystem providing self-healing immunity 
        for mission-critical systems across Mobility, Energy, and Industry 4.0.
      </motion.p>
    </section>
  );
}