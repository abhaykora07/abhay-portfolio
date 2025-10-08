import React, { useState } from 'react'; // Import useState
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 pt-20">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-neon-blue">My Projects</h1>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
              activeFilter === 'all' ? 'bg-neon-blue text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('aiMl')}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
              activeFilter === 'aiMl' ? 'bg-neon-blue text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            AI/ML
          </button>
          <button
            onClick={() => setActiveFilter('webDev')}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
              activeFilter === 'webDev' ? 'bg-neon-blue text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Web Dev
          </button>
          <button
            onClick={() => setActiveFilter('creative')}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
              activeFilter === 'creative' ? 'bg-neon-blue text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Creative
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;