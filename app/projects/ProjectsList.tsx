'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from './data';
import { FiSearch, FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectsList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get unique tags from all projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  // Filter projects based on search query and selected tag
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="flex flex-col items-start max-w-3xl mx-auto pb-16">
      <h1 className="font-bold text-3xl mb-8 tracking-tight">Projects</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        Here's a collection of my recent projects and experiments that showcase my skills and interests.
      </p>

      {/* Search and Filter Section */}
      <div className="w-full mb-8 space-y-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search projects"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedTag === tag
                  ? 'bg-blue-500 text-white'
                  : 'bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
              aria-pressed={selectedTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {filteredProjects.map((project) => (
          <Link 
            href={`/projects/${project.id}`} 
            key={project.id} 
            className="group"
            aria-label={`View details for ${project.title}`}
          >
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden transition-all hover:shadow-lg h-[360px] flex flex-col">
              <div className="relative h-48 w-full bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Visit ${project.title} demo`}
                    >
                      <FiExternalLink />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Visit ${project.title} GitHub repository`}
                    >
                      <FiGithub />
                    </a>
                  </div>
                </div>
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

      {filteredProjects.length === 0 && (
        <div className="w-full text-center py-8 text-neutral-600 dark:text-neutral-400">
          No projects found matching your search criteria.
        </div>
      )}
    </div>
  );
} 