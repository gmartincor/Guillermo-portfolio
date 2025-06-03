import React, { useState, useEffect } from 'react';
import { 
  Code, Database, Brain, Terminal, 
  Menu, X, Moon, Sun, Mail, Phone, Linkedin,
  MapPin, ChevronDown, ExternalLink, Award,
  Briefcase, GraduationCap, BookOpen, Users, Target,
  Star, ArrowRight, Globe
} from 'lucide-react';

// Tu foto de perfil - coloca tu imagen en public/images/profile.jpg
const PROFILE_IMAGE = "/images/profile.png"; // o .png según tu archivo

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
      title: 'TimeOverflow - Sistema de Alianzas',
      description: 'Lideré el desarrollo de un sistema de alianzas inter-organizacionales para comunidades de bancos de tiempo.',
      tech: ['Ruby on Rails', 'PostgreSQL', 'JavaScript', 'Leaflet.js', 'Highcharts'],
      highlights: [
        'Arquitectura full-stack con MVC',
        'Visualización geoespacial interactiva',
        'Sistema de transacciones seguro',
        'Integración con comunidad open source'
      ],
      link: 'https://github.com/timeoverflow',
      type: 'open-source'
    },
    {
      title: 'Healthcare ML Integration Platform',
      description: 'Plataforma de integración entre algoritmos de ML y aplicaciones de salud para Kerma Digital.',
      tech: ['Django', 'Svelte', 'Python', 'RESTful APIs', 'Docker'],
      highlights: [
        'APIs robustas para intercambio de datos',
        'Optimización de rendimiento',
        'Testing comprehensivo',
        'Arquitectura escalable'
      ],
      type: 'professional'
    }
  ];

  const timeline = [
    {
      date: 'Mar 2025 - Presente',
      title: 'Full-Stack Developer',
      company: 'TimeOverflow (Open Source)',
      description: 'Desarrollo de funcionalidades críticas para plataforma de bancos de tiempo',
      icon: <Code className="w-5 h-5" />
    },
    {
      date: 'Ene 2025 - Mar 2025',
      title: 'Software Engineer Intern',
      company: 'Kerma Digital Healthcare',
      description: 'Desarrollo de aplicaciones healthcare con integración ML',
      icon: <Brain className="w-5 h-5" />
    },
    {
      date: 'Mar 2021 - Dic 2023',
      title: 'Financial Analysis Manager',
      company: 'Junta de Andalucía',
      description: 'Gestión financiera de proyectos gubernamentales',
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  const navigation = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Educación', href: '#education' },
    { name: 'Contacto', href: '#contact' }
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
              Transformando ideas en soluciones tecnológicas innovadoras con un enfoque en 
              desarrollo full-stack y ciencia de datos
            </p>
            
            <div className="flex gap-4 justify-center">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contactar
              </a>
              <a
                href="#projects"
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                Ver Proyectos
              </a>
            </div>
            
            <div className="mt-16 animate-bounce-slow">
              <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sobre Mí
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Soy un profesional apasionado por la tecnología con una sólida formación en 
                  Business Administration y actualmente completando un Máster en Software Development 
                  mientras curso una Licenciatura en Data Science.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Mi experiencia abarca desde el desarrollo full-stack con tecnologías modernas hasta 
                  la implementación de soluciones de ciencia de datos, siempre con un enfoque en crear 
                  software escalable y de alta calidad.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                    <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Trabajo en Equipo</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Colaboración efectiva en entornos multidisciplinarios
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
                    <Target className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Orientado a Resultados</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Enfoque en entregar soluciones de valor
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl">
                  <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-8">Intereses Principales</h3>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-lg">Big Data & Analytics</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-lg">Inteligencia Artificial & ML</span>
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
                Tecnologías que Domino
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
                Experiencia Profesional
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
                Proyectos Destacados
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
                Formación Académica
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
                      <h3 className="text-xl font-bold mb-1">Máster en Software Development</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">Universidad Oberta de Catalunya</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Feb 2024 - Jun 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Desarrollo de aplicaciones web y móviles con tecnologías modernas
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
                      <h3 className="text-xl font-bold mb-1">Grado en Data Science</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">Universidad Oberta de Catalunya</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Oct 2024 - Presente</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Análisis de datos, machine learning y estadística avanzada
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-green-50 dark:bg-green-900/30 px-8 py-4 rounded-full border border-green-200 dark:border-green-800">
                <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                <span className="font-semibold text-lg">Contribuidor Oficial - TimeOverflow Open Source Project</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ¡Hablemos!
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 leading-relaxed">
              Estoy siempre interesado en nuevos proyectos y oportunidades de colaboración
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <a
                href="mailto:guillermomc007@gmail.com"
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
              >
                <Mail className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all" />
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">guillermomc007@gmail.com</p>
              </a>
              
              <a
                href="tel:+34686549594"
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
              >
                <Phone className="w-12 h-12 mx-auto mb-4 text-purple-600 group-hover:text-purple-700 group-hover:scale-110 transition-all" />
                <h3 className="font-semibold text-lg mb-2">Teléfono</h3>
                <p className="text-gray-600 dark:text-gray-400">+34 686 54 95 94</p>
              </a>
              
              <a
                href="https://linkedin.com/in/Guillermo-Martin-Correa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
              >
                <Linkedin className="w-12 h-12 mx-auto mb-4 text-blue-700 group-hover:text-blue-800 group-hover:scale-110 transition-all" />
                <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-400">Guillermo Martín Correa</p>
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-gray-500 dark:text-gray-400">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">Motril, España</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 py-12 text-center border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            © 2025 Guillermo Martín Correa. Desarrollado con React y mucho ☕
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
