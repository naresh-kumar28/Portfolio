import React from 'react';
import { personalData } from '../../data/personalData';
import { useTheme } from '../../context/ThemeContext';

export const HeroSection = () => {
  const { darkMode } = useTheme();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="py-6 w-full bg-cover bg-center dark:bg-none transition-colors duration-300 scroll-mt-20"
      style={{ backgroundImage: !darkMode ? "url('/images/heros-bg.png')" : 'none' }}
    >
      <div className="flex items-center justify-center px-4 md:px-8 lg:px-16 py-8 md:py-12 min-h-[calc(100vh-120px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 max-w-6xl w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl transition-colors duration-300">
          
          {/* Left Text Column */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 md:mb-6">
              Welcome to My <span className="text-[#bd69f5]">Portfolio</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed">
              I'm <span className="font-bold text-gray-900 dark:text-white">{personalData.name}</span>, a {personalData.title}. I build scalable, secure web platforms — from concept to deployment.
            </p>

            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 md:mb-8">
              From e-commerce platforms to custom admin dashboards and React applications, I turn ideas into robust, production-ready systems.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 sm:gap-5 w-full max-w-md">
              <button
                onClick={() => scrollToSection('project')}
                className="flex-1 sm:w-44 text-center bg-[#bd69f5] text-white font-bold border-2 border-[#bd69f5] py-3 px-4 text-xs sm:text-sm md:text-base rounded-xl shadow-lg hover:bg-[#a855d8] hover:border-[#a855d8] hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
              >
                View Projects
              </button>

              <button
                onClick={() => scrollToSection('achievements')}
                className="flex-1 sm:w-44 text-center text-gray-900 dark:text-white font-bold border-2 border-gray-900 dark:border-gray-100 py-3 px-4 text-xs sm:text-sm md:text-base rounded-xl hover:text-white hover:border-[#bd69f5] hover:bg-[#bd69f5] hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
              >
                Achievements
              </button>
            </div>

            {/* Social Links (Desktop) */}
            <div className="hidden md:flex items-center gap-3 mt-6 md:mt-8">
              <a
                href={personalData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-900/50 hover:text-[#bd69f5] hover:border-[#bd69f5] hover:shadow-[0_0_12px_rgba(189,105,245,0.5)] transition-all duration-300"
              >
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-900/50 hover:text-[#bd69f5] hover:border-[#bd69f5] hover:shadow-[0_0_12px_rgba(189,105,245,0.5)] transition-all duration-300"
              >
                <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a
                href={personalData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-900/50 hover:text-[#bd69f5] hover:border-[#bd69f5] hover:shadow-[0_0_12px_rgba(189,105,245,0.5)] transition-all duration-300"
              >
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/office.png"
              alt="Naresh Portfolio Showcase"
              loading="lazy"
              className="w-full h-56 sm:h-64 md:h-72 lg:h-96 object-cover rounded-xl md:rounded-2xl shadow-xl ring-4 ring-white dark:ring-gray-800"
            />

            {/* Social Links (Mobile) */}
            <div className="flex items-center gap-3 mt-6 md:hidden">
              <a
                href={personalData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-900/50 hover:text-[#bd69f5] hover:border-[#bd69f5] transition-all"
              >
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-900/50 hover:text-[#bd69f5] hover:border-[#bd69f5] transition-all"
              >
                <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a
                href={personalData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-900/50 hover:text-[#bd69f5] hover:border-[#bd69f5] transition-all"
              >
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
