import React from 'react';
import { motion } from 'framer-motion';
import ImageWithSkeleton from './ImageWithSkeleton';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    'Salesforce Certified Platform Developer I',
    'Salesforce Certified Platform Developer II',
    'Salesforce Certified Platform Administrator',
    'Salesforce Certified Platform App Builder',
    'Salesforce Certified Sales Cloud Consultant',
    'Salesforce Certified Experience Cloud Consultant',
    'Salesforce Certified Service Cloud Consultant',
    'Salesforce Certified JavaScript Developer',
    'Salesforce Certified Platform Foundations',
    'Salesforce Certified Data Cloud Consultant',
    'Salesforce Certified AI Associate',
    'Salesforce Certified Agentforce Specialist'
  ];

  const getImageUrl = (index: number) => {
    return new URL(`../assets/certifications/${index + 1}.png`, import.meta.url).href;
  };

  return (
    <section id="certifications" className="py-32 relative bg-background overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[50vw] h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
      <div className="absolute -left-32 top-1/3 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-primary/40 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border border-accent/10"
          >
            <Award className="w-10 h-10 text-accent" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Recognized <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary italic">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#E0E0E0] text-lg font-light leading-relaxed"
          >
            Showcasing continuous learning and officially verified expertise across the global Salesforce ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20 pt-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 4) * 0.1, duration: 0.6, type: 'spring', stiffness: 60 }}
              className="group relative bg-[#1F1614]/80 backdrop-blur-xl rounded-3xl p-6 pt-16 flex flex-col items-center text-center border border-white/5 hover:border-accent/40 shadow-xl hover:shadow-[0_20px_40px_rgba(62,39,35,0.4)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Floating Badge popping out of the card */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 z-20">
                {/* Dynamic Glowing background directly tied to hover */}
                <div className="absolute inset-0 bg-accent rounded-full filter blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 scale-110"></div>
                
                {/* The actual Image wrapper */}
                <div className="relative w-full h-full bg-white rounded-[2.5rem] p-2 ring-4 ring-black shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:ring-accent/50 group-hover:scale-110 transition-all duration-500 overflow-hidden">
                  <ImageWithSkeleton 
                    src={getImageUrl(index)} 
                    alt={cert}
                    className="!object-contain" // Force contain so badges aren't cropped
                    skeletonClassName="bg-gray-100"
                  />
                </div>
              </div>

              {/* Sub-Card Content */}
              <div className="mt-8 flex-1 flex flex-col justify-center w-full z-10">
                <h3 className="text-[#E0E0E0] text-lg font-medium leading-relaxed group-hover:text-white transition-colors duration-300 font-serif px-2">
                  {cert}
                </h3>
              </div>

              {/* Expanding Bottom line decorator */}
              <div className="w-8 h-1 bg-accent/20 group-hover:bg-accent group-hover:w-3/4 transition-all duration-500 mt-8 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
