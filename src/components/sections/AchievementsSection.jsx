import React, { useState, useEffect } from 'react';
import { achievementsData } from '../../data/achievementsData';

export const AchievementsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % achievementsData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % achievementsData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + achievementsData.length) % achievementsData.length);
  };

  return (
    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl transition-colors duration-300">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Achievements & <span className="text-[#bd69f5]">Milestones</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-base font-medium">
          Moments that shaped my journey as a developer.
        </p>
      </div>

      {/* Hero Carousel */}
      <div className="relative w-full h-64 sm:h-80 md:h-[450px] lg:h-[520px] overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl ring-4 ring-white dark:ring-gray-800 bg-gray-900 group">
        {achievementsData.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover object-top rounded-2xl md:rounded-3xl group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2.5 sm:p-3.5 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 focus:outline-none hover:scale-110 shadow-lg cursor-pointer"
        >
          <i className="fa-solid fa-chevron-left text-sm sm:text-base"></i>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2.5 sm:p-3.5 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 focus:outline-none hover:scale-110 shadow-lg cursor-pointer"
        >
          <i className="fa-solid fa-chevron-right text-sm sm:text-base"></i>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex gap-2 bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
          {achievementsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index ? 'bg-[#bd69f5] w-6' : 'bg-white/50 hover:bg-white w-2.5'
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Active Slide Caption */}
      <p className="text-center text-gray-600 dark:text-gray-400 text-xs sm:text-base font-medium mt-6 sm:mt-8 flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap">
        <span>🏆</span>
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          {achievementsData[activeIndex]?.title}
        </span>
        <span className="text-gray-400 dark:text-gray-500">•</span>
        <span className="text-gray-500 dark:text-gray-400">
          {achievementsData[activeIndex]?.subtitle}
        </span>
      </p>
    </div>
  );
};
