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
    const html = document.documentElement;
    const wasDark = html.classList.contains('dark');

    const beforePrint = () => {
      if (wasDark) html.classList.remove('dark');
    };

    const afterPrint = () => {
      if (wasDark) html.classList.add('dark');
      window.removeEventListener('beforeprint', beforePrint);
      window.removeEventListener('afterprint', afterPrint);
    };

    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('afterprint', afterPrint);
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
      .map(e => `### ${e.role} — ${e.company}\n*${e.period} | ${e.location}*\n\n${e.description}`)
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

${certsSection ? `## CERTIFICATIONS\n${certsSection}\n` : ''}
## WORK EXPERIENCE
${experienceSection}

### Key Projects
${projectsSection}

## EDUCATION
${educationSection}
`;

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${RESUME_DATA.name.toLowerCase().replace(/\s+/g, '_')}_resume.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-150 print:static print:p-0 print:bg-transparent print:backdrop-blur-none">
      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 print:border-none print:border-0 print:shadow-none print:rounded-none w-full max-w-4xl max-h-[90vh] rounded-xl flex flex-col shadow-2xl overflow-hidden print:overflow-visible">

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
              <span>Download (.md)</span>
            </button>

            <button
              id="modal-download-resume-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 text-xs font-bold transition-all shadow-xs hover:shadow-sm active:scale-95"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-1"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div id="resume-printable-content" className="p-6 sm:p-8 print:p-0 print:border-none print:shadow-none overflow-y-auto bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans text-sm space-y-4">

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

          {/* Work Experience — company projects nested within */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1.5 border-b border-slate-200 dark:border-slate-800 pb-1">
              Work Experience
            </h2>
            {RESUME_DATA.experience.map((exp, idx) => {
              const companyProjects = RESUME_DATA.projects.filter(
                p => p.company === exp.company && p.id !== 'project-3'
              );
              return (
                <div key={idx} className="space-y-2">
                  {/* Role header */}
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <span className="font-bold text-slate-900 dark:text-white">{exp.role} — {exp.company}</span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{exp.period} · {exp.location}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-tight">{exp.description}</p>

                  {/* Nested project sub-entries */}
                  {companyProjects.map((proj, pIdx) => (
                    <div key={pIdx} className="space-y-0.5 pl-3 border-l-2 border-slate-300 dark:border-slate-600">
                      <div className="flex justify-between items-baseline flex-wrap gap-1">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs">{proj.title}</span>
                        <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">{proj.period}</span>
                      </div>
                      <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700 dark:text-slate-300 text-xs">
                        {proj.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="leading-tight">{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              );
            })}
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
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {edu.institution}, {edu.location}{edu.period ? ` · ${edu.period}` : ''}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
