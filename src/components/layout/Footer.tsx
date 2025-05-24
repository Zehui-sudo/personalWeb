import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">
              <span className="font-heading">Portfolio</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Showcasing my projects, learning journey, and personal interests. 
              Feel free to reach out if you'd like to collaborate or chat.
            </p>
            <div className="mt-6 flex space-x-4">
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
              <a 
                href="mailto:contact@example.com" 
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/hobbies" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Hobbies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                contact@example.com
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Personal Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;