'use client';

import { motion } from 'framer-motion';
import { FaFilePdf, FaLink, FaExternalLinkAlt, FaCode, FaFlask, FaBook } from 'react-icons/fa';
import { useState } from 'react';

const ProjectsPapers = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const items = [
    {
      title: "Metagenomic Analysis of Soil Microbial Communities",
      description: "Conducted comprehensive metagenomic analysis of soil samples from California agricultural systems, revealing novel insights into microbial diversity and functional potential.",
      authors: "Monica Wang, Johnson A.B., Williams C.D.",
      journal: "Soil Biology and Biochemistry",
      year: "2024",
      type: "paper",
      category: "Research Paper",
      status: "In Press",
      url: "#",
      pdf: "#",
      icon: <FaBook className="w-5 h-5" />
    },
    {
      title: "Microbial Biofilm Analysis Tool",
      description: "Developed a computational tool for analyzing microbial biofilm structures using image processing algorithms and machine learning techniques.",
      technologies: ["Python", "TensorFlow", "OpenCV"],
      year: "2023",
      type: "project",
      category: "Software Tool",
      github: "#",
      demo: "#",
      icon: <FaCode className="w-5 h-5" />
    },
    {
      title: "Antibiotic Resistance Genes in Urban Waterways",
      description: "Characterized antibiotic resistance genes in bacterial isolates from urban waterways using molecular techniques and bioinformatics analysis.",
      authors: "Smith R.J., Monica Wang, Davis E.F.",
      journal: "Journal of Antimicrobial Chemotherapy",
      year: "2023",
      type: "paper",
      category: "Research Paper",
      status: "Published",
      url: "https://doi.org/10.XXXX/example",
      pdf: "#",
      icon: <FaBook className="w-5 h-5" />
    },
    {
      title: "Biodegradable Plastic Prototype",
      description: "Designed and tested a biodegradable plastic prototype using bacterial cellulose and plant-derived polymers.",
      technologies: ["Material Science", "Bacterial Cultivation", "Polymer Chemistry"],
      year: "2023",
      type: "project",
      category: "Laboratory Project",
      report: "#",
      icon: <FaFlask className="w-5 h-5" />
    },
    {
      title: "Comparative Genomics of Plastic-Degrading Bacteria",
      description: "Analyzed genomic sequences of plastic-degrading bacteria isolated from marine environments to identify key enzymes involved in plastic degradation.",
      authors: "Monica Wang, Wilson G.H.",
      journal: "Marine Pollution Bulletin",
      year: "2022",
      type: "paper",
      category: "Research Paper",
      status: "Published",
      url: "https://doi.org/10.XXXX/example",
      pdf: "#",
      icon: <FaBook className="w-5 h-5" />
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? items 
    : items.filter(item => item.type === activeTab);

  return (
    <section id="projects-papers" className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 mb-3 bg-[var(--secondary)]/10 rounded-full text-[var(--secondary)] font-semibold text-sm shadow-sm">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading-color)] mb-4">
            Projects & Papers
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary)] mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-[var(--text-color)] text-lg">
            Research contributions and projects showcasing my work in microbial biology and biotechnology
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'all' 
                  ? 'bg-white text-[var(--secondary)] shadow-sm' 
                  : 'text-gray-600 hover:text-[var(--secondary)]'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveTab('project')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'project' 
                  ? 'bg-white text-[var(--secondary)] shadow-sm' 
                  : 'text-gray-600 hover:text-[var(--secondary)]'
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => setActiveTab('paper')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'paper' 
                  ? 'bg-white text-[var(--secondary)] shadow-sm' 
                  : 'text-gray-600 hover:text-[var(--secondary)]'
              }`}
            >
              Papers
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {filteredItems.map((item, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="pt-1 flex-shrink-0">
                  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-white ${
                    item.type === "paper" 
                      ? "bg-[var(--secondary)]" 
                      : "bg-[var(--accent)]"
                  }`}>
                    {item.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-[var(--heading-color)] mb-2">{item.title}</h3>
                    <span className="text-sm font-medium text-[var(--secondary)] bg-[var(--secondary)]/10 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  
                  <p className="text-[var(--text-color)] mb-3">{item.description}</p>
                  
                  {item.type === 'paper' && (
                    <>
                      <p className="text-[var(--text-color)] mb-1"><strong>Authors:</strong> {item.authors}</p>
                      <p className="text-[var(--text-color)] mb-3">
                        <strong>{item.journal}</strong>, {item.year} | <span className="font-medium text-[var(--accent)]">{item.status}</span>
                      </p>
                    </>
                  )}
                  
                  {item.type === 'project' && (
                    <>
                      <div className="mb-3">
                        <strong className="text-[var(--text-color)]">Technologies:</strong>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {item.technologies && item.technologies.map((tech, i) => (
                            <span key={i} className="text-xs bg-gray-100 text-[var(--text-color)] px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-[var(--text-color)] mb-3">
                        <strong>Year:</strong> {item.year}
                      </p>
                    </>
                  )}
                  
                  <div className="mt-3 flex flex-wrap gap-3">
                    {item.url && (
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-[var(--secondary)] hover:underline"
                      >
                        <FaLink className="mr-1" /> Publisher Link <FaExternalLinkAlt size={12} className="ml-1" />
                      </a>
                    )}
                    {item.pdf && (
                      <a 
                        href={item.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-[var(--secondary)] hover:underline"
                      >
                        <FaFilePdf className="mr-1" /> PDF <FaExternalLinkAlt size={12} className="ml-1" />
                      </a>
                    )}
                    {item.github && (
                      <a 
                        href={item.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-[var(--secondary)] hover:underline"
                      >
                        <FaCode className="mr-1" /> GitHub <FaExternalLinkAlt size={12} className="ml-1" />
                      </a>
                    )}
                    {item.demo && (
                      <a 
                        href={item.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-[var(--secondary)] hover:underline"
                      >
                        <FaExternalLinkAlt className="mr-1" /> Live Demo
                      </a>
                    )}
                    {item.report && (
                      <a 
                        href={item.report} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-[var(--secondary)] hover:underline"
                      >
                        <FaFilePdf className="mr-1" /> Project Report <FaExternalLinkAlt size={12} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPapers; 