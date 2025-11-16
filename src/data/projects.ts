export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  featured?: boolean;
  category: 'web' | 'mobile' | 'backend' | 'fullstack';
  status: 'completed' | 'in-progress' | 'planned';
  year: number;
  duration: string;
  challenges: string[];
  achievements: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Rent Your Dream House With Us',
    description: 'Front-end React application with a modern UI, responsive layout, and smart filters for renting properties.',
    longDescription: 'A polished front-end real estate app built with React. It features a clean hero section, location/property/price filters, responsive cards, and a fast, accessible UI. The app is API-ready and can work with mocked data or a REST backend. Focus areas include performance, UX consistency, and pixel-perfect implementation based on design assets.',
    image: '/images/rent-your-dream-hous-fe.png',
    technologies: ['React', 'TypeScript', 'React Router', 'SCSS', 'Tailwind CSS'],
    tags: ['Real Estate', 'Frontend', 'Responsive UI', 'Search & Filters'],
    demoUrl: 'https://rent-home-front-end.netlify.app',
    repoUrl: 'https://github.com/iskren/rent-home-frontend',
    featured: false,
    category: 'web',
    status: 'completed',
    year: 2024,
    duration: '1 week',
    challenges: [
      'Building accessible, composable filter components',
      'Maintaining design parity across breakpoints',
      'Optimizing initial load and interaction latency'
    ],
    achievements: [
      'CLS/LCP within Core Web Vitals thresholds',
      'Consistent 100% Lighthouse accessibility score on key pages',
      'Reusable UI components enabling fast feature iteration'
    ]
  },
  {
    id: 2,
    title: 'Todo App — React Native + Expo (Web)',
    description: 'Cross-platform to-do list built with React Native and Expo, bundled for the web and deployed on Netlify.',
    longDescription: 'A lightweight, fast to-do application built with React Native and Expo. It supports adding, editing, completing, and deleting tasks with persistent local storage. The project is optimized for smooth interactions and a responsive UI, and is compiled for the web via React Native Web, keeping a single codebase for mobile and browser environments.',
    image: '',
    technologies: ['React Native', 'Expo', 'TypeScript', 'React Native Web', 'AsyncStorage'],
    tags: ['To-Do', 'Cross-platform', 'Mobile & Web', 'Responsive UI'],
    demoUrl: 'https://todo-app-react-native-expo.netlify.app/',
    repoUrl: '',
    featured: false,
    category: 'mobile',
    status: 'completed',
    year: 2024,
    duration: '1 week',
    challenges: [
      'Consistent look and behavior across mobile and web',
      'Reliable state persistence and task lifecycle',
      'Performance tuning for the Expo Web build'
    ],
    achievements: [
      'Single codebase for mobile and web',
      'Fast initial load and smooth interactions',
      'Reusable UI components for rapid iteration'
    ]
  },
  {
    id: 3,
    title: 'Spotify UI Clone',
    description: 'Modern Spotify-like web UI built with React and TypeScript, featuring responsive layout, theming, and smooth interactions.',
    longDescription: 'A polished Spotify-inspired interface implemented with React and TypeScript. Includes sidebar navigation, playlists and albums grid, player section, sticky header, search, and responsive breakpoints. Built with Tailwind CSS and Framer Motion for fast styling and fluid micro-interactions. Optimized for accessibility and performance and deployed on Netlify.',
    image: '/images/spotify-clone-fe.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router', 'Framer Motion'],
    tags: ['Music UI', 'Responsive', 'Theming', 'Playlists'],
    demoUrl: 'https://spotifyclonse-ui.netlify.app/',
    repoUrl: '',
    featured: false,
    category: 'web',
    status: 'completed',
    year: 2024,
    duration: '1 week',
    challenges: [
      'Matching Spotify visual language and spacing scale',
      'Responsive grid and sticky header/player behavior',
      'Keyboard navigation and focus management'
    ],
    achievements: [
      'Pixel-accurate layout across breakpoints',
      'Smooth 60fps animations and transitions',
      'High Lighthouse scores for performance and accessibility'
    ]
  },
  {
    id: 4,
    title: 'Startup Dashboard',
    description: 'Modern, fully responsive admin dashboard with interactive charts, dark mode, and beautiful UI built with React and Tailwind CSS.',
    longDescription: 'A production-ready admin dashboard built with React 18, TypeScript, and Vite. Features include real-time data visualization with ApexCharts, dark/light theme switching with localStorage persistence, advanced filtering and search functionality, and a fully responsive mobile-first design. Optimized for Netlify deployment with SPA routing configured. Includes 5 complete pages: Dashboard with KPI metrics and interactive charts, Orders management with live filtering, Customers overview, Products catalog, and Settings with tabbed navigation.',
    image: '/images/dashboard.png',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'ApexCharts', 'React Router', 'PostCSS'],
    tags: ['Frontend', 'Dashboard', 'SPA', 'UI/UX', 'Responsive', 'Dark Mode'],
    demoUrl: 'https://dashboard-reactjs-app.netlify.app/dashboard',
    repoUrl: 'https://github.com/iskren201',
    featured: true,
    category: 'web',
    status: 'completed',
    year: 2025,
    duration: '1 weeks',
    challenges: [
      'Converting Angular project to React while maintaining exact design',
      'Implementing responsive sidebar with drawer functionality on mobile',
      'Configuring ApexCharts with proper TypeScript types and dark mode support',
      'Setting up Vite with ES modules for Tailwind and PostCSS configs',
      'Ensuring perfect Netlify deployment with SPA routing'
    ],
    achievements: [
      'Built complete dashboard with 5 fully functional pages',
      'Achieved 100% responsive design across all devices',
      'Implemented dark/light theme with localStorage persistence',
      'Created reusable React components with TypeScript',
      'Optimized for fast builds and deployment with Vite',
      'Zero linter errors with strict TypeScript configuration',
      'Ready for instant Netlify deployment with proper redirects'
    ]
  },
  {
    id: 5,
    title: 'Crypto & FX Radar',
    description: 'Real-time cryptocurrency and forex market dashboard with portfolio tracking, price alerts, and backtesting capabilities.',
    longDescription: 'A modern, full-featured financial dashboard built with React 19 and TypeScript. Features real-time price updates from CoinGecko and ExchangeRate APIs, comprehensive portfolio management with P&L calculations, intelligent price alerts with browser notifications, and advanced backtesting tools for trading strategies (MA, RSI, MACD, Bollinger Bands). Includes interactive charts, dark/light theme support, responsive design, and smooth animations for live price changes.',
    image: '/images/crypto-fx-radar.png',
    technologies: [
      'React 19.1.1',
      'TypeScript 5.9.3',
      'Vite 7.1.7',
      'Tailwind CSS 3.4.0',
      'React Router 7.9.5',
      'Zustand 5.0.8',
      'Recharts 3.3.0',
      'Axios 1.13.2',
      'Lucide React',
      'CoinGecko API',
      'ExchangeRate API'
    ],
    tags: [
      'Cryptocurrency',
      'Forex',
      'Real-time',
      'Portfolio',
      'Trading',
      'Charts',
      'Financial Dashboard',
      'Price Alerts',
      'Backtesting'
    ],
    demoUrl: 'https://crypto-fx-radar.netlify.app/',
    repoUrl: '',
    featured: true,
    category: 'fullstack',
    status: 'completed',
    year: 2025,
    duration: '2-3 weeks',
    challenges: [
      'Implementing real-time price updates with visual indicators and animations',
      'Handling API rate limiting (CoinGecko free tier: 10-50 calls/minute) with retry logic and caching',
      'Building complex backtesting calculations for multiple trading strategies',
      'Creating responsive design with dark/light theme support across all components',
      'Managing state persistence with Zustand and localStorage',
      'Optimizing performance with proper caching and avoiding duplicate API calls'
    ],
    achievements: [
      'Successfully integrated real-time price updates with smooth animations and visual feedback',
      'Implemented comprehensive portfolio tracking with automatic P&L calculations',
      'Built intelligent price alert system with browser notifications and click-to-navigate functionality',
      'Created advanced backtesting engine supporting 4+ trading strategies with detailed performance metrics',
      'Achieved responsive design with mobile-friendly layout and adaptive navigation',
      'Implemented robust error handling with retry mechanisms and fallback to cached data',
      'Created modern UI with gradient backgrounds, animations, and interactive charts',
      'Ensured data persistence across sessions using localStorage with proper error handling'
    ]
  },


];
