import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = ({ setActiveSection }) => {
  const roles = ["Backend Developer", "Java Expert", "Spring Boot Pro", "System Architect"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleNav = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Dynamic Background Elements */}
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-glass-card">
          <div className="hero-badge">Available for Projects</div>
          
          <h1 className="hero-main-title">
            I'm <span className="highlight">Rahul Kumar</span>
          </h1>

          <div className="typing-container">
            <span className="static-text">Specializing in</span>
            <div className="dynamic-role">
              {roles[currentRoleIndex]}
            </div>
          </div>

          <p className="hero-bio">
            Transforming complex business logic into elegant, high-performance backend systems. 
            MCA graduate focusing on <strong>Distributed Systems</strong> and <strong>Cloud-Native Java</strong>.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-glow" onClick={(e) => { e.preventDefault(); handleNav('projects'); }}>
              <span>View Projects</span>
            </a>
            <a href="#contact" className="btn-glass" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>
              <span>Contact Me</span>
            </a>
          </div>


          <div className="hero-social-strip">
            <a href="https://github.com/raahulsingh" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/rahulkumar6474/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:rahulsingh.11gts@gmail.com" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Floating Tech Stack (Visual decoration) */}
        <div className="floating-icons">
          <i className="fab fa-java tech-icon java"></i>
          <i className="fab fa-react tech-icon react"></i>
          <i className="fas fa-leaf tech-icon spring"></i>
          <i className="fab fa-docker tech-icon docker"></i>
        </div>
      </div>

      <div className="scroll-down-wrapper">
        <div className="scroll-line"></div>
        <span>EXPLORE</span>
      </div>
    </section>
  );
};

export default Hero;
