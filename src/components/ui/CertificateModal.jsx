import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export const CertificateModal = ({ certificate, isOpen, onClose }) => {
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

  if (!isOpen || !certificate) return null;

  const modalContent = (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-hidden animate-fadeIn"
      style={{ margin: 0 }}
    >
      {/* Outer Card Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 relative my-auto overflow-hidden"
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
          
          {/* 1. Certificate Image Showcase (At the Top) */}
          {certificate.image && (
            <div className="w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/60 p-2 flex items-center justify-center">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto max-h-[60vh] object-contain rounded-xl border border-gray-200/80 dark:border-gray-700/80 shadow-md block"
              />
            </div>
          )}

          {/* 2. Issuer Badge, Title & Issue Date (JUST BELOW THE IMAGE) */}
          <div className="space-y-2 pr-10">
            {certificate.issuer && (
              <span className="inline-block text-xs font-bold uppercase tracking-wider bg-[#bd69f5]/15 text-[#bd69f5] dark:bg-[#bd69f5]/25 px-3 py-1 rounded-full border border-[#bd69f5]/30">
                {certificate.issuer}
              </span>
            )}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {certificate.title}
            </h3>
            {certificate.issueDate && (
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1.5 pt-1">
                <i className="fa-regular fa-calendar-check text-[#bd69f5]"></i> Issued: {certificate.issueDate}
              </p>
            )}
          </div>

          {/* 3. Verification Link */}
          {certificate.credentialUrl && (
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#bd69f5] to-pink-500 text-white font-bold hover:scale-105 transition shadow-lg text-sm sm:text-base"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Verify Official Credential Link
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};


