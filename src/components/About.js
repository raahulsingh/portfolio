import profilePic from '../your-photo.jpg'; // Assuming your image is in the parent directory
import './About.css';

const About = () => {
  return (
    <section id="About Me" className="about-me-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know more about my background, skills, and what drives me as a developer</p>
        
        {/* New main container for the two-column layout */}
        <div className="about-main-content">
          {/* Left Column for the Image */}
          <div className="about-left-col">
            <img src={profilePic} alt="Rahul Kumar" className="profile-img" />
          </div>

          {/* Right Column for the Text and Skills */}
          <div className="about-right-col">
            <div className="about-text">
              <h3 className="subsection-title">Background</h3>
              <p>I am an <strong>MCA (2026)</strong> student at Uttarakhand Technical University with a deep-rooted passion for building scalable backend systems. My academic journey began with a <strong>BCA from Patna University</strong> (8.71 CGPA), where I developed a strong foundation in computer science fundamentals.</p>
              <p>During my tenure as a <strong>Data Science Intern at SkillFied Mentor</strong>, I bridged the gap between machine learning and production by building FastAPI microservices and containerizing models with <strong>Docker</strong>. This experience sharpened my skills in service decomposition and API contract design—principles I now apply to robust <strong>Spring Boot microservices</strong>.</p>
              <p>I am a certified Java developer from <strong>IIT Bombay (Score: 97.50%)</strong> and have spent significant time mastering Data Structures, Algorithms, and System Design. My goal is to leverage my expertise in Java, Spring Boot, and cloud-native technologies to contribute to high-impact enterprise applications.</p>
            </div>
          </div>
        </div> {/* Close about-main-content */}

        {/* Container for skills and interests, below the main content */}
        <div className="skills-and-interests-container">
          <div className="tech-skills-card">
            <h3 className="subsection-title">Technical Skills</h3>
            <span className="tag">Java (Core & Advanced)</span>
            <span className="tag">Spring Boot</span>
            <span className="tag">Spring Security / JPA</span>
            <span className="tag">Data Structures & Algorithms</span>
            <span className="tag">REST APIs & Microservices</span>
            <span className="tag">MySQL / MongoDB</span>
            <span className="tag">Redis & Caching</span>
            <span className="tag">Docker & Containerization</span>
            <span className="tag">GitHub Actions / CI-CD</span>
            <span className="tag">React.js</span>
            <span className="tag">JavaScript (ES6+)</span>
            <span className="tag">JUnit / Mockito</span>
          </div>
          
          <div className="tech-skills-card">
            <h3 className="subsection-title">Interests</h3>
            <span className="tag">Backend Engineering</span>
            <span className="tag">Distributed Systems</span>
            <span className="tag">API Design</span>
            <span className="tag">Cloud Computing</span>
            <span className="tag">System Design</span>
            <span className="tag">Automated Testing</span>
          </div>
        </div> {/* Close skills-and-interests-container */}

      </div>
    </section>
  );
};

export default About;