import React from 'react';
import { motion } from 'framer-motion';
import ImageWithSkeleton from './ImageWithSkeleton';
import aboutMeImg from '../assets/images/about-me.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-2xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithSkeleton 
                src={aboutMeImg} 
                alt="Pankaj Sharma - Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-text/10 group-hover:bg-transparent transition-colors duration-500 z-20"></div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text mb-6 relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent/70"></span>
            </h2>
            
            <div className="space-y-6 text-text/80 text-lg font-light leading-relaxed mt-6">
              <p>
                With over <strong className="text-text font-medium">7 years of experience</strong> in Salesforce development, I specialize in designing scalable solutions and evaluating complex requirements to deliver successful projects.
              </p>
              <p>
                My expertise spans both development and configuration. I am deeply experienced in APEX, Triggers, Data Migration, Lightning Web Components (LWC), and integrating external web systems with Salesforce using REST web services.
              </p>
              <p>
                I thrive in roles where I can guide developers, ensure technical excellence, and maintain the highest level of security and performance in Salesforce implementations.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="glass-panel p-6 border-l-4 border-l-accent">
                <h3 className="text-3xl font-serif font-bold text-text mb-1">7+</h3>
                <p className="text-accent text-sm uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="glass-panel p-6 border-l-4 border-l-accent">
                <h3 className="text-3xl font-serif font-bold text-text mb-1">12</h3>
                <p className="text-accent text-sm uppercase tracking-wider">Certifications</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
