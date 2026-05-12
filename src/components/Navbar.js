import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false); // Close menu on click
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          Portfolio
        </a>

        {/* Mobile Hamburger Button */}
        <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#hero" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
                <i className="fas fa-home"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#About" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
                <i className="fas fa-user"></i> About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="#Resume" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('resume'); }}>
                <i className="fas fa-file-alt"></i> Resume
              </a>
            </li>
            <li className="nav-item">
              <a href="#Projects" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>
                <i className="fas fa-code"></i> Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#Certifications" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('certifications'); }}>
                <i className="fas fa-certificate"></i> Certifications
              </a>
            </li>
            <li className="nav-item">
              <a href="#Contact" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
                <i className="fas fa-envelope"></i> Get In Touch
              </a>
            </li>
          </ul>
          
          <div className="mobile-socials">
             <a href="https://linkedin.com/in/raahulsingh" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
             <a href="https://github.com/raahulsingh" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
             <a href="mailto:contact@raahulsingh.com"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
