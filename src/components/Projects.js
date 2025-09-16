import data_pic from '../data_analytics.jpg';
import fraud_pic from '../fraud_detection.jpg';
import temp_pic from '../temp_prediction.jpg';
import './Projects.css'; // Create this file for specific styles
const Projects = () => {
  return (
    <section id="Projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A showcase of my recent work, demonstrating various technologies and design approaches</p>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <img src={temp_pic} alt="Temperature Prediction Model" />
            <h3 className="project-title">Temperature Prediction Model</h3>
            <p className="project-description">Built a predictive model to estimate temperature trends using historical weather data. Applied data preprocessing, feature engineering, and machine learning algorithms to achieve accurate forecasting.</p>
            <div className="project-tags">
              <span className="tag">Python</span>
              <span className="tag">Pandas</span>
              <span className="tag">NumPy</span>
              <span className="tag">Scikit-learn</span>
            </div>
            <a href="#" className="btn btn-secondary btn-small">Code <i className="fab fa-github"></i></a>
          </div>
          {/* Project 2 */}
          <div className="project-card">
            <img src={fraud_pic} alt="Fraud Detection System" />
            <h3 className="project-title">Fraud Detection System</h3>
            <p className="project-description">Implemented a classification model to detect anomalies in financial transaction datasets. Used advanced ML techniques to identify fraudulent credit card transactions with high accuracy.</p>
            <div className="project-tags">
              <span className="tag">Python</span>
              <span className="tag">Machine Learning</span>
              <span className="tag">Data Analysis</span>
              <span className="tag">Classification</span>
            </div>
            <a href="#" className="btn btn-secondary btn-small">Code <i className="fab fa-github"></i></a>
          </div>
          {/* Project 3 */}
          <div className="project-card">
            <img src={data_pic} alt="Data Analytics Portfolio" />
            <h3 className="project-title">Data Analytics Portfolio</h3>
            <p className="project-description">Comprehensive collection of data science projects showcasing skills in data cleaning, visualization, and analysis. Includes work with Python libraries and real-world datasets.</p>
            <div className="project-tags">
              <span className="tag">Python</span>
              <span className="tag">Pandas</span>
              <span className="tag">Matplotlib</span>
              <span className="tag">Data Visualization</span>
            </div>
            <a href="#" className="btn btn-secondary btn-small">Code <i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;