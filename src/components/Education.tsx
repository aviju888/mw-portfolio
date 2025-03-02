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
      details: [
        "Bachelor of Science in Microbial Biology with a 3.814 GPA",
        "Specializing in multidisciplinary courses in chemistry, physics, and biology", 
        "Focused on coding applications in bioengineering"
      ],
      icon: <FaGraduationCap className="w-5 h-5" />,
      color: "bg-[var(--secondary)]",
      url: ""
    },
    {
      type: "work",
      title: "Tech Team Lead Executive",
      institution: "KOSMOS, UC Berkeley",
      period: "May 2023 - July 2024",
      details: [
        "Orchestrated seamless collaboration and coordination with 120+ individuals",
        "Managed filming schedules, video editing timelines, and equipment logistics",
        "Streamlined organizational efficiency through comprehensive digital archives",
        "Fostered tech team skill development through workshops on editing and filming techniques"
      ],
      icon: <FaBriefcase className="w-5 h-5" />,
      color: "bg-[var(--highlight)]",
      url: "https://www.youtube.com/channel/UChvWutuKGAvyALW_fWDNfXg"
    },
    {
      type: "work",
      title: "Undergraduate Researcher",
      institution: "Niyogi Lab, PMB, UC Berkeley",
      period: "August 2022 - May 2024",
      details: [
        "Conducted research in the Plant and Microbial Biology department focused on increasing photosynthesis",
        "Maintained transgenic algae culture lines through laboratory techniques",
        "Conducted independent experiments from algae transformation to protein expression analysis",
        "Optimized experimental conditions and protocols to improve data collection and reproducibility"
      ],
      icon: <FaFlask className="w-5 h-5" />,
      color: "bg-[var(--accent)]",
      url: "https://niyogilab.berkeley.edu/"
    },
    {
      type: "work",
      title: "Director Intern",
      institution: "Glamity, UC Berkeley",
      period: "January 2024 - May 2024",
      details: [
        "Organized photoshoots involving 30+ people to promote team performances",
        "Facilitated dance practices by delegating responsibilities and maintaining schedules",
        "Fostered team spirit through collaborative leadership",
        "Organized and maintained digital archives for easy team logistics access"
      ],
      icon: <FaBriefcase className="w-5 h-5" />,
      color: "bg-[var(--accent)]",
      url: "https://www.instagram.com/glamityatcal/"
    },
    {
      type: "work",
      title: "Bioconjugation Intern",
      institution: "Biotium, Fremont",
      period: "May 2022 - August 2022",
      details: [
        "Executed 3-4 high-yield bioconjugation productions simultaneously",
        "Utilized strategic planning and chromatographic purification techniques",
        "Mastered and adapted workflow in 2-weeks and trained 2 fellow interns",
        "Increased production by ~75% through effective collaboration with supervisors and staff"
      ],
      icon: <FaFlask className="w-5 h-5" />,
      color: "bg-[var(--brightest)]",
      url: ""
    },
    {
      type: "work",
      title: "Biology Lab Intern",
      institution: "Bio1AL, UC Berkeley",
      period: "January 2022 - May 2022",
      details: [
        "Arranged and assisted lab experiments for 25+ students in 3hr weekly lab sections",
        "Performed student lab assignments accurately in half the allotted time",
        "Utilized professional scientific techniques and efficient time management",
        "Facilitated exam logistics for 100+ students"
      ],
      icon: <FaFlask className="w-5 h-5" />,
      color: "bg-[var(--highlight)]",
      url: ""
    },
    {
      type: "work",
      title: "Computer Science Academic Intern",
      institution: "CS10, UC Berkeley",
      period: "June 2021 - May 2022",
      details: [
        "Mentored 20+ students in 4hr coding lab sections",
        "Provided guidance on assignments and over 15+ projects",
        "Expertly taught Python code and troubleshooted coding issues",
        "Helped students achieve understanding and completion of coding assignments"
      ],
      icon: <FaChalkboardTeacher className="w-5 h-5" />,
      color: "bg-[var(--brightest)]",
      url: "https://cs10.org/sp22/"
    },
    {
      type: "work",
      title: "Musical Producer and Manager",
      institution: "AHS Performing Arts Center | Lafayette, CA",
      period: "January 2018 - March 2020",
      details: [
        "Coordinated with 12+ local businesses to gather funds for annual musicals",
        "Increased promotion through strategic community partnerships",
        "Managed rehearsal scheduling for cast members and staff for 4-month productions",
        "Maintained online resources and documentation for 70+ cast members and staff"
      ],
      icon: <FaBriefcase className="w-5 h-5" />,
      color: "bg-[var(--accent)]",
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
                  <ul className="space-y-2 text-[var(--text-color)]">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-br from-[var(--secondary)] to-[var(--highlight)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
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