'use client';

import { motion } from 'framer-motion';
import { FaFlask, FaLaptopCode, FaUsers } from 'react-icons/fa';

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
      category: "Laboratory Techniques",
      icon: <FaFlask size={20} />,
      skills: [
        "Column Chromatography",
        "Micropipette",
        "Microscopy",
        "Spectrophotometer",
        "DNA/RNA Isolation",
        "PCR",
        "Gel Electrophoresis",
        "Western Blot"
      ],
      color: "from-[var(--primary)] to-[var(--accent)]"
    },
    {
      category: "Programming & Software",
      icon: <FaLaptopCode size={20} />,
      skills: [
        "Google Suite",
        "Microsoft Office",
        "Python",
        "Java",
        "SQL",
        "R Programming",
        "Adobe Suite",
        "Scheme & Regex"
      ],
      color: "from-[var(--secondary)] to-[var(--primary)]"
    },
    {
      category: "Soft Skills & Languages",
      icon: <FaUsers size={20} />,
      skills: [
        "Team Coordination",
        "Teaching & Mentoring",
        "Documentation",
        "Project Management",
        "Leadership",
        "Creative Problem Solving",
        "Communication",
        "Mandarin (Intermediate)"
      ],
      color: "from-[var(--accent)] to-[var(--secondary)]"
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[var(--primary)] opacity-5"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-[var(--accent)] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 mb-3 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 text-[var(--primary)] font-semibold rounded-full text-sm shadow-sm">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading-color)] mb-4">
            Skills & Capabilities
          </h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-[var(--text-color)] text-lg">
            Technical proficiencies and professional capabilities developed through education and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="card card-hover backdrop-blur-sm"
            >
              <div className="flex items-center mb-6 pb-3 border-b border-gray-100 dark:border-gray-700">
                <div 
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${category.color} shadow-sm mr-3`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--heading-color)]">
                  {category.category}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="relative overflow-hidden group"
                  >
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 group-hover:border-[var(--primary)] transition-colors">
                      <p className="text-[var(--text-color)] font-medium text-sm">{skill}</p>
                    </div>
                    <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${category.color} group-hover:w-full transition-all duration-300`}></div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 