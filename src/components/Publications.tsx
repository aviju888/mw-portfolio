'use client';

import { motion } from 'framer-motion';
import { FaFilePdf, FaLink, FaExternalLinkAlt } from 'react-icons/fa';

const Publications = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const publications = [
    {
      title: "Metagenomic Analysis Reveals Novel Insights into Soil Microbial Communities of California Agricultural Systems",
      authors: "Your Name, Johnson A.B., Williams C.D.",
      journal: "Soil Biology and Biochemistry",
      year: "2024",
      type: "Journal Article",
      status: "In Press",
      url: "#",
      pdf: "#"
    },
    {
      title: "Characterization of Antibiotic Resistance Genes in Environmental Bacterial Isolates from Urban Waterways",
      authors: "Smith R.J., Your Name, Davis E.F.",
      journal: "Journal of Antimicrobial Chemotherapy",
      year: "2023",
      type: "Journal Article",
      status: "Published",
      url: "https://doi.org/10.XXXX/example",
      pdf: "#"
    },
    {
      title: "Comparative Genomics of Plastic-Degrading Bacteria from Marine Environments",
      authors: "Your Name, Wilson G.H.",
      journal: "Marine Pollution Bulletin",
      year: "2022",
      type: "Journal Article",
      status: "Published",
      url: "https://doi.org/10.XXXX/example",
      pdf: "#"
    },
    {
      title: "Novel Approaches for Studying Microbial Communities in Aquatic Ecosystems",
      authors: "Your Name, Thompson L.M., Garcia P.Q.",
      journal: "Methods in Microbial Ecology",
      year: "2022",
      type: "Book Chapter",
      status: "Published",
      url: "https://doi.org/10.XXXX/example",
      pdf: "#"
    },
    {
      title: "Microbial Biofilms on Microplastics: Structure, Function, and Potential Biotechnological Applications",
      authors: "Your Name, Chen Y.Z.",
      journal: "American Society for Microbiology Conference",
      year: "2023",
      type: "Conference Paper",
      status: "Presented",
      url: "#",
      pdf: "#"
    }
  ];

  return (
    <section id="publications" className="py-16 md:py-24 bg-white dark:bg-[#121212]">
      <div className="container-custom">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="section-title">Publications</h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Research contributions to the scientific community in peer-reviewed journals and conferences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="bg-[var(--light-gray)] dark:bg-[#1e1e1e] p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="pt-1">
                  <span className={`inline-block w-3 h-3 rounded-full ${
                    pub.status === "Published" 
                      ? "bg-green-500" 
                      : pub.status === "In Press" 
                        ? "bg-yellow-500" 
                        : "bg-blue-500"
                  }`}></span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-2">{pub.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1"><strong>Authors:</strong> {pub.authors}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    <strong>{pub.journal}</strong>, {pub.year} | {pub.type} | <span className={`font-medium ${
                      pub.status === "Published" 
                        ? "text-green-600 dark:text-green-400" 
                        : pub.status === "In Press" 
                          ? "text-yellow-600 dark:text-yellow-400" 
                          : "text-blue-600 dark:text-blue-400"
                    }`}>{pub.status}</span>
                  </p>
                  
                  <div className="mt-3 flex space-x-3">
                    {pub.url && (
                      <a 
                        href={pub.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-[var(--primary)] hover:underline"
                      >
                        <FaLink className="mr-1" /> Publisher Link <FaExternalLinkAlt size={12} className="ml-1" />
                      </a>
                    )}
                    {pub.pdf && (
                      <a 
                        href={pub.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-[var(--primary)] hover:underline"
                      >
                        <FaFilePdf className="mr-1" /> PDF <FaExternalLinkAlt size={12} className="ml-1" />
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

export default Publications; 