"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "AI FOUNDATIONS", desc: "Core concepts, Python, and fundamentals." },
  { num: "02", title: "LLM ENGINEERING", desc: "Prompting, tool calling, and APIs." },
  { num: "03", title: "RAG & KNOWLEDGE", desc: "Embeddings, vector databases, and retrieval." },
  { num: "04", title: "AI AGENTS", desc: "Memory, reasoning, and autonomous execution." },
  { num: "05", title: "MULTI-AGENT SYSTEMS", desc: "Collaboration, workflow routing, and delegation." },
  { num: "06", title: "PRODUCTION AI", desc: "Deployment, guardrails, and observability." },
  { num: "07", title: "CAPSTONE", desc: "End-to-end industry-inspired project." }
];

export default function JourneySection() {
  return (
    <section className="py-24 bg-[#0a192f] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(29,78,216,0.15)_0,rgba(10,25,47,0)_60%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Journey From <span className="text-blue-500">Learner to AI Builder.</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A progressive path from understanding basic concepts to engineering production-ready agentic systems.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 relative">
          <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-white/5 -translate-y-1/2 hidden xl:block overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-blue-500/50"
            />
          </div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative z-10 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] xl:w-32 flex flex-col items-center group cursor-default"
            >
              <div className="w-16 h-16 rounded-full bg-[#0a192f] border-2 border-blue-500/30 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(37,99,235,0.2)] group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
                <span className="text-blue-400 font-mono font-bold text-lg group-hover:text-white transition-colors">{step.num}</span>
              </div>
              <h3 className="text-white font-bold mb-2 text-center text-sm group-hover:text-blue-400 transition-colors leading-tight">{step.title}</h3>
              <p className="text-[11px] text-slate-400 text-center leading-relaxed px-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
