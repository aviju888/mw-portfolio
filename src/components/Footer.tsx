'use client';

import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--secondary)] text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Monica Wang</h3>
            <p className="text-white mb-4">
              Microbial Biology | UC Berkeley
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/monicaqwang/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--brightest)] transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:moniwang9242@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--brightest)] transition-colors">
                <FaGoogle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-[var(--brightest)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white hover:text-[var(--brightest)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#research" className="text-white hover:text-[var(--brightest)] transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="#projects-papers" className="text-white hover:text-[var(--brightest)] transition-colors">
                  Projects & Papers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white hover:text-[var(--brightest)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <address className="not-italic text-white space-y-2">
              <p>Lafayette, CA</p>
              <p className="mt-2">Email: moniwang9242@gmail.com</p>
              <p>Phone: (925) 878-2788</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            &copy; {currentYear} Monica Wang. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-4 text-sm text-white">
            <span>
              Built with <span className="text-[var(--brightest)]">♥</span> using Next.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 