import React from 'react';
import { Code, Cpu, Brain, Gamepad2 } from 'lucide-react';

interface AboutProps {
  mode: 'developer' | 'gaming';
}

const About: React.FC<AboutProps> = ({ mode }) => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            mode === 'developer' 
              ? 'text-gray-900 dark:text-white' 
              : 'text-purple-700 dark:text-purple-400'
          }`}>
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {mode === 'developer' ? (
                <>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm a passionate software developer with expertise in multiple programming languages 
                    including <strong>C, C++, Python, HTML, CSS, JavaScript, and Java</strong>. My journey 
                    in technology extends beyond traditional software development.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I have hands-on experience with <strong>Arduino and microcontroller programming</strong>, 
                    bridging the gap between software and hardware. Currently, I'm diving deep into the 
                    exciting world of <strong>Generative AI</strong>, exploring how artificial intelligence 
                    can transform the way we build and interact with technology.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Whether it's building web applications, working on embedded systems, or experimenting 
                    with AI models, I approach each project with curiosity and dedication to create 
                    meaningful solutions.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Gaming isn't just a hobby for me—it's a passion that drives creativity and strategic thinking. 
                    From intense competitive matches to immersive single-player adventures, I explore diverse 
                    gaming experiences across multiple platforms.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I combine my development skills with gaming interests by creating <strong>Chrome extensions, 
                    gaming utilities, and mods</strong> that enhance the gaming experience. My analytical approach 
                    to games helps me understand game mechanics and optimize strategies.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Whether I'm leading a team in a strategy game or perfecting my aim in competitive shooters, 
                    I bring the same dedication and problem-solving mindset that makes me a great developer.
                  </p>
                </>
              )}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {mode === 'developer' ? (
                <>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                    <Code className="mx-auto mb-4 text-blue-600 dark:text-blue-400" size={40} />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Web Development</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Full-stack solutions</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                    <Cpu className="mx-auto mb-4 text-green-600 dark:text-green-400" size={40} />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Hardware</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Arduino & IoT</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                    <Brain className="mx-auto mb-4 text-purple-600 dark:text-purple-400" size={40} />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI & ML</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Generative AI</p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                    <Gamepad2 className="mx-auto mb-4 text-orange-600 dark:text-orange-400" size={40} />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Gaming</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Passion project</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                    <Gamepad2 className="mx-auto mb-4 text-purple-600 dark:text-purple-400" size={40} />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Strategy Games</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tactical mastermind</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                    <Code className="mx-auto mb-4 text-red-600 dark:text-red-400" size={40} />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">FPS Games</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Precision shooter</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                    <Brain className="mx-auto mb-4 text-green-600 dark:text-green-400" size={40} />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Game Mods</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Custom utilities</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                    <Cpu className="mx-auto mb-4 text-blue-600 dark:text-blue-400" size={40} />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Streaming</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Content creation</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;