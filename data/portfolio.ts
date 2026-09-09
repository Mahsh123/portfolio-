export interface EngineeringDomain {
  id: string;
  tag: string;
  title: string;
  headline: string;
  accent: string;
  description: string;
  stack: string[];
}

export interface ExperienceMilestone {
  num: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isHighlight?: boolean;
  narrative: string;
  points: string[];
  stack: string[];
}

export interface RagFlowStep {
  step: string;
  name: string;
  desc: string;
}

export interface TechNode {
  name: string;
  category: "software" | "ai" | "infra" | "data";
  role: string;
  color: string;
}

export interface LifecycleStage {
  step: string;
  title: string;
  desc: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}

export const CONTACT_INFO: ContactInfo = {
  name: "Muhammed Mahshook Ali P",
  title: "AI Engineer | Applied AI & LLM Applications",
  email: "mmahshookalip@gmail.com",
  phone: "+91-7034049672",
  location: "Kochi, Kerala, India",
  github: "https://github.com/Mahsh123",
  linkedin: "https://linkedin.com/in/muhammed-mahshook",
};

export const CERTIFICATIONS: Certification[] = [
  { title: "Artificial Intelligence Fundamentals", issuer: "IBM" },
  { title: "Introduction to Generative AI", issuer: "Google" },
];

export const EDUCATION: Education = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "APJ Abdul Kalam Technological University",
  period: "2021 \u2013 2025",
};

export const ENGINEERING_DOMAINS: EngineeringDomain[] = [
  {
    id: "software",
    tag: "01 / CORE",
    title: "SOFTWARE",
    headline: "Scalable Full-Stack Architecture",
    accent: "text-sky-400 border-sky-500/30 bg-sky-500/10",
    description:
      "I build applications, backend services, APIs, databases, and complete digital products with rigorous design patterns and maintainable codebases.",
    stack: ["React.js", "Next.js", "Node.js", "Python", "TypeScript", "REST APIs", "SQL & NoSQL"],
  },
  {
    id: "intelligence",
    tag: "02 / COGNITIVE",
    title: "INTELLIGENCE",
    headline: "Applied AI & Context-Aware LLMs",
    accent: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    description:
      "I build LLM applications, RAG systems, context-aware AI, conversational systems, and voice-enabled experiences grounded in deterministic data.",
    stack: ["RAG Systems", "Vector DBs", "Embeddings", "LLM Pipelines", "STT / TTS", "Semantic Search", "Agentic Workflows"],
  },
  {
    id: "production",
    tag: "03 / OPERATIONS",
    title: "PRODUCTION",
    headline: "Cloud & Resilient Infrastructure",
    accent: "text-teal-400 border-teal-500/30 bg-teal-500/10",
    description:
      "I work with cloud infrastructure, Docker, Kubernetes, CI/CD, and deployment practices to move systems from local prototypes into reliable production.",
    stack: ["Docker", "Kubernetes", "CI/CD Workflows", "GCP / AWS / Azure", "Microservices", "System Telemetry"],
  },
];

export const EXPERIENCE_MILESTONES: ExperienceMilestone[] = [
  {
    num: "MILESTONE 01",
    role: "Full Stack Engineer",
    company: "Aionpixel",
    location: "Kochi, Kerala",
    period: "Feb 2026 \u2013 Jun 2026",
    isHighlight: true,
    narrative:
      "Built and integrated AI-powered features for enterprise and learning applications, combining full-stack engineering with practical LLM-based capabilities.",
    points: [
      "Developed a RAG-based AI learning feature that transformed CBSE textbook content into a retrievable knowledge base, enabling context-aware responses grounded in relevant learning material.",
      "Built a context-aware AI sales call simulation system using RAG-based context to support realistic, scenario-driven conversations and training workflows.",
      "Integrated Speech-to-Text (STT) and Text-to-Speech (TTS) capabilities to enable interactive voice-based AI experiences.",
      "Worked with both open-source and commercial AI models based on feature requirements, evaluating suitable approaches for application quality, capability, and integration needs.",
      "Contributed to backend architecture, REST APIs, databases, microservices, containerized deployment, and CI/CD practices supporting scalable application delivery.",
    ],
    stack: ["RAG Systems", "LLMs", "Node.js", "Python", "STT/TTS", "REST APIs", "Microservices", "Docker", "CI/CD"],
  },
  {
    num: "MILESTONE 02",
    role: "Project Intern \u2013 Data Science & AI",
    company: "Infosys Springboard",
    location: "Remote",
    period: "Nov 2024 \u2013 Feb 2025",
    narrative:
      "Built CareConnect, a voice-based application engineered to bridge natural spoken queries with clinical intent parsing and backend services.",
    points: [
      "Constructed full application workflows connecting React Native mobile interfaces with Node.js and MongoDB databases.",
      "Integrated NLP APIs to parse symptoms and map clinical intents accurately in real-time.",
      "Optimized API query performance and strengthened automated testing coverage.",
    ],
    stack: ["React Native", "Node.js", "TypeScript", "MongoDB", "NLP APIs", "API Optimization"],
  },
  {
    num: "MILESTONE 03",
    role: "AI & Cloud Computing Intern",
    company: "Edunet Foundation",
    location: "Remote",
    period: "Jul 2024 \u2013 Aug 2024",
    narrative:
      "Explored enterprise cloud ecosystems, building and deploying machine learning models on IBM Cloud using Watson AI services.",
    points: [
      "Built AI models on IBM Cloud using Watson AI and gained hands-on exposure to cloud deployment.",
      "Managed cloud resource provisioning, dataset pipelines, and model deployment on IBM Cloud.",
    ],
    stack: ["IBM Cloud", "Watson AI", "Machine Learning", "Cloud Deployment"],
  },
];

