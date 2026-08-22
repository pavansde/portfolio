import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { FileText, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-[#090d16]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/70 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Name / Brand */}
        <a href="#" className="flex items-center gap-2 text-slate-900 dark:text-white font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-600 dark:bg-cyan-400"></span>
          <span className="font-semibold tracking-tight text-sm sm:text-base">{RESUME_DATA.name}</span>
          <span className="hidden md:inline text-xs text-slate-500 font-mono">/ GenAI</span>
        </a>

        {/* Navigation Links */}
        <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
          <a href="#projects" className="hover:text-slate-950 dark:hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-slate-950 dark:hover:text-white transition-colors">Skills</a>
          <a href="#certifications" className="hover:text-slate-950 dark:hover:text-white transition-colors">Certs</a>
          <a href="#experience" className="hover:text-slate-950 dark:hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-slate-950 dark:hover:text-white transition-colors">Contact</a>

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors"
            title={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Resume Button */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-cyan-50 dark:bg-cyan-500/10 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 text-xs font-semibold transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </nav>

      </div>
    </header>
  );
};
