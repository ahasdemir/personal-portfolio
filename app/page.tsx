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
            As an economics student with strong analytical skills, I have experience in modern web development and data science. I am a team player, able to produce innovative solutions, and always open to learning.
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
          </div>
        </div>
        <div className="w-36 h-36 relative rounded-full overflow-hidden border-4 border-neutral-200 dark:border-neutral-800">
          <Image 
            src="/foto.jpg" 
            alt="Ahmet Hasdemir" 
            fill 
            className="object-cover"
            priority
          />
        </div>
      </div>
      
      <div className="my-12 py-8 border-t border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Python', 'Data Science', 'Economics', 'UI/UX'].map((skill) => (
            <div key={skill} className="px-4 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-center hover:translate-y-[-2px] transition-transform">
              {skill}
            </div>
          ))}
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
