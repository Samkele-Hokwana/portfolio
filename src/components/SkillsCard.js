import './SkillsCardStyles.css'
import React from 'react'

const SkillsCard = (skill) => {
  return (
    <div className='skills-card-container'>
      <div className='skill-card'>
            <img src={skill.icon} alt='This is java'/>
            <h2>{skill.name}</h2>
            <p>{skill.category}</p>
          </div>
    </div>
  )
}

export default SkillsCard