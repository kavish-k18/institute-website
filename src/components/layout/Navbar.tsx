"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Institute", href: "/" },
  { name: "Program", href: "/program" },
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-[#0a192f]/90 backdrop-blur-md border-white/10 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <BrainCircuit className="w-10 h-10 text-blue-500 transition-transform group-hover:scale-110" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-white leading-none">
              YOUR AI <span className="text-blue-500">INSTITUTE</span>
            </span>
            <span className="text-[10px] font-mono text-blue-400 tracking-widest mt-1.5">AI ENGINEERING & AGENTIC SYSTEMS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-blue-400 relative",
                (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href) && link.href !== "/#projects" && link.href !== "/#about") ? "text-white" : "text-slate-300"
              )}
            >
              {link.name}
              {(link.href === "/" ? pathname === "/" : pathname.startsWith(link.href) && link.href !== "/#projects" && link.href !== "/#about") && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="mailto:[REAL INSTITUTE EMAIL]"
            className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden absolute top-20 left-0 w-full bg-[#0a192f] border-b border-white/10 shadow-2xl"
        >
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-2 text-base font-medium rounded-md",
                  (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href) && link.href !== "/#projects" && link.href !== "/#about")
                    ? "bg-blue-900/50 text-blue-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="mailto:[REAL INSTITUTE EMAIL]"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-4 py-3 text-center text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500"
            >
              Apply Now
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
