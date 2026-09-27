import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, Layers, Target, Users } from "lucide-react";
import { Metadata } from "next";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | AI Projects | YOUR AI INSTITUTE`,
    description: project.shortDescription,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[#050b14] min-h-screen pt-24 pb-24 text-slate-300">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/projects" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to Library
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className={`text-xs uppercase font-bold px-3 py-1 rounded-full ${
              project.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
              project.difficulty === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
              'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}>
              {project.difficulty}
            </span>
            <span className="text-xs font-semibold px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full border border-blue-500/20">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{project.title}</h1>
          <p className="text-xl text-slate-300 leading-relaxed border-l-4 border-blue-500 pl-4 py-1">{project.overview}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-crimson-400" /> The Problem
              </h2>
              <p className="leading-relaxed bg-white/5 p-6 rounded-xl border border-white/10">{project.problem}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" /> The Solution
              </h2>
              <p className="leading-relaxed bg-white/5 p-6 rounded-xl border border-white/10">{project.solution}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" /> System Architecture
              </h2>
              <div className="bg-[#0a192f] p-8 rounded-xl border border-blue-500/20 overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.1)_0,transparent_100%)] pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  {project.architecture.steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="px-6 py-3 bg-[#050b14] border border-white/10 rounded-lg text-center font-medium shadow-lg w-full max-w-sm text-white">
                        {step}
                      </div>
                      {idx < project.architecture.steps.length - 1 && (
                        <div className="h-6 w-px bg-blue-500/50 my-1 relative">
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 border-r border-b border-blue-500/50 rotate-45" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-xl border border-white/10 bg-white/5">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-400" /> Target Users
              </h3>
              <ul className="space-y-2">
                {project.targetUsers.map((user, i) => (
                  <li key={i} className="text-sm flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> {user}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 rounded-xl border border-white/10 bg-white/5">
              <h3 className="font-bold text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 bg-[#0a192f] border border-white/10 rounded-md text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl border border-white/10 bg-white/5">
              <h3 className="font-bold text-white mb-4">Skills Developed</h3>
              <ul className="space-y-3">
                {project.skills.map((skill, i) => (
                  <li key={i} className="text-sm flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span className="text-slate-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs text-slate-500 text-center mb-4">
                This is an industry-inspired project built during our Agentic AI Engineering program.
              </p>
              <Link href="/apply">
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-medium transition-colors">
                  Build this in our Program
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
