import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { ProjectModal } from '../ui/ProjectModal';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleQuickView = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Featured <span className="text-[#bd69f5]">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-base font-medium max-w-2xl mx-auto">
          A collection of full-stack web applications — from e-commerce platforms to content management systems — built with React, Django REST APIs, and modern frontend design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-gray-950/50 border border-gray-100 dark:border-gray-800 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.projectName}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 dark:text-gray-600">
                    <i className="fa-solid fa-image text-3xl mb-2"></i>
                    <span className="text-xs font-semibold">No Preview Image</span>
                  </div>
                )}

                {/* Quick View Overlay Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleQuickView(project)}
                    className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg hover:scale-105 transition cursor-pointer"
                  >
                    <i className="fa-solid fa-expand mr-1.5"></i> Quick View
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-[#bd69f5] transition-colors">
                  {project.projectName}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.projectAbout}
                </p>

                {/* Tech Badge */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold bg-[#bd69f5]/15 text-[#bd69f5] dark:bg-[#bd69f5]/25 px-3 py-1 rounded-full border border-[#bd69f5]/30">
                    {project.technology}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-5 sm:p-6 pt-0 flex gap-2.5 sm:gap-3">
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-0 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-[#bd69f5] to-pink-500 text-white font-bold text-[13px] sm:text-sm shadow-md hover:from-[#a855d8] hover:to-pink-600 hover:shadow-lg transition-all whitespace-nowrap"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs shrink-0"></i>
                  <span>Live Demo</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-0 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-3 sm:px-4 rounded-xl bg-gray-900 dark:bg-gray-800 text-white font-bold text-[13px] sm:text-sm hover:bg-black dark:hover:bg-gray-700 transition-all whitespace-nowrap"
                >
                  <i className="fa-brands fa-github text-sm sm:text-base shrink-0"></i>
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal Component */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};
