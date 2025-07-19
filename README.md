# Ahmet Hasdemir's Portfolio Website

This is my personal portfolio website showcasing my projects and experience. The site is built using the Vercel Portfolio Blog Starter as a foundation, which I've customized and extended to fit my needs.

## Features

- Projects section with interactive cards and detailed dynamic pages
- Resume page with download option
- Blog with MDX and Markdown support
- SEO optimization (sitemap, robots, JSON-LD schema)
- RSS Feed
- Dynamic OG images
- Syntax highlighting with [Sugar High](https://github.com/huozhi/sugar-high)
- Tailwind CSS styling with responsive design and dark/light mode toggle
- Error boundary implementation for better error handling
- Loading state components for improved UX
- TypeScript integration for type safety
- Consolidated project data management system

## Project Structure

```
portfolio-starter-kit/
├── app/                      # Next.js App Router structure
│   ├── blog/                 # Blog section
│   │   ├── posts/            # MDX blog posts
│   │   ├── [slug]/           # Dynamic blog post pages
│   │   ├── page.tsx          # Blog listing page
│   │   └── utils.ts          # Blog utility functions
│   ├── components/           # Shared React components
│   │   ├── footer.tsx        # Footer component
│   │   ├── mdx.tsx           # MDX renderer
│   │   ├── nav.tsx           # Navigation component
│   │   └── posts.tsx         # Blog posts component
│   ├── lib/                  # Library code and utilities
│   │   └── utils.ts          # General utility functions
│   ├── og/                   # Open Graph image generation
│   │   └── route.tsx         # API route for OG images
│   ├── projects/             # Projects section
│   │   ├── [id]/             # Dynamic project page
│   │   ├── data.ts           # Project data
│   │   ├── page.tsx          # Projects listing page
│   │   └── ProjectsList.tsx  # Projects component
│   ├── resume/               # Resume section
│   │   └── page.tsx          # Resume page
│   ├── rss/                  # RSS feed generation
│   │   └── route.ts          # RSS API route
│   ├── global.css            # Global styles
│   ├── layout.tsx            # Root layout
│   ├── not-found.tsx         # 404 page
│   ├── page.tsx              # Home page
│   ├── robots.ts             # Robots.txt config
│   └── sitemap.ts            # Sitemap generation
├── public/                   # Static assets
│   ├── projects/             # Project images
│   ├── favicon.webp          # Favicon
│   ├── foto.webp             # Profile photo
│   └── resume.pdf            # Downloadable PDF resume
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Projects Section

The portfolio includes a projects section where I showcase my work with interactive cards. Each project has its own dedicated page with detailed information, including:

- Project overview
- Key features
- Technologies used
- Links to live demos and GitHub repositories

## Technology Stack

This website is built with:
- Next.js
- React
- Tailwind CSS
- TypeScript
- MDX for content

## Development

To run this project locally:

```bash
# Clone the repo
git clone https://github.com/ahasdemir/personal-portfolio.git

# Open repo folder
cd personal-portfolio

# Install dependencies
pnpm install #or you can use 'npm install'

# Run development server
pnpm run dev #or you can use 'npm run dev'
```

The site will be available at http://localhost:3000

## Deployment

This site is deployed on Vercel. Any changes pushed to the main branch are automatically deployed.

## Original Template

This portfolio is based on the [Vercel Portfolio Blog Starter](https://github.com/vercel/examples/tree/main/solutions/blog). I've extended it with additional features like the projects section and resume page.

## Contact

Feel free to reach out to me at ahmet@hasdemir.me or connect with me on [LinkedIn](https://linkedin.com/in/ahasdemir) and [GitHub](https://github.com/ahasdemir).
