import React from 'react';
import { motion, useInView } from 'framer-motion';

const SkillBar = ({ skillName, level }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-white text-lg font-medium">{skillName}</span>
        <span className="text-white text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-neon-blue h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;