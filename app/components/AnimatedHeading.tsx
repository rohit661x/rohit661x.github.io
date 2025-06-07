"use client";

import { TypeAnimation } from 'react-type-animation';

const AnimatedHeading = () => {
  return (
    <div className="space-y-4">
      <TypeAnimation
        sequence={[
          'Hi, I\'m Rohit', 
          2000,
          'I Design and Optimize Models',
          2000,
          'I Create User Experiences',
          2000,
          'I Develop Solutions',
          2000,
        ]}
        wrapper="h1"
        speed={50}
        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
        repeat={Infinity}
        cursor={true}
      />
      <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform transition-all duration-300 hover:scale-x-150"></div>
    </div>
  );
};

export default AnimatedHeading; 