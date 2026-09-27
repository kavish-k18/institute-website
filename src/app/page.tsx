import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FlagshipSection from "@/components/home/FlagshipSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import JourneySection from "@/components/home/JourneySection";
import AudienceSection from "@/components/home/AudienceSection";
import TechStackSection from "@/components/home/TechStackSection";
import MentorsSection from "@/components/home/MentorsSection";
import DashboardMockupSection from "@/components/home/DashboardMockupSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FlagshipSection />
      <ProjectsSection />
      <JourneySection />
      <AudienceSection />
      <TechStackSection />
      <MentorsSection />
      <DashboardMockupSection />
      
      {/* Testimonials Placeholder */}
      <section className="py-24 bg-[#0a192f] border-t border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b14] to-transparent h-32" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <h2 className="text-3xl font-bold mb-4">Hear From Our <span className="text-blue-500">Community</span></h2>
          <p className="text-slate-400 mb-12">Student feedback will appear here after the completion of our first cohort.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[1, 2].map((i) => (
              <div key={i} className="glass-card p-8 rounded-2xl border border-white/10 text-left bg-white/5 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-blue-500/10" />
                <div className="text-4xl font-serif text-blue-500/20 mb-4 leading-none">"</div>
                <p className="text-slate-400 italic mb-6 leading-relaxed relative z-10 text-sm">
                  This is a placeholder for a future student testimonial. Actual student experiences and reviews will be displayed here once available.
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10" />
                  <div>
                    <div className="font-bold text-sm text-slate-300">Future Student</div>
                    <div className="text-xs text-blue-400">Agentic AI Program</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <FinalCTA />
    </>
  );
}
