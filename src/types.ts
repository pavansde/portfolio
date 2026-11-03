export interface BenchmarkMetric {
  label: string;
  value: string;
  change?: string;
  baseline?: string;
  description: string;
  highlight?: boolean;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  role: string;
  company: string;
  summary: string;
  tags: string[];
  metrics: BenchmarkMetric[];
  highlights: string[];
  architecture: {
    overview: string;
    flowSteps: { step: string; title: string; description: string; tech: string }[];
    keyDecisions: { title: string; reasoning: string; impact: string }[];
  };
  stack: {
    category: string;
    items: string[];
  }[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    detail: string;
    level: 'Core Expertise' | 'Advanced' | 'Production Deployed';
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  keyProjects: {
    name: string;
    focus: string;
    keyMetric: string;
    points: string[];
    stack: string[];
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  status: string;
  description?: string;
}

export interface SimulationSample {
  id: string;
  title: string;
  patientId: string;
  clinicalNote: string;
  query: string;
  adversarial: boolean;
  expectedOutcome: string;
  groundTruthICD: string[];
  simulatedPredictions: { code: string; name: string; score: number; threshold: number; passed: boolean }[];
  reactSteps: {
    thought: string;
    action: string;
    scopeCheck: 'PASSED' | 'BLOCKED';
    observation: string;
  }[];
  groundedOutput: string;
  hallucinationRisk: 'Very Low (0.4%)' | 'Blocked (Access Violation)' | 'Low (1.2%)';
  latencyMs: number;
}
