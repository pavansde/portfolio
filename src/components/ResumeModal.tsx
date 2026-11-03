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
    if (wasDark) html.classList.remove('dark');

    const main = document.getElementById('main-content');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (main) main.style.display = 'none';
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';

    const restore = () => {
      if (wasDark) html.classList.add('dark');
      if (main) main.style.display = '';
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
      window.removeEventListener('afterprint', restore);
    };

    window.addEventListener('afterprint', restore);
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const skillsSection = RESUME_DATA.skills
      .map(s => `- **${s.category}:** ${s.items.join(', ')}`)
      .join('\n');

    const dalvkotExp = RESUME_DATA.experience.find(e => e.company.includes('Dalvkot'));
    const gitsExp = RESUME_DATA.experience.find(e => e.company.includes('GITS'));

    const dalvkotProjects = RESUME_DATA.projects
      .filter(p => p.company.includes('Dalvkot'))
      .map(p => `### ${p.title}\t${p.period}\n${p.bullets.map(b => `• ${b}`).join('\n')}`)
      .join('\n\n');

    const gitsBullets = ('bullets' in (gitsExp || {}) && Array.isArray((gitsExp as any).bullets))
      ? (gitsExp as any).bullets.map((b: string) => `• ${b}`).join('\n')
      : '';

    const experienceSection = `${dalvkotExp ? `### ${dalvkotExp.role}, ${dalvkotExp.company}\t${dalvkotExp.period}\n${dalvkotExp.location}  |  ${dalvkotExp.description}\n\n${dalvkotProjects}` : ''}\n\n${gitsExp ? `### ${gitsExp.role}, ${gitsExp.company}\t${gitsExp.period}\n${gitsExp.location}  |  ${gitsExp.description}\n${gitsBullets}` : ''}`;

    const educationSection = [
      ...RESUME_DATA.education.map(ed => `${ed.degree}\t${ed.institution}, ${ed.location}`),
      ...RESUME_DATA.certifications.map(c => `${c.name} - ${c.issuer}`)
    ].join('\n');

    const md = `# ${RESUME_DATA.name}
**${RESUME_DATA.title}**
${RESUME_DATA.phone} | ${RESUME_DATA.email} | [LinkedIn](${RESUME_DATA.linkedin}) | [GitHub](${RESUME_DATA.github}) | [Portfolio](${RESUME_DATA.portfolio})

## SUMMARY
${RESUME_DATA.summary}

## TECHNICAL SKILLS
${skillsSection}

## WORK EXPERIENCE
${experienceSection}

## EDUCATION & CERTIFICATION
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-150 print:static print:inset-auto print:p-0 print:m-0 print:bg-transparent print:backdrop-blur-none print:w-full print:h-auto print:block">
      <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 print:bg-transparent print:border-none print:border-0 print:shadow-none print:rounded-none print:p-0 print:m-0 print:w-full print:h-auto print:max-h-none print:block w-full max-w-4xl max-h-[90vh] rounded-xl flex flex-col shadow-2xl overflow-hidden print:overflow-visible">

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
              <a href={RESUME_DATA.portfolio} target="_blank" rel="noreferrer" className="text-cyan-700 dark:text-cyan-400 hover:underline">Portfolio</a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1 border-b border-slate-200 dark:border-slate-800 pb-1">
              Summary
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1 border-b border-slate-200 dark:border-slate-800 pb-1">
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

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1 border-b border-slate-200 dark:border-slate-800 pb-1">
              Work Experience
            </h2>
            <div className="space-y-2">
              {RESUME_DATA.experience.map((exp, idx) => {
                const companyProjects = RESUME_DATA.projects.filter(
                  p => p.company === exp.company && p.id !== 'project-3'
                );
                return (
                  <div key={idx} className="space-y-1">
                    {/* Role header */}
                    <div className="flex justify-between items-baseline flex-wrap gap-1">
                      <span className="font-bold text-slate-900 dark:text-white">{exp.role} — {exp.company}</span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{exp.period} · {exp.location}</span>
                    </div>
                    {/* Role context line */}
                    {exp.description && (
                      <p className="text-slate-600 dark:text-slate-400 text-xs italic leading-tight">{exp.description}</p>
                    )}

                    {/* Direct role bullets matching project border and typography */}
                    {'bullets' in exp && Array.isArray((exp as any).bullets) && (
                      <div className="space-y-0.5 pl-3 border-l-2 border-slate-300 dark:border-slate-600">
                        <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700 dark:text-slate-300 text-xs">
                          {(exp as any).bullets.map((b: string, bIdx: number) => (
                            <li key={bIdx} className="leading-tight">{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}

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
          </div>

          {/* Education & Certification */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1 border-b border-slate-200 dark:border-slate-800 pb-1">
              Education &amp; Certification
            </h2>
            <div className="space-y-1 text-xs sm:text-sm">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline flex-wrap gap-1">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">{edu.degree}</span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {edu.institution}, {edu.location}{edu.period ? ` · ${edu.period}` : ''}
                  </span>
                </div>
              ))}
              {RESUME_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="flex justify-between items-baseline flex-wrap gap-1">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">{cert.name}</span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {cert.issuer}
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
