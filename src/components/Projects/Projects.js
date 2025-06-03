import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300 group">
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
  );
};

export default Projects;
