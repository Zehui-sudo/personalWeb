import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <p className="mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/projects" 
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Projects
        </Link>
      </div>
    );
  }
  
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-primary-600 dark:text-primary-400 mb-8 hover:underline"
        >
          <ArrowLeft size={16} className="mr-1" /> Back to Projects
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-12">
            <div className="h-96 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Live Demo <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                
                {project.repoLink && (
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-white rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    View Code <Github size={16} className="ml-2" />
                  </a>
                )}
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Challenges
                  </h2>
                  <ul className="space-y-2 list-disc pl-5 text-gray-600 dark:text-gray-300">
                    {project.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Solutions
                  </h2>
                  <ul className="space-y-2 list-disc pl-5 text-gray-600 dark:text-gray-300">
                    {project.solutions.map((solution, i) => (
                      <li key={i}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  What I Learned
                </h2>
                <ul className="space-y-2 list-disc pl-5 text-gray-600 dark:text-gray-300">
                  {project.learnings.map((learning, i) => (
                    <li key={i}>{learning}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;