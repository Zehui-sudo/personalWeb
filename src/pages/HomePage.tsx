import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { aiTools } from '../data/aiTools';
import ProjectCard from '../components/shared/ProjectCard';
// BlogPostCard import removed as per request
import AIToolCard from '../components/shared/AIToolCard';
import SectionHeading from '../components/shared/SectionHeading';

const HomePage = () => {
  // const [toolsPerRow] = useState(4); // This state is no longer used with the new grouped/filtered layout
  
  const groupedAiTools = aiTools.reduce((acc, tool) => {
    const category = tool.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tool);
    return acc;
  }, {} as Record<string, typeof aiTools>);

  const uniqueCategories = ['全部', ...Object.keys(groupedAiTools)];
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary-50 dark:bg-gray-900 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              嗨，我是 <span className="text-primary-600 dark:text-primary-400">泽辉</span>
              <br />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              希望能借助 AI 的力量，做出更有价值的产品！
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                to="/projects" 
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md shadow-sm hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                看看我都做了些什么 <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                关于我
                <img src="/aboutme.svg" alt="关于我图标" className="ml-2 h-5 w-5 inline-block" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-1/3 h-32 bg-primary-200 opacity-50 rounded-tl-full hidden md:block"></div>
        <div className="absolute top-20 right-20 w-20 h-20 bg-accent-200 opacity-50 rounded-full hidden md:block"></div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="一些尝试"
            subtitle="通过 AI 尝试的一些项目"
          >
            <div className="mt-4 flex">
              <Link 
                to="/projects" 
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center"
              >
                查看全部 <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Learning Section */}
      <section className="pt-20 pb-10 bg-primary-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="我怎么学习 AI 和产品"
              >
                <p className="mt-12 text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                  <div>1.快速且深入地了解技术的发展，<span className="font-bold text-primary-600 dark:text-primary-400">创始人访谈</span>往往是高质量的信息来源</div>
                  <div>2.使用和试用并不一样，要真正了解一个产品需要自己<span className="font-bold text-primary-600 dark:text-primary-400">深度使用</span>，而非简单尝试</div>
                  <div>3.实践的过程才是能力整合的过程，<span className="font-bold text-primary-600 dark:text-primary-400">实践</span>才能有真正的进步</div>
                  <div>最后！一定要经常记录！不论是看还是听还是使用，记录都是最有效的学习方式！</div>
                </p>
                <div className="mt-12">
                  <Link 
                    to="/blog" 
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md shadow-sm hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    看看我都记录了什么 <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </SectionHeading>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/how-to-learn.svg" 
                alt="Learning Process" 
                className="max-w-full h-auto rounded-lg dark:invert"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Tools Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="我使用过的一些 AI 工具"
            subtitle="关注交互界面设计和 AI 的具体应用场景"
            align="center"
          />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
            {uniqueCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
                  ${selectedCategory === category 
                    ? 'bg-primary-600 text-white focus:ring-primary-500' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-primary-500'}`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {selectedCategory === '全部' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {aiTools.map((tool, index) => (
                <AIToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>
          ) : (
            Object.entries(groupedAiTools)
              .filter(([category]) => category === selectedCategory)
              .map(([category, toolsInCategory], categoryIndex) => (
              <div key={category} className="mb-12">
                {/* No category title needed here as it's already indicated by the filter */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {toolsInCategory.map((tool, index) => (
                    <AIToolCard key={tool.id} tool={tool} index={categoryIndex * 100 + index} /> 
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;