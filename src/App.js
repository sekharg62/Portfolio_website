
import { useRef } from 'react';
import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

import Hero from './components/Hero/Hero';
import Navbar from './components/MobileNav/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/WorkExperience/Experience';
function App() {
  const homeRef = useRef(null);
   const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>

      <Navbar onNavClick={scrollToSection} refs={{homeRef, skillsRef, experienceRef, projectsRef, contactRef }}/>
      <div className="container">
        <div ref={homeRef}><Hero /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><ContactMe /></div>
       
      </div>
       <Footer/>
    </>
  );
}

export default App;
