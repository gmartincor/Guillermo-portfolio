export const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

export const skillCategories = [
  {
    id: 'ai-engineering',
    title: 'AI Engineering',
    icon: 'Bot',
    color: 'cyan',
    description: 'Advanced AI agent frameworks and LLM integration techniques',
    subcategories: [
      {
        title: 'AI Agent Frameworks',
        skills: ['LangChain', 'LangGraph']
      },
      {
        title: 'LLM Techniques & Integration',
        skills: ['RAG (Retrieval-Augmented Generation)', 'LLM API Integration', 'Prompt Engineering', 'Vector Databases (Chroma, Pinecone)']
      }
    ]
  },
  {
    id: 'python-backend',
    title: 'Python Backend & Data Science',
    icon: 'Terminal',
    color: 'purple',
    description: 'Full-stack Python development and data science expertise',
    subcategories: [
      {
        title: 'Language & Core Libraries',
        skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn']
      },
      {
        title: 'Backend Frameworks',
        skills: ['Django', 'FastAPI', 'RESTful APIs']
      },
      {
        title: 'Analytics & Visualization',
        skills: ['SQL', 'Matplotlib', 'Seaborn', 'Statistical Analysis']
      },
      {
        title: 'Development Tools',
        skills: ['Jupyter Notebooks']
      }
    ]
  },
  {
    id: 'database-devops',
    title: 'Database & DevOps',
    icon: 'Database',
    color: 'green',
    description: 'Database design, optimization and deployment infrastructure',
    subcategories: [
      {
        title: 'Database',
        skills: ['PostgreSQL (Schema Design, Performance Tuning, pgvector)']
      },
      {
        title: 'Deployment & Containerization',
        skills: ['Docker', 'Gunicorn', 'CI/CD']
      },
      {
        title: 'Version Control',
        skills: ['Git', 'GitHub']
      }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'Code',
    color: 'blue',
    description: 'Modern frontend technologies and responsive design',
    subcategories: [
      {
        title: 'Core Technologies',
        skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS']
      }
    ]
  }
];

export const personalInfo = {
  name: 'Guillermo Martín Correa',
  title: 'Full-Stack Software Developer',
  tagline: 'Building scalable applications with a strong foundation in AI and automation',
  email: 'guillermomc007@gmail.com',
  phone: '+61 482 714 835',
  linkedin: 'https://linkedin.com/in/Guillermo-Martin-Correa',
  github: 'https://github.com/gmartincor',
  profileImage: '/images/profile.png'
};
