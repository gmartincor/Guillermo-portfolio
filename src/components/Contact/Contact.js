import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../../utils/constants';

const Contact = () => {
  return (
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
            href={`mailto:${personalInfo.email}`}
            className="bg-white dark:bg-gray-900 px-4 md:px-8 py-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <Mail className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm break-words">{personalInfo.email}</p>
          </a>
          
          <a
            href={`tel:${personalInfo.phone}`}
            className="bg-white dark:bg-gray-900 px-4 md:px-8 py-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <Phone className="w-12 h-12 mx-auto mb-4 text-purple-600 group-hover:text-purple-700 group-hover:scale-110 transition-all" />
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">{personalInfo.phone}</p>
          </a>
          
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 px-4 md:px-8 py-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <Linkedin className="w-12 h-12 mx-auto mb-4 text-blue-700 group-hover:text-blue-800 group-hover:scale-110 transition-all" />
            <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-400">Guillermo Martín Correa</p>
          </a>

          <a
            href={personalInfo.github}
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
  );
};

export default Contact;
