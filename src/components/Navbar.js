import './Navbar.css';

const Navbar = ({ setActiveSection }) => {
  const handleNavClick = (section) => {
    setActiveSection(section);
    // Smooth scroll to top when changing sections
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          Portfolio
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#hero" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#About" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About Me</a>
          </li>
          <li className="nav-item">
            <a href="#Resume" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('resume'); }}>Resume</a>
          </li>
          <li className="nav-item">
            <a href="#Projects" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#Certifications" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('certifications'); }}>Certifications</a>
          </li>
          <li className="nav-item">
            <a href="#Contact" className="nav-links" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Get In Touch</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

