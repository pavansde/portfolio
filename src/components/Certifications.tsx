import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  if (!RESUME_DATA.certifications || RESUME_DATA.certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-10 border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="flex items-center gap-2 mb-6">
          <div className="w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 flex items-center justify-center">
            <Award className="w-4 h-4" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Certifications
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          {RESUME_DATA.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/90 shadow-xs hover:border-cyan-500/40 transition-all flex-1 min-w-0"
            >
              {/* Issuer Badge */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 text-white font-bold text-sm shadow-sm">
                {cert.issuerShort || cert.issuer.slice(0, 3).toUpperCase()}
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="font-bold text-slate-900 dark:text-white text-sm leading-snug">
                  {cert.name}
                </div>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                  <span className="text-xs text-cyan-700 dark:text-cyan-400 font-mono font-semibold">
                    {cert.issuer}
                  </span>
                  {cert.date && (
                    <>
                      <span className="text-slate-300 dark:text-slate-700 text-xs">•</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {cert.date}
                      </span>
                    </>
                  )}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                  {cert.description}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col items-end gap-2 shrink-0 pl-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 whitespace-nowrap">
                  Employer Issued
                </span>
                {cert.pdfPath && (
                  <a
                    href={cert.pdfPath}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-[11px] font-mono text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                    title="View Certificate PDF"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
