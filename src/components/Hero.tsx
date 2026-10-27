import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { Mail, Linkedin, Github, FileText, Zap, Target, ShieldCheck, TrendingUp, Terminal, Activity, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const metricIcons = [Zap, Target, ShieldCheck, TrendingUp];

  return (
    <section className="relative pt-12 sm:pt-16 pb-16 border-b border-slate-200 dark:border-slate-800/80 transition-colors overflow-hidden">
      
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Top Status Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold">Software Developer — GenAI</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <Activity className="w-3.5 h-3.5 text-emerald-500" />
            <span>Active in Bengaluru • Open for GenAI &amp; Dev Roles</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Main Bio & Headline */}
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
              {RESUME_DATA.name}
            </h1>

            {/* Clean title as primary subtitle */}
            <p className="text-base sm:text-xl font-semibold text-cyan-700 dark:text-cyan-400 tracking-tight mb-1">
              {RESUME_DATA.title}
            </p>

            {/* Focus areas as a lighter secondary line */}
            <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 mb-5">
              {RESUME_DATA.focus}
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              {RESUME_DATA.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                id="hero-email-btn"
                href={`mailto:${RESUME_DATA.email}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Talk</span>
              </a>

              <a
                href="#projects"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              </a>

              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-xs sm:text-sm border border-slate-300 dark:border-slate-800 transition-colors"
              >
                <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Resume</span>
              </button>

              <div className="flex items-center gap-2 pl-1">
                <a
                  id="hero-linkedin-btn"
                  href={RESUME_DATA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  id="hero-github-btn"
                  href={RESUME_DATA.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* System Telemetry Terminal Card */}
          <div className="lg:col-span-4">
            <div className="rounded-xl bg-slate-950 text-slate-300 border border-slate-800 shadow-xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Titlebar */}
              <div className="px-3.5 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>runtime_spec.json</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-4 space-y-2 text-[11px] leading-relaxed">
                <div>
                  <span className="text-purple-400">"agent_architecture"</span>: <span className="text-cyan-300">"LangGraph · Memory · Human-in-Loop"</span>,
                </div>
                <div>
                  <span className="text-purple-400">"hybrid_retrieval"</span>: <span className="text-emerald-300">"GIN Full-Text + pgvector · Hybrid RRF"</span>,
                </div>
                <div>
                  <span className="text-purple-400">"embeddings_rerank"</span>: <span className="text-emerald-300">"text-embedding-3-small · Cross-Encoder"</span>,
                </div>
                <div>
                  <span className="text-purple-400">"observability_sec"</span>: <span className="text-amber-300">"LangSmith Tracing · Custom Guardrails"</span>,
                </div>
                <div>
                  <span className="text-purple-400">"inference_serving"</span>: <span className="text-cyan-300">"FastAPI SSE Streaming · Redis Rate Limit"</span>,
                </div>
                <div>
                  <span className="text-purple-400">"performance_p95"</span>: <span className="text-amber-300">"&lt;350ms P95 retrieval · 500+ daily queries"</span>,
                </div>
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>GenAI Systems Online</span>
                  </span>
                  <span>LangSmith · RAGAS Evaluated</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Key Benchmark Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-slate-200 dark:border-slate-800/60">
          {RESUME_DATA.keyMetrics.map((item, idx) => {
            const Icon = metricIcons[idx] || Zap;
            return (
              <div
                key={idx}
                className="group p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-cyan-700 dark:text-cyan-400 tracking-tight">
                    {item.value}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-0.5">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
