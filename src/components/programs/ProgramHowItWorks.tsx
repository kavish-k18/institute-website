"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Code2, FolderGit2, Users, Target, ArrowRight } from "lucide-react";

export default function ProgramHowItWorks() {
  const pillars = [
    { icon: MonitorPlay, title: "LIVE TRAINING", desc: "Instructor-led technical sessions." },
    { icon: Code2, title: "HANDS-ON LABS", desc: "Guided implementation and experimentation." },
    { icon: FolderGit2, title: "PROJECTS", desc: "Apply concepts through industry-inspired systems." },
    { icon: Users, title: "MENTORSHIP", desc: "Technical guidance and feedback." },
    { icon: Target, title: "CAPSTONE", desc: "Build and present an end-to-end AI system." },
  ];

  return (
    <section className="py-32 bg-[#050b14] border-b border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(29,78,216,0.1)_0,rgba(10,25,47,0)_70%)] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Built Around Doing, <span className="text-blue-500">Not Just Watching.</span></h2>
          <p className="text-xl md:text-2xl text-slate-400">Maximize your practical engineering time.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 relative">
          
          {/* Connecting line on desktop */}
          <div className="absolute top-12 left-12 right-12 h-1 bg-white/5 hidden lg:block -z-10" />

          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center w-full lg:w-1/5 group"
            >
              <div className="w-24 h-24 rounded-2xl bg-[#0a192f] flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:scale-110 group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all mb-8 relative z-10 shadow-lg">
                <pillar.icon className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold mb-3 tracking-wider text-white group-hover:text-blue-400 transition-colors">{pillar.title}</h3>
              <p className="text-slate-400 text-base px-2">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
