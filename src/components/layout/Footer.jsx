import React from 'react';
import { personalData } from '../../data/personalData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white/90 dark:bg-gray-900/90 border-t border-gray-200/60 dark:border-gray-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="flex items-center gap-2 text-lg font-extrabold text-[#bd69f5]"
            >
              <i className="fa-solid fa-code text-sm"></i>
              <span>{personalData.brandName}</span>
            </a>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-sm">
              {personalData.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-gray-600 dark:text-gray-300">
            <button onClick={() => scrollToSection('home')} className="hover:text-[#bd69f5] transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-[#bd69f5] transition">About</button>
            <button onClick={() => scrollToSection('project')} className="hover:text-[#bd69f5] transition">Projects</button>
            <button onClick={() => scrollToSection('achievements')} className="hover:text-[#bd69f5] transition">Achievements</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#bd69f5] transition">Contact</button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-[#bd69f5] hover:border-[#bd69f5] transition-all"
            >
              <i className="fa-brands fa-linkedin text-base"></i>
            </a>
            <a
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-[#bd69f5] hover:border-[#bd69f5] transition-all"
            >
              <i className="fa-brands fa-github text-base"></i>
            </a>
            <a
              href={personalData.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-[#bd69f5] hover:border-[#bd69f5] transition-all"
            >
              <i className="fa-brands fa-instagram text-base"></i>
            </a>
          </div>
        </div>

        {/* Copyright Divider */}
        <div className="mt-8 pt-6 border-t border-gray-200/60 dark:border-gray-800/60 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>© {currentYear} {personalData.name}. All rights reserved. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};
