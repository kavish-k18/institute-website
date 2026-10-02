"use client";

import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0a192f] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.1)_0,rgba(10,25,47,0)_60%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mx-auto mb-8 border border-blue-500/30">
            <BrainCircuit className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Built Around Practical <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">AI Engineering.</span></h2>
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 text-left md:text-center shadow-xl">
            <p className="text-xl md:text-2xl text-slate-200 mb-6 font-medium leading-relaxed">
              The institute is designed around one simple principle:
            </p>
            <p className="text-2xl md:text-3xl text-blue-400 font-bold mb-8 leading-relaxed">
              The fastest way to understand modern AI systems is to build them.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              No toy examples. We focus on real-world problems and the engineering required to deploy modern agentic systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
