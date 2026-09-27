export interface CurriculumWeek {
  week: number;
  title: string;
  topics: string[];
  lab?: string;
  project?: string;
  learningOutcome?: string;
}

export interface CurriculumMonth {
  month: number;
  title: string;
  description: string;
  weeks: CurriculumWeek[];
}

export const curriculumData: CurriculumMonth[] = [
  {
    month: 1,
    title: "AI & LLM ENGINEERING FOUNDATIONS",
    description: "Build the technical foundation required to develop modern AI-powered applications.",
    weeks: [
      {
        week: 1,
        title: "Python for AI Engineering",
        topics: ["Python fundamentals", "Functions and modules", "Object-oriented programming basics", "Exception handling", "Virtual environments", "Package management", "JSON", "Working with APIs", "Git and GitHub"],
        lab: "Build a Python application that consumes an external API.",
        project: "AI News/API Aggregator",
        learningOutcome: "Learners can create Python applications and interact with external APIs."
      },
      {
        week: 2,
        title: "AI & LLM Fundamentals",
        topics: ["AI vs ML vs Deep Learning", "Generative AI", "LLM concepts", "Transformers — conceptual understanding", "Tokens", "Context windows", "Inference", "Temperature", "System/user/assistant messages", "LLM APIs"],
        lab: "Build a basic LLM-powered application.",
        project: "AI Chat Assistant"
      },
      {
        week: 3,
        title: "Prompt Engineering & Structured AI",
        topics: ["Prompt engineering", "System prompts", "Few-shot prompting", "Prompt templates", "Structured outputs", "JSON responses", "Output validation", "Model selection"],
        lab: "Build a structured AI workflow.",
        project: "AI Resume Analyzer"
      },
      {
        week: 4,
        title: "LLM Application Development",
        topics: ["API architecture", "Streaming responses", "Conversation history", "Context management", "FastAPI fundamentals", "Frontend/backend communication"],
        project: "AI Career Assistant (Major Project)"
      }
    ]
  },
  {
    month: 2,
    title: "RAG & KNOWLEDGE SYSTEMS",
    description: "Learn how to connect LLMs with private and external knowledge.",
    weeks: [
      {
        week: 5,
        title: "Embeddings & Semantic Search",
        topics: ["Embeddings", "Vector representations", "Similarity", "Cosine similarity", "Semantic search", "Vector databases (FAISS, Chroma, pgvector)"],
        lab: "Build a semantic search engine."
      },
      {
        week: 6,
        title: "RAG Fundamentals",
        topics: ["Retrieval-Augmented Generation", "Document loading", "Chunking", "Metadata", "Retrieval", "Context injection", "RAG architecture"],
        lab: "Build a basic RAG pipeline."
      },
      {
        week: 7,
        title: "Advanced RAG",
        topics: ["Hybrid search", "Metadata filtering", "Query transformation", "Reranking", "Multi-document RAG", "Retrieval evaluation", "Hallucination reduction"],
        lab: "Build an advanced retrieval workflow."
      },
      {
        week: 8,
        title: "Enterprise Knowledge Assistant",
        topics: ["Document upload", "Document processing", "Embeddings", "Vector database", "RAG", "Chat interface", "Conversation history", "Source references", "Evaluation"],
        project: "AI Knowledge Assistant (Major Project)"
      }
    ]
  },
  {
    month: 3,
    title: "AI AGENTS",
    description: "Move from passive LLM applications to systems that can reason, use tools and take actions.",
    weeks: [
      {
        week: 9,
        title: "Agent Architecture",
        topics: ["LLM vs AI application vs AI agent", "Agent architecture", "Planning", "Reasoning", "Memory", "Tools", "Actions", "Environment", "Agent loops"],
        lab: "Build a basic AI agent."
      },
      {
        week: 10,
        title: "Tool Calling",
        topics: ["Function calling", "Tool definitions", "API tools", "Search tools", "Database tools", "Calculator tools", "Python tools", "External services"],
        lab: "Tool-Using AI Agent (The agent should determine which tool is appropriate for a task.)"
      },
      {
        week: 11,
        title: "Agent Memory",
        topics: ["Short-term memory", "Long-term memory", "Conversation memory", "Agent state", "Context management", "Memory storage"],
        project: "Personal AI Assistant (Features: User memory, Tasks, Notes, Search, Tool usage, Conversation history)"
      },
      {
        week: 12,
        title: "LangChain & LangGraph",
        topics: ["LangChain", "LangGraph", "Agent state", "Nodes", "Edges", "Workflows", "ReAct concepts", "Conditional execution"],
        project: "AI Research Agent (Workflow: Research -> Search -> Collect -> Analyze -> Cross-check -> Report -> Sources)"
      }
    ]
  },
  {
    month: 4,
    title: "MULTI-AGENT SYSTEMS",
    description: "Learn how specialized AI agents can collaborate to solve complex problems.",
    weeks: [
      {
        week: 13,
        title: "Multi-Agent Architecture",
        topics: ["Why multi-agent systems", "Agent roles", "Agent communication", "Orchestration", "Sequential workflows", "Parallel workflows"],
        lab: "Design a multi-agent architecture."
      },
      {
        week: 14,
        title: "CrewAI",
        topics: ["Agents", "Tasks", "Crews", "Roles", "Delegation", "Sequential execution", "Hierarchical workflows"],
        project: "AI Marketing Team (Agents: Researcher, Content Writer, SEO Analyst, Editor)"
      },
      {
        week: 15,
        title: "Advanced LangGraph",
        topics: ["State machines", "Conditional routing", "Loops", "Human approval", "Checkpoints", "Persistence", "Failure handling"],
        project: "Human-in-the-Loop AI Agent (Agent creates output -> Human review -> Approve/Reject -> Continue workflow)"
      },
      {
        week: 16,
        title: "Multi-Agent Capstone",
        topics: ["Manager Agent", "Research Agent", "Data Analyst Agent", "Writer Agent", "Reviewer Agent", "Final Output"],
        project: "AI Business Operations Team"
      }
    ]
  },
  {
    month: 5,
    title: "PRODUCTION AI ENGINEERING",
    description: "Turn prototypes into reliable, observable and deployable AI systems.",
    weeks: [
      {
        week: 17,
        title: "Backend & Deployment",
        topics: ["FastAPI", "REST APIs", "Authentication concepts", "PostgreSQL", "Redis fundamentals", "Docker", "Environment variables", "Cloud deployment"],
        lab: "Deploy an AI backend."
      },
      {
        week: 18,
        title: "AI Evaluation",
        topics: ["Why AI evaluation matters", "Evaluation datasets", "Relevance", "Faithfulness", "Hallucination", "RAG evaluation", "Agent trajectory evaluation", "LLM-as-a-judge", "Regression testing"],
        lab: "Build an evaluation pipeline."
      },
      {
        week: 19,
        title: "AI Security & Guardrails",
        topics: ["Prompt injection", "Data leakage", "Jailbreaking concepts", "Tool abuse", "Excessive permissions", "Authentication", "Authorization", "PII considerations", "Guardrails", "Human-in-the-loop"],
        project: "Secure AI Agent"
      },
      {
        week: 20,
        title: "Observability & Optimization",
        topics: ["Logging", "Tracing", "Monitoring", "Token usage", "Latency", "Cost optimization", "Model selection", "Caching", "Error handling"],
        lab: "AI system monitoring and optimization."
      }
    ]
  },
  {
    month: 6,
    title: "INDUSTRY CAPSTONE",
    description: "Learners independently design and build a complete AI system addressing a meaningful problem.",
    weeks: [
      {
        week: 21,
        title: "Problem & Architecture",
        topics: ["Problem", "Target users", "Requirements", "AI feasibility", "System architecture", "Technology stack", "Database design", "Agent workflow"],
        lab: "Deliverable: Architecture Proposal",
        learningOutcome: "Mentor Review: Architecture review"
      },
      {
        week: 22,
        title: "Development",
        topics: ["Frontend", "Backend", "AI/Agent layer", "Database", "APIs", "Authentication where appropriate"],
        lab: "Deliverable: Working Prototype",
        learningOutcome: "Mentor Review: Development review"
      },
      {
        week: 23,
        title: "Evaluation & Deployment",
        topics: ["Test the system", "Evaluate outputs", "Identify failures", "Improve the system", "Deploy the application", "Document architecture", "Prepare presentation"],
        lab: "Deliverables: Deployed Application, Documentation, Evaluation Report",
        learningOutcome: "Mentor Review: Final technical review"
      },
      {
        week: 24,
        title: "AI DEMO DAY",
        topics: ["Problem", "Target users", "Solution", "Architecture", "AI workflow", "Live demonstration", "Evaluation", "Challenges", "Future improvements"],
        project: "Final deliverables: Working AI application, GitHub repository, Architecture diagram, Documentation, Evaluation report, Deployment, Presentation, Portfolio entry"
      }
    ]
  }
];
