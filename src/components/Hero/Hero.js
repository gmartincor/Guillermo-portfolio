import React from 'react';
import { Code, Terminal, Brain, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { personalInfo } from '../../utils/constants';

const Hero = () => {
  return (
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
              src={personalInfo.profileImage} 
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-500 w-12 h-12 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-gray-800">
            <Code className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-6 py-3 rounded-full border border-blue-200 dark:border-blue-800">
            <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-lg font-semibold">AI Engineer</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/30 px-6 py-3 rounded-full border border-purple-200 dark:border-purple-800">
            <Terminal className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-lg font-semibold">Full-Stack Developer</span>
          </div>
        </div>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          {personalInfo.tagline}
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
  );
};

export default Hero;
