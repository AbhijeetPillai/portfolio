import React, { useState, useRef } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Games from './components/Games';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [mode, setMode] = useState<'developer' | 'gaming'>('developer');
  const contactRef = useRef<HTMLDivElement>(null);

  const toggleMode = () => {
    setMode(prev => prev === 'developer' ? 'gaming' : 'developer');
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className={`min-h-screen transition-all duration-700 ${
        mode === 'gaming' ? 'bg-gray-900' : 'bg-white dark:bg-gray-900'
      }`}>
        <Header mode={mode} onModeToggle={toggleMode} />
        
        <main>
          <Hero mode={mode} onContactClick={scrollToContact} />
          <About mode={mode} />
          <Skills mode={mode} />
          <Projects mode={mode} />
          <Games mode={mode} />
          <Resume mode={mode} />
          <div ref={contactRef}>
            <Contact mode={mode} />
          </div>
        </main>

        <footer className={`py-8 text-center transition-colors duration-300 ${
          mode === 'gaming' 
            ? 'bg-black text-purple-300' 
            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
        }`}>
          <p>© 2025 Abhijeet Pillai. Built with passion and lots of ☕</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;