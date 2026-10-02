import { Metadata } from "next";
import { curriculumData } from "@/data/curriculum";
import CurriculumAccordion from "@/components/programs/CurriculumAccordion";
import ProgramHero from "@/components/programs/ProgramHero";
import ProgramAtAGlance from "@/components/programs/ProgramAtAGlance";
import WhatYouLearn from "@/components/programs/WhatYouLearn";
import SixMonthJourney from "@/components/programs/SixMonthJourney";
import ProgramProjects from "@/components/programs/ProgramProjects";
import ProgramTechStack from "@/components/programs/ProgramTechStack";
import ProgramCapstone from "@/components/programs/ProgramCapstone";
import ProgramOutcomes from "@/components/programs/ProgramOutcomes";
import ProgramAudience from "@/components/programs/ProgramAudience";
import ProgramHowItWorks from "@/components/programs/ProgramHowItWorks";
import ProgramFAQ from "@/components/programs/ProgramFAQ";
import ProgramCTA from "@/components/programs/ProgramCTA";

export const metadata: Metadata = { 
  title: "6-Month Agentic AI Engineering Program | YOUR AI INSTITUTE",
  description: "Build practical AI systems from the foundations of LLM application development to advanced agentic architectures and production deployment."
};

export default function AgenticAIPage() {
  return (
    <div className="bg-[#030712]">
      <ProgramHero />
      <ProgramAtAGlance />
      <WhatYouLearn />
      <SixMonthJourney />

      {/* 24-Week Curriculum */}
      <section id="curriculum" className="py-32 bg-[#0a192f] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05)_0,rgba(10,25,47,0)_60%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 max-w-[1200px] relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-sm font-bold tracking-wider mb-8 uppercase">
              CURRICULUM DETAILS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">24 Weeks. One Progressive <span className="text-blue-500">Learning Journey.</span></h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Master the stack, week by week.
            </p>
          </div>
          
          <CurriculumAccordion curriculum={curriculumData} />
        </div>
      </section>

      <ProgramProjects />
      <ProgramTechStack />
      <ProgramCapstone />
      <ProgramOutcomes />
      <ProgramAudience />
      <ProgramHowItWorks />
      <ProgramFAQ />
      <ProgramCTA />
    </div>
  );
}
