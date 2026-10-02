"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Database, BrainCircuit, Network, Server, ShieldCheck, Globe } from "lucide-react";

const capabilities = [
  {
    icon: Terminal,
    title: "AI FOUNDATIONS",
    topics: ["Python for AI Engineering", "AI fundamentals", "LLM fundamentals"]
  },
  {
    icon: Cpu,
    title: "LLM ENGINEERING",
    topics: ["Prompt engineering", "Structured outputs", "LLM APIs", "Context management"]
  },
  {
    icon: Database,
    title: "RAG & KNOWLEDGE SYSTEMS",
    topics: ["Embeddings", "Semantic search", "Vector databases", "Retrieval pipelines", "Advanced RAG"]
  },
  {
    icon: BrainCircuit,
    title: "AGENT ENGINEERING",
    topics: ["Agent architecture", "Tool calling", "Reasoning patterns", "Memory", "Agent workflows"]
  },
  {
    icon: Network,
    title: "MULTI-AGENT SYSTEMS",
    topics: ["Agent roles", "Agent coordination", "Task delegation", "Multi-agent workflows"]
  },
  {
    icon: Server,
    title: "PRODUCTION AI",
    topics: ["Backend integration", "APIs", "Deployment", "Scalability"]
  },
  {
    icon: ShieldCheck,
    title: "EVALUATION & RELIABILITY",
    topics: ["AI evaluation", "Observability", "Guardrails", "Security", "Performance optimization"]
  },
  {
    icon: Globe,
    title: "CAPSTONE",
    topics: ["Architecture", "Development", "Evaluation", "Deployment", "Presentation"]
  }
];

export default function WhatYouLearn() {
  return (
    <section className="py-24 bg-[#0a192f] border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        <div className="max-w-4xl mb-20 text-center mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">What You'll <span className="text-blue-500">Learn</span></h2>
          <p className="text-xl md:text-2xl text-slate-300">
            Design, build, evaluate, and deploy.
          </p>
        </div>
        
        {/* 4 + 4 Asymmetric Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-colors flex flex-col hover:bg-white/5 group shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                <cap.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">{cap.title}</h3>
              <ul className="space-y-4 mt-auto">
                {cap.topics.map((topic, j) => (
                  <li key={j} className="flex items-start gap-3 text-base text-slate-300 group-hover:text-slate-200 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-2 opacity-80" />
                    <span className="leading-snug">{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
