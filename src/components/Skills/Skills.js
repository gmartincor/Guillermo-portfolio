import React from 'react';
import { Code, Terminal, Database, Brain, Bot, Package } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="text-center group">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
              <Bot className="w-12 h-12 mx-auto mb-4 text-cyan-600 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-lg mb-2">AI Engineering</h4>
              <p className="text-gray-600 dark:text-gray-400">
                LangChain, LangGraph, RAG, LLM Integration, Prompt Engineering
              </p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
              <Terminal className="w-12 h-12 mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-lg mb-2">Python Backend</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Python, Django, FastAPI, Pandas, NumPy, Scikit-learn
              </p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
              <Brain className="w-12 h-12 mx-auto mb-4 text-orange-600 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-lg mb-2">Analytics & Visualization</h4>
              <p className="text-gray-600 dark:text-gray-400">
                SQL, Matplotlib, Seaborn, Statistical Analysis, Jupyter
              </p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
              <Database className="w-12 h-12 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-lg mb-2">Database & DevOps</h4>
              <p className="text-gray-600 dark:text-gray-400">
                PostgreSQL, pgvector, Docker, Performance Tuning
              </p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
              <Code className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-lg mb-2">Frontend Development</h4>
              <p className="text-gray-600 dark:text-gray-400">
                React, TypeScript, JavaScript (ES6+), Tailwind CSS
              </p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
              <Package className="w-12 h-12 mx-auto mb-4 text-indigo-600 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-lg mb-2">Development Tools</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Git, GitHub, Gunicorn, Version Control
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
