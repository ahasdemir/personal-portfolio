import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between mb-10 gap-6">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-neutral-100">
            Ahmet Hasdemir
          </h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
            Economics student with a strong foundation in econometrics and statistical analysis. Skilled in Python (Pandas, NumPy) and Financial Modelling. Passionate about bridging the gap between economic theory and data science to solve complex risk management problems. Currently building automated dashboards for market analysis.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link 
              href="/resume" 
              className="px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-md hover:opacity-90 transition-opacity"
            >
              My Resume
            </Link>
            <Link 
              href="/blog" 
              className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Blog Posts
            </Link>
            <Link 
              href="/projects" 
              className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Projects
            </Link>
            </div>
        </div>
        <div className="w-36 h-36 relative rounded-full overflow-hidden border-4 border-neutral-200 dark:border-neutral-800">
          <Image 
            src="/foto.webp" 
            alt="Ahmet Hasdemir" 
            fill 
            className="object-cover"
            priority
          />
        </div>
      </div>
      


      <div className="my-12">
        <h2 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100">
          Latest Posts
        </h2>
        <BlogPosts />
      </div>
    </section>
  )
}
