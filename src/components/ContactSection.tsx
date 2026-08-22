import React, { useState } from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { Mail, Phone, Linkedin, Github, Check, Copy, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-16 border-b border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-2xl">
          <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold mb-1 tracking-wider uppercase">
            Let's Connect
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Open to GenAI &amp; Software Developer roles — let's connect.
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Available for GenAI Engineer and Software Developer positions. Reach out directly via email, phone, or LinkedIn — I respond quickly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            
            {/* Email Box */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] text-slate-500 font-mono">Email</div>
                  <a href={`mailto:${RESUME_DATA.email}`} className="text-xs sm:text-sm text-slate-900 dark:text-white hover:text-cyan-700 dark:hover:text-cyan-300 font-medium truncate block">
                    {RESUME_DATA.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(RESUME_DATA.email, 'email')}
                className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone Box */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] text-slate-500 font-mono">Phone</div>
                  <a href={`tel:${RESUME_DATA.phone}`} className="text-xs sm:text-sm text-slate-900 dark:text-white hover:text-cyan-700 dark:hover:text-cyan-300 font-medium truncate block">
                    {RESUME_DATA.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(RESUME_DATA.phone, 'phone')}
                className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* LinkedIn Box */}
            <a
              href={RESUME_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between gap-3 hover:border-cyan-500/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">LinkedIn</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Connect on LinkedIn</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* GitHub Box */}
            <a
              href={RESUME_DATA.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between gap-3 hover:border-cyan-500/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">GitHub</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">View Code Repositories</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </a>

          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${RESUME_DATA.email}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-semibold text-xs sm:text-sm transition-colors shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>Send Message</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
