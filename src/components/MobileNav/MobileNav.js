import React from 'react'
import './MobileNav.css'
import logo from '../assets/images/logo.png'
export default function MobileNav({ isOpen, toggelMenu }) {
    return (
        <div>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggelMenu}>
                <div className="toggel-menu-container">
                    <img src={logo} alt="" className="logo" />
                    <ul>
                        <li><a href="#" className="menu-item">Home</a></li>
                        <li><a href="#" className="menu-item">Skills</a></li>
                        <li><a href="#" className="menu-item">Work Experience</a></li>
                        <li><a href="#" className="menu-item">Connnects</a></li>
                        <button className="contact-btn" onClick={()=>{}}>
                            Hire Me
                        </button>
                    </ul>

                </div>
            </div>
        </div>
    )
}
 