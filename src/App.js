import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import IntegrityMonitor from "./components/IntegrityMonitor";
import Ecosystem from "./components/Ecosystem";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import NeuralGrid from "./components/NeuralGrid";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-[#050505] min-h-screen selection:bg-[#00FF88] selection:text-black antialiased">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#00FF88] z-[60] origin-left"
      />

      <NeuralGrid />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Stats />
        <Vision />
        <IntegrityMonitor /> {/* Yeni Tester Bölümü */}
        <section className="px-10 md:px-24 py-40 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-zinc-800 text-[15vw] font-black uppercase tracking-tighter select-none leading-none text-center"
          >
            PRECISION
          </motion.h2>
        </section>
        <Ecosystem />
      </main>

      <Footer />
    </div>
  );
}

export default App;
