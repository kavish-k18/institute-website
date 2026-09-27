export interface Program {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  duration: string;
  format: string;
  targetAudience: string;
  keySkills: string[];
  projectCount: string;
  isFlagship?: boolean;
}

export const programsData: Program[] = [
  {
    id: "prog_1",
    slug: "agentic-ai-engineering",
    title: "Agentic AI Engineering",
    shortDescription: "Build practical AI systems from the foundations of LLM application development to advanced agentic architectures and production deployment.",
    duration: "6 Months / 24 Weeks",
    format: "Live + Hands-on + Project-Based",
    targetAudience: "Students + Working Professionals",
    keySkills: ["AI & LLM Engineering", "RAG", "AI Agents", "Multi-Agent Systems", "Production AI Engineering"],
    projectCount: "10+ Applied Projects",
    isFlagship: true
  },
  {
    id: "prog_2",
    slug: "ai-engineering-students",
    title: "AI Engineering for Students",
    shortDescription: "A foundational path designed for university students to bridge the gap between academic theory and practical AI engineering.",
    duration: "4 Months",
    format: "Live + Hands-on + Project-Based",
    targetAudience: "University Students (B.Tech / BCA / MCA)",
    keySkills: ["Python for AI", "LLM APIs", "RAG Fundamentals", "Basic AI Agents"],
    projectCount: "6 Applied Projects"
  },
  {
    id: "prog_3",
    slug: "ai-engineering-professionals",
    title: "AI Engineering for Working Professionals",
    shortDescription: "An accelerated, flexible track for developers and engineers looking to upgrade their skillset with generative AI and agentic systems.",
    duration: "4 Months (Weekend/Evening)",
    format: "Live + Self-paced + Project-Based",
    targetAudience: "Software Developers, Data Scientists",
    keySkills: ["Enterprise RAG", "Tool Calling", "Multi-Agent Systems", "AI Observability"],
    projectCount: "8 Applied Projects"
  },
  {
    id: "prog_4",
    slug: "corporate-ai-training",
    title: "Corporate AI Training",
    shortDescription: "Customized team upskilling programs to build internal AI capability, automate workflows, and execute enterprise AI projects.",
    duration: "Custom (1 to 12 Weeks)",
    format: "Workshops + Live Training",
    targetAudience: "Corporate Teams, Engineering Orgs",
    keySkills: ["AI Strategy", "Generative AI Application Development", "Workflow Automation", "AI Security"],
    projectCount: "Custom Projects"
  }
];
