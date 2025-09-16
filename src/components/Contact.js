import './Contact.css'; // Create this file for specific styles

const Contact = () => {
  return (
    <section id="Contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
        
        <div className="contact-flex">
          <div className="contact-card contact-form">
            <h3>Send me a message</h3>
               <form action="https://api.web3forms.com/submit" method="POST" id="form">
               <input type="hidden" name="access_key" value="9a625448-2dd3-4932-8dc1-898b4b88b08f"></input>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" placeholder="Tell me about your project or just say hello..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          
          <div className="contact-card contact-info-block">
            <h3>Contact Information</h3>
            <ul>
              <li><i className="fas fa-envelope icon"></i> rahul.singh.11gts@gmail.com</li>
              <li><i className="fas fa-phone-alt icon"></i> +91 9534038515</li>
              <li><i className="fas fa-map-marker-alt icon"></i> Uttarakhand, India</li>
            </ul>

            <h3 className="mt-4">Connect with me</h3>
            <div className="social-links-contact">
              <a href="https://www.github.com/raahulsingh" className="btn btn-secondary" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
              <a href="https://www.linkedin.com/in/rahulkumar6474/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
              {/* <a href="#" className="btn btn-secondary" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a> */}
              {/* <a href="#" className="btn btn-secondary" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i> Email</a> */}
            </div>

            <div className="quick-response mt-4">
              <h3 className="mb-2">Quick Response</h3>
              <p>I typically respond to messages within 24 hours. For urgent inquiries, feel free to reach out via phone or LinkedIn.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;