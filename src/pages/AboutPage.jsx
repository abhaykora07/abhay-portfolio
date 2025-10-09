import React from 'react';
import SkillBar from '../components/SkillBar';
import { skills } from '../data/skills';

const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 pt-20">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-neon-blue">About Me</h1>
        
        {/* Bio Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            A concise paragraph about you—not just your B.Tech stream, but also your interests in projects, photography, and other creative skills.
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* AI/ML Skills */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-neon-blue">AI/ML</h2>
            {skills.aiMl.map((skill, index) => (
              <SkillBar key={index} skillName={skill.name} level={skill.level} />
            ))}
          </div>

          {/* Web Dev Skills */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-neon-blue">Web Dev</h2>
            {skills.webDev.map((skill, index) => (
              <SkillBar key={index} skillName={skill.name} level={skill.level} />
            ))}
          </div>

          {/* Creative Skills */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-neon-blue">Creative</h2>
            {skills.creative.map((skill, index) => (
              <SkillBar key={index} skillName={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;