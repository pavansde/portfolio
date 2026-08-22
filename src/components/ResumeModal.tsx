import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { X, Download, Printer } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const skillsSection = RESUME_DATA.skills
      .map(s => `- **${s.category}:** ${s.items.join(', ')}`)
      .join('\n');

    const certsSection = RESUME_DATA.certifications && RESUME_DATA.certifications.length > 0
      ? RESUME_DATA.certifications.map(c => `- **${c.name}** — ${c.issuer}: ${c.description}`).join('\n')
      : '';

    const projectsSection = RESUME_DATA.projects
      .filter(p => p.id !== 'project-3')
      .map(p => `### ${p.title}\n*${p.company} | ${p.period}*\n\n${p.bullets.map(b => `- ${b}`).join('\n')}\n\n**Tech Stack:** ${p.stack.join(', ')}`)
      .join('\n\n');

    const experienceSection = RESUME_DATA.experience
      .map(e => `### ${e.role} — ${e.company}\n*${e.period} | ${e.location}*\n\n${e.description}\n\n${e.highlights.map(h => `- ${h}`).join('\n')}`)
      .join('\n\n');

    const educationSection = RESUME_DATA.education
      .map(ed => `- **${ed.degree}** — ${ed.institution}, ${ed.location}`)
      .join('\n');

    const md = `# ${RESUME_DATA.name}
**${RESUME_DATA.title}**
${RESUME_DATA.phone} | ${RESUME_DATA.email} | ${RESUME_DATA.linkedin} | ${RESUME_DATA.github} | ${RESUME_DATA.location}

## PROFESSIONAL SUMMARY
${RESUME_DATA.summary}

## TECHNICAL SKILLS
${skillsSection}
${certsSection ? `\n## CERTIFICATIONS\n${certsSection}` : ''}

## PROJECTS
${projectsSection}

## WORK EXPERIENCE
${experienceSection}

## EDUCATION
${educationSection}
`;

    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Pavan_Kumar_Reddy_Puli_Resume.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 w-full max-w-4xl max-h-[90vh] rounded-xl flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header Controls */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/80 print-hide">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Resume Preview</h3>
            <p className="text-xs text-slate-500 font-mono">{RESUME_DATA.name} · {RESUME_DATA.title}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-300 dark:border-slate-700 transition-colors shadow-xs"
              title="Download Markdown"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 text-xs font-bold transition-colors shadow-xs"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div id="resume-printable-content" className="p-6 sm:p-8 overflow-y-auto bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans text-xs sm:text-sm space-y-4">
          
          {/* Header */}
          <div className="text-center pb-3 border-b border-slate-200 dark:border-slate-800">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-0.5">
              {RESUME_DATA.name}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-cyan-700 dark:text-cyan-400 mb-1.5">{RESUME_DATA.title}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-slate-600 dark:text-slate-400 text-xs font-mono">
              <span>{RESUME_DATA.phone}</span>
              <span>•</span>
              <a href={`mailto:${RESUME_DATA.email}`} className="text-cyan-700 dark:text-cyan-400 hover:underline">{RESUME_DATA.email}</a>
              <span>•</span>
              <a href={RESUME_DATA.linkedin} target="_blank" rel="noreferrer" className="text-cyan-700 dark:text-cyan-400 hover:underline">LinkedIn</a>
              <span>•</span>
              <a href={RESUME_DATA.github} target="_blank" rel="noreferrer" className="text-cyan-700 dark:text-cyan-400 hover:underline">GitHub</a>
              <span>•</span>
              <span>{RESUME_DATA.location}</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1.5 border-b border-slate-200 dark:border-slate-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1.5 border-b border-slate-200 dark:border-slate-800 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-0.5 text-xs sm:text-sm">
              {RESUME_DATA.skills.map((s, idx) => (
                <div key={idx} className="leading-tight">
                  <span className="font-semibold text-slate-900 dark:text-white">{s.category}: </span>
                  <span className="text-slate-700 dark:text-slate-300">{s.items.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {RESUME_DATA.certifications && RESUME_DATA.certifications.length > 0 && (
            <div>
              <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1.5 border-b border-slate-200 dark:border-slate-800 pb-1">
                Certifications
              </h2>
              <div className="space-y-1 text-xs sm:text-sm">
                {RESUME_DATA.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-semibold text-slate-900 dark:text-white">{cert.name}</span>
                    <span className="text-slate-500">—</span>
                    <span className="text-cyan-700 dark:text-cyan-400 font-mono text-xs">{cert.issuer} ({cert.date})</span>
                    <span className="text-slate-600 dark:text-slate-400">{cert.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-2 border-b border-slate-200 dark:border-slate-800 pb-1">
              Key GenAI Projects
            </h2>
            <div className="space-y-3">
              {RESUME_DATA.projects.filter(p => p.id !== 'project-3').map((proj, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">{proj.title}</span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{proj.company} | {proj.period}</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-tight">{b}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] text-slate-500 font-mono">
                    <strong className="text-slate-700 dark:text-slate-300">Tech Stack:</strong> {proj.stack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1.5 border-b border-slate-200 dark:border-slate-800 pb-1">
              Work Experience
            </h2>
            {RESUME_DATA.experience.map((exp, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <span className="font-bold text-slate-900 dark:text-white">{exp.role} — {exp.company}</span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{exp.period} · {exp.location}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-tight">{exp.description}</p>
                {exp.highlights && (
                  <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="leading-tight">{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1.5 border-b border-slate-200 dark:border-slate-800 pb-1">
              Education
            </h2>
            <div className="space-y-1">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline flex-wrap gap-1 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">{edu.degree}</span>
                    <span className="text-slate-500 text-xs font-normal"> ({edu.focus})</span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{edu.institution}, {edu.location}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
