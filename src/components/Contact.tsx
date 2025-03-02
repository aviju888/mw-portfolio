'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    console.log(formData);
    setSubmitted(true);
    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <div className="card card-hover backdrop-blur-sm h-full border border-[var(--secondary)]/10">
              <h3 className="text-xl font-bold mb-8 text-[var(--secondary)] pb-2 border-b border-gray-100 dark:border-gray-700">
                Get In Touch
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] text-white flex items-center justify-center shadow-sm mr-4">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--heading-color)] mb-1">Email</h4>
                    <a 
                      href="mailto:moniwang9242@gmail.com" 
                      className="text-[var(--text-color)] hover:text-[var(--secondary)] transition-colors"
                    >
                      moniwang9242@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--highlight)] text-white flex items-center justify-center shadow-sm mr-4">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--heading-color)] mb-1">Location</h4>
                    <p className="text-[var(--text-color)]">Lafayette, CA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--highlight)] to-[var(--secondary)] text-white flex items-center justify-center shadow-sm mr-4">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--heading-color)] mb-1">Phone</h4>
                    <a 
                      href="tel:9258782788" 
                      className="text-[var(--text-color)] hover:text-[var(--secondary)] transition-colors"
                    >
                      (925) 878-2788
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-700">
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
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:col-span-3"
          >
            <div className="card card-hover backdrop-blur-sm border border-[var(--secondary)]/10">
              <h3 className="text-xl font-bold mb-8 text-[var(--secondary)] pb-2 border-b border-gray-100 dark:border-gray-700">
                Send a Message
              </h3>
              
              {submitted ? (
                <div className="bg-[var(--secondary)]/10 dark:bg-[var(--secondary)]/20 border border-[var(--secondary)]/20 dark:border-[var(--secondary)]/30 text-[var(--secondary)] px-5 py-4 rounded-lg mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[var(--secondary)]/20 dark:bg-[var(--secondary)]/30 text-[var(--secondary)] rounded-full flex items-center justify-center mr-3">
                    <FaEnvelope size={14} />
                  </span>
                  <p>Thank you for your message! I&apos;ll get back to you soon.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-[var(--text-color)] font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent bg-gray-50 dark:bg-gray-800 text-[var(--text-color)]"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-[var(--text-color)] font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent bg-gray-50 dark:bg-gray-800 text-[var(--text-color)]"
                      placeholder="Your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-[var(--text-color)] font-medium">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent bg-gray-50 dark:bg-gray-800 text-[var(--text-color)]"
                  >
                    <option value="">Select a subject</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-[var(--text-color)] font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent bg-gray-50 dark:bg-gray-800 text-[var(--text-color)]"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 px-6 bg-[var(--secondary)] hover:bg-[var(--accent)] text-white rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <FaPaperPlane size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 