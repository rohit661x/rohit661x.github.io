"use client";

import { useCallback, useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { tsParticles } from "@tsparticles/engine";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      try {
        await loadSlim(tsParticles);
        
        await tsParticles.load({
          id: "tsparticles",
          options: {
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: {
                  enable: true,
                  delay: 0.5,
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          },
        });

        setInit(true);
      } catch (error) {
        console.error("Error initializing particles:", error);
      }
    };

    initParticles();

    return () => {
      const container = tsParticles.domItem(0);
      if (container) {
        container.destroy();
      }
    };
  }, []);

  return (
    <div id="tsparticles" className="absolute inset-0 -z-10" />
  );
};

export default ParticleBackground; 