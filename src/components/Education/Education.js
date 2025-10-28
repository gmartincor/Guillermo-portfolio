import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">Master's in Software Development</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold">Open University of Catalonia</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Feb 2024 - Jun 2025</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Foundational training in software architecture, end-to-end application development, and modern engineering practices. Emphasis on creating scalable, high-quality solutions from design to deployment.
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
                  <h3 className="text-xl font-bold mb-1">Bachelor's in Computer Science</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold">International University of La Rioja (UNIR)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Oct 2024 - Present</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Comprehensive training in computer science fundamentals, software engineering, algorithms, and data structures. Focusing on building a strong theoretical and practical foundation in computing to complement real-world development experience.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-1 rounded-2xl">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-emerald-50 dark:bg-emerald-900/30 p-3 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">Bachelor's in Business Administration</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold">University of Granada</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">2011 - 2016</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Comprehensive education in business strategy, financial analysis, organizational management, and entrepreneurship. Foundation in market analysis, project management, and strategic decision-making for sustainable business growth.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-1 rounded-2xl">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg">
                  <BookOpen className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">Bachelor's in Law</h3>
                  <p className="text-amber-600 dark:text-amber-400 font-semibold">University of Granada</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">2011 - 2016</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Legal expertise encompassing financial, commercial, and administrative law. Strong analytical thinking, regulatory compliance understanding, and contract negotiation skills essential for technology business environments.
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
  );
};

export default Education;
