'use client';

import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--primary)] text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Your Name</h3>
            <p className="text-gray-200 mb-4">
              Microbiology Researcher | UC Berkeley
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--secondary)] transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--secondary)] transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--secondary)] transition-colors">
                <FaGoogle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-[var(--secondary)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-200 hover:text-[var(--secondary)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#research" className="text-gray-200 hover:text-[var(--secondary)] transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="#publications" className="text-gray-200 hover:text-[var(--secondary)] transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-200 hover:text-[var(--secondary)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-200 space-y-2">
              <p>Department of Microbiology</p>
              <p>University of California, Berkeley</p>
              <p>Berkeley, CA 94720</p>
              <p className="mt-2">Email: your.name@berkeley.edu</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <Link href="/privacy-policy" className="hover:text-[var(--secondary)] transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-of-use" className="hover:text-[var(--secondary)] transition-colors">
              Terms of Use
            </Link>
            <span>|</span>
            <span>
              Built with <span className="text-[var(--secondary)]">♥</span> using Next.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 