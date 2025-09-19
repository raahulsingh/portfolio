import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">
        <h1 className="hero-name">Hello, I'm <br /><span>Rahul Kumar</span></h1>
        <p className="hero-tagline">
          MCA Student | Aspiring Software Developer | Skilled in Java, Data Science & Backend Development
        </p>
        
        <div className="social-icons">
          <a href="https://www.github.com/raahulsingh" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/rahulkumar6474/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          {/* Replace this placeholder with your actual Twitter URL */}
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="mailto:rahulkumarydv576@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
