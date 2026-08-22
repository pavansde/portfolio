import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  // Core skills to visually highlight (shown with cyan accent)
  const coreSkills = new Set([
    'Python', 'FastAPI (SSE Token Streaming)', 'OpenAI API (GPT-4o)', 'AWS Bedrock',
    'LangGraph (Stateful Graphs)', 'LangChain ReAct', 'pgvector (PostgreSQL)',
    'GIN Full-Text Index', 'Reciprocal Rank Fusion (RRF)', 'Cross-Encoder Reranking',
    'text-embedding-3-small', 'LangSmith (LLM Tracing)', 'RAGAS Framework',
    'LLM Guardrails', 'Redis (Rate Limiting & Caching)', 'Docker', 'Prompt Engineering'
  ]);

  return (
    <section id="skills" className="py-16 border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold mb-1 tracking-wider uppercase">
            Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-cyan-600 dark:bg-cyan-400 inline-block" />
              Highlighted = core production skills
            </span>
          </p>
        </div>

        {/* Skills Grid — 2 columns, 3 rows for 6 categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {RESUME_DATA.skills.map((group, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 shadow-xs"
            >
              <h3 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono border transition-colors ${
                      coreSkills.has(item)
                        ? 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/30 font-semibold'
                        : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 border-slate-200/80 dark:border-transparent'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
