import React from 'react';
import { Moon, Sun, Code, Gamepad2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  mode: 'developer' | 'gaming';
  onModeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ mode, onModeToggle }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Abhijeet Pillai
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Mode Toggle */}
          <button
            onClick={onModeToggle}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
              mode === 'developer'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                : 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
            }`}
          >
            {mode === 'developer' ? (
              <>
                <Gamepad2 size={20} />
                <span className="hidden sm:inline">Gaming Mode</span>
              </>
            ) : (
              <>
                <Code size={20} />
                <span className="hidden sm:inline">Developer Mode</span>
              </>
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
            aria-label="Toggle theme"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;