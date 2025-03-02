'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const contactItems = [
    {
      icon: <MdEmail size={22} />,
      label: "Email",
      value: "moniwang9242@gmail.com",
      link: "mailto:moniwang9242@gmail.com",
      gradient: "from-[var(--secondary)] to-[var(--accent)]"
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      label: "Location",
      value: "Lafayette, CA",
      link: null,
      gradient: "from-[var(--accent)] to-[var(--highlight)]"
    },
    {
      icon: <FaPhone size={20} />,
      label: "Phone",
      value: "(925) 878-2788",
      link: "tel:9258782788",
      gradient: "from-[var(--highlight)] to-[var(--secondary)]"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--secondary)] opacity-5 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--highlight)] opacity-5 rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 mb-3 bg-[var(--secondary)]/10 dark:bg-[var(--secondary)]/20 rounded-full text-[var(--secondary)] font-semibold text-sm shadow-sm">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading-color)] mb-4">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary)] mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-[var(--text-color)] text-lg">
            Ready to discuss potential opportunities and collaborations? Reach out through any of these channels
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="card card-hover backdrop-blur-sm h-full border border-[var(--secondary)]/10">
              <h3 className="text-xl font-bold mb-8 text-[var(--secondary)] pb-2 border-b border-gray-100 dark:border-gray-700">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shadow-sm mr-4 flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--heading-color)]">{item.label}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-[var(--text-color)] hover:text-[var(--secondary)] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[var(--text-color)]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-700 text-center">
                <h4 className="font-semibold mb-4 text-[var(--heading-color)]">
                  Connect on LinkedIn
                </h4>
                <a 
                  href="https://www.linkedin.com/in/monicaqwang/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--secondary)] hover:bg-[var(--accent)] text-white rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <FaLinkedin size={18} />
                  <span>Monica Wang</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 