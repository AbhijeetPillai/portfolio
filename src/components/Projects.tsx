import React, { useState } from 'react';
import { ExternalLink, Github, X, Info } from 'lucide-react';

interface ProjectsProps {
  mode: 'developer' | 'gaming';
}

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
}

const Projects: React.FC<ProjectsProps> = ({ mode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const developerProjects: Project[] = [
    {
      id: 1,
      title: "Voice Assistant AI",
      description: "Intelligent voice assistant with natural language processing",
      fullDescription: "A comprehensive voice assistant built with Python and machine learning. Features include voice recognition, natural language processing, smart home integration, and conversational AI capabilities. The system can perform tasks like weather queries, calendar management, and device control.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["Python", "AI/ML", "NLP", "Speech Recognition"]
    },
    {
      id: 2,
      title: "React Portfolio Dashboard",
      description: "Modern portfolio dashboard with analytics and CMS",
      fullDescription: "A comprehensive portfolio management system built with React and Node.js. Features include project management, analytics dashboard, contact form handling, blog CMS, and real-time visitor tracking. The backend is powered by Express.js and MongoDB.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 3,
      title: "Arduino IoT Weather Station",
      description: "Smart weather monitoring system with web dashboard",
      fullDescription: "An IoT weather station using Arduino and various sensors to monitor temperature, humidity, pressure, and air quality. Data is transmitted to a web dashboard built with React, providing real-time monitoring and historical data visualization.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["Arduino", "IoT", "React", "C++"]
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      fullDescription: "A complete e-commerce platform built with React frontend and Node.js backend. Features include user authentication, product catalog, shopping cart, order management, payment processing with Stripe, and admin dashboard for inventory management.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["React", "Node.js", "Stripe", "MySQL"]
    },
    {
      id: 5,
      title: "Machine Learning Classifier",
      description: "Image classification model with web interface",
      fullDescription: "A machine learning project featuring image classification using TensorFlow and Python. The model is trained on custom datasets and deployed with a Flask web interface, allowing users to upload images and get real-time classification results.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["Python", "TensorFlow", "Flask", "Machine Learning"]
    },
    {
      id: 6,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      fullDescription: "A collaborative task management application built with React and Socket.io for real-time updates. Features include team collaboration, task assignment, progress tracking, file attachments, and integration with popular productivity tools.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["React", "Socket.io", "Node.js", "MongoDB"]
    }
  ];

  const gamingProjects: Project[] = [
    {
      id: 1,
      title: "Game Stats Tracker",
      description: "Chrome extension for tracking gaming statistics",
      fullDescription: "A comprehensive Chrome extension that tracks gaming statistics across multiple platforms. Features include performance analytics, achievement tracking, playtime monitoring, and social sharing capabilities. Built with JavaScript and integrates with various gaming APIs.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["JavaScript", "Chrome Extension", "Gaming APIs"]
    },
    {
      id: 2,
      title: "Discord Gaming Bot",
      description: "Multi-purpose Discord bot for gaming communities",
      fullDescription: "A feature-rich Discord bot designed for gaming communities. Includes game server status monitoring, tournament management, leaderboards, custom commands, music player, and integration with popular games like CS:GO and Valorant.",
      image: "https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["Node.js", "Discord.js", "Gaming APIs", "Bot Development"]
    },
    {
      id: 3,
      title: "Valorant Strategy Tool",
      description: "Map strategy and team coordination application",
      fullDescription: "A comprehensive strategy planning tool for Valorant teams. Features include interactive map drawing, strategy sharing, team coordination tools, match analysis, and integration with Riot Games API for player statistics and match history.",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["React", "Canvas API", "Riot Games API", "Strategy Tools"]
    },
    {
      id: 4,
      title: "Minecraft Server Manager",
      description: "Web-based Minecraft server administration tool",
      fullDescription: "A comprehensive web-based administration tool for Minecraft servers. Features include server monitoring, player management, plugin configuration, backup systems, and real-time console access. Built with React frontend and Java backend.",
      image: "https://images.pexels.com/photos/1557937/pexels-photo-1557937.jpeg",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["React", "Java", "Minecraft", "Server Management"]
    },
    {
      id: 5,
      title: "Gaming Tournament Platform",
      description: "Complete tournament management system",
      fullDescription: "A full-featured tournament management platform for esports events. Includes bracket generation, team registration, match scheduling, live score updates, streaming integration, and prize pool management. Supports multiple game formats.",
      image: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["React", "Node.js", "Socket.io", "Tournament Management"]
    },
    {
      id: 6,
      title: "Game Mod Collection",
      description: "Custom modifications for popular games",
      fullDescription: "A collection of custom modifications for various popular games including visual enhancements, gameplay tweaks, and utility features. Each mod is thoroughly tested and includes installation guides and compatibility information.",
      image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["Game Modding", "C++", "Lua", "Custom Tools"]
    }
  ];

  const projects = mode === 'developer' ? developerProjects : gamingProjects;

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            mode === 'developer' 
              ? 'text-gray-900 dark:text-white' 
              : 'text-purple-700 dark:text-purple-400'
          }`}>
            {mode === 'developer' ? 'Featured Projects' : 'Gaming Projects'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 text-xs rounded-full ${
                          mode === 'developer'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                            : 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                        mode === 'developer'
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-purple-600 hover:bg-purple-700 text-white'
                      }`}
                    >
                      <Info className="inline mr-1" size={16} />
                      Read More
                    </button>
                    <a
                      href={project.demoUrl}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedProject.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-sm rounded-full ${
                      mode === 'developer'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        : 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={selectedProject.demoUrl}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium text-center transition-colors ${
                    mode === 'developer'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="inline mr-2" size={16} />
                  View Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-center font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="inline mr-2" size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;