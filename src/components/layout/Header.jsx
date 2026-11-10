import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { personalData } from '../../data/personalData';

export const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['home', 'about', 'project', 'achievements', 'contact'], 120);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'project', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/60 dark:border-gray-800/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className="group flex items-center gap-2 text-lg md:text-xl font-extrabold text-white bg-[#bd69f5] px-4 py-2 rounded-xl shadow-md hover:shadow-purple-500/20 hover:scale-[1.02] transition-all"
        >
          <i className="fa-solid fa-code text-sm"></i>
          <span>{personalData.brandName}</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 font-semibold text-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#bd69f5] font-bold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-[#bd69f5] dark:hover:text-[#bd69f5]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Resume PDF Button */}
          <a
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#bd69f5] text-[#bd69f5] font-bold text-sm hover:bg-[#bd69f5] hover:text-white transition-all shadow-sm hover:shadow-md hover:scale-105"
          >
            <i className="fa-solid fa-file-pdf"></i>
            <span>Resume</span>
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-[#bd69f5] dark:hover:text-[#bd69f5] transition-all hover:scale-110 focus:outline-none cursor-pointer"
          >
            {darkMode ? (
              <i className="fa-solid fa-sun text-lg text-amber-400"></i>
            ) : (
              <i className="fa-solid fa-moon text-lg text-gray-700"></i>
            )}
          </button>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-[#bd69f5]"
          >
            {darkMode ? (
              <i className="fa-solid fa-sun text-lg text-amber-400"></i>
            ) : (
              <i className="fa-solid fa-moon text-lg text-gray-700"></i>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark text-xl' : 'fa-bars text-xl'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2.5 px-4 rounded-xl font-medium transition cursor-pointer ${
                  isActive
                    ? 'bg-[#bd69f5]/15 text-[#bd69f5] font-bold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#bd69f5]'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <a
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#bd69f5] text-[#bd69f5] font-bold hover:bg-[#bd69f5] hover:text-white transition"
          >
            <i className="fa-solid fa-file-pdf"></i>
            <span>View Resume</span>
          </a>
        </div>
      )}
    </header>
  );
};
