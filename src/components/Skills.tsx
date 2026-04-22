import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cloud, Layout, Settings, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityGradient = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);

  const skillCategories = [
    {
      title: 'Salesforce Core',
      icon: <Cloud size={32} className="text-accent" />,
      bgIcon: <Cloud size={160} className="text-text/5 absolute -bottom-10 -right-10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700" />,
      skills: ['APEX', 'Triggers', 'Data Migration', 'SOQL / SOSL', 'Custom Objects']
    },
    {
      title: 'Lightning & UI',
      icon: <Layout size={32} className="text-accent" />,
      bgIcon: <Layout size={160} className="text-text/5 absolute -bottom-10 -right-10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700" />,
      skills: ['LWC', 'Aura Framework', 'Visualforce Pages', 'Lightning App Builder']
    },
    {
      title: 'Configuration',
      icon: <Settings size={32} className="text-accent" />,
      bgIcon: <Settings size={160} className="text-text/5 absolute -bottom-10 -right-10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700" />,
      skills: ['Workflows', 'Process Builder', 'Lightning Flow', 'Profiles & Roles', 'Security Settings']
    },
    {
      title: 'Web Technologies',
      icon: <Code2 size={32} className="text-accent" />,
      bgIcon: <Code2 size={160} className="text-text/5 absolute -bottom-10 -right-10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700" />,
      skills: ['JavaScript', 'HTML5', 'CSS3', 'JQuery', 'Bootstrap', 'MySQL']
    }
  ];

  return (
    <section id="skills" ref={containerRef} className="py-32 relative bg-background overflow-hidden transition-colors duration-300">
      
      {/* Animated Parallax Background Shapes */}
      <motion.div 
        style={{ y: backgroundY, opacity: opacityGradient }}
        className={`absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary rounded-full filter blur-[120px] pointer-events-none ${
          theme === 'dark' ? 'mix-blend-screen' : 'mix-blend-multiply'
        }`}
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
        className={`absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary rounded-full filter blur-[100px] opacity-30 pointer-events-none ${
          theme === 'dark' ? 'mix-blend-screen' : 'mix-blend-multiply'
        }`}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Sticky Left Header area */}
          <div className="lg:w-1/3 relative z-20 pt-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="sticky top-32"
            >
              <div className="w-16 h-1 bg-accent mb-8 rounded-full"></div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-text mb-6 leading-tight transition-colors duration-300">
                Technical<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary italic">
                  Expertise
                </span>
              </h2>
              <p className="text-text/60 text-lg font-light leading-relaxed mt-4 border-l-4 border-text/10 pl-4 py-2 transition-colors duration-300">
                A granular look at the specialized tools, languages, and frameworks I use to engineer robust CRM architectures and front-end solutions.
              </p>
            </motion.div>
          </div>

          {/* Scrolling Animated Cards side */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 z-20">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6, type: "spring", stiffness: 80 }}
                className="group relative bg-secondary/10 backdrop-blur-xl rounded-3xl p-8 border border-text/5 hover:border-accent/40 shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                {/* Huge Background Icon */}
                {category.bgIcon}

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-inner ring-1 ring-text/10 group-hover:ring-accent/50 transition-all duration-300">
                    {category.icon}
                  </div>
                  
                  <h3 className="text-2xl font-serif font-medium text-text mb-8 tracking-wide drop-shadow-md">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, i) => {
                      // Determine a percentage based on level (realistic for an architect)
                      const percentages: Record<string, string> = {
                        'APEX': '95%', 'LWC': '92%', 'Triggers': '98%', 'Lightning Flow': '94%',
                        'JavaScript': '88%', 'REST web services': '90%', 'Data Migration': '95%',
                        'SOQL / SOSL': '96%', 'Security Settings': '98%'
                      };
                      const width = percentages[skill] || '85%';
                      
                      return (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span className="font-medium text-text/80">{skill}</span>
                            <span className="text-accent font-serif">{width}</span>
                          </div>
                          <div className="h-1.5 w-full bg-text/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: width }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "circOut" }}
                              className="h-full bg-gradient-to-r from-accent to-secondary rounded-full"
                            />
                          </div>
                        </div>
                      );
                    })}
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

export default Skills;
