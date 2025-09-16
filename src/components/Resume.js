import resumePdf from '../your-resume.pdf';
import './Resume.css'; // Create this file for specific styles
const Resume = () => {
  return (
    <section className="resume-section">
      <div className="container">
        <div className="resume-container">
          <div className="resume-column">
            <h3 className="subsection-title">Experience</h3>
            <div className="resume-item">
              <h4 className="resume-title">Data Science Intern</h4>
              <p className="resume-sub-info">Skillfied Mentor • July 2025 - August 2025 • Remote</p>
              <ul>
                <li>Completed a one-month internship focused on applied data science techniques</li>
                <li>Built a temperature prediction model using historical weather data</li>
                <li>Implemented fraud detection system for credit card transactions</li>
                <li>Enhanced skills in data preprocessing, model training, and evaluation</li>
              </ul>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">Machine Learning</span>
                <span className="tag">Data Analysis</span>
                <span className="tag">Pandas</span>
                <span className="tag">NumPy</span>
              </div>
            </div>
          </div>
          
          <div className="resume-column">
            <h3 className="subsection-title">Education</h3>
            <div className="resume-item">
              <h4 className="resume-title">Master of Computer Applications (MCA)</h4>
              <p className="resume-sub-info">Uttarakhand Technical University • 2024 - 2026 • Uttarakhand, India</p>
              <p>Specializing in Java and Software Development</p>
            </div>
            <div className="resume-item">
              <h4 className="resume-title">Bachelor of Computer Application (BCA)</h4>
              <p className="resume-sub-info">Patna University • 2021 - 2024 • Patna, India</p>
              <p>GPA: 9.0/10.0</p>
            </div>
            
          </div>
        </div>
      </div>
      <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">My professional experience, education, and career highlights</p>
        <a href={resumePdf} className="btn btn-primary" download><i className="fas fa-download"></i> Download PDF Resume</a>
    </section>
  );
};

export default Resume;