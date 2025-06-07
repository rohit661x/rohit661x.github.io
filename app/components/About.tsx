"use client";

import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  const images = [
    "/images/about/IMG_3642.jpg",
    "/images/about/IMG_0937.jpg",
    "/images/about/IMG_4059.jpg",
    "/images/about/IMG_3385.jpg"
  ];

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return (
      <div className="relative h-[500px] w-full">
        <div className="absolute inset-0">
          <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={images[0]}
              alt="About Me"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[500px] w-full">
      {images.map((image, index) => {
        // Calculate the position in relation to the current index
        const position = (index - currentIndex + images.length) % images.length;
        
        return (
          <div
            key={index}
            className={`
              absolute inset-0 
              transition-all duration-700 ease-in-out
              ${position === 0 ? 'z-50 opacity-100 scale-100 translate-x-0' : ''}
              ${position === 1 ? 'z-40 opacity-90 scale-95 translate-x-4' : ''}
              ${position === 2 ? 'z-30 opacity-80 scale-90 translate-x-8' : ''}
              ${position === 3 ? 'z-20 opacity-70 scale-85 translate-x-12' : ''}
            `}
          >
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={image}
                alt="About Me"
                fill
                className="object-cover"
                priority={position <= 1}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
                loading="eager"
              />
            </div>
          </div>
        );
      })}
      
      {/* Navigation dots */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-50">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
              ${currentIndex === index 
                ? 'bg-gray-800 scale-125' 
                : 'bg-gray-400 hover:bg-gray-600'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto mb-4 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging finance and machine intelligence through systems modeling and technological exploration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Image Carousel */}
          <div className="relative pb-8 -ml-12">
            <ImageCarousel />
          </div>

          {/* Content */}
          <div className="space-y-6 md:pl-8">
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
                Hello! I'm passionate about modeling complex systems at the intersection of finance, AI, and technology. 
                Whether it's experimenting with data-driven strategies, exploring algorithmic trading, or researching how 
                machine learning can optimize financial decision-making, I'm focused on sharpening the tools needed to 
                thrive in a quantitative finance career.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Python', 'C++', 'SQL', 'REST APIs', 'backtrader', 'yfinance'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700">Tools & Practices</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Docker', 'AWS', 'Linux', 'Bash', 'CI/CD'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Let's Connect</h4>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/rohit661x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 transition-colors transform hover:scale-110"
                >
                  <FaGithub className="h-8 w-8" />
                </a>
                <a
                  href="https://linkedin.com/in/rohitsuryadevara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
                >
                  <FaLinkedin className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 