export const RAG_FLOW_STEPS: RagFlowStep[] = [
  { step: "01", name: "DOCUMENTS", desc: "CBSE textbooks & syllabus documents ingested" },
  { step: "02", name: "PROCESSING", desc: "Chunked into semantic segments with metadata" },
  { step: "03", name: "EMBEDDINGS", desc: "Transformed into high-dimensional vector representations" },
  { step: "04", name: "VECTOR SEARCH", desc: "Indexed and queried using cosine similarity" },
  { step: "05", name: "RELEVANT CONTEXT", desc: "Top-k semantic matches filtered and ranked" },
  { step: "06", name: "LLM REASONING", desc: "Conditioned prompt fed with verified source knowledge" },
  { step: "07", name: "INTELLIGENT RESPONSE", desc: "Accurate, fact-grounded explanation with citations" },
];

export const TECH_NODES: TechNode[] = [
  // Software
  { name: "Python", category: "software", role: "AI & Backend Core", color: "text-sky-400 border-sky-500/30" },
  { name: "TypeScript", category: "software", role: "Type-Safe Architecture", color: "text-sky-400 border-sky-500/30" },
  { name: "JavaScript", category: "software", role: "Web Standards", color: "text-sky-400 border-sky-500/30" },
  { name: "React.js", category: "software", role: "Reactive UI Systems", color: "text-sky-400 border-sky-500/30" },
  { name: "Node.js", category: "software", role: "Asynchronous Runtime", color: "text-sky-400 border-sky-500/30" },
  { name: "REST APIs", category: "software", role: "Microservice Contracts", color: "text-sky-400 border-sky-500/30" },

  // AI
  { name: "LLM Applications", category: "ai", role: "Production LLMs", color: "text-purple-400 border-purple-500/30" },
  { name: "RAG & Retrieval", category: "ai", role: "Vector Knowledge Bases", color: "text-purple-400 border-purple-500/30" },
  { name: "Agentic AI", category: "ai", role: "Multi-Step Workflows", color: "text-purple-400 border-purple-500/30" },
  { name: "STT / TTS", category: "ai", role: "Voice & Speech Pipelines", color: "text-purple-400 border-purple-500/30" },
  { name: "OpenAI API", category: "ai", role: "Commercial Reasoning", color: "text-purple-400 border-purple-500/30" },
  { name: "Gemini API", category: "ai", role: "Multimodal Systems", color: "text-purple-400 border-purple-500/30" },
  { name: "Embeddings", category: "ai", role: "Vector Semantics", color: "text-purple-400 border-purple-500/30" },
  { name: "Vector Search", category: "ai", role: "Similarity Indexing", color: "text-purple-400 border-purple-500/30" },

  // Infrastructure
  { name: "Docker", category: "infra", role: "Container Packaging", color: "text-teal-400 border-teal-500/30" },
  { name: "Kubernetes", category: "infra", role: "Cluster Orchestration", color: "text-teal-400 border-teal-500/30" },
  { name: "AWS / GCP / Azure", category: "infra", role: "Multi-Cloud Deployments", color: "text-teal-400 border-teal-500/30" },
  { name: "CI/CD", category: "infra", role: "Automated Delivery", color: "text-teal-400 border-teal-500/30" },

  // Data
  { name: "PostgreSQL", category: "data", role: "Relational Schema", color: "text-blue-400 border-blue-500/30" },
  { name: "MySQL", category: "data", role: "Enterprise Storage", color: "text-blue-400 border-blue-500/30" },
  { name: "MongoDB", category: "data", role: "Document Persistence", color: "text-blue-400 border-blue-500/30" },
  { name: "Redis", category: "data", role: "Low-Latency Cache", color: "text-blue-400 border-blue-500/30" },
];

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    step: "01",
    title: "UNDERSTAND THE PROBLEM",
    desc: "Deconstruct business requirements, user bottlenecks, and performance constraints before writing code.",
  },
  {
    step: "02",
    title: "DESIGN THE SYSTEM",
    desc: "Architect API contracts, database schemas, model requirements, and clean data boundaries.",
  },
  {
    step: "03",
    title: "BUILD THE SOFTWARE",
    desc: "Implement maintainable frontend surfaces, resilient backend services, and asynchronous pipelines.",
  },
  {
    step: "04",
    title: "ADD INTELLIGENCE",
    desc: "Integrate context-aware RAG, LLM reasoning, voice models, and prompt safeguards.",
  },
  {
    step: "05",
    title: "DEPLOY THE SOLUTION",
    desc: "Containerize with Docker, orchestrate deployments with cloud infrastructure, and enforce CI/CD.",
  },
  {
    step: "06",
    title: "IMPROVE THE PRODUCT",
    desc: "Monitor telemetry, evaluate hallucination rates, optimize latency, and iterate for continuous impact.",
  },
];
