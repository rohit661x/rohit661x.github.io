'use client';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            className="animate-float"
          >
            <circle cx="20" cy="20" r="1" fill="rgba(255, 255, 255, 0.3)" className="animate-pulse" />
          </pattern>
          <pattern
            id="grid2"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
            className="animate-float-slow"
          >
            <circle cx="30" cy="30" r="1.5" fill="rgba(255, 255, 255, 0.4)" className="animate-pulse-slow" />
          </pattern>
          <pattern
            id="grid3"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
            className="animate-float-slower"
          >
            <circle cx="40" cy="40" r="2" fill="rgba(255, 255, 255, 0.5)" className="animate-pulse-slower" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#grid2)" />
        <rect width="100%" height="100%" fill="url(#grid3)" />
      </svg>
    </div>
  );
};

export default AnimatedBackground; 