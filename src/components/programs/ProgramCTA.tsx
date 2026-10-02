"use client";

import { motion } from "framer-motion";
import { ArrowRight, Home, Code2 } from "lucide-react";
import Link from "next/link";

export default function ProgramCTA() {
  return (
    <section className="py-32 bg-[#050b14] relative overflow-hidden">
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2)_0,rgba(5,11,20,1)_80%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card border border-blue-500/40 rounded-[2.5rem] p-12 md:p-24 text-center shadow-[0_0_80px_rgba(37,99,235,0.2)] bg-[#0a192f]/80 relative overflow-hidden"
        >
          {/* Subtle accent glow inside card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-500/20 blur-[100px] pointer-events-none" />
          
          <div className="w-20 h-20 rounded-2xl bg-blue-600/20 flex items-center justify-center mx-auto mb-10 border border-blue-500/40">
            <Code2 className="w-10 h-10 text-blue-400" />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
            Ready to Build With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">AI?</span>
          </h2>
          <p className="text-2xl text-slate-300 mb-14 max-w-3xl mx-auto leading-relaxed">
            Start your AI Engineering journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:[REAL INSTITUTE EMAIL]">
              <button className="w-full sm:w-auto min-w-[240px] px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-3 text-xl hover:-translate-y-1">
                Apply Now <ArrowRight className="w-6 h-6" />
              </button>
            </a>
            <Link href="/">
              <button className="w-full sm:w-auto min-w-[240px] px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 text-xl hover:-translate-y-1">
                <Home className="w-6 h-6" /> Back to Institute
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
