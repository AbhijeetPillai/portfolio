import React from 'react';
import { Download, Calendar, MapPin, GraduationCap, Briefcase, Award } from 'lucide-react';

interface ResumeProps {
  mode: 'developer' | 'gaming';
}

const Resume: React.FC<ResumeProps> = ({ mode }) => {
  if (mode === 'gaming') return null;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Resume & Experience
            </h2>
            
            {/* ✅ Resume Download Button */}
            <a
              href="/resume.pdf"   // <-- apna file "public/resume.pdf" me daalna
              download="My_Resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors transform hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </div>

          <div className="space-y-12">
            {/* Education Section */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
                
                <div className="relative pl-16 pb-8">
                  <div className="absolute left-4 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Bachelor of Science in Information Technology
                    </h4>
                    <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="mr-1" size={16} />
                        <span>2023-2027</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1" size={16} />
                        <span>Chandigarh University</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      <Award className="mr-2 text-yellow-500" size={16} />
                      <span className="text-gray-700 dark:text-gray-300">GPA: 7.4/10.0</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Focused on software development, database management, and web technologies. 
                      Completed major projects in full-stack development and machine learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
                  <Briefcase className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
              </div>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-200 dark:bg-green-800"></div>
                
                <div className="relative pl-16 pb-8">
                  <div className="absolute left-4 top-2 w-4 h-4 bg-green-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Full-Stack Developer
                    </h4>
                    <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="mr-1" size={16} />
                        <span>2023 - Present (8+ months)</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1" size={16} />
                        <span>Tech Company / Freelance</span>
                      </div>
                    </div>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• Developed and maintained web applications using React, Node.js, and MongoDB</li>
                      <li>• Implemented RESTful APIs and integrated third-party services</li>
                      <li>• Collaborated with teams using Git and Agile methodologies</li>
                      <li>• Optimized application performance and implemented responsive designs</li>
                      <li>• Built IoT solutions with Arduino and microcontroller programming</li>
                    </ul>
                  </div>
                </div>

                <div className="relative pl-16 pb-8">
                  <div className="absolute left-4 top-2 w-4 h-4 bg-green-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Junior Software Developer (Intern)
                    </h4>
                    <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="mr-1" size={16} />
                        <span>2022 - 2023 (6 months)</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1" size={16} />
                        <span>Startup Company</span>
                      </div>
                    </div>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• Assisted in developing web applications and mobile interfaces</li>
                      <li>• Learned industry best practices for code quality and testing</li>
                      <li>• Contributed to bug fixes and feature implementations</li>
                      <li>• Participated in code reviews and team meetings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
                  <Award className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Achievements</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technical Certifications
                  </h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• JavaScript ES6+ Certification</li>
                    <li>• React Developer Certification</li>
                    <li>• Node.js Backend Development</li>
                    <li>• Arduino Programming Certificate</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Project Highlights
                  </h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Voice Assistant AI Project</li>
                    <li>• IoT Weather Station System</li>
                    <li>• Full-Stack E-commerce Platform</li>
                    <li>• Machine Learning Image Classifier</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
