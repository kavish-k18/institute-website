"use client";

import { motion } from "framer-motion";
import { BookOpen, Hammer, Rocket, Trophy, Target } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "LEARN",
    description: "Master modern AI technologies, engineering concepts and system architecture."
  },
  {
    icon: Hammer,
    title: "BUILD",
    description: "Work on guided real-world projects instead of only watching lectures."
  },
  {
    icon: Rocket,
    title: "DEPLOY",
    description: "Turn AI prototypes into functional applications and production-ready systems."
  },
  {
    icon: Target,
    title: "EVALUATE",
    description: "Implement observability, testing, and guardrails to ensure production quality."
  },
  {
    icon: Trophy,
    title: "PRESENT",
    description: "Demonstrate your technical capability through industry-ready capstone projects."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-[#050b14] relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-xs font-semibold tracking-wider mb-4 uppercase">
            THE INSTITUTE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn AI by <span className="text-blue-500">Building It.</span></h2>
          <p className="text-slate-400">100% practical AI engineering.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-900/50 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
