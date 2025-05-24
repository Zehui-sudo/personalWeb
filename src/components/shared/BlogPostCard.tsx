import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

const BlogPostCard = ({ post, index }: BlogPostCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-bold px-2 py-1 m-2 rounded">
          {post.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
          <span>{formattedDate}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock size={14} className="mr-1" />
            {post.readTime} min read
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.summary}
        </p>
        
        <Link 
          to={`/blog/${post.id}`} 
          className="inline-block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;