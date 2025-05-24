import { useState } from 'react';
import { motion } from 'framer-motion';
import { hobbies } from '../data/hobbies';
import { photos } from '../data/photos';
import HobbyCard from '../components/shared/HobbyCard';
import SectionHeading from '../components/shared/SectionHeading';

const HobbiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', ...new Set(photos.map(photo => photo.category))];
  
  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Hobbies"
          subtitle="A glimpse into the activities I enjoy outside of coding."
          align="center"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {hobbies.map((hobby, index) => (
            <HobbyCard key={hobby.id} hobby={hobby} index={index} />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Why Hobbies Matter
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I believe that having diverse interests and hobbies is essential for maintaining 
            creativity and balance in life. These activities not only provide a welcome break 
            from coding but also often inspire new approaches to problem-solving in my work.
          </p>
          
          <p className="text-gray-600 dark:text-gray-300">
            Whether I'm capturing moments through my camera lens, exploring nature trails, 
            diving into a good book, or experimenting with new recipes, these hobbies help 
            me stay refreshed and bring new perspectives to my professional projects.
          </p>
        </motion.div>

        <div className="mb-20">
          <SectionHeading
            title="Photography Portfolio"
            subtitle="A selection of my favorite captures across different styles and subjects."
            align="center"
          />

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
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
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-800"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-2">
                      {photo.description}
                    </p>
                    <span className="inline-block bg-white/20 text-white text-xs px-2 py-1 rounded">
                      {photo.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HobbiesPage;