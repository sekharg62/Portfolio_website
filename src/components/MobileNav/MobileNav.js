import React from 'react';
import './MobileNav.css';
import logo from '../assets/images/logo.png';

export default function MobileNav({ isOpen, toggelMenu, onNavClick, refs }) {
  return (
    <div>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>

        <div className="toggel-menu-container">
          <img src={logo} alt="" className="logo" />
          <ul>
            <li>
              <a
                className="menu-item"
                onClick={() => {
                  onNavClick(refs.homeRef);
                  toggelMenu();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => {
                  onNavClick(refs.skillsRef);
                  toggelMenu();
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => {
                  onNavClick(refs.experienceRef);
                  toggelMenu();
                }}
              >
                Work Experience
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => {
                  onNavClick(refs.projectsRef);
                  toggelMenu();
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => {
                  onNavClick(refs.contactRef);
                  toggelMenu();
                }}
              >
                Connects
              </a>
            </li>
            <button
              className="contact-btn"
              onClick={() => {
                // You can customize what "Hire Me" does here
                toggelMenu();
              }}
            >
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
