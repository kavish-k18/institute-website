"use client";

import { motion } from "framer-motion";
import { BookOpen, Hammer, ServerCog, Trophy } from "lucide-react";

const principles = [
  {
    icon: BookOpen,
    title: "UNDERSTAND",
    description: "Build strong foundations in AI, LLMs, prompting, embeddings and modern AI concepts."
  },
  {
    icon: Hammer,
    title: "BUILD",
    description: "Turn concepts into working applications using APIs, frameworks, retrieval systems and agents."
  },
  {
    icon: ServerCog,
    title: "ENGINEER",
    description: "Learn architecture, tools, memory, evaluation, deployment, security and reliability."
  },
  {
    icon: Trophy,
    title: "CREATE",
    description: "Apply everything through projects and an industry-inspired capstone."
  }
];

export default function WhyEngineeringSection() {
  return (
    <section className="py-24 bg-[#0a192f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-xs font-semibold tracking-wider mb-4 uppercase">
            WHY AI ENGINEERING?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From AI Concepts to <span className="text-blue-500">Working Systems.</span></h2>
          <p className="text-slate-400">Bridge the gap between concept and production.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group border border-white/5 hover:border-blue-500/30 transition-colors"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <principle.icon className="w-24 h-24 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-100">{principle.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
