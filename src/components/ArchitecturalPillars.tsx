import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { Cpu, ShieldCheck, GitBranch, Gauge } from 'lucide-react';

export const ArchitecturalPillars: React.FC = () => {
  const pillarIcons = [Gauge, Cpu, ShieldCheck, GitBranch];

  return (
    <section id="architecture" className="py-16 border-b border-slate-200 dark:border-slate-800/60 transition-colors bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold mb-1 tracking-wider uppercase">
            Engineering Foundations
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            How I Architect Production AI Systems
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Practical engineering trade-offs focused on bounded resource consumption, high availability, and rigorous evaluation.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {RESUME_DATA.architecturalPillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || Cpu;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-50 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30">
                      {pillar.badge}
                    </span>
                    <div className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">
                      {pillar.metric}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-cyan-700 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {pillar.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
