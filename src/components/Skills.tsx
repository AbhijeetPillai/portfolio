import React from 'react';

interface SkillsProps {
  mode: 'developer' | 'gaming';
}

const Skills: React.FC<SkillsProps> = ({ mode }) => {
  const developerSkills = [
    { category: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Figma'], color: 'blue' },
    { category: 'Backend', skills: ['Node.js', 'MongoDB', 'MySQL', 'Express'], color: 'green' },
    { category: 'Languages', skills: ['C', 'C++', 'Python', 'Java'], color: 'purple' },
    { category: 'Tools & Others', skills: ['GitHub', 'Arduino', 'Microcontrollers', 'Git'], color: 'orange' }
  ];

  const gamingSkills = [
    { category: 'Strategy Games', skills: ['Chess', 'Civilization VI', 'Age of Empires', 'StarCraft'], color: 'purple' },
    { category: 'FPS Games', skills: ['Counter-Strike', 'Valorant', 'Call of Duty', 'Apex Legends'], color: 'red' },
    { category: 'Gaming Tools', skills: ['OBS Studio', 'Discord Bots', 'Game Mods', 'Streaming'], color: 'green' },
    { category: 'Platforms', skills: ['PC Gaming', 'Console Gaming', 'Mobile Gaming', 'VR'], color: 'blue' }
  ];

  const skills = mode === 'developer' ? developerSkills : gamingSkills;

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
      orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
      red: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            mode === 'developer' 
              ? 'text-gray-900 dark:text-white' 
              : 'text-purple-700 dark:text-purple-400'
          }`}>
            {mode === 'developer' ? 'Technical Skills' : 'Gaming Expertise'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className={`p-6 rounded-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${getColorClasses(skillGroup.color)}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="bg-white dark:bg-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 transition-all duration-300 hover:shadow-md"
                      style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {mode === 'developer' && (
            <div className="mt-16 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold">
                <span>🚀 Currently Learning: Generative AI & Machine Learning</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;