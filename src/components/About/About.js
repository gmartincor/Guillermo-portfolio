import React from 'react';
import { Users, Target } from 'lucide-react';

const About = () => {
  return (
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
              Business Administration and a completed Master's degree in Software Development, 
              currently pursuing a Bachelor's degree in Data Science.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My experience includes full-stack development, machine learning, and artificial intelligence solutions, 
              with specialized expertise in AI agent development, automation, and system architecture. 
              My background in financial analysis and project management at the Junta de Andalucía provides me with a unique perspective on building technology that solves tangible business problems and delivers measurable value.
              Proficient in software engineering, data analysis, and cloud technologies, 
              I am committed to delivering scalable, high-quality solutions that drive digital transformation and business innovation.
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
                    <span className="text-lg">AI Agents & Intelligent Systems</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-lg">Cloud Computing & Architecture</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-lg">Open Source Contributions</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-lg">API Design & Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
