"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "LLMs",
    tools: ["OpenAI", "Anthropic", "Gemini", "Mistral"]
  },
  {
    name: "AI APPLICATIONS",
    tools: ["LangChain", "LangGraph", "CrewAI", "RAG"]
  },
  {
    name: "KNOWLEDGE SYSTEMS",
    tools: ["Embeddings", "Vector Databases", "FAISS", "Chroma"]
  },
  {
    name: "ENGINEERING",
    tools: ["Python", "APIs", "FastAPI / Flask", "Git & GitHub", "Docker", "Cloud Deployment"]
  },
  {
    name: "RELIABILITY",
    tools: ["Evaluation", "Observability", "Guardrails", "AI Security"]
  }
];

export default function TechStackSection() {
  return (
    <section className="py-24 bg-[#030712] border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-xs font-semibold tracking-wider mb-4 uppercase">
            THE AI ENGINEERING STACK
          </div>
          <h2 className="text-3xl font-bold mb-4">Work With the Tools <span className="text-blue-500">Powering Modern AI.</span></h2>
          <p className="text-slate-400 text-sm">
            Learn the actual technologies used in production to build scalable, reliable agentic systems.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#0a192f] border border-white/10 rounded-xl p-8 shadow-[0_0_50px_rgba(37,99,235,0.05)]">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-white/5 last:border-0">
              <div className="w-48 text-sm font-bold text-slate-400 tracking-widest mb-2 md:mb-0">MODEL LAYER</div>
              <div className="flex-1 text-slate-200 text-lg font-medium">OpenAI · Anthropic · Gemini · Mistral</div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-white/5 last:border-0">
              <div className="w-48 text-sm font-bold text-slate-400 tracking-widest mb-2 md:mb-0">KNOWLEDGE LAYER</div>
              <div className="flex-1 text-slate-200 text-lg font-medium">Embeddings · RAG · Vector Databases</div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-white/5 last:border-0">
              <div className="w-48 text-sm font-bold text-slate-400 tracking-widest mb-2 md:mb-0">AGENT LAYER</div>
              <div className="flex-1 text-slate-200 text-lg font-medium">LangGraph · LangChain · CrewAI</div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-white/5 last:border-0">
              <div className="w-48 text-sm font-bold text-slate-400 tracking-widest mb-2 md:mb-0">APPLICATION LAYER</div>
              <div className="flex-1 text-slate-200 text-lg font-medium">Python · APIs · FastAPI / Flask</div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center py-4 border-b border-white/5 last:border-0">
              <div className="w-48 text-sm font-bold text-slate-400 tracking-widest mb-2 md:mb-0">PRODUCTION LAYER</div>
              <div className="flex-1 text-slate-200 text-lg font-medium">Docker · Deployment · Evaluation · Observability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
