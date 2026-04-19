import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, Globe, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative bg-[#1B1B1B] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-secondary/20 backdrop-blur-lg border border-accent/10 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Info Side */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
              >
                Let's Work Together
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[#E0E0E0] text-lg font-light mb-10 max-w-sm"
              >
                I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </motion.p>

              <div className="space-y-6">
                <a href="mailto:pankaj@example.com" className="flex items-center space-x-4 text-[#E0E0E0] hover:text-white transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300 shadow-lg">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium tracking-wide">hello@pankajsharma.dev</span>
                </a>
                
                <a href="#" className="flex items-center space-x-4 text-[#E0E0E0] hover:text-white transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300 shadow-lg">
                    <Briefcase size={20} />
                  </div>
                  <span className="font-medium tracking-wide">LinkedIn Profile</span>
                </a>

                <a href="#" className="flex items-center space-x-4 text-[#E0E0E0] hover:text-white transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300 shadow-lg">
                    <Globe size={20} />
                  </div>
                  <span className="font-medium tracking-wide">GitHub Profile</span>
                </a>
              </div>
            </div>

            {/* Contact Form Side */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#1F1614]/80 p-8 rounded-2xl border border-white/5"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-accent mb-2 uppercase tracking-widest pl-1">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-transparent border-b border-accent/30 text-white pb-3 focus:outline-none focus:border-accent transition-colors duration-300 placeholder-white/20 px-1"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-accent mb-2 uppercase tracking-widest pl-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-transparent border-b border-accent/30 text-white pb-3 focus:outline-none focus:border-accent transition-colors duration-300 placeholder-white/20 px-1"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-accent mb-2 uppercase tracking-widest pl-1">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-accent/30 text-white pb-3 focus:outline-none focus:border-accent transition-colors duration-300 placeholder-white/20 resize-none px-1"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-accent text-[#1B1B1B] font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-white hover:shadow-[0_0_20px_rgba(215,204,200,0.4)] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
