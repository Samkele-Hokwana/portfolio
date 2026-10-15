import SkillsCard from './SkillsCard';
import SkillsData from './SkillsData';
import './SkillsStyles.css'


const Skills = () => {

  return (
    <div className='skills-container'>
      <h1 className='skills-title'>Skills</h1>      
      <div className='skills-slider'>
        <div className='skills-track'>
          { SkillsData.map((skill)=>{
            return(
              <SkillsCard 
                key={skill.id}
                name={skill.name}
                icon={skill.icon}
                category={skill.category} 
              />
            )
          })

          }
        </div>
      </div>
    </div>
  )
}

export default Skills