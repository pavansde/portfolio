# Pavan Kumar Reddy Puli — GenAI Engineer Portfolio

<div align="center">

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**Production GenAI Systems · Hybrid RAG Architectures · Stateful LangGraph Agents · Cloud-Native AI Deployment**

[View Live Portfolio](https://pavansde.vercel.app/) · [Connect on LinkedIn](https://www.linkedin.com/in/pavankumarreddypuli/) · [Email](mailto:pavan.sde1@gmail.com)

</div>

---

## ⚡ Overview

A high-performance, single-page developer portfolio and interactive resume engine engineered for production GenAI and Software Development roles. Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**, this portfolio highlights real-world architectures in clinical NLP, multi-tenant vector retrieval, async task offloading, and conversational AI systems.

### 🌟 Key Highlights & Capabilities
* **Clinical Multi-Tenant RAG:** Showcases **ASKVYKO** serving 500+ daily clinical queries with `<350ms` P95 retrieval latency across 100k+ pgvector chunks.
* **Hybrid RRF Search:** Integrates PostgreSQL GIN full-text indexing with pgvector semantic similarity via Reciprocal Rank Fusion (RRF).
* **Stateful Agent Workflows:** Implements cyclical LangGraph state machines with persistent memory and human-in-the-loop (HITL) checkpoints.
* **Enterprise Full-Stack Project:** Details an e-commerce platform with a conversational RAG customer assistant built at **GITS Technocrats Solutions**.
* **Native ATS Vector PDF Generator:** Ships a pure TypeScript PDF-1.4 binary compiler emitting native Type-1 Helvetica text operators—100% selectable on iOS/Android and fully parseable by ATS engines (Workday, Greenhouse, Lever) without canvas bloat or third-party npm dependencies.
* **Calibrated 1-Page Print Resume:** Custom `@media print` engine strictly isolating resume content, hiding UI chrome, and calibrating typography to print on exactly 1 letter page.
* **Dynamic Theme Context:** Real-time dark/light mode toggle with CSS custom properties and instant persistence.

---

## 🏗️ Architecture & Featured Projects

| Project | Role & Company | Core Technologies | Primary Metric / Focus |
|:---|:---|:---|:---|
| **ASKVYKO** | GenAI Engineer<br>*Dalvkot Utility Enterprises* | `LangGraph`, `Celery`, `Redis`, `pgvector`, `AWS Bedrock`, `LangSmith` | **5-10k+ Records** ingested async · `<350ms P95` retrieval latency · HITL approval gates |
| **Clinical Decision Support System (CDSS)** | GenAI Engineer<br>*Dalvkot Utility Enterprises* | `Llama 3.1 (Ollama)`, `GIN Index`, `pgvector`, `FastAPI SSE`, `RAGAS` | **4x Candidate Pull** with RRF reranking · `99.9%+` uptime fallback routing |
| **E-Commerce Platform & RAG Assistant** | Software Engineer<br>*GITS Technocrats Solutions* | `React`, `Python`, `FastAPI`, `PostgreSQL`, `Redis`, `Vector Search`, `Docker` | **1,000+ SKUs** catalog indexing · `<150ms` query latency · Automated FAQ Q&A |

---

## 🧱 The 4 Architectural Pillars

The site features an **Engineering Foundations** section detailing the production trade-offs implemented in enterprise deployments:

1. **Bounded Resources (`<350ms P95`):** Offloading heavy chunk embedding generation to Celery & Redis background workers; serving LLM tokens via asynchronous FastAPI Server-Sent Events (SSE).
2. **Deterministic Execution (`HITL Checkpoints`):** Designing cyclical LangGraph graphs with state persistence, strict Pydantic output schemas, and human approval checkpoints.
3. **Data Isolation (`Zero Cross-Leakage`):** Pre-prompt PII regex sanitization and composite key partitioning (`hospital_id + patient_id`) in vector storage.
4. **Empirical QA (`>0.80 Faithfulness`):** Automated regression testing using RAGAS, LangSmith execution tracing, and dual-provider fallback routing (Cloud LLM → local Ollama).

---

## 📁 Repository Structure

```
portfolio/
├── public/
│   └── Puli Pavan Kumar Reddy.pdf     # SFJ GenAI & Agentic AI certification
├── src/
│   ├── components/
│   │   ├── ArchitecturalPillars.tsx   # 4 Core engineering pillars
│   │   ├── Certifications.tsx         # Employer-issued professional credentials
│   │   ├── ContactSection.tsx         # One-click copy & social links
│   │   ├── ExperienceEducation.tsx    # Symmetrical career & degree timeline
│   │   ├── Footer.tsx                 # Back-to-top & copyright footer
│   │   ├── Hero.tsx                   # Bio, terminal telemetry & KPI benchmarks
│   │   ├── Navbar.tsx                 # Sticky navigation, theme toggle & resume modal CTA
│   │   ├── ProjectsSection.tsx        # Interactive tabbed project deep-dives
│   │   ├── ResumeModal.tsx            # In-app resume viewer, print engine & markdown export
│   │   └── SkillsMatrix.tsx           # Categorized tech skills with core production highlights
│   ├── context/
│   │   └── ThemeContext.tsx           # Dark/Light theme state provider
│   ├── data/
│   │   └── portfolioData.ts           # Single source of truth for resume & site data
│   ├── utils/
│   │   └── generateResumePdf.ts       # ATS-compliant binary vector PDF compiler (Type-1 Helvetica)
│   ├── App.tsx                        # Master layout orchestrator
│   ├── index.css                      # Tailwind v4 directives, custom font imports & print rules
│   └── main.tsx                       # React DOM entrypoint
├── index.html                         # SEO metadata, OpenGraph tags & responsive viewport
├── package.json                       # Scripts and zero-bloat dependencies
├── tsconfig.json                      # Strict TypeScript compiler configuration
└── vite.config.ts                     # Optimized Vite build setup
```

---

## 🛠️ Local Development & Scripts

### Prerequisites
* **Node.js:** v18+ (v20+ or v22 recommended)
* **npm:** v9+

### Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (HMR enabled at http://localhost:3000)
npm run dev

# 3. Type-check with TypeScript (zero emit)
npm run lint

# 4. Compile optimized production bundle to /dist
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🚀 Deployment (Vercel)

This project is 100% client-side and requires zero server configuration or database dependencies.

1. Import this repository into your **[Vercel Dashboard](https://vercel.com)**.
2. Vercel automatically detects Vite and applies the production settings:
   * **Framework Preset:** Vite
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
   * **Install Command:** `npm install`
3. Every push to the `main` branch automatically builds, verifies, and deploys with preview URLs.

---

## 👤 Author & Contact

**Pavan Kumar Reddy Puli**  
*GenAI Engineer — LLM Pipelines & Agentic Systems*  
📍 Bengaluru, India  
* 📧 Email: [pavan.sde1@gmail.com](mailto:pavan.sde1@gmail.com)  
* 💼 LinkedIn: [linkedin.com/in/pavankumarreddypuli](https://www.linkedin.com/in/pavankumarreddypuli/)  
* 🐙 GitHub: [github.com/pavansde](https://github.com/pavansde)
