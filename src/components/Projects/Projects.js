import React, { useRef } from 'react'
import './Projects.css'
import { PROJECTS } from '../../utils/data'
import ProjectCard from './ProjectCard/ProjectCard'
import Slider from 'react-slick';
export default function Projects() {
    const slideRef = useRef();
   const settings={
    dots:false,
    infinite:true,
    speed:1000,
    slidesToShow:2,
    slidesToScroll:1,
    arrows:true,
    responsive:[
        {
            breakpoint:769,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            },
        },
    ],
   };
    return (
        <section className="projects-container">
            <h5>Project Make</h5>
            <div className="project-content">
                
                

                <Slider ref={slideRef} {...settings}>
                {
                    PROJECTS.map((item)=>{
                        return <ProjectCard key={item.title} details={item}  button={item.button}/>
                    })
                }
              </Slider>
            </div>
        </section>
    )
}
