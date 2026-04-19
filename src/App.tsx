import React, { useState, useEffect, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

// Lazy loading the sections to improve initial load performance
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Experience = React.lazy(() => import('./components/Experience'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple spinner or sleek blank fallback
  const loader = (
    <div className="h-64 flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="bg-background min-h-screen text-text selection:bg-secondary selection:text-white pb-0">
      <Navigation scrolled={scrolled} />
      
      <main>
        <Hero />
        
        {/* Wrapping lazy components in Suspense boundary */}
        <Suspense fallback={loader}>
          <About />
        </Suspense>
        
        <Suspense fallback={loader}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={loader}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={loader}>
          <Certifications />
        </Suspense>
        
        <Suspense fallback={loader}>
          <Contact />
        </Suspense>
      </main>

      <footer className="bg-[#121212] py-8 text-center text-accent">
        <p className="text-sm border-t border-secondary/30 max-w-4xl mx-auto pt-8 px-4">
          © {new Date().getFullYear()} Pankaj Sharma. All rights reserved. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
