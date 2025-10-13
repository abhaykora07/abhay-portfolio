// in src/pages/HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ParticlesComponent from '../components/Particles';

const HomePage = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <div className="absolute inset-0 z-0">
        <ParticlesComponent />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="text-neon-blue">Abhay</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl font-light mb-8"
        >
          B.Tech in AI & Machine Learning
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          Solving problems with code, and capturing beauty through a lens.
        </motion.p>
      </div>
    </div>
  );
};

export default HomePage;