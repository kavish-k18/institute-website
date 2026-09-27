"use client";

import { motion } from "framer-motion";

const technologies = [
  "Python", "OpenAI", "Google Gemini", "Anthropic", 
  "LangChain", "LangGraph", "CrewAI", "FastAPI", 
  "PostgreSQL", "Vector Databases", "Docker", "GitHub"
];

export default function TechStackSection() {
  return (
    <section className="py-24 bg-[#030712] border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Technologies in Our <span className="text-blue-500">Curriculum</span></h2>
          <p className="text-slate-400 text-sm">
            Learn the tools actually used in production. We constantly update our curriculum to reflect the state-of-the-art in AI engineering.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-slate-300 font-medium hover:border-blue-500/50 hover:bg-blue-900/20 transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
