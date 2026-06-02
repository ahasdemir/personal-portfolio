import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="mb-4 block"
            href={`/blog/${post.slug}`}
          >
            <div className="grid grid-cols-[110px_minmax(0,1fr)] gap-4 items-start">
              <p className="whitespace-pre-line text-neutral-600 dark:text-neutral-400 tabular-nums leading-snug">
                {formatDate(post.metadata.publishedAt, false, true)}
              </p>
              <p className="min-w-0 text-neutral-900 dark:text-neutral-100 tracking-tight leading-snug text-pretty">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
