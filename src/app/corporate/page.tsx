import PageHeader from "@/components/ui/PageHeader";
import AudienceSection from "@/components/home/AudienceSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = { title: "Corporate Training | YOUR AI INSTITUTE" };

export default function CorporatePage() {
  return (
    <div>
      <PageHeader 
        title="Corporate Training" 
        description="Upskill your entire engineering team. We deliver custom workshops on Agentic AI and Generative Systems tailored to your business."
        badge="ENTERPRISE"
      />
      <AudienceSection />
      <FinalCTA />
    </div>
  );
}
