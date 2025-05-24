import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB.',
    summary: 'Modern e-commerce solution with user authentication, product catalog, cart functionality, and payment processing.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Web Development', 'E-commerce', 'Full Stack'],
    demoLink: 'https://demo-ecommerce.example.com',
    repoLink: 'https://github.com/username/ecommerce-platform',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe API'],
    challenges: [
      'Implementing secure user authentication',
      'Building a responsive product catalog',
      'Integrating payment processing',
      'Optimizing performance for large product databases'
    ],
    solutions: [
      'Used JWT for authentication with refresh token rotation',
      'Created a responsive design with Tailwind CSS',
      'Integrated Stripe API for secure payments',
      'Implemented pagination and lazy loading for product images'
    ],
    learnings: [
      'Improved state management skills with Redux',
      'Gained experience with payment gateway integration',
      'Learned about database optimization techniques',
      'Enhanced knowledge of secure authentication practices'
    ],
    date: '2023-04-15'
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A productivity app for managing tasks and projects.',
    summary: 'Feature-rich task manager with drag-and-drop interface, categories, priorities, and team collaboration.',
    image: 'https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Web Development', 'Productivity', 'React'],
    demoLink: 'https://task-app.example.com',
    repoLink: 'https://github.com/username/task-management',
    technologies: ['React', 'TypeScript', 'Firebase', 'React DnD', 'Tailwind CSS'],
    challenges: [
      'Creating an intuitive drag-and-drop interface',
      'Implementing real-time updates across devices',
      'Designing an effective data structure for tasks and projects',
      'Balancing feature richness with simplicity'
    ],
    solutions: [
      'Used React DnD for drag-and-drop functionality',
      'Implemented Firebase real-time database for synchronization',
      'Designed a flexible, normalized data model',
      'Created a clean, minimalist UI with progressive disclosure'
    ],
    learnings: [
      'Improved skills with TypeScript and type safety',
      'Learned about real-time database synchronization',
      'Enhanced knowledge of state management patterns',
      'Gained experience with drag-and-drop libraries'
    ],
    date: '2023-08-22'
  },
  {
    id: 'project-3',
    title: 'AI-Powered Content Generator',
    description: 'A tool that uses AI to generate blog posts, social media content, and more.',
    summary: 'Leverages OpenAI API to help content creators generate ideas and draft content quickly.',
    image: 'https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['AI/ML', 'Web Development', 'Productivity'],
    demoLink: 'https://ai-content.example.com',
    repoLink: 'https://github.com/username/ai-content-generator',
    technologies: ['React', 'Next.js', 'OpenAI API', 'Vercel', 'Prisma', 'PostgreSQL'],
    challenges: [
      'Managing API rate limits and costs',
      'Creating an intuitive interface for prompt engineering',
      'Handling varying response times from the AI service',
      'Implementing content saving and organization'
    ],
    solutions: [
      'Built a queueing system for API requests',
      'Designed a user-friendly prompt template system',
      'Added progressive loading indicators and streaming responses',
      'Created a database schema for efficient content organization'
    ],
    learnings: [
      'Gained deep understanding of LLM prompt engineering',
      'Learned strategies for handling API rate limits',
      'Improved skills with Next.js and server-side rendering',
      'Enhanced knowledge of user experience design for AI tools'
    ],
    date: '2024-01-10'
  }
];