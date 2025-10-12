# 🚀 Modern Portfolio Website

A stunning, animated portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a custom cursor, smooth animations, and mobile-first responsive design.

## ✨ Features

- **Modern Design**: Clean, minimal dark theme with glassmorphism effects
- **Custom Cursor**: Interactive cursor with dot and ring layers that respond to hover states
- **Smooth Animations**: Framer Motion powered animations with scroll-triggered effects
- **Mobile-First**: Fully responsive design that works perfectly on all devices
- **Performance Optimized**: Fast loading with optimized animations and lazy loading
- **Accessibility**: Respects `prefers-reduced-motion` and includes proper ARIA labels
- **SEO Ready**: Meta tags, Open Graph, and Twitter Card support

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling with custom animations
- **Framer Motion** for smooth animations and transitions
- **React Router** for navigation
- **React Helmet Async** for SEO meta tags
- **PostCSS** with Autoprefixer

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone Portfolio-2025
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar with glassmorphism
│   ├── Hero.tsx        # Hero section with animated text
│   ├── Projects.tsx    # Projects showcase grid
│   ├── About.tsx       # About section with skills
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer with links
├── hooks/              # Custom React hooks
│   └── useCustomCursor.ts  # Custom cursor logic
├── lib/                # Utility functions
│   └── animations.ts   # Framer Motion animation variants
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors and Theme
The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '-primary',
      secondary: '-secundary',
    }
  }
}
```

### Animations
Animation variants are defined in `src/lib/animations.ts` and can be easily customized or extended.

### Content
Update the content in each component file:
- Personal information in `Hero.tsx`
- Projects data in `Projects.tsx`
- About information in `About.tsx`
- Contact details in `Contact.tsx`

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Single column layout with hamburger menu
- **Tablet**: Two-column layout for projects and about sections
- **Desktop**: Full multi-column layout with enhanced animations

## ♿ Accessibility

- Respects `prefers-reduced-motion` for users who prefer less motion
- Proper ARIA labels and semantic HTML
- Keyboard navigation support
- High contrast ratios for text readability

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to Netlify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Contact

Iskren Iliev - iskren201@gmail.com
