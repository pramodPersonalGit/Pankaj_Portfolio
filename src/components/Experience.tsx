import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'HMSI',
      role: 'Tech Lead',
      cloud: 'Salesforce Automotive Cloud',
      description: 'Managed end-to-end delivery of Salesforce Automotive Cloud. Supervised development team, led integration with Cubasation and JC Mobility via Heroku, and automated SFTP file retrieval using Salesforce Data Cloud.'
    },
    {
      company: 'IndiGo',
      role: 'Developer',
      cloud: 'Salesforce Service Cloud',
      description: 'Developed service cloud implementation to manage passenger and cargo information. Integrated extensively with Avaya, Locobuzz, and external APIs for booking details.'
    },
    {
      company: 'Mahindra Holidays',
      role: 'Developer',
      cloud: 'Salesforce Service Cloud',
      description: 'Implemented case milestone tracking and built LWC screens to display payment and booking details using AWS and Talisma integrations.'
    },
    {
      company: 'Innovaccer',
      role: 'Developer',
      cloud: 'Salesforce Sales Cloud',
      description: 'Worked on Datashop healthcare integration and Salesforce Scheduler for managing appointments. Developed Apex triggers and LWC apps.'
    },
    {
      company: 'SBOSS',
      role: 'Developer',
      cloud: 'Salesforce Sales Cloud',
      description: 'Implemented lead sourcing from tablets, integration with LMS and LOS systems, and built LWC screens.'
    },
    {
      company: 'APF Teacher Development & VaxIT',
      role: 'Developer',
      cloud: 'Salesforce Sales Cloud',
      description: 'Developed custom data loader, mobile app APIs, and LWC screens to capture teacher observations and vaccination data across villages.'
    },
    {
      company: 'Honda Go-Live',
      role: 'Developer',
      cloud: 'Salesforce Sales Cloud',
      description: 'Built sales cloud implementation gathering customer queries from the iBAP mobile app and automating tasks.'
    }
  ];

  return (
    <section id="experience" className="py-32 relative bg-background transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text mb-6 transition-colors duration-300"
          >
            Professional Experience
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background transform -translate-x-[7px] md:-translate-x-1/2 mt-6 z-10 shadow-[0_0_10px_rgba(215,204,200,0.5)] transition-colors duration-300"></div>
                
                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                }`}>
                  <div className="glass-panel p-6 hover:border-accent/30 transition-colors duration-300">
                    <span className="text-accent text-sm font-medium uppercase tracking-wider mb-2 block">{exp.cloud}</span>
                    <h3 className="text-2xl font-serif font-bold text-text mb-1 transition-colors duration-300">{exp.role}</h3>
                    <h4 className="text-lg text-text/80 mb-4 transition-colors duration-300">@ {exp.company}</h4>
                    <p className="text-text/60 font-light leading-relaxed transition-colors duration-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
