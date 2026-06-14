import { useState } from 'react';
import './App.css'; // For general styles
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer.js';
import BackToTop from './components/BackToTop';
import BottomNav from './components/BottomNav';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="App">
      <Navbar setActiveSection={setActiveSection} />  
      
      <main id="main-content">
        {activeSection === 'hero' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'resume' && <Resume />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'certifications' && <Certifications />}
        {activeSection === 'contact' && <Contact />}
      </main>
      
      <Footer />
      <BackToTop />
      <BottomNav activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;