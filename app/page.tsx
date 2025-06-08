import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Ahmet Hasdemir
      </h1>
      <p className="mb-4">
        {`As an economics student with strong analytical skills, I have experience in modern web development and data science. I am a team player, able to produce innovative solutions, and always open to learning.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
