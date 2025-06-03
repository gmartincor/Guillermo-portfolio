import React from 'react';
import { timeline } from '../../data/timeline';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
          
          {timeline.map((item) => (
            <div key={item.id} className="relative flex items-start mb-16 group">
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
  );
};

export default Experience;
