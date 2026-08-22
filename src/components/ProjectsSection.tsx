import React, { useState } from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { ChevronRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<{ [key: string]: 'bullets' | 'challenge' | 'pipeline' }>({
    'project-1': 'bullets',
    'project-2': 'bullets'
  });

  const setTab = (projectId: string, tab: 'bullets' | 'challenge' | 'pipeline') => {
    setActiveTab(prev => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="py-16 border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold mb-1 tracking-wider uppercase">
              Work Projects
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Featured GenAI Projects
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Production agentic RAG systems, grounded LLM pipelines, and privacy-safe multi-tenant vector search — built and deployed at Dalvkot Utility Enterprises.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-semibold whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Production Deployed
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-10">
          {RESUME_DATA.projects.map((proj, idx) => {
            const currentTab = activeTab[proj.id] || 'bullets';

            return (
              <article
                key={proj.id}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/90 shadow-sm hover:shadow-md transition-all"
              >
                
                {/* Project Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5 pb-5 border-b border-slate-200 dark:border-slate-800/70">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-slate-500">
                        {proj.company}
                      </span>
                      <span className="text-slate-300 dark:text-slate-700">·</span>
                      <span className="text-xs font-mono text-slate-500">{proj.period}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                      {proj.tagline}
                    </p>
                  </div>
                </div>

                {/* Key Metric Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {proj.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800"
                    >
                      <div className="text-lg font-bold font-mono text-cyan-700 dark:text-cyan-400">
                        {m.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {m.label}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {m.detail}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Portfolio Tabs */}
                <div className="flex items-center gap-2 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2 text-xs font-medium">
                  <button
                    onClick={() => setTab(proj.id, 'bullets')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      currentTab === 'bullets'
                        ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Key Implementations
                  </button>

                  <button
                    onClick={() => setTab(proj.id, 'pipeline')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      currentTab === 'pipeline'
                        ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    System Pipeline
                  </button>

                  <button
                    onClick={() => setTab(proj.id, 'challenge')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      currentTab === 'challenge'
                        ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Challenge &amp; Solution
                  </button>
                </div>

                {/* Tab Content: Key Implementations */}
                {currentTab === 'bullets' && (
                  <div className="space-y-3 mb-6 animate-in fade-in duration-150">
                    {proj.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab Content: System Pipeline — scrollable on mobile */}
                {currentTab === 'pipeline' && (
                  <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 animate-in fade-in duration-150">
                    <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold mb-3">
                      End-to-End Architectural Dataflow:
                    </div>
                    <div className="overflow-x-auto pb-1">
                      <div className="flex items-center gap-2 min-w-max">
                        {proj.pipeline.map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span className="px-3 py-1.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium text-slate-800 dark:text-slate-200 whitespace-nowrap">
                              {sIdx + 1}. {step}
                            </span>
                            {sIdx < proj.pipeline.length - 1 && (
                              <ChevronRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content: Challenge & Solution */}
                {currentTab === 'challenge' && (
                  <div className="mb-6 space-y-3 animate-in fade-in duration-150">
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm">
                      <strong className="text-amber-800 dark:text-amber-300 font-mono block mb-2 uppercase tracking-wider text-[11px]">Technical Challenge</strong>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{proj.challenge}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm">
                      <strong className="text-emerald-800 dark:text-emerald-300 font-mono block mb-2 uppercase tracking-wider text-[11px]">Engineering Solution</strong>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{proj.solution}</p>
                    </div>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-500 uppercase mr-1">Stack:</span>
                  {proj.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200 dark:border-transparent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
