import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AllProjects from './components/AllProjects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          {/* SEO Meta Tags */}
          <SEO />
          
          {/* Navigation */}
          <Navbar />
          
          {/* Main Content */}
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Projects />
                  <About />
                  <Contact />
                </>
              } />
              <Route path="/projects" element={<AllProjects />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
