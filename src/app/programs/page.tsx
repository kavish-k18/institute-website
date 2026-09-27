import PageHeader from "@/components/ui/PageHeader";
import { programsData } from "@/data/programs";
import Link from "next/link";
import { ArrowRight, Clock, Users, BookOpen, Layers } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = { 
  title: "AI Engineering Programs | YOUR AI INSTITUTE",
  description: "Explore our intensive, project-based AI engineering programs designed for students, professionals, and corporate teams."
};

export default function ProgramsPage() {
  return (
    <div>
      <PageHeader 
        title="Our Programs" 
        description="Intensive, project-based engineering programs designed to take you from fundamentals to production AI."
        badge="LEARNING TRACKS"
      />
      
      <section className="py-24 bg-[#0a192f]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid gap-8">
            {programsData.map((program) => (
              <div 
                key={program.id} 
                className={`glass-card rounded-2xl overflow-hidden border ${program.isFlagship ? 'border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.15)]' : 'border-white/10'} group`}
              >
                <div className="grid md:grid-cols-5 gap-0 h-full">
                  <div className={`p-8 md:col-span-3 ${program.isFlagship ? 'bg-gradient-to-br from-[#050b14] to-[#0a192f]' : 'bg-[#050b14]/50'}`}>
                    {program.isFlagship && (
                      <div className="inline-block px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/50 text-blue-400 text-xs font-bold tracking-wider mb-4 uppercase">
                        Flagship Program
                      </div>
                    )}
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{program.title}</h2>
                    <p className="text-slate-300 mb-6 text-lg">{program.shortDescription}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {program.keySkills.map((skill, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-slate-300">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <Link href={`/programs/${program.slug}`}>
                      <button className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all ${program.isFlagship ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                        Explore Program <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                  
                  <div className="p-8 md:col-span-2 bg-[#030712]/50 border-l border-white/5 flex flex-col justify-center gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center border border-blue-500/20 shrink-0">
                        <Clock className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-wider">Duration</div>
                        <div className="text-slate-200">{program.duration}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-900/30 flex items-center justify-center border border-green-500/20 shrink-0">
                        <Layers className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-wider">Format</div>
                        <div className="text-slate-200">{program.format}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center border border-purple-500/20 shrink-0">
                        <Users className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-wider">Target Audience</div>
                        <div className="text-slate-200">{program.targetAudience}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-yellow-900/30 flex items-center justify-center border border-yellow-500/20 shrink-0">
                        <BookOpen className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-wider">Projects</div>
                        <div className="text-slate-200">{program.projectCount}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
