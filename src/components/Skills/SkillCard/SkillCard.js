import React from 'react'
import './SkillCard.css'
const SkillCard = ({title,IconUrl,isActive,onClick}) => {
  return (
    <div className={`skills-card ${isActive ? "active":" "}`} onClick={onClick} >
      <div className="skill-icon">
        <IconUrl className="img"/>
        
      </div>
      <h4>{title}</h4>

    </div>
  )
}

export default SkillCard
 