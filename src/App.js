import React, { useState, useEffect } from 'react';
import { 
  Code, Database, Brain, Terminal, 
  Menu, X, Moon, Sun, Mail, Phone, Linkedin,
  MapPin, ChevronDown, ExternalLink, Award,
  Briefcase, GraduationCap, BookOpen, Users, Target,
  Star, ArrowRight, Globe, Github
} from 'lucide-react';

const PROFILE_IMAGE = "/images/profile.png"; 

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    // Frontend Technologies
    { name: 'React', icon: <Globe className="w-6 h-6" />, category: 'frontend' },
    { name: 'JavaScript', icon: <Globe className="w-6 h-6" />, category: 'frontend' },
    { name: 'TypeScript', icon: <Code className="w-6 h-6" />, category: 'frontend' },
    { name: 'Svelte', icon: <Globe className="w-6 h-6" />, category: 'frontend' },
    
    // Backend Technologies
    { name: 'Python', icon: <Code className="w-6 h-6" />, category: 'backend' },
    { name: 'Ruby', icon: <Terminal className="w-6 h-6" />, category: 'backend' },
    { name: 'Django', icon: <Terminal className="w-6 h-6" />, category: 'backend' },
    { name: 'Ruby on Rails', icon: <Terminal className="w-6 h-6" />, category: 'backend' },
    
    // Database Technologies
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6" />, category: 'database' },
    { name: 'SQL', icon: <Database className="w-6 h-6" />, category: 'database' },
    
    // Data Science
    { name: 'Pandas', icon: <Brain className="w-6 h-6" />, category: 'datascience' },
    { name: 'NumPy', icon: <Brain className="w-6 h-6" />, category: 'datascience' },
    { name: 'Jupyter', icon: <Brain className="w-6 h-6" />, category: 'datascience' },
  ];

  const projects = [
    {
      title: 'TimeOverflow - Alliance System',
      description: 'Led the development of an inter-organizational alliance system for time bank communities.',
      tech: ['Ruby on Rails', 'PostgreSQL', 'JavaScript', 'Leaflet.js', 'Highcharts'],
      highlights: [
        'Full-stack architecture with MVC',
        'Interactive geospatial visualization',
        'Secure transaction system',
        'Open source community integration'
      ],
      link: 'https://github.com/timeoverflow',
      type: 'open-source'
    },
    {
      title: 'Healthcare ML Integration Platform',
      description: 'ML algorithm integration platform for healthcare applications at Kerma Digital.',
      tech: ['Django', 'Svelte', 'Python', 'RESTful APIs', 'Docker'],
      highlights: [
        'Robust APIs for data exchange',
        'Performance optimization',
        'Comprehensive testing',
        'Scalable architecture'
      ],
      type: 'professional'
    }
  ];

  const timeline = [
    {
      date: 'Mar 2025 - Present',
      title: 'Full-Stack Developer',
      company: 'TimeOverflow (Open Source)',
      description: 'Development of critical features for time bank platform',
      icon: <Code className="w-5 h-5" />
    },
    {
      date: 'Jan 2025 - Mar 2025',
      title: 'Software Engineer Intern',
      company: 'Kerma Digital Healthcare',
      description: 'Healthcare application development with ML integration',
      icon: <Brain className="w-5 h-5" />
    },
    {
      date: 'Mar 2021 - Dec 2023',
      title: 'Financial Analysis Manager',
      company: 'Junta de Andalucía',
      description: 'Financial management of governmental projects',
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  GMC
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        activeSection === item.href.slice(1)
                          ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mr-2"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      activeSection === item.href.slice(1)
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob dark:opacity-10"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 dark:opacity-10"></div>
            <div className="absolute -bottom-20 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 dark:opacity-10"></div>
          </div>
          
          <div className="relative z-10 text-center px-4">
            <div className="mb-8 relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-2xl">
                <img 
                  src={PROFILE_IMAGE} 
                  alt="Guillermo Martín Correa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-12 h-12 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-gray-800">
                <Code className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Guillermo Martín Correa
              </span>
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-6 py-3 rounded-full border border-blue-200 dark:border-blue-800">
                <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-lg font-semibold">Software Developer</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/30 px-6 py-3 rounded-full border border-purple-200 dark:border-purple-800">
                <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="text-lg font-semibold">Data Scientist</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Transforming ideas into innovative technological solutions with a focus on 
              full-stack development and data science
            </p>
            
            <div className="flex gap-4 justify-center">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact
              </a>
              <a
                href="#projects"
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                View Projects
              </a>
            </div>
            
            <div className="mt-16 animate-bounce-slow">
              <a 
                href="#about" 
                className="inline-block hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                aria-label="Go to About section"
              >
                <ChevronDown className="w-8 h-8 mx-auto text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I am a technology-passionate professional with a solid background in 
                  Business Administration, currently completing a Master's in Software Development 
                  while pursuing a Bachelor's degree in Data Science.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  My experience spans from full-stack development with modern technologies to 
                  implementing data science solutions, always with a focus on creating 
                  scalable and high-quality software.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                    <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Teamwork</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Effective collaboration in multidisciplinary environments
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
                    <Target className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Results Oriented</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Focus on delivering valuable solutions
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl">
                  <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-8">Main Interests</h3>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-lg">Big Data & Analytics</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-lg">Artificial Intelligence & ML</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                        <span className="text-lg">Cloud Computing</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-lg">API Design & Architecture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technologies I Master
              </span>
            </h2>
            
            {/* Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
                  <Code className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-lg mb-2">Frontend</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    React, TypeScript, Svelte
                  </p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
                  <Terminal className="w-12 h-12 mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-lg mb-2">Backend</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Python, Ruby, Django, Rails
                  </p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
                  <Database className="w-12 h-12 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-lg mb-2">Databases</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    PostgreSQL, SQL
                  </p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
                  <Brain className="w-12 h-12 mx-auto mb-4 text-orange-600 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-lg mb-2">Data Science</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Pandas, NumPy, Jupyter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-16 group">
                  <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 ring-4 ring-white dark:ring-gray-900 group-hover:scale-125 transition-transform"></div>
                  
                  <div className="ml-20 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 w-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg">{item.company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.date}</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg ml-4">
                        <div className="text-blue-600 dark:text-blue-400">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className={`h-1 ${project.type === 'open-source' ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-gradient-to-r from-purple-400 to-pink-500'}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        Highlights
                      </h4>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm border border-gray-200 dark:border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                      <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">Master's in Software Development</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">Universitat Oberta de Catalunya</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Feb 2024 - Jun 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Web and mobile application development with modern technologies
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-1 rounded-2xl">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg">
                      <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">Bachelor's in Data Science</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">Universitat Oberta de Catalunya</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Oct 2024 - Present</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Data analysis, machine learning and advanced statistics
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-green-50 dark:bg-green-900/30 px-8 py-4 rounded-full border border-green-200 dark:border-green-800">
                <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                <span className="font-semibold text-lg">Official Contributor - TimeOverflow Open Source Project</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Talk!
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 leading-relaxed">
              I'm always interested in new projects and collaboration opportunities
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <a
                href="mailto:guillermomc007@gmail.com"
                className="bg-white dark:bg-gray-900 px-4 md:px-8 py-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
              >
                <Mail className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all" />
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm break-words">guillermomc007@gmail.com</p>
              </a>
              
              <a
                href="tel:+34686549594"
                className="bg-white dark:bg-gray-900 px-4 md:px-8 py-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
              >
                <Phone className="w-12 h-12 mx-auto mb-4 text-purple-600 group-hover:text-purple-700 group-hover:scale-110 transition-all" />
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+34 686 54 95 94</p>
              </a>
              
              <a
                href="https://linkedin.com/in/Guillermo-Martin-Correa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-900 px-4 md:px-8 py-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
              >
                <Linkedin className="w-12 h-12 mx-auto mb-4 text-blue-700 group-hover:text-blue-800 group-hover:scale-110 transition-all" />
                <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-400">Guillermo Martín Correa</p>
              </a>

              <a
                href="https://github.com/gmartincor"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-900 px-4 md:px-8 py-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
              >
                <Github className="w-12 h-12 mx-auto mb-4 text-green-600 group-hover:text-green-700 group-hover:scale-110 transition-all" />
                <h3 className="font-semibold text-lg mb-2">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-400">@gmartincor</p>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 py-12 text-center border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            © 2025 Guillermo Martín Correa. Built with React and lots of ☕
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
