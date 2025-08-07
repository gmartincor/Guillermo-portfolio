import React, { useState } from 'react';
import { Code, Terminal, Database, Bot, ChevronDown, ChevronUp } from 'lucide-react';
import { skillCategories } from '../../utils/constants';

const iconMap = {
  Bot,
  Terminal,
  Database,
  Code
};

const colorMap = {
  cyan: 'text-cyan-600',
  purple: 'text-purple-600',
  green: 'text-green-600',
  blue: 'text-blue-600'
};

const SkillCategory = ({ category, isExpanded, onToggle }) => {
  const IconComponent = iconMap[category.icon];
  const iconColor = colorMap[category.color];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Header */}
      <div 
        className="p-6 cursor-pointer flex items-center justify-between"
        onClick={onToggle}
      >
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:scale-110 transition-transform`}>
            <IconComponent className={`w-8 h-8 ${iconColor}`} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {category.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              {category.description}
            </p>
          </div>
        </div>
        <div className="flex-shrink-0">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-800">
          <div className="pt-4 space-y-4">
            {category.subcategories.map((subcategory, subIndex) => (
              <div key={subIndex} className="space-y-3">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  {subcategory.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {subcategory.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState(new Set());

  const toggleCategory = (categoryId) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const expandAll = () => {
    setExpandedCategories(new Set(skillCategories.map(cat => cat.id)));
  };

  const collapseAll = () => {
    setExpandedCategories(new Set());
  };

  return (
    <section id="skills" className="py-24 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my technical expertise across AI engineering, backend development, 
            data science, and modern frontend technologies.
          </p>
          
          {/* Toggle Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={expandAll}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.id}
              category={category}
              isExpanded={expandedCategories.has(category.id)}
              onToggle={() => toggleCategory(category.id)}
            />
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Continuously Learning & Evolving
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My technical skill set continues to evolve with the latest advancements in AI, machine learning, 
              and modern web development. I'm passionate about staying current with emerging technologies 
              and best practices in the rapidly changing tech landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
