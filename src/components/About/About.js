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
              I'm a Full-Stack Software Engineer passionate about building applications that create real impact. My career began in business administration and financial analysis, where I learned how to identify challenges and measure results. Today, I combine that business perspective with a Master's in Software Development and ongoing studies in Data Science to build technology that delivers measurable value.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I have experience developing end-to-end applications with Python, Django, FastAPI, React, and PostgreSQL, and I complement this with knowledge in AI and automation using tools like LangChain and LangGraph. My goal is to design scalable, reliable, and user-focused software that not only works but also drives business innovation.
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
                <h3 className="text-2xl font-bold mb-8">Areas of Focus & Professional Interest</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-lg">API Design & Scalable Architectures</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-lg">AI Integrations & Intelligent Automation</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-lg">Big Data & Data Engineering</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-lg">Open Source Contributions</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-lg">Cloud-Native & DevOps Practices</span>
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
