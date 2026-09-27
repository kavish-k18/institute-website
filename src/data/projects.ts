export type ProjectDifficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  targetUsers: string[];
  category: string;
  difficulty: ProjectDifficulty;
  techStack: string[];
  skills: string[];
  architecture: {
    steps: string[];
  };
}

export const projectsData: Project[] = [
  {
    id: "proj_1",
    slug: "ai-career-assistant",
    title: "AI Career Assistant",
    shortDescription: "A personalized agent that analyzes resumes, matches jobs, and conducts mock interviews.",
    overview: "An intelligent career counselor that helps job seekers navigate their career path using Generative AI and RAG to match skills with job postings and prepare for interviews.",
    problem: "Job seekers struggle to tailor their resumes to specific job descriptions and lack personalized feedback for interview preparation.",
    solution: "A multi-functional agent that ingests a user's resume, parses job descriptions, generates a gap analysis, and provides an interactive mock interview experience.",
    targetUsers: ["Job Seekers", "University Students", "Career Coaches"],
    category: "AI Agents",
    difficulty: "Intermediate",
    techStack: ["LangChain", "OpenAI", "Next.js", "Pinecone", "FastAPI"],
    skills: ["Agent Architecture", "Prompt Engineering", "RAG", "Frontend Integration"],
    architecture: {
      steps: ["User", "Resume Parser", "Vector DB (Job Postings)", "LLM Router", "Mock Interview Agent", "Feedback Generator"]
    }
  },
  {
    id: "proj_2",
    slug: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant",
    shortDescription: "RAG-powered internal wiki assistant capable of querying company documents.",
    overview: "A sophisticated Retrieval-Augmented Generation system that allows employees to converse with their internal company knowledge base in natural language.",
    problem: "Employees spend hours searching through fragmented documentation and wikis for company policies, engineering guidelines, and onboarding materials.",
    solution: "A unified chat interface powered by semantic search that retrieves relevant document chunks and synthesizes accurate, cited answers.",
    targetUsers: ["Enterprise Employees", "HR Teams", "Engineering Teams"],
    category: "RAG",
    difficulty: "Beginner",
    techStack: ["RAG", "FAISS", "FastAPI", "Anthropic Claude", "Python"],
    skills: ["Vector Databases", "Embeddings", "Chunking Strategies", "Document Parsing"],
    architecture: {
      steps: ["User Query", "Embedding Model", "Vector DB (FAISS)", "Retriever", "LLM Synthesizer", "Response with Citations"]
    }
  },
  {
    id: "proj_3",
    slug: "ai-research-agent",
    title: "AI Research Agent",
    shortDescription: "Autonomous agent that searches the web, digests articles, and compiles research reports.",
    overview: "An autonomous research assistant that can take a broad topic, formulate search queries, read multiple web pages, and synthesize a comprehensive research report.",
    problem: "Manual market research and topic deep-dives are time-consuming and prone to human bias or missed information.",
    solution: "A LangGraph-powered stateful agent that iteratively searches, reads, evaluates, and compiles information until it satisfies a research rubric.",
    targetUsers: ["Market Researchers", "Consultants", "Content Creators", "Students"],
    category: "AI Agents",
    difficulty: "Advanced",
    techStack: ["LangGraph", "Tavily", "Anthropic", "Pydantic", "Next.js"],
    skills: ["Agent Architecture", "Tool Calling", "Web Search", "RAG", "Prompt Engineering", "Evaluation", "Python", "LangGraph"],
    architecture: {
      steps: ["User", "Agent", "Research Tools", "Retriever", "LLM", "Evaluator", "Final Report"]
    }
  },
  {
    id: "proj_4",
    slug: "ai-customer-support-agent",
    title: "AI Customer Support Agent",
    shortDescription: "Multi-channel support bot with human handoff capabilities and sentiment analysis.",
    overview: "An omnichannel customer support agent that resolves common queries automatically and routes complex or sensitive issues to human agents based on sentiment analysis.",
    problem: "High volume of repetitive customer support queries leading to long wait times and high support costs.",
    solution: "An intelligent router that processes inbound messages, executes backend actions (like checking order status), and escalates to a human when sentiment is negative.",
    targetUsers: ["E-commerce Companies", "SaaS Startups", "Support Teams"],
    category: "Business AI",
    difficulty: "Intermediate",
    techStack: ["CrewAI", "Twilio", "Python", "OpenAI", "Zendesk API"],
    skills: ["Tool Calling", "API Integration", "Sentiment Analysis", "Human-in-the-Loop"],
    architecture: {
      steps: ["Customer Message", "Sentiment Analyzer", "Intent Classifier", "Backend APIs", "Response Generator", "Human Handoff (if needed)"]
    }
  },
  {
    id: "proj_5",
    slug: "ai-recruitment-agent",
    title: "AI Recruitment Agent",
    shortDescription: "Automated screening system that evaluates candidate technical tests.",
    overview: "An agentic workflow that reviews coding submissions and technical assessments, providing detailed feedback on code quality, performance, and security.",
    problem: "Technical recruiters and engineers spend too much time manually reviewing initial coding assessments for candidates.",
    solution: "A secure, sandboxed execution environment paired with an LLM that runs candidate code, runs test suites, and evaluates code quality using static analysis and LLM reviews.",
    targetUsers: ["Recruiting Agencies", "Engineering Managers", "HR Tech"],
    category: "AI Automation",
    difficulty: "Advanced",
    techStack: ["Agents", "Docker", "OpenAI", "GitHub API", "Python"],
    skills: ["Sandboxing", "Code Evaluation", "Agent Workflows", "Structured Outputs"],
    architecture: {
      steps: ["Candidate Submission", "Docker Sandbox", "Test Runner", "Code Quality LLM", "Security Scanner", "Final Scorecard"]
    }
  },
  {
    id: "proj_6",
    slug: "ai-business-intelligence-agent",
    title: "BI Analysis Agent",
    shortDescription: "Talk to your database: natural language to SQL agent with data visualization.",
    overview: "A natural language interface for SQL databases that allows non-technical users to ask questions about their data and receive charts and insights.",
    problem: "Business users rely on data teams to write SQL queries and build dashboards, creating bottlenecks for decision making.",
    solution: "An intelligent agent that reads database schemas, translates natural language to SQL, executes the query safely, and generates Python code for visualizations.",
    targetUsers: ["Business Analysts", "Founders", "Marketing Teams"],
    category: "AI Agents",
    difficulty: "Advanced",
    techStack: ["SQLAgent", "Pandas", "Streamlit", "PostgreSQL", "LangChain"],
    skills: ["Text-to-SQL", "Data Analysis", "Python Code Generation", "Database Security"],
    architecture: {
      steps: ["Natural Language Query", "Schema Retriever", "Text-to-SQL LLM", "Query Execution", "Data Processing", "Visualization Generator"]
    }
  },
  {
    id: "proj_7",
    slug: "multi-agent-business-automation",
    title: "Business Automation",
    shortDescription: "Multi-agent system automating invoice processing and email responses.",
    overview: "A collaborative multi-agent crew that monitors an inbox, extracts data from attached invoices, updates accounting software, and drafts confirmation emails.",
    problem: "Back-office operations are plagued by manual data entry from emails and PDFs into ERP/Accounting systems.",
    solution: "A CrewAI system where a 'Reader Agent' parses emails, an 'Extraction Agent' gets data from PDFs, and an 'Action Agent' interfaces with accounting APIs.",
    targetUsers: ["Accounting Firms", "Operations Teams", "SMEs"],
    category: "Multi-Agent Systems",
    difficulty: "Intermediate",
    techStack: ["CrewAI", "Google APIs", "Python", "OpenAI Vision"],
    skills: ["Multi-Agent Orchestration", "OCR/Vision", "Email Automation", "API Integration"],
    architecture: {
      steps: ["Inbox Monitor", "Reader Agent", "Vision/OCR Agent", "Data Validation", "Accounting API Agent", "Email Responder"]
    }
  },
  {
    id: "proj_8",
    slug: "ai-document-intelligence",
    title: "Document Intelligence",
    shortDescription: "Extract structured JSON data from unstructured PDFs and images.",
    overview: "A production-grade pipeline that uses vision models to understand complex document layouts, tables, and forms, outputting strictly validated JSON.",
    problem: "Traditional OCR struggles with complex layouts, multi-column documents, and handwritten notes, requiring manual correction.",
    solution: "An advanced vision-language pipeline that uses structured outputs (Pydantic) to force LLMs to return exact JSON schemas from document images.",
    targetUsers: ["Legal Tech", "Healthcare (Records)", "Financial Services"],
    category: "Generative AI",
    difficulty: "Intermediate",
    techStack: ["Vision API", "OCR", "Pydantic", "FastAPI"],
    skills: ["Structured Outputs", "Vision Models", "Data Validation", "Prompt Engineering"],
    architecture: {
      steps: ["Document Upload", "Image Pre-processing", "Vision LLM", "Schema Validator (Pydantic)", "Error Retry Loop", "Structured JSON"]
    }
  },
  {
    id: "proj_9",
    slug: "ai-workflow-automation-agent",
    title: "Workflow Agent",
    shortDescription: "Integration agent connecting multiple SaaS tools based on natural language commands.",
    overview: "A dynamic workflow engine similar to Zapier, but driven by natural language where an agent determines the necessary API calls across multiple tools to achieve a goal.",
    problem: "Static automation workflows break when unexpected edge cases occur or when tasks require human-like reasoning between steps.",
    solution: "An agentic system that understands API specs (OpenAPI) and dynamically chains tools together (e.g., Slack to Jira to GitHub) to complete complex requests.",
    targetUsers: ["Productivity Enthusiasts", "DevOps", "Project Managers"],
    category: "AI Automation",
    difficulty: "Advanced",
    techStack: ["LangChain", "Webhooks", "FastAPI", "OpenAPI"],
    skills: ["Dynamic Tool Calling", "Authentication Handling", "Webhook Processing", "Error Recovery"],
    architecture: {
      steps: ["User Request", "Intent Parser", "Tool Selector", "API Executor", "State Manager", "Notification System"]
    }
  },
  {
    id: "proj_10",
    slug: "disaster-intelligence-agent",
    title: "Disaster Intelligence",
    shortDescription: "Real-time news monitoring agent for supply chain disruption alerts.",
    overview: "An always-on monitoring agent that continuously scans global news feeds for natural disasters, strikes, or geopolitical events that could impact specific supply chain routes.",
    problem: "Global supply chains are vulnerable to local disruptions, but monitoring global news for relevant threats is manually impossible.",
    solution: "A continuous streaming agent that filters news via RSS/APIs, evaluates relevance to a company's specific geographic assets, and triggers alerts.",
    targetUsers: ["Logistics Companies", "Global Manufacturers", "Risk Analysts"],
    category: "AI Agents",
    difficulty: "Advanced",
    techStack: ["NewsAPI", "Agents", "Next.js", "Redis (Celery)"],
    skills: ["Streaming Data", "Event-Driven Architecture", "Relevance Filtering", "Notification Systems"],
    architecture: {
      steps: ["News APIs/RSS", "Filtering Agent", "Asset Database", "Impact Analyzer Agent", "Alert Router", "Dashboard/Email"]
    }
  },
  {
    id: "proj_11",
    slug: "ai-code-review-agent",
    title: "AI Code Review Agent",
    shortDescription: "Automated PR reviewer that checks for bugs, style, and security vulnerabilities.",
    overview: "A GitHub App integration that automatically reviews pull requests, commenting directly on lines of code with actionable suggestions and fixes.",
    problem: "Senior engineers spend too much time reviewing basic code style and logical errors in pull requests.",
    solution: "An agent that triggers on PR creation, fetches code diffs, analyzes context, and posts inline comments using GitHub's API.",
    targetUsers: ["Engineering Teams", "Open Source Maintainers", "DevOps"],
    category: "Developer AI",
    difficulty: "Advanced",
    techStack: ["GitHub Apps", "FastAPI", "Anthropic Claude", "Python"],
    skills: ["Webhooks", "Code Analysis", "GitHub API", "Context Window Management"],
    architecture: {
      steps: ["GitHub Webhook", "Diff Extractor", "Context Builder", "LLM Reviewer", "Comment Formatter", "GitHub API Poster"]
    }
  },
  {
    id: "proj_12",
    slug: "ai-documentation-agent",
    title: "AI Documentation Agent",
    shortDescription: "Automatically generate and maintain technical documentation from source code.",
    overview: "A background agent that monitors a codebase and automatically generates or updates READMEs, inline comments, and API documentation (Swagger/OpenAPI).",
    problem: "Documentation is frequently outdated because developers forget or lack time to update it when code changes.",
    solution: "A system that parses AST (Abstract Syntax Trees), understands code intent using an LLM, and submits PRs with updated documentation.",
    targetUsers: ["Developer Tools", "Engineering Teams", "Technical Writers"],
    category: "Developer AI",
    difficulty: "Intermediate",
    techStack: ["AST Parsers", "OpenAI", "Python", "Markdown Generators"],
    skills: ["Abstract Syntax Trees", "Technical Writing Generation", "File System Operations"],
    architecture: {
      steps: ["Code Push", "AST Parsing", "Diff Analysis", "Doc Generator Agent", "Markdown Formatter", "PR Creator"]
    }
  },
  {
    id: "proj_13",
    slug: "ai-testing-agent",
    title: "AI Testing Agent",
    shortDescription: "Autonomous generation of unit and integration tests for codebases.",
    overview: "An agent that reads source code, identifies edge cases, and writes executable unit tests, continuously refining them until they pass.",
    problem: "Writing comprehensive test suites is tedious and often neglected under tight deadlines.",
    solution: "A ReAct agent that writes a test, runs it in a sandbox, reads the error output if it fails, and rewrites the test until it succeeds and achieves high coverage.",
    targetUsers: ["Software Engineers", "QA Engineers"],
    category: "Developer AI",
    difficulty: "Advanced",
    techStack: ["Pytest/Jest", "LangGraph", "Docker", "Python"],
    skills: ["ReAct Workflows", "Sandboxed Execution", "Error Log Parsing", "Test Driven Development"],
    architecture: {
      steps: ["Source Code", "Test Planner Agent", "Test Writer Agent", "Execution Sandbox", "Error Analyzer", "Final Test Suite"]
    }
  },
  {
    id: "proj_14",
    slug: "ai-research-assistant",
    title: "AI Research Assistant",
    shortDescription: "Academic literature review agent that finds, reads, and synthesizes papers.",
    overview: "An agent designed for academia that searches arXiv and PubMed, reads PDF papers, extracts methodologies, and creates comprehensive literature reviews.",
    problem: "Researchers spend weeks conducting literature reviews and tracking down relevant papers.",
    solution: "A multi-agent system combining a Search Agent, a PDF Parsing Agent, and a Synthesis Agent to automate the literature review process.",
    targetUsers: ["Academics", "R&D Teams", "Medical Researchers"],
    category: "AI Research",
    difficulty: "Advanced",
    techStack: ["arXiv API", "PyMuPDF", "VectorDB", "LangChain"],
    skills: ["Academic APIs", "Complex PDF Parsing", "Long-Context Synthesis", "Citation Formatting"],
    architecture: {
      steps: ["Research Query", "Search Agent", "PDF Downloader", "Chunking & Vectorization", "Synthesis Agent", "Literature Review Output"]
    }
  },
  {
    id: "proj_15",
    slug: "ai-learning-assistant",
    title: "AI Learning Assistant",
    shortDescription: "Personalized tutor that adapts to student learning styles and paces.",
    overview: "An educational agent that creates personalized lesson plans, quizzes, and interactive explanations based on a user's current knowledge level and learning goals.",
    problem: "Traditional education is one-size-fits-all, leaving some students behind while boring others.",
    solution: "A stateful agent that maintains a user profile, tracks concepts mastered, and dynamically generates pedagogical content and assessments.",
    targetUsers: ["Students", "EdTech Companies", "Lifelong Learners"],
    category: "Education",
    difficulty: "Intermediate",
    techStack: ["FastAPI", "React", "OpenAI", "PostgreSQL"],
    skills: ["State Management", "Personalization", "Educational Prompting", "Assessment Generation"],
    architecture: {
      steps: ["Student Profile", "Curriculum Generator", "Content Delivery", "Assessment Agent", "Feedback Loop", "Profile Updater"]
    }
  }
];
