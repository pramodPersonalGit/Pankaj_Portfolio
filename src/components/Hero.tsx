import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient / Effects */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-secondary/20 to-background"></div>
      <div className="absolute inset-0 z-0 opacity-30">
        {/* Using a subtle pattern or simple blurred circles for effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-accent text-sm md:text-base tracking-[0.3em] uppercase mb-4 block">
              Hello, I'm
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight"
          >
            Pankaj Sharma
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-xl md:text-3xl text-accent/80 font-light max-w-2xl mx-auto mb-10"
          >
            Tech Lead & Salesforce Architect
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#about"
              className="px-8 py-3 bg-accent text-background font-medium rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(215,204,200,0.3)]"
            >
              Explore My Work
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 border border-accent/50 text-accent font-medium rounded-full hover:bg-accent/10 transition-colors duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-accent/50"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
