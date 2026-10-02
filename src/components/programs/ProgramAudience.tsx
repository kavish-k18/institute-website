"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Briefcase, Sparkles } from "lucide-react";

export default function ProgramAudience() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "STUDENTS",
      desc: "Build practical AI skills and a strong technical portfolio.",
      color: "blue"
    },
    {
      icon: Code2,
      title: "DEVELOPERS",
      desc: "Extend software engineering skills into AI applications and agentic systems.",
      color: "purple"
    },
    {
      icon: Briefcase,
      title: "WORKING PROFESSIONALS",
      desc: "Develop practical capabilities for modern AI engineering workflows.",
      color: "emerald"
    },
    {
      icon: Sparkles,
      title: "AI/ML ASPIRANTS",
      desc: "Build hands-on experience with LLMs, RAG, agents and production AI.",
      color: "amber"
    }
  ];

  return (
    <section className="py-32 bg-[#0a192f] border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0,transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Who This Program <span className="text-blue-500">Is For</span></h2>
          <p className="text-xl md:text-2xl text-slate-300">For those ready to build.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((aud, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[2rem] border border-white/10 hover:bg-white/5 hover:border-blue-500/30 transition-all text-center flex flex-col items-center group shadow-lg"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border group-hover:scale-110 transition-transform
                ${aud.color === 'blue' ? 'bg-blue-900/40 text-blue-400 border-blue-500/20 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]' : ''}
                ${aud.color === 'purple' ? 'bg-purple-900/40 text-purple-400 border-purple-500/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]' : ''}
                ${aud.color === 'emerald' ? 'bg-emerald-900/40 text-emerald-400 border-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]' : ''}
                ${aud.color === 'amber' ? 'bg-amber-900/40 text-amber-400 border-amber-500/20 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]' : ''}
              `}>
                <aud.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-wider group-hover:text-blue-400 transition-colors">{aud.title}</h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">{aud.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
