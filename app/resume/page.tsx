import Image from 'next/image';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="flex flex-col items-start max-w-3xl mx-auto pb-16">
      <h1 className="font-bold text-3xl mb-8 tracking-tight">Resume</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Ahmet Hasdemir</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          Software Engineer with expertise in modern web development and cloud technologies.
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
        </div>
      </section>

      <section className="mb-8 w-full">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Experience</h2>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium">Senior Software Engineer</h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">2020 - Present</span>
          </div>
          <div className="text-neutral-600 dark:text-neutral-400 mb-2">Example Company</div>
          <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
            <li>Led the development of a customer-facing web application using React and TypeScript</li>
            <li>Implemented CI/CD pipelines to streamline deployment processes</li>
            <li>Mentored junior developers and conducted code reviews</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium">Software Engineer</h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">2017 - 2020</span>
          </div>
          <div className="text-neutral-600 dark:text-neutral-400 mb-2">Previous Company</div>
          <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
            <li>Developed and maintained RESTful APIs using Node.js and Express</li>
            <li>Worked with cross-functional teams to deliver new features</li>
            <li>Optimized database queries to improve application performance</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 w-full">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Education</h2>
        
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">2013 - 2017</span>
          </div>
          <div className="text-neutral-600 dark:text-neutral-400">University Name</div>
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
            <h3 className="font-medium mb-2">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">Git</span>
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">Docker</span>
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">AWS</span>
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">CI/CD</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Databases</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">PostgreSQL</span>
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">MongoDB</span>
              <span className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">Redis</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Certifications</h2>
        
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">AWS Certified Solutions Architect</h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">2022</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">Professional Scrum Master I (PSM I)</h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">2021</span>
          </div>
        </div>
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