import PageHeader from "@/components/ui/PageHeader";
import AudienceSection from "@/components/home/AudienceSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = { title: "For Students | YOUR AI INSTITUTE" };

export default function StudentsPage() {
  return (
    <div>
      <PageHeader 
        title="For Students" 
        description="Launch your career in AI engineering before you even graduate. Build a portfolio that stands out."
        badge="UNIVERSITY & COLLEGE"
      />
      <AudienceSection />
      <FinalCTA />
    </div>
  );
}
