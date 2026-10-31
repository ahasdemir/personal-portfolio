import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="flex flex-col items-start max-w-3xl mx-auto pb-16">
      <h1 className="font-bold text-3xl mb-8 tracking-tight">Resume</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Ahmet Hasdemir</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          Economics Junior at Hacettepe University minoring in Mathematics, specializing in quantitative finance, econometric modeling, and financial engineering.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Link href="mailto:ahmethasdemir000@gmail.com" className="inline-flex items-center px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
            ahmethasdemir000@gmail.com
          </Link>
          <Link href="https://hasdemir.vercel.app" target="_blank" className="inline-flex items-center px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
            hasdemir.vercel.app
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
            <span className="text-sm text-neutral-600 dark:text-neutral-400">2024 – 2028 (Expected)</span>
          </div>
          <div className="text-neutral-600 dark:text-neutral-400">B.S. in Economics (Junior / 3rd Year)</div>
          <div className="text-neutral-600 dark:text-neutral-400">Minor in Mathematics, Department of Mathematics (2026 – 2028)</div>
          <div className="text-sm text-neutral-500 mt-1">Relevant Coursework: Econometrics I, Linear Algebra, Calculus & Real Analysis III, Machine Learning for Economists, Financial Markets, Differential Equations.</div>
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
            <h3 className="font-medium mb-2">Quantitative Finance & Econometrics</h3>
            <p className="text-neutral-700 dark:text-neutral-300">Econometric Estimation (OLS, EKF State-Space, Time Series), Modern Portfolio Theory (MPT), Value-at-Risk (VaR), Stochastic Calculus, Black-Scholes-Merton & Garman-Kohlhagen Option Pricing, Monte Carlo Simulations.</p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Programming & Data</h3>
            <p className="text-neutral-700 dark:text-neutral-300">Python (NumPy, SciPy, Pandas, Statsmodels, Scikit-learn, Matplotlib, Plotly), SQL, R, TypeScript/JavaScript.</p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Developer Tools & Platforms</h3>
            <p className="text-neutral-700 dark:text-neutral-300">Linux (Arch/Hyprland), Git/GitHub, Docker, React Native, REST APIs, Vercel.</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Languages</h3>
            <p className="text-neutral-700 dark:text-neutral-300">Turkish (Native), English (Professional Working Proficiency / Fluent)</p>
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
        <a 
          href="/resume.pdf" 
          download="Ahmet_Hasdemir_CV.pdf"
          className="px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-md hover:opacity-90 transition-opacity"
        >
          Download PDF Resume
        </a>
      </div>
    </div>
  );
}