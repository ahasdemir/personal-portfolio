import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-left justify-left min-h-[60vh] px-4" role="main">
      <h1 className="mb-8 text-3xl font-bold tracking-tighter text-left">
        404 - Page Not Found
      </h1>
      <p className="mb-8 text-lg text-left text-gray-600" role="alert">
        Oops! Looks like this page took a wrong turn at the digital crossroads. Maybe it's on vacation? 🌴
      </p>
      <nav aria-label="Navigation options" className="flex flex-row flex-wrap justify-left gap-3 w-full max-w-2xl">
        <Link 
          href="/" 
          className="px-4 py-2 text-sm text-center text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-200 shadow-sm hover:shadow-md"
          aria-label="Return to homepage"
        >
          Go back to the homepage
        </Link>
        <Link 
          href="/blog" 
          className="px-4 py-2 text-sm text-center text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-200 shadow-sm hover:shadow-md"
          aria-label="Visit blog page"
        >
          Go to the blog
        </Link>
        <Link 
          href="/resume" 
          className="px-4 py-2 text-sm text-center text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-200 shadow-sm hover:shadow-md"
          aria-label="View resume"
        >
          Go to the resume
        </Link>
        <Link 
          href="/projects" 
          className="px-4 py-2 text-sm text-center text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-200 shadow-sm hover:shadow-md"
          aria-label="Browse projects"
        >
          Go to the projects
        </Link>
      </nav>
    </main>
  )
}
