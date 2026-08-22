import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Certifications } from './components/Certifications';
import { ExperienceEducation } from './components/ExperienceEducation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 selection:bg-cyan-500/20 dark:selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 antialiased font-sans transition-colors duration-200">
        {/* Top Sticky Navbar */}
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main id="main-content">
          <Hero onOpenResume={() => setResumeModalOpen(true)} />
          <ProjectsSection />
          <SkillsMatrix />
          <Certifications />
          <ExperienceEducation />
          <ContactSection />
        </main>

        {/* Clean Footer */}
        <Footer />

        {/* Resume Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
