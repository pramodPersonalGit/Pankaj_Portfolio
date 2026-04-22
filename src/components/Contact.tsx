import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const Contact: React.FC = () => {
  const { theme } = useTheme();
  return (
    <section id="contact" className="py-32 relative bg-background overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full filter blur-[100px] opacity-20 ${
          theme === 'dark' ? 'mix-blend-screen' : 'mix-blend-multiply'
        }`}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-secondary/20 backdrop-blur-lg border border-accent/10 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden">
          <div className="flex flex-col items-center text-center">
            
            {/* Contact Info */}
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif font-bold text-text mb-6 transition-colors duration-300"
              >
                Let's Work Together
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-text/70 text-xl font-light mb-12 transition-colors duration-300"
              >
                I'm currently available for new opportunities. Whether you have a question or just want to say hi, feel free to reach out through any of the platforms below!
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-x-4 md:gap-x-8 w-full">
                <motion.a 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  href="mailto:pv51350@gmail.com" 
                  className="flex flex-col items-center space-y-4 text-text/80 hover:text-accent transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-primary/40 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-xl border border-text/5 group-hover:border-accent group-hover:-translate-y-1">
                    <Mail size={28} />
                  </div>
                  <span className="font-medium tracking-wide break-all sm:break-normal text-sm md:text-base">pv51350@gmail.com</span>
                </motion.a>
                
                <motion.a 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  href="https://www.linkedin.com/in/pankaj-sharma-68b378180/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEJdBAd6kT7quqiJPak5%2FKQ%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center space-y-4 text-text/80 hover:text-accent transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-primary/40 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-xl border border-text/5 group-hover:border-accent group-hover:-translate-y-1">
                    <LinkedInIcon size={28} />
                  </div>
                  <span className="font-medium tracking-wide text-sm md:text-base">LinkedIn</span>
                </motion.a>

                <motion.a 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  href="https://github.com/pankaj-tech07" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center space-y-4 text-text/80 hover:text-accent transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-primary/40 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-xl border border-text/5 group-hover:border-accent group-hover:-translate-y-1">
                    <GitHubIcon size={28} />
                  </div>
                  <span className="font-medium tracking-wide text-sm md:text-base">GitHub</span>
                </motion.a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
