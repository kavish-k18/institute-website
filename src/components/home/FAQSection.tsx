"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  { q: "Who can join the program?", a: "The program is designed for B.Tech/BCA/MCA/MSc students, fresh graduates, software developers, and working professionals looking to transition into AI engineering." },
  { q: "Do I need prior AI experience?", a: "No prior AI experience is required, but a strong foundation in programming logic and willingness to learn is essential." },
  { q: "Is Python required?", a: "Basic programming knowledge is expected. We cover Python from an AI engineering perspective, but prior programming experience in any language will help." },
  { q: "Is the program suitable for working professionals?", a: "Yes, we offer flexible learning options with weekend and evening sessions designed specifically for working professionals." },
  { q: "Are classes live?", a: "Yes, all core concepts, architecture discussions, and coding labs are conducted live." },
  { q: "How many projects will I build?", a: "You will build 10+ applied AI projects throughout the curriculum, plus one comprehensive industry-oriented capstone project." },
  { q: "Will I receive mentorship?", a: "Yes, you will have access to mentorship from experienced AI engineers who will review your code and guide your architecture decisions." },
  { q: "What is the capstone project?", a: "The capstone is an end-to-end AI system that you design, build, and deploy to solve a real-world problem, acting as the centerpiece of your portfolio." },
  { q: "Do students receive a certificate?", a: "Yes, upon successful completion of the program and defense of your capstone project, you will receive a verifiable certificate." },
  { q: "Is there corporate training?", a: "Yes, we offer customized generative AI and agentic AI workshops for corporate teams. Please visit the Corporate Training section for details." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#050b14]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked <span className="text-blue-500">Questions</span></h2>
          <p className="text-slate-400">Everything you need to know about our programs and methodology.</p>
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
