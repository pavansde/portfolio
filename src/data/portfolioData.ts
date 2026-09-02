export const RESUME_DATA = {
  name: "PAVAN KUMAR REDDY PULI",
  title: "GenAI Engineer — LLM Pipelines & Agentic Systems",
  tagline: "Shipping production-grade GenAI: hybrid RAG at 1.5k+ daily queries · LangGraph stateful agents · Celery async ingestion · cloud-native AWS deployment.",
  focus: "Production RAG • LangGraph Agents • Celery Async Pipelines • AWS EKS & CI/CD • LLM Observability",
  phone: "+91 8121692747",
  email: "pavan.sde1@gmail.com",
  linkedin: "https://www.linkedin.com/in/pavankumarreddypuli/",
  github: "https://github.com/pavansde",
  location: "Bengaluru, India",
  summary: "GenAI Engineer specializing in production LLM systems, agentic RAG pipelines, and cloud-native AI deployment for Hospital Management Systems (HMS). Architected GIN + pgvector hybrid RAG serving 1,500+ daily clinical queries at <350ms P95 latency across 500k+ vector chunks. Built Celery & Redis async ingestion pipelines (25k+ medical records) and stateful LangGraph agentic workflows with human-in-the-loop approval checkpoints.",

  keyMetrics: [
    { label: "Daily RAG Queries", value: "1.5k+", sub: "<350ms P95 retrieval latency", icon: "Zap" },
    { label: "Async Record Ingestion", value: "25k+", sub: "medical records via Celery + Redis", icon: "Target" },
    { label: "pgvector Vector Scale", value: "500k+", sub: "deduplicated chunks across workspaces", icon: "ShieldCheck" },
    { label: "Agentic Control", value: "Human-in-the-Loop", sub: "LangGraph stateful workflow with HITL", icon: "TrendingUp" },
  ],

  skills: [
    {
      category: "LLM & Foundation Models",
      items: ["OpenAI API (GPT-4o)", "AWS Bedrock", "Llama 3.1 (Ollama Fallback)", "Fallback Routing & Retries", "Pydantic & Instructor (Structured Outputs)", "Pre-LLM PII Masking", "Prompt Optimization", "LLM Guardrails"]
    },
    {
      category: "RAG & Vector Search",
      items: ["pgvector (PostgreSQL)", "GIN Full-Text Index", "Reciprocal Rank Fusion (RRF)", "FAISS", "Domain-Aware Chunking", "Context Window Trimming"]
    },
    {
      category: "Agentic & Async Workflows",
      items: ["LangGraph (Stateful Graphs)", "Celery (Distributed Task Queue)", "Redis (Task Broker & Caching)", "LangChain ReAct", "Human-in-the-Loop (HITL) Approvals", "Agent Memory & Persistence", "MCP (Model Context Protocol)"]
    },
    {
      category: "Evaluation & Observability",
      items: ["LangSmith (LLM Tracing)", "RAGAS Automated Regression", "LLM-as-a-Judge", "Pydantic Schema Validation", "Adversarial Test Scenarios", "Precision@K", "Prometheus"]
    },
    {
      category: "Cloud & Container Deployment",
      items: ["AWS (Bedrock, ECS, Lambda, EC2, S3)", "Amazon ECR", "AWS IAM (Roles & Policies)", "CloudWatch (Logs & Alarms)", "Kubernetes (EKS)", "GitHub Actions (CI/CD)", "Docker"]
    },
    {
      category: "Languages & Supporting Stack",
      items: ["Python", "SQL", "FastAPI", "Gunicorn", "PostgreSQL (pgvector)", "PyTorch (Model Integration)", "SQLAlchemy", "Jupyter", "pytest", "pytest-asyncio"]
    }
  ],

  certifications: [
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
        { label: "Ingestion Scale", value: "25k+ Records", detail: "500k+ chunks indexed via Celery + Redis" },
        { label: "Query Workload", value: "1.5k+ Daily Queries", detail: "<350ms P95 retrieval latency" },
        { label: "Agent Control Loop", value: "Human-in-the-Loop", detail: "HITL validation checkpoints for clinical actions" }
      ],
      challenge: "Preventing cross-patient data leakage in a multi-tenant clinical RAG agent embedded within Hospital Management System (HMS) software, while handling long-running vectorization jobs and multi-step clinical reasoning loops.",
      solution: "Engineered a stateful LangGraph agentic workflow with persistent memory, HITL validation checkpoints, and composite patient+hospital vector keying in pgvector. Built asynchronous ingestion pipelines using Celery & Redis (`run_background_ingestion_task`) to offload document parsing and chunk embedding generation from main request threads.",
      bullets: [
        "Architected stateful LangGraph agentic workflows with persistent memory and human-in-the-loop (HITL) approval checkpoints for multi-step clinical reasoning and query orchestration.",
        "Engineered asynchronous document ingestion pipelines using Celery and Redis (`run_background_ingestion_task`) to process 25,000+ medical records into 500,000+ pgvector chunks with per-patient deduplication.",
        "Integrated pre-prompt PII masking regex and entity sanitization to strip sensitive patient identifiers prior to dispatching context to cloud LLM APIs.",
        "Enforced strict output parsing and parameter validation using Pydantic & Instructor to guarantee deterministic JSON schemas for agent tool invocation chains.",
        "Enforced HIPAA-aligned multi-tenant isolation in pgvector storage via composite `hospital_id + patient_id` vector keying within HMS infrastructure, serving 1,500+ daily clinical queries at <350ms P95 retrieval latency."
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
        "Engineered hybrid RAG retrieval engine combining PostgreSQL GIN full-text indexing with pgvector semantic search, pulling 4x candidate chunks and fusing top 20 candidate results via Reciprocal Rank Fusion (RRF) for context selection.",
        "Designed a multi-source context fusion layer integrating raw patient EHR inputs, PyTorch ICD-10 classifier outputs (developed by senior ML engineer), and retrieved RAG summaries into structured LLM prompts for patient-centric clinical support.",
        "Engineered dual-provider fallback routing (OpenAI GPT-4o → local Ollama Llama 3.1) with exponential backoff retries, achieving 99.9%+ API availability during cloud provider rate-limit events.",
        "Established automated RAGAS evaluation scripts (Context Faithfulness & Answer Relevance) to benchmark prompt updates prior to production deployment.",
        "Productionized asynchronous LLM inference API using FastAPI with Server-Sent Events (SSE) token streaming, Redis rate limiting, and PostgreSQL connection pooling."
      ],
      stack: ["Llama 3.1 (Ollama)", "pgvector", "GIN Index", "Hybrid RRF", "FastAPI (SSE)", "Celery", "Redis", "Pydantic", "Instructor", "RAGAS", "PyTorch (Integration)", "Python"]
    },
    {
      id: "project-3",
      title: "PNR Footwear & Bag House Platform",
      tagline: "Live Commercial E-Commerce Platform · Deployed on Firebase Hosting",
      company: "Commercial Business Project",
      period: "Live Production",
      category: "Full-Stack & Cloud Deployment",
      pipeline: [
        "Frontend & UI Architecture",
        "Firebase Authentication & Security",
        "Cloud Database & Product Catalog Indexing",
        "Firebase Hosting Deployment",
        "Domain Routing & SSL Configuration"
      ],
      metrics: [
        { label: "Production Status", value: "Live", detail: "pnrfootwearandbaghouse.com" },
        { label: "Cloud Platform", value: "Firebase", detail: "Firebase Hosting & Cloud Services" },
        { label: "Uptime", value: "99.9%", detail: "Production Cloud Hosting" }
      ],
      challenge: "Architecting and deploying a reliable, responsive production e-commerce platform for an active retail business with zero-downtime hosting.",
      solution: "Designed and launched pnrfootwearandbaghouse.com as a live commercial application. Built using React and integrated with Firebase Hosting, Firebase Authentication, and Cloud Database services for real-time inventory management.",
      bullets: [
        "Architected, built, and launched live commercial platform (pnrfootwearandbaghouse.com) serving active retail business operations.",
        "Deployed full-stack web application on Firebase Hosting with custom domain routing, SSL security, and automated deployment pipelines.",
        "Integrated Firebase database services and optimized product catalog query indexing to maintain sub-second response times for customer searches."
      ],
      stack: ["React", "Firebase", "Firebase Hosting", "Firestore", "Node.js", "REST APIs"]
    }
  ],

  experience: [
    {
      role: "GenAI Engineer",
      company: "Dalvkot Utility Enterprises Pvt Ltd",
      period: "Feb 2025 – Present",
      location: "Bengaluru, India",
      description: "Architecting and productionizing enterprise GenAI modules for Hospital Management Systems (HMS): LangGraph stateful agents, Celery async ingestion task queues, GIN + pgvector hybrid RAG pipelines, and multi-source context fusion APIs."
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
      degree: "Bachelor of Science in Computer Science (B.Sc)",
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
