"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AudienceSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 space-y-24">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center max-w-3xl mx-auto">Built for the Next Generation of <span className="text-blue-500">AI Builders.</span></h2>
        
        {/* For Students */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-xl bg-blue-900/50 flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-sm font-bold text-blue-400 mb-2 tracking-widest">STUDENTS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Your AI Career <br/><span className="text-blue-500">Through Real Projects.</span></h2>
            <ul className="grid grid-cols-2 gap-4 mb-8">
              {['Live classes', 'Coding labs', 'Mentor guidance', 'Team projects', 'GitHub portfolio', 'Career-oriented learning'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/program">
              <Button variant="outline" className="group">
                Explore the Program
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
          <div className="relative h-80 rounded-2xl glass-card border border-white/5 overflow-hidden p-6 flex flex-col shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent" />
            <div className="relative z-10 w-full h-full flex flex-col">
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-3">
                <div className="font-semibold text-white">AI Engineering Program</div>
                <div className="text-sm font-bold text-blue-400">68%</div>
              </div>
              <div className="mb-4">
                <div className="text-xs text-slate-400 mb-1">Current Module</div>
                <div className="text-sm text-slate-200">AI Agents</div>
              </div>
              <div className="mb-6">
                <div className="text-xs text-slate-400 mb-1">Current Project</div>
                <div className="text-sm text-slate-200">AI Research Agent</div>
                <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-blue-500 rounded-full" />
                </div>
              </div>
              <div className="space-y-2 mt-auto">
                <div className="flex items-center gap-2 text-xs text-slate-300"><span className="text-green-400">✓</span> LLM Foundations</div>
                <div className="flex items-center gap-2 text-xs text-slate-300"><span className="text-green-400">✓</span> RAG & Embeddings</div>
                <div className="flex items-center gap-2 text-xs text-blue-400"><span className="w-2 h-2 rounded-full border border-blue-400" /> Tool Calling</div>
                <div className="flex items-center gap-2 text-xs text-slate-500"><span className="w-2 h-2 rounded-full border border-slate-500" /> Multi-Agent Systems</div>
              </div>
            </div>
          </div>
        </div>

        {/* For Professionals */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 rounded-2xl glass-card border border-white/5 overflow-hidden order-last lg:order-first p-6 flex flex-col items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tl from-crimson-900/10 to-transparent" />
             <div className="relative z-10 w-full max-w-sm space-y-3">
               <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-center text-xs font-medium text-slate-300 shadow-lg">Business Request</div>
               <div className="w-px h-4 bg-crimson-500/50 mx-auto" />
               <div className="p-3 bg-crimson-900/20 border border-crimson-500/30 rounded-lg text-center text-sm font-bold text-crimson-400 shadow-[0_0_15px_rgba(225,29,72,0.15)] flex items-center justify-center gap-2">
                  <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-crimson-500"></span></span>
                  AI Agent
               </div>
               <div className="flex justify-center gap-12">
                 <div className="w-px h-6 bg-crimson-500/50 -rotate-45 origin-top" />
                 <div className="w-px h-6 bg-crimson-500/50 rotate-45 origin-top" />
               </div>
               <div className="flex justify-between gap-4">
                 <div className="flex-1 p-2 bg-white/5 border border-white/10 rounded-lg text-center text-[10px] text-slate-400">Knowledge</div>
                 <div className="flex-1 p-2 bg-white/5 border border-white/10 rounded-lg text-center text-[10px] text-slate-400">APIs & Tools</div>
               </div>
               <div className="flex justify-center gap-12">
                 <div className="w-px h-6 bg-crimson-500/50 rotate-45 origin-bottom" />
                 <div className="w-px h-6 bg-crimson-500/50 -rotate-45 origin-bottom" />
               </div>
               <div className="p-3 bg-green-900/20 border border-green-500/30 rounded-lg text-center text-xs font-medium text-green-400">Automated Action</div>
             </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-xl bg-crimson-900/30 flex items-center justify-center mb-6 border border-crimson-500/20">
              <Briefcase className="w-6 h-6 text-crimson-400" />
            </div>
            <div className="text-sm font-bold text-crimson-400 mb-2 tracking-widest">WORKING PROFESSIONALS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Upgrade Your AI Skills <br/><span className="text-crimson-500">Without Leaving Your Career.</span></h2>
            <ul className="grid grid-cols-2 gap-4 mb-8">
              {['Flexible learning', 'Weekend/evening options', 'Practical AI use cases', 'AI automation', 'Agentic AI', 'Enterprise AI'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-crimson-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/program">
              <Button variant="outline" className="group border-crimson-900 hover:bg-crimson-950 text-white">
                Explore the Program
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Corporate */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6 text-slate-300" />
            </div>
            <div className="text-sm font-bold text-slate-400 mb-2 tracking-widest">TEAMS & ORGANIZATIONS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Build AI Capability <br/><span className="text-white">Across Your Organization.</span></h2>
            <ul className="grid grid-cols-2 gap-4 mb-8">
              {['Generative AI Workshops', 'Agentic AI Training', 'AI Automation', 'Custom AI Projects', 'Team Upskilling', 'Enterprise Workshops'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/program">
              <Button variant="outline" className="group">
                Explore the Program
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
          <div className="relative h-80 rounded-2xl glass-card border border-white/5 overflow-hidden p-6 flex flex-col items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/30 to-transparent" />
             <div className="relative z-10 w-full space-y-4">
               <div className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-center text-sm font-semibold text-white mx-auto w-48 shadow-lg">Organization</div>
               <div className="w-px h-4 bg-slate-600 mx-auto" />
               <div className="p-2 bg-blue-900/30 border border-blue-500/30 rounded-lg text-center text-xs text-blue-400 mx-auto w-40">AI Training</div>
               <div className="w-px h-4 bg-slate-600 mx-auto" />
               <div className="grid grid-cols-3 gap-2 border-t border-slate-700 pt-4 relative">
                 <div className="absolute top-0 left-1/6 right-1/6 h-px bg-slate-700" />
                 <div className="p-2 bg-white/5 border border-white/10 rounded-md text-center text-[10px] text-slate-300">AI Teams</div>
                 <div className="p-2 bg-white/5 border border-white/10 rounded-md text-center text-[10px] text-slate-300">Workflows</div>
                 <div className="p-2 bg-white/5 border border-white/10 rounded-md text-center text-[10px] text-slate-300">Projects</div>
               </div>
               <div className="flex justify-center pt-2">
                 <div className="w-px h-4 bg-slate-600 mx-auto" />
               </div>
               <div className="p-3 bg-slate-800 border border-slate-600 rounded-lg text-center text-sm font-bold text-white mx-auto w-48 shadow-[0_0_15px_rgba(255,255,255,0.05)]">AI Capability</div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
