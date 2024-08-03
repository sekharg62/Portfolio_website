
import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

import Hero from './components/Hero/Hero';
import Navbar from './components/MobileNav/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
function App() {
  return (
    <>

      <Navbar />
      <div className="container">
        <Hero />
        <Skills/>
        <Projects/>
        <ContactMe/>
       
      </div>
       <Footer/>
    </>
  );
}

export default App;
