import { useState } from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import BlogPostCard from '../components/shared/BlogPostCard';
import SectionHeading from '../components/shared/SectionHeading';

const BlogPage = () => {
  const [filter, setFilter] = useState('All');
  
  const uniqueCategories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);
  
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Learning Blog"
          subtitle="Sharing insights, tutorials, and experiences from my development journey."
        />
        
        <div className="mb-12 flex flex-wrap gap-2">
          {uniqueCategories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-accent-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No blog posts found with the selected category.
            </p>
            <button
              onClick={() => setFilter('All')}
              className="mt-4 px-4 py-2 bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-colors"
            >
              Show All Posts
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;