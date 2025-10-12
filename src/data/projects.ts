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
    title: 'Parts Trading Platform',
    description: 'Full-stack platform for buying and selling parts with ReactJS frontend and NodeJS backend.',
    longDescription: 'A comprehensive e-commerce platform designed for automotive parts trading. The application features a modern ReactJS frontend with real-time updates, secure user authentication, advanced search and filtering capabilities, and a robust NodeJS backend with PostgreSQL database integration. The platform includes features like user profiles, product management, secure payment processing, and real-time messaging between buyers and sellers.',
    image: '/api/placeholder/600/400',
    technologies: ['ReactJS', 'NodeJS', 'Express', 'PostgreSQL', 'TypeORM', 'JWT', 'Socket.io', 'Stripe API'],
    tags: ['E-commerce', 'Full-stack', 'Real-time', 'Authentication'],
    demoUrl: 'https://parts-trading-demo.com',
    repoUrl: 'https://github.com/iskren/parts-trading-platform',
    featured: true,
    category: 'fullstack',
    status: 'completed',
    year: 2024,
    duration: '3 months',
    challenges: ['Implementing real-time chat functionality', 'Optimizing database queries for large datasets', 'Creating responsive design for mobile devices'],
    achievements: ['Reduced page load time by 40%', 'Achieved 99.9% uptime', 'Processed over 1000 transactions successfully']
  },
  {
    id: 2,
    title: 'Figma Design Implementation',
    description: 'Pixel-perfect implementation of complex Figma designs using modern ReactJS and TypeScript.',
    longDescription: 'Transformed complex Figma designs into fully functional web applications with pixel-perfect accuracy. This project involved working closely with UI/UX designers to ensure every detail from the design system was properly implemented. The implementation includes responsive layouts, interactive components, smooth animations, and accessibility features that meet WCAG guidelines.',
    image: '/api/placeholder/600/400',
    technologies: ['ReactJS', 'TypeScript', 'CSS/SCSS', 'Figma', 'Storybook', 'Jest', 'Cypress'],
    tags: ['UI/UX', 'Design System', 'Responsive', 'Accessibility'],
    demoUrl: 'https://figma-implementation-demo.com',
    repoUrl: 'https://github.com/iskren/figma-implementation',
    featured: true,
    category: 'web',
    status: 'completed',
    year: 2024,
    duration: '2 months',
    challenges: ['Converting complex animations from Figma', 'Ensuring cross-browser compatibility', 'Maintaining design consistency across components'],
    achievements: ['100% design fidelity achieved', 'Improved accessibility score to 95%', 'Reduced development time by 30%']
  },
  {
    id: 3,
    title: 'AngularJS Dashboard',
    description: 'Interactive dashboard application built with AngularJS for data visualization and management.',
    longDescription: 'A comprehensive data visualization dashboard built with AngularJS that provides real-time insights into business metrics. The dashboard features interactive charts, customizable widgets, user role management, and data export capabilities. It integrates with multiple APIs to provide a unified view of business operations and performance metrics.',
    image: '/api/placeholder/600/400',
    technologies: ['AngularJS', 'JavaScript', 'D3.js', 'Chart.js', 'CSS', 'REST API', 'WebSocket'],
    tags: ['Data Visualization', 'Dashboard', 'Real-time', 'Analytics'],
    demoUrl: 'https://angular-dashboard-demo.com',
    repoUrl: 'https://github.com/iskren/angular-dashboard',
    featured: false,
    category: 'web',
    status: 'completed',
    year: 2023,
    duration: '4 months',
    challenges: ['Handling large datasets efficiently', 'Creating responsive charts', 'Implementing real-time data updates'],
    achievements: ['Processed 1M+ data points', 'Achieved 60fps animations', 'Reduced data loading time by 50%']
  },
  {
    id: 4,
    title: 'NestJS Backend API',
    description: 'Robust backend API built with NestJS and TypeORM for PostgreSQL database management.',
    longDescription: 'A scalable and maintainable backend API built with NestJS framework. The API includes comprehensive authentication and authorization, data validation, error handling, logging, and monitoring. It features microservices architecture, database migrations, automated testing, and comprehensive API documentation. The system is designed to handle high traffic and provides excellent performance.',
    image: '/api/placeholder/600/400',
    technologies: ['NestJS', 'TypeORM', 'PostgreSQL', 'TypeScript', 'JWT', 'Swagger', 'Docker', 'Redis'],
    tags: ['Backend', 'API', 'Microservices', 'Database'],
    demoUrl: 'https://nestjs-api-docs.com',
    repoUrl: 'https://github.com/iskren/nestjs-backend-api',
    featured: false,
    category: 'backend',
    status: 'completed',
    year: 2023,
    duration: '5 months',
    challenges: ['Designing scalable microservices architecture', 'Implementing complex database relationships', 'Ensuring API security and performance'],
    achievements: ['Handled 10K+ concurrent users', 'Achieved 99.99% uptime', 'Reduced API response time by 60%']
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website with smooth animations, custom cursor effects, and mobile-first design.',
    longDescription: 'A cutting-edge portfolio website showcasing modern web development techniques. The site features smooth animations powered by Framer Motion, custom cursor effects, glassmorphism design elements, and a mobile-first responsive approach. It includes interactive sections, smooth scrolling, dark/light theme toggle, and optimized performance for fast loading times.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Vite', 'React Router', 'React Helmet'],
    tags: ['Portfolio', 'Animation', 'Responsive', 'Modern Design'],
    demoUrl: 'https://iskren-portfolio.com',
    repoUrl: 'https://github.com/iskren/portfolio-website',
    featured: true,
    category: 'web',
    status: 'completed',
    year: 2024,
    duration: '1 month',
    challenges: ['Creating smooth animations without performance impact', 'Implementing custom cursor effects', 'Optimizing for mobile devices'],
    achievements: ['Achieved 100% Lighthouse score', 'Reduced bundle size by 25%', 'Implemented smooth 60fps animations']
  },
  {
    id: 6,
    title: 'University Projects',
    description: 'Various web development projects created during university studies, showcasing progression in programming skills.',
    longDescription: 'A collection of web development projects created during university studies, demonstrating the evolution of programming skills and understanding of modern web technologies. These projects include basic HTML/CSS websites, JavaScript applications, ReactJS projects, and full-stack applications. Each project represents a milestone in the learning journey and showcases the progression from basic concepts to advanced implementations.',
    image: '/api/placeholder/600/400',
    technologies: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'MongoDB', 'Bootstrap', 'jQuery'],
    tags: ['Learning', 'Academic', 'Progressive', 'Diverse'],
    demoUrl: 'https://university-projects-demo.com',
    repoUrl: 'https://github.com/iskren/university-projects',
    featured: false,
    category: 'web',
    status: 'completed',
    year: 2022,
    duration: '2 years',
    challenges: ['Learning new technologies', 'Balancing academic requirements', 'Building projects from scratch'],
    achievements: ['Completed 15+ projects', 'Mastered multiple technologies', 'Achieved academic excellence']
  },
  {
    id: 7,
    title: 'E-commerce Mobile App',
    description: 'Cross-platform mobile application for e-commerce with React Native and modern UI/UX design.',
    longDescription: 'A feature-rich mobile e-commerce application built with React Native for both iOS and Android platforms. The app includes user authentication, product catalog, shopping cart, payment integration, push notifications, and offline functionality. The design follows modern mobile UI/UX principles with smooth animations and intuitive navigation.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'Redux', 'Firebase', 'Stripe', 'Push Notifications', 'AsyncStorage', 'React Navigation'],
    tags: ['Mobile', 'E-commerce', 'Cross-platform', 'Offline'],
    demoUrl: 'https://mobile-app-demo.com',
    repoUrl: 'https://github.com/iskren/ecommerce-mobile-app',
    featured: true,
    category: 'mobile',
    status: 'in-progress',
    year: 2024,
    duration: '4 months',
    challenges: ['Implementing offline functionality', 'Optimizing for different screen sizes', 'Integrating payment systems'],
    achievements: ['Achieved 4.8 app store rating', 'Reduced app size by 30%', 'Implemented smooth animations']
  },
  {
    id: 8,
    title: 'AI-Powered Chat Application',
    description: 'Real-time chat application with AI integration for intelligent responses and content moderation.',
    longDescription: 'An innovative chat application that combines real-time messaging with AI capabilities. The app features intelligent response suggestions, content moderation, sentiment analysis, and automated customer support. Built with modern web technologies, it provides a seamless user experience with advanced AI features that enhance communication and user engagement.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'NodeJS', 'Socket.io', 'OpenAI API', 'MongoDB', 'Redis', 'Docker', 'AWS'],
    tags: ['AI', 'Real-time', 'Chat', 'Machine Learning'],
    demoUrl: 'https://ai-chat-demo.com',
    repoUrl: 'https://github.com/iskren/ai-chat-app',
    featured: true,
    category: 'fullstack',
    status: 'in-progress',
    year: 2024,
    duration: '3 months',
    challenges: ['Integrating AI APIs efficiently', 'Handling real-time data processing', 'Ensuring data privacy and security'],
    achievements: ['Reduced response time by 70%', 'Implemented advanced AI features', 'Achieved 99.5% uptime']
  },
  {
    id: 9,
    title: 'Task Management System',
    description: 'Comprehensive task management system with team collaboration features and project tracking.',
    longDescription: 'A full-featured task management system designed for teams and individuals. The application includes project creation, task assignment, team collaboration, time tracking, progress monitoring, and detailed reporting. It features a clean, intuitive interface with drag-and-drop functionality, real-time updates, and integration with popular productivity tools.',
    image: '/api/placeholder/600/400',
    technologies: ['Vue.js', 'Express', 'MySQL', 'Socket.io', 'Chart.js', 'Docker', 'JWT', 'Multer'],
    tags: ['Productivity', 'Collaboration', 'Project Management', 'Team Work'],
    demoUrl: 'https://task-management-demo.com',
    repoUrl: 'https://github.com/iskren/task-management-system',
    featured: false,
    category: 'web',
    status: 'completed',
    year: 2023,
    duration: '3 months',
    challenges: ['Implementing real-time collaboration', 'Creating intuitive drag-and-drop interface', 'Optimizing database performance'],
    achievements: ['Improved team productivity by 40%', 'Reduced project completion time', 'Achieved high user satisfaction']
  },
  {
    id: 10,
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with real-time data, forecasts, and location-based services.',
    longDescription: 'A comprehensive weather application that provides real-time weather data, detailed forecasts, and location-based services. The dashboard features interactive maps, weather charts, alerts, and personalized recommendations. Built with modern web technologies, it offers a smooth user experience with accurate weather information and beautiful visualizations.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'TypeScript', 'Weather API', 'Mapbox', 'Chart.js', 'PWA', 'Service Workers'],
    tags: ['Weather', 'Real-time', 'Maps', 'PWA'],
    demoUrl: 'https://weather-dashboard-demo.com',
    repoUrl: 'https://github.com/iskren/weather-dashboard',
    featured: false,
    category: 'web',
    status: 'completed',
    year: 2023,
    duration: '2 months',
    challenges: ['Integrating multiple weather APIs', 'Creating responsive weather visualizations', 'Implementing offline functionality'],
    achievements: ['Achieved 99% accuracy in forecasts', 'Reduced loading time by 50%', 'Implemented PWA features']
  }
];
