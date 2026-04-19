import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background min-h-screen text-text selection:bg-secondary selection:text-white">
      <Navigation scrolled={scrolled} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <footer className="bg-[#121212] py-8 text-center text-accent">
        <p className="text-sm border-t border-secondary/30 max-w-4xl mx-auto pt-8">
          © {new Date().getFullYear()} Pankaj Sharma. All rights reserved. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
