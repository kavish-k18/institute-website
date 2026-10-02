"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ChevronRight, Code2, Cpu, Globe, TerminalSquare } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.15)_0,rgba(10,25,47,0)_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-crimson-600/10 rounded-full blur-[120px]" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-300 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Next Cohort Applications Open
            </div>
            
            <div className="text-sm font-mono text-blue-400 tracking-widest mb-4">AI ENGINEERING & AGENTIC SYSTEMS</div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Build the Future <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">with AI.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-4 leading-relaxed max-w-xl">
              Learn to design, build, evaluate, and deploy modern AI systems through live training, hands-on labs, industry-inspired projects, mentorship, and an end-to-end capstone.
            </p>
            
            <p className="text-sm font-mono text-blue-400 mb-8 tracking-wider">
              LEARN → BUILD → DEPLOY → EVALUATE → PRESENT
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/program">
                <Button variant="glow" size="lg" className="w-full sm:w-auto">
                  Explore the Program
                </Button>
              </Link>
              <a href="mailto:[REAL INSTITUTE EMAIL]">
                <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                  Apply Now
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {[
                { label: "6-Month Program" },
                { label: "Live Training" },
                { label: "Hands-On Projects" },
                { label: "Industry-Oriented Learning" }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mb-1" />
                  <span className="text-xs text-slate-400 font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block h-[600px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[400px] h-[500px] glass-card rounded-2xl border border-blue-500/20 p-6 flex flex-col justify-between overflow-hidden">
                {/* Visual Architecture */}
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Cpu className="w-32 h-32 text-blue-500" />
                </div>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
                      <TerminalSquare className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-400 font-mono">User Request</div>
                      <div className="text-sm font-medium">"Analyze dataset..."</div>
                    </div>
                  </div>

                  <div className="w-px h-6 bg-blue-500/30 ml-5" />

                  <div className="glass p-4 rounded-xl border border-blue-500/30 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                    <div className="flex items-center gap-3 mb-3">
                      <Cpu className="w-5 h-5 text-blue-400" />
                      <span className="text-sm font-bold">AI Agent</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[10px] px-2 py-1 bg-white/10 rounded-md">Reasoning</span>
                      <span className="text-[10px] px-2 py-1 bg-white/10 rounded-md">Tools</span>
                      <span className="text-[10px] px-2 py-1 bg-white/10 rounded-md">Data</span>
                    </div>
                  </div>

                  <div className="w-px h-6 bg-blue-500/30 ml-5" />

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-xs text-green-400 font-mono">Result</div>
                      <div className="text-sm font-medium">Production Output</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> System Architecture</span>
                  <span>Agentic Workflow</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
