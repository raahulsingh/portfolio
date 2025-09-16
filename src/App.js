import './App.css'; // For general styles
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />  
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Certifications />
      <Contact />
      
      {/* You can add a footer component here */}
    </div>
  );
}

export default App;