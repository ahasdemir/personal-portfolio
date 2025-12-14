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
          <Link href="https://hasdemir.me" target="_blank" className="inline-flex items-center px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
            hasdemir.me
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
            <h3 className="font-medium">DenizBank</h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Dec 2024 – Jan 2025</span>
          </div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-neutral-600 dark:text-neutral-400">Intern (Remote)</span>
          </div>
          <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 space-y-2">
            <li><strong>Global Insight:</strong> Gained a comprehensive understanding of international banking dynamics and global financial trends through exposure to cross-border operations within the DenizBank and Emirates NBD ecosystem.</li>
            <li><strong>Strategic Collaboration:</strong> Actively contributed to innovative projects by bridging the gap between local execution and global strategy, enhancing analytical thinking and problem-solving capabilities in a multinational setting.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 w-full">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Education</h2>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium">Hacettepe University, Ankara</h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">June, 2028</span>
          </div>
          <div className="text-neutral-600 dark:text-neutral-400">BSc., Economics</div>
          <div className="text-sm text-neutral-500 mt-1">3.4/4.0 GPA</div>
          <div className="text-sm text-neutral-500 mt-1">Relevant Coursework: Econometrics, Statistics I-II, Linear Algebra, Macroeconomic Theory.</div>
          <div className="text-sm text-neutral-500 mt-1">Hacettepe Economics Club – Finance Committee</div>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium">Hacı Ömer Tarman Anatolian High School, Ankara</h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">June, 2024</span>
          </div>
          <div className="text-neutral-600 dark:text-neutral-400">High School Diploma (Mathematics & Science)</div>
        </div>
      </section>



      <section className="mb-8 w-full">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Skills</h2>
        
        <div className="grid grid-cols-1 gap-4">
          <div>
            <h3 className="font-medium mb-2">Programming & Data</h3>
            <p className="text-neutral-700 dark:text-neutral-300">Python (Pandas, NumPy, Matplotlib, Plotly), SQL (Intermediate), R.</p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Financial Analysis</h3>
            <p className="text-neutral-700 dark:text-neutral-300">Time Series Analysis, Volatility Modeling, Technical Analysis (RSI, MACD), Risk Metrics.</p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Software & Tools</h3>
            <p className="text-neutral-700 dark:text-neutral-300">Git/GitHub, MS Excel (VLOOKUP, Pivot Tables), VS Code, Jupyter Notebook, Linux</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Languages</h3>
            <p className="text-neutral-700 dark:text-neutral-300">Turkish (Native), English (C1 - Advanced)</p>
          </div>
        </div>
      </section>
      
      <section className="w-full">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">Certificates & Training</h2>
        
        <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
          <li className="mb-2">
            <div className="flex justify-between items-start">
              <span className="font-medium">HackerRank SQL (Intermediate) – Verified Skill</span>
            </div>
          </li>
        </ul>
      </section>
      
      <div className="mt-8 flex w-full">
        <Link 
          href="https://drive.google.com/file/d/1-tdxEuuo1vqz3v1bOZwtjwz0UM0eTU3t/view?usp=sharing" 
          target="_blank"
          className="px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-md hover:opacity-90 transition-opacity"
        >
          Download PDF Resume
        </Link>
      </div>
    </div>
  );
}