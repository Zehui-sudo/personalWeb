import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/shared/ProjectCard';
import SectionHeading from '../components/shared/SectionHeading';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  
  const uniqueTags = ['All', ...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));
  
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Projects"
          subtitle="A collection of my work, side projects, and experiments."
        />
        
        <div className="mb-12 flex flex-wrap gap-2">
          {uniqueTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects found with the selected filter.
            </p>
            <button
              onClick={() => setFilter('All')}
              className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;