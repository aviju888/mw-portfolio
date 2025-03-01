'use client';

import { motion } from 'framer-motion';
import { FaFlask, FaDna, FaMicroscope, FaChalkboardTeacher } from 'react-icons/fa';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-gray-900 relative">
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--highlight)] opacity-5 rounded-bl-full"></div>
      
      <div className="container-custom">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 mb-3 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 text-[var(--primary)] font-semibold rounded-full text-sm shadow-sm">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading-color)] mb-4">
            Passionate about Microbial Biology
          </h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-[var(--text-color)] text-lg">
            A dedicated researcher with experience in bioconjugation, academic research, and laboratory techniques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="card card-hover"
          >
            <div className="space-y-6">
              <p className="text-lg text-[var(--text-color)]">
                I am a recent Microbial Biology graduate from UC Berkeley with a strong background in laboratory techniques and research. My professional experiences include bioconjugation production at Biotium and academic research at the Niyogi Lab at Berkeley.
              </p>
              
              <div className="pl-4 border-l-3 border-[var(--primary)]">
                <p className="text-lg italic text-[var(--text-color)]">
                  &quot;I&apos;m known for my fast-learning and proactive character, with a drive to exceed baseline expectations.&quot;
                </p>
              </div>
              
              <p className="text-lg text-[var(--text-color)]">
                With over 2 years of experience in bioconjugation and research, I bring valuable skills and a high level of dedication to any role I take on. Located in Lafayette, CA, I&apos;m actively seeking opportunities to apply my skills in microbiology, bioconjugation, and research.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid grid-cols-2 gap-6"
          >
            {/* Card 1 */}
            <div className="card card-hover group">
              <div className="mx-auto w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                <FaMicroscope size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-center text-[var(--heading-color)]">Bioconjugation</h3>
              <p className="text-[var(--text-color)] text-center text-sm">Production experience at Biotium</p>
            </div>
            
            {/* Card 2 */}
            <div className="card card-hover group">
              <div className="mx-auto w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--highlight)] text-white rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                <FaDna size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-center text-[var(--heading-color)]">Research</h3>
              <p className="text-[var(--text-color)] text-center text-sm">Academic research experience</p>
            </div>
            
            {/* Card 3 */}
            <div className="card card-hover group">
              <div className="mx-auto w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] text-white rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                <FaFlask size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-center text-[var(--heading-color)]">Lab Techniques</h3>
              <p className="text-[var(--text-color)] text-center text-sm">Extensive lab proficiency</p>
            </div>
            
            {/* Card 4 */}
            <div className="card card-hover group">
              <div className="mx-auto w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] text-white rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                <FaChalkboardTeacher size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-center text-[var(--heading-color)]">Teaching</h3>
              <p className="text-[var(--text-color)] text-center text-sm">Experience as an academic intern</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 