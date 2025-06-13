import Link from 'next/link';
import Image from 'next/image';

// Sample project data
// In a real app, you might want to store this in a separate data file
const projects = [
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
    id: 'machine-learning-model',
    title: 'Economic Forecast Model',
    description: 'Machine learning model to predict economic indicators based on historical data',
    image: '/projects/ml-model.webp',
    tags: ['Python', 'TensorFlow', 'Data Science'],
    demoUrl: 'https://ml-demo.hasdemir.me',
    githubUrl: 'https://github.com/ahasdemir/economic-forecast',
  },
];

export const metadata = {
  title: 'Projects',
  description: 'Browse my projects and experiments.',
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-start max-w-3xl mx-auto pb-16">
      <h1 className="font-bold text-3xl mb-8 tracking-tight">Projects</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        Here's a collection of my recent projects and experiments that showcase my skills and interests.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} className="group">
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden transition-all hover:shadow-md h-[360px] flex flex-col">
              <div className="relative h-48 w-full bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3 line-clamp-2 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}