"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Calendar, Users, Laptop, Briefcase, ArrowRight } from "lucide-react";

export default function FlagshipSection() {
  const months = [
    { num: "01", title: "AI & LLM Foundations", topics: ["Python", "LLM APIs", "Prompt Engineering", "Structured Outputs", "FastAPI", "Git/GitHub"] },
    { num: "02", title: "RAG & Knowledge Systems", topics: ["Embeddings", "Vector Databases", "Semantic Search", "RAG", "Document AI", "RAG Evaluation"] },
    { num: "03", title: "AI Agents", topics: ["Agent Architecture", "Tool Calling", "Memory", "Planning", "LangChain", "LangGraph"] },
    { num: "04", title: "Multi-Agent Systems", topics: ["Agent Coordination", "Agent Roles", "CrewAI", "LangGraph", "Human-in-the-loop", "Workflows"] },
    { num: "05", title: "Production AI", topics: ["Deployment", "Docker", "Evaluation", "Security", "Guardrails", "Observability", "Optimization"] },
    { num: "06", title: "Industry Capstone", topics: ["Problem Definition", "Architecture", "Development", "Testing", "Evaluation", "Presentation"] }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 sticky top-24">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-xs font-semibold tracking-wider mb-6">
              FLAGSHIP PROGRAM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              6-Month Agentic AI <br /> Engineering Program
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              A project-driven program designed to take learners from AI and LLM foundations to production-ready Agentic AI systems.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass-card p-4 rounded-xl flex flex-col gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                <div className="text-sm text-slate-400">Duration</div>
                <div className="font-semibold">6 Months</div>
              </div>
              <div className="glass-card p-4 rounded-xl flex flex-col gap-2">
                <Laptop className="w-5 h-5 text-blue-400" />
                <div className="text-sm text-slate-400">Format</div>
                <div className="font-semibold">Live + Hands-on</div>
              </div>
              <div className="glass-card p-4 rounded-xl flex flex-col gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <div className="text-sm text-slate-400">Target</div>
                <div className="font-semibold text-sm">Students & Pros</div>
              </div>
              <div className="glass-card p-4 rounded-xl flex flex-col gap-2">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <div className="text-sm text-slate-400">Projects</div>
                <div className="font-semibold">10+ & Capstone</div>
              </div>
            </div>

            <Link href="/programs/agentic-ai-engineering">
              <Button size="lg" className="w-full sm:w-auto group">
                View Full Program
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 pl-8 space-y-12">
              {months.map((month, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#0a192f] border-4 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  
                  <div className="text-blue-500 font-mono text-sm font-bold mb-1">MONTH {month.num}</div>
                  <h3 className="text-2xl font-bold mb-4">{month.title}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {month.topics.map((topic, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-slate-300">
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
