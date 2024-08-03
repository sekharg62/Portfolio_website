import React, { useState } from 'react';
import './Skills.css';
import SkillCard from './SkillCard/SkillCard';
import { SKILLS } from '../../utils/data.js';
import SkillsInfoCard from './SkillsInfoCard.css/SkillsInfoCard.js';

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectedSkill = (item) => {
   
    setSelectedSkill(item);
  };

  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            
            <SkillCard
              key={item.title}
              IconUrl={item.Icon}
              title={item.title} 
              isActive={selectedSkill.title === item.title}
              onClick={()=>handleSelectedSkill(item)}
            />
          ))}
        </div>
        
        <div className="skills-info">
          <SkillsInfoCard 
            heading={selectedSkill.title} // Use selectedSkill directly as heading
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  )
}
