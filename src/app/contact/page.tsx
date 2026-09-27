import PageHeader from "@/components/ui/PageHeader";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = { title: "Contact | YOUR AI INSTITUTE" };

export default function ContactPage() {
  return (
    <div>
      <PageHeader 
        title="Get in Touch" 
        description="Have questions about our programs or corporate training? Reach out to our team."
        badge="CONTACT US"
      />
      
      <section className="py-24 bg-[#030712]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div>
              <h2 className="text-3xl font-bold mb-6">We'd Love to Hear <span className="text-blue-500">From You</span></h2>
              <p className="text-slate-400 mb-10">
                Whether you're a student looking to enroll, a professional seeking to upskill, or a company interested in training your team, we're here to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center border border-blue-500/20 shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-slate-400">hello@youraiinstitute.placeholder</p>
                    <p className="text-slate-400">admissions@youraiinstitute.placeholder</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center border border-blue-500/20 shrink-0">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-slate-400">+1 (555) 000-0000</p>
                    <p className="text-sm text-slate-500 mt-1">Mon-Fri, 9am to 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center border border-blue-500/20 shrink-0">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                    <p className="text-slate-400">AI Engineering Hub</p>
                    <p className="text-slate-400">Innovation District, Tech City</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <input type="text" className="w-full bg-[#0a192f] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <input type="email" className="w-full bg-[#0a192f] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all" placeholder="Your Email" />
                </div>
                <div>
                  <textarea className="w-full h-32 bg-[#0a192f] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all resize-none" placeholder="How can we help you?" />
                </div>
                <button type="button" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
