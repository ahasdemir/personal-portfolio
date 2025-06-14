export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'My personal portfolio website built with Next.js and Tailwind CSS',
    image: '/projects/portfolio.webp',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    demoUrl: 'https://hasdemir.me',
    githubUrl: 'https://github.com/ahasdemir/personal-portfolio',
  },
  {
    id: 'gemini-with-knowledge',
    title: 'Gemini with Knowledge',
    description: 'This project integrates a knowledge management system with the Gemini API, allowing the model to reference a knowledge base when generating responses.',
    image: '/projects/gemini-with-knowledge.webp',
    tags: ['AI', 'Gemini API', 'Knowledge Management', 'Python'],
    demoUrl: 'https://github.com/ahasdemir/gemini-with-knowledge',
    githubUrl: 'https://github.com/ahasdemir/gemini-with-knowledge',
  },
  {
    id: 'minecraft-rehber',
    title: 'Administration Guide Panel',
    description: 'A Next.js application containing guide and management tools for the SkyBlockTC server',
    image: '/projects/guide-panel.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://skyblocktc-rehber.vercel.app',
    githubUrl: 'https://github.com/ahasdemir/skyblocktc-rehber',
  },
  {
    id: 'machine-learning-model',
    title: 'Economic Forecast Model',
    description: 'Machine learning model to predict economic indicators based on historical data',
    image: '/projects/ml-model.webp',
    tags: ['Python', 'TensorFlow', 'Data Science'],
    demoUrl: 'https://ml-demo.hasdemir.me',
    githubUrl: 'https://github.com/ahasdemir/economic-forecast',
  },
]; 