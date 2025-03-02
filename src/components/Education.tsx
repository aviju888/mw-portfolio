'use client';

import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaFlask, 
  FaChalkboardTeacher,  
} from 'react-icons/fa';

const Education = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const experiences = [
    {
      type: "education",
      title: "B.S. Microbial Biology",
      institution: "University of California, Berkeley",
      period: "2020-2024",
      details: "Bachelor of Science in Microbial Biology with a 3.814 GPA. Specializing in multidisciplinary courses in chemistry, physics, and biology, as well as coding applications in bioengineering.",
      icon: <FaGraduationCap className="w-5 h-5" />,
      color: "bg-[var(--secondary)]",
      url: ""
    },
    {
      type: "work",
      title: "Bioconjugation Intern",
      institution: "Biotium",
      period: "2023-2024",
      details: "Produced and purified bioconjugates for research and diagnostic applications. Performed quality control testing and assisted in developing new bioconjugation protocols.",
      icon: <FaFlask className="w-5 h-5" />,
      color: "bg-[var(--brightest)]",
      url: ""
    },
    {
      type: "work",
      title: "Undergraduate Researcher",
      institution: "Niyogi Lab, UC Berkeley",
      period: "2022-2024",
      details: "Conducted research on algal photosynthesis, developed laboratory protocols, and assisted in data collection and analysis for various projects.",
      icon: <FaFlask className="w-5 h-5" />,
      color: "bg-[var(--accent)]",
      url: "https://niyogilab.berkeley.edu/"
    },
    {
      type: "work",
      title: "Tech Team Lead",
      institution: "KOSMOS, UC Berkeley",
      period: "2023-2024",
      details: "Led a tech team of 5 members responsible for video production, editing, and digital content creation for campus events and performances.",
      icon: <FaBriefcase className="w-5 h-5" />,
      color: "bg-[var(--highlight)]",
      url: "https://www.youtube.com/channel/UChvWutuKGAvyALW_fWDNfXg"
    },
    {
      type: "work",
      title: "Marketing Director",
      institution: "Glamity at Cal",
      period: "2022-2023",
      details: "Managed social media presence and marketing campaigns for the campus organization. Created digital content and coordinated promotional events.",
      icon: <FaBriefcase className="w-5 h-5" />,
      color: "bg-[var(--accent)]",
      url: "https://www.instagram.com/glamityatcal/"
    },
    {
      type: "work",
      title: "Computer Science Academic Intern",
      institution: "CS10, UC Berkeley",
      period: "June 2021 - May 2022",
      details: "Mentored 20+ students in 4hr coding lab sections, providing guidance on assignments and projects. Taught Python programming and troubleshooted coding issues, helping students achieve understanding and completion of assignments.",
      icon: <FaChalkboardTeacher className="w-5 h-5" />,
      color: "bg-[var(--brightest)]",
      url: "https://cs10.org/sp22/"
    },
    {
      type: "work",
      title: "Biology Lab Intern",
      institution: "Bio1AL, UC Berkeley",
      period: "January 2022 - May 2022",
      details: "Arranged and assisted lab experiments for 25+ students in weekly 3hr lab sections. Performed lab assignments accurately in half the allotted time through efficient time management and professional scientific techniques.",
      icon: <FaFlask className="w-5 h-5" />,
      color: "bg-[var(--highlight)]",
      url: ""
    }
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-white relative">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--secondary)] opacity-5 rounded-bl-full"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 mb-3 bg-[var(--secondary)]/10 rounded-full text-[var(--secondary)] font-semibold text-sm shadow-sm">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading-color)] mb-4">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary)] mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-[var(--text-color)] text-lg">
            My academic journey and professional experiences that have shaped my career
          </p>
        </motion.div>

        <div className="relative">
          {/* Simple timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-[var(--secondary)]/20"></div>
          
          {/* Timeline entries */}
          <div className="space-y-8 relative">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="pl-12 md:pl-16 relative"
              >
                {/* Timeline node */}
                <div className="w-6 h-6 rounded-full bg-white border-2 border-[var(--secondary)] z-10 absolute left-1 md:left-5 top-4 transform -translate-x-1/2">
                  <div className={`w-3 h-3 rounded-full ${exp.color} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
                </div>
                
                {/* Content card */}
                <div className="card card-hover border-l-4 border-l-[var(--secondary)] shadow-sm">
                  <div className="flex items-start mb-2">
                    <div className={`w-8 h-8 rounded-full ${exp.color} text-white flex items-center justify-center mr-3 flex-shrink-0`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[var(--secondary)]">{exp.title}</h4>
                      <div className="text-[var(--accent)] mb-1">
                        {exp.url ? (
                          <a 
                            href={exp.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {exp.institution}
                          </a>
                        ) : (
                          exp.institution
                        )}
                      </div>
                      <div className="text-sm text-[var(--text-color)] mb-3 font-medium">
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  <p className="text-[var(--text-color)]">
                    {exp.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 