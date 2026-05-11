import { useState, useEffect } from 'react';
import bus_tracking from '../images/bus_tracking.png';
import bus_payment from '../images/bus_payment.png';
import bus_seats from '../images/bus_seats.png';
import bus_search from '../images/bus_search.png';
import bus_home from '../images/bus_home.png';
import './Projects.css';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    bus_tracking,
    bus_home,
    bus_search,
    bus_seats,
    bus_payment
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  // Get 4 images to display in the fixed slots
  const getDisplayImages = () => {
    const displayed = [];
    for (let i = 0; i < 4; i++) {
      displayed.push(screenshots[(currentIndex + i) % screenshots.length]);
    }
    return displayed;
  };

  return (
    <section id="Projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A deep dive into my most impactful work, solving real-world logistics and transportation challenges.</p>
        
        <div className="projects-grid">
          {/* Where Is My Bus Project */}
          <div className="project-card large">
            <div className="project-visuals-fixed">
              <div className="fixed-grid-container">
                {getDisplayImages().map((img, index) => (
                  <div key={index} className="fixed-image-wrapper" onClick={() => setSelectedImage(img)}>
                    <img src={img} alt={`Feature ${index + 1}`} className="fade-in" />
                  </div>
                ))}
              </div>
            </div>

            <div className="project-info">

              <h3 className="project-title">Where Is My Bus – Smart Transit Platform</h3>
              <p className="project-description">
                A full-stack, real-time bus tracking and management ecosystem designed to modernize public transport. 
                The platform bridges the gap between commuters, drivers, and administrators through a high-performance, 
                API-driven architecture.
              </p>
              
              <div className="project-objectives">
                <h4>Primary Objectives:</h4>
                <ul>
                  <li><strong>Real-Time Tracking:</strong> Live bus locations on interactive maps for commuters.</li>
                  <li><strong>Accurate ETA:</strong> Precision arrival times using GPS-based distance algorithms.</li>
                  <li><strong>Travel Planning:</strong> Optimized search for the next available bus between routes.</li>
                  <li><strong>Driver Updates:</strong> REST API-powered system for live coordinate streaming.</li>
                  <li><strong>Admin Management:</strong> Secure dashboard for managing routes, stops, and drivers.</li>
                  <li><strong>Scalable Backend:</strong> Designed for seamless integration with web and mobile apps.</li>
                  <li><strong>Data Analytics:</strong> Insights into route performance, delays, and congestion.</li>
                </ul>

              </div>

              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">Java</span>
                <span className="tag">Leaflet</span>
                <span className="tag">MongoDB</span>
                <span className="tag">REST API</span>
              </div>

              <div className="project-actions">
                <div className="action-group">
                  <h5>Code & Documentation</h5>
                  <div className="action-buttons">
                    <a href="https://github.com/raahulsingh/whereismybususerportal" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      GitHub Repo <i className="fab fa-github"></i>
                    </a>
                    <a href={`${process.env.PUBLIC_URL}/app-debug.apk`} download="whereismybus-tracker.apk" className="btn btn-outline">
                      Tracker App <i className="fas fa-download"></i>
                    </a>
                  </div>
                </div>
                
                <div className="action-group">
                  <h5>Live Portals</h5>
                  <div className="portal-buttons">
                    <a href="https://whereismybususerportal.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">
                      User <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="https://whereismybusagent.vercel.app/buses" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">
                      Agent <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <span className="close-button">&times;</span>
            <img src={selectedImage} alt="Enlarged screenshot" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;