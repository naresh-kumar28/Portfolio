import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Close on Escape key press
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  // Split technology string into array for tag rendering
  const techList = project.technology
    ? project.technology.split(',').map((t) => t.trim())
    : [];

  const modalContent = (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-hidden animate-fadeIn"
      style={{ margin: 0 }}
    >
      {/* Outer Card Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 relative my-auto overflow-hidden"
      >
        {/* Fixed Non-Scrolling Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-all shadow-md border border-gray-200 dark:border-gray-700 cursor-pointer backdrop-blur-md"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        {/* Scrollable Content Container */}
        <div className="p-6 sm:p-8 overflow-y-auto modal-scrollable-content space-y-6 flex-1">
          
          {/* 1. Modal Image Showcase (At the Top) */}
          {project.imageUrl && (
            <div className="w-full bg-gray-900/5 dark:bg-gray-950/60 rounded-2xl p-2 border border-gray-200/80 dark:border-gray-800 flex justify-center items-center overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.projectName}
                className="w-full max-h-[380px] object-contain rounded-xl shadow-md"
              />
            </div>
          )}

          {/* 2. Technology Badges & Project Name (JUST BELOW THE IMAGE) */}
          <div className="space-y-2 pr-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {project.projectName}
            </h2>
            {techList.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {techList.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-bold uppercase tracking-wider bg-[#bd69f5]/15 text-[#bd69f5] dark:bg-[#bd69f5]/25 px-3 py-1 rounded-full border border-[#bd69f5]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            
          </div>

          {/* 3. Detailed Description */}
          <div className="space-y-2 border-t border-gray-100 dark:border-gray-800 pt-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              About Project
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed whitespace-pre-line">
              {project.projectAbout}
            </p>
          </div>

          {/* 4. Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[160px] flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#bd69f5] to-pink-500 text-white font-bold hover:scale-105 transition shadow-lg text-sm sm:text-base"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[160px] flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gray-900 dark:bg-gray-800 text-white font-bold hover:bg-black dark:hover:bg-gray-700 transition shadow-md text-sm sm:text-base"
              >
                <i className="fa-brands fa-github text-lg"></i> GitHub Source
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};


