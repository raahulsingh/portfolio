import './Contact.css';

const Contact = () => {
  return (
    <section id="Get In Touch" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's build something amazing together. Reach out via the form below or through my professional channels.</p>
        
        <div className="contact-flex">
          {/* Contact Form Card */}
          <div className="contact-card contact-form-card">
            <div className="card-header">
              <i className="fas fa-paper-plane"></i>
              <h3>Send Me a Message</h3>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST" id="contact-form">
              <input type="hidden" name="access_key" value="9a625448-2dd3-4932-8dc1-898b4b88b08f" />
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Project Inquiry / Collaboration" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me more about your ideas..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
          
          {/* Contact Info Card */}
          <div className="contact-card contact-info-card">
            <div className="info-section">
              <h3>Contact Details</h3>
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <span>Email Me</span>
                  <p>rahulsingh.11gts@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info-content">
                  <span>Call Me</span>
                  <p>+91 9534038515</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <span>Location</span>
                  <p>Uttarakhand, India</p>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Digital Presence</h3>
              <div className="social-grid">
                <a href="https://www.github.com/raahulsingh" target="_blank" rel="noopener noreferrer" className="social-btn github">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/rahulkumar6474/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:rahulsingh.11gts@gmail.com" className="social-btn email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            <div className="response-tag">
              <i className="fas fa-clock"></i>
              <p>Average response time: &lt; 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;