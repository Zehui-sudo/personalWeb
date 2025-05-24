import { motion } from 'framer-motion';
import { Hobby } from '../../types';

interface HobbyCardProps {
  hobby: Hobby;
  index: number;
}

const HobbyCard = ({ hobby, index }: HobbyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-lg shadow-md group"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={hobby.image} 
          alt={hobby.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
        <h3 className="text-xl font-bold mb-2">
          {hobby.name}
        </h3>
        
        <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {hobby.description}
        </p>
      </div>
    </motion.div>
  );
};

export default HobbyCard;