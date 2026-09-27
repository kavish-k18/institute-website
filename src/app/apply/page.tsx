import PageHeader from "@/components/ui/PageHeader";
import ApplyForm from "@/components/forms/ApplyForm";
import FAQSection from "@/components/home/FAQSection";
import { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Apply | YOUR AI INSTITUTE",
  description: "Apply for our upcoming cohorts. Spaces are limited to ensure high-quality mentorship and project support."
};

const faqs = [
  {
    q: "Who is this program for?",
    a: "Our programs are designed for university students, software engineers, and professionals who want to transition into AI engineering. We offer different tracks tailored to your current experience level."
  },
  {
    q: "Do I need prior AI experience?",
    a: "No prior AI experience is strictly required for the foundational tracks, though general programming knowledge is highly recommended. The advanced tracks require prior software development experience."
  },
  {
    q: "Do I need Python?",
    a: "Yes, Python is the primary language used across our curriculum. If you don't know Python, our first month includes an intensive Python for AI engineering module."
  },
  {
    q: "How long is the program?",
    a: "The flagship Agentic AI Engineering program is 6 months (24 weeks) long. Other specialized tracks typically run for 4 months."
  },
  {
    q: "How many projects will I build?",
    a: "You will build between 6 to 10+ applied projects depending on your track, concluding with a major industry-inspired capstone project."
  },
  {
    q: "Are the sessions live?",
    a: "Yes, all core mentorship and architecture review sessions are conducted live to ensure you get direct feedback from industry practitioners."
  },
  {
    q: "What is the capstone?",
    a: "The capstone is a 4-week final project where you independently design, build, evaluate, and deploy a complete AI system solving a real-world problem."
  },
  {
    q: "Do students receive a certificate?",
    a: "Yes, upon successful completion of the program and the capstone defense, you will receive a certificate of completion."
  }
];

export default function ApplyPage() {
  return (
    <div>
      <PageHeader 
        title="Start Your AI Journey" 
        description="Apply for our upcoming cohorts. Spaces are limited to ensure high-quality mentorship and project support."
        badge="APPLICATION"
      />
      
      <section className="py-24 bg-[#050b14] relative border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(29,78,216,0.1)_0,rgba(10,25,47,0)_60%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ApplyForm />
        </div>
      </section>

      {/* Program Specific FAQ */}
      <section className="py-24 bg-[#030712]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked <span className="text-blue-500">Questions</span></h2>
            <p className="text-slate-400">Everything you need to know about the admissions process and program structure.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
