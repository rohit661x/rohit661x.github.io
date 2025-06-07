"use client";

import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

const ProjectCard = ({ title, description, techStack, githubUrl, liveUrl, imageUrl }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 hover:text-black"
          >
            <FaGithub className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-black"
            >
              <FaExternalLinkAlt className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 