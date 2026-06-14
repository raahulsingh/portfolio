import './Certifications.css';
import ResponsiveImage from './ResponsiveImage';
import apnaDsaCert from '../images/apna-college-dsa.jpg';
import cognitiveCert from '../images/cognitive-class.jpg';
import forageCert from '../images/forage-genai.jpg';
import ibmCert from '../images/ibm-certificate.jpg';
import iitJavaCert from '../images/iit-bombay-java.jpg';
import iitPythonCert from '../images/iit-bombay-python.jpg';

const certificatesData = [
  {
    id: 1,
    image: iitJavaCert,
    title: 'Java Training',
    issuer: 'IIT Bombay (Spoken Tutorial)',
    score: '97.50%',
    details: 'Mastered Core Java, OOPs, Exception Handling, Multithreading, and File I/O.',
    link: 'https://drive.google.com/file/d/1KnovzqS6lORWvSHQiZosLCTO68Gt-mkB/view',
    category: 'Java'
  },
  {
    id: 2,
    image: apnaDsaCert,
    title: 'DSA with Java',
    issuer: 'Apna College',
    details: 'Intensive training in Data Structures and Algorithms with complex problem-solving.',
    link: 'https://drive.google.com/file/d/1ewmNa8gnH_kfh2DjX3CkOd0qo1BUiFCa/view',
    category: 'Java'
  },
  {
    id: 3,
    image: cognitiveCert,
    title: 'SQL & Relational Databases',
    issuer: 'Cognitive Class | IBM',
    details: 'Database design, normalization, and complex SQL query optimization.',
    link: 'https://courses.cognitiveclass.ai/certificates/85873af33e45492a87cbf0112cfe3b5c',
    category: 'Database'
  },
  {
    id: 4,
    image: ibmCert,
    title: 'Data Analysis with Python',
    issuer: 'IBM SkillsBuild',
    details: 'Utilized Pandas, NumPy, and Matplotlib for end-to-end data processing pipelines.',
    link: 'https://courses.yl-ptech.skillsnetwork.site/certificates/fb3e4043d2e84b6daeb148918798aaf8',
    category: 'Data Science'
  },
  {
    id: 5,
    image: iitPythonCert,
    title: 'Python 3.4.3',
    issuer: 'IIT Bombay (Spoken Tutorial)',
    details: 'Functional programming, scripting, and automation using Python fundamentals.',
    link: 'https://drive.google.com/file/d/1tIcM0bq_xdoI4jzkCcMPXXFb03ZDrirh/view',
    category: 'Python'
  },
  {
    id: 6,
    image: forageCert,
    title: 'GenAI Data Analytics',
    issuer: 'Forage (Job Simulation)',
    details: 'Leveraged Generative AI tools for advanced data insight generation.',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_WzQyReFwwxb8vk6MQ_1751629753224_completion_certificate.pdf',
    category: 'GenAI'
  }
];

const Certifications = () => {
  return (
    <section id="Certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Professional validation of my technical expertise and commitment to continuous learning.</p>
        
        <div className="certifications-grid">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-image-container">
                <ResponsiveImage
                  src={cert.image}
                  alt={`${cert.title} certificate from ${cert.issuer}`}
                  className="cert-img"
                  width={400}
                  height={250}
                  aspectRatio="16 / 10"
                  sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="cert-overlay">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-btn">
                    <i className="fas fa-search-plus" aria-hidden="true"></i> View Full
                  </a>
                </div>
                {cert.score && <div className="cert-score-badge">{cert.score}</div>}
              </div>
              <div className="cert-info">
                <span className="cert-category">{cert.category}</span>
                <h3 className="cert-name">{cert.title}</h3>
                <p className="cert-issuer"><i className="fas fa-university" aria-hidden="true"></i> {cert.issuer}</p>
                <p className="cert-desc">{cert.details}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-action-link">
                  Verify Credentials <i className="fas fa-external-link-alt" aria-hidden="true"></i>
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