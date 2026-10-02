import Link from "next/link";
import { BrainCircuit, Mail, Phone, MapPin, Link as LinkIcon, Globe, MessageSquare, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050b14] border-t border-white/10 pt-16 pb-8 text-slate-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <BrainCircuit className="w-8 h-8 text-blue-500" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  YOUR AI <span className="text-blue-500">INSTITUTE</span>
                </span>
                <span className="text-[10px] font-mono text-blue-400 tracking-widest mt-1">AI ENGINEERING & AGENTIC SYSTEMS</span>
              </div>
            </Link>
            <p className="text-sm">
              Build the future with AI. Master AI Engineering and Agentic Systems through live training and real-world projects.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <span className="p-2 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-colors cursor-not-allowed" title="Placeholder">
                <LinkIcon className="w-5 h-5" />
              </span>
              <span className="p-2 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-colors cursor-not-allowed" title="Placeholder">
                <MessageSquare className="w-5 h-5" />
              </span>
              <span className="p-2 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-colors cursor-not-allowed" title="Placeholder">
                <Video className="w-5 h-5" />
              </span>
              <span className="p-2 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-colors cursor-not-allowed" title="Placeholder">
                <Globe className="w-5 h-5" />
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Programs & Paths</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/programs/agentic-ai-engineering" className="hover:text-blue-400 transition-colors">6-Month Agentic AI</Link></li>
              <li><Link href="/projects" className="hover:text-blue-400 transition-colors">Live Projects</Link></li>
              <li><Link href="/students" className="hover:text-blue-400 transition-colors">For Students</Link></li>
              <li><Link href="/professionals" className="hover:text-blue-400 transition-colors">For Professionals</Link></li>
              <li><Link href="/corporate" className="hover:text-blue-400 transition-colors">Corporate Training</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Institute</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/mentors" className="hover:text-blue-400 transition-colors">Mentors</Link></li>
              <li><Link href="/apply" className="hover:text-blue-400 transition-colors">Apply Now</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>[REAL INSTITUTE EMAIL]</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>[REAL PHONE NUMBER]</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>[REAL LOCATION IF YOU WANT TO DISPLAY IT]</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Your AI Institute. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
