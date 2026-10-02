"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Code2, FolderGit2, Users, Target } from "lucide-react";

const pillars = [
  {
    icon: MonitorPlay,
    title: "LIVE TRAINING",
    description: "Instructor-led sessions focused on concepts, architecture and implementation."
  },
  {
    icon: Code2,
    title: "HANDS-ON LABS",
    description: "Build systems alongside the concepts instead of only watching demonstrations."
  },
  {
    icon: FolderGit2,
    title: "PROJECT-BASED LEARNING",
    description: "Apply each stage of the curriculum through practical projects."
  },
  {
    icon: Users,
    title: "MENTORSHIP",
    description: "Receive technical guidance, feedback and direction while building."
  },
  {
    icon: Target,
    title: "CAPSTONE",
    description: "Bring the complete learning journey together through an end-to-end AI system."
  }
];

export default function HowYouLearnSection() {
  return (
    <section className="py-24 bg-[#050b14] relative border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(29,78,216,0.1)_0,rgba(10,25,47,0)_70%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Learning Experience <span className="text-blue-500">Designed Around Building.</span></h2>
          <p className="text-slate-400">Our program is structured to maximize hands-on engineering time over passive learning.</p>
        </div>

        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-6 rounded-xl border border-white/5 flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-white/5 transition-colors group"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-900/30 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:scale-105 transition-transform">
                <pillar.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 tracking-wider text-blue-100">{pillar.title}</h3>
                <p className="text-slate-400">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
