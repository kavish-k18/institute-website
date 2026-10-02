"use client";

import { motion } from "framer-motion";
import { Briefcase, Bot, Search, HeadphonesIcon, FileText, UserCheck, LayoutGrid, GraduationCap } from "lucide-react";

const projects = [
  { 
    name: "AI Career Assistant", 
    type: "INDUSTRY-INSPIRED",
    desc: "A personalized agent that analyzes resumes, matches jobs, and conducts mock interviews using RAG and LLM tool calling.", 
    approach: "RAG + Agentic Tool Use",
    tags: ["LLM", "Tool Calling", "VectorDB"],
    icon: Briefcase,
    color: "blue"
  },
  { 
    name: "Enterprise Knowledge Assistant", 
    type: "INDUSTRY-INSPIRED",
    desc: "RAG-powered internal wiki assistant capable of querying company documents, providing citations, and routing queries.", 
    approach: "Advanced RAG Pipeline",
    tags: ["RAG", "Embeddings", "Routing"],
    icon: Database,
    color: "amber"
  },
  { 
    name: "AI Research Agent", 
    type: "INDUSTRY-INSPIRED",
    desc: "Autonomous agent that searches the web, digests articles, cross-references sources, and compiles research reports.", 
    approach: "Multi-Step ReAct Workflow",
    tags: ["Agents", "APIs", "Search"],
    icon: Search,
    color: "purple"
  },
  { 
    name: "Customer Support Agent", 
    type: "INDUSTRY-INSPIRED",
    desc: "Multi-channel support bot with human handoff capabilities, tone adaptation, and real-time sentiment analysis.", 
    approach: "State Machine + Human-in-the-Loop",
    tags: ["Agents", "State", "Routing"],
    icon: HeadphonesIcon,
    color: "emerald"
  },
  { 
    name: "Document Intelligence", 
    type: "INDUSTRY-INSPIRED",
    desc: "System to extract structured JSON data from unstructured complex PDFs, invoices, and images for automated processing.", 
    approach: "Vision Models + Structured Output",
    tags: ["LLM Vision", "JSON", "Parsing"],
    icon: FileText,
    color: "blue"
  },
  { 
    name: "AI Recruitment System", 
    type: "INDUSTRY-INSPIRED",
    desc: "Automated screening pipeline that evaluates candidate technical tests and generates structured evaluation reports.", 
    approach: "LLM-as-a-Judge Evaluation",
    tags: ["Evaluation", "Structured Output"],
    icon: UserCheck,
    color: "indigo"
  },
  { 
    name: "Business Automation Crew", 
    type: "INDUSTRY-INSPIRED",
    desc: "Multi-agent system automating invoice processing, data entry, and email responses with specialized collaborating agents.", 
    approach: "Multi-Agent Orchestration",
    tags: ["Multi-Agent", "APIs", "CrewAI"],
    icon: LayoutGrid,
    color: "emerald"
  },
  { 
    name: "Adaptive Learning Tutor", 
    type: "INDUSTRY-INSPIRED",
    desc: "Personalized tutor that adapts to student capabilities, tracks progress over time, and adjusts difficulty dynamically.", 
    approach: "Agent Memory + State Persistence",
    tags: ["Agents", "Memory", "State"],
    icon: GraduationCap,
    color: "amber"
  }
];

import { Database } from "lucide-react";

export default function ProgramProjects() {
  return (
    <section className="py-24 bg-[#050b14] border-b border-white/5 relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.05)_0,rgba(10,25,47,0)_60%)] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-xs font-semibold tracking-wider mb-6 uppercase">
            PORTFOLIO
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Build Systems That <span className="text-blue-500">Solve Real Problems.</span></h2>
          <p className="text-xl md:text-2xl text-slate-400">
            Build a portfolio of real-world AI systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="glass p-8 md:p-10 rounded-3xl border border-white/10 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.1)] transition-all group flex flex-col h-full bg-[#0a192f]/50"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-3">{project.type}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.name}</h3>
                </div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border bg-white/5
                  ${project.color === 'blue' ? 'border-blue-500/20 text-blue-400 group-hover:bg-blue-900/30' : ''}
                  ${project.color === 'amber' ? 'border-amber-500/20 text-amber-400 group-hover:bg-amber-900/30' : ''}
                  ${project.color === 'purple' ? 'border-purple-500/20 text-purple-400 group-hover:bg-purple-900/30' : ''}
                  ${project.color === 'emerald' ? 'border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-900/30' : ''}
                  ${project.color === 'indigo' ? 'border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-900/30' : ''}
                `}>
                  <project.icon className="w-7 h-7" />
                </div>
              </div>

              <div className="bg-[#030712] rounded-xl p-5 border border-white/5 mb-8">
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Problem Statement</div>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6">{project.desc}</p>
                
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">AI Approach</div>
                <div className="text-blue-300 font-medium text-base">{project.approach}</div>
              </div>
              
              <div className="mt-auto pt-2">
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-sm font-medium px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 group-hover:border-blue-500/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
