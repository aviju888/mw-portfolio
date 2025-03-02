'use client';

import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--secondary)] text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Monica Wang</h3>
            <p className="text-white mb-4">
              UC Berkeley | Microbial Biology
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/monicaqwang/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--brightest)] transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:moniwang9242@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--brightest)] transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
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
            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
            <address className="not-italic text-white space-y-2">
              <p>Email: <a href="mailto:moniwang9242@gmail.com" className="text-white hover:text-[var(--brightest)] transition-colors">moniwang9242@gmail.com</a></p>
              <p className="mt-2">Phone: <a href="tel:9258782788" className="text-white hover:text-[var(--brightest)] transition-colors">(925) 878-2788</a></p>
              <p className="mt-2">
                LinkedIn: <a 
                  href="https://www.linkedin.com/in/monicaqwang/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-[var(--secondary)] hover:bg-[var(--brightest)] hover:text-[var(--secondary)] px-3 py-1 rounded-md font-medium text-sm transition-colors ml-1"
                >
                  <FaLinkedin className="mr-1" /> monicaqwang
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex justify-center">
          <p className="text-white text-sm">
            &copy; {currentYear} Monica Wang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 