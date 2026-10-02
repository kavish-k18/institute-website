"use client";

import { motion } from "framer-motion";

export default function ProgramTechStack() {
  return (
    <section className="py-32 bg-[#030712] border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0,rgba(3,7,18,1)_70%)]" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Work With the Tools <span className="text-blue-500">Powering Modern AI.</span></h2>
          <p className="text-xl md:text-2xl text-slate-400">
            Master industry-standard production tools.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0a192f] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center py-6 border-b border-white/5 last:border-0">
                <div className="w-64 text-sm font-bold text-slate-400 tracking-widest uppercase mb-2 md:mb-0">Model Layer</div>
                <div className="flex-1 text-slate-200 text-xl font-medium font-mono">OpenAI · Anthropic · Gemini · Mistral</div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center py-6 border-b border-white/5 last:border-0">
                <div className="w-64 text-sm font-bold text-slate-400 tracking-widest uppercase mb-2 md:mb-0">Knowledge Layer</div>
                <div className="flex-1 text-slate-200 text-xl font-medium font-mono">Embeddings · RAG · Vector Databases</div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center py-6 border-b border-white/5 last:border-0">
                <div className="w-64 text-sm font-bold text-slate-400 tracking-widest uppercase mb-2 md:mb-0">Agent Layer</div>
                <div className="flex-1 text-slate-200 text-xl font-medium font-mono">LangGraph · LangChain · CrewAI</div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center py-6 border-b border-white/5 last:border-0">
                <div className="w-64 text-sm font-bold text-slate-400 tracking-widest uppercase mb-2 md:mb-0">Application Layer</div>
                <div className="flex-1 text-slate-200 text-xl font-medium font-mono">Python · APIs · FastAPI / Flask</div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center py-6 border-b border-white/5 last:border-0">
                <div className="w-64 text-sm font-bold text-slate-400 tracking-widest uppercase mb-2 md:mb-0">Production Layer</div>
                <div className="flex-1 text-slate-200 text-xl font-medium font-mono">Docker · Deployment · Evaluation · Observability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
