import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Layout, 
  Cloud,
  Server,
  Settings
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Salesforce Core',
      icon: <Cloud className="w-8 h-8 text-white" />,
      skills: ['APEX', 'Triggers', 'Data Migration', 'SOQL / SOSL', 'Custom Objects']
    },
    {
      title: 'Lightning & UI',
      icon: <Layout className="w-8 h-8 text-white" />,
      skills: ['Lightning Web Components (LWC)', 'Aura Framework', 'Visualforce Pages', 'Lightning App Builder']
    },
    {
      title: 'Configuration',
      icon: <Settings className="w-8 h-8 text-white" />,
      skills: ['Workflows & Process Builder', 'Lightning Flow', 'Profiles & Roles', 'Security Settings']
    },
    {
      title: 'Web Technologies',
      icon: <Code2 className="w-8 h-8 text-white" />,
      skills: ['JavaScript', 'HTML5', 'CSS3', 'JQuery', 'Bootstrap']
    },
    {
      title: 'Integration',
      icon: <Server className="w-8 h-8 text-white" />,
      skills: ['REST Web Services', 'External APIs', 'Composite/REST APIs']
    },
    {
      title: 'Tools & DB',
      icon: <Database className="w-8 h-8 text-white" />,
      skills: ['Force.com Data Loader', 'Data Import Wizard', 'MySQL']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-32 relative bg-[#1F1614]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#E0E0E0] text-lg font-light"
          >
            A comprehensive overview of my skills across Salesforce platforms and web technologies.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-start text-[#E0E0E0] font-light">
                    <span className="mr-3 text-accent mt-1">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
