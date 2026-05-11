import resumePdf from '../your-resume.pdf';
import './Resume.css';

const Resume = () => {
  return (
    <section id="Resume" className="resume-section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">My professional journey, academic background, and technical certifications</p>

        <div className="resume-grid">
          {/* Experience Column */}
          <div className="resume-column">
            <div className="column-header">
              <i className="fas fa-briefcase"></i>
              <h3 className="subsection-title">Experience</h3>
            </div>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="resume-title">Data Science Intern</h4>
                <p className="resume-sub-info">SkillFied Mentor | July 2025 - Aug 2025</p>
                <ul className="resume-list">
                  <li>Built predictive models for Temperature Prediction and Credit Card Fraud Detection.</li>
                  <li>Developed FastAPI microservices and containerized ML models using <strong>Docker</strong>.</li>
                  <li>Automated preprocessing pipelines, improving efficiency by 15%.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div className="resume-column">
            <div className="column-header">
              <i className="fas fa-graduation-cap"></i>
              <h3 className="subsection-title">Education</h3>
            </div>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="resume-title">Master of Computer Applications (MCA)</h4>
                <p className="resume-sub-info">Uttarakhand Technical University | 2024 - 2026</p>
                <p className="resume-text">Focusing on Backend Engineering, System Design, and Scalable Java Applications.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="resume-title">Bachelor of Computer Application (BCA)</h4>
                <p className="resume-sub-info">Patna University | 2021 - 2024</p>
                <p className="resume-text">Graduated with a stellar <strong>8.71 CGPA</strong>. Built a strong foundation in CS fundamentals.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="resume-title">Intermediate (Class XII)</h4>
                <p className="resume-sub-info">Sant Nandlal Smriti Vidya Mandir (CBSE) | 81.6%</p>
                <p className="resume-text">Focused on <strong>PCM (Physics, Chemistry, Math)</strong> and <strong>Computer Science</strong>, laying the groundwork for a career in technology.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="resume-title">Matriculation (Class X)</h4>
                <p className="resume-sub-info">Sant Nandlal Smriti Vidya Mandir (CBSE) | 85.6%</p>
                <p className="resume-text">Completed secondary education with distinction.</p>
              </div>
            </div>

          </div>

          {/* Certifications Column */}
          <div className="resume-column">
            <div className="column-header">
              <i className="fas fa-certificate"></i>
              <h3 className="subsection-title">Certifications</h3>
            </div>
            
            <div className="certification-list">
              <div className="cert-item">
                <div className="cert-badge">97.5%</div>
                <h4 className="cert-title">Java Training</h4>
                <p className="cert-info">IIT Bombay</p>
              </div>
              
              <div className="cert-item">
                <h4 className="cert-title">Java, DSA & System Design</h4>
                <p className="cert-info">Intensive Professional Training</p>
              </div>

              <div className="cert-item">
                <h4 className="cert-title">SQL & Relational Databases</h4>
                <p className="cert-info">Cognitive Class / IBM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-download-box">
          <p>Want a detailed copy of my profile?</p>
          <a href={resumePdf} className="btn btn-primary btn-large" download>
            <i className="fas fa-download"></i> Download Full PDF Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;