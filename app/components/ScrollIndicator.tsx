"use client";

import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-purple-400 hover:text-purple-300 transition-colors"
      >
        <path
          d="M7 10L12 15L17 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};

export default ScrollIndicator; 