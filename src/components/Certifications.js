
import './Certifications.css';
// Import your certificate images here
import apnaDsaCert from '../images/apna-college-dsa.jpg';
import cognitiveCert from '../images/cognitive-class.jpg';
import forageCert from '../images/forage-genai.jpg';
import ibmCert from '../images/ibm-certificate.jpg';
import iitJavaCert from '../images/iit-bombay-java.jpg';
import iitPythonCert from '../images/iit-bombay-python.jpg';

const certificatesData = [
  {
    id: 1,
    image: ibmCert, // Use the imported variable
    title: 'Data Analysis with Python — IBM SkillsBuild',
    date: 'Dec 2024',
    details: 'Applied Python libraries (Pandas, NumPy, Matplotlib) for data cleaning, analyzing, and visualization.',
    link: 'https://courses.yl-ptech.skillsnetwork.site/certificates/fb3e4043d2e84b6daeb148918798aaf8',
  },
  {
    id: 2,
    image: iitPythonCert, // Use the imported variable
    title: 'Python 3.4.3 Training — IIT Bombay (Spoken Tutorial)',
    date: 'Dec 2024',
    details: 'Learned Python fundamentals, data structures, file operations, and scripting for problem-solving and automation.',
    link: 'https://drive.google.com/file/d/1tIcM0bq_xdoI4jzkCcMPXXFb03ZDrirh/view',
  },
  {
    id: 3,
    image: cognitiveCert, // Use the imported variable
    title: 'SQL and Relational Databases 101 — Cognitive Class',
    date: 'May 2025',
    details: 'Acquired skills in database design, SQL queries, normalization, and relational database management.',
    link: 'https://courses.cognitiveclass.ai/certificates/85873af33e45492a87cbf0112cfe3b5c',
  },
  {
    id: 4,
    image: iitJavaCert, // Use the imported variable
    title: 'Java Training — IIT Bombay (Spoken Tutorial)',
    date: 'May 2025',
    details: 'Gained strong foundations in Core Java, covering OOP concepts, exception handling, multithreading, and file handling.',
    link: 'https://drive.google.com/file/d/1KnovzqS6lORWvSHQiZosLCTO68Gt-mkB/view',
  },
  {
    id: 5,
    image: forageCert, // Use the imported variable
    title: 'GenAI Powered Data Analytics Job Simulation — Forage',
    details: 'Completed a virtual internship simulation, applying Generative AI tools for analysing datasets and deriving insights.',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_WzQyReFwwxb8vk6MQ_1751629753224_completion_certificate.pdf',
  },
  {
    id: 6,
    image: apnaDsaCert, // Use the imported variable
    title: 'DSA with Java — Apna College',
    details: 'Strengthened problem-solving by implementing Data Structures and Algorithms in Java with hands-on coding challenges.',
    link: 'https://drive.google.com/file/d/1ewmNa8gnH_kfh2DjX3CkOd0qo1BUiFCa/view',
  },
];

const Certifications = () => {
  return (
    <section id="Certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">A showcase of my professional certifications</p>
        <div className="certifications-grid">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="certification-card">
              <img src={cert.image} alt={cert.title} className="cert-image" />
              <div className="cert-details">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-date">{cert.date}</p>
                <p className="cert-text">{cert.details}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                  View Certificate <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;