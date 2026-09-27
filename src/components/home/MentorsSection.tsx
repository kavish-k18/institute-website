"use client";

import { motion } from "framer-motion";
import { User, Link as LinkIcon } from "lucide-react";

export default function MentorsSection() {
  return (
    <section className="py-24 relative bg-[#030712] border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.05)_0,transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Learn from <span className="text-blue-500">Industry Practitioners</span></h2>
          <p className="text-slate-400">
            Learn from experienced engineers, researchers and AI practitioners through live sessions, project reviews and technical mentorship.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group border border-white/10 hover:border-blue-500/30 transition-all bg-[#0a192f]/50"
            >
              <div className="h-24 bg-gradient-to-br from-blue-900/40 to-transparent" />
              <div className="px-6 pb-6 text-center relative -mt-12">
                <div className="w-24 h-24 mx-auto bg-[#050b14] rounded-full flex items-center justify-center mb-4 border-4 border-[#0a192f] shadow-lg">
                  <User className="w-10 h-10 text-slate-600" />
                </div>
                <h3 className="text-lg font-bold mb-1">Industry Mentor</h3>
                <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">AI Engineer</p>
                <p className="text-sm text-slate-400 mb-6">
                  Expert practitioner joining our faculty for the upcoming cohort. Profile details coming soon.
                </p>
                
                <div className="flex justify-center gap-3 pt-4 border-t border-white/5">
                  <button disabled className="px-3 py-1.5 bg-white/5 rounded-md text-slate-500 text-xs font-medium cursor-not-allowed flex items-center gap-2" title="Coming Soon">
                    <LinkIcon className="w-3 h-3" /> Coming Soon
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
