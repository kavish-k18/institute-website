"use client";

import { motion } from "framer-motion";
import { Clock, Code2, Cpu, Rocket, Target, Users2 } from "lucide-react";

export default function ProgramAtAGlance() {
  const details = [
    { icon: Clock, label: "Duration", value: "24 Weeks" },
    { icon: Code2, label: "Format", value: "Live + Hands-On" },
    { icon: Users2, label: "Audience", value: "Students + Professionals" },
    { icon: Rocket, label: "Projects", value: "Industry-Inspired Work" },
    { icon: Cpu, label: "Focus", value: "AI Engineering" },
    { icon: Target, label: "Final Output", value: "End-to-End Capstone" },
  ];

  return (
    <section className="py-24 bg-[#030712] border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        <div className="flex flex-col xl:flex-row gap-16 items-center">
          <div className="xl:w-5/12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-xs font-semibold tracking-wider mb-6 uppercase">
              PROGRAM AT A GLANCE
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold mb-8 text-white leading-[1.1]">
              A Six-Month Journey Into <span className="text-blue-500">Modern AI Engineering.</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              100% Practical. 100% Engineering. Build production-ready agentic systems.
            </p>
          </div>
          
          <div className="xl:w-7/12 w-full">
            <div className="grid md:grid-cols-2 gap-6">
              {details.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-2xl flex items-center gap-6 border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/5"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-900/30 flex items-center justify-center shrink-0 border border-blue-500/20">
                    <item.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-400 tracking-widest mb-1.5 uppercase">{item.label}</div>
                    <div className="text-xl text-white font-bold">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
