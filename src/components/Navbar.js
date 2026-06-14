import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const Navbar = ({ setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isMobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Handle keyboard on hamburger
  const handleHamburgerKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMobileMenu();
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          Portfolio
        </a>

        {/* Mobile Hamburger Button */}
        <div
          className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          onKeyDown={handleHamburgerKeyDown}
          role="button"
          tabIndex={0}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        {/* Backdrop overlay */}
        {isMobileMenuOpen && (
          <div
            className="navbar-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#hero" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
                <i className="fas fa-home" aria-hidden="true"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#About" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
                <i className="fas fa-user" aria-hidden="true"></i> About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="#Resume" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('resume'); }}>
                <i className="fas fa-file-alt" aria-hidden="true"></i> Resume
              </a>
            </li>
            <li className="nav-item">
              <a href="#Projects" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>
                <i className="fas fa-code" aria-hidden="true"></i> Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#Certifications" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('certifications'); }}>
                <i className="fas fa-certificate" aria-hidden="true"></i> Certifications
              </a>
            </li>
            <li className="nav-item">
              <a href="#Contact" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
                <i className="fas fa-envelope" aria-hidden="true"></i> Get In Touch
              </a>
            </li>
          </ul>
          
          <div className="mobile-socials">
             <a href="https://linkedin.com/in/raahulsingh" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
               <i className="fab fa-linkedin" aria-hidden="true"></i>
             </a>
             <a href="https://github.com/raahulsingh" target="_blank" rel="noreferrer" aria-label="GitHub profile">
               <i className="fab fa-github" aria-hidden="true"></i>
             </a>
             <a href="mailto:contact@raahulsingh.com" aria-label="Send email">
               <i className="fas fa-envelope" aria-hidden="true"></i>
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
