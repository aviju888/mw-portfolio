'use client';

import { motion } from 'framer-motion';
import { 
  FaFlask, 
  FaCode, 
  FaChalkboardTeacher 
} from 'react-icons/fa';

const Skills = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillCategories = [
    {
      title: "Laboratory Techniques",
      icon: <FaFlask className="w-6 h-6" />,
      skills: [
        "PCR & qPCR Methods",
        "ELISA & Immunoassays",
        "Gel Electrophoresis",
        "Western Blotting",
        "Cell Culture",
        "Flow Cytometry",
        "Bioconjugation",
        "Protein Purification"
      ],
      color: "from-[var(--secondary)] to-[var(--accent)]"
    },
    {
      title: "Technical Skills",
      icon: <FaCode className="w-6 h-6" />,
      skills: [
        "Python",
        "R Programming",
        "MATLAB",
        "Data Analysis",
        "Statistical Methods",
        "Bioinformatics",
        "Adobe Creative Suite",
        "Laboratory Software"
      ],
      color: "from-[var(--accent)] to-[var(--highlight)]"
    },
    {
      title: "Teaching & Communication",
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
      skills: [
        "Scientific Writing",
        "Research Presentations",
        "Classroom Instruction",
        "One-on-One Mentoring",
        "Technical Reporting",
        "Visual Communication",
        "Public Speaking",
        "Documentation"
      ],
      color: "from-[var(--highlight)] to-[var(--secondary)]"
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-white dark:bg-gray-900 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--secondary)] opacity-5 rounded-full"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-[var(--highlight)] opacity-5 rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 mb-3 bg-[var(--secondary)]/10 dark:bg-[var(--secondary)]/20 rounded-full text-[var(--secondary)] font-semibold text-sm shadow-sm">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading-color)] mb-4">
            Skills & Capabilities
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary)] mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-[var(--text-color)] text-lg">
            A comprehensive overview of my technical proficiencies and professional capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5,
                    delay: index * 0.1
                  }
                }
              }}
            >
              <div className="card card-hover relative backdrop-blur-sm h-full border border-[var(--secondary)]/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white bg-gradient-to-br ${category.color} shadow-sm`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--secondary)]">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center group">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[var(--secondary)] to-[var(--highlight)] mr-3 group-hover:scale-125 transition-transform"></span>
                      <span className="text-[var(--text-color)]">{skill}</span>
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

export default Skills; 