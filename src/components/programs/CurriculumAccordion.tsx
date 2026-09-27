"use client";

import { useState } from "react";
import { ChevronDown, Code, CheckCircle, FileCode2, FlaskConical } from "lucide-react";
import { CurriculumMonth } from "@/data/curriculum";
import { motion, AnimatePresence } from "framer-motion";

export default function CurriculumAccordion({ curriculum }: { curriculum: CurriculumMonth[] }) {
  const [openMonth, setOpenMonth] = useState<number | null>(1); // Default open first month

  return (
    <div className="space-y-4">
      {curriculum.map((month) => (
        <div 
          key={month.month} 
          className={`glass-card rounded-xl border transition-all ${openMonth === month.month ? 'border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.1)]' : 'border-white/10 hover:border-white/20'}`}
        >
          <button
            onClick={() => setOpenMonth(openMonth === month.month ? null : month.month)}
            className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="text-sm font-mono text-blue-400 font-bold uppercase tracking-wider shrink-0">
                Month {month.month}
              </div>
              <h3 className="text-xl font-bold text-white">{month.title}</h3>
            </div>
            <div className="shrink-0 ml-4 p-2 bg-white/5 rounded-full">
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openMonth === month.month ? 'rotate-180' : ''}`} />
            </div>
          </button>
          
          <AnimatePresence>
            {openMonth === month.month && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 border-t border-white/5">
                  <p className="text-slate-300 mb-8">{month.description}</p>
                  
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                    {month.weeks.map((week, idx) => (
                      <div key={week.week} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/30 bg-[#0a192f] text-blue-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 font-bold text-sm">
                          W{week.week}
                        </div>
                        
                        {/* Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                          <h4 className="font-bold text-lg mb-4 text-white group-hover:text-blue-400 transition-colors">{week.title}</h4>
                          
                          <div className="mb-4">
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Topics</div>
                            <div className="flex flex-wrap gap-2">
                              {week.topics.map((t, i) => (
                                <span key={i} className="text-[11px] px-2 py-1 bg-[#050b14] border border-white/5 rounded-md text-slate-300">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          {(week.lab || week.project || week.learningOutcome) && (
                            <div className="pt-4 mt-4 border-t border-white/5 space-y-3">
                              {week.lab && (
                                <div className="flex items-start gap-2">
                                  <FlaskConical className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                  <div className="text-sm text-slate-300"><span className="text-slate-400 text-xs uppercase font-semibold mr-2 tracking-wider">Lab</span>{week.lab}</div>
                                </div>
                              )}
                              {week.project && (
                                <div className="flex items-start gap-2">
                                  <Code className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                                  <div className="text-sm text-slate-300"><span className="text-slate-400 text-xs uppercase font-semibold mr-2 tracking-wider">Project</span>{week.project}</div>
                                </div>
                              )}
                              {week.learningOutcome && (
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                  <div className="text-sm text-slate-300"><span className="text-slate-400 text-xs uppercase font-semibold mr-2 tracking-wider">Outcome</span>{week.learningOutcome}</div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
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
