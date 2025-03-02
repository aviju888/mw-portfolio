'use client';

import { motion } from 'framer-motion';
import { FaFilePdf, FaLink, FaExternalLinkAlt, FaBook, FaFlask, FaUsers, FaDna, FaMicroscope, FaLeaf } from 'react-icons/fa';
import { useState } from 'react';
import React from 'react';

// Define the type for paper items
interface PaperItem {
  title: string;
  description: string;
  authors: string;
  journal: string;
  year: string;
  type: string;
  category: string;
  status: string;
  url: string;
  pdf: string;
  icon: React.ReactNode;
}

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

  const items: PaperItem[] = [
    {
      title: "134L Final Report: Global Circulation Patterns of Influenza A Virulence Gene Mutations",
      description: "Analyzed global mutation patterns in the HA and NA genes of Influenza A H3N2 to assess co‐evolution and evolutionary rates. Employed multiple sequence alignment, phylogenetic tree construction, and statistical analysis (ANCOVA) to compare temporal versus regional mutation trends.",
      authors: "Mari Torii-Karch, Monica Wang, and Anna Kroskrity",
      journal: "Practical Genomics IB 134L Report, UC Berkeley",
      year: "2023",
      type: "paper",
      category: "Research Paper",
      status: "Completed",
      url: "",
      pdf: "/papers/134L Final Report - Mari, Anna, Monica.pdf",
      icon: <FaDna className="w-5 h-5" />
    },
    {
      title: "E. coli Physiology Lab Report: Regulation of Glucose and Galactose Metabolism",
      description: "Investigated the roles of galR, galS, and galK in regulating galactose metabolism in E. coli. Growth curves and Biolog assays demonstrated that galR and galK are essential for proper galactose utilization, while galS appears non-essential.",
      authors: "Monica Wang and Barbie Peters",
      journal: "General Microbiology Laboratory Report, UC Berkeley",
      year: "2023",
      type: "paper",
      category: "Lab Report",
      status: "Completed",
      url: "",
      pdf: "/papers/E. coli Physiology Lab Report - Monica Wang_.pdf",
      icon: <FaFlask className="w-5 h-5" />
    },
    {
      title: "ESPM 186 Final Paper: Chancellor and Koshland Pastures' 3-year Management Plan Proposal",
      description: "Outlined a comprehensive grazing and burning management plan for the Chancellor and Koshland pastures at UC Berkeley. The proposal focused on using domestic livestock grazing to reduce invasive woody species and controlled burnings to lower fire risk.",
      authors: "Lynn Huntsinger",
      journal: "ESPM 186 Final Paper",
      year: "2022",
      type: "paper",
      category: "Research Paper",
      status: "Completed",
      url: "",
      pdf: "/papers/ESPM 186 Final Paper - Monica Wang.pdf",
      icon: <FaLeaf className="w-5 h-5" />
    },
    {
      title: "Laboratory Term Project Report: Gene Knockout Analysis in Nannochloropsis oceanica",
      description: "Examined the effects of CRISPR-induced knockouts of algaenan biosynthesis genes (PRX and COPOX) in Nannochloropsis oceanica. Despite encountering contamination issues with wild-type strains, the project provided insights into gene function and algaenan formation.",
      authors: "Monica Wang",
      journal: "Biology of Algae Laboratory Report, UC Berkeley",
      year: "2024",
      type: "paper",
      category: "Research Paper",
      status: "Completed",
      url: "",
      pdf: "/papers/Laboratory Term Project Report.pdf",
      icon: <FaFlask className="w-5 h-5" />
    },
    {
      title: "PLANTBI 185 Forensic Project: Identifying Unknown Powder Components Using Microscopy",
      description: "Utilized a suite of microscopy techniques—including brightfield, polarized light, phase contrast, and epifluorescence—to determine that the unknown powder sample consisted of cellulose, cotton fibers, and yeast.",
      authors: "Monica Wang",
      journal: "Forensic Project Report, UC Berkeley",
      year: "2023",
      type: "paper",
      category: "Project Report",
      status: "Completed",
      url: "",
      pdf: "/papers/PLANTBI 185 Forensic Project .pdf",
      icon: <FaMicroscope className="w-5 h-5" />
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
            Research papers and academic projects showcasing my work in microbial biology and environmental management
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
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white bg-[var(--secondary)]">
                    {item.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-[var(--heading-color)] mb-2">{item.title}</h3>
                    <span className="text-sm font-medium text-white bg-[var(--secondary)] px-3 py-1 rounded-full tracking-normal whitespace-nowrap">
                      {item.category}
                    </span>
                  </div>
                  
                  <p className="text-[var(--text-color)] mb-3">{item.description}</p>
                  
                  <p className="text-[var(--text-color)] mb-1"><strong>Authors:</strong> {item.authors}</p>
                  <p className="text-[var(--text-color)] mb-3">
                    <strong>{item.journal}</strong>, {item.year} | <span className="font-medium text-[var(--accent)]">{item.status}</span>
                  </p>
                  
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
                        <FaFilePdf className="mr-1" /> View Document <FaExternalLinkAlt size={12} className="ml-1" />
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