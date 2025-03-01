'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { FaFlask, FaCode, FaPalette } from 'react-icons/fa';

const Research = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const researchProjects = [
    {
      title: "Undergraduate Researcher",
      subtitle: "Niyogi Lab, PMB, UC Berkeley",
      period: "August 2022 - May 2024",
      description: "Conducted research in the Plant and Microbial Biology department, focused on developing laboratory techniques and contributing to ongoing research projects.",
      highlights: [
        "Learned and acquired new lab techniques by researching, reading scientific papers, and collaborating with senior scientists",
        "Maintained clear and timely communication with supervisor via email, phone, and in-person",
        "Ensured data integrity and replicability through meticulous recording of data and procedures",
        "Developed concise and informative presentations and written reports to effectively convey research findings to lab team"
      ],
      image: "/images/research1.jpg",
      icon: <FaFlask size={20} />,
      color: "from-[var(--primary)] to-[var(--accent)]"
    },
    {
      title: "Tech Team Leader",
      subtitle: "KOSMOS, UC Berkeley",
      period: "May 2023 - July 2024",
      description: "Led the technical team for KOSMOS, managing filming schedules, video editing, and equipment logistics for a large organization.",
      highlights: [
        "Orchestrated seamless collaboration and coordination with 40+ individuals managing filming schedules and video production",
        "Streamlined organizational efficiency by centralizing and maintaining a comprehensive digital archive",
        "Fostered tech team skill development by designing workshops covering editing, photoshop, and filming techniques",
        "Recruited club members for Tech Team through digital content and outreach, increasing member numbers by over 400%"
      ],
      image: "/images/research2.jpg",
      icon: <FaCode size={20} />,
      color: "from-[var(--secondary)] to-[var(--primary)]"
    },
    {
      title: "Director Intern",
      subtitle: "Glamity, UC Berkeley",
      period: "January 2024 - May 2024",
      description: "Served as a director intern for Glamity at UC Berkeley, handling organizational tasks and promotion for the dance team.",
      highlights: [
        "Organized a photoshoot involving 30+ people to promote team's performance",
        "Facilitated dance practices by delegating responsibilities, maintaining timely schedules, and fostering team spirit",
        "Organized and maintained digital archive for members to easily access team logistics",
        "Collaborated with director and other interns during weekly meetings to ensure seamless progress"
      ],
      image: "/images/research3.jpg",
      icon: <FaPalette size={20} />,
      color: "from-[var(--accent)] to-[var(--secondary)]"
    }
  ];

  return (
    <section id="research" className="py-20 md:py-28 bg-white dark:bg-gray-900 relative">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent opacity-70"></div>
      <div className="absolute top-1/3 left-0 w-48 h-48 bg-[var(--accent)] opacity-5 rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 mb-3 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 text-[var(--primary)] font-semibold rounded-full text-sm shadow-sm">
            My Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading-color)] mb-4">
            Research & Leadership
          </h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-[var(--text-color)] text-lg">
            Professional research experience and leadership roles across various organizations
          </p>
        </motion.div>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex space-x-2 rounded-xl bg-gray-50 dark:bg-gray-800 p-1 mb-10 max-w-2xl mx-auto shadow-sm">
            {researchProjects.map((project, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  `w-full rounded-lg py-3 px-4 text-sm font-medium leading-5 transition-all duration-200
                  ${selected 
                    ? 'bg-white dark:bg-gray-700 text-[var(--primary)] shadow-sm' 
                    : 'text-[var(--text-color)] hover:bg-white/[0.15] dark:hover:bg-gray-700/[0.3]'
                  }`
                }
              >
                <span className="flex items-center justify-center gap-2">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-white bg-gradient-to-br ${project.color}`}>
                    {project.icon}
                  </span>
                  <span>{project.title.split(' ')[0]}</span>
                </span>
              </Tab>
            ))}
          </Tab.List>
          
          <Tab.Panels className="mt-2">
            {researchProjects.map((project, idx) => (
              <Tab.Panel
                key={idx}
                className="rounded-xl"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-5 gap-8"
                >
                  <div className="lg:col-span-3 card card-hover relative backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-100 dark:border-gray-700">
                      <div 
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${project.color} shadow-sm`}
                      >
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--heading-color)]">{project.title}</h3>
                        <p className="text-[var(--secondary)] text-sm">{project.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4 text-[var(--text-color)]">
                      <span className="w-4 h-0.5 bg-[var(--accent)] mr-2"></span>
                      <span>{project.period}</span>
                    </div>
                    
                    <p className="text-[var(--text-color)] mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-[var(--primary)]">
                      {project.description}
                    </p>
                    
                    <h4 className="text-lg font-medium mb-4 text-[var(--heading-color)] flex items-center">
                      <span className="w-4 h-0.5 bg-[var(--primary)] mr-2"></span>
                      Key Responsibilities
                    </h4>
                    
                    <ul className="space-y-3 text-[var(--text-color)]">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start group">
                          <span className="inline-block w-2 h-2 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="lg:col-span-2 h-64 md:h-auto relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm card-hover">
                    {/* Replace with actual project images when available */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}>
                      <div className="absolute inset-0 bg-[url('/images/subtle-pattern.svg')] bg-repeat opacity-10"></div>
                      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                          {project.icon}
                        </div>
                        <p className="text-white text-lg font-medium mb-2">
                          {idx === 0 && "Research & Laboratory Work"}
                          {idx === 1 && "Technical Leadership & Coordination"}
                          {idx === 2 && "Creative Direction & Management"}
                        </p>
                        <p className="text-white/80 text-sm">
                          {idx === 0 && "Developing scientific skills through hands-on research"}
                          {idx === 1 && "Leading technical initiatives and team collaboration"}
                          {idx === 2 && "Organizing creative projects and managing team logistics"}
                        </p>
                      </div>
                    </div>
                    
                    {/* Uncomment when you have actual images
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                </motion.div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Research; 