"use client";

import { useState, useMemo } from "react";
import { Project, projectsData } from "@/data/projects";
import { Search, FolderGit2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
                            project.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === "All" || project.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  return (
    <div className="space-y-8">
      {/* Filters & Search */}
      <div className="glass-card p-6 rounded-2xl border border-white/10 bg-white/5 space-y-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by project name, technology, or skill..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0a192f] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-500"
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="space-y-3 flex-1">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Category</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-3 flex-1">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Difficulty</h4>
            <div className="flex flex-wrap gap-2">
              {difficulties.map(diff => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedDifficulty === diff ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={project.id}
              className="glass-card p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:bg-[#0a192f]/40 transition-all group flex flex-col h-full relative overflow-hidden bg-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-900/40 flex items-center justify-center border border-blue-500/20">
                    <FolderGit2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-full ${
                      project.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-400' :
                      project.difficulty === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400' :
                      'bg-red-500/10 text-red-400'
                    }`}>
                      {project.difficulty}
                    </span>
                    <span className="text-[10px] text-slate-500">{project.category}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-6 flex-grow">{project.shortDescription}</p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((t, i) => (
                      <span key={i} className="text-[11px] px-2 py-1 bg-[#050b14] border border-white/5 rounded-md text-slate-300">{t}</span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[11px] px-2 py-1 bg-[#050b14] border border-white/5 rounded-md text-slate-500">+{project.techStack.length - 4} more</span>
                    )}
                  </div>
                  
                  <Link href={`/projects/${project.slug}`} className="block pt-4 mt-2 border-t border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold group-hover:text-blue-400 transition-colors">Industry-Inspired</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {filteredProjects.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-400">
            No projects found matching your criteria. Try adjusting your filters.
          </div>
        )}
      </div>
    </div>
  );
}
