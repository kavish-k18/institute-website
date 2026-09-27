"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  { name: "AI Career Assistant", desc: "A personalized agent that analyzes resumes, matches jobs, and conducts mock interviews.", tech: ["LangChain", "OpenAI", "Next.js"], difficulty: "Intermediate" },
  { name: "AI Knowledge Assistant", desc: "RAG-powered internal wiki assistant capable of querying company documents.", tech: ["RAG", "VectorDB", "FastAPI"], difficulty: "Beginner" },
  { name: "AI Research Agent", desc: "Autonomous agent that searches the web, digests articles, and compiles research reports.", tech: ["LangGraph", "Tavily", "Anthropic"], difficulty: "Advanced" },
  { name: "AI Customer Support", desc: "Multi-channel support bot with human handoff capabilities and sentiment analysis.", tech: ["CrewAI", "Twilio", "Python"], difficulty: "Intermediate" },
  { name: "AI Recruitment Agent", desc: "Automated screening system that evaluates candidate technical tests.", tech: ["Agents", "Docker", "OpenAI"], difficulty: "Advanced" },
  { name: "BI Analysis Agent", desc: "Talk to your database: natural language to SQL agent with data visualization.", tech: ["SQLAgent", "Pandas", "Streamlit"], difficulty: "Advanced" },
  { name: "Business Automation", desc: "Multi-agent system automating invoice processing and email responses.", tech: ["CrewAI", "Google APIs", "Python"], difficulty: "Intermediate" },
  { name: "Document Intelligence", desc: "Extract structured JSON data from unstructured PDFs and images.", tech: ["Vision API", "OCR", "Pydantic"], difficulty: "Intermediate" },
  { name: "Workflow Agent", desc: "Integration agent connecting multiple SaaS tools based on natural language commands.", tech: ["LangChain", "Webhooks", "FastAPI"], difficulty: "Advanced" },
  { name: "Disaster Intelligence", desc: "Real-time news monitoring agent for supply chain disruption alerts.", tech: ["NewsAPI", "Agents", "Next.js"], difficulty: "Advanced" }
];

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-[#030712]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Projects. <span className="text-blue-500">Real Engineering.</span></h2>
            <p className="text-slate-400">Students learn by building systems inspired by real-world business and technology problems. No toy examples.</p>
          </div>
          <Link href="/projects" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 mt-4 md:mt-0 transition-colors">
            View All Projects <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.slice(0, 8).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-6 rounded-xl border border-white/5 hover:border-blue-500/30 hover:bg-[#0a192f]/40 transition-all group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-900/40 flex items-center justify-center border border-blue-500/20">
                  <FolderGit2 className="w-5 h-5 text-blue-400" />
                </div>
                <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-full ${
                  project.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-400' :
                  project.difficulty === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400' :
                  'bg-red-500/10 text-red-400'
                }`}>
                  {project.difficulty}
                </span>
              </div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.name}</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow">{project.desc}</p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[11px] px-2 py-1 bg-white/5 rounded-md text-slate-300">{t}</span>
                  ))}
                </div>
                
                <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Industry-Inspired</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
