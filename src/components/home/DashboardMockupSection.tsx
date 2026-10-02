"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, CheckCircle2, Circle, AlertCircle } from "lucide-react";

export default function DashboardMockupSection() {
  return (
    <section className="py-24 bg-[#0a192f] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-xs font-semibold tracking-wider mb-6">
              CAPSTONE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Final Project Should Be Something <span className="text-blue-500">You Can Show.</span></h2>
            <p className="text-slate-300 mb-8">
              During the final month, learners design and build an end-to-end AI system that solves a meaningful real-world problem.
            </p>
            
            <ul className="space-y-4">
              {['Working application', 'GitHub repository', 'Architecture diagram', 'Documentation', 'Evaluation report', 'Deployment', 'Final presentation', 'Portfolio entry'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.15)] overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
            {/* Window header */}
            <div className="bg-[#050b14] px-4 py-3 border-b border-white/5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
              </div>
              <div className="ml-4 flex items-center gap-2 text-xs text-slate-500 font-medium font-mono">
                <LayoutDashboard className="w-3.5 h-3.5" />
                capstone-architecture-flow
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="p-8 font-mono">
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                
                {[
                  { step: "Problem", detail: "Identify real-world bottleneck" },
                  { step: "Requirements", detail: "Define inputs, outputs, SLAs" },
                  { step: "Architecture", detail: "Design multi-agent orchestration" },
                  { step: "Implementation", detail: "Build with Python, LangGraph, LLMs" },
                  { step: "Evaluation", detail: "Test against custom datasets" },
                  { step: "Deployment", detail: "Dockerize and deploy to cloud" },
                  { step: "Presentation", detail: "Defend design decisions" }
                ].map((item, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-slate-700 bg-[#0a192f] group-hover:border-blue-500 group-hover:bg-blue-500/20 text-slate-500 group-hover:text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors">
                      <Circle className="w-2 h-2 fill-current" />
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-800 bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-300 text-sm">{item.step}</div>
                      </div>
                      <div className="text-slate-500 text-xs">{item.detail}</div>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
