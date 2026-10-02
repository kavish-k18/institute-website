"use client";

import { motion } from "framer-motion";

const phases = [
  { num: "01", title: "FOUNDATIONS", desc: "Build the technical foundation required to develop modern AI applications." },
  { num: "02", title: "RAG", desc: "Connect LLMs with external knowledge and structured retrieval." },
  { num: "03", title: "AGENTS", desc: "Agents use tools, memory, reasoning and workflows." },
  { num: "04", title: "MULTI-AGENTS", desc: "Design systems where specialized agents collaborate." },
  { num: "05", title: "PRODUCTION", desc: "Move toward reliable, evaluated and deployable AI systems." },
  { num: "06", title: "CAPSTONE", desc: "Design, build, evaluate, deploy and present an AI system." },
];

export default function SixMonthJourney() {
  return (
    <section className="py-24 bg-[#030712] border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">From AI Foundations to <span className="text-blue-500">Autonomous Systems.</span></h2>
          <p className="text-slate-400 text-xl">From basics to an autonomous capstone.</p>
        </div>

        <div className="relative">
          {/* Glowing Line for Desktop */}
          <div className="absolute top-10 left-10 right-10 h-1 bg-white/5 hidden xl:block overflow-hidden rounded-full">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-blue-500 shadow-[0_0_20px_#3b82f6]"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-8 xl:gap-6 relative z-10">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex flex-col xl:items-center text-left xl:text-center group"
              >
                <div className="flex items-center xl:justify-center gap-6 xl:gap-0 xl:flex-col mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#0a192f] border-4 border-[#030712] outline outline-2 outline-blue-500/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(37,99,235,0.2)] group-hover:outline-blue-400 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all z-10 relative">
                    <span className="text-blue-400 font-mono font-bold text-2xl group-hover:text-white transition-colors">{phase.num}</span>
                  </div>
                  {/* Vertical line for mobile */}
                  <div className="h-0.5 w-full bg-white/10 xl:hidden" />
                </div>
                
                <div className="glass-card p-6 rounded-2xl border border-white/5 h-full w-full xl:w-56 group-hover:border-blue-500/20 group-hover:bg-white/5 transition-all">
                  <h3 className="text-white font-bold mb-3 text-lg leading-snug">{phase.title}</h3>
                  <p className="text-base text-slate-400 leading-relaxed">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
