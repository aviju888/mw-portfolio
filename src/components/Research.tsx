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
      shortTitle: "Research",
      subtitle: "Niyogi Lab, PMB, UC Berkeley",
      period: "August 2022 - May 2024",
      description: "Conducted research in the Plant and Microbial Biology department, focused on developing laboratory techniques and contributing to ongoing research projects primarily on increasing photosynthesis.",
      highlights: [
        "Maintained transgenic algae culture lines in liquid and agar plates chambers by preparing solutions and plates, autoclaving labware, streaking 10s of plates within 3hrs",
        "Conducted independent experiments from algae transformation to protein expression analysis via western blot, progressing research findings and understandings",
        "Optimized experimental conditions and protocols with guidance from supervisor to improve data collection and reproducibility of growth culture in different light/nutrient conditions",
        "Reviewed scientific paper and closely collaborated with senior scientists to contribute new ideas and experiments related to the research",
        "Ensured data accuracy and replicability through meticulous and organized recording of data and procedures",
        "Compiled and interpreted data to create figures using multiple software applications, improving experimental procedure efficiency and result consistency",
        "Developed concise, informative presentations and reports to effectively exchange research findings to lab team"
      ],
      image: "/images/research1.jpg",
      icon: <FaFlask size={20} />,
      color: "from-[var(--secondary)] to-[var(--accent)]",
      type: "single"
    },
    {
      title: "Leadership Experience",
      shortTitle: "Leadership",
      subtitle: "KOSMOS & Glamity, UC Berkeley",
      period: "May 2023 - July 2024",
      description: "Led technical and creative teams across multiple campus organizations, managing logistics, team coordination, and project execution.",
      type: "dual",
      experiences: [
        {
          title: "Tech Team Leader Executive",
          subtitle: "KOSMOS, UC Berkeley",
          period: "May 2023 - July 2024",
          description: "Led the technical team for KOSMOS, managing filming schedules, video editing, and equipment logistics for a large organization.",
          highlights: [
            "Orchestrated seamless collaboration and coordination with 120+ individuals, adeptly managing filming schedules, video editing timelines, equipment logistics, and ensuring cohesive execution of projects",
            "Designed, organized, and managed multiple documents, Google sheets, etc. to implement a functioning work system for team and accurate documentation and accessibility of all photage-related content",
            "Streamlined organizational efficiency by centralizing and maintaining a comprehensive digital archive",
            "Fostered tech team skill development by designing workshops covering editing, photoshop, and filming techniques",
            "Recruited club members for Tech Team through digital content and outreach, increasing member numbers by over 400%",
            "Communicated frequently with all sectors of the organization to maintain efficient workflow and collaboration"
          ],
          icon: <FaCode size={20} />,
          color: "from-[var(--accent)] to-[var(--secondary)]"
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
          icon: <FaPalette size={20} />,
          color: "from-[var(--highlight)] to-[var(--accent)]"
        }
      ],
      icon: <FaCode size={20} />,
      color: "from-[var(--accent)] to-[var(--secondary)]"
    }
  ];

  return (
    <section id="research" className="py-20 md:py-28 bg-white dark:bg-gray-900 relative">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--secondary)] opacity-5 rounded-full"></div>
      <div className="absolute top-1/3 left-0 w-48 h-48 bg-[var(--highlight)] opacity-5 rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 mb-3 bg-[var(--secondary)]/10 dark:bg-[var(--secondary)]/20 rounded-full text-[var(--secondary)] font-semibold text-sm shadow-sm">
            My Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading-color)] mb-4">
            Research & Leadership
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary)] mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-[var(--text-color)] text-lg">
            Professional research experience and leadership roles across various organizations
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex space-x-2 rounded-xl bg-gray-50 dark:bg-gray-800 p-1 mb-10 max-w-2xl mx-auto shadow-sm">
              {researchProjects.map((project, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    `w-full rounded-lg py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium leading-5 transition-all duration-200
                    ${selected 
                      ? 'bg-white dark:bg-gray-700 text-[var(--secondary)] shadow-sm border border-[var(--secondary)]/20' 
                      : 'text-[var(--text-color)] hover:bg-white/[0.15] dark:hover:bg-gray-700/[0.3]'
                    }`
                  }
                >
                  <span className="flex flex-col sm:flex-row items-center justify-center sm:gap-2">
                    <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-white bg-gradient-to-br ${project.color} mb-1 sm:mb-0`}>
                      {project.icon}
                    </span>
                    <span className="text-center sm:text-left">{project.shortTitle}</span>
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
                  >
                    {project.type === "single" ? (
                      <div className="card card-hover relative backdrop-blur-sm border-[var(--secondary)]/10">
                        <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-100 dark:border-gray-700">
                          <div 
                            className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${project.color} shadow-sm`}
                          >
                            {project.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[var(--secondary)]">{project.title}</h3>
                            <p className="text-[var(--accent)] text-sm">{project.subtitle}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center mb-4 text-[var(--text-color)]">
                          <span className="w-4 h-0.5 bg-[var(--highlight)] mr-2"></span>
                          <span>{project.period}</span>
                        </div>
                        
                        <p className="text-[var(--text-color)] mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-[var(--secondary)]">
                          {project.description}
                        </p>
                        
                        <h4 className="text-lg font-medium mb-4 text-[var(--secondary)] flex items-center">
                          <span className="w-4 h-0.5 bg-[var(--secondary)] mr-2"></span>
                          Key Responsibilities
                        </h4>
                        
                        <ul className="space-y-3 text-[var(--text-color)]">
                          {project.highlights && project.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start group">
                              <span className="inline-block w-2 h-2 bg-gradient-to-br from-[var(--secondary)] to-[var(--highlight)] rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.experiences && project.experiences.map((experience, expIdx) => (
                          <div key={expIdx} className="card card-hover relative backdrop-blur-sm border-[var(--secondary)]/10">
                            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-100 dark:border-gray-700">
                              <div 
                                className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${experience.color} shadow-sm`}
                              >
                                {experience.icon}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-[var(--secondary)]">{experience.title}</h3>
                                <p className="text-[var(--accent)] text-sm">{experience.subtitle}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center mb-4 text-[var(--text-color)]">
                              <span className="w-4 h-0.5 bg-[var(--highlight)] mr-2"></span>
                              <span>{experience.period}</span>
                            </div>
                            
                            <p className="text-[var(--text-color)] mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-[var(--secondary)]">
                              {experience.description}
                            </p>
                            
                            <h4 className="text-lg font-medium mb-4 text-[var(--secondary)] flex items-center">
                              <span className="w-4 h-0.5 bg-[var(--secondary)] mr-2"></span>
                              Key Responsibilities
                            </h4>
                            
                            <ul className="space-y-3 text-[var(--text-color)]">
                              {experience.highlights && experience.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start group">
                                  <span className="inline-block w-2 h-2 bg-gradient-to-br from-[var(--secondary)] to-[var(--highlight)] rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default Research; 