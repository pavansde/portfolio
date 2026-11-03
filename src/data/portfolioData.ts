export const RESUME_DATA = {
  name: "PAVAN KUMAR REDDY PULI",
  title: "GenAI Engineer — LLM Pipelines & Agentic Systems",
  portfolio: "https://pavansde.vercel.app/",
  tagline: "Shipping production-grade GenAI: hybrid RAG at 500+ daily queries · LangGraph stateful agents · Celery async ingestion · cloud-native AWS deployment.",
  focus: "Production RAG • LangGraph Agents • Celery Async Pipelines • AWS EKS & CI/CD • LLM Observability",
  phone: "+91 8121692747",
  email: "pavan.sde1@gmail.com",
  linkedin: "https://www.linkedin.com/in/pavankumarreddypuli/",
  github: "https://github.com/pavansde",
  location: "Bengaluru, India",
  summary: "Software engineer with 4 years of experience, including 3 years building RAG and LLM systems, most recently production RAG and agentic systems for hospital management software. Shipped hybrid GIN + pgvector retrieval over 100k+ chunks serving 500+ daily clinical queries at <350ms P95, async ingestion of 5,000-10,000+ medical records, and LangGraph agents with human approval checkpoints.",

  keyMetrics: [
    { label: "Daily RAG Queries", value: "500+", sub: "<350ms P95 retrieval latency", icon: "Zap" },
    { label: "Async Record Ingestion", value: "5-10k+", sub: "medical records via Celery + Redis", icon: "Target" },
    { label: "pgvector Vector Scale", value: "100k+", sub: "deduplicated chunks across workspaces", icon: "ShieldCheck" },
    { label: "Agentic Control", value: "Human-in-the-Loop", sub: "LangGraph stateful workflow with HITL", icon: "TrendingUp" },
  ],

  skills: [
    {
      category: "LLMs & Prompting",
      items: ["OpenAI GPT-4o", "AWS Bedrock", "Llama 3.1 (Ollama)", "Fallback Routing & Retries", "Structured Outputs (Pydantic, Instructor)", "PII Masking", "Guardrails", "Prompt Optimization"]
    },
    {
      category: "RAG & Retrieval",
      items: ["pgvector", "PostgreSQL GIN Full-Text Search", "Hybrid Retrieval with Reciprocal Rank Fusion (RRF)", "Domain-Aware Chunking", "Context-Window Trimming"]
    },
    {
      category: "Agents & Async",
      items: ["LangGraph (Stateful Graphs, Memory, Human-in-the-Loop)", "LangChain", "MCP (Model Context Protocol)", "Celery", "Redis"]
    },
    {
      category: "Evaluation & Observability",
      items: ["RAGAS (Faithfulness, Answer Relevance)", "LLM-as-a-Judge", "Precision@K", "LangSmith Tracing", "Adversarial Test Scenarios", "pytest"]
    },
    {
      category: "Backend & Cloud",
      items: ["Python", "SQL", "FastAPI (SSE Streaming)", "PostgreSQL", "SQLAlchemy", "Docker", "GitHub Actions", "AWS (Bedrock, ECS, EC2, S3, ECR, IAM, CloudWatch)"]
    }
  ],

  certifications: [
    {
      name: "Hugging Face Agents Course",
      issuer: "Hugging Face",
      issuerShort: "HF",
      date: "September 2026",
      description: "Comprehensive training in building autonomous AI agents, tool integration, and multi-step reasoning workflows using open-source models.",
      credentialUrl: "https://huggingface.co/datasets/agents-course/final-certificates/resolve/main/certificates/pavan1804/2026-09-02.png"
    },
    {
      name: "AI Agents Fundamentals",
      issuer: "Hugging Face",
      issuerShort: "HF",
      date: "April 2026",
      description: "Core architectural foundations for LLM-based autonomous agent loops, prompt patterns, and task execution.",
      credentialUrl: "https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/pavan1804/2026-04-01.png"
    },
    {
      name: "Generative AI, Machine Learning & Agentic AI",
      issuer: "SFJ Business Solutions Pvt Ltd",
      issuerShort: "SFJ",
      date: "January 2026",
      description: "Advanced training in production LLM systems, LangGraph agentic workflows, RAG pipeline architecture, and applied machine learning in enterprise environments.",
      pdfPath: "/Puli Pavan Kumar Reddy.pdf"
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "ASKVYKO — Multi-Tenant Clinical RAG Agent",
      tagline: "Multi-Tenant Clinical Agent · LangGraph Stateful Workflow · Celery Background Ingestion",
      company: "Dalvkot Utility Enterprises Pvt Ltd",
      period: "Oct 2025 – Present",
      category: "Agentic Workflows · Privacy-Safe RAG",
      pipeline: [
        "Celery + Redis Async Ingestion (`run_background_ingestion_task`)",
        "Domain-Aware Medical Chunking & Per-Patient Deduplication",
        "Pre-Prompt PII Masking & Data Sanitization",
        "pgvector & FAISS Composite Keying (`hospital_id + patient_id`)",
        "Pydantic & Instructor Structured Schema Validation",
        "LangGraph Agent Loop & Memory Persistence",
        "Human-in-the-Loop (HITL) Approval Checkpoints",
        "LangSmith Execution & Latency Tracing"
      ],
      metrics: [
        { label: "Ingestion Scale", value: "5-10k+ Records", detail: "100k+ chunks indexed via Celery + Redis" },
        { label: "Query Workload", value: "500+ Daily Queries", detail: "<350ms P95 retrieval latency" },
        { label: "Agent Control Loop", value: "Human-in-the-Loop", detail: "HITL validation checkpoints for clinical actions" }
      ],
      challenge: "Preventing cross-patient data leakage in a multi-tenant clinical RAG agent embedded within Hospital Management System (HMS) software, while handling long-running vectorization jobs and multi-step clinical reasoning loops.",
      solution: "Engineered a stateful LangGraph agentic workflow with persistent memory, HITL validation checkpoints, and composite patient+hospital vector keying in pgvector. Built asynchronous ingestion pipelines using Celery & Redis (`run_background_ingestion_task`) to offload document parsing and chunk embedding generation from main request threads.",
      bullets: [
        "Built stateful LangGraph agents with persistent memory and human-in-the-loop approval checkpoints for multi-step clinical reasoning, keeping clinicians in control of agent actions.",
        "Designed async ingestion with Celery + Redis that processes 5,000-10,000+ medical records into 100,000+ pgvector chunks, with per-patient deduplication.",
        "Enforced strict multi-tenant isolation using composite hospital_id + patient_id vector keys, serving 500+ daily clinical queries at <350ms P95 retrieval latency.",
        "Added pre-prompt PII masking and entity sanitization to strip patient identifiers before any context reaches cloud LLM APIs.",
        "Guaranteed deterministic JSON for agent tool calls with Pydantic + Instructor schema validation and strict output parsing."
      ],
      stack: ["LangGraph", "LangChain", "Celery", "Redis", "pgvector", "Pydantic", "Instructor", "AWS Bedrock", "OpenAI GPT-4o", "LangSmith", "FastAPI", "Python"]
    },
    {
      id: "project-2",
      title: "Clinical Decision Support System (CDSS)",
      tagline: "Multi-Source Context Fusion · GIN + pgvector Hybrid RRF Search · Async SSE Token Streaming",
      company: "Dalvkot Utility Enterprises Pvt Ltd",
      period: "Feb 2025 – Oct 2025",
      category: "GenAI · Production LLM Pipelines",
      pipeline: [
        "Raw Patient EHR & Real-Time Vitals Ingestion",
        "PyTorch ICD-10 Classifier Integration",
        "GIN Full-Text + pgvector Semantic Search (4x Candidate Pull)",
        "Reciprocal Rank Fusion (RRF) Reranking (Top 20 → Top 5-20)",
        "Temporal & Context Labeling + Pydantic Schema Validation",
        "Ollama Fallback Routing (OpenAI → Local Llama 3.1)",
        "FastAPI Async SSE Token Streaming",
        "RAGAS Automated Regression Evaluation"
      ],
      metrics: [
        { label: "Hybrid Retrieval", value: "4x Recall Boost", detail: "GIN + pgvector pulls 4x candidates, RRF reranks to top 5–20" },
        { label: "API Availability", value: "99.9%+", detail: "OpenAI → Ollama Llama 3.1 fallback with exponential backoff" },
        { label: "RAGAS Faithfulness", value: ">0.80", detail: "Context Faithfulness score on automated RAGAS regression suite" }
      ],
      challenge: "Synthesizing disparate patient EHR notes, real-time vitals, and diagnostic predictions from hospital databases into a coherent context window without hallucination or context overflow.",
      solution: "Engineered a hybrid RAG retrieval engine combining GIN full-text keyword indexing with pgvector semantic search (retrieving 4x candidates and fusing top 20 via Reciprocal Rank Fusion). Built a multi-source context fusion layer merging raw patient inputs, PyTorch ICD classifier outputs, and RAG summaries into structured prompts for Llama 3.1 (Ollama), served via async FastAPI SSE token streaming.",
      bullets: [
        "Built a hybrid RAG engine combining PostgreSQL GIN full-text and pgvector semantic search: retrieve 4x candidates, fuse the top 20 with Reciprocal Rank Fusion for context selection.",
        "Designed a multi-source context layer that merges patient EHR data, ICD-10 classifier outputs (PyTorch model) and retrieved RAG summaries into structured LLM prompts.",
        "Implemented dual-provider fallback (GPT-4o to local Ollama Llama 3.1) with exponential-backoff retries, keeping the API available during cloud rate-limit events.",
        "Set up RAGAS evaluation (context faithfulness, answer relevance) to benchmark every prompt change before production release.",
        "Shipped an async LLM inference API on FastAPI with SSE token streaming, Redis rate limiting and PostgreSQL connection pooling."
      ],
      stack: ["Llama 3.1 (Ollama)", "pgvector", "GIN Index", "Hybrid RRF", "FastAPI (SSE)", "Celery", "Redis", "Pydantic", "Instructor", "RAGAS", "PyTorch (Integration)", "Python"]
    },
    {
      id: "project-3",
      title: "E-Commerce Platform & Conversational RAG Assistant",
      tagline: "Full-Stack E-Commerce Architecture · Python REST APIs · RAG Customer Support",
      company: "GITS Technocrats Solutions",
      period: "Jan 2023 – Jan 2025",
      category: "Full-Stack & Conversational AI",
      pipeline: [
        "React Frontend Architecture & Dynamic Cart State",
        "Python (FastAPI) Modular Backend REST API Services",
        "PostgreSQL Relational Catalog Schema & Indexing",
        "RAG Vector Retrieval (Embeddings & Similarity Search)",
        "Automated Product Recommendation & FAQ Chatbot Engine",
        "Redis Caching Layer for Frequent Catalog Lookups",
        "Docker Containerization & CI/CD Deployment Pipelines"
      ],
      metrics: [
        { label: "Catalog Scale", value: "1,000+ SKUs", detail: "Multi-category catalog indexing & sub-second search" },
        { label: "Search Latency", value: "<150ms", detail: "Optimized relational indexing & Redis caching layer" },
        { label: "AI Resolution", value: "Automated Q&A", detail: "RAG chatbot resolving routine customer inquiries" }
      ],
      challenge: "Building a scalable, responsive e-commerce web platform capable of handling multi-category catalog searches, dynamic cart state, and repetitive customer support inquiries without manual operational overhead.",
      solution: "Collaborated in an Agile engineering team to build a scalable full-stack e-commerce architecture using React and Python REST APIs backed by PostgreSQL and Redis. Designed and integrated a conversational RAG chatbot that grounded responses on product inventory and FAQs to streamline customer assistance.",
      bullets: [
        "Delivered 3 core full-stack e-commerce flows (catalog search, cart, order processing) with React and Python REST APIs over 2 years.",
        "Built an AI customer-support chatbot using RAG and vector similarity search over ~1,000 products, automating product Q&A for ~500 queries/week from ~200 customers.",
        "Designed API contracts and tuned PostgreSQL indexes; reviewed peers' code to keep backend services clean and reliable."
      ],
      stack: ["React", "Python", "FastAPI", "PostgreSQL", "Redis", "RAG", "Vector Search", "Docker", "Git"]
    }
  ],

  experience: [
    {
      role: "Software Developer (GenAI / LLM Systems)",
      company: "Dalvkot Utility Enterprises Pvt Ltd",
      period: "Feb 2025 – Present",
      location: "Bengaluru, India",
      description: "Architecting and shipping production GenAI modules for Hospital Management Systems (HMS): multi-tenant agentic RAG workflows, Celery async document ingestion across 100k+ vector chunks, and resilient LLM inference with fallback routing, serving 500+ daily clinical queries at <350ms P95 retrieval latency."
    },
    {
      role: "Software Engineer",
      company: "GITS Technocrats Solutions",
      period: "Jan 2023 – Jan 2025",
      location: "Bengaluru, India",
      description: "Delivered full-stack e-commerce features and a RAG customer-support chatbot in an Agile team: React interfaces, modular Python REST APIs, and a product Q&A bot automating ~500 queries per week.",
      bullets: [
        "Delivered 3 core full-stack e-commerce flows (catalog search, cart, order processing) with React and Python REST APIs over 2 years.",
        "Built an AI customer-support chatbot using RAG and vector similarity search over ~1,000 products, automating product Q&A for ~500 queries/week from ~200 customers.",
        "Designed API contracts and tuned PostgreSQL indexes; reviewed peers' code to keep backend services clean and reliable."
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      period: "2019 – 2022",
      institution: "BMS Institute of Technology & Management",
      location: "Bengaluru, India",
    },
    {
      degree: "B.Sc. Computer Science",
      period: "2016 – 2019",
      institution: "GC & YPN College",
      location: "Kanigiri, India",
    }
  ],

  architecturalPillars: [
    {
      badge: "Bounded Resources",
      metric: "<350ms P95",
      title: "Async Task Offloading & Streaming",
      tagline: "Celery Task Queues · FastAPI SSE · PostgreSQL Connection Pooling",
      description: "Offloading heavy document chunking and vector embeddings to distributed background workers, while serving LLM tokens via asynchronous Server-Sent Events to keep client threads responsive."
    },
    {
      badge: "Deterministic Execution",
      metric: "HITL Checkpoints",
      title: "Stateful Multi-Step Agent Loops",
      tagline: "LangGraph State Graphs · Pydantic Structured Outputs · Human-in-the-Loop",
      description: "Designing cyclical agent workflows with persistent checkpointing and schema-enforced tool invocations, integrating human approval gates before executing critical clinical actions."
    },
    {
      badge: "Data Isolation",
      metric: "Zero Cross-Leakage",
      title: "Multi-Tenant Privacy & Sanitization",
      tagline: "Pre-Prompt PII Masking · Composite Key Partitioning · HIPAA Alignment",
      description: "Sanitizing sensitive patient identifiers prior to cloud model inference and isolating vector storage via composite hospital and patient key filters across all vector search operations."
    },
    {
      badge: "Empirical QA",
      metric: ">0.80 Faithfulness",
      title: "Continuous Observability & Evaluation",
      tagline: "RAGAS Regression Suites · LangSmith Execution Tracing · Fallback Routing",
      description: "Benchmarking prompt iterations and retrieval quality with automated evaluation metrics, paired with end-to-end execution tracing and resilient multi-provider model fallback."
    }
  ]
};
