'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserTie, FaChalkboardTeacher } from 'react-icons/fa';

const Education = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const education = [
    {
      degree: "Bachelor of Science, Microbial Biology",
      institution: "University of California, Berkeley",
      period: "May 2024",
      icon: <FaGraduationCap size={22} />,
      details: [
        "GPA: 3.814/4.0",
        "Relevant Coursework: Bacterial Pathogen, Techniques in Light Microscopy, Physiology & Biochemistry of Plants"
      ],
      color: "from-[var(--primary)] to-[var(--accent)]"
    },
    {
      degree: "Bioconjugation Intern",
      institution: "Biotium, Fremont, CA",
      period: "May 2022 - August 2022",
      icon: <FaUserTie size={22} />,
      details: [
        "Executed 3-4 high-yield bioconjugation production by strategically operating multiple productions simultaneously",
        "Adapted and mastered the workflow within 2-weeks and subsequently trained 2 fellow interns",
        "Recorded all bioconjugation production details, procedures, and results to ensure reproducibility and accuracy",
        "Actively participated in weekly company meetings to enhance production processes"
      ],
      color: "from-[var(--secondary)] to-[var(--primary)]"
    },
    {
      degree: "Academic Intern",
      institution: "Introductory Computer Science Course, UC Berkeley",
      period: "June 2021 - May 2022",
      icon: <FaChalkboardTeacher size={22} />,
      details: [
        "Mentored 20+ students in 4hr coding lab section, providing guidance on assignments and 15+ projects",
        "Expertly troubleshooted coding errors students faced, from software installations to code debugging",
        "Taught Python coding methodology to students, helping them understand and complete coding assignments"
      ],
      color: "from-[var(--accent)] to-[var(--secondary)]"
    }
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
      <div className="absolute top-40 right-0 -rotate-45 w-72 h-72 bg-[var(--primary)] opacity-5 rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 mb-3 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 text-[var(--primary)] font-semibold rounded-full text-sm shadow-sm">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading-color)] mb-4">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-[var(--text-color)] text-lg">
            Academic journey and professional experiences in microbiology and related fields
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] opacity-30 ml-6 md:ml-8"></div>
          
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative mb-12 last:mb-0 ml-14 md:ml-16"
            >
              {/* Timeline node */}
              <div 
                className={`absolute left-[-56px] md:left-[-64px] top-0 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md bg-gradient-to-br ${item.color}`}
              >
                {item.icon}
              </div>
              
              <div className="card card-hover relative backdrop-blur-sm">
                {/* Decorative connector */}
                <div className="absolute top-4 left-[-12px] w-3 h-3 rotate-45 bg-white dark:bg-gray-800 border-l border-t border-gray-100 dark:border-gray-700"></div>
                
                <h3 className="text-xl font-bold text-[var(--primary)] mb-1">{item.degree}</h3>
                <p className="text-lg font-medium text-[var(--secondary)] mb-1">{item.institution}</p>
                <p className="text-[var(--text-color)] mb-4 inline-flex items-center">
                  <span className="w-4 h-0.5 bg-[var(--accent)] mr-2"></span>
                  {item.period}
                </p>
                
                <ul className="space-y-2 text-[var(--text-color)]">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 