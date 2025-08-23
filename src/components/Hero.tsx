import React from 'react';
import { Play, MessageCircle, ExternalLink } from 'lucide-react';

interface HeroProps {
  mode: 'developer' | 'gaming';
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ mode, onContactClick }) => {
  return (
    <section className={`min-h-screen flex items-center justify-center pt-20 transition-all duration-700 ${
      mode === 'gaming' 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900'
    }`}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {mode === 'developer' ? (
            <>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                <span className="text-gray-900 dark:text-white">Hello, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Abhijeet Pillai
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
                Software Engineer & Developer
              </p>
              <div className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay">
                <p>
                  Passionate about software and web development with a deep love for creating innovative solutions. 
                  Currently working on an exciting voice assistant project and exploring the fascinating world of 
                  Generative AI to push the boundaries of what's possible.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="mb-8 animate-glow">
                <div className="text-purple-400 text-lg uppercase tracking-wider mb-4">
                  Gamer Mode Activated
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white neon-text">
                  Abhijeet
                </h1>
                <p className="text-2xl md:text-3xl text-purple-300 mb-8">
                  Gaming Enthusiast
                </p>
              </div>
              <div className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                <p>
                  When I'm not coding, you'll find me exploring virtual worlds, mastering competitive games, 
                  and building gaming utilities. From strategy games to FPS adventures, I bring the same 
                  passion and precision to gaming as I do to development.
                </p>
              </div>
            </>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-2">
            <button
              onClick={onContactClick}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                mode === 'developer'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}
            >
              <MessageCircle className="inline mr-2" size={20} />
              Say Hello
            </button>
            
            <button className={`px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105 flex items-center ${
              mode === 'developer'
                ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:text-blue-400 dark:border-blue-400'
                : 'border-purple-400 text-purple-400 hover:bg-purple-600 hover:text-white'
            }`}>
              <Play className="mr-2 animate-pulse" size={20} />
              {mode === 'developer' ? '🎥 Watch My Videos' : 'Watch Gameplay'}
            </button>
            
            {mode === 'gaming' && (
              <button className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-green-400 text-green-400 hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                <ExternalLink className="mr-2" size={20} />
                Join Discord
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;