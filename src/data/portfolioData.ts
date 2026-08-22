export const RESUME_DATA = {
  name: "PAVAN KUMAR REDDY PULI",
  title: "Software Developer — GenAI Engineering",
  tagline: "Building production-grade GenAI systems: grounded RAG pipelines, Celery background ingestion, LangGraph stateful agents, and multi-source context fusion.",
  focus: "Production RAG • LangGraph Agents • Celery Async Pipelines • LLM Observability & Guardrails",
  phone: "+91 8121692747",
  email: "pavan.sde1@gmail.com",
  linkedin: "https://www.linkedin.com/in/pavan-k-2bb0983a0/",
  github: "https://github.com/pavansde",
  location: "Bengaluru, India",
  summary: "Software Developer with 2 years of enterprise experience at Dalvkot building production LLM pipelines, GIN + pgvector hybrid RAG architectures (500k+ chunks, 1.5k+ daily queries at <350ms P95 retrieval latency), asynchronous document ingestion workflows via Celery & Redis (25k+ clinical records), and LangGraph agentic systems. Experienced with OpenAI GPT-4o, AWS Bedrock, Ollama (Llama 3.1 fallback routing), Pydantic & Instructor structured schema validation, pre-LLM PII masking, automated RAGAS evaluation, and LangSmith tracing.",

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
      items: ["pgvector (PostgreSQL)", "GIN Full-Text Index", "Reciprocal Rank Fusion (RRF)", "Cross-Encoder Reranking", "FAISS", "Domain-Aware Chunking", "Context Window Trimming"]
    },
    {
      category: "Agentic & Async Workflows",
      items: ["LangGraph (Stateful Graphs)", "Celery (Distributed Task Queue)", "Redis (Task Broker & Caching)", "LangChain ReAct", "Human-in-the-Loop (HITL) Approvals", "Agent Memory & Persistence"]
    },
    {
      category: "Evaluation & Observability",
      items: ["LangSmith (LLM Tracing)", "RAGAS Automated Regression", "LLM-as-a-Judge", "Pydantic Schema Validation", "Adversarial Test Scenarios", "Precision@K"]
    },
    {
      category: "Cloud & Container Deployment",
      items: ["AWS (Bedrock, ECS, Lambda, EC2, S3)", "Docker", "FastAPI (SSE Token Streaming)", "Gunicorn", "PostgreSQL Connection Pooling", "Firebase Hosting"]
    },
    {
      category: "Languages & Supporting Stack",
      items: ["Python", "SQL", "PostgreSQL (pgvector)", "PyTorch (Model Integration)", "SQLAlchemy", "Jupyter"]
    }
  ],

  certifications: [
    {
      name: "Generative AI, Machine Learning & Agentic AI",
      issuer: "SFJ Business Solutions Pvt Ltd",
      issuerShort: "SFJ",
      date: "January 2026",
      description: "Company-sponsored training covering production GenAI systems, agentic AI workflows, and applied machine learning — issued by employer.",
      pdfPath: "/Puli Pavan Kumar Reddy.pdf"
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "ASKVYKO",
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
      challenge: "Preventing cross-patient data leakage in a multi-tenant RAG system serving clinical documents while handling long-running vectorization jobs and multi-step clinical reasoning loops.",
      solution: "Engineered a stateful LangGraph agentic workflow with persistent memory, HITL validation checkpoints, and composite patient+hospital vector keying in pgvector. Built asynchronous ingestion pipelines using Celery & Redis (`run_background_ingestion_task`) to offload document parsing and chunk embedding generation from main request threads.",
      bullets: [
        "Architected stateful LangGraph agentic workflows with persistent memory and human-in-the-loop (HITL) approval checkpoints for multi-step clinical reasoning and query orchestration.",
        "Engineered asynchronous document ingestion pipelines using Celery and Redis (`run_background_ingestion_task`) to process 25,000+ medical records into 500,000+ pgvector chunks with per-patient deduplication.",
        "Integrated pre-prompt PII masking regex and entity sanitization to strip sensitive patient identifiers prior to dispatching context to cloud LLM APIs.",
        "Enforced strict output parsing and parameter validation using **Pydantic & Instructor** to guarantee deterministic JSON schemas for agent tool invocation chains.",
        "Enforced HIPAA-aligned multi-tenant isolation in pgvector storage via composite `hospital_id + patient_id` vector keying, serving 1,500+ daily clinical queries at <350ms P95 retrieval latency."
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
        "Senior-Engineered PyTorch ICD Model Integration",
        "GIN Full-Text + pgvector Semantic Search (4x Candidate Pull)",
        "Reciprocal Rank Fusion (RRF) Reranking (Top 20 → Top 5-20)",
        "Temporal & Context Labeling + Pydantic Schema Validation",
        "Ollama Fallback Routing (OpenAI → Local Llama 3.1)",
        "FastAPI Async SSE Token Streaming",
        "RAGAS Automated Regression Evaluation"
      ],
      metrics: [
        { label: "Hybrid RRF Fusion", value: "Top 20 → 5-20", detail: "Reciprocal Rank Fusion merging GIN & pgvector candidates" },
        { label: "Structured Validation", value: "Pydantic + Instructor", detail: "strict JSON output schema enforcement" },
        { label: "Serving Stack", value: "FastAPI + SSE", detail: "async streaming with connection pooling & Redis rate-limiting" }
      ],
      challenge: "Synthesizing disparate patient EHR notes, real-time vitals, and ML diagnostic predictions into a coherent context window without hallucination or context overflow.",
      solution: "Engineered a hybrid RAG retrieval engine combining GIN full-text keyword indexing with pgvector semantic search (retrieving 4x candidates and fusing top 20 via Reciprocal Rank Fusion). Built a multi-source context fusion layer merging raw patient inputs, PyTorch ICD classifier outputs, and RAG summaries into structured prompts for Llama 3.1 (Ollama), served via async FastAPI SSE token streaming.",
      bullets: [
        "Engineered hybrid RAG retrieval engine combining PostgreSQL GIN full-text indexing with pgvector semantic search, pulling 4x candidate chunks and fusing top 20 candidate results via Reciprocal Rank Fusion (RRF) for context selection.",
        "Designed a multi-source context fusion layer integrating raw patient EHR inputs, senior-engineered PyTorch ICD classifier predictions, and retrieved RAG summaries into structured prompts for patient-centric support.",
        "Engineered model fallback routing (OpenAI GPT-4o → local Ollama Llama 3.1) with exponential backoff retries to guarantee API service availability during cloud provider rate-limits.",
        "Established automated **RAGAS evaluation scripts** (Context Faithfulness & Answer Relevance) to benchmark prompt updates prior to production deployment.",
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
      role: "Software Developer",
      company: "Dalvkot Utility Enterprises Pvt Ltd",
      period: "Feb 2025 – Present",
      location: "Bengaluru, India",
      description: "Architecting and productionizing enterprise GenAI systems: LangGraph stateful agents, Celery async ingestion task queues, GIN + pgvector hybrid RAG pipelines, and multi-source context fusion APIs.",
      highlights: [
        "Architected and deployed ASKVYKO — a stateful LangGraph agentic RAG system with human-in-the-loop approvals, Celery & Redis background ingestion (25k+ records into 500k+ chunks), PII pre-prompt masking, and LangSmith tracing for 1,500+ daily clinical queries at <350ms P95 retrieval latency.",
        "Engineered Clinical Decision Support System — a hybrid RAG engine (GIN + pgvector + RRF reranking) with Ollama fallback routing, Pydantic & Instructor schema validation, RAGAS regression testing, and async FastAPI SSE token streaming."
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "BMS Institute of Technology & Management",
      location: "Bengaluru, India",
    },
    {
      degree: "Bachelor of Science in Computer Science (B.Sc)",
      institution: "GC & YPN College",
      location: "Kanigiri, India",
    }
  ]
};
