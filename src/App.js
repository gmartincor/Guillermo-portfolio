import React from 'react';

// Components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Hooks
import { useDarkMode } from './hooks/useDarkMode';
import { useScrollDetection } from './hooks/useScrollDetection';

const Portfolio = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { scrolled, activeSection } = useScrollDetection();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          scrolled={scrolled}
          activeSection={activeSection}
        />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
