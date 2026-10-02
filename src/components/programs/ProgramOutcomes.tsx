"use client";

import { motion } from "framer-motion";

export default function ProgramOutcomes() {
  const outcomes = [
    { title: "AI APPLICATIONS", style: "col-span-2 md:col-span-1 lg:col-span-2 row-span-2 bg-blue-900/20 border-blue-500/30 text-blue-400 text-2xl lg:text-3xl" },
    { title: "RAG SYSTEMS", style: "col-span-1 border-white/10 text-white text-lg" },
    { title: "AI AGENTS", style: "col-span-1 border-white/10 text-white text-lg" },
    { title: "MULTI-AGENT WORKFLOWS", style: "col-span-2 bg-indigo-900/20 border-indigo-500/30 text-indigo-300 text-xl" },
    { title: "GITHUB PROJECTS", style: "col-span-1 md:col-span-2 lg:col-span-1 border-white/10 text-slate-300" },
    { title: "ARCHITECTURE DIAGRAMS", style: "col-span-1 border-white/10 text-slate-300" },
    { title: "EVALUATION REPORTS", style: "col-span-1 border-white/10 text-slate-300" },
    { title: "DEPLOYED SYSTEMS", style: "col-span-1 border-white/10 text-slate-300" },
    { title: "INDUSTRY CAPSTONE", style: "col-span-2 md:col-span-4 lg:col-span-4 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border-blue-400/40 text-white text-3xl md:text-4xl" }
  ];

  return (
    <section className="py-32 bg-[#030712] border-b border-white/5 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_right,rgba(29,78,216,0.15)_0,rgba(10,25,47,0)_60%)] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="lg:w-1/3 text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-sm font-bold tracking-wider mb-8 uppercase">
              DELIVERABLES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              Leave With Proof of <span className="text-blue-500">What You Can Build.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
              Walk away with a production-ready engineering portfolio.
            </p>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-[120px]">
              {outcomes.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`glass-card p-6 rounded-3xl border flex items-center justify-center font-bold text-center uppercase tracking-wider hover:bg-white/5 transition-all shadow-lg ${item.style}`}
                >
                  {item.title}
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
