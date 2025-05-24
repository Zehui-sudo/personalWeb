import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { AITool } from '../../types';

interface AIToolCardProps {
  tool: AITool;
  index: number;
}

const AIToolCard = ({ tool, index }: AIToolCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center group"
    >
      <div className="w-16 h-16 mb-3 relative overflow-hidden rounded-lg">
        <img 
          src={tool.logo} 
          alt={`${tool.name} logo`} 
          className="w-full h-full object-contain"
        />
      </div>
      
      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
        {tool.name}
      </h3>
      
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
        {tool.category}
      </p>
      
      <a 
        href={tool.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Visit <ExternalLink size={12} className="ml-1" />
      </a>
    </motion.div>
  );
};

export default AIToolCard;