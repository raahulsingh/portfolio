import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Portfolio
        </a>
        <ul className="nav-menu">
            <li className="nav-item">
            <a href="#" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="#About Me" className="nav-links">About Me</a>
          </li>
          <li className="nav-item">
            <a href="#Projects" className="nav-links">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#Certifications" className="nav-links">Certifications</a>
          </li>
          <li className="nav-item">
            <a href="#Contact" className="nav-links">Get In Touch</a>
          </li>
          
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
