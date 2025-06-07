"use client";

import { useState, useEffect, TouchEvent } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: "Comparing Neural Networks and Classical Optimization Methods for Multi-Asset Portfolio Allocation",
    description: "A comprehensive comparison of neural network approaches versus traditional optimization methods for portfolio allocation across multiple asset classes.",
    longDescription: "This project implements and compares various neural network architectures with classical mean-variance optimization methods for portfolio allocation. It features extensive backtesting, risk analysis, and performance metrics.",
    technologies: ["Python", "TensorFlow", "NumPy", "Pandas", "Scikit-learn", "PyPortfolioOpt"],
    images: [
      "/images/projects/project1/1747948466340.jpeg",
      "/images/projects/project1/1747948713402.jpeg",
      "/images/projects/project1/1747949045740.jpeg",
      "/images/projects/project1/1747949100246.jpeg"
    ],
    github: "https://github.com/rohit661x/Comparing-Neural-Networks-and-Classical-Optimization-Methods-for-Multi-Asset-Portfolio-Allocation",
    highlights: [
      "Implemented deep learning models for portfolio optimization",
      "Compared performance against Markowitz optimization",
      "Developed custom risk metrics and constraints"
    ]
  },
  {
    title: "Monte Carlo Option Pricer in C++ (Python for Visualization)",
    description: "High-performance Monte Carlo simulation engine for options pricing, built in C++ with Python visualization tools.",
    longDescription: "A sophisticated options pricing engine that utilizes Monte Carlo methods to price various exotic options. The core computation is done in C++ for performance, while Python handles data visualization and user interface.",
    technologies: ["C++", "Python", "NumPy", "Matplotlib", "Boost", "pybind11"],
    images: [
      "/images/projects/project2/1748261569439.jpeg",
      "/images/projects/project2/1748261770413.jpeg"
    ],
    github: "https://github.com/rohit661x/Cpp-Monte-Carlo-Option-Pricer",
    highlights: [
      "Implemented parallel Monte Carlo simulations in C++",
      "Created interactive visualization tools in Python",
      "Supported multiple option types and pricing models"
    ]
  },
  {
    title: "QuantGPT (In Progress)",
    description: "An AI-powered financial analysis tool that leverages natural language processing for quantitative research and market analysis.",
    longDescription: "QuantGPT combines the power of large language models with financial data analysis to provide insights, generate trading strategies, and analyze market sentiment.",
    technologies: ["Python", "PyTorch", "Transformers", "FastAPI", "Redis", "PostgreSQL"],
    images: [
      "/images/projects/project3/5578703.jpg"
    ],
    github: "https://github.com/rohit661x/QuantGPT",
    live: "https://quantgpt-demo.com",
    highlights: [
      "Developed custom NLP models for financial text analysis",
      "Implemented real-time market sentiment analysis",
      "Created automated report generation system"
    ]
  }
];

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextImage();
    } else if (distance < -minSwipeDistance) {
      prevImage();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl group">
      <div
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images[currentImageIndex] ? (
          <Image
            src={images[currentImageIndex]}
            alt={`Project image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={100}
            loading="eager"
            onError={(e) => {
              console.error(`Error loading image: ${images[currentImageIndex]}`);
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.parentElement;
              if (fallback) {
                fallback.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-100"><span class="text-gray-400">Image not available</span></div>';
              }
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-400">Image not available</span>
          </div>
        )}

        {/* Navigation Arrows - Only show if there are multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
              aria-label="Next image"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
              {currentImageIndex + 1} / {images.length}
            </div>

            {/* Image Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Minimum swipe distance for gesture detection (in pixels)
  const minSwipeDistance = 50;

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextProject();
    }
    if (isRightSwipe) {
      prevProject();
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

  const nextProject = () => {
    if (!isTransitioning) {
      setDirection(1);
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 300);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }
  };

  const prevProject = () => {
    if (!isTransitioning) {
      setDirection(-1);
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      }, 300);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevProject();
      } else if (e.key === 'ArrowRight') {
        nextProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning]); // Only re-add listener when transition state changes

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {isClient ? (
            <>
              {/* Navigation Buttons */}
              <button
                onClick={prevProject}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full
                         text-gray-800 hover:text-gray-600 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed
                         md:block hidden"
                disabled={isTransitioning}
                aria-label="Previous project"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full
                         text-gray-800 hover:text-gray-600 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed
                         md:block hidden"
                disabled={isTransitioning}
                aria-label="Next project"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>

              {/* Project Display with Touch Events */}
              <div 
                className={`transform transition-all duration-300 ease-in-out ${
                  isTransitioning 
                    ? `opacity-0 translate-x-${direction > 0 ? '-' : ''}full` 
                    : 'opacity-100 translate-x-0'
                } touch-pan-y`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Project Image Carousel */}
                  <ImageCarousel images={projects[currentIndex].images} />

                  {/* Project Info */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">{projects[currentIndex].title}</h3>
                    <p className="text-gray-600">{projects[currentIndex].longDescription}</p>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[currentIndex].technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Key Highlights</h4>
                      <ul className="space-y-2">
                        {projects[currentIndex].highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4 pt-4">
                      <a
                        href={projects[currentIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                        View Code
                      </a>
                      {projects[currentIndex].live && (
                        <a
                          href={projects[currentIndex].live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isTransitioning) {
                        setDirection(index > currentIndex ? 1 : -1);
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setCurrentIndex(index);
                        }, 300);
                        setTimeout(() => {
                          setIsTransitioning(false);
                        }, 600);
                      }
                    }}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-300 
                      ${index === currentIndex ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'}
                      ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </>
          ) : (
            // Initial static render
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ImageCarousel images={projects[0].images} />
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">{projects[0].title}</h3>
                <p className="text-gray-600">{projects[0].longDescription}</p>
                {/* Minimal static content */}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects; 