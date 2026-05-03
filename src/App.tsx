import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { ClientProjects } from './components/sections/ClientProjects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <ClientProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
