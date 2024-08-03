import React, { useState } from 'react'
import './Navbar.css'

import logo from '../assets/images/logo.png'
import MobileNav from './MobileNav';
//import Icon from '@material-ui/core/Icon';
export default function Navbar() {
    const[openMenu,setOpenMenu]=useState(false)
    const toggelMenu=()=>{
        setOpenMenu(!openMenu)
    }
  return (
    <div>
        <MobileNav isOpen={openMenu} toggelMenu={toggelMenu}/>
      <nav className="nav-wrapper">
        <div className="nav-content">
            <img src={logo} alt="" className="logo" />
            <ul>
                <li><a className="menu-item">Home</a></li>
                <li><a  className="menu-item">Skills</a></li>
                <li><a  className="menu-item">Work Experience</a></li>
                <li><a  className="menu-item">Connnects</a></li>
                <button className="contact-btn" onClick={()=>{}}>Hire Me</button>
            </ul>
            <button className="menu-btn" onClick={toggelMenu}>
                <span class={"meterial-symbols-outlined"} style={{fontSize:"1.8rem"}}>
                    {openMenu?"+":">"}
                </span>

            </button>
        </div>
      </nav>
    </div>
  )
}
