import PageHeader from "@/components/ui/PageHeader";
import FeaturesSection from "@/components/home/FeaturesSection";
import TechStackSection from "@/components/home/TechStackSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = { title: "About | YOUR AI INSTITUTE" };

export default function AboutPage() {
  return (
    <div>
      <PageHeader 
        title="About The Institute" 
        description="We are on a mission to train the next generation of AI Engineers who build rather than just consume."
        badge="OUR STORY"
      />
      
      <section className="py-24 bg-[#0a192f]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Bridging the Gap Between <span className="text-blue-500">Theory and Production</span></h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            The AI landscape is evolving rapidly. Traditional education focuses too heavily on theory and notebook-based data science. We recognized a massive gap in the market: the need for engineers who know how to build autonomous agents, manage complex RAG architectures, and deploy LLM applications to production securely.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            Our institute was founded to solve this problem. We don't just teach AI; we engineer it.
          </p>
        </div>
      </section>

      <FeaturesSection />
      <TechStackSection />
      <FinalCTA />
    </div>
  );
}
