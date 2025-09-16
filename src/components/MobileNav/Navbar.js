import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/images/logo.png';
import MobileNav from './MobileNav';

export default function Navbar({ onNavClick, refs }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <MobileNav isOpen={openMenu} toggelMenu={toggleMenu} onNavClick={onNavClick}
  refs={refs}/>

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src={logo} alt="" className="logo" />

          <ul>
            <li>
              <a className="menu-item" onClick={() => onNavClick(refs.homeRef)}>
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => onNavClick(refs.skillsRef)}>
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => onNavClick(refs.experienceRef)}>
                Work Experience
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => onNavClick(refs.projectsRef)}>
                Projects
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => onNavClick(refs.contactRef)}>
                Connects
              </a>
            </li>
            <button
              className="contact-btn"
              onClick={() => onNavClick(refs.contactRef)}
            >
              Hire Me
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '1.8rem' }}
            >
              {openMenu ? '+' : '>'}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}
