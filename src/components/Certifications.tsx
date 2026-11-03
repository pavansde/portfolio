import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  if (!RESUME_DATA.certifications || RESUME_DATA.certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-10 border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-2 mb-6">
          <div className="w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 flex items-center justify-center">
            <Award className="w-4 h-4" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Certifications
          </h2>
        </div>

        {/* Responsive 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {RESUME_DATA.certifications.map((cert, idx) => {
            const isHF = cert.issuer.includes('Hugging Face');
            return (
              <div
                key={idx}
                className="flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/90 shadow-xs hover:border-cyan-500/50 hover:shadow-md transition-all group"
              >
                <div>
                  {/* Card Header: Icon Badge & Status Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-white font-bold text-sm shadow-sm transition-transform group-hover:scale-105 ${
                        isHF
                          ? 'bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 shadow-amber-500/10 text-xl'
                          : 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/10'
                      }`}
                    >
                      {isHF ? '🤗' : cert.issuerShort || 'SFJ'}
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border whitespace-nowrap ${
                        isHF
                          ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-500/30'
                          : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30'
                      }`}
                    >
                      {isHF ? 'Verified Credential' : 'Employer Sponsored'}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug mb-1.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cert.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 font-medium mb-3">
                    <span>{cert.issuer}</span>
                    {cert.date && (
                      <>
                        <span className="text-slate-300 dark:text-slate-700">•</span>
                        <span className="text-slate-500 dark:text-slate-400">{cert.date}</span>
                      </>
                    )}
                  </div>

                  {/* Full-width clean description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                {/* Card Footer */}
                {cert.credentialUrl || cert.pdfPath ? (
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <a
                      href={cert.credentialUrl || cert.pdfPath}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                      title="View Verified Certificate"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>View Verified Certificate</span>
                    </a>
                  </div>
                ) : (
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Course Completed</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
