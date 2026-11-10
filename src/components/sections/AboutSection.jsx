import React from 'react';
import { personalData } from '../../data/personalData';
import { skillsCategories } from '../../data/skillsData';

export const AboutSection = () => {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* 1. About Me Bio Card */}
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              About <span className="text-[#bd69f5]">Me</span>
            </h2>

            {personalData.bio.map((paragraph, idx) => (
              <p key={idx} className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4">
              <div className="bg-gray-50 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70 rounded-2xl p-4 sm:p-6 text-center text-gray-900 dark:text-white shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#bd69f5]">
                  {personalData.stats.projects}
                </h3>
                <p className="font-semibold text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Major Projects
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70 rounded-2xl p-4 sm:p-6 text-center text-gray-900 dark:text-white shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#bd69f5]">
                  {personalData.stats.endpoints}
                </h3>
                <p className="font-semibold text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                  REST Endpoints
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70 rounded-2xl p-4 sm:p-6 text-center text-gray-900 dark:text-white shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#bd69f5]">
                  {personalData.stats.models}
                </h3>
                <p className="font-semibold text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Database Models
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex justify-center items-center">
            <img
              src="/images/office.png"
              alt="Naresh Kumar Profile"
              loading="lazy"
              className="w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-3xl shadow-2xl ring-4 ring-[#bd69f5]/40"
            />
          </div>
        </div>
      </div>

      {/* 2. Technical Skills & Tools Container */}
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl transition-colors duration-300">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#bd69f5] tracking-tight">
              Technical Skills & Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-base font-medium">
              Technologies, frameworks, and developer tools I work with daily.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#bd69f5]/15 text-[#bd69f5] px-4 py-2 rounded-full border border-[#bd69f5]/30 w-fit">
            <i className="fa-solid fa-layer-group"></i> Full Stack Tech Stack
          </span>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skillsCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-7 border border-gray-200/80 dark:border-gray-800 shadow-lg hover:shadow-2xl dark:shadow-gray-950/60 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#bd69f5]/15 text-[#bd69f5] flex items-center justify-center text-xl group-hover:bg-[#bd69f5] group-hover:text-white transition-colors duration-300">
                  <i className={cat.iconClass}></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{cat.category}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{cat.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/70 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700/80 px-3.5 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition"
                  >
                    <i className={`${skill.icon} text-base ${skill.color}`}></i> {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
