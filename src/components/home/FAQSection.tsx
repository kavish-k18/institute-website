"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  { q: "Who is this program for?", a: "Students, developers, working professionals and technology learners interested in AI engineering and agentic systems." },
  { q: "Do I need prior AI experience?", a: "No prior AI experience is required. The program builds progressively from foundations, though basic programming familiarity is helpful to get the most out of the technical labs." },
  { q: "Is this only for students?", a: "No. The program is designed for both students and working professionals who want to transition into or upskill in AI engineering." },
  { q: "Is the program live?", a: "Yes. The program is designed around live training, hands-on implementation, and guided learning with instructors and mentors." },
  { q: "Will I build projects?", a: "Yes. The learning journey includes multiple industry-inspired projects and a comprehensive final capstone." },
  { q: "What technologies will I learn?", a: "You will work with the modern AI engineering stack, including Python, leading LLMs (OpenAI, Anthropic, Gemini), agent frameworks (LangChain, LangGraph, CrewAI), vector databases, and production tools like Docker and FastAPI." },
  { q: "How long is the program?", a: "The program spans 6 months (24 weeks) of structured learning and building." },
  { q: "What do I receive at the end?", a: "You will leave with a portfolio of functional AI systems, GitHub repositories, architecture diagrams, technical documentation, evaluation reports, and the experience of presenting a production-ready capstone project." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#050b14]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked <span className="text-blue-500">Questions</span></h2>
          <p className="text-slate-400">Everything you need to know about our program and methodology.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass-card border border-white/5 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-slate-200">{faq.q}</span>
                <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform duration-300", openIndex === index ? "rotate-180" : "")} />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 pt-2 text-slate-400 text-sm leading-relaxed border-t border-white/5">
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
