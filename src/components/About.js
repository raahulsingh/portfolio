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
              <p>I'm an MCA student from Uttarakhand Technical University with a strong foundation in Java, Data Structures & Algorithms, and software development. I graduated with a 9.0 GPA in BCA from Patna University.</p>
              <p>My journey includes hands-on experience in data science through my internship at Skillfied Mentor, where I worked on temperature prediction and fraud detection projects. I'm passionate about problem-solving and applying technology to real-world challenges.</p>
              <p>I've earned certifications from IBM, IIT Bombay, and other prestigious institutions, continuously expanding my skills in Java, Python, SQL, and data analytics.</p>
            </div>
          </div>
        </div> {/* Close about-main-content */}

        {/* Container for skills and interests, below the main content */}
        <div className="skills-and-interests-container">
          <div className="tech-skills-card">
            <h3 className="subsection-title">Technical Skills</h3>
            <span className="tag">Java</span>
             <span className="tag">OOP</span>
            <span className="tag">MySQL</span>
            <span className="tag">Data Structures & Algorithms</span>
            <span className="tag">JavaScript</span>
            <span className="tag">HTML</span>
            <span className="tag">Python</span>
            <span className="tag">Git</span>
            <span className="tag">GitHub</span>
            <span className="tag">Linux</span>
          </div>
          
          <div className="tech-skills-card">
            <h3 className="subsection-title">Interests</h3>
            <span className="tag">Software Development</span>
            <span className="tag">Data Science</span>
            <span className="tag">Machine Learning</span>
            <span className="tag">Problem Solving</span>
            <span className="tag">Web Development</span>
            <span className="tag">Database Design</span>
          </div>
        </div> {/* Close skills-and-interests-container */}
      </div>
    </section>
  );
};

export default About;