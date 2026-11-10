import React, { useState } from 'react';
import { certificatesData } from '../../data/certificatesData';
import { CertificateModal } from '../ui/CertificateModal';

export const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenCert = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  return (
    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-10">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Certifications & <span className="text-[#bd69f5]">Credentials</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-base font-medium">
          Verified courses and technical certifications backing up my expertise.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="bg-gray-50 dark:bg-gray-800/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl dark:shadow-gray-950/60 border border-gray-200/70 dark:border-gray-700/60 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
          >
            <div>
              {/* Image Container */}
              <div
                onClick={() => handleOpenCert(cert)}
                className="relative overflow-hidden aspect-[4/3] bg-gray-100 dark:bg-gray-800/80 cursor-pointer p-3 border-b border-gray-200 dark:border-gray-700/60"
              >
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-md border border-gray-200 dark:border-gray-700/80 shadow-sm group-hover:scale-[1.02] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 rounded-md border border-gray-200 dark:border-gray-700/80">
                    <i className="fa-solid fa-certificate text-4xl mb-2 text-[#bd69f5]"></i>
                    <span className="text-xs font-semibold">Certificate Preview</span>
                  </div>
                )}

                {/* Zoom Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                  <span className="bg-white/95 dark:bg-gray-900/95 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg flex items-center gap-1.5 border border-gray-200 dark:border-gray-700">
                    <i className="fa-solid fa-magnifying-glass-plus"></i> View Full Certificate
                  </span>
                </div>
              </div>

              {/* Info Block */}
              <div className="p-6">
                <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#bd69f5]/15 text-[#bd69f5] px-2.5 sm:px-3 py-1 rounded-full mb-3 border border-[#bd69f5]/20 whitespace-nowrap">
                  <i className="fa-solid fa-award mr-1"></i> {cert.issuer}
                </span>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
                  {cert.title}
                </h4>
                {cert.issueDate && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-1.5">
                    <i className="fa-regular fa-calendar-check text-[#bd69f5]"></i> Issued: {cert.issueDate}
                  </p>
                )}
              </div>
            </div>

            {/* Footer Link */}
            {cert.credentialUrl && (
              <div className="p-6 pt-0">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold hover:bg-[#bd69f5] hover:text-white transition"
                >
                  <i className="fa-solid fa-shield-halved"></i> Verify Credential
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Certificate Modal Component */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};
