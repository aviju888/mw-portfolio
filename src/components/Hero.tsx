'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full overflow-hidden flex items-center bg-white">
      {/* White background with subtle decorative elements */}
      <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-[var(--secondary)] opacity-5 rounded-full"></div>
      <div className="absolute bottom-1/4 left-0 w-40 sm:w-80 h-40 sm:h-80 bg-[var(--highlight)] opacity-5 rounded-full"></div>
      <div className="absolute inset-0 bg-[url('/images/subtle-nature-pattern.svg')] bg-repeat opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center justify-between gap-4 sm:gap-8 py-8 sm:py-16 md:py-24">
          {/* Photo - Appears first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex-shrink-0 mb-6 lg:mb-0 order-first lg:order-last"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl shadow-xl border-2 border-[var(--secondary)]/20">
              {/* Replace with actual profile image */}
              <div className="w-full h-full bg-gradient-to-br from-[var(--secondary)] to-[var(--highlight)] flex items-center justify-center text-white text-4xl sm:text-6xl font-bold">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-10"></div>
            </div>
          </motion.div>
          
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col max-w-xl w-full lg:order-first"
          >
            <div className="inline-flex px-3 py-1 sm:py-1.5 mb-3 sm:mb-5 bg-[var(--secondary)]/10 rounded-full shadow-sm self-start">
              {/* <span className="text-[var(--secondary)] font-semibold text-xs sm:text-sm">Microbial Biology Graduate</span> */}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-none mb-3 sm:mb-6 text-[var(--heading-color)] text-center lg:text-left">
              <span className="block mb-1 sm:mb-2">Monica Wang</span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-[var(--secondary)] block">UC Berkeley | B.S. Microbial Biology</span>
            </h1>
            
            <p className="text-sm sm:text-lg text-[var(--text-color)] mb-4 sm:mb-8 bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100">
              With my fast-learning and proactive character, drive to exceed baseline expectations, and 2+ years of experience in bioconjugation and research, I am a valuable candidate ready to make an impact.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-8 justify-center lg:justify-start">
              <a href="#contact" className="bg-[var(--secondary)] hover:bg-[var(--accent)] text-white py-2 px-4 sm:py-2.5 sm:px-6 rounded-md transition duration-300 font-medium text-xs sm:text-sm shadow-lg">
                Get in Touch
              </a>
              <a href="#research" className="bg-white border border-[var(--secondary)] text-[var(--secondary)] py-2 px-4 sm:py-2.5 sm:px-6 rounded-md hover:bg-[var(--secondary)] hover:text-white transition duration-300 font-medium text-xs sm:text-sm shadow-lg">
                View Research
              </a>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="https://www.linkedin.com/in/monicaqwang/" target="_blank" rel="noopener noreferrer" 
                 className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] hover:bg-[var(--secondary)]/20 transition-all">
                <FaLinkedin size={16} className="sm:text-xl" />
              </a>
              <a href="mailto:moniwang9242@gmail.com" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] hover:bg-[var(--secondary)]/20 transition-all">
                <FaEnvelope size={16} className="sm:text-xl" />
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center pb-4"
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-[var(--secondary)] text-xs sm:text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
          >
            <span className="mb-1 sm:mb-2">Scroll to learn more</span>
            <FaArrowDown className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 