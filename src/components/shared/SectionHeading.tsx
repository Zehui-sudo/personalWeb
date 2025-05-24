import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'left',
  children 
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <motion.div 
      className={`mb-12 max-w-2xl ${alignmentClasses[align]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-heading">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {subtitle}
        </p>
      )}
      
      {children}
    </motion.div>
  );
};

export default SectionHeading;