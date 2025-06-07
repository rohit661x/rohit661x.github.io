import About from './components/About';
import Projects from './components/Projects';
import AnimatedHeading from './components/AnimatedHeading';
import Resume from './components/Resume';
import Contact from './components/Contact';
import ScrollAnimation from './components/ScrollAnimation';
import ClientParticleBackground from './components/ClientParticleBackground';

export default function Home() {
  return (
    <>
      {/* Full-screen Introduction Section */}
      <section className="relative h-screen text-white flex items-center justify-center overflow-hidden">
        {/* Particle Background */}
        <ClientParticleBackground />

        {/* Animated Gradient Background with reduced opacity */}
        <div className="absolute inset-0 animated-gradient opacity-30">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40"></div>
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="space-y-8">
            {/* Animated Text */}
            <div className="backdrop-blur-sm p-8 transform hover:scale-105 transition-all duration-300">
              <AnimatedHeading />
              <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                Welcome to my Portfolio
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="#projects"
                className="group px-8 py-3 bg-black/20 backdrop-blur-sm text-white rounded-full font-medium 
                         hover:bg-black/30 transition-all hover:scale-105 transform
                         relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 opacity-0 
                              group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="#contact"
                className="group px-8 py-3 bg-black/20 backdrop-blur-sm text-white rounded-full font-medium 
                         hover:bg-black/30 transition-all hover:scale-105 transform
                         relative overflow-hidden"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-0 
                              group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 text-white opacity-50"
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative bg-white">
        <ScrollAnimation>
          <About />
        </ScrollAnimation>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative bg-gray-50">
        <ScrollAnimation>
          <Projects />
        </ScrollAnimation>
      </section>

      {/* Resume Section */}
      <section id="resume" className="relative bg-white">
        <ScrollAnimation>
          <Resume />
        </ScrollAnimation>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-gray-50">
        <ScrollAnimation>
          <Contact />
        </ScrollAnimation>
      </section>
    </>
  );
}
