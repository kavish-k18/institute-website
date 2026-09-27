"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, CheckCircle2, Circle, AlertCircle } from "lucide-react";

export default function DashboardMockupSection() {
  return (
    <section className="py-24 bg-[#0a192f] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-xs font-semibold tracking-wider mb-6">
              CAPSTONE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Final Project Should Be Something <span className="text-blue-500">You Can Show.</span></h2>
            <p className="text-slate-300 mb-8">
              During the final month, learners design and build an end-to-end AI system that solves a meaningful real-world problem.
            </p>
            
            <ul className="space-y-4">
              {['Working application', 'GitHub repository', 'Architecture diagram', 'Documentation', 'Evaluation report', 'Deployment', 'Final presentation', 'Portfolio entry'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.15)] overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
            {/* Window header */}
            <div className="bg-[#050b14] px-4 py-3 border-b border-white/5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <LayoutDashboard className="w-3.5 h-3.5" />
                Sample Student Dashboard
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="p-6">
              <div className="flex justify-between items-end mb-6 border-b border-white/5 pb-4">
                <div>
                  <h4 className="font-bold">Student Dashboard</h4>
                  <div className="text-sm text-slate-400">Agentic AI Engineering</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Overall Progress</div>
                  <div className="text-2xl font-bold text-blue-400">72%</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300">Current Module: Multi-Agent Systems</span>
                    <span className="text-blue-400">In Progress</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[60%]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-xs text-slate-400 mb-1">Upcoming Session</div>
                    <div className="font-medium text-sm text-white">Live Agent Architecture Lab</div>
                    <div className="text-xs text-blue-400 mt-2">Starts in 2 hours</div>
                  </div>
                  
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-xs text-slate-400 mb-1">Current Project</div>
                    <div className="font-medium text-sm text-white flex justify-between items-center">
                      AI Business Automation
                      <span className="text-green-400 text-xs">80%</span>
                    </div>
                    <div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-green-500 w-[80%]" />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-900/20 rounded-xl border border-blue-500/20 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-blue-200">Mentor Feedback</div>
                    <div className="text-xs text-blue-300/80 mt-1">"Review agent failure handling in your latest PR. Otherwise, looking solid."</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
