"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="apply" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-blue-600/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.2)_0,rgba(10,25,47,1)_70%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass border border-blue-500/30 rounded-3xl p-10 md:p-16 text-center shadow-[0_0_50px_rgba(37,99,235,0.15)]"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">AI?</span></h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Start your AI Engineering journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:[REAL INSTITUTE EMAIL]">
              <Button variant="glow" size="lg" className="w-full sm:w-auto min-w-[200px] text-lg">
                Apply Now <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link href="/program">
              <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px] text-lg bg-white/5 border-white/10 hover:bg-white/10">
                Explore the Program <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
