import Image from 'next/image';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="flex flex-col items-start max-w-3xl mx-auto pb-16">
      <h1 className="font-bold text-3xl mb-8 tracking-tight">Resume</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Ahmet Hasdemir</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          Economics student with expertise in modern web development and data science.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Link href="mailto:ahmet@hasdemir.me" className="inline-flex items-center px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
            ahmet@hasdemir.me
          </Link>
          <Link href="https://github.com/ahasdemir" target="_blank" className="inline-flex items-center px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/ahasdemir" target="_blank" className="inline-flex items-center px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
            LinkedIn
          </Link>
          <Link href="https://hasdemir.me" target="_blank" className="inline-flex items-center px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
            hasdemir.me
          </Link>
        </div>
      </section>

      <section className="mb-8 w-full">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Education</h2>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium">Hacettepe University, Ankara</h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">2024 - Present</span>
          </div>
          <div className="text-neutral-600 dark:text-neutral-400">BS, Economics</div>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium">Hacı Ömer Tarman Anatolian High School, Ankara</h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">2020 - 2024</span>
          </div>
          <div className="text-neutral-600 dark:text-neutral-400">High School</div>
        </div>
      </section>

      <section className="mb-8 w-full">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Experience</h2>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium">ACM Hacettepe, Ankara</h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Advertising/Promotion Team Member</span>
          </div>
          <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
            <li>Participated in organizing promotional activities for ACM events</li>
            <li>Collaborated with team members on advertising campaigns</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium">Denizbank, Remote</h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Denizaşırı Online Internship Alumni</span>
          </div>
          <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
            <li>Completed online internship program focused on banking technologies</li>
            <li>Gained experience in financial services digital infrastructure</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium">Bizymle, Remote</h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Editorial Content Creator</span>
          </div>
          <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
            <li>Created and edited content for digital publications</li>
            <li>Collaborated with editorial team on content strategy</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 w-full">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium mb-2">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">JavaScript</span>
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">TypeScript</span>
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">Python</span>
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">Java</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">React</span>
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">Next.js</span>
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">Node.js</span>
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">Express</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Design Platforms</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">Adobe Photoshop</span>
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">Adobe Premiere</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Certificates</h2>
        
        <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
          <li className="mb-2">
            <div className="flex justify-between items-start">
              <span className="font-medium">CS50x Introduction to Computer Science</span>
            </div>
          </li>
          <li className="mb-2">
            <div className="flex justify-between items-start">
              <span className="font-medium">Google Cloud Data Analytics Certificate</span>
            </div>
          </li>
        </ul>
      </section>
      
      <div className="mt-8 w-full">
        <Link 
          href="/resume.pdf" 
          target="_blank"
          className="inline-flex items-center justify-center bg-neutral-800 dark:bg-neutral-200 text-neutral-200 dark:text-neutral-800 px-4 py-2 rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
        >
          Download PDF Resume
        </Link>
      </div>
    </div>
  );
}