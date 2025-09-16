
import { EXPERIENCE } from '../../utils/data'
import './Experience.css';
import { IoLocationSharp } from 'react-icons/io5';
import { FaCalendarAlt } from 'react-icons/fa';
const Experience = () => {
  return (
   <div className="experience-section">
    <h2 className='experience-header'>Experience</h2>
      {EXPERIENCE.map((exp, index) => (
        <div key={index} className="experience-card">
            <div className='header'>
                <h3>{exp.position} - {exp.company}</h3>
            </div>
            <div className='content'>
          
          <p><strong><FaCalendarAlt /></strong> {exp.duration}</p>
          <p><strong><IoLocationSharp /></strong> {exp.location}</p>
          <ul>
            {exp.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experience