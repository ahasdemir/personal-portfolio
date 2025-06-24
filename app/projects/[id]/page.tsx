import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';


const projects = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'My personal portfolio website built with Next.js and Tailwind CSS',
    image: '/projects/portfolio.webp',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    demoUrl: 'https://hasdemir.me',
    githubUrl: 'https://github.com/ahasdemir/personal-portfolio',
    fullDescription: `
      This portfolio website showcases my work and experience as a developer. 
      Built using Next.js and Tailwind CSS, it features a responsive design, 
      dark mode support, and optimized performance.

      The site includes:
      - Dynamic project pages
      - Blog with MDX support
      - Contact form with email integration
      - Resume page with downloadable PDF
      - SEO optimization with metadata and Open Graph tags
    `,
    features: [
      'Responsive design for all devices',
      'Dark/Light mode toggle',
      'Fast page loads with Next.js',
      'MDX support for rich content',
      'SEO optimized structure',
    ],
    technologies: [
      'Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'MDX', 'Vercel'
    ],
  },
  {
    id: 'gemini-with-knowledge',
    title: 'Gemini with Knowledge',
    description: 'This project integrates a knowledge management system with the Gemini API, allowing the model to reference a knowledge base when generating responses.',
    image: '/projects/gemini-with-knowledge.webp',
    tags: ['AI', 'Gemini API', 'Knowledge Management', 'Python'],
    demoUrl: 'https://github.com/ahasdemir/gemini-with-knowledge',
    githubUrl: 'https://github.com/ahasdemir/gemini-with-knowledge',
    fullDescription: `
      This project integrates a knowledge management system with the Gemini API, allowing the model to reference a knowledge base when generating responses. I created this app as a prototype for a helping chatbot that can assist users in various contexts.
      
      The application allows users to upload documents to a knowledge base, which the Gemini AI model can then reference when answering questions. This creates more accurate and contextually relevant responses based on the specific information in the knowledge base.
      
      By combining Google's powerful Gemini AI with custom knowledge bases, this project demonstrates how to create specialized AI assistants that can leverage both general AI capabilities and specific domain knowledge.
    `,
    features: [
      'Document upload and knowledge base management',
      'Integration with Google Gemini API',
      'Context-aware responses based on uploaded knowledge',
      'Conversation history and context persistence',
      'User-friendly chat interface'
    ],
    technologies: [
      'Gemini API', 'Python', 'Express', 'Vector Database'
    ],
  },
  {
    id: 'machine-learning-model',
    title: 'Economic Forecast Model',
    description: 'Machine learning model to predict economic indicators based on historical data',
    image: '/projects/ml-model.webp',
    tags: ['Python', 'TensorFlow', 'Data Science'],
    demoUrl: 'https://ml-demo.hasdemir.me',
    githubUrl: 'https://github.com/ahasdemir/economic-forecast',
    fullDescription: `
      A machine learning model that predicts economic indicators such as 
      GDP growth, inflation rates, and unemployment based on historical data.
      
      The model uses time series analysis and neural networks to identify patterns 
      and make predictions. The web interface allows users to input various parameters 
      and see visualizations of the predicted outcomes.
    `,
    features: [
      'Time series forecasting of economic indicators',
      'Customizable prediction parameters',
      'Interactive visualization of results',
      'Model accuracy metrics',
      'API endpoints for integration with other applications',
    ],
    technologies: [
      'Python', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib', 'Flask', 'React'
    ],
  },
  {
    id: 'minecraft-rehber',
    title: 'Administration Guide Panel',
    description: 'A Next.js application containing guide and management tools for the SkyBlockTC server',
    image: '/projects/guide-panel.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://skyblocktc-rehber.vercel.app',
    githubUrl: 'https://github.com/ahasdemir/skyblocktc-rehber',
    fullDescription: `
      This project is a comprehensive guide and management panel for the SkyBlockTC server. 
      Built using Next.js and TypeScript, it provides an intuitive interface for server management 
      and player guidance.

      The application features:
      - Server management tools
      - Player guides and documentation
      - Interactive UI components
      - Responsive design for all devices
      - Real-time updates and notifications
    `,
    features: [
      'Server management dashboard',
      'Player guides and documentation',
      'Interactive UI components',
      'Responsive design',
      'Real-time updates'
    ],
    technologies: [
      'Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel'
    ],
  },
  {
    id: 'job-scraper',
    title: 'Job Scraper',
    description: 'A Python tool that automatically collects job listings from Youthall and Toptalent.',
    image: '/projects/job-scraper.webp',
    tags: ['Python', 'pandas', 'beautifulsoup4'],
    demoUrl: 'https://github.com/ahasdemir/job-scraper',
    githubUrl: 'https://github.com/ahasdemir/job-scraper',
    fullDescription: `
      A Python tool that automatically collects job listings from Youthall and Toptalent. Extracts job titles, companies, locations, and links, then saves to CSV. Simple to use, with a modular design that makes it easy to add support for more job sites.
      This project demonstrates web scraping techniques using Python libraries like BeautifulSoup and pandas. It can be extended to scrape additional job sites or extract more detailed information as needed.
    `,
    features: [
      'Scrapes job title, company, location, and job link.',
      'Saves results as CSV.',
      'Modular design for adding new scrapers.'
    ],
    technologies: [
      'Python', 'pandas', 'beatifulsoup4'
    ],
  },
];

// Generate metadata function for dynamic titles
export function generateMetadata({ params }) {
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

export default function ProjectPage({ params }) {
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