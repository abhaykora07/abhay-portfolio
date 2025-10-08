import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-70 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-neon-blue transition-colors duration-300 hover:text-white">
          ABHAY
        </Link>
        <div className="space-x-8">
          <Link to="/about" className="text-white text-lg font-medium transition-colors duration-300 hover:text-neon-blue">
            About Me
          </Link>
          <Link to="/projects" className="text-white text-lg font-medium transition-colors duration-300 hover:text-neon-blue">
            Projects
          </Link>
          <Link to="/contact" className="text-white text-lg font-medium transition-colors duration-300 hover:text-neon-blue">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;