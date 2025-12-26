import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section id="vision" className="py-40 px-10 md:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-5xl font-medium tracking-tighter mb-10">
            Engineering the <br />{" "}
            <span className="text-zinc-600">Future of Mobility.</span>
          </h2>
          <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-lg">
            <p>
              Germany's global leadership in engineering and innovation is the
              core of our development philosophy [cite: 2025-12-06]. VYNO AI
              integrates software development, sensor systems, and data-driven
              engineering to build the next generation of autonomous driving
              technologies [cite: 2025-12-06].
            </p>
            <p>
              Our commitment to clarity, precision, and long-term reliability
              ensures that critical infrastructures across electric mobility and
              autonomous fleets operate with zero-downtime integrity [cite:
              2025-12-06].
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <div className="h-64 bg-zinc-900/50 border border-white/5 rounded-2xl flex items-center justify-center text-vyno-accent/20 text-6xl font-black">
            AI
          </div>
          <div className="h-64 mt-12 bg-vyno-accent/5 border border-vyno-accent/10 rounded-2xl flex items-center justify-center text-vyno-accent text-6xl font-black">
            2025
          </div>
        </div>
      </div>
    </section>
  );
}
