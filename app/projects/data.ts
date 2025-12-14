export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'My personal portfolio website built with Next.js and Tailwind CSS',
    image: '/projects/portfolio.webp',
    tags: ['Next.js', 'Tailwind CSS'],
    demoUrl: 'https://hasdemir.me',
    githubUrl: 'https://github.com/ahasdemir/personal-portfolio',
    fullDescription: `
      This portfolio website showcases my work and experience as a developer. 
      Built using Next.js and Tailwind CSS, it features a responsive design, 
      dark mode support, and optimized performance.

      The site includes:
      - Dynamic project pages
      - Blog with MDX support
      - Contact form with email integration
      - Resume page with downloadable PDF
      - SEO optimization with metadata and Open Graph tags
    `,
    features: [
      'Responsive design for all devices',
      'Dark/Light mode toggle',
      'Dynamic project pages with detailed information',
      'Blog system with MDX support for rich content',
      'SEO optimized with meta tags and Open Graph',
      'Fast page loads with Next.js',
    ],
    technologies: [
      'Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'MDX', 'Vercel'
    ],
  },
  {
    id: 'algo-risk-monitor',
    title: 'Algo-Risk Monitor',
    description: 'Quantitative Finance Dashboard & Portfolio Optimizer',
    image: '/projects/thealgoriskmonitor.webp',
    tags: ['Python', 'Pandas', 'NumPy', 'Plotly'],
    demoUrl: 'https://github.com/ahasdemir/algo-risk-monitor',
    githubUrl: 'https://github.com/ahasdemir/algo-risk-monitor',
    fullDescription: `
      Developed a comprehensive financial analysis tool designed to bridge the gap between raw market data and actionable risk insights. This project automates the tracking of market volatility, momentum, and portfolio performance, serving as a decision-support system for quantitative trading and risk management.

      It features an automated data pipeline to fetch real-time OHLCV data, implements advanced risk metrics like Logarithmic Returns and Annualized Volatility, and utilizes Modern Portfolio Theory (MPT) for portfolio optimization. The tool also performs Monte Carlo simulations to construct the Efficient Frontier and identifies the Optimal Portfolio based on the maximum Sharpe Ratio.
    `,
    features: [
      'Automated Data Pipeline using yfinance',
      'Advanced Risk Metrics & Annualized Volatility',
      'Portfolio Optimization (MPT)',
      'Monte Carlo Simulation (10,000+ scenarios)',
      'Technical Analysis (RSI, SMA)',
      'Interactive Visualization with Plotly'
    ],
    technologies: [
      'Python', 'Pandas', 'NumPy', 'Plotly', 'yfinance', 'SciPy'
    ],
  },
  {
    id: 'gemini-with-knowledge',
    title: 'Gemini with Knowledge',
    description: 'This project integrates a knowledge management system with the Gemini API, allowing the model to reference a knowledge base when generating responses.',
    image: '/projects/gemini-with-knowledge.webp',
    tags: ['AI', 'Gemini API', 'Knowledge Management', 'Python'],
    demoUrl: 'https://github.com/ahasdemir/gemini-with-knowledge',
    githubUrl: 'https://github.com/ahasdemir/gemini-with-knowledge',
    fullDescription: `
      This project integrates a knowledge management system with the Gemini API, allowing the model to reference a knowledge base when generating responses. I created this app as a prototype for a helping chatbot that can assist users in various contexts.
      
      The application allows users to upload documents to a knowledge base, which the Gemini AI model can then reference when answering questions. This creates more accurate and contextually relevant responses based on the specific information in the knowledge base.
      
      By combining Google's powerful Gemini AI with custom knowledge bases, this project demonstrates how to create specialized AI assistants that can leverage both general AI capabilities and specific domain knowledge.
    `,
    features: [
      'Document upload and knowledge base management',
      'Integration with Google Gemini API',
      'Context-aware responses based on uploaded knowledge',
      'Conversation history and context persistence',
      'User-friendly chat interface'
    ],
    technologies: [
      'Gemini API', 'Python', 'Express', 'Vector Database'
    ],
  },
  {
    id: 'minecraft-rehber',
    title: 'Administration Guide Panel',
    description: 'A Next.js application containing guide and management tools for the SkyBlockTC server',
    image: '/projects/guide-panel.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://skyblocktc-rehber.vercel.app',
    githubUrl: 'https://github.com/ahasdemir/skyblocktc-rehber',
    fullDescription: `
      This project is a comprehensive guide and management panel for the SkyBlockTC server. 
      Built using Next.js and TypeScript, it provides an intuitive interface for server management 
      and player guidance.

      The application features:
      - Server management tools
      - Player guides and documentation
      - Interactive UI components
      - Responsive design for all devices
      - Real-time updates and notifications
    `,
    features: [
      'Server management dashboard',
      'Player guides and documentation',
      'Interactive UI components',
      'Responsive design',
      'Real-time updates'
    ],
    technologies: [
      'Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel'
    ],
  },
  {
    id: 'job-scraper',
    title: 'Job Scraper',
    description: 'A Python tool that automatically collects job listings from Youthall and Toptalent',
    image: '/projects/job-scraper.webp',
    tags: ['Python', 'pandas', 'beautifulsoup4'],
    demoUrl: 'https://github.com/ahasdemir/job-scraper',
    githubUrl: 'https://github.com/ahasdemir/job-scraper',
    fullDescription: `
      A Python tool that automatically collects job listings from Youthall and Toptalent. Extracts job titles, companies, locations, and links, then saves to CSV. Simple to use, with a modular design that makes it easy to add support for more job sites.
      This project demonstrates web scraping techniques using Python libraries like BeautifulSoup and pandas. It can be extended to scrape additional job sites or extract more detailed information as needed.
    `,
    features: [
      'Scrapes job title, company, location, and job link.',
      'Saves results as CSV.',
      'Modular design for adding new scrapers.'
    ],
    technologies: [
      'Python', 'pandas', 'beautifulsoup4'
    ],
  },
]; 