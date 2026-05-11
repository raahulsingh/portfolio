import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">Rahul Kumar</span>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#About">About</a>
            <a href="#Resume">Resume</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/raahulsingh" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/rahulkumar6474/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:rahulsingh.11gts@gmail.com"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Rahul Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
