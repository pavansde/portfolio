import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-slate-100 dark:bg-[#070b12] text-slate-500 text-xs transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div>
          © {new Date().getFullYear()} {RESUME_DATA.name} • GenAI Engineer
        </div>

        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 font-medium">
          <a href={RESUME_DATA.github} target="_blank" rel="noreferrer" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
            GitHub
          </a>
          <a href={RESUME_DATA.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${RESUME_DATA.email}`} className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded bg-white hover:bg-slate-200 text-slate-600 hover:text-slate-950 border border-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-white dark:border-slate-800 transition-colors ml-2 shadow-xs"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
