import Link from 'next/link';
import Image from 'next/image';

export default function LinksPage() {
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto pb-16">
      <div className="w-24 h-24 relative mb-4">
        <Image 
          src="/foto.jpg" 
          alt="Ahmet Hasdemir" 
          fill
          className="rounded-full object-cover"
          priority
        />
      </div>
      
      <h1 className="font-bold text-2xl mb-2 tracking-tight text-center">Ahmet Hasdemir</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-center">
        Economics student & web developer
      </p>
      
      <div className="w-full flex flex-col gap-3">
        <Link 
          href="https://hasdemir.me" 
          className="flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 px-4 py-3 rounded-lg transition-colors w-full"
        >
          <span className="font-medium">Personal Website</span>
        </Link>
        
        <Link 
          href="https://github.com/ahasdemir" 
          className="flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 px-4 py-3 rounded-lg transition-colors w-full"
          target="_blank"
        >
          <span className="font-medium">GitHub</span>
        </Link>
        
        <Link 
          href="https://linkedin.com/in/ahasdemir" 
          className="flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 px-4 py-3 rounded-lg transition-colors w-full"
          target="_blank"
        >
          <span className="font-medium">LinkedIn</span>
        </Link>
        
        <Link 
          href="https://twitter.com/ahasdemir" 
          className="flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 px-4 py-3 rounded-lg transition-colors w-full"
          target="_blank"
        >
          <span className="font-medium">Twitter</span>
        </Link>
        
        <Link 
          href="/resume" 
          className="flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 px-4 py-3 rounded-lg transition-colors w-full"
        >
          <span className="font-medium">Resume</span>
        </Link>
        
        <Link 
          href="mailto:ahmet@hasdemir.me" 
          className="flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 px-4 py-3 rounded-lg transition-colors w-full"
        >
          <span className="font-medium">Contact Me</span>
        </Link>
      </div>
    </div>
  );
}