import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '../data';

// Generate metadata function for dynamic titles
export function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col items-start max-w-3xl mx-auto pb-16">
      <div className="mb-8">
        <Link 
          href="/projects" 
          className="group flex items-center gap-2 py-2 px-3 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Projects
        </Link>
      </div>
      
      <h1 className="font-bold text-3xl mb-4 tracking-tight">{project.title}</h1>
      
      <div className="w-full h-72 relative mb-8 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden">
        {/* Remove the placeholder */}
        {/* <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
          <span className="text-lg">{project.title} Screenshot</span>
        </div> */}
        
        {/* Enable the Image component */}
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 text-sm rounded-md bg-neutral-100 dark:bg-neutral-800"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <Link 
          href={project.demoUrl} 
          target="_blank"
          className="inline-flex items-center justify-center bg-neutral-800 dark:bg-neutral-200 text-neutral-200 dark:text-neutral-800 px-4 py-2 rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
        >
          Live Demo
        </Link>
        <Link 
          href={project.githubUrl} 
          target="_blank"
          className="inline-flex items-center justify-center border border-neutral-300 dark:border-neutral-700 px-4 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          View Code
        </Link>
      </div>
      
      <section className="mb-8 w-full">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Overview</h2>
        <div className="prose dark:prose-invert">
          {project.fullDescription.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="mb-4 text-neutral-700 dark:text-neutral-300">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      
      <section className="mb-8 w-full">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Key Features</h2>
        <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
          {project.features.map((feature, idx) => (
            <li key={idx} className="mb-2">{feature}</li>
          ))}
        </ul>
      </section>
      
      <section className="w-full">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}