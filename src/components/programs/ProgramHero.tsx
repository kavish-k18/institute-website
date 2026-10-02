"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Users, Laptop, Briefcase, ArrowDown, Database, Cpu, BrainCircuit, Globe, ArrowDownRight, ArrowDownLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ProgramHero() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden bg-[#050b14] border-b border-white/5 min-h-[90vh] flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.15)_0,rgba(10,25,47,0)_70%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1400px]">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-xs font-semibold tracking-wider mb-8 uppercase shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              FLAGSHIP PROGRAM
            </div>
            
            <h1 className="text-[2.75rem] md:text-[4rem] lg:text-[4.5rem] font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
              6-Month Agentic AI <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Engineering Program</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              A comprehensive curriculum teaching LLMs, RAG, and multi-agent workflows. Designed for developers and technical professionals, delivered through live training and hands-on labs, culminating in an end-to-end industry capstone project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 lg:mb-0">
              <a href="mailto:[REAL INSTITUTE EMAIL]">
                <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 text-lg">
                  Apply for the Program <ArrowRight className="w-5 h-5" />
                </button>
              </a>
              <a href="#curriculum">
                <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-md border border-white/10 transition-all text-lg">
                  Explore Curriculum
                </button>
              </a>
            </div>
          </div>

          {/* Right Visual Ecosystem Diagram */}
          <div className="w-full lg:w-1/2 hidden lg:flex justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-lg"
            >
              <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full" />
              <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.1)] relative z-10 flex flex-col items-center">
                
                <div className="px-6 py-3 rounded-lg bg-blue-900/40 border border-blue-500/40 flex items-center gap-3 w-64 justify-center shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <BrainCircuit className="w-5 h-5 text-blue-400" />
                  <span className="font-bold tracking-widest text-blue-100">AI ENGINEERING</span>
                </div>
                
                <div className="h-6 border-l-2 border-dashed border-slate-600 my-1" />
                
                <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center w-56 text-slate-300">
                  LLM FOUNDATIONS
                </div>
                
                <div className="h-6 border-l-2 border-dashed border-slate-600 my-1 relative">
                  <motion.div 
                    animate={{ top: ["0%", "100%"] }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }} 
                    className="absolute w-2 h-2 rounded-full bg-blue-400 -left-[3px] shadow-[0_0_10px_#60a5fa]" 
                  />
                </div>
                
                <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center w-56 text-slate-300 gap-2">
                  <Database className="w-4 h-4 text-slate-400" /> KNOWLEDGE & RAG
                </div>
                
                <div className="h-6 border-l-2 border-dashed border-slate-600 my-1" />
                
                <div className="px-8 py-4 rounded-xl bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center w-72 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                  <span className="font-bold text-indigo-100 tracking-wider">AGENTIC SYSTEMS</span>
                </div>
                
                <div className="flex w-full justify-center my-2 gap-16 relative">
                  <div className="absolute top-0 w-32 border-t-2 border-dashed border-slate-600 left-[calc(50%-4rem)]" />
                  <div className="absolute top-0 h-4 border-l-2 border-dashed border-slate-600 left-[calc(50%-4rem)]" />
                  <div className="absolute top-0 h-4 border-l-2 border-dashed border-slate-600 right-[calc(50%-4rem)]" />
                  
                  <div className="mt-4 px-4 py-2 rounded-md bg-white/5 border border-white/10 text-xs text-slate-400 w-28 text-center">MULTI-AGENT</div>
                  <div className="mt-4 px-4 py-2 rounded-md bg-white/5 border border-white/10 text-xs text-slate-400 w-28 text-center">TOOL CALLING</div>
                </div>
                
                <div className="h-6 border-l-2 border-dashed border-slate-600 my-1" />
                
                <div className="px-6 py-3 rounded-lg bg-emerald-900/20 border border-emerald-500/30 flex items-center justify-center w-56 text-emerald-200">
                  PRODUCTION AI
                </div>
                
                <div className="h-6 border-l-2 border-dashed border-slate-600 my-1" />
                
                <div className="px-6 py-3 rounded-lg bg-amber-900/20 border border-amber-500/30 flex items-center justify-center w-64 text-amber-200 gap-2">
                  <Globe className="w-4 h-4" /> INDUSTRY CAPSTONE
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-16 mt-16 border-t border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-blue-900/40 flex items-center justify-center border border-blue-500/20 shrink-0">
              <Calendar className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">Duration</div>
              <div className="font-bold text-xl text-white">24 Weeks</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-blue-900/40 flex items-center justify-center border border-blue-500/20 shrink-0">
              <Briefcase className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">Projects</div>
              <div className="font-bold text-lg text-white leading-tight">Multiple Industry-Inspired Projects</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-blue-900/40 flex items-center justify-center border border-blue-500/20 shrink-0">
              <Laptop className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">Format</div>
              <div className="font-bold text-xl text-white leading-tight">Live + Hands-On</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-blue-900/40 flex items-center justify-center border border-blue-500/20 shrink-0">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">Capstone</div>
              <div className="font-bold text-lg text-white leading-tight">1 End-to-End AI System</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
