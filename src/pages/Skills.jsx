import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillsData = {
    languages: [
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'JavaScript', level: 75, icon: '⚡' },
      { name: 'SQL', level: 80, icon: '🗄️' }
    ],
    frameworks: [
      { name: 'Django', level: 85, icon: '🎯' },
      { name: 'Flask', level: 80, icon: '🌶️' },
      { name: 'FastAPI', level: 85, icon: '⚡' },
      { name: 'React', level: 70, icon: '⚛️' }
    ],
    mlData: [
      { name: 'Pandas', level: 75, icon: '🐼' },
      { name: 'NumPy', level: 75, icon: '🔢' },
      { name: 'scikit-learn', level: 70, icon: '🤖' },
      { name: 'Matplotlib', level: 70, icon: '📊' }
    ],
    tools: [
      { name: 'Git', level: 85, icon: '🔀' },
      { name: 'GitHub', level: 85, icon: '💻' },
      { name: 'VS Code', level: 90, icon: '📝' },
      { name: 'Vercel', level: 75, icon: '▲' }
    ],
    concepts: [
      { name: 'REST APIs', level: 85, icon: '🔌' },
      { name: 'Data Pipelines', level: 75, icon: '🔄' },
      { name: 'Automation', level: 80, icon: '🤖' },
      { name: 'Chatbots', level: 70, icon: '💬' }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'mlData', name: 'ML & Data' },
    { id: 'tools', name: 'Tools' },
    { id: 'concepts', name: 'Concepts' }
  ];

  const getSkillsToDisplay = () => {
    if (activeCategory === 'all') {
      return Object.values(skillsData).flat();
    }
    return skillsData[activeCategory] || [];
  };

  return (
    <section id="skills" className="section-container bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="A comprehensive look at my technical skills and expertise"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getSkillsToDisplay().map((skill, index) => (
            <Card
              key={`${skill.name}-${index}`}
              className="p-6 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm font-bold text-blue-600 dark:text-purple-400">
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    animation: `slideIn 1s ease-out ${index * 0.1}s both`
                  }}
                ></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['MERN Stack', 'Machine Learning', 'Deep Learning', 'Docker', 'AWS', 'GraphQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow text-gray-800 dark:text-gray-200 font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
