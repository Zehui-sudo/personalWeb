import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-2 py-1 m-2 rounded">
          {project.tags[0]}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.summary}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span 
              key={i} 
              className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <Link 
          to={`/project/${project.id}`} 
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
        >
          View Project <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;