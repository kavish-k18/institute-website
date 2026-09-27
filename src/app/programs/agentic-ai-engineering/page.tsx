import { curriculumData } from "@/data/curriculum";
import { careerSkills } from "@/data/skills";
import CurriculumAccordion from "@/components/programs/CurriculumAccordion";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, ChevronRight, Layers, Target } from "lucide-react";
import DashboardMockupSection from "@/components/home/DashboardMockupSection";
import TechStackSection from "@/components/home/TechStackSection";
import FinalCTA from "@/components/home/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Agentic AI Engineering Program | YOUR AI INSTITUTE",
  description: "Build practical AI systems from the foundations of LLM application development to advanced agentic architectures and production deployment."
};

export default function AgenticAIPage() {
  return (
    <div>
      {/* Custom Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-[#050b14] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.15)_0,rgba(10,25,47,0)_70%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-xs font-semibold tracking-wider mb-6 uppercase">
            FLAGSHIP PROGRAM
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            6-Month Agentic AI <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Engineering Program</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl leading-relaxed">
            Build practical AI systems from the foundations of LLM application development to advanced agentic architectures and production deployment.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
              <Calendar className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase">Duration</div>
                <div className="font-bold">24 Weeks</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
              <Target className="w-5 h-5 text-crimson-400 shrink-0" />
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase">Output</div>
                <div className="font-bold">10+ Projects</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
              <Layers className="w-5 h-5 text-green-400 shrink-0" />
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase">Format</div>
                <div className="font-bold">Live + Labs</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
              <BookOpen className="w-5 h-5 text-yellow-400 shrink-0" />
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase">Finale</div>
                <div className="font-bold">1 Capstone</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/apply">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2">
                Apply for the Program <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <a href="#curriculum">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-md border border-white/10 transition-all">
                View Curriculum
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* What You'll Learn (Skills Map) */}
      <section className="py-24 bg-[#0a192f]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What You'll <span className="text-blue-500">Learn</span></h2>
            <p className="text-slate-400">Master the complete modern AI engineering stack across 8 core disciplines.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {careerSkills.map((category, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors group">
                <h3 className="font-bold mb-4 text-blue-100 group-hover:text-blue-400 transition-colors">{category.category}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-sm text-slate-400">
                      <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5 opacity-50" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 24-Week Curriculum */}
      <section id="curriculum" className="py-24 bg-[#030712] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-xs font-semibold tracking-wider mb-4 uppercase">
              Curriculum Details
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">24-Week <span className="text-blue-500">Curriculum</span></h2>
            <p className="text-slate-400">A rigorous, step-by-step progression from Python fundamentals to advanced multi-agent architectures.</p>
          </div>
          
          <CurriculumAccordion curriculum={curriculumData} />
        </div>
      </section>

      <TechStackSection />
      <DashboardMockupSection />
      <FinalCTA />
    </div>
  );
}
