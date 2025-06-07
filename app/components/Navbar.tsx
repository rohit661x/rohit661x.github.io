"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the viewport
      const viewportHeight = window.innerHeight;
      // Show navbar after scrolling past the hero section
      const shouldBeVisible = window.scrollY > viewportHeight * 0.8;
      
      if (shouldBeVisible !== visible) {
        setVisible(shouldBeVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  if (!visible) return null;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } bg-black/50 backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home */}
          <Link href="/" className="font-bold text-xl text-white hover:text-white/90 transition-colors">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-white/80 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-white hover:text-white/80 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-white hover:text-white/80 transition-colors">
              Projects
            </Link>
            <Link href="#resume" className="text-white hover:text-white/80 transition-colors">
              Resume
            </Link>
            <Link href="#contact" className="text-white hover:text-white/80 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/80 hover:bg-white/10 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`${isOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 bg-black/50 backdrop-blur-md`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors">
            Home
          </Link>
          <Link href="#about" className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors">
            About
          </Link>
          <Link href="#projects" className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors">
            Projects
          </Link>
          <Link href="#resume" className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors">
            Resume
          </Link>
          <Link href="#contact" className="block px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 