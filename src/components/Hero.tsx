'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D5B11] via-[#187C19] to-[#8DC71E] dark:to-gray-900 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/subtle-nature-pattern.svg')] bg-repeat opacity-10 z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col max-w-xl w-full"
          >
            <div className="inline-flex px-3 py-1.5 mb-5 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm self-start">
              <span className="text-[var(--primary)] font-semibold text-sm">Microbial Biology Graduate</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-6 text-white">
              <span className="block mb-2">Monica Wang</span>
              <span className="text-3xl sm:text-4xl font-medium text-white/90">UC Berkeley</span>
            </h1>
            
            <p className="text-lg text-white mb-8 backdrop-blur-sm bg-black/10 p-4 rounded-lg border border-white/10">
              With my fast-learning and proactive character, drive to exceed baseline expectations, and 2+ years of experience in bioconjugation and research, I am a valuable candidate ready to make an impact.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn-primary backdrop-blur-sm shadow-lg">
                Get in Touch
              </a>
              <a href="#research" className="backdrop-blur-sm bg-white/20 text-white border border-white/30 py-2.5 px-6 rounded-md hover:bg-white/30 transition duration-300 font-medium text-sm shadow-lg">
                View Research
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/monicaqwang/" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:moniwang9242@gmail.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all">
                <FaEnvelope size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl shadow-xl border-4 border-white/30">
              {/* Replace with actual profile image */}
              <div className="w-full h-full bg-gradient-to-br from-[var(--secondary)] to-[var(--highlight)] flex items-center justify-center text-white text-6xl font-bold">
                <div className="relative z-10">MW</div>
              </div>
              {/* Uncomment when you have an image
              <Image 
                src="/images/profile.jpg" 
                alt="Monica Wang - Microbiology Researcher" 
                fill
                className="object-cover"
              />
              */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-20"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-white text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
          >
            <span className="mb-2">Scroll to learn more</span>
            <FaArrowDown className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 