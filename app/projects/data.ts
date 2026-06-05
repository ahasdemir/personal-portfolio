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
    description: 'Automated risk dashboard: volatility, VaR, optimization',
    image: '/projects/the-algo-risk-monitor.webp',
    tags: ['Python', 'Quant Finance', 'Streamlit', 'Plotly'],
    demoUrl: 'https://algo-risk-monitor.streamlit.app/',
    githubUrl: 'https://github.com/ahasdemir/Algo-Risk-Monitor',
    fullDescription: `
      Algo-Risk Monitor is an automated quantitative analysis suite that blends technical momentum signals with multi-layered risk analytics to turn raw market data into actionable insight.
      
      Highlights:
      - Logarithmic Returns and 21-day Annualized Volatility for risk standardization
      - RSI/SMA momentum overlays and candlestick dashboards
      - Parametric (Normal/Hull) and Historical VaR for single tickers and portfolios
      - Mean-Variance Optimization (MPT), Efficient Frontier search, and Monte Carlo for maximum Sharpe
      - Geometric Brownian Motion (GBM) scenario engine to simulate forward portfolio values
      - Interactive Streamlit web app with multi-page navigation and exportable CSV outputs

      Supports auto-adjusted OHLCV via yfinance, including all 503 S&P 500 constituents. Built for notebook analysis and real-time web dashboards.
    `,
    features: [
      'Automated OHLCV data pipeline (yfinance)',
      'Momentum & Trend: RSI, SMA-20/50 crossovers',
      'Volatility & VaR: annualized vols, parametric (Hull) and historical VaR',
      'Portfolio analytics: expected returns, covariance, efficient frontier',
      'Optimization engine: 10,000+ Monte Carlo simulations, max Sharpe & min vol',
      'Scenario engine: GBM with percentile bands (500+ paths)',
      'Visual outputs: Plotly dashboards, Matplotlib/Seaborn distributions',
      'Streamlit web app: interactive multi-page analysis',
      'Smart weight input and validation (equal-weight option)',
      'Correlation heatmap & performance pages'
    ],
    technologies: [
      'Python', 'Pandas', 'NumPy', 'SciPy', 'yfinance', 'Plotly', 'Matplotlib', 'Seaborn', 'Streamlit', 'Jupyter'
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