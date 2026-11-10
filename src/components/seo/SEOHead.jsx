import React from 'react';
import { Helmet } from 'react-helmet-async';
import { personalData } from '../../data/personalData';

export const SEOHead = ({ title, description, keywords, image, canonicalUrl }) => {
  const siteTitle = title || `${personalData.name} — ${personalData.title} | Portfolio`;
  const siteDesc = description || personalData.bio[0];
  const siteKeywords = keywords || "Naresh Dev, Naresh Kumar, Python Developer, Django Developer, React Developer, Full Stack Engineer, REST API, Portfolio";
  const siteImage = image || "https://naresh-dev.vercel.app/images/og-banner.png";
  const url = canonicalUrl || "https://naresh-dev.vercel.app";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalData.name,
    "alternateName": personalData.brandName,
    "url": url,
    "image": siteImage,
    "jobTitle": personalData.title,
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance / Full Stack Developer"
    },
    "sameAs": [
      personalData.socialLinks.linkedin,
      personalData.socialLinks.github,
      personalData.socialLinks.instagram
    ],
    "knowsAbout": [
      "Python", "Django", "React.js", "Django REST Framework", "JavaScript", "PostgreSQL", "REST APIs", "Web Development"
    ]
  };

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDesc} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content={personalData.name} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={siteImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
};
