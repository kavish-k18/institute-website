import PageHeader from "@/components/ui/PageHeader";
import MentorsSection from "@/components/home/MentorsSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = { title: "Mentors | YOUR AI INSTITUTE" };

export default function MentorsPage() {
  return (
    <div>
      <PageHeader 
        title="Our Mentors" 
        description="Learn from industry practitioners who are actively building and deploying AI systems."
        badge="FACULTY"
      />
      <MentorsSection />
      <FinalCTA />
    </div>
  );
}
