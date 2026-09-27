"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [programType, setProgramType] = useState("individual"); // 'individual' or 'corporate'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-12 text-center border border-green-500/30 max-w-2xl mx-auto"
      >
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Application Submitted</h3>
        <p className="text-slate-300 mb-8">
          Thank you for applying to YOUR AI INSTITUTE. Our team will review your application and contact you shortly.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          Submit Another Application
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto glass-card rounded-2xl p-8 border border-white/10">
      
      <div className="flex gap-4 mb-8 p-1 bg-[#0a192f] rounded-lg border border-white/5">
        <button
          type="button"
          onClick={() => setProgramType("individual")}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${programType === "individual" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
        >
          Individuals
        </button>
        <button
          type="button"
          onClick={() => setProgramType("corporate")}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${programType === "corporate" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
        >
          Corporate Training
        </button>
      </div>

      {programType === "individual" ? (
        <>
          <div className="space-y-2 mb-6">
            <label className="text-sm font-medium text-slate-300">Program</label>
            <select required className="w-full bg-[#0a192f] border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none">
              <option value="">Select a program</option>
              <option value="agentic-ai-engineering">Agentic AI Engineering (6-Month Flagship)</option>
              <option value="ai-engineering-students">AI Engineering for Students</option>
              <option value="ai-engineering-professionals">AI Engineering for Working Professionals</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Full Name</label>
              <input required type="text" className="w-full bg-[#0a192f] border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Email</label>
              <input required type="email" className="w-full bg-[#0a192f] border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Phone</label>
              <input required type="tel" className="w-full bg-[#0a192f] border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Current Role</label>
              <input required type="text" className="w-full bg-[#0a192f] border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Student / Software Engineer" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Experience Level</label>
              <select required className="w-full bg-[#0a192f] border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none">
                <option value="">Select level</option>
                <option value="beginner">Beginner (Some coding)</option>
                <option value="intermediate">Intermediate (Dev experience)</option>
                <option value="advanced">Advanced (AI/ML experience)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Preferred Learning Mode</label>
              <select required className="w-full bg-[#0a192f] border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none">
                <option value="">Select mode</option>
                <option value="online">Online Live</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          <div className="space-y-2 mb-8">
            <label className="text-sm font-medium text-slate-300">Message / Goals (Optional)</label>
            <textarea className="w-full h-24 bg-[#0a192f] border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none" placeholder="Tell us about your goals..." />
          </div>
        </>
      ) : (
        <>
          <div className="space-y-2 mb-6">
            <label className="text-sm font-medium text-slate-300">Organization Name</label>
            <input required type="text" className="w-full bg-[#0a192f] border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Company Inc." />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Contact Person</label>
              <input required type="text" className="w-full bg-[#0a192f] border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Work Email</label>
              <input required type="email" className="w-full bg-[#0a192f] border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="jane@company.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Phone</label>
              <input required type="tel" className="w-full bg-[#0a192f] border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Team Size</label>
              <select required className="w-full bg-[#0a192f] border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none">
                <option value="">Select size</option>
                <option value="1-5">1-5 Employees</option>
                <option value="6-20">6-20 Employees</option>
                <option value="21-50">21-50 Employees</option>
                <option value="50+">50+ Employees</option>
              </select>
            </div>
          </div>

          <div className="space-y-2 mb-8">
            <label className="text-sm font-medium text-slate-300">Training Requirement</label>
            <textarea required className="w-full h-24 bg-[#0a192f] border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none" placeholder="Describe the teams and skills you want to build..." />
          </div>
        </>
      )}

      <Button type="submit" variant="glow" size="lg" className="w-full" disabled={loading}>
        {loading ? "Submitting..." : "Submit Application"}
      </Button>
      <p className="text-xs text-slate-500 text-center mt-4">
        By submitting this form, you agree to our privacy policy.
      </p>
    </form>
  );
}
