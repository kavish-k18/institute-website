"use client";

import { useState } from "react";
import { ChevronDown, Code, CheckCircle, FlaskConical, CalendarDays } from "lucide-react";
import { CurriculumMonth } from "@/data/curriculum";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CurriculumAccordion({ curriculum }: { curriculum: CurriculumMonth[] }) {
  const [openMonth, setOpenMonth] = useState<number | null>(1);

  return (
    <div className="space-y-6">
      {curriculum.map((month) => (
        <div 
          key={month.month} 
          className={cn(
            "glass-card rounded-3xl border transition-all duration-300 overflow-hidden",
            openMonth === month.month 
              ? "border-blue-500/40 shadow-[0_0_40px_rgba(37,99,235,0.1)] bg-[#050b14]" 
              : "border-white/10 hover:border-white/20 hover:bg-white/5"
          )}
        >
          <button
            onClick={() => setOpenMonth(openMonth === month.month ? null : month.month)}
            className="w-full p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between text-left focus:outline-none gap-6"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="w-16 h-16 rounded-2xl bg-blue-900/40 border border-blue-500/30 flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold font-mono text-blue-400">0{month.month}</span>
              </div>
              <div>
                <div className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">Month 0{month.month}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{month.title}</h3>
              </div>
            </div>
            
            <div className="flex items-center gap-6 justify-between md:justify-end">
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-slate-300 text-sm font-medium border border-white/10">
                <CalendarDays className="w-4 h-4 text-slate-400" />
                4 Weeks
              </div>
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                openMonth === month.month ? "bg-blue-600 text-white" : "bg-white/10 text-slate-400 group-hover:bg-white/20"
              )}>
                <ChevronDown className={cn("w-6 h-6 transition-transform duration-300", openMonth === month.month ? "rotate-180" : "")} />
              </div>
            </div>
          </button>
          
          <AnimatePresence>
            {openMonth === month.month && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="p-8 md:p-10 pt-0 border-t border-white/10">
                  <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl">{month.description}</p>
                  
                  {/* Grid Layout for Weeks */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {month.weeks.map((week) => (
                      <div key={week.week} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-colors flex flex-col h-full shadow-lg">
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                          <div className="w-12 h-12 rounded-xl bg-[#030712] border border-white/10 flex items-center justify-center font-bold text-slate-300 font-mono">
                            W{week.week}
                          </div>
                          <h4 className="font-bold text-xl text-white">{week.title}</h4>
                        </div>
                        
                        <div className="mb-6 flex-grow">
                          <ul className="space-y-3">
                            {week.topics.map((t, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-300 text-base">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-2" />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {(week.lab || week.project || week.learningOutcome) && (
                          <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-5 space-y-3 mt-auto">
                            {week.lab && !week.project && (
                              <div className="flex items-start gap-3">
                                <FlaskConical className="w-5 h-5 text-purple-400 shrink-0" />
                                <div>
                                  <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1">Lab</div>
                                  <div className="text-slate-200 text-sm font-medium">{week.lab}</div>
                                </div>
                              </div>
                            )}
                            {week.project && (
                              <div className="flex items-start gap-3">
                                <Code className="w-5 h-5 text-blue-400 shrink-0" />
                                <div>
                                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Project</div>
                                  <div className="text-blue-100 text-sm font-medium">{week.project}</div>
                                </div>
                              </div>
                            )}
                            {week.learningOutcome && !week.project && (
                              <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                                <div>
                                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">Outcome</div>
                                  <div className="text-emerald-100 text-sm font-medium">{week.learningOutcome}</div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
