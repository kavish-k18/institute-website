"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TerminalSquare, Code2, MonitorPlay } from "lucide-react";

export default function OutcomesSection() {
  return (
    <section className="py-24 bg-[#0a192f] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-xs font-semibold tracking-wider mb-6 uppercase">
              OUTCOMES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">By the End, You'll Have More Than <span className="text-blue-500">Course Notes.</span></h2>
            <p className="text-slate-300 mb-8">
              This program is designed to produce tangible engineering outputs. You don't leave with just theoretical knowledge, you leave with a comprehensive portfolio of functional systems.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                'Working AI applications',
                'AI agent workflows',
                'RAG systems',
                'Multi-agent architectures',
                'GitHub projects',
                'Architecture diagrams',
                'Technical documentation',
                'Evaluation reports',
                'Deployment experience',
                'Capstone presentation'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.15)] overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
            {/* Window header */}
            <div className="bg-[#050b14] px-4 py-3 border-b border-white/5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
              </div>
              <div className="ml-4 flex items-center gap-2 text-xs text-slate-500 font-medium font-mono">
                terminal — agent-evaluation — node test.js
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 font-mono text-sm">
              <div className="text-blue-400 mb-2">$ npm run test:agent-workflow</div>
              <div className="text-slate-400 mb-4">&gt; Running evaluation suite on Multi-Agent Support System...</div>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-slate-300">
                  <span>[✓] Retrieval Augmented Generation</span>
                  <span className="text-green-400">0.842s</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>[✓] Tool Calling (PostgreSQL)</span>
                  <span className="text-green-400">1.105s</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>[✓] Agent Handoff (Triage -&gt; Specialist)</span>
                  <span className="text-green-400">2.012s</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>[✓] Guardrails (PII Redaction)</span>
                  <span className="text-green-400">0.340s</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 text-green-400">
                All 48 tests passed. System is ready for deployment.
              </div>
              <div className="text-blue-400 mt-4">$ docker build -t ai-support-agent .</div>
              <div className="text-slate-400">&gt; Building production image...</div>
            </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
