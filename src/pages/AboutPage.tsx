import { motion } from 'framer-motion';
import { FileDown, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';

const AboutPage = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code', 'Webpack'] },
    { category: 'Other', items: ['Agile/Scrum', 'CI/CD', 'Testing (Jest)', 'AWS', 'Firebase'] }
  ];
  
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-24">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
                    <img 
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                    Your Name
                  </h1>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                    Frontend Developer & Designer
                  </p>
                  
                  <div className="flex justify-center space-x-4 mb-6">
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://twitter.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                  
                  <div className="space-y-3">
                    <a 
                      href="/resume.pdf" 
                      className="flex items-center justify-center w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                      download
                    >
                      <FileDown size={18} className="mr-2" /> Download Resume
                    </a>
                    
                    <a 
                      href="mailto:contact@example.com" 
                      className="flex items-center justify-center w-full px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-white rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Mail size={18} className="mr-2" /> Contact Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8">
              <SectionHeading title="About Me" />
              
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  Hello! I'm a passionate frontend developer with a strong focus on creating 
                  intuitive, responsive, and accessible web applications. With several years 
                  of experience in web development, I enjoy turning complex problems into 
                  simple, beautiful, and intuitive designs.
                </p>
                
                <p>
                  My journey into tech began when I built my first website in college. 
                  Since then, I've been continuously learning and exploring new technologies 
                  to improve my skills and stay current with industry trends.
                </p>
                
                <p>
                  I believe in the power of technology to solve real-world problems and am 
                  particularly interested in projects that make a positive impact. When I'm not 
                  coding, you'll find me exploring the outdoors, taking photos, reading, or 
                  experimenting with new recipes in the kitchen.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Skills & Expertise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      {skillGroup.category}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span 
                          key={i} 
                          className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Education & Experience
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Senior Frontend Developer
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400">
                    Example Company • 2021 - Present
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Lead frontend development for multiple projects, mentor junior developers, 
                    and implement best practices for accessibility and performance.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Frontend Developer
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400">
                    Another Company • 2018 - 2021
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Developed responsive web applications using React and TypeScript, collaborated 
                    with designers and backend developers to implement new features.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400">
                    University Name • 2014 - 2018
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Focused on web development, user interface design, and software engineering principles.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;