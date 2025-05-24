import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);
  
  if (!post) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
        <p className="mb-8">The post you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/blog" 
          className="inline-flex items-center px-4 py-2 bg-accent-500 text-white rounded-md"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Blog
        </Link>
      </div>
    );
  }
  
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-accent-500 mb-8 hover:underline"
        >
          <ArrowLeft size={16} className="mr-1" /> Back to Blog
        </Link>
        
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
        >
          <div className="h-64 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
              <span className="inline-flex items-center mr-4">
                <Calendar size={16} className="mr-1" />
                {formattedDate}
              </span>
              <span className="inline-flex items-center mr-4">
                <Clock size={16} className="mr-1" />
                {post.readTime} min read
              </span>
              <span className="bg-accent-500 text-white text-xs px-2 py-1 rounded">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {post.content}
              </p>
              
              {/* This is placeholder content since we don't have full blog posts */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus 
                ac commodo orci. Vivamus euismod nisi eu ex sollicitudin, vitae 
                imperdiet nibh lobortis. Donec ultrices sapien in arcu sagittis 
                venenatis. Aliquam erat volutpat. Duis imperdiet felis ut dapibus 
                varius. Nunc et justo a urna convallis faucibus.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Getting Started
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Nullam efficitur semper ante, id interdum nulla condimentum vel. 
                Mauris tincidunt sapien sit amet dui semper, vel aliquam dui 
                venenatis. Vestibulum ante ipsum primis in faucibus orci luctus 
                et ultrices posuere cubilia curae; Nulla facilisi. Suspendisse 
                interdum turpis sed lorem tristique, sed faucibus quam pharetra.
              </p>
              
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md overflow-x-auto mt-4">
                <code className="text-sm font-mono">
                  {`function example() {
  console.log("Hello, world!");
  return true;
}`}
                </code>
              </pre>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Conclusion
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                In conclusion, vestibulum ante ipsum primis in faucibus orci luctus 
                et ultrices posuere cubilia curae; Nulla facilisi. Suspendisse 
                interdum turpis sed lorem tristique, sed faucibus quam pharetra.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPostPage;