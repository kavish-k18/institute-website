import PageHeader from "@/components/ui/PageHeader";
import AudienceSection from "@/components/home/AudienceSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = { title: "For Professionals | YOUR AI INSTITUTE" };

export default function ProfessionalsPage() {
  return (
    <div>
      <PageHeader 
        title="For Working Professionals" 
        description="Transition into AI engineering or build AI capability for your current role with flexible, weekend-friendly programs."
        badge="UPSKILLING"
      />
      <AudienceSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
