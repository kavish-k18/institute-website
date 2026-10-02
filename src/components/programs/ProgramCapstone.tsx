"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, User, Layout, BrainCircuit, Database, Wrench, ShieldCheck, Cloud, LayoutTemplate } from "lucide-react";

export default function ProgramCapstone() {
  const outputs = [
    "Working AI application",
    "GitHub repository",
    "Architecture diagram",
    "Technical documentation",
    "Evaluation report",
    "Deployment",
    "Final presentation",
    "Portfolio-ready project"
  ];

  return (
    <section className="py-32 bg-[#050b14] border-b border-white/5 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08)_0,rgba(10,25,47,0)_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
        
        <div className="grid xl:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-900/30 border border-indigo-700/50 text-indigo-400 text-sm font-bold tracking-wider mb-8 uppercase">
              CAPSTONE
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              Your Final Project Should Be Something <span className="text-indigo-500">You Can Show.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
              Build and deploy an end-to-end AI system.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
              {outputs.map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-200 text-lg font-medium">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl border border-white/10 p-10 md:p-14 shadow-[0_0_80px_rgba(99,102,241,0.15)] relative w-full flex flex-col items-center bg-[#0a192f]/80"
          >
            <div className="text-base font-bold text-center text-slate-400 tracking-widest uppercase mb-10 border-b border-white/10 pb-4 w-full">
              End-to-End AI System Architecture
            </div>
            
            <div className="flex flex-col items-center gap-3 w-full max-w-lg">
              
              <div className="w-full flex justify-center">
                <div className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4 shadow-sm">
                  <User className="w-6 h-6 text-slate-300"/> 
                  <span className="font-bold text-lg text-slate-200">User / Client</span>
                </div>
              </div>
              
              <ArrowDown className="w-6 h-6 text-slate-500" />
              
              <div className="w-full flex justify-center">
                <div className="px-10 py-5 rounded-2xl bg-blue-900/30 border border-blue-500/30 flex items-center gap-4 w-80 justify-center shadow-[0_0_20px_rgba(37,99,235,0.15)]">
                  <LayoutTemplate className="w-6 h-6 text-blue-400"/> 
                  <span className="font-bold text-xl text-blue-100">AI Application UI</span>
                </div>
              </div>
              
              <ArrowDown className="w-6 h-6 text-slate-500" />
              
              <div className="w-full flex justify-center">
                <div className="px-10 py-6 rounded-2xl bg-indigo-900/40 border border-indigo-500/40 flex items-center gap-4 w-96 justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                  <BrainCircuit className="w-8 h-8 text-indigo-400"/> 
                  <span className="font-bold text-2xl text-indigo-100 tracking-wide">Agent Orchestrator</span>
                </div>
              </div>
              
              <div className="flex gap-8 md:gap-20 w-full justify-center px-4 my-4 relative">
                <div className="absolute top-0 w-48 border-t-2 border-slate-600 left-[calc(50%-6rem)] -z-10" />
                <div className="absolute top-0 h-6 border-l-2 border-slate-600 left-[calc(50%-6rem)] -z-10" />
                <div className="absolute top-0 h-6 border-l-2 border-slate-600 right-[calc(50%-6rem)] -z-10" />
                
                <div className="mt-6 px-6 py-4 rounded-xl bg-emerald-900/20 border border-emerald-500/30 flex flex-col items-center gap-3 w-48 text-center shadow-lg">
                  <Wrench className="w-6 h-6 text-emerald-400"/> 
                  <span className="text-sm font-bold text-emerald-200">Tools / APIs</span>
                </div>
                
                <div className="mt-6 px-6 py-4 rounded-xl bg-amber-900/20 border border-amber-500/30 flex flex-col items-center gap-3 w-48 text-center shadow-lg">
                  <Database className="w-6 h-6 text-amber-400"/> 
                  <span className="text-sm font-bold text-amber-200">Knowledge / RAG</span>
                </div>
              </div>
              
              <ArrowDown className="w-6 h-6 text-slate-500 mt-2" />
              
              <div className="w-full flex justify-center">
                <div className="px-8 py-4 rounded-xl bg-slate-800/80 border border-white/10 flex items-center gap-4 w-80 justify-center">
                  <ShieldCheck className="w-6 h-6 text-slate-300"/> 
                  <span className="font-bold text-lg text-slate-200">Evaluation & Guardrails</span>
                </div>
              </div>
              
              <ArrowDown className="w-6 h-6 text-slate-500" />
              
              <div className="w-full flex justify-center">
                <div className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4 w-80 justify-center">
                  <Cloud className="w-6 h-6 text-slate-300"/> 
                  <span className="font-bold text-lg text-slate-200">Production Deployment</span>
                </div>
              </div>

            </div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
}
