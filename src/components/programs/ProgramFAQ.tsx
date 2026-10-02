"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  { q: "Who is this program for?", a: "Students, developers, working professionals, and AI/ML aspirants looking to build hands-on engineering capability with modern AI systems." },
  { q: "How long is the program?", a: "The program is 6 months (24 weeks) long, including the final capstone phase." },
  { q: "Is the program live?", a: "Yes, the program revolves around live technical sessions, interactive labs, and mentor feedback." },
  { q: "Do I need prior AI experience?", a: "No prior AI experience is required. We start with foundations, but basic programming familiarity is strongly recommended." },
  { q: "What programming knowledge is expected?", a: "Basic familiarity with any programming language is expected. We focus on Python for the AI engineering labs." },
  { q: "What technologies will I learn?", a: "You'll work with Python, LLM APIs (OpenAI, Anthropic), agent frameworks (LangChain, CrewAI), vector databases, and production tools like Docker and FastAPI." },
  { q: "Will I build projects?", a: "Yes. You will build multiple industry-inspired systems leading up to a comprehensive capstone project." },
  { q: "What is the capstone?", a: "An end-to-end AI system that you design, develop, evaluate, and present, demonstrating your ability to solve a real-world problem." },
  { q: "Is the program suitable for working professionals?", a: "Yes. The format is designed to accommodate the schedules of working professionals." },
  { q: "What will I have at the end?", a: "A portfolio of practical engineering outputs: working applications, GitHub repositories, architecture diagrams, evaluation reports, and deployment experience." }
];

export default function ProgramFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#0a192f] border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-[1000px]">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-blue-500">Questions</span></h2>
          <p className="text-xl text-slate-400">Quick answers.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass-card border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-colors bg-white/[0.02]"
            >
              <button
                className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg md:text-xl text-slate-200 group-hover:text-blue-400 transition-colors pr-8">{faq.q}</span>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors",
                  openIndex === index ? "bg-blue-600/20 text-blue-400" : "bg-white/5 text-slate-400 group-hover:bg-white/10"
                )}>
                  <ChevronDown className={cn("w-6 h-6 transition-transform duration-300", openIndex === index ? "rotate-180" : "")} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 pt-2 text-slate-400 text-lg leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
