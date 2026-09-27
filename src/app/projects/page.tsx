import PageHeader from "@/components/ui/PageHeader";
import ProjectLibrary from "@/components/projects/ProjectLibrary";
import FinalCTA from "@/components/home/FinalCTA";
import { Metadata } from "next";
import { FolderKanban } from "lucide-react";

export const metadata: Metadata = { 
  title: "AI Project Library | YOUR AI INSTITUTE",
  description: "Explore the real-world, industry-inspired AI systems built in our engineering programs."
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader 
        title="Project Library" 
        description="Explore the real-world, industry-inspired AI systems built in our engineering programs, from customer support bots to fully autonomous research agents."
        badge="PORTFOLIO"
      />
      
      <section className="py-24 bg-[#050b14] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.05)_0,rgba(10,25,47,0)_70%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ProjectLibrary />
        </div>
      </section>

      {/* Choose Your Capstone Section */}
      <section className="py-24 bg-[#0a192f] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-xs font-semibold tracking-wider mb-6 uppercase">
            Final Project
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your <span className="text-blue-500">Capstone</span></h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            These are example project directions. Learners may propose their own unique problems and architectures subject to mentor approval.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: "AI for Business", desc: "Automate internal operations, HR, or finance workflows." },
              { title: "AI for Education", desc: "Personalized tutors, grading assistants, and curriculum planners." },
              { title: "Developer Productivity", desc: "Code generation, automated testing, and PR review agents." },
              { title: "AI Automation", desc: "Connect multiple SaaS tools with natural language commands." },
              { title: "AI Research", desc: "Literature review, market analysis, and data synthesis." },
              { title: "Enterprise AI", desc: "Secure RAG systems over proprietary company data." }
            ].map((cat, i) => (
              <div key={i} className="p-6 glass-card border border-white/10 rounded-xl bg-white/5">
                <FolderKanban className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-400">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
