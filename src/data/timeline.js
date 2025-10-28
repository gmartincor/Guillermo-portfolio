import { Code, Brain, Briefcase } from 'lucide-react';

export const timeline = [
  {
    id: 1,
    date: 'Mar 2025 - Present',
    title: 'Full-Stack Software Engineer',
    company: 'TimeOverflow (Open Source)',
    description: 'Led the design and development of a new inter-organizational alliance system, enabling different time banks to connect and share resources. Engineered the full-stack architecture using Ruby on Rails and PostgreSQL, driving community collaboration across distributed networks.',
    icon: <Code className="w-5 h-5" />
  },
  {
    id: 2,
    date: 'Jan 2025 - Mar 2025',
    title: 'Software Engineer Intern',
    company: 'Kerma Digital Healthcare',
    description: 'Developed and optimized RESTful APIs to integrate machine learning models into the core healthcare application. Improved data processing efficiency and system scalability for medical software solutions, enhancing patient care delivery through intelligent automation.',
    icon: <Brain className="w-5 h-5" />
  },
  {
    id: 3,
    date: 'Mar 2021 - Dec 2023',
    title: 'Financial Analysis Manager',
    company: 'Junta de Andalucía',
    description: 'Project management and financial analysis of governmental initiatives, budget planning, data analysis, and stakeholder coordination for public sector projects',
    icon: <Briefcase className="w-5 h-5" />
  }
];
