import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { SEOHead } from './components/seo/SEOHead';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { CertificatesSection } from './components/sections/CertificatesSection';
import { ContactSection } from './components/sections/ContactSection';

export const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <SEOHead />
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Header />
          
          <main className="flex-grow space-y-16 md:space-y-24 pb-16">
            <HeroSection />

            <section id="about" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
              <AboutSection />
            </section>

            <section id="project" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
              <ProjectsSection />
            </section>

            <section id="achievements" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 md:space-y-16 scroll-mt-24">
              <AchievementsSection />
              <CertificatesSection />
            </section>

            <section id="contact" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
              <ContactSection />
            </section>
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
