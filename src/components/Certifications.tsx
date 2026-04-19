import React from 'react';
import { motion } from 'framer-motion';
import ImageWithSkeleton from './ImageWithSkeleton';

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
    <section id="certifications" className="py-32 relative bg-[#1F1614]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Certifications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#E0E0E0] text-lg font-light"
          >
            Showcasing continuous learning and verified expertise across the Salesforce ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="glass-panel p-6 flex flex-col items-center text-center group cursor-pointer hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="w-24 h-24 mb-6 rounded-[2rem] overflow-hidden bg-white p-2 ring-4 ring-transparent group-hover:ring-accent/30 transition-all duration-300">
                <ImageWithSkeleton 
                  src={getImageUrl(index)} 
                  alt={cert}
                  className=""
                  skeletonClassName="bg-white"
                />
              </div>
              <h3 className="text-[#E0E0E0] font-medium leading-snug group-hover:text-white transition-colors duration-300">
                {cert}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
