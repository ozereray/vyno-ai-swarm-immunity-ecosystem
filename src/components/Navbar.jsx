import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-black/50 backdrop-blur-md border-b border-white/5"
    >
      <div className="text-2xl font-black tracking-tighter text-white">
        VYNO <span className="text-vyno-accent">BRAIN</span>
      </div>
      <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-400">
        <a href="#vision" className="hover:text-vyno-accent transition">Vision</a>
        <a href="#ecosystem" className="hover:text-vyno-accent transition">Ecosystem</a>
        <a href="#tech" className="hover:text-vyno-accent transition">Technology</a>
      </div>
      <button className="px-6 py-2 border border-vyno-accent text-vyno-accent text-[10px] font-bold uppercase tracking-widest hover:bg-vyno-accent hover:text-black transition-all duration-500">
        Connect Core
      </button>
    </motion.nav>
  );
}