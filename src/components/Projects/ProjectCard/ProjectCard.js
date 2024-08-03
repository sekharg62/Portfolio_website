import React from 'react'
import './ProjectCard.css'
export default function ProjectCard({ details, button }) {
    //console.log(details.description[1])
    return (
        <div>
            <div className="project-card" onClick={() => window.open(button.link, '_blank')} style={{ cursor: 'pointer' }}>
                <h6>{details.title}</h6>
                <div className="duration">{details.date}</div>
                <ul>
                    {details.description.map((item) => {

                        return <li>{item}</li>
                    })}
                </ul>
               

            </div>

        </div>
    )
}
