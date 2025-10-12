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
  category: 'web' | 'mobile' | 'backend' | 'fullstack' | 'design';
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
  title: 'NestJS Backend API',
  description: 'Coming soon: scalable NestJS API with clean architecture and strong typing.',
  longDescription: 'Planned backend service built with NestJS and TypeScript, focusing on modular architecture, validation, and secure authentication. Targeting robust DX, clear layering, and production-ready tooling.',
  image: '',
  technologies: ['NestJS', 'TypeORM', 'PostgreSQL', 'TypeScript', 'JWT', 'Swagger', 'Docker', 'Redis'],
  tags: ['Backend', 'API', 'Microservices', 'Database'],
  demoUrl: '',
  repoUrl: '',
  featured: false,
  category: 'backend',
  status: 'planned',
  year: 2025,
  duration: 'TBA',
  challenges: [],
  achievements: []
},
{
  id: 5,
  title: 'Portfolio Website',
  description: 'Coming soon: refreshed portfolio with advanced animations and performance optimizations.',
  longDescription: 'Planned next iteration of the personal portfolio with refined motion design, improved accessibility, and streamlined navigation. Focus on clean code, performance, and consistent theming.',
  image: '',
  technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Vite', 'React Router', 'React Helmet'],
  tags: ['Portfolio', 'Animation', 'Responsive', 'Modern Design'],
  demoUrl: '',
  repoUrl: '',
  featured: true,
  category: 'web',
  status: 'planned',
  year: 2025,
  duration: 'TBA',
  challenges: [],
  achievements: []
},
{
  id: 6,
  title: 'University Projects',
  description: 'Coming soon: curated archive of academic projects with notes and code samples.',
  longDescription: 'Planned collection of selected university projects presented with context, learnings, and code refactors to modern standards.',
  image: '',
  technologies: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'MongoDB', 'Bootstrap', 'jQuery'],
  tags: ['Learning', 'Academic', 'Progressive', 'Diverse'],
  demoUrl: '',
  repoUrl: '',
  featured: false,
  category: 'web',
  status: 'planned',
  year: 2025,
  duration: 'TBA',
  challenges: [],
  achievements: []
},
{
  id: 7,
  title: 'E-commerce Mobile App',
  description: 'Coming soon: cross-platform e-commerce app with modern UI/UX.',
  longDescription: 'Planned React Native app with authentication, product catalog, cart, and checkout flow. Emphasis on smooth UX, offline-ready patterns, and modular architecture.',
  image: '',
  technologies: ['React Native', 'Redux', 'Firebase', 'Stripe', 'Push Notifications', 'AsyncStorage', 'React Navigation'],
  tags: ['Mobile', 'E-commerce', 'Cross-platform', 'Offline'],
  demoUrl: '',
  repoUrl: '',
  featured: true,
  category: 'mobile',
  status: 'planned',
  year: 2025,
  duration: 'TBA',
  challenges: [],
  achievements: []
},
{
  id: 8,
  title: 'AI-Powered Chat Application',
  description: 'Coming soon: real-time chat with AI-assisted features and moderation.',
  longDescription: 'Planned full-stack chat platform combining real-time messaging with AI suggestions and safety tooling. Designed for responsiveness, reliability, and clear UX.',
  image: '',
  technologies: ['React', 'NodeJS', 'Socket.io', 'OpenAI API', 'MongoDB', 'Redis', 'Docker', 'AWS'],
  tags: ['AI', 'Real-time', 'Chat', 'Machine Learning'],
  demoUrl: '',
  repoUrl: '',
  featured: true,
  category: 'fullstack',
  status: 'planned',
  year: 2025,
  duration: 'TBA',
  challenges: [],
  achievements: []
},
{
  id: 9,
  title: 'Task Management System',
  description: 'Coming soon: team-oriented task manager with real-time collaboration.',
  longDescription: 'Planned web app for projects, tasks, and reporting with drag-and-drop and live updates. Focus on clarity, speed, and maintainable data flows.',
  image: '',
  technologies: ['Vue.js', 'Express', 'MySQL', 'Socket.io', 'Chart.js', 'Docker', 'JWT', 'Multer'],
  tags: ['Productivity', 'Collaboration', 'Project Management', 'Team Work'],
  demoUrl: '',
  repoUrl: '',
  featured: false,
  category: 'web',
  status: 'planned',
  year: 2025,
  duration: 'TBA',
  challenges: [],
  achievements: []
},
{
  id: 10,
  title: 'Weather Dashboard',
  description: 'Coming soon: interactive weather dashboard with maps and forecasts.',
  longDescription: 'Planned PWA for real-time weather, multi-day forecasts, and map layers. Targeting fast loads, offline support, and accessible data visualizations.',
  image: '',
  technologies: ['React', 'TypeScript', 'Weather API', 'Mapbox', 'Chart.js', 'PWA', 'Service Workers'],
  tags: ['Weather', 'Real-time', 'Maps', 'PWA'],
  demoUrl: '',
  repoUrl: '',
  featured: false,
  category: 'web',
  status: 'planned',
  year: 2025,
  duration: 'TBA',
  challenges: [],
  achievements: []
}

];
