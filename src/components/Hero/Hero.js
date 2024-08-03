import React from 'react'
import './Hero.css'
import Hero_icon from '../assets/images/hero-image.png'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export default function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Think Make &
                Solve.</h2>
                <p>Hello! I'm <b>Sekhar Ghosh</b>, a passionate and dedicated Full Stack Developer currently in my final year of Computer Science Engineering. With a strong foundation in both front-end and back-end technologies, I thrive on creating seamless, efficient, and visually appealing web applications. My journey in the tech world has been driven by a love for coding, problem-solving, and continuously learning new skills.
                </p>
            </div>
            <div className="hero-img">
                <div>
                    <div className="tec-icon">

                        <FaReact className='img' />
                    </div>
                    <img   src={Hero_icon} alt="my-pic" />
                </div>
                <div>
                    <div className="tec-icon">
                    <FaHtml5 className='img'/>
                    </div>
                    <div className="tec-icon">
                    <FaCss3Alt className='img' />
                    </div>
                    <div className="tec-icon">
                    <IoLogoJavascript className='img'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
