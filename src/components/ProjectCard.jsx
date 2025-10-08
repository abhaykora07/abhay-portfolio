import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden relative group"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-neon-blue mb-2">{project.name}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-400 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;