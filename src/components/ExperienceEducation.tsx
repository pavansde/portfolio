import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { Briefcase, GraduationCap, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-16 border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Work Experience */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 flex items-center justify-center">
                <Briefcase className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Work Experience
              </h2>
            </div>

            <div className="space-y-6">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/90 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium mb-3">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Foundation */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {RESUME_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/90 shadow-xs"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block">
                      {idx === 0 ? 'Post-Graduate Degree' : 'Undergraduate Degree'}
                    </span>
                    {edu.period && (
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {edu.period}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    {edu.institution}, {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